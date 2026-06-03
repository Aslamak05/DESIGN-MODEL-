"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Luminary Finance App",
    category: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "#2a1f3d",
  },
  {
    id: 2,
    title: "Verdant — Eco Brand",
    category: "Brand Identity",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    color: "#1a2e1a",
  },
  {
    id: 3,
    title: "Pulse Music Platform",
    category: "Web Development",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    color: "#2e1a1a",
  },
  {
    id: 4,
    title: "Nomad Travel App",
    category: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    color: "#1a2630",
  },
  {
    id: 5,
    title: "Forge Fitness",
    category: "Brand Identity",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    color: "#2e2a1a",
  },
  {
    id: 6,
    title: "Archetype Studio",
    category: "Digital Marketing",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    color: "#1a1f2e",
  },
];

export default function Portfolio() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="relative py-32 bg-surface overflow-hidden">
      <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-[80px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="reveal flex items-center gap-4 mb-4">
            <span className="w-8 h-px bg-gold" />
            <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
              Selected Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="reveal font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight">
              Work We're
              <br />
              <em className="text-gold not-italic">Proud Of.</em>
            </h2>
            <a
              href="#contact"
              className="reveal delay-200 group inline-flex items-center gap-3 text-sm text-muted hover:text-gold transition-colors duration-300"
            >
              Start a project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal delay-${(i % 3) * 100 + 100} portfolio-item group relative overflow-hidden aspect-[4/3] cursor-pointer`}
            >
              {/* Background color fallback */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: project.color }}
              />

              {/* Image */}
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />

              {/* Hover overlay */}
              <div className="overlay absolute inset-0 bg-ink/85 backdrop-blur-sm flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <span className="font-mono text-[11px] text-gold tracking-widest uppercase block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl text-cream">{project.title}</h3>
                  <div className="mt-4 flex items-center gap-2 text-gold/70 text-sm">
                    <span>View Case Study</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-ink/60 backdrop-blur-sm text-[11px] font-mono text-gold/80 tracking-wider">
                {project.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
