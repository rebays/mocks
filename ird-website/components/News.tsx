import { ArrowRight } from 'lucide-react';

type NewsItem = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

const CATEGORY_COLOR: Record<string, string> = {
  Announcement: 'text-green',
  Business:     'text-navy',
  Seminar:      'text-green',
  Reminder:     'text-red-500',
  Update:       'text-navy',
};

const FEATURED: NewsItem & { readTime: string } = {
  category: 'Announcement',
  date: 'March 2025',
  readTime: '3 min read',
  title: 'Tax Commissioner Announces Tax Agent Programme a Success',
  excerpt:
    'The Tax Agent Programme has exceeded expectations across the Solomon Islands. The Commissioner praised participants for their professionalism and commitment to voluntary compliance — a critical step toward sustainable revenue collection.',
};

const SIDE_ITEMS: NewsItem[] = [
  {
    category: 'Business',
    date: 'February 2025',
    title: 'Are You Starting a New Business?',
    excerpt: 'Register with IRD before commencing taxable activities. Online registration is available through the E-Tax portal.',
  },
  {
    category: 'Seminar',
    date: 'January 2025',
    title: 'Seminar Programme — New Dates Available',
    excerpt: 'IRD runs free taxpayer education seminars across Honiara and the provinces. Check the tax calendar for dates near you.',
  },
  {
    category: 'Reminder',
    date: 'Ongoing',
    title: 'Late Filing Penalties Now Being Applied',
    excerpt: 'All overdue accounts are now accruing penalties and interest. Arrange a payment plan with IRD if needed.',
  },
  {
    category: 'Update',
    date: 'December 2024',
    title: 'E-Tax Portal Enhancements Now Live',
    excerpt: 'Improved GST reporting and real-time TIN verification are now available through the E-Tax portal.',
  },
];

function CategoryLabel({ category }: { category: string }) {
  return (
    <span className={`text-[0.65rem] font-bold uppercase tracking-wider ${CATEGORY_COLOR[category] ?? 'text-muted'}`}>
      {category}
    </span>
  );
}

export default function News() {
  return (
    <section id="news" className="bg-white border-b border-rule">
      <div className="max-w-screen-xl mx-auto px-5 py-16">

        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-green font-semibold text-sm mb-2 tracking-wide">Latest</p>
            <h2 className="text-[1.875rem] font-bold text-navy">News & Announcements</h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1.5 text-navy text-sm font-semibold
              hover:gap-2.5 transition-all flex-shrink-0"
          >
            View all news <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-px bg-rule">

          {/* Featured */}
          <a href="#" className="group bg-white pr-0 lg:pr-10">
            <div className="h-52 bg-navy-tint border border-rule rounded-sm mb-6 flex items-end p-5">
              <CategoryLabel category={FEATURED.category} />
            </div>
            <p className="text-muted text-xs mb-2">{FEATURED.date} · {FEATURED.readTime}</p>
            <h3 className="text-xl font-bold text-ink group-hover:text-navy transition-colors leading-snug mb-3">
              {FEATURED.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">{FEATURED.excerpt}</p>
            <span className="inline-flex items-center gap-1.5 text-navy text-sm font-semibold
              group-hover:gap-2.5 transition-all">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          {/* Side list */}
          <div className="bg-white pl-0 lg:pl-10">
            <div className="divide-y divide-rule">
              {SIDE_ITEMS.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="group block py-5 first:pt-0 lg:first:pt-5 -mx-3 px-3
                    hover:bg-wash rounded-sm transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CategoryLabel category={item.category} />
                    <span className="text-muted text-[0.7rem]">{item.date}</span>
                  </div>
                  <h4 className="text-[0.9375rem] font-semibold text-ink group-hover:text-navy
                    transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted leading-snug line-clamp-2">{item.excerpt}</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
