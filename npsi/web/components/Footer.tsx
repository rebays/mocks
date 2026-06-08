import Link from "next/link";

const cols = [
  {
    heading: "About",
    links: [
      { label: "About Parliament", href: "/about" },
      { label: "Standing Orders", href: "/about" },
      { label: "Speaker's Office", href: "/about" },
      { label: "Corporate Services", href: "/about" },
      { label: "Departments", href: "/about" },
      { label: "Vacancies", href: "/about" },
      { label: "Contact Us", href: "/about" },
    ],
  },
  {
    heading: "Members & Committees",
    links: [
      { label: "Current Members", href: "/members" },
      { label: "Past Members", href: "/members" },
      { label: "Committees Overview", href: "/committees" },
      { label: "Chairpersons", href: "/committees" },
      { label: "Committee Reports", href: "/committees" },
    ],
  },
  {
    heading: "Parliament Business",
    links: [
      { label: "Acts", href: "/business" },
      { label: "Bills", href: "/business" },
      { label: "Hansard", href: "/business" },
      { label: "Order Papers", href: "/business" },
      { label: "Minutes", href: "/business" },
      { label: "Business Overview", href: "/business" },
    ],
  },
  {
    heading: "Media & Connect",
    links: [
      { label: "Press Releases", href: "/media" },
      { label: "Photo Gallery", href: "/media" },
      { label: "Video Gallery", href: "/media" },
      { label: "Watch Live", href: "/media" },
      { label: "parliament.gov.sb", href: "https://parliament.gov.sb" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gov-primary text-white">
      {/* ── Gold top border ──────────────────────────────────────── */}
      <div className="h-1 bg-gov-gold" />

      {/* ── Link columns ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {cols.map((col) => (
          <div key={col.heading}>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              {col.heading}
            </h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Divider ──────────────────────────────────────────────── */}
      <div className="border-t border-white/10 max-w-7xl mx-auto" />

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} National Parliament of Solomon Islands. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/about" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            Accessibility
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
