/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BrainCircuit, GraduationCap, TimerReset } from "lucide-react";

type TabKey = "skills" | "experience" | "education";

const skills = {
  "AI & Machine Learning": [
    "Pydantic AI", "PyTorch", "LangChain", "LangGraph",
    "Scikit-Learn", "GenAI", "HuggingFace", "OpenAI",
  ],
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "HTML5", "CSS3"],
  Backend: ["Node.js", "Python", "FastAPI", "Express", "ASP .NET", "REST APIs"],
  "Tools & Others": ["Git", "GitHub", "Docker", "AWS", "Vercel", "PostgreSQL", "Linux"],
};

const experience = [
  {
    period: "01/08/2024 — Present",
    role: "AI Agent Engineer",
    company: "GRCG — Global Remote Consulting Group",
    description:
      "Developing cutting-edge AI solutions and implementing machine learning models for production systems.",
  },
];

const education = [
  {
    period: "08/2022 — 08/2023",
    degree: "Bachelor of Automotive Technology",
    institution: "HUST — Hanoi University of Science and Technology",
    logo: "/hust.png",
  },
  {
    period: "11/2023 — Present",
    degree: "Bachelor of Information Technology",
    institution: "King's Own Institute",
    logo: "/koi.jpg",
  },
];

const tabs: { key: TabKey; label: string; icon: typeof BrainCircuit }[] = [
  { key: "skills", label: "Skills", icon: BrainCircuit },
  { key: "experience", label: "Experience", icon: TimerReset },
  { key: "education", label: "Education", icon: GraduationCap },
];

const row1Techs = [
  { label: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { label: "LangChain", img: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
  { label: "HuggingFace", img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
  { label: "OpenAI", img: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
  { label: "Scikit-Learn", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { label: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { label: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { label: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { label: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { label: "OpenCV", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { label: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "Streamlit", img: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
  { label: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const row2Techs = [
  { label: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { label: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { label: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { label: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png" },
  { label: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { label: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { label: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { label: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { label: "Jupyter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { label: "Mistral AI", img: "https://avatars.githubusercontent.com/u/132372032?s=200&v=4" },
  { label: "LangSmith", img: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
  { label: "Pydantic", img: "https://docs.pydantic.dev/latest/logo-white.svg" },
  { label: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("skills");

  const row1 = [...row1Techs, ...row1Techs];
  const row2 = [...row2Techs, ...row2Techs];

  return (
    <section id="about" className="overflow-hidden bg-[#F9F8F6]">
      {/* ── Main Content ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.12 }}
        className="cyber-shell relative z-10 py-24 space-y-20 lg:py-32"
      >
        <div className="grid gap-16 xl:grid-cols-[0.9fr_1.1fr] xl:items-start xl:gap-24">

          {/* ── Left Column ─────────────────────────────────────── */}
          <div className="space-y-10">
            {/* Section label */}
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-[#6C6863]">
                Profile Overview
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-[var(--font-playfair)] text-[clamp(2.8rem,6vw,4.5rem)] font-normal leading-[0.92] text-[#1A1A1A]">
              About The
              <br />
              <em className="not-italic text-[#D4AF37]">Operator</em>
            </h2>

            {/* Bio with drop cap */}
            <div className="space-y-5 text-[#6C6863]">
              <p className="text-base leading-relaxed">
                <span
                  className="float-left mr-3 font-[var(--font-playfair)] text-[4.5rem] font-normal leading-[0.78] text-[#1A1A1A]"
                  aria-hidden="true"
                >
                  I
                </span>
                &apos;m a dedicated AI Engineer and Full Stack Developer with a passion for
                creating intelligent solutions that make a real-world impact. My journey in tech
                has been driven by curiosity and a constant desire to learn and innovate.
              </p>
              <p className="text-base leading-relaxed">
                Specializing in GenAI, Computer Vision, and modern web technologies, I bridge the
                gap between cutting-edge AI research and practical, user-friendly applications.
                Every project is an opportunity to push boundaries and deliver exceptional results.
              </p>
            </div>

            {/* Portrait */}
            <div className="group relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/avt1.jpg"
                  alt="Jimmy Nguyen"
                  fill
                  sizes="(max-width: 1280px) 100vw, 480px"
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]" />

                {/* Vertical editorial label */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-8 hidden font-[var(--font-inter)] text-[8px] uppercase tracking-[0.3em] text-[#F9F8F6]/60 xl:block"
                  style={{ writingMode: "vertical-rl" }}
                >
                  AI Engineer / Portfolio
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "1+", label: "Years Experience" },
                { number: "8+", label: "Projects Done" },
                { number: "1", label: "Internship" },
              ].map((stat) => (
                <div key={stat.label} className="cyber-stat px-0 py-5">
                  <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-[var(--font-playfair)] text-3xl text-[#D4AF37]">
                    {stat.number}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="cyber-button">
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
              <a
                href="/AI ML Engineer - Jimmy Nguyen.pdf"
                target="_blank"
                rel="noreferrer"
                className="cyber-button-secondary"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ── Right Column: Tabs ───────────────────────────────── */}
          <div className="border border-[#1A1A1A]/10">
            {/* Tab header */}
            <div className="border-b border-[#1A1A1A]/10 px-6 py-5">
              <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em] text-[#6C6863]">
                profile://jimmy/details
              </p>
            </div>

            <div className="px-6 py-8 space-y-8 sm:px-8">
              {/* Tab buttons */}
              <div className="flex flex-wrap gap-3">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`cyber-tab flex min-h-[44px] items-center gap-2 border px-5 py-2.5 text-[11px] ${
                        isActive
                          ? "border-[#D4AF37] bg-[#D4AF37]/8 text-[#1A1A1A]"
                          : "border-[#1A1A1A]/15 text-[#6C6863] hover:border-[#1A1A1A]/30 hover:text-[#1A1A1A]"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <div className="min-h-[22rem]">
                {activeTab === "skills" && (
                  <div className="lux-fade-in space-y-5">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category} className="space-y-3">
                        <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                          {category}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <span key={skill} className="cyber-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="h-px w-full bg-[#1A1A1A]/6" />
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="lux-fade-in space-y-6">
                    {experience.map((exp) => (
                      <div key={exp.role} className="space-y-3 border-t border-[#D4AF37] pt-5">
                        <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                          {exp.period}
                        </p>
                        <h3 className="font-[var(--font-playfair)] text-xl text-[#1A1A1A]">
                          {exp.role}
                        </h3>
                        <p className="font-[var(--font-inter)] text-sm text-[#6C6863]">
                          {exp.company}
                        </p>
                        <p className="font-[var(--font-inter)] text-sm leading-7 text-[#6C6863]/80">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "education" && (
                  <div className="lux-fade-in space-y-5">
                    {education.map((edu) => (
                      <div
                        key={`${edu.period}-${edu.degree}`}
                        className="flex gap-5 border-t border-[#1A1A1A]/10 pt-5"
                      >
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-[#1A1A1A]/10 bg-white">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                            {edu.period}
                          </p>
                          <h3 className="font-[var(--font-playfair)] text-lg leading-snug text-[#1A1A1A]">
                            {edu.degree}
                          </h3>
                          <p className="font-[var(--font-inter)] text-sm text-[#6C6863]">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Tech Marquee Strip (dark band) ─────────────────────── */}
      <div className="relative overflow-hidden bg-[#1A1A1A] py-7">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent" />

        <div className="mb-5 px-8">
          <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.3em] text-white/40">
            Technology Stack
          </p>
        </div>

        {/* Row 1 — LTR */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-ltr flex gap-3 whitespace-nowrap px-8">
            {row1.map((tech, index) => (
              <div
                key={`r1-${tech.label}-${index}`}
                className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-5 py-3"
              >
                <div className="flex h-5 w-5 items-center justify-center shrink-0">
                  <img
                    src={tech.img}
                    alt={tech.label}
                    className="h-4 w-4 object-contain"
                    style={{
                      filter:
                        tech.label === "Next.js" ||
                        tech.label === "Express" ||
                        tech.label === "OpenAI"
                          ? "invert(1)"
                          : "none",
                    }}
                  />
                </div>
                <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.18em] text-white/65">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — RTL */}
        <div className="mt-3 flex overflow-hidden">
          <div className="animate-marquee-rtl flex gap-3 whitespace-nowrap px-8">
            {row2.map((tech, index) => (
              <div
                key={`r2-${tech.label}-${index}`}
                className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.04] px-5 py-3"
              >
                <div className="flex h-5 w-5 items-center justify-center shrink-0">
                  <img
                    src={tech.img}
                    alt={tech.label}
                    className="h-4 w-4 object-contain"
                    style={{
                      filter:
                        tech.label === "GitHub" ||
                        tech.label === "AWS" ||
                        tech.label === "Pydantic"
                          ? "invert(1)"
                          : "none",
                    }}
                  />
                </div>
                <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.18em] text-white/65">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
