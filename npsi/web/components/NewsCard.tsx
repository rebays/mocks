import Link from "next/link";
import { Calendar } from "lucide-react";
import type { NewsItem } from "@/lib/data";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col group">
      {/* Category + Date */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
        <span className="font-semibold text-gov-accent">{item.category}</span>
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {item.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-gray-900 text-xl leading-snug mb-4 group-hover:text-gov-accent transition-colors">
        {item.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 text-base leading-relaxed flex-1 mb-6">
        {item.excerpt}
      </p>

      {/* Read more */}
      <Link
        href={item.href}
        className="text-sm font-semibold text-gov-accent hover:underline"
      >
        Read more
      </Link>
    </article>
  );
}
