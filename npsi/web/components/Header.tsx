"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSection = (i: number) =>
    setOpenSection(openSection === i ? null : i);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-gov-primary transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      {/* ── Top utility bar ─────────────────────────────────────── */}
      <div className={`hidden lg:block bg-gov-primary-hover border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
        scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      }`}>
        <div className="px-6 py-1.5 text-xs text-white/60 text-center">
          🇸🇧 Official Website of the Solomon Islands Government
        </div>
      </div>

      {/* ── Main nav bar ────────────────────────────────────────── */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[72px] lg:h-14">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="relative h-10 w-56">
              <Image
                src="/logo.jpg"
                alt="National Parliament of Solomon Islands"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {nav.map((section, i) => (
              <li key={i} className="group relative">
                <button className="flex items-center gap-1 px-3.5 py-2 text-white text-sm font-medium uppercase tracking-wide rounded hover:text-gov-gold transition-colors duration-150">
                  {section.label}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown panel */}
                <div className="absolute top-full left-0 min-w-52 bg-white rounded-b-lg shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50 overflow-hidden border-t-2 border-gov-gold">
                  {section.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-800 hover:bg-gov-primary hover:text-white text-sm transition-colors duration-100 border-b border-gray-50 last:border-0"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ───────────────────────────────────────── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gov-primary border-t border-white/20 pb-4">
          {nav.map((section, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between px-5 py-3.5 text-white text-sm font-semibold uppercase tracking-wide border-b border-white/10 hover:bg-white/5 transition-colors"
                onClick={() => toggleSection(i)}
              >
                {section.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openSection === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openSection === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="bg-gov-primary-hover">
                  {section.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-7 py-2.5 text-white/75 hover:text-white text-sm border-b border-white/5 last:border-0 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
