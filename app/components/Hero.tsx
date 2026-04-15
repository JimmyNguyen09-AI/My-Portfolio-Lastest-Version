"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import TypingTitle from "./_components/Typing";

const techStack = [
  "Python",
  "TypeScript",
  "NodeJS",
  "PyTorch",
  "Next.js",
  "LangChain",
  "OpenCV",
  "Pydantic AI",
];

const words = [
  "GenAI Engineer",
  "AI Agent Developer",
  "AI Engineer",
  "Full Stack Engineer",
  "Computer Vision Engineer",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F9F8F6] pt-[84px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="cyber-shell relative z-10 grid min-h-[calc(100vh-84px)] items-end gap-16 py-20 xl:grid-cols-[1.15fr_0.85fr] xl:items-end xl:gap-24"
      >
        {/* ── Left: Text Content ────────────────────────────────── */}
        <div className="space-y-10 pb-10">
          {/* Overline */}
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-[#6C6863]">
              Available For Work — Sydney, Australia
            </span>
          </div>

          {/* Hero Headline */}
          <div>
            <p className="mb-2 font-[var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#6C6863]">
              Hi, I&apos;m
            </p>
            <h1 className="font-[var(--font-playfair)] text-[clamp(3.8rem,10vw,7.5rem)] font-normal leading-[0.92] text-[#1A1A1A]">
              Jimmy{" "}
              <em className="not-italic text-[#D4AF37]">Nguyen</em>
            </h1>
          </div>

          {/* Typing subtitle */}
          <div className="flex items-center gap-4">
            <span className="h-px w-6 bg-[#1A1A1A]/20" />
            <TypingTitle words={words} typingChar="|" />
          </div>

          {/* Body text */}
          <p className="max-w-lg font-[var(--font-inter)] text-[1rem] leading-relaxed text-[#6C6863]">
            Crafting intelligent solutions at the intersection of AI and web development.
            Transforming ideas into scalable, cutting-edge applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="cyber-button">
              <span>Get In Touch</span>
            </a>
            <a
              href="/AI ML Engineer - Jimmy Nguyen.pdf"
              target="_blank"
              rel="noreferrer"
              className="cyber-button-secondary inline-flex items-center gap-2"
            >
              <span>View Resume</span>
              <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 border-t border-[#1A1A1A]/10 pt-8">
            {[
              { label: "Status", value: "Available" },
              { label: "Projects", value: "8+" },
              { label: "Focus", value: "AI × Web" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                  {item.label}
                </p>
                <p className="mt-2 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3">
            <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em] text-[#6C6863]">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span key={tech} className="cyber-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Portrait ───────────────────────────────────── */}
        <div className="relative mx-auto w-full max-w-md pb-10 xl:ml-auto">
          {/* Vertical editorial label (desktop) */}
          <span
            aria-hidden="true"
            className="absolute -left-10 bottom-24 hidden font-[var(--font-inter)] text-[8px] uppercase tracking-[0.32em] text-[#6C6863] xl:block"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Editorial / Vol. 01
          </span>

          {/* Portrait image */}
          <div className="group relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/avt2.jpg"
                alt="Jimmy Nguyen"
                fill
                priority
                sizes="(max-width: 1280px) 90vw, 480px"
                className="object-cover object-top transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
              />
              {/* Inner border frame */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]" />
              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#1A1A1A]/65 to-transparent" />

              {/* Bottom overlay content */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.28em] text-[#F9F8F6]/55">
                  Primary Role
                </p>
                <p className="mt-1.5 font-[var(--font-inter)] text-sm leading-6 text-[#F9F8F6]/85">
                  Building intelligent products with GenAI, CV &amp; modern web systems.
                </p>
              </div>
            </div>
          </div>

          {/* Status bar below image */}
          <div className="mt-5 flex items-center justify-between border-t border-[#1A1A1A]/10 pt-5">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#6C6863]" strokeWidth={1.5} />
              <span className="font-[var(--font-inter)] text-[11px] text-[#6C6863]">
                Allawah NSW, Australia
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#6C6863]">
                Open To Work
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em] text-[#6C6863]">
          Scroll
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-[#1A1A1A]/20 to-transparent" />
      </div>
    </section>
  );
}
