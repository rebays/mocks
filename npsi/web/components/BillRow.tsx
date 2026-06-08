import { FileText } from "lucide-react";
import type { Bill } from "@/lib/data";

const stageBadge: Record<string, string> = {
  green: "bg-green-100 text-green-800",
  blue:  "bg-blue-100 text-blue-800",
  amber: "bg-amber-100 text-amber-800",
  gray:  "bg-gray-100 text-gray-600",
};

export default function BillRow({ bill }: { bill: Bill }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <FileText className="w-4 h-4 text-gov-accent shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 text-sm">{bill.title}</p>
            <p className="text-gray-400 text-xs mt-0.5">{bill.number}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 hidden sm:table-cell text-gray-600 text-sm">
        {bill.minister}
      </td>
      <td className="py-4 px-4 hidden md:table-cell text-gray-500 text-sm">
        {bill.introduced}
      </td>
      <td className="py-4 px-4">
        <span
          className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${
            stageBadge[bill.stageColor] ?? stageBadge.gray
          }`}
        >
          {bill.stage}
        </span>
      </td>
    </tr>
  );
}
