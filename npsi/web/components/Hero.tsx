"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText, Tv, Users, Map, BarChart2, Landmark } from "lucide-react";
import { nav } from "@/lib/data";

const stats = [
  { value: "50",   label: "Members of Parliament", icon: Users },
  { value: "9",    label: "Provinces",              icon: Map },
  { value: "10",   label: "Committees",             icon: BarChart2 },
  { value: "10th", label: "Parliament",             icon: Landmark },
];

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col">

      {/* ── Layer 1: Background image — z-0 ──────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      {/* ── Layer 2: Gradient overlay — z-10 ────────────────────── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: [
            "linear-gradient(to right, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.4) 75%, transparent 100%)",
            "linear-gradient(to left,  rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.30) 30%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Layer 3: Wave bottom edge — z-20 ────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 sm:h-20 block">
          <path d="M0,0 Q720,90 1440,0 L1440,90 L0,90 Z" fill="#f3f4f6" />
        </svg>
      </div>

      {/* ── Layer 4: Hero content — z-30 ─────────────────────────── */}
      <div className="relative z-30 flex-1 flex flex-col justify-end w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
          Welcome to Solomon Islands Parliament
        </h1>

        {/* Tagline */}
        <p className="text-white/65 text-base sm:text-lg max-w-lg mb-7 leading-relaxed">
          The supreme legislative body of Solomon Islands — serving all 50 constituencies across 9 provinces.
        </p>

        {/* Quick-action buttons */}
        <div className="flex flex-wrap gap-3 mb-7">
          <Link
            href="/business"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gov-gold text-gov-primary text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            <FileText className="w-4 h-4 shrink-0" />
            View Today's Agenda
          </Link>
          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            <Tv className="w-4 h-4 shrink-0" />
            Watch Live
          </Link>
          <Link
            href="/members"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors"
          >
            <Users className="w-4 h-4 shrink-0" />
            Meet Your MP
          </Link>
        </div>

        {/* Stat strip */}
        <div className="flex items-center gap-8 pt-5 border-t border-white/15">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div>
                <stat.icon className="w-4 h-4 text-gov-gold mb-1.5 opacity-80" />
                <p className="text-2xl sm:text-3xl font-bold text-gov-gold leading-none">{stat.value}</p>
                <p className="text-xs text-white/50 mt-1">{stat.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="h-8 w-px bg-white/15 hidden sm:block" />
              )}
            </div>
          ))}
        </div>

      </div>

      {/* ── Layer 5: CTA card — z-30 ─────────────────────────────── */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 translate-y-1/2">
        <div className="bg-white border border-gray-100 rounded-xl p-8 sm:p-10 shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nav.slice(0, 3).map((section) => (
              <div key={section.label}>
                <h2 className="text-sm font-bold text-gray-800 tracking-widest mb-3">
                  {section.label}
                </h2>
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {section.items.slice(0, 3).map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-base text-gov-accent hover:text-gov-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
