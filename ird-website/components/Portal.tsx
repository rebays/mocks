import { ArrowRight, BookOpen, CalendarDays, FileText, Monitor, Phone, Scale } from 'lucide-react';
import type { ComponentType } from 'react';

type Service = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    icon: Monitor,
    title: 'E-Tax Portal',
    description: 'File returns and make payments securely online. Access your tax account 24 hours a day.',
    href: '#',
    featured: true,
  },
  {
    icon: BookOpen,
    title: 'Tax Information',
    description: 'Tax rates, thresholds, and obligations for individuals and businesses in the Solomon Islands.',
    href: '#',
  },
  {
    icon: FileText,
    title: 'Forms & Publications',
    description: 'Download official IRD forms, guides, and circulars. Updated for the current tax year.',
    href: '#forms',
  },
  {
    icon: Scale,
    title: 'Legislation',
    description: 'Access the Income Tax Act, Customs Act, and related legislation currently in force.',
    href: '#',
  },
  {
    icon: CalendarDays,
    title: 'Tax Calendar',
    description: 'Key filing deadlines, payment due dates, and upcoming taxpayer education seminars.',
    href: '#',
  },
  {
    icon: Phone,
    title: 'Contact & Support',
    description: 'Reach the Taxpayer Education Team for guidance. Walk-ins welcome at all IRD offices.',
    href: '#',
  },
];

export default function Portal() {
  return (
    <section id="services" className="bg-white border-b border-rule">
      <div className="max-w-screen-xl mx-auto px-5 py-16">

        <div className="mb-10">
          <p className="text-green font-semibold text-sm mb-2 tracking-wide">Services</p>
          <h2 className="text-[1.875rem] font-bold text-navy">How Can We Help?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule">
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="group bg-white p-7 hover:bg-wash transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <s.icon className="w-5 h-5 text-navy flex-shrink-0" strokeWidth={1.75} />
                <h3 className="text-[0.9375rem] font-semibold text-ink group-hover:text-navy transition-colors">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-5">{s.description}</p>
              <span className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold
                group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
