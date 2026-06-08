import Link from "next/link";
import {
  Video,
  FileText,
  BookOpen,
  ClipboardList,
  Briefcase,
  Clock,
} from "lucide-react";
import { quickLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Video: <Video className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  BookOpen: <BookOpen className="w-4 h-4" />,
  ClipboardList: <ClipboardList className="w-4 h-4" />,
  Briefcase: <Briefcase className="w-4 h-4" />,
  Clock: <Clock className="w-4 h-4" />,
};

export default function QuickLinksBar() {
  return (
    <div className="bg-gov-primary-hover border-b border-white/10 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 overflow-x-auto">
        <ul className="flex items-center gap-2 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
          {quickLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-gov-gold hover:text-gov-primary transition-all duration-150 whitespace-nowrap"
              >
                <span className="text-gov-gold group-hover:text-gov-primary">
                  {iconMap[link.icon]}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
