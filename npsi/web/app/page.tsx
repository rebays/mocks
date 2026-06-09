import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import HighlightsSection from "@/components/HighlightsSection";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightsSection />
      <NewsGrid />

      {/* ── CTA Band ────────────────────────────────────────────── */}
      <section className="bg-gov-gold py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gov-primary mb-2">
              Find Your Member of Parliament
            </h2>
            <p className="text-gov-primary/70 text-base flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              Representing 50 constituencies across Solomon Islands
            </p>
          </div>
          <Link
            href="/members"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-gov-primary text-white font-bold rounded-xl hover:bg-gov-primary-hover transition-colors shadow-lg"
          >
            View All Members
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Session info band ───────────────────────────────────── */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { label: "Current Session", value: "3rd Session", sub: "10th Parliament of Solomon Islands" },
            { label: "Next Sitting", value: "27 May 2026", sub: "Parliament Chamber, Honiara" },
            { label: "Bills Before House", value: "5 Active Bills", sub: "Across all stages of debate" },
          ].map((item) => (
            <div key={item.label} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-gov-accent mb-2">
                {item.label}
              </p>
              <p className="text-xl font-bold text-gov-primary mb-1">{item.value}</p>
              <p className="text-gray-500 text-sm">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
