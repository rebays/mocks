import type { Member } from "@/lib/data";

const partyColour: Record<string, string> = {
  "OUR Party":        "bg-blue-100 text-blue-800",
  "Democratic Party": "bg-green-100 text-green-800",
  "Independent":      "bg-gray-100 text-gray-700",
};

function initials(name: string) {
  return name
    .replace(/^Hon\.\s*/, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-5 flex gap-4 group">
      {/* Avatar */}
      <div className="shrink-0 w-12 h-12 rounded-full bg-gov-primary flex items-center justify-center text-white font-bold text-sm shadow-inner">
        {initials(member.name)}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <p className="font-bold text-gray-900 text-sm leading-snug truncate group-hover:text-gov-accent transition-colors">
          {member.name}
        </p>
        {member.role && (
          <p className="text-gov-gold text-xs font-semibold mt-0.5">{member.role}</p>
        )}
        <p className="text-gray-500 text-xs mt-1 truncate">{member.constituency}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-gov-primary/10 text-gov-primary font-medium">
            {member.province}
          </span>
          <span
            className={`inline-block text-[10px] px-2 py-0.5 rounded-full font-medium ${
              partyColour[member.party] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {member.party}
          </span>
        </div>
      </div>
    </div>
  );
}
