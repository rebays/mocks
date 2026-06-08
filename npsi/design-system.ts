/*
 * Design Tokens — National Parliament of Solomon Islands
 * Source: parliament.gov.sb
 * Generated: 2026-05-21
 */

export const colors = {
  primary:         "#2d3748",   // charcoal — header / footer / nav bg
  primaryHover:    "#3d4a5c",
  accent:          "#005b96",   // government blue — links, interactive
  accentHover:     "#0056b3",
  secondary:       "#4a5568",   // dark gray — hover surfaces
  secondaryHover:  "#374151",

  surface:         "#ffffff",
  surfaceRaised:   "#f1f1f1",
  surfaceSubtle:   "#e5e5e5",

  bgGradientStart: "#e5e5e5",
  bgGradientEnd:   "#cce7ff",

  textPrimary:     "#000000",
  textOnDark:      "#ffffff",
  textMuted:       "#d1d1d1",
  textFaint:       "#666666",

  border:          "#cccccc",
  borderFaint:     "#666666",
} as const;

export const typography = {
  fontBody:    "Arial, sans-serif",
  fontDisplay: '"Roboto", Arial, sans-serif',
  fontMono:    '"SFMono-Regular", Menlo, Monaco, Consolas, "Courier New", monospace',

  textXs:   "0.75rem",
  textSm:   "0.875rem",
  textBase: "1rem",
  textMd:   "1.25rem",
  textLg:   "1.5rem",
  textXl:   "2rem",
  text2xl:  "2.5rem",

  leadingTight: 1.2,
  leadingBase:  1.5,
  leadingLoose: 1.75,

  weightNormal: 400,
  weightMedium: 500,
  weightBold:   700,
} as const;

export const spacing = {
  1:  "0.25rem",
  2:  "0.5rem",
  3:  "0.75rem",
  4:  "1rem",
  5:  "1.25rem",
  6:  "1.5rem",
  8:  "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",

  xs:  "0.25rem",
  sm:  "0.5rem",
  md:  "1rem",
  lg:  "1.5rem",
  xl:  "2.5rem",
  xxl: "4rem",
} as const;

export const radii = {
  sm:   "4px",
  md:   "5px",
  lg:   "10px",
  full: "50%",
} as const;

export const shadows = {
  card: "0 4px 8px rgba(0, 0, 0, 0.10)",
  sm:   "0 2px 4px rgba(0, 0, 0, 0.075)",
  lg:   "0 8px 24px rgba(0, 0, 0, 0.15)",
} as const;

export const breakpoints = {
  sm:  "469px",   // site nav collapses
  md:  "669px",   // hamburger menu activates
  lg:  "992px",
  xl:  "1200px",
  xxl: "1400px",
} as const;

export const tokens = { colors, typography, spacing, radii, shadows, breakpoints } as const;
export type Tokens = typeof tokens;
