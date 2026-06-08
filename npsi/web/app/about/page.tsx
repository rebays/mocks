import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { Scale, Users, BookOpen, Building2, Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Parliament",
  description: "Learn about the history, structure, and role of the National Parliament of Solomon Islands.",
};

const timeline = [
  { year: "1978", event: "Solomon Islands achieves independence. The National Parliament is established as the supreme legislative body under the Constitution." },
  { year: "1990", event: "Parliament Building construction completed in Honiara, providing a permanent home for the legislature." },
  { year: "2000", event: "Parliament navigates the period following ethnic tensions; emergency legislation passed to restore peace and order." },
  { year: "2006", event: "RAMSI period; Parliament continues functioning with international support, strengthening democratic institutions." },
  { year: "2014", event: "Parliamentary reform programme begins, introducing a new committee system and enhanced public engagement activities." },
  { year: "2019", event: "Elections held for the 10th Parliament. Pacific Games hosted in Honiara." },
  { year: "2024", event: "General election held; new Parliament sworn in. Taking Parliament to the People initiative launched." },
  { year: "2026", event: "Constitutional Amendment Bill passed; Professional Development Programme for MPs strengthens committee effectiveness." },
];

const departments = [
  { icon: <Scale className="w-5 h-5" />, name: "Clerk's Office", desc: "Manages parliamentary procedures, records, and official communications." },
  { icon: <Users className="w-5 h-5" />, name: "Members' Services", desc: "Supports MPs with research, administration, and parliamentary resources." },
  { icon: <BookOpen className="w-5 h-5" />, name: "Research & Library", desc: "Provides legislative research, library services, and information management." },
  { icon: <Building2 className="w-5 h-5" />, name: "Corporate Services", desc: "Finance, HR, procurement, and infrastructure management." },
  { icon: <Users className="w-5 h-5" />, name: "Public Education", desc: "Civic education programmes, school visits, and community outreach." },
  { icon: <BookOpen className="w-5 h-5" />, name: "Hansard", desc: "Verbatim recording and publication of all parliamentary debates." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page banner ─────────────────────────────────────────── */}
      <div className="page-banner py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gov-gold text-xs font-bold uppercase tracking-widest mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Parliament
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            The National Parliament of Solomon Islands is the supreme legislative
            body of the nation, established by the Constitution at independence in 1978.
          </p>
        </div>
      </div>

      {/* ── Mission & Role ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              label="Our Role"
              title="The Voice of the Nation"
              subtitle="Parliament is the cornerstone of Solomon Islands' democracy — making laws, scrutinising government, and representing the people."
            />
            <div className="space-y-4 text-gray-700 text-base leading-relaxed">
              <p>
                The National Parliament is a unicameral legislature consisting of 50
                elected Members of Parliament representing all constituencies across
                nine provinces and Honiara City.
              </p>
              <p>
                Parliament meets in regular sessions, passing legislation, approving
                the national budget, and holding the Executive Government accountable
                through questions, motions, and committee scrutiny.
              </p>
              <p>
                The Parliament Building is located in Honiara, the national capital,
                and is open to the public during sitting days.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Legislature", desc: "Unicameral — one chamber of 50 elected MPs" },
              { label: "Term", desc: "4-year parliamentary terms following general elections" },
              { label: "Sessions", desc: "Two or more sessions per year, each with multiple sittings" },
              { label: "Quorum", desc: "Majority of MPs required for valid sitting" },
            ].map((f) => (
              <div key={f.label} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <p className="text-gov-accent font-bold text-xs uppercase tracking-wide mb-2">{f.label}</p>
                <p className="text-gray-800 text-sm leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Officers ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Leadership"
            title="Parliamentary Officers"
            subtitle="The principal officers who preside over and administer the work of Parliament."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Speaker", name: "Hon. [Speaker Name]", note: "Presides over sittings and maintains order" },
              { role: "Deputy Speaker", name: "Hon. Lanelle Tanangada", note: "Deputises for the Speaker as required" },
              { role: "Clerk of Parliament", name: "Mr. [Clerk Name]", note: "Chief administrative officer of Parliament" },
              { role: "Serjeant-at-Arms", name: "Mr. [Name]", note: "Maintains security and ceremonial duties" },
            ].map((o) => (
              <div key={o.role} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-gov-primary mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {o.name.charAt(0)}
                </div>
                <p className="text-gov-accent text-xs font-bold uppercase tracking-wide mb-1">{o.role}</p>
                <p className="font-bold text-gray-900 text-sm mb-2">{o.name}</p>
                <p className="text-gray-500 text-xs leading-snug">{o.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── History Timeline ─────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label="Our History"
            title="A Democratic Journey"
            subtitle="From independence in 1978 to today, the Parliament of Solomon Islands has upheld democratic governance across the Pacific."
            center
          />
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gov-primary/20 sm:left-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Year bubble */}
                  <div className="relative z-10 flex-shrink-0 sm:w-1/2 sm:flex sm:justify-center">
                    <div className="w-16 h-16 rounded-full bg-gov-primary text-white flex items-center justify-center text-sm font-bold shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 sm:w-1/2 pb-2 ${
                      i % 2 === 0 ? "sm:pl-8" : "sm:pr-8 sm:text-right"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <p className="text-gray-800 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Departments ──────────────────────────────────────────── */}
      <section className="py-16 bg-gov-primary">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Administration"
            title="Departments & Services"
            subtitle="The departments that support the work of Parliament and its Members."
            light
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gov-gold flex items-center justify-center text-gov-primary mb-4">
                  {dept.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{dept.name}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Get in Touch" title="Contact Parliament" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            {[
              { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "Parliament House, Honiara, Guadalcanal Province, Solomon Islands" },
              { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+677 21807" },
              { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@parliament.gov.sb" },
            ].map((c) => (
              <div key={c.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gov-primary/10 text-gov-primary flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-gray-400 tracking-wide mb-1">{c.label}</p>
                  <p className="text-gray-800 text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
