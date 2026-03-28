/* eslint-disable @next/next/no-img-element */
'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, BrainCircuit, GraduationCap, Layers3, TimerReset } from "lucide-react";

type TabKey = 'skills' | 'experience' | 'education';

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
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Streamlit", "HTML5", "CSS3"],
  Backend: ["Node.js", "Python", "FastAPI", "Express", "REST APIs"],
  "Tools & Others": ["Git", "GitHub", "Docker", "AWS", "Vercel", "PostgreSQL", "Linux"],
};

const experience = [
  {
    period: "01/08/2024 - Present",
    role: "AI Agent Engineer",
    company: "GRCG - Global Remote Consulting Group",
    description:
      "Developing cutting-edge AI solutions and implementing machine learning models for production systems.",
  },
];

const education = [
  {
    period: "08/2022 - 08/2023",
    degree: "Bachelor of Automotive Technology",
    institution: "HUST - Hanoi University of Science and Technology",
    logo: "/hust.png",
  },
  {
    period: "11/2023 - Present",
    degree: "Bachelor of Information Technology",
    institution: "King's Own Institute",
    logo: "/koi.jpg",
  },
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

const tabs: { key: TabKey; label: string; icon: typeof BrainCircuit }[] = [
  { key: 'skills', label: 'Skills', icon: BrainCircuit },
  { key: 'experience', label: 'Experience', icon: TimerReset },
  { key: 'education', label: 'Education', icon: GraduationCap },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>('skills');

  const row1 = [...row1Techs, ...row1Techs];
  const row2 = [...row2Techs, ...row2Techs];

  return (
    <section id="about" className="cyber-section overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 cyber-grid opacity-45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgb(255_0_255_/_0.12),transparent_26%),radial-gradient(circle_at_84%_66%,rgb(0_255_136_/_0.12),transparent_28%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.15 }}
        className="cyber-shell relative z-10 space-y-14"
      >
        <div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="cyber-kicker">
                <Layers3 className="h-4 w-4" strokeWidth={1.5} />
                Profile Overview
              </span>
              <div className="space-y-5">
                <h2 className="cyber-heading text-[clamp(2.5rem,7vw,4.8rem)] text-white">
                  About The
                  <br />
                  <span className="text-[var(--accent-tertiary)]">Operator</span>
                </h2>
                <p className="max-w-xl text-base leading-8 text-white/68 sm:text-lg">
                  Passionate about building the future with AI. I translate research-heavy
                  concepts into practical products with real users, real latency constraints and
                  real business outcomes.
                </p>
              </div>
            </div>

            <div className="cyber-panel cyber-panel-hover p-4 sm:p-5">
              <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)]">
                <div className="cyber-cut relative aspect-[4/5] overflow-hidden border border-[rgba(0,212,255,0.18)]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,0,255,0.14),transparent_32%,rgba(0,255,136,0.18))]" />
                  <Image
                    src="/avt1.jpg"
                    alt="Jimmy Nguyen"
                    fill
                    sizes="(max-width: 1280px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="cyber-terminal">
                    <div className="cyber-terminal-header">
                      <div className="cyber-terminal-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <p className="cyber-label text-[10px] text-white/42">status://career.log</p>
                    </div>
                    <div className="space-y-3 px-4 py-4 text-sm text-white/70">
                      <p>
                        &gt; Dedicated AI Engineer and Full Stack Developer with a focus on
                        intelligent systems.
                      </p>
                      <p>
                        &gt; Bridging GenAI, Computer Vision and user-facing product engineering.
                      </p>
                      <p>
                        &gt; Constantly learning, prototyping and shipping.
                        <span className="blinking-cursor">_</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {[
                      { number: "1+", label: "Years Experience" },
                      { number: "8+", label: "Projects Done" },
                      { number: "1", label: "Completed Internship" },
                    ].map((stat) => (
                      <div key={stat.label} className="cyber-stat px-4 py-4">
                        <p className="cyber-label text-[10px] text-white/42">{stat.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-[var(--accent)]">
                          {stat.number}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="cyber-button">
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="/JimmyNguyenProfessionalCV.pdf"
                target="_blank"
                rel="noreferrer"
                className="cyber-button-secondary"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="cyber-terminal">
            <div className="cyber-terminal-header">
              <div className="cyber-terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <p className="cyber-label text-[10px] text-white/42">profile://jimmy/details</p>
            </div>

            <div className="space-y-8 px-5 py-6 sm:px-7 sm:py-7">
              <div className="space-y-4 text-sm leading-8 text-white/70 sm:text-base">
                <p>
                  I&apos;m a dedicated AI Engineer and Full Stack Developer with a passion for
                  creating intelligent solutions that make a real-world impact. My journey in tech
                  has been driven by curiosity and a constant desire to learn and innovate.
                </p>
                <p>
                  Specializing in GenAI, Computer Vision, and modern web technologies, I bridge the
                  gap between cutting-edge AI research and practical, user-friendly applications.
                  Every project is an opportunity to push boundaries and deliver exceptional
                  results.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring the latest AI papers,
                  contributing to open-source projects, or sharing knowledge with the developer
                  community.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.key;

                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`cyber-tab flex min-h-[48px] items-center gap-2 border px-4 py-3 text-xs sm:text-sm ${
                        isActive
                          ? "border-[rgba(0,255,136,0.42)] bg-[rgba(0,255,136,0.12)] text-[var(--accent)] shadow-[0_0_18px_rgba(0,255,136,0.12)]"
                          : "border-[rgba(42,42,58,0.95)] bg-[rgba(18,18,26,0.8)] text-white/60 hover:border-[rgba(0,212,255,0.3)] hover:text-[var(--accent-tertiary)]"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="min-h-[20rem]">
                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category} className="cyber-panel p-5">
                        <p className="cyber-label text-xs text-[var(--accent-tertiary)]">
                          {category}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          {items.map((skill) => (
                            <span key={skill} className="cyber-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-5">
                    {experience.map((exp) => (
                      <div key={exp.role} className="cyber-panel p-5">
                        <p className="cyber-label text-xs text-[var(--accent)]">{exp.period}</p>
                        <h3 className="mt-3 text-xl text-white">{exp.role}</h3>
                        <p className="mt-2 text-sm text-[var(--accent-tertiary)]">{exp.company}</p>
                        <p className="mt-4 text-sm leading-7 text-white/70">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-5">
                    {education.map((edu) => (
                      <div
                        key={`${edu.period}-${edu.degree}`}
                        className="cyber-panel flex flex-col gap-4 p-5 sm:flex-row sm:items-start"
                      >
                        <div className="cyber-cut-sm relative h-16 w-16 shrink-0 overflow-hidden border border-[rgba(0,212,255,0.2)] bg-white/5">
                          <Image
                            src={edu.logo}
                            alt={edu.institution}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="cyber-label text-xs text-[var(--accent-tertiary)]">
                            {edu.period}
                          </p>
                          <h3 className="text-lg leading-7 text-white">{edu.degree}</h3>
                          <p className="text-sm text-white/70">{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="relative -mt-2 overflow-hidden sm:-mt-6">
          <div className="cyber-terminal py-6">
            <div className="absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,var(--background),transparent)]" />
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,var(--background),transparent)]" />

            <div className="mb-4 px-5 sm:px-7">
              <p className="cyber-label text-xs text-white/42">stack://running-services</p>
            </div>

            <div className="flex overflow-hidden">
              <div className="animate-marquee-ltr flex gap-3 whitespace-nowrap px-5 sm:px-7">
                {row1.map((tech, index) => (
                  <div
                    key={`${tech.label}-${index}`}
                    className="cyber-cut-sm inline-flex items-center gap-3 border border-[rgba(42,42,58,0.95)] bg-[rgba(18,18,26,0.78)] px-4 py-3 text-sm text-white/70"
                  >
                    <div className="flex h-6 w-6 items-center justify-center">
                      <img
                        src={tech.img}
                        alt={tech.label}
                        className="h-5 w-5 object-contain"
                        style={{
                          filter:
                            tech.label === "Next.js" || tech.label === "Express" || tech.label === "OpenAI"
                              ? "invert(1)"
                              : "none",
                        }}
                      />
                    </div>
                    <span className="cyber-label text-[10px] text-white/70">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex overflow-hidden">
              <div className="animate-marquee-rtl flex gap-3 whitespace-nowrap px-5 sm:px-7">
                {row2.map((tech, index) => (
                  <div
                    key={`${tech.label}-${index}`}
                    className="cyber-cut-sm inline-flex items-center gap-3 border border-[rgba(42,42,58,0.95)] bg-[rgba(18,18,26,0.78)] px-4 py-3 text-sm text-white/70"
                  >
                    <div className="flex h-6 w-6 items-center justify-center">
                      <img
                        src={tech.img}
                        alt={tech.label}
                        className="h-5 w-5 object-contain"
                        style={{
                          filter:
                            tech.label === "GitHub" || tech.label === "AWS" || tech.label === "Pydantic"
                              ? "invert(1)"
                              : "none",
                        }}
                      />
                    </div>
                    <span className="cyber-label text-[10px] text-white/70">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
