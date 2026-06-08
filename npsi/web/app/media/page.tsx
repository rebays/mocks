import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { pressReleases } from "@/lib/data";
import { Video, Camera, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Media",
  description: "Press releases, photo gallery, and video coverage from the National Parliament of Solomon Islands.",
};

export default function MediaPage() {
  return (
    <>
      {/* ── Banner ──────────────────────────────────────────────── */}
      <div className="page-banner py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gov-gold text-xs font-bold uppercase tracking-widest mb-3">Media</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            News & Media
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Press releases, parliamentary video broadcasts, and photo coverage from
            the National Parliament of Solomon Islands.
          </p>
        </div>
      </div>

      {/* ── Gallery quick-links ──────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 gap-5 max-w-2xl">
          {[
            {
              icon: <Video className="w-8 h-8" />,
              label: "Video Gallery",
              desc: "Watch recorded sittings, committee hearings, and parliamentary events.",
              cta: "Watch Videos",
              href: "https://parliament.gov.sb/media/videogallery/",
            },
            {
              icon: <Camera className="w-8 h-8" />,
              label: "Photo Gallery",
              desc: "Browse images from parliamentary sittings, events, and outreach activities.",
              cta: "View Photos",
              href: "https://parliament.gov.sb/media/photogallery/",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gov-primary text-white rounded-2xl p-7 flex gap-5 group hover:bg-gov-primary-hover transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-gov-gold/20 text-gov-gold flex items-center justify-center shrink-0 group-hover:bg-gov-gold/30 transition-colors">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gov-gold mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-white/75 leading-snug mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 transition-all">
                  {item.cta}
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Live stream banner ───────────────────────────────────── */}
      <section className="bg-gov-gold py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <div>
              <p className="font-bold text-gov-primary">Parliament Live Stream</p>
              <p className="text-gov-primary/70 text-sm">Watch Parliament live on sitting days from 9:00 am</p>
            </div>
          </div>
          <a
            href="https://parliament.gov.sb/media/videogallery/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-2.5 bg-gov-primary text-white font-bold rounded-xl hover:bg-gov-primary-hover transition-colors"
          >
            <Video className="w-4 h-4" />
            Watch Now
          </a>
        </div>
      </section>

      {/* ── Press releases ───────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Latest"
            title="Press Releases"
            subtitle="Official statements and announcements from the National Parliament of Solomon Islands."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Media contact ────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 max-w-2xl">
          <SectionHeading label="Media Enquiries" title="Contact the Media Office" />
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              For media enquiries, interview requests, or accreditation to attend parliamentary
              sittings and events, please contact the Parliamentary Media Office.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 bg-white rounded-lg p-4 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">Email</p>
                <p className="text-gray-800 text-sm font-semibold">media@parliament.gov.sb</p>
              </div>
              <div className="flex-1 bg-white rounded-lg p-4 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">Phone</p>
                <p className="text-gray-800 text-sm font-semibold">+677 21807</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
