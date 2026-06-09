import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col">
      {/* ── Background layers (overflow contained so card can bleed out) ── */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gov-primary/70" />
        {/* Decorative SVG grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_60%_40%] from-white/5 via-transparent to-transparent" />

        {/* Parliament crest (decorative) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-end pr-12 opacity-10">
          <svg viewBox="0 0 200 280" className="w-72 h-96 text-white fill-current">
            <rect x="80" y="0" width="40" height="180" rx="4" />
            <circle cx="100" cy="50" r="30" />
            <rect x="20" y="180" width="160" height="20" rx="4" />
            <rect x="0" y="210" width="200" height="12" rx="4" />
            <rect x="10" y="240" width="180" height="10" rx="4" />
            <rect x="20" y="260" width="160" height="10" rx="4" />
          </svg>
        </div>
      </div>

      {/* ── Welcome heading — centered over image ───────────────── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center leading-tight">
          Welcome to Solomon Islands Parliament
        </h1>
      </div>

      {/* ── CTA card — overlaps hero bottom border ───────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 translate-y-1/2">
        <div className="bg-white border border-gray-100 rounded-xl p-8 sm:p-10 shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
          {/* Menu sections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nav.slice(0, 3).map((section) => (
              <div key={section.label}>
                <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-3">
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
