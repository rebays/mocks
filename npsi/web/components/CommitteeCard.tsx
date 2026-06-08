import Link from "next/link";
import { FileText, Users, ArrowRight } from "lucide-react";
import type { Committee } from "@/lib/data";

export default function CommitteeCard({ committee }: { committee: Committee }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6 flex flex-col group">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gov-primary flex items-center justify-center shrink-0">
          <Users className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-bold text-gov-primary text-base leading-snug group-hover:text-gov-accent transition-colors">
          {committee.name}
        </h3>
      </div>

      {/* Chair */}
      <p className="text-xs text-gray-500 mb-1">
        Chairperson:{" "}
        <span className="text-gray-800 font-semibold">{committee.chair}</span>
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Members: <span className="text-gray-800 font-semibold">{committee.memberCount}</span>
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
        {committee.description}
      </p>

      {/* Recent report */}
      {committee.recentReport && (
        <div className="border-t border-gray-100 pt-4 flex items-center gap-2 text-xs text-gray-500">
          <FileText className="w-3.5 h-3.5 shrink-0 text-gov-accent" />
          <span className="truncate">{committee.recentReport}</span>
        </div>
      )}

      {/* CTA */}
      <Link
        href="/committees"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gov-accent hover:gap-2.5 transition-all duration-150"
      >
        View committee
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
