import Link from "next/link";
import NewsCard from "./NewsCard";
import { news } from "@/lib/data";

export default function NewsGrid() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="w-24 h-px bg-gray-300" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gov-primary text-center mb-10">
          News & Updates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {news.slice(0, 4).map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/media"
            className="text-base font-semibold text-gov-accent hover:underline"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
