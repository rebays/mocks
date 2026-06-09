import Link from "next/link";
import Image from "next/image";
import { nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gov-primary text-white">
      <div className="h-1 bg-gov-gold" />

      {/* ── Main footer body ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div className="relative h-16 w-72">
              <Image
                src="/SIG-LOGO (1).png"
                alt="National Parliament of Solomon Islands"
                fill
                className="object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              The National Parliament of Solomon Islands is the supreme legislative body of the nation, representing 50 constituencies across 9 provinces.
            </p>
            <div className="pt-2 flex flex-col gap-1.5 text-sm text-white/40">
              <span>Parliament House, Honiara</span>
              <span>Solomon Islands</span>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {nav.map((section) => (
              <div key={section.label}>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-gov-gold mb-4">
                  {section.label}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-white/45 hover:text-white transition-colors duration-150"
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

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/35">
          <p>© {new Date().getFullYear()} National Parliament of Solomon Islands</p>
          <div className="flex items-center divide-x divide-white/15">
            <Link href="/about" className="px-4 hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="/about" className="px-4 hover:text-white/70 transition-colors">Accessibility</Link>
            <Link href="/about" className="px-4 hover:text-white/70 transition-colors">Disclaimer</Link>
            <a href="https://parliament.gov.sb" target="_blank" rel="noopener noreferrer" className="px-4 hover:text-white/70 transition-colors">parliament.gov.sb</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
