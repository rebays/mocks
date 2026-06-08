import { AlertCircle, AlertTriangle, ArrowRight, Clock, Database } from 'lucide-react';
import type { ComponentType } from 'react';

type Tip = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  tag: string;
  title: string;
  body: string;
};

const TIPS: Tip[] = [
  {
    icon: Clock,
    tag: 'PAYE',
    title: 'PAYE is due by the 15th',
    body: 'PAYE deducted from employee wages must be paid to IRD by the 15th of the following month. Interest applies to late payments.',
  },
  {
    icon: AlertCircle,
    tag: 'Filing',
    title: "Don't wait until the due date",
    body: 'Avoid the rush and penalties by filing early. IRD encourages all taxpayers to lodge returns before the deadline.',
  },
  {
    icon: Database,
    tag: 'Business',
    title: 'Keep good business records',
    body: 'Accurate records help you meet your obligations and support your tax return. IRD may request records during a review or audit.',
  },
  {
    icon: AlertTriangle,
    tag: 'Penalties',
    title: 'Late filing penalties apply',
    body: 'Penalties and interest are now being applied to all overdue accounts. Contact IRD early if you are unable to pay on time.',
  },
];

export default function BeInTheKnow() {
  return (
    <section className="bg-wash border-b border-rule">
      <div className="max-w-screen-xl mx-auto px-5 py-16">

        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-green font-semibold text-sm mb-2 tracking-wide">Tax Education</p>
            <h2 className="text-[1.875rem] font-bold text-navy">Be in the Know</h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1.5 text-navy text-sm font-semibold
              hover:gap-2.5 transition-all flex-shrink-0"
          >
            Contact the education team <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="bg-white border border-rule border-l-[3px] border-l-navy rounded-sm p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <tip.icon className="w-4 h-4 text-navy flex-shrink-0" strokeWidth={1.75} />
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-green">
                  {tip.tag}
                </span>
              </div>
              <h3 className="text-[0.9375rem] font-semibold text-ink mb-2 leading-snug">{tip.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-6 inline-flex md:hidden items-center gap-1.5 text-navy text-sm font-semibold"
        >
          Contact the education team <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
}
