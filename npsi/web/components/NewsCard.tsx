import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { NewsItem } from "@/lib/data";

const categoryClass: Record<string, string> = {
  Legislation: "badge-legislation",
  Events:      "badge-events",
  Community:   "badge-community",
  Committees:  "badge-committees",
  General:     "badge-general",
  Media:       "badge-media",
};

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden border border-gray-100 group">
      {/* Coloured top accent line */}
      <div className="h-1 bg-gov-primary" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category + Date */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
              categoryClass[item.category] ?? "badge-general"
            }`}
          >
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-xs">
            <Calendar className="w-3 h-3" />
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-gov-accent transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
          {item.excerpt}
        </p>

        {/* Read more */}
        <Link
          href={item.href}
          className="inline-flex items-center gap-1.5 text-gov-accent text-sm font-semibold hover:gap-2.5 transition-all duration-150"
        >
          Read more
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
