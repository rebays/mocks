# IRD Solomon Islands — Extracted Design System

**Scraped:** 2026-05-22T13:56:34.349Z
**Source:** http://ird.gov.sb

---

## Typography

### Fonts Detected

- `&quot`
- `verdana, Arial, Helvetica, Sans-Serif`
- `Verdana`
- `Verdana, Arial, Helvetica, sans-serif`
- `Verdana,Arial,sans-serif/*{ffDefault`
- `Arial, Helvetica, sans-serif`
- `Geneva, Arial, Helvetica, sans-serif`

### Typographic Hierarchy (inferred from headings)

- **H1:** "Solomon Islands IRD"
- **H3:** "Be in the know"
- **H4:** "Don&rsquo;t wait until the due date to pay your tax."
- **H3:** "Be in the know"
- **H4:** "Check out our calendar for our latest Seminar Programme"
- **H3:** "&nbsp;"
- **H4:** "Contact our Taxpayer Education Team"
- **H3:** "Be in the know"
- **H4:** "Due date for paying PAYE is 15th of the month"
- **H3:** "Be in the know"

---

## Color Palette

### Colors Detected in HTML/CSS

- `#0563c1`
- `#999`
- `#f5f5f5`
- `#ece9d8`
- `#ffffd5`
- `#EFEFEF`
- `#cccccc`
- `#e5e5e5`
- `#ffffff`
- `#6e6e6e`
- `#000000`
- `#658b98`
- `#666666`
- `#000`
- `#777777`
- `#E4E5DA`
- `#222222`
- `#555555`
- `#212121`
- `#363636`
- `#cd0a0a`
- `#e6e6e6`
- `#dadada`
- `#fbf9ee`
- `#fef1ec`
- `#aaaaaa`
- `#808285`
- `#3d76bb`
- `#666`
- `#86c140`
- `#b2b1b1`
- `#efefef`
- `#eee`
- `#0A246A`

### Inferred Brand Colors (from government website conventions)

Based on the Solomon Islands government branding and site structure:
- **Primary:** Government blue (likely #003087 or similar)
- **Accent:** Green/gold (Solomon Islands national colors)
- **Background:** White (#ffffff) or light gray
- **Text:** Dark gray or near-black (#222222 or #333333)

---

## Layout Patterns

### Navigation
- _Navigation structure not fully extracted_

### Page Sections Observed

- `wrapper`
- `ird_topnav`
- `ird_topnav_flag`
- `ird_topnav_1001`
- `ird_banner_top`
- `ird_Level0`
- `ird_top_features`
- `ird_feature1`
- `ird_feature1_content`
- `ird_feature2`
- `ird_feature2_content`
- `ird_titlebar1`
- `ird_titlebar2`
- `ird_mid_features`
- `ird_feature3`
- `new_business`
- `ird_feature4`
- `ird_feature4_content`
- `newsitems`
- `news_photo`

---

## CSS Files for Reference

- http://ird.gov.sb/Images/Style/Styles.css
- http://ird.gov.sb/Client/SolomonsIRD/Images/Default/Styles.css
- http://ird.gov.sb/Controls/JQuery/AutoComplete/jquery.autocomplete.css

---

## Content Architecture

### Primary Services / Sections

Based on crawled navigation and headings:
_See analysis.md for details_

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
```css
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
```

### Spacing Scale
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px, 4xl: 96px

### Border Radius
- sm: 4px, md: 8px, lg: 12px, xl: 16px, 2xl: 24px, pill: 9999px

### Shadows
- sm: 0 1px 3px rgba(0,0,0,0.08)
- md: 0 4px 12px rgba(0,0,0,0.10)
- lg: 0 8px 30px rgba(0,0,0,0.12)
- xl: 0 20px 60px rgba(0,0,0,0.15)
