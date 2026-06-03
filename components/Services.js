"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "We craft interfaces that delight users and drive conversions. From wireframes to high-fidelity prototypes — every pixel intentional.",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    number: "02",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Performant, scalable web applications built with modern frameworks. Clean code, fast load times, seamless user experiences.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    number: "03",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Brand Identity",
    description:
      "Strategic brand systems that communicate your essence. Logos, visual language, and guidelines that make you unmistakable.",
    tags: ["Strategy", "Identity", "Guidelines"],
  },
  {
    number: "04",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that reach the right audiences. SEO, social media strategy, and paid ads that generate real ROI.",
    tags: ["SEO", "Social Media", "Analytics"],
  },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 bg-surface overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 -right-32 w-64 h-64 rounded-full bg-gold/8 blur-[80px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-20">
          <div className="reveal flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="reveal font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
              Craft. Strategy.
              <br />
              <em className="text-gold not-italic">Execution.</em>
            </h2>
            <p className="reveal delay-200 max-w-sm text-muted leading-relaxed">
              Every service we offer is built around a single principle: create work that outlasts the trends.
            </p>
          </div>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`reveal delay-${(i + 1) * 100} card-glow group relative p-8 md:p-10 bg-surface border border-border rounded-sm`}
            >
              {/* Number watermark */}
              <div className="absolute top-6 right-8 font-display text-7xl font-bold text-cream/4 select-none">
                {service.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 border border-border flex items-center justify-center text-gold mb-8 group-hover:border-gold/50 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-border text-muted text-[11px] font-mono tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
