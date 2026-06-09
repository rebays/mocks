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
    dark: true,
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    label: "Parliament Business",
    href: "/business",
    title: "Bills, Acts & Hansard",
    body: "Access current bills under debate, recently enacted legislation, Hansard transcripts, order papers, and minutes from every sitting of Parliament.",
    cta: "View Business",
    dark: false,
  },
  {
    icon: <ClipboardList className="w-8 h-8" />,
    label: "Committees at Work",
    href: "/committees",
    title: "10 Standing Committees",
    body: "Parliamentary committees scrutinise government action, examine legislation, and produce reports across all portfolios — from public finance to fisheries.",
    cta: "View Committees",
    dark: true,
  },
];

export default function HighlightsSection() {
  return (
    <section className="pt-28 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div
              key={h.label}
              className={`rounded-2xl p-8 flex flex-col group ${
                h.dark
                  ? "bg-gov-primary text-white"
                  : "bg-gray-50 border border-gray-100 text-gray-900"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  h.dark ? "bg-white/10 text-gov-gold" : "bg-gov-primary text-white"
                }`}
              >
                {h.icon}
              </div>

              {/* Label */}
              <p
                className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                  h.dark ? "text-gov-gold" : "text-gov-accent"
                }`}
              >
                {h.label}
              </p>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-3 ${
                  h.dark ? "text-white" : "text-gov-primary"
                }`}
              >
                {h.title}
              </h3>

              {/* Body */}
              <p
                className={`text-sm leading-relaxed flex-1 mb-6 ${
                  h.dark ? "text-white/70" : "text-gray-600"
                }`}
              >
                {h.body}
              </p>

              {/* CTA */}
              <Link
                href={h.href}
                className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-150 ${
                  h.dark ? "text-gov-gold" : "text-gov-accent"
                }`}
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
