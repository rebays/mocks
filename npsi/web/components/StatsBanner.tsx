import { stats } from "@/lib/data";

export default function StatsBanner() {
  return (
    <section className="bg-gov-primary py-10">
      <div className="max-w-7xl mx-auto px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden shadow-xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gov-primary px-8 py-8 flex flex-col items-center text-center"
            >
              <dt className="text-5xl font-bold text-gov-gold tabular-nums mb-1">
                {stat.value}
              </dt>
              <dd className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </dd>
              <span className="text-white/50 text-xs">{stat.sub}</span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
