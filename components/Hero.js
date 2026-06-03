"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface"
      style={{ "--mx": "0px", "--my": "0px" }}
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-50/60 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ink/30 blur-[80px]" />
      </div>

      {/* Geometric grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating geometric shapes - parallax */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: "translate(var(--mx), var(--my))" }}
      >
        {/* Large diamond outline - top right */}
        <div className="absolute top-20 right-16 md:right-32 w-48 h-48 md:w-72 md:h-72 border border-blue-300/30 rotate-45 animate-spin-slow" />
        <div className="absolute top-20 right-16 md:right-32 w-48 h-48 md:w-72 md:h-72 border border-blue-200/20 rotate-45 scale-75 animate-spin-slow" style={{ animationDirection: "reverse" }} />

        {/* Small squares scattered */}
        <div className="absolute bottom-32 left-10 w-12 h-12 border border-blue-300/40 rotate-45 animate-float" />
        <div className="absolute top-40 left-24 w-6 h-6 bg-blue-200/30 rotate-45 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-48 right-20 w-8 h-8 border border-blue-300/30 rotate-12 animate-float" style={{ animationDelay: "1s" }} />

        {/* Lines */}
        <div className="absolute top-1/3 right-0 w-48 h-px bg-gradient-to-l from-transparent via-blue-300/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-64 h-px bg-gradient-to-r from-transparent via-blue-200/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-32 text-center">
        {/* Eyebrow label */}
        <div
          className="inline-flex items-center gap-3 mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="w-12 h-px bg-gold" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
            Design Excellence Studio
          </span>
          <span className="w-12 h-px bg-gold" />
        </div>

        {/* Main heading */}
        <h1
          className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-none mb-6 animate-fade-up text-cream"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block">We Design</span>
          <span className="block italic text-shimmer">Futures.</span>
        </h1>

        {/* Tagline */}
        <p
          className="max-w-2xl mx-auto text-muted text-lg md:text-xl leading-relaxed mb-14 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          We craft digital experiences that captivate audiences, elevate brands,
          and drive measurable growth. Where vision meets execution.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#portfolio"
            className="group px-10 py-4 bg-gold text-white font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 flex items-center gap-3 rounded-lg shadow-lg hover:shadow-xl"
          >
            View Our Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="px-10 py-4 border-2 border-gold text-gold text-sm font-medium tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 rounded-lg"
          >
            Explore Services
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-24 grid grid-cols-3 gap-8 max-w-xl mx-auto border-t border-border pt-10 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          {[
            { val: "150+", label: "Projects Delivered" },
            { val: "98%", label: "Client Satisfaction" },
            { val: "12+", label: "Awards Won" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-gold mb-1">
                {stat.val}
              </div>
              <div className="font-mono text-[10px] text-muted tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-mono text-[10px] tracking-widest text-muted uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
