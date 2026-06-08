import Image from "next/image";
import Link from "next/link";
import { Play, ChevronRight } from "lucide-react";

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

      {/* ── Spacer pushes card to bottom ────────────────────────── */}
      <div className="flex-1" />

      {/* ── CTA card — overlaps hero bottom border ───────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 translate-y-12">
        <div className="max-w-2xl bg-white rounded-xl p-8 sm:p-10 shadow-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gov-gold/15 border border-gov-gold/40 mb-5">
            <span className="w-2 h-2 rounded-full bg-gov-gold animate-pulse" />
            <span className="text-gov-gold text-xs font-semibold uppercase tracking-widest">
              10th Parliament · 3rd Session
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gov-primary leading-tight text-balance mb-4">
            Welcome to{" "}
            <span className="text-gov-accent">Solomon Islands Parliament</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            The supreme legislative body of the nation — representing 50
            constituencies across the islands, making laws for the peace, order,
            and good government of Solomon Islands.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/business"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gov-gold text-gov-primary font-bold rounded-lg hover:bg-gov-gold-dark transition-colors shadow-md hover:shadow-lg"
            >
              View Current Bills
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gov-primary/25 text-gov-primary font-semibold rounded-lg hover:bg-gov-primary hover:text-white transition-colors"
            >
              <Play className="w-4 h-4" />
              Watch Live
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
