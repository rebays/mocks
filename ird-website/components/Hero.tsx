'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';

const STATS = [
  { value: '60%+', label: 'of government revenue' },
  { value: '7',    label: 'tax categories' },
  { value: '1978', label: 'established' },
  { value: '24/7', label: 'E-Tax access' },
];

const NOTICES = [
  { tag: 'Reminder', text: 'PAYE deductions are due by the 15th of each month.' },
  { tag: 'Notice',   text: 'Late filing penalties are now being applied to all overdue accounts.' },
  { tag: 'Seminar',  text: 'New seminar dates are available — check the tax calendar.' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy border-b border-white/10">

      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/72" />

      {/* Green accent stripe */}
      <div className="relative z-10 h-[3px] bg-green" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-5">

        {/* Overline */}
        <p className="pt-10 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/50 select-none">
          Solomon Islands · Ministry of Finance
        </p>

        {/* Headline */}
        <h1 className="mt-4 font-bold leading-[0.92] tracking-tight text-white
          text-[3.25rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
          Inland Revenue<br />
          <span className="text-green">Division.</span>
        </h1>

        {/* Description + CTAs | Notices */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 pb-12 border-b border-white/15">

          <div className="flex flex-col justify-end gap-8">
            <p className="text-base text-white/70 leading-relaxed max-w-md">
              The IRD collects more than 60% of the Solomon Islands Government's
              revenue — funding healthcare, education, law and order, and essential
              infrastructure for all Solomon Islanders.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white
                  font-semibold px-5 py-2.5 rounded text-sm transition-colors"
              >
                E-Tax Portal <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/30 text-white
                  hover:bg-white/10 font-semibold px-5 py-2.5 rounded text-sm transition-colors"
              >
                Our Services <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white/55 hover:text-white
                  font-medium px-1 py-2.5 text-sm transition-colors hover:underline underline-offset-2"
              >
                Tax Information
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/40 mb-3">
              Latest Notices
            </p>
            <div className="divide-y divide-white/10">
              {NOTICES.map((n) => (
                <a
                  key={n.text}
                  href="#news"
                  className="group flex items-start gap-3 py-3.5 -mx-2 px-2 rounded
                    hover:bg-white/[0.06] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green mt-[5px] flex-shrink-0" />
                  <div>
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider text-green block mb-0.5">
                      {n.tag}
                    </span>
                    <span className="text-sm text-white/70 group-hover:text-white leading-snug transition-colors">
                      {n.text}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <a
              href="#news"
              className="inline-flex items-center gap-1.5 text-white text-sm font-semibold mt-5
                hover:gap-2.5 transition-all"
            >
              All announcements <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-6 first:pl-0">
              <span className="block text-[1.875rem] font-bold text-white leading-none mb-1">
                {s.value}
              </span>
              <span className="text-xs text-white/50">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
