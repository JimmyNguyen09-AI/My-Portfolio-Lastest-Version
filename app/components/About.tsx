/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import { ArrowRight, BrainCircuit, GraduationCap, Sparkles, TimerReset } from "lucide-react";
import AmbientMotion from "./AmbientMotion";

type TabKey = "skills" | "experience" | "education";

const skills = {
  "AI & Machine Learning": [
    "Pydantic AI",
    "PyTorch",
    "LangChain",
    "LangGraph",
    "Scikit-Learn",
    "GenAI",
    "HuggingFace",
    "OpenAI",
  ],
  Frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "HTML5", "CSS3"],
  Backend: ["Node.js", "Python", "FastAPI", "Express", "ASP .NET", "REST APIs"],
  "Tools & Others": ["Git", "GitHub", "Docker", "AWS", "Vercel", "PostgreSQL", "Linux"],
};

const experience = [
  {
    period: "01/08/2024 — 30/11/2024",
    role: "AI Agent Engineer",
    company: "GRCG — Global Remote Consulting Group",
    description:
      "Developing cutting-edge AI solutions and implementing machine learning models for production systems.",
  },
  {
    period: "01/07/2026 — Present",
    role: "Software & AI Agent Engineer",
    company: "PromptLeash - Solon AI",
    description:
      "Developing and optimizing AI-powered applications and LLM platforms with a strong product mindset.",
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

const studioSignals = [
  {
    title: "What I care about",
    copy: "Interfaces that feel premium, intelligent, and fast to trust.",
  },
  {
    title: "How I ship",
    copy: "Research deeply, build sharply, polish interactions, then iterate with users.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("skills");
  const portraitRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 120,
    damping: 18,
    mass: 0.45,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 120,
    damping: 18,
    mass: 0.45,
  });

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) {
      return;
    }

    const rect = portraitRef.current.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - offsetY) * 10);
    rotateY.set((offsetX - 0.5) * 10);
  };

  const resetPointer = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const row1 = [...row1Techs, ...row1Techs];
  const row2 = [...row2Techs, ...row2Techs];

  return (
    <section id="about" className="relative overflow-hidden bg-[#F9F8F6]">
      <AmbientMotion tone="light" density="calm" />

      <div className="pointer-events-none absolute inset-x-0 top-10 h-[34rem]">
        <div className="lux-ambient-orb left-[-6rem] top-12 h-60 w-60 bg-[#D4AF37]/14" />
        <div className="lux-ambient-orb right-[10%] top-28 h-72 w-72 bg-[#1A1A1A]/8 [animation-delay:-5s]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.12 }}
        className="cyber-shell relative z-10 space-y-20 py-24 lg:py-32"
      >
        <div className="grid gap-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start xl:gap-24">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-[#6C6863]">
                Profile Overview
              </span>
            </div>

            <div className="space-y-6">
              <h2 className="font-[var(--font-playfair)] text-[clamp(2.8rem,6vw,4.5rem)] font-normal leading-[0.92] text-[#1A1A1A]">
                About The
                <br />
                <em className="not-italic text-[#D4AF37]">Operator</em>
              </h2>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/10 bg-white/70 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.6} />
                <span className="font-[var(--font-inter)] text-[11px] text-[#6C6863]">
                  Blending engineering rigor with cinematic presentation.
                </span>
              </div>
            </div>

            <div className="space-y-5 text-[#6C6863]">
              <p className="text-base leading-relaxed">
                <span
                  className="float-left mr-3 font-[var(--font-playfair)] text-[4.5rem] font-normal leading-[0.78] text-[#1A1A1A]"
                  aria-hidden="true"
                >
                  I
                </span>
                &apos;m a dedicated AI Engineer and Full Stack Developer with a passion for
                creating intelligent solutions that make a real-world impact. My work is driven by
                curiosity, system design, and a strong instinct for product polish.
              </p>
              <p className="text-base leading-relaxed">
                Specializing in GenAI, Computer Vision, and modern web technologies, I bridge the
                gap between cutting-edge AI research and practical, user-friendly applications.
                Every project is a chance to make complex technology feel effortless.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {studioSignals.map((signal, index) => (
                <motion.div
                  key={signal.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.7 }}
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="lux-depth-card border border-[#1A1A1A]/10 p-5"
                >
                  <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#6C6863]">
                    {signal.title}
                  </p>
                  <p className="mt-3 font-[var(--font-inter)] text-sm leading-6 text-[#1A1A1A]">
                    {signal.copy}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="lux-perspective relative">
              <motion.div
                ref={portraitRef}
                style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
                onMouseMove={handlePointerMove}
                onMouseLeave={resetPointer}
                className="lux-tilt-card group relative"
              >
                <div className="absolute -right-4 top-6 z-10 hidden rounded-[1.2rem] border border-[#1A1A1A]/10 bg-white/85 px-4 py-3 shadow-[0_18px_40px_rgba(26,26,26,0.08)] backdrop-blur-md md:block">
                  <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.24em] text-[#6C6863]">
                    Creative Stack
                  </p>
                  <p className="mt-2 font-[var(--font-playfair)] text-xl text-[#1A1A1A]">
                    Motion + Depth
                  </p>
                </div>

                <div className="group relative overflow-hidden rounded-[2rem] border border-[#1A1A1A]/10 bg-[#EDE8E0] shadow-[0_22px_60px_rgba(26,26,26,0.1)]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src="/avt1.jpg"
                      alt="Jimmy Nguyen"
                      fill
                      sizes="(max-width: 1280px) 100vw, 480px"
                      className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/45 via-transparent to-white/15" />
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.16)]" />

                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-8 hidden font-[var(--font-inter)] text-[8px] uppercase tracking-[0.3em] text-[#F9F8F6]/60 xl:block"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      AI Engineer / Portfolio
                    </span>

                    <div className="absolute bottom-5 left-5 right-5 rounded-[1.2rem] border border-white/15 bg-black/20 px-5 py-4 backdrop-blur-md">
                      <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.26em] text-white/55">
                        Personal Note
                      </p>
                      <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-white/85">
                        I enjoy turning complex AI workflows into experiences people actually want
                        to use.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "1+", label: "Years Experience" },
                { number: "8+", label: "Projects Done" },
                { number: "2", label: "Internships" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="cyber-stat border border-[#1A1A1A]/10 bg-white/45 px-4 py-5 backdrop-blur-sm"
                >
                  <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-[var(--font-playfair)] text-3xl text-[#D4AF37]">
                    {stat.number}
                  </p>
                </motion.div>
              ))}
            </div>

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

          <div className="lux-glass-card relative overflow-hidden border border-[#1A1A1A]/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <div className="border-b border-[#1A1A1A]/10 px-6 py-5">
              <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em] text-[#6C6863]">
                profile://jimmy/details
              </p>
            </div>

            <div className="space-y-8 px-6 py-8 sm:px-8">
              <div className="flex flex-wrap gap-3">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`relative overflow-hidden border px-5 py-3 text-[11px] ${
                        isActive
                          ? "border-[#D4AF37] text-[#1A1A1A]"
                          : "border-[#1A1A1A]/15 text-[#6C6863] hover:border-[#1A1A1A]/30 hover:text-[#1A1A1A]"
                      } cyber-tab`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="about-active-tab"
                          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.18),rgba(255,255,255,0.7))]"
                          transition={{ type: "spring", stiffness: 220, damping: 22 }}
                        />
                      )}
                      <span className="relative z-10 flex min-h-[20px] items-center gap-2">
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[24rem]">
                <AnimatePresence mode="wait">
                  {activeTab === "skills" && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-5"
                    >
                      {Object.entries(skills).map(([category, items], categoryIndex) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: categoryIndex * 0.08, duration: 0.35 }}
                          className="space-y-3"
                        >
                          <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                            {category}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                              <motion.span
                                key={skill}
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="cyber-chip"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                          <div className="h-px w-full bg-[#1A1A1A]/6" />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "experience" && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-6"
                    >
                      {experience.map((exp, index) => (
                        <motion.div
                          key={exp.role}
                          initial={{ opacity: 0, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.35 }}
                          className="lux-depth-card space-y-3 border border-[#D4AF37]/20 px-5 py-5"
                        >
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
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "education" && (
                    <motion.div
                      key="education"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-5"
                    >
                      {education.map((edu, index) => (
                        <motion.div
                          key={`${edu.period}-${edu.degree}`}
                          initial={{ opacity: 0, x: -18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.35 }}
                          className="lux-depth-card flex gap-5 border border-[#1A1A1A]/10 p-5"
                        >
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-white">
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
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative overflow-hidden bg-[#1A1A1A] py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_32%)]" />
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent" />

        <div className="relative z-10 mb-5 px-8">
          <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.3em] text-white/40">
            Technology Stack
          </p>
        </div>

        <div className="relative z-10 flex overflow-hidden">
          <div className="animate-marquee-ltr flex gap-3 whitespace-nowrap px-8">
            {row1.map((tech, index) => (
              <div
                key={`r1-${tech.label}-${index}`}
                className="lux-marquee-card inline-flex items-center gap-3 px-5 py-3"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center">
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

        <div className="relative z-10 mt-3 flex overflow-hidden">
          <div className="animate-marquee-rtl flex gap-3 whitespace-nowrap px-8">
            {row2.map((tech, index) => (
              <div
                key={`r2-${tech.label}-${index}`}
                className="lux-marquee-card inline-flex items-center gap-3 px-5 py-3"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center">
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
