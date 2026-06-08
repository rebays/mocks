import Link from "next/link";
import { Play, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center hero-gradient overflow-hidden">
      {/* ── Decorative SVG pattern overlay ──────────────────────── */}
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

      {/* ── Radial glow ─────────────────────────────────────────── */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_60%_40%] from-white/5 via-transparent to-transparent" />

      {/* ── Parliament crest shape (decorative) ─────────────────── */}
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

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gov-gold/20 border border-gov-gold/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-gov-gold animate-pulse" />
            <span className="text-gov-gold text-xs font-semibold uppercase tracking-widest">
              10th Parliament · 3rd Session
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
            National Parliament of{" "}
            <span className="text-gov-gold">Solomon Islands</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            The supreme legislative body of the nation — representing 50
            constituencies across the islands, making laws for the peace, order,
            and good government of Solomon Islands.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gov-gold text-gov-primary font-bold rounded-lg hover:bg-gov-gold-dark transition-colors shadow-lg hover:shadow-xl"
            >
              View Current Bills
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-colors"
            >
              <Play className="w-4 h-4 fill-white" />
              Watch Live
            </Link>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
