type FooterCol = { heading: string; links: string[] };

const COLS: FooterCol[] = [
  {
    heading: 'About IRD',
    links: ['Who We Are', 'Commissioner', 'Our Offices', 'Annual Reports', 'Careers'],
  },
  {
    heading: 'E-Services',
    links: ['E-Tax Login', 'Register for TIN', 'File a Return', 'Make a Payment', 'Track Your Refund'],
  },
  {
    heading: 'Tax Information',
    links: ['Individual Tax', 'Business Tax', 'PAYE', 'GST', 'Customs & Excise'],
  },
  {
    heading: 'Resources',
    links: ['Forms & Publications', 'Legislation', 'Tax Calendar', 'Site Map', 'Feedback'],
  },
];

const LEGAL_LINKS = ['Privacy Policy', 'Terms of Use', 'Accessibility'];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-screen-xl mx-auto px-5 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 mb-12 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/sig-logo.png"
                alt="Solomon Islands Government"
                className="h-8 w-auto object-contain brightness-0 invert opacity-60 flex-shrink-0"
              />
              <span className="text-white font-bold text-sm">Inland Revenue Division</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Collecting the revenue that funds vital public services across the Solomon Islands.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((col) => (
              <div key={col.heading}>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/30 mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/55 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Solomon Islands Inland Revenue Division. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((item) => (
              <a key={item} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
