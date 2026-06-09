import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, ClipboardList, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: <Users className="w-8 h-8" />,
    label: "Our Members",
    href: "/members",
    title: "50 Elected Representatives",
    body: "Get to know the Members of Parliament representing all 50 constituencies across 9 provinces and Honiara City. View profiles, constituencies, and roles.",
    cta: "Meet the Members",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    label: "Parliament Business",
    href: "/business",
    title: "Bills, Acts & Hansard",
    body: "Access current bills under debate, recently enacted legislation, Hansard transcripts, order papers, and minutes from every sitting of Parliament.",
    cta: "View Business",
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    label: "Committees at Work",
    href: "/committees",
    title: "10 Standing Committees",
    body: "Parliamentary committees scrutinise government action, examine legislation, and produce reports across all portfolios — from public finance to fisheries.",
    cta: "View Committees",
  },
];

export default function HighlightsSection() {
  return (
    <section className="relative pt-64 pb-24 sm:pb-32 bg-gray-100">
      {/* ── Decorative background ring — z-0 ─────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/traditional_ring.png"
          alt=""
          fill
          className="opacity-75 object-cover"
        />
      </div>

      {/* ── Content — z-10 ───────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-2xl p-8 flex flex-col group border border-gray-200 bg-white">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gray-100 text-gov-primary">
                {h.icon}
              </div>

              {/* Label */}
              <p className="text-xs font-bold uppercase tracking-widest mb-2 text-gov-accent">
                {h.label}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gov-primary">
                {h.title}
              </h3>

              {/* Body */}
              <p className="text-sm leading-relaxed flex-1 mb-6 text-gray-600">
                {h.body}
              </p>

              {/* CTA */}
              <Link
                href={h.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gov-accent group-hover:gap-3 transition-all duration-150"
              >
                {h.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
