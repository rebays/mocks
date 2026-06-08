"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import BillRow from "@/components/BillRow";
import { bills, acts, hansard, upcomingSittings } from "@/lib/data";
import { FileText, BookOpen, ScrollText, Clock, Calendar } from "lucide-react";

const tabs = [
  { id: "bills",    label: "Bills",       icon: <FileText className="w-4 h-4" /> },
  { id: "acts",     label: "Acts",        icon: <BookOpen className="w-4 h-4" /> },
  { id: "hansard",  label: "Hansard",     icon: <ScrollText className="w-4 h-4" /> },
  { id: "sittings", label: "Sittings",    icon: <Calendar className="w-4 h-4" /> },
];

export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState("bills");

  return (
    <>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="page-banner py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gov-gold text-xs font-bold uppercase tracking-widest mb-3">Parliament</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Parliament Business
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Access Bills currently before the House, recently enacted legislation,
            Hansard transcripts, order papers, and upcoming sitting dates.
          </p>
        </div>
      </div>

      {/* ── Tab navigation ──────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-1 min-w-max sm:min-w-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-gov-gold text-gov-primary"
                    : "border-transparent text-gray-500 hover:text-gov-primary hover:border-gray-200"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content area ────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Bills */}
          {activeTab === "bills" && (
            <div>
              <SectionHeading
                label="Current Session"
                title="Bills Before Parliament"
                subtitle="Bills currently progressing through the legislative stages of the 10th Parliament."
              />
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Bill</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Minister</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Introduced</th>
                        <th className="text-left px-4 py-3 font-semibold text-gray-700">Stage</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bills.map((b) => (
                        <BillRow key={b.id} bill={b} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                {[
                  { colour: "bg-green-100", label: "Royal Assent — enacted" },
                  { colour: "bg-blue-100",  label: "Third Reading — final vote" },
                  { colour: "bg-amber-100", label: "Committee / Second Reading" },
                  { colour: "bg-gray-100",  label: "First Reading — introduced" },
                ].map((k) => (
                  <span key={k.label} className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded-sm inline-block ${k.colour}`} />
                    {k.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Acts */}
          {activeTab === "acts" && (
            <div>
              <SectionHeading
                label="Enacted Legislation"
                title="Recent Acts of Parliament"
                subtitle="Acts passed by Parliament and assented to by the Governor-General."
              />
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Act</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Enacted</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Commencement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {acts.map((a) => (
                      <tr key={a.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-4">
                          <p className="font-semibold text-gray-900">{a.title}</p>
                          <p className="text-gray-400 text-xs mt-0.5">{a.number}</p>
                        </td>
                        <td className="px-4 py-4 text-gray-600 hidden sm:table-cell">{a.enacted}</td>
                        <td className="px-4 py-4 text-gray-600 hidden md:table-cell">{a.commencement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Hansard */}
          {activeTab === "hansard" && (
            <div>
              <SectionHeading
                label="Official Record"
                title="Hansard Transcripts"
                subtitle="Verbatim official record of all speeches and proceedings in the National Parliament."
              />
              <div className="space-y-3">
                {hansard.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center gap-5 hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center shrink-0">
                      <ScrollText className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{h.sitting}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{h.session} · {h.date}</p>
                    </div>
                    <a
                      href={h.href}
                      className="shrink-0 px-4 py-1.5 rounded-lg border border-gov-accent text-gov-accent text-xs font-semibold hover:bg-gov-accent hover:text-white transition-colors"
                    >
                      View PDF
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Sittings */}
          {activeTab === "sittings" && (
            <div>
              <SectionHeading
                label="Schedule"
                title="Upcoming Sittings"
                subtitle="Scheduled sitting days for the current session of the 10th Parliament."
              />
              <div className="space-y-4">
                {upcomingSittings.map((s, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gov-primary text-white flex flex-col items-center justify-center shrink-0 text-center leading-tight">
                      <Clock className="w-5 h-5 mb-0.5" />
                      <span className="text-[11px] font-bold">{s.date.split(" ")[0]}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{s.date}</p>
                      <p className="text-gray-500 text-sm mt-0.5">{s.session} — {s.sitting}</p>
                    </div>
                    <div className="ml-auto shrink-0">
                      <span className="px-3 py-1 rounded-full bg-gov-gold/20 text-gov-primary text-xs font-semibold">
                        Scheduled
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-gov-primary/5 border border-gov-primary/10 rounded-xl p-6">
                <h3 className="font-bold text-gov-primary mb-2">About Parliamentary Sittings</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Parliament sits Monday to Friday during sitting periods. Sittings generally commence at
                  9:00 am and continue until the business is concluded or the House adjourns. The public
                  gallery is open during all sittings — contact the Clerk's Office to arrange attendance.
                </p>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
