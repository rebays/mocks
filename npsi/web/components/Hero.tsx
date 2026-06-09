"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/data";

const slides = [
  { image: "/hero.png",  heading: "Welcome to Solomon Islands Parliament" },
  { image: "/hero2.png", heading: "Representing 50 Constituencies Nationwide" },
  { image: "/hero3.png", heading: "Making Laws for the Good of the Nation" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="relative min-h-[70vh] flex flex-col">
      {/* ── Background slides ────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gov-primary/70" />

        {/* Decorative SVG grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Radial glow */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_60%_40%] from-white/5 via-transparent to-transparent" />
      </div>

      {/* ── Heading + dots ───────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-end w-full max-w-7xl mx-auto px-4 sm:px-6 pb-6">
        <h1
          key={current}
          className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 animate-fade-in"
        >
          {slides[current].heading}
        </h1>

        {/* Slide dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── CTA card — overlaps hero bottom border ───────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 translate-y-1/2">
        <div className="bg-white border border-gray-100 rounded-xl p-8 sm:p-10 shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
          {/* Menu sections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nav.slice(0, 3).map((section) => (
              <div key={section.label}>
                <h2 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-3">
                  {section.label}
                </h2>
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {section.items.slice(0, 3).map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-base text-gov-accent hover:text-gov-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
