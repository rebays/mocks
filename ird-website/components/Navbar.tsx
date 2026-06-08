'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, ExternalLink, Menu, Search, X } from 'lucide-react';

type NavLink = {
  label: string;
  href: string;
  sub?: string[];
};

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#' },
  {
    label: 'Tax Information',
    href: '#',
    sub: ['Individual Tax', 'Business Tax', 'PAYE', 'GST', 'Customs & Excise'],
  },
  { label: 'Forms & Publications', href: '#forms' },
  { label: 'Legislation', href: '#' },
  { label: 'News', href: '#news' },
  { label: 'About IRD', href: '#', sub: ['Who We Are', 'Commissioner', 'Our Offices'] },
  { label: 'Transport', href: '#' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="sticky top-0 z-50">

      {/* Government banner */}
      <div className="bg-navy h-8 flex items-center justify-center gap-3">
        <span className="text-white/20 text-xs select-none">|</span>
        <p className="flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.14em] uppercase text-white/65 select-none">
          <span>🇸🇧</span>
          Official Website of the Solomon Islands Government
        </p>
        <span className="text-white/20 text-xs select-none">|</span>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-rule h-14 flex items-center px-5 justify-between gap-6
        max-w-screen-2xl mx-auto w-full">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <img src="/sig-logo.png" alt="Solomon Islands Government" className="h-8 w-auto object-contain" />
          <span className="text-navy font-bold text-sm">Inland Revenue Division</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.sub && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 px-3 py-1.5 rounded text-[0.8125rem] font-medium
                  text-ink-2 hover:text-navy transition-colors"
              >
                {link.label}
                {link.sub && (
                  <ChevronDown className={`w-3 h-3 text-muted transition-transform duration-150
                    ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                )}
              </a>

              {link.sub && activeDropdown === link.label && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute top-full left-0 pt-1 min-w-48"
                >
                  <div className="bg-white border border-rule rounded shadow-lg py-1">
                    {link.sub.map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="block px-4 py-2 text-[0.8125rem] text-ink-2 hover:bg-wash
                          hover:text-navy transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <button aria-label="Search" className="p-2 text-muted hover:text-navy transition-colors rounded">
            <Search className="w-4 h-4" />
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 bg-green hover:bg-green-dark text-white
              text-[0.8125rem] font-semibold px-4 py-2 rounded transition-colors"
          >
            E-Tax Login <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-ink-2 hover:text-navy transition-colors rounded"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden overflow-hidden bg-white border-b border-rule"
          >
            <div className="px-4 py-3 space-y-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-ink-2 hover:text-navy
                    hover:bg-wash rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 bg-green text-white
                    text-sm font-semibold px-4 py-2.5 rounded w-full"
                >
                  E-Tax Login <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
