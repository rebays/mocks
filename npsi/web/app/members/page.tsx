"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import MemberCard from "@/components/MemberCard";
import SectionHeading from "@/components/SectionHeading";
import { members, provinces } from "@/lib/data";

export default function MembersPage() {
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState("All Provinces");

  const filtered = members.filter((m) => {
    const matchQuery =
      query === "" ||
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.constituency.toLowerCase().includes(query.toLowerCase());
    const matchProvince =
      province === "All Provinces" || m.province === province;
    return matchQuery && matchProvince;
  });

  return (
    <>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="page-banner py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gov-gold text-xs font-bold uppercase tracking-widest mb-3">Parliament</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Members of Parliament
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            50 elected representatives serving the people of Solomon Islands across
            all provinces and Honiara City.
          </p>
        </div>
      </div>

      {/* ── Filter bar ──────────────────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 py-4 px-6 sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or constituency…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gov-accent focus:border-transparent"
            />
          </div>

          {/* Province filter */}
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gov-accent focus:border-transparent bg-white"
          >
            {provinces.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <p className="self-center text-sm text-gray-500 ml-auto">
            {filtered.length} of {members.length} members shown
          </p>
        </div>
      </div>

      {/* ── Members grid ────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg font-semibold mb-2">No members found</p>
              <p className="text-sm">Try adjusting your search or province filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Province breakdown ───────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="By Province"
            title="Constituencies & Provinces"
            subtitle="Solomon Islands is divided into 9 provinces and Honiara City, with a total of 50 constituencies."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {provinces.slice(1).map((p) => {
              const count = members.filter((m) => m.province === p).length;
              return (
                <button
                  key={p}
                  onClick={() => setProvince(p === province ? "All Provinces" : p)}
                  className={`text-left p-4 rounded-xl border transition-all text-sm ${
                    province === p
                      ? "bg-gov-primary text-white border-gov-primary shadow"
                      : "bg-gray-50 border-gray-100 hover:border-gov-accent hover:bg-white text-gray-800"
                  }`}
                >
                  <p className="font-bold">{p}</p>
                  <p className={`text-xs mt-0.5 ${province === p ? "text-white/70" : "text-gray-500"}`}>
                    {count} MP{count !== 1 ? "s" : ""} shown
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
