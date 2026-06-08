'use client';

import { useState } from 'react';
import { ArrowRight, Download, FileText, Mail, MapPin, Phone } from 'lucide-react';

type Form = {
  title: string;
  category: string;
  size: string;
  updated: string;
};

type OfficeHour = {
  day: string;
  hours: string;
};

const CATEGORIES = ['All', 'Individual', 'Business', 'Legislation'] as const;
type Category = (typeof CATEGORIES)[number];

const FORMS: Form[] = [
  { title: 'TIN Registration — Individuals',  category: 'Individual',  size: '0.8 MB', updated: 'Jan 2025' },
  { title: 'PAYE Employer Guide 2025',         category: 'Business',    size: '2.4 MB', updated: 'Jan 2025' },
  { title: 'Individual Income Tax Return',     category: 'Individual',  size: '1.1 MB', updated: 'Jan 2025' },
  { title: 'Business Tax Registration Form',   category: 'Business',    size: '0.6 MB', updated: 'Dec 2024' },
  { title: 'GST Return Form',                  category: 'Business',    size: '0.9 MB', updated: 'Jan 2025' },
  { title: 'Income Tax Act (Consolidated)',    category: 'Legislation', size: '4.2 MB', updated: '2023' },
  { title: 'Customs & Excise Act',             category: 'Legislation', size: '3.8 MB', updated: '2022' },
  { title: 'Stamp Duty Declaration',           category: 'Individual',  size: '0.4 MB', updated: 'Nov 2024' },
];

const OFFICE_HOURS: OfficeHour[] = [
  { day: 'Monday – Friday', hours: '8:00 AM – 4:30 PM' },
  { day: 'Saturday – Sunday', hours: 'Closed' },
  { day: 'Public Holidays', hours: 'Closed' },
];

export default function KnowledgeHub() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? FORMS : FORMS.filter((f) => f.category === active);

  return (
    <section id="forms" className="bg-wash border-b border-rule">
      <div className="max-w-screen-xl mx-auto px-5 py-16">

        <div className="mb-8">
          <p className="text-green font-semibold text-sm mb-2 tracking-wide">Resources</p>
          <h2 className="text-[1.875rem] font-bold text-navy">Forms & Publications</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          {/* Forms list */}
          <div>
            {/* Filter tabs */}
            <div className="flex items-center gap-0 border-b border-rule mb-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors ${
                    active === cat
                      ? 'border-navy text-navy'
                      : 'border-transparent text-muted hover:text-ink hover:border-rule'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="divide-y divide-rule bg-white border border-rule rounded-sm">
              {filtered.map((form) => (
                <a
                  key={form.title}
                  href="#"
                  className="group flex items-center justify-between px-5 py-4 hover:bg-wash transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <FileText
                      className="w-4 h-4 text-muted flex-shrink-0 group-hover:text-navy transition-colors"
                      strokeWidth={1.75}
                    />
                    <div className="min-w-0">
                      <p className="text-[0.9375rem] font-medium text-ink group-hover:text-navy
                        transition-colors truncate">
                        {form.title}
                      </p>
                      <p className="text-xs text-muted mt-0.5">
                        PDF · {form.size} · Updated {form.updated}
                      </p>
                    </div>
                  </div>
                  <Download
                    className="w-4 h-4 text-muted group-hover:text-navy flex-shrink-0 ml-4 transition-colors"
                    strokeWidth={1.75}
                  />
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold mt-5
                hover:gap-2.5 transition-all"
            >
              View full forms library <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">

            {/* Contact card */}
            <div className="bg-navy rounded-sm p-6">
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-3">
                Taxpayer Education Team
              </p>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                Our education team runs free seminars and is available for direct tax enquiries.
              </p>
              <div className="space-y-3">
                {[
                  { Icon: Phone,  value: '+677 22256' },
                  { Icon: Mail,   value: 'taxenquiries@ird.gov.sb' },
                ].map(({ Icon, value }) => (
                  <div key={value} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-green flex-shrink-0" strokeWidth={1.75} />
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="text-white/70 text-sm leading-snug">
                    Mendana Avenue, Honiara,<br />Solomon Islands
                  </span>
                </div>
              </div>
            </div>

            {/* Office hours card */}
            <div className="bg-white border border-rule rounded-sm p-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-muted mb-4">
                Office Hours
              </p>
              <div className="space-y-2.5">
                {OFFICE_HOURS.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="text-muted">{day}</span>
                    <span className={hours === 'Closed' ? 'text-red-500 font-medium' : 'text-ink font-medium'}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
