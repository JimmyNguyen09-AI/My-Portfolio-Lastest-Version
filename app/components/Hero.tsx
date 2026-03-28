"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Radar, Sparkles } from "lucide-react";
import TypingTitle from "./_components/Typing";

const techStack = [
  "Python",
  "TypeScript",
  "NodeJS",
  "PyTorch",
  "Next.js",
  "Express.js",
  "LangChain",
  "OpenCV",
  "Pydantic AI",
];

export default function Hero() {
  const words = [
    "GenAI Engineer",
    "AI Agent Developer",
    "AI Engineer",
    "Full Stack Software Engineer",
    "Computer Vision Engineer",
  ];

  return (
    <section id="home" className="cyber-section flex min-h-screen items-center overflow-hidden pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 cyber-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(0_212_255_/_0.14),transparent_30%),radial-gradient(circle_at_82%_18%,rgb(255_0_255_/_0.14),transparent_26%),radial-gradient(circle_at_56%_86%,rgb(0_255_136_/_0.12),transparent_28%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="cyber-shell relative z-10 grid items-center gap-14 xl:grid-cols-[minmax(0,1.12fr)_minmax(340px,0.88fr)]"
      >
        <div className="space-y-8">
          <div className="space-y-5">
            <span className="cyber-kicker">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              Available For Freelance
            </span>

            <div className="space-y-4">
              <p className="cyber-label text-xs text-white/46 sm:text-sm">
                &gt; booting identity feed<span className="blinking-cursor">_</span>
              </p>
              <h1 className="cyber-heading text-[clamp(3.4rem,11vw,7.4rem)] text-white">
                Hi, I&apos;m{" "}
                <span className="cyber-glitch text-[var(--accent)]" data-text="Jimmy Nguyen">
                  Jimmy Nguyen
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/62 sm:text-base">
                <span className="h-px w-16 bg-[linear-gradient(90deg,transparent,var(--accent))]" />
                <TypingTitle words={words} typingChar="|" />
              </div>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Crafting intelligent solutions at the intersection of AI and web development.
            Transforming ideas into scalable, cutting-edge applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="cyber-button cyber-button-glitch">
              Open Channel
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="/AI ML Engineer - Jimmy Nguyen.pdf"
              target="_blank"
              rel="noreferrer"
              className="cyber-button-ghost"
            >
              View Resume
              <Download className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Status", value: "Available" },
              { label: "Projects", value: "8+" },
              { label: "Focus", value: "AI x Web" },
            ].map((item) => (
              <div key={item.label} className="cyber-stat px-4 py-4">
                <p className="cyber-label text-[10px] text-white/42">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="cyber-label text-xs text-white/42">Stack Trace</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="cyber-chip">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem] xl:ml-auto">
          <div
            aria-hidden="true"
            className="absolute -left-6 top-12 h-48 w-48 rounded-full bg-[rgba(255,0,255,0.16)] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-[rgba(0,212,255,0.16)] blur-3xl"
          />

          <div className="cyber-panel cyber-panel-hover p-4 sm:p-5">
            <div className="cyber-grid cyber-cut relative aspect-[4/5] overflow-hidden border border-[rgba(0,255,136,0.18)] bg-black/40">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,255,136,0.18),transparent_30%,rgba(0,212,255,0.18))]" />
              <Image
                src="/avt2.jpg"
                alt="Jimmy Nguyen"
                fill
                priority
                sizes="(max-width: 1280px) 90vw, 420px"
                className="object-cover object-center mix-blend-screen"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(10,10,15,0.6)_100%)]" />

              <div className="absolute left-4 top-4 cyber-holo px-4 py-3 sm:left-5 sm:top-5">
                <p className="cyber-label text-[10px] text-white/45">Signal</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-[var(--accent)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_#00ff88]" />
                  Stable Feed
                </p>
              </div>

              <div className="absolute bottom-4 right-4 cyber-holo max-w-[12rem] px-4 py-3 sm:bottom-5 sm:right-5">
                <p className="cyber-label text-[10px] text-white/45">Primary Role</p>
                <p className="mt-2 text-sm leading-6 text-white/78">
                  Building intelligent products with GenAI, CV and modern web systems.
                </p>
              </div>
            </div>
          </div>

          <div className="-mt-8 ml-4 mr-4 sm:ml-8 sm:mr-0">
            <div className="cyber-terminal">
              <div className="cyber-terminal-header">
                <div className="cyber-terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="cyber-label text-[10px] text-white/42">terminal://jimmy/status</p>
              </div>
              <div className="space-y-4 px-5 py-5 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <div className="cyber-icon-box h-10 w-10 shrink-0">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="cyber-label text-[10px] text-white/42">Location</p>
                    <p className="mt-1">Allawah NSW, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="cyber-icon-box h-10 w-10 shrink-0 text-[var(--accent-secondary)]">
                    <Radar className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="cyber-label text-[10px] text-white/42">Focus Areas</p>
                    <p className="mt-1">GenAI, Computer Vision, AI Agents, Full Stack Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="cyber-label text-[10px] text-white/38">Scroll</span>
        <div className="cyber-cut-sm border border-[rgba(0,255,136,0.25)] px-3 py-3 text-[var(--accent)]">
          <div className="h-3 w-[2px] animate-bounce bg-[var(--accent)]" />
        </div>
      </div>
    </section>
  );
}
