import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewsCard from "./NewsCard";
import SectionHeading from "./SectionHeading";
import { news } from "@/lib/data";

export default function NewsGrid() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeading
            label="Latest from Parliament"
            title="News & Updates"
            subtitle="Stay informed with the latest legislative developments, committee reports, and parliamentary events."
          />
          <Link
            href="/media"
            className="shrink-0 inline-flex items-center gap-1.5 text-gov-accent font-semibold text-sm hover:gap-3 transition-all duration-150"
          >
            View all news
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
