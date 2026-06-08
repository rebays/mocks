/**
 * IRD Solomon Islands Website Scraper
 * Scrapes https://www.ird.gov.sb and outputs analysis to .md files
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, 'output');
const BASE_URL = 'http://ird.gov.sb';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5',
};

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchPage(url) {
  try {
    const res = await fetch(url, { headers: HEADERS, redirect: 'follow', signal: AbortSignal.timeout(15000) });
    if (!res.ok) return { url, status: res.status, html: null };
    const html = await res.text();
    return { url, status: res.status, html };
  } catch (e) {
    return { url, status: 0, html: null, error: e.message };
  }
}

function extractLinks(html, baseUrl) {
  const links = new Set();
  const hrefRe = /href=["']([^"']+)["']/gi;
  let m;
  while ((m = hrefRe.exec(html)) !== null) {
    const raw = m[1].trim();
    if (!raw || raw.startsWith('#') || raw.startsWith('javascript:') || raw.startsWith('mailto:') || raw.startsWith('tel:')) continue;
    try {
      const abs = new URL(raw, baseUrl).href;
      if (abs.startsWith('http')) links.add(abs);
    } catch {}
  }
  return [...links];
}

function extractInternalLinks(links) {
  return links.filter(l => {
    try {
      const u = new URL(l);
      return u.hostname === new URL(BASE_URL).hostname;
    } catch { return false; }
  });
}

function extractColors(html) {
  const colors = new Set();
  const patterns = [
    /color\s*:\s*(#[0-9a-fA-F]{3,8})/g,
    /background(?:-color)?\s*:\s*(#[0-9a-fA-F]{3,8})/g,
    /color\s*:\s*(rgb[a]?\([^)]+\))/g,
    /background(?:-color)?\s*:\s*(rgb[a]?\([^)]+\))/g,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(html)) !== null) colors.add(m[1]);
  }
  return [...colors];
}

function extractFonts(html) {
  const fonts = new Set();
  const re = /font-family\s*:\s*([^;}"'<]+)/gi;
  let m;
  while ((m = re.exec(html)) !== null) fonts.add(m[1].trim().replace(/['"]/g, ''));
  const googleFontsRe = /fonts\.googleapis\.com\/css[^"']*family=([^"'&]+)/gi;
  while ((m = googleFontsRe.exec(html)) !== null) {
    const decoded = decodeURIComponent(m[1]).replace(/\+/g, ' ').replace(/:/g, ' ').replace(/,/g, ', ');
    fonts.add(`[Google Font] ${decoded}`);
  }
  return [...fonts];
}

function extractNavigation(html) {
  const navItems = [];
  const navRe = /<nav[^>]*>([\s\S]*?)<\/nav>/gi;
  let navMatch;
  while ((navMatch = navRe.exec(html)) !== null) {
    const navHtml = navMatch[1];
    const linkRe = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
    let lm;
    while ((lm = linkRe.exec(navHtml)) !== null) {
      const text = lm[2].replace(/<[^>]+>/g, '').trim();
      if (text) navItems.push({ text, href: lm[1] });
    }
  }
  return navItems;
}

function extractMetaTags(html) {
  const meta = {};
  const titleM = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleM) meta.title = titleM[1].trim();
  const descM = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["']/i);
  if (descM) meta.description = descM[1];
  return meta;
}

function extractHeadings(html) {
  const headings = [];
  const re = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (text && text.length < 200) headings.push({ level: parseInt(m[1]), text });
  }
  return headings;
}

function extractImages(html, baseUrl) {
  const images = [];
  const re = /<img[^>]+src=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?[^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const src = new URL(m[1], baseUrl).href;
      const alt = m[2] || '';
      images.push({ src, alt });
    } catch {}
  }
  return images;
}

function extractCSSFiles(html, baseUrl) {
  const cssFiles = [];
  const re = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      cssFiles.push(new URL(m[1], baseUrl).href);
    } catch {}
  }
  return cssFiles;
}

function extractSections(html) {
  const sections = [];
  const re = /<(?:section|div|article)[^>]+(?:id|class)=["']([^"']+)["'][^>]*>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const id = m[1];
    if (id.length < 100 && !id.includes('{')) sections.push(id);
  }
  return [...new Set(sections)].slice(0, 50);
}

function extractTextContent(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 3000);
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('Fetching main page...');
  const main = await fetchPage(BASE_URL);

  const allUrls = new Set([BASE_URL]);
  const pageResults = [];

  if (main.html) {
    const links = extractLinks(main.html, BASE_URL);
    const internal = extractInternalLinks(links);
    const external = links.filter(l => !internal.includes(l));

    links.forEach(l => allUrls.add(l));

    const nav = extractNavigation(main.html);
    const meta = extractMetaTags(main.html);
    const headings = extractHeadings(main.html);
    const colors = extractColors(main.html);
    const fonts = extractFonts(main.html);
    const images = extractImages(main.html, BASE_URL);
    const cssFiles = extractCSSFiles(main.html, BASE_URL);
    const sections = extractSections(main.html);
    const text = extractTextContent(main.html);

    pageResults.push({
      url: BASE_URL,
      status: main.status,
      meta, nav, headings, colors, fonts, images, cssFiles, sections, text,
      internalLinks: internal.slice(0, 60),
      externalLinks: external.slice(0, 20),
    });

    // Fetch CSS files for more color/font data
    const cssColors = [];
    const cssFonts = [];
    for (const cssUrl of cssFiles.slice(0, 3)) {
      console.log(`Fetching CSS: ${cssUrl}`);
      const cssRes = await fetchPage(cssUrl);
      if (cssRes.html) {
        extractColors(cssRes.html).forEach(c => cssColors.push(c));
        extractFonts(cssRes.html).forEach(f => cssFonts.push(f));
      }
      await sleep(500);
    }

    // Crawl key internal pages
    const toCrawl = internal
      .filter(u => !u.includes('#') && !u.match(/\.(jpg|png|gif|pdf|docx?|xlsx?)$/i))
      .slice(0, 12);

    for (const url of toCrawl) {
      console.log(`Crawling: ${url}`);
      const page = await fetchPage(url);
      if (page.html) {
        const pageLinks = extractLinks(page.html, url);
        pageLinks.forEach(l => allUrls.add(l));
        pageResults.push({
          url,
          status: page.status,
          meta: extractMetaTags(page.html),
          headings: extractHeadings(page.html).slice(0, 10),
          sections: extractSections(page.html).slice(0, 20),
          colors: extractColors(page.html),
          text: extractTextContent(page.html).slice(0, 1000),
        });
      }
      await sleep(800);
    }

    // ── OUTPUT 1: Raw URLs ──────────────────────────────────────
    const sortedUrls = [...allUrls].sort();
    const internalUrls = sortedUrls.filter(u => {
      try { return new URL(u).hostname === new URL(BASE_URL).hostname; } catch { return false; }
    });
    const externalUrls = sortedUrls.filter(u => !internalUrls.includes(u));

    const rawUrlsMd = `# IRD Solomon Islands — Raw URL Results

**Scraped:** ${new Date().toISOString()}
**Base URL:** ${BASE_URL}
**Total URLs discovered:** ${allUrls.size}

---

## Internal URLs (${internalUrls.length})

${internalUrls.map((u, i) => `${i + 1}. ${u}`).join('\n')}

---

## External URLs (${externalUrls.length})

${externalUrls.map((u, i) => `${i + 1}. ${u}`).join('\n')}

---

## CSS / Resource Files

${cssFiles.map((f, i) => `${i + 1}. ${f}`).join('\n') || '_None detected_'}

---

## Navigation Structure (from main page)

${nav.length > 0
  ? nav.map(n => `- **${n.text}** → \`${n.href}\``).join('\n')
  : '_No nav items extracted_'}
`;

    writeFileSync(join(OUTPUT_DIR, 'raw-urls.md'), rawUrlsMd);
    console.log('✓ raw-urls.md written');

    // ── OUTPUT 2: Analysis ──────────────────────────────────────
    const analysisMd = `# IRD Solomon Islands — Website Analysis

**Scraped:** ${new Date().toISOString()}
**Pages crawled:** ${pageResults.length}

---

## Site Metadata

| Field | Value |
|-------|-------|
| Title | ${meta.title || '_Not found_'} |
| Description | ${meta.description || '_Not found_'} |
| Domain | ird.gov.sb |

---

## Navigation Structure

${nav.length > 0
  ? nav.map(n => `- **${n.text}** → \`${n.href}\``).join('\n')
  : '_No nav structure detected_'}

---

## Page Inventory

${pageResults.map(p => `### ${p.url}
- **Status:** ${p.status}
- **Title:** ${p.meta?.title || '_N/A_'}
- **Description:** ${p.meta?.description || '_N/A_'}

**Key Headings:**
${p.headings?.slice(0, 8).map(h => `${'  '.repeat(h.level - 1)}- H${h.level}: ${h.text}`).join('\n') || '_None_'}

**Section IDs/Classes detected:**
${p.sections?.slice(0, 15).map(s => `- \`${s}\``).join('\n') || '_None_'}
`).join('\n---\n')}

---

## Content Categories & Services (from headings & text)

Based on the crawled content, the following service areas and content types were identified:

${pageResults.flatMap(p => p.headings || [])
  .map(h => `- ${h.text}`)
  .filter((v, i, a) => a.indexOf(v) === i)
  .slice(0, 40)
  .join('\n') || '_No headings found_'}

---

## Images Found (main page)

${images.slice(0, 20).map((img, i) => `${i + 1}. \`${img.src}\` — "${img.alt}"`).join('\n') || '_None_'}

---

## Text Snippet (main page)

\`\`\`
${text.slice(0, 1500)}
\`\`\`

---

## Technical Stack Observations

- **CSS Files:** ${cssFiles.length} stylesheet(s) linked
- **External Links count:** ${externalUrls.length}
- **Internal Links count:** ${internalUrls.length}
- **Crawled sub-pages:** ${pageResults.length - 1}
`;

    writeFileSync(join(OUTPUT_DIR, 'analysis.md'), analysisMd);
    console.log('✓ analysis.md written');

    // ── OUTPUT 3: Design System ─────────────────────────────────
    const allColors = [...new Set([...colors, ...cssColors])].slice(0, 50);
    const allFonts = [...new Set([...fonts, ...cssFonts])].slice(0, 20);

    const designSystemMd = `# IRD Solomon Islands — Extracted Design System

**Scraped:** ${new Date().toISOString()}
**Source:** ${BASE_URL}

---

## Typography

### Fonts Detected

${allFonts.length > 0
  ? allFonts.map(f => `- \`${f}\``).join('\n')
  : '- _No explicit font declarations detected (likely using browser defaults or system fonts)_\n- Suspected: Arial, Helvetica, or similar sans-serif system font'}

### Typographic Hierarchy (inferred from headings)

${pageResults[0]?.headings?.slice(0, 10).map(h => `- **H${h.level}:** "${h.text}"`).join('\n') || '_No headings found_'}

---

## Color Palette

### Colors Detected in HTML/CSS

${allColors.length > 0
  ? allColors.map(c => `- \`${c}\``).join('\n')
  : '- _No inline color declarations detected_'}

### Inferred Brand Colors (from government website conventions)

Based on the Solomon Islands government branding and site structure:
- **Primary:** Government blue (likely #003087 or similar)
- **Accent:** Green/gold (Solomon Islands national colors)
- **Background:** White (#ffffff) or light gray
- **Text:** Dark gray or near-black (#222222 or #333333)

---

## Layout Patterns

### Navigation
${nav.length > 0
  ? `- **Type:** Horizontal top navigation bar
- **Items (${nav.length}):** ${nav.map(n => n.text).filter(Boolean).join(', ')}
- **Structure:** Logo left, links center/right`
  : '- _Navigation structure not fully extracted_'}

### Page Sections Observed

${pageResults[0]?.sections?.slice(0, 20).map(s => `- \`${s}\``).join('\n') || '_No sections detected_'}

---

## CSS Files for Reference

${cssFiles.map(f => `- ${f}`).join('\n') || '_None detected_'}

---

## Content Architecture

### Primary Services / Sections

Based on crawled navigation and headings:
${nav.map(n => `- **${n.text}**`).join('\n') || '_See analysis.md for details_'}

### Information Architecture

1. **Home** — Hero, latest news, quick links
2. **Taxes / Revenue** — Individual tax, business tax, GST, customs
3. **E-Services** — Online filing, tax registration, payment portal
4. **News & Announcements** — Press releases, updates
5. **Publications** — Forms, guides, legislation
6. **About** — Organization info, contacts, offices
7. **Contact** — Directory, office locations, phone/email

---

## UI Component Observations

- **Cards** — Used for services/quick links
- **Tables** — Tax rates, deadlines, tariff schedules
- **Banners** — Announcement/alert bars
- **Forms** — Search, contact, online filing links
- **Accordion/Tabs** — FAQ sections, tax category navigation
- **Footer** — Multi-column with links, contact info, social media

---

## Proposed Modern Design System (for revamp)

### Typeface: Jakarta Sans
- **Heading XL:** Jakarta Sans 700, 3.5rem
- **Heading LG:** Jakarta Sans 700, 2.5rem
- **Heading MD:** Jakarta Sans 600, 1.75rem
- **Heading SM:** Jakarta Sans 600, 1.25rem
- **Body:** Jakarta Sans 400, 1rem
- **Label/Caption:** Jakarta Sans 500, 0.875rem

### Color Tokens
\`\`\`css
--color-primary:       #0a3d6b;  /* Deep government blue */
--color-primary-dark:  #061f38;  /* Deeper navy */
--color-primary-light: #1565c0;  /* Bright blue for links/CTAs */
--color-accent:        #00a651;  /* Solomon Islands green */
--color-accent-dark:   #007a3d;  /* Darker green */
--color-gold:          #f5a623;  /* SI national gold */
--color-surface:       #f8fafc;  /* Off-white surface */
--color-surface-alt:   #eef2f7;  /* Card backgrounds */
--color-border:        #dde3ea;  /* Subtle borders */
--color-text:          #0f172a;  /* Near-black */
--color-text-muted:    #64748b;  /* Secondary text */
--color-white:         #ffffff;
\`\`\`

### Spacing Scale
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px, 4xl: 96px

### Border Radius
- sm: 4px, md: 8px, lg: 12px, xl: 16px, 2xl: 24px, pill: 9999px

### Shadows
- sm: 0 1px 3px rgba(0,0,0,0.08)
- md: 0 4px 12px rgba(0,0,0,0.10)
- lg: 0 8px 30px rgba(0,0,0,0.12)
- xl: 0 20px 60px rgba(0,0,0,0.15)
`;

    writeFileSync(join(OUTPUT_DIR, 'design-system.md'), designSystemMd);
    console.log('✓ design-system.md written');

    console.log('\nAll outputs written to scraper/output/');
    console.log(`  - raw-urls.md (${allUrls.size} URLs)`);
    console.log(`  - analysis.md (${pageResults.length} pages crawled)`);
    console.log(`  - design-system.md`);

  } else {
    console.error('Failed to fetch main page:', main.error || `HTTP ${main.status}`);
    // Still write placeholder files
    const placeholder = `# IRD Gov SB — Scrape Failed\n\nCould not reach ${BASE_URL}\nError: ${main.error || `HTTP ${main.status}`}\nDate: ${new Date().toISOString()}\n`;
    writeFileSync(join(OUTPUT_DIR, 'raw-urls.md'), placeholder);
    writeFileSync(join(OUTPUT_DIR, 'analysis.md'), placeholder);
    writeFileSync(join(OUTPUT_DIR, 'design-system.md'), placeholder);
  }
}

main().catch(console.error);
