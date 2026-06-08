import * as cheerio from "cheerio";
import { writeFileSync } from "fs";

const BASE_URL = "https://parliament.gov.sb";

interface PageResult {
  url: string;
  title: string;
  headings: string[];
  links: { text: string; href: string }[];
  paragraphs: string[];
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; SolPaliarmentScraper/1.0)",
      },
    });
    if (!res.ok) {
      console.warn(`Failed to fetch ${url}: ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.warn(`Error fetching ${url}:`, err);
    return null;
  }
}

function parsePage(url: string, html: string): PageResult {
  const $ = cheerio.load(html);

  const title = $("title").text().trim();

  const headings: string[] = [];
  $("h1, h2, h3, h4").each((_, el) => {
    const text = $(el).text().trim();
    if (text) headings.push(`[${el.tagName.toUpperCase()}] ${text}`);
  });

  const links: { text: string; href: string }[] = [];
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    const text = $(el).text().trim();
    if (href && text) {
      const absolute = href.startsWith("http")
        ? href
        : href.startsWith("/")
        ? `${BASE_URL}${href}`
        : `${BASE_URL}/${href}`;
      links.push({ text, href: absolute });
    }
  });

  const paragraphs: string[] = [];
  $("p").each((_, el) => {
    const text = $(el).text().trim();
    if (text.length > 20) paragraphs.push(text);
  });

  return { url, title, headings, links, paragraphs };
}

function formatResults(results: PageResult[]): string {
  const lines: string[] = [
    "=".repeat(80),
    `SOLOMON ISLANDS PARLIAMENT WEBSITE SCRAPE`,
    `Scraped: ${new Date().toISOString()}`,
    `Total pages: ${results.length}`,
    "=".repeat(80),
    "",
  ];

  for (const page of results) {
    lines.push("=".repeat(80));
    lines.push(`URL:   ${page.url}`);
    lines.push(`TITLE: ${page.title}`);
    lines.push("");

    if (page.headings.length > 0) {
      lines.push("--- HEADINGS ---");
      page.headings.forEach((h) => lines.push(`  ${h}`));
      lines.push("");
    }

    if (page.paragraphs.length > 0) {
      lines.push("--- CONTENT ---");
      page.paragraphs.forEach((p) => lines.push(`  ${p}\n`));
    }

    if (page.links.length > 0) {
      lines.push("--- LINKS ---");
      page.links.forEach(({ text, href }) =>
        lines.push(`  [${text}] => ${href}`)
      );
      lines.push("");
    }
  }

  return lines.join("\n");
}

async function scrape() {
  console.log(`Scraping ${BASE_URL} ...`);

  const homeHtml = await fetchPage(BASE_URL);
  if (!homeHtml) {
    console.error("Could not fetch home page. Exiting.");
    process.exit(1);
  }

  const homePage = parsePage(BASE_URL, homeHtml);
  const results: PageResult[] = [homePage];

  // Collect internal links from home page to crawl one level deep
  const internalLinks = [
    ...new Set(
      homePage.links
        .map((l) => l.href)
        .filter(
          (href) =>
            href.startsWith(BASE_URL) &&
            !href.includes("#") &&
            !href.match(/\.(pdf|docx?|xlsx?|jpg|jpeg|png|gif|svg|zip)$/i)
        )
    ),
  ].slice(0, 20); // cap at 20 sub-pages

  console.log(`Found ${internalLinks.length} internal links to crawl.`);

  for (const link of internalLinks) {
    if (link === BASE_URL || link === `${BASE_URL}/`) continue;
    console.log(`  Fetching: ${link}`);
    const html = await fetchPage(link);
    if (html) results.push(parsePage(link, html));
    // polite delay
    await Bun.sleep(300);
  }

  const output = formatResults(results);
  writeFileSync("results.txt", output, "utf-8");
  console.log(`\nDone. Results written to results.txt (${results.length} pages scraped).`);
}

scrape();
