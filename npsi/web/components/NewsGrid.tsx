import Link from "next/link";
import NewsCard from "./NewsCard";
import SectionHeading from "./SectionHeading";
import { news } from "@/lib/data";

export default function NewsGrid() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <SectionHeading label="Latest from Parliament" title="News & Updates" />
          <Link
            href="/media"
            className="shrink-0 text-sm font-semibold text-gov-accent hover:underline"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {news.slice(0, 4).map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
