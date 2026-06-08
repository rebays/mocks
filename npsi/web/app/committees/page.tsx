import type { Metadata } from "next";
import CommitteeCard from "@/components/CommitteeCard";
import SectionHeading from "@/components/SectionHeading";
import { committees } from "@/lib/data";

export const metadata: Metadata = {
  title: "Committees",
  description: "Standing committees of the National Parliament of Solomon Islands.",
};

export default function CommitteesPage() {
  return (
    <>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="page-banner py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gov-gold text-xs font-bold uppercase tracking-widest mb-3">
            Parliament
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Standing Committees
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Parliamentary committees are the engine room of Parliament, scrutinising
            legislation, examining government spending, and producing reports that
            hold the executive accountable.
          </p>
        </div>
      </div>

      {/* ── What are committees ──────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {[
            { title: "Scrutiny", desc: "Committees examine bills clause by clause, taking evidence from experts, government officials, and the public before reporting back to Parliament." },
            { title: "Oversight", desc: "Through public hearings and written questions, committees hold ministers and agencies accountable for the delivery of government programmes." },
            { title: "Inquiry", desc: "Committees conduct in-depth inquiries into policy areas, producing reports with recommendations for government action and legislative reform." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-1 rounded-full bg-gov-gold shrink-0 self-stretch" />
              <div>
                <h3 className="font-bold text-gov-primary text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Committee grid ───────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="All Committees"
            title="10 Standing Committees"
            subtitle="Each committee covers a portfolio area of government and is chaired by an elected Member of Parliament."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((c) => (
              <CommitteeCard key={c.id} committee={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Chairpersons table ───────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Leadership"
            title="Committee Chairpersons"
            subtitle="Chairpersons are elected by the full Parliament at the start of each session."
          />
          <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gov-primary text-white">
                <tr>
                  <th className="text-left px-5 py-3.5 font-semibold">Committee</th>
                  <th className="text-left px-5 py-3.5 font-semibold hidden sm:table-cell">Chairperson</th>
                  <th className="text-center px-5 py-3.5 font-semibold hidden md:table-cell">Members</th>
                  <th className="text-left px-5 py-3.5 font-semibold hidden lg:table-cell">Recent Report</th>
                </tr>
              </thead>
              <tbody>
                {committees.map((c, i) => (
                  <tr
                    key={c.id}
                    className={`border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-5 py-4 font-semibold text-gov-primary">{c.name}</td>
                    <td className="px-5 py-4 text-gray-700 hidden sm:table-cell">{c.chair}</td>
                    <td className="px-5 py-4 text-center text-gray-600 hidden md:table-cell">{c.memberCount}</td>
                    <td className="px-5 py-4 text-gray-500 text-xs hidden lg:table-cell">{c.recentReport}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
