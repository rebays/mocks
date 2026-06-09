"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import { nav } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSection = (i: number) =>
    setOpenSection(openSection === i ? null : i);

  return (
    <>
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-gov-primary shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-shadow duration-300"
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
        <div className="flex items-center justify-between h-28 lg:h-28">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="relative h-20 w-96">
              <Image
                src="/SIG-LOGO (1).png"
                alt="National Parliament of Solomon Islands"
                fill
                priority
                className="object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul
            className="hidden lg:flex items-center gap-0.5"
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
          >
            {nav.map((section, i) => (
              <li key={i} className="group">
                <button className="px-3.5 py-2 text-white text-sm font-medium uppercase tracking-wide rounded hover:text-gov-gold transition-colors duration-150 cursor-pointer">
                  {section.label}
                </button>

                {/* Full-width dropdown panel — positioned relative to <header> */}
                <div className="absolute top-full left-0 right-0 min-h-96 bg-gov-primary shadow-2xl invisible opacity-0 group-hover:visible group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-10 overflow-hidden">
                  {/* Decorative ring — inverted to white */}
                  <div className="absolute inset-0 pointer-events-none">
                    <Image
                      src="/traditional_ring.png"
                      alt=""
                      fill
                      className="object-cover object-center opacity-[0.32]"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  <div className="relative max-w-7xl mx-auto px-6 py-10">
                    <div className="columns-3 gap-x-16">
                      {section.items.map((item, j) => (
                        <Link
                          key={j}
                          href={item.href}
                          className="block py-3.5 text-lg text-white/70 hover:text-white border-b border-white/10 hover:border-white/30 underline-offset-4 hover:underline transition-colors duration-100 break-inside-avoid"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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

      {/* ── Next sitting banner ─────────────────────────────────── */}
      <div className="relative z-20 border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">

          {/* Left: indicator + info */}
          <div className="flex items-center gap-4 min-w-0">
            {/* Pulsing dot + label */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gov-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gov-gold" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gov-gold">Next Sitting</span>
            </div>

            {/* Divider */}
            <span className="hidden sm:block h-4 w-px bg-white/20 shrink-0" />

            {/* Date + location */}
            <div className="flex items-center gap-2 text-sm min-w-0">
              <Calendar className="w-3.5 h-3.5 text-white/40 shrink-0" />
              <span className="text-white font-medium whitespace-nowrap">Tuesday, 27 June 2026</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-white/55 truncate hidden sm:inline">Parliament Chamber, Honiara</span>
            </div>
          </div>

          {/* Right: CTA */}
          <Link
            href="/business"
            className="text-[11px] font-semibold uppercase tracking-widest text-gov-gold hover:text-white transition-colors shrink-0"
          >
            View Schedule →
          </Link>

        </div>
      </div>

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

      {/* ── Page overlay — rendered in body, below header (z-40 < z-50) ── */}
      {mounted && createPortal(
        <div
          className={`fixed inset-0 pointer-events-none transition-opacity duration-300 ${
            navHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: "rgba(0,0,0,0.55)", zIndex: 40 }}
        />,
        document.body
      )}
    </>
  );
}
