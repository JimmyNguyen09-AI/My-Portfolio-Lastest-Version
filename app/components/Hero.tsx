"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Download, MapPin, Sparkles } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import AmbientMotion from "./AmbientMotion";
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

const floatingSignals = [
  { label: "Realtime AI", value: "Agents, RAG, streaming", className: "-left-5 top-8 xl:-left-32" },
  { label: "Shipping Mode", value: "From idea to production", className: "-right-5 top-24 xl:-right-32" },
  { label: "Design Feel", value: "Editorial x cinematic", className: "-bottom-2 left-4 xl:-left-24" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 130,
    damping: 18,
    mass: 0.5,
  });
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 130,
    damping: 18,
    mass: 0.5,
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const portraitGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212,175,55,0.34), transparent 48%)`;

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - offsetY) * 16);
    rotateY.set((offsetX - 0.5) * 18);
    glowX.set(offsetX * 100);
    glowY.set(offsetY * 100);
  };

  const resetPointer = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#F9F8F6] pt-[84px]"
    >
      <AmbientMotion tone="light" density="rich" />

      <motion.div
        aria-hidden="true"
        style={{ y: orbY }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[52rem]"
      >
        <div className="lux-ambient-orb left-[6%] top-20 h-56 w-56 bg-[#D4AF37]/20" />
        <div className="lux-ambient-orb right-[8%] top-36 h-72 w-72 bg-[#1A1A1A]/10 [animation-delay:-4s]" />
        <div className="lux-light-beam left-[14%] top-10 h-[28rem] w-40 rotate-[12deg]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ y: heroY }}
        className="cyber-shell relative z-10 grid min-h-[calc(100vh-84px)] items-end gap-16 py-20 xl:grid-cols-[1.1fr_0.9fr] xl:items-end xl:gap-20"
      >
        <div className="space-y-10 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#D4AF37]" />
            <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-[#6C6863]">
              Available For Work — Sydney, Australia
            </span>
          </motion.div>

          <div className="space-y-6">
            <div>
              <p className="mb-2 font-[var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#6C6863]">
                Hi, I&apos;m
              </p>
              <h1 className="font-[var(--font-playfair)] text-[clamp(3.8rem,10vw,7.5rem)] font-normal leading-[0.92] text-[#1A1A1A]">
                Jimmy{" "}
                <em className="not-italic text-[#D4AF37]">Nguyen</em>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="h-px w-6 bg-[#1A1A1A]/20" />
              <TypingTitle words={words} typingChar="|" />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
            <p className="max-w-xl font-[var(--font-inter)] text-[1rem] leading-relaxed text-[#6C6863]">
              Crafting intelligent systems where GenAI, computer vision, and polished product
              design come together. I build experiences that feel futuristic, but land with
              clarity, trust, and business value.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9 }}
              className="lux-glass-card relative overflow-hidden p-5"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                Current Focus
              </p>
              <p className="mt-3 font-[var(--font-playfair)] text-2xl leading-tight text-[#1A1A1A]">
                AI products with premium UX.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-[#6C6863]">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.6} />
                <span className="font-[var(--font-inter)] text-[11px]">
                  Motion, systems thinking, and production-first delivery.
                </span>
              </div>
            </motion.div>
          </div>

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

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Status", value: "Available" },
              { label: "Projects", value: "8+" },
              { label: "Focus", value: "AI x Web" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 * index + 0.25, duration: 0.75 }}
                whileHover={{ y: -6 }}
                className="lux-depth-card border border-[#1A1A1A]/10 px-5 py-5"
              >
                <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                  {item.label}
                </p>
                <p className="mt-2 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em] text-[#6C6863]">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="cyber-chip"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="lux-perspective relative mx-auto w-full max-w-[34rem] pb-10 xl:ml-auto">
          <span
            aria-hidden="true"
            className="absolute -left-10 bottom-24 hidden font-[var(--font-inter)] text-[8px] uppercase tracking-[0.32em] text-[#6C6863] xl:block"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Editorial / Vol. 02
          </span>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-10%] hidden xl:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-[42px] border border-[#D4AF37]/20" />
            <div className="absolute inset-[8%] rounded-[34px] border border-[#1A1A1A]/10" />
          </motion.div>

          {floatingSignals.map((signal, index) => (
            <motion.div
              key={signal.label}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className={`lux-floating-signal lux-glass-card absolute z-30 hidden max-w-[13rem] px-4 py-3 xl:block ${signal.className}`}
            >
              <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.24em] text-[#6C6863]">
                {signal.label}
              </p>
              <p className="mt-2 font-[var(--font-inter)] text-sm leading-5 text-[#1A1A1A]">
                {signal.value}
              </p>
            </motion.div>
          ))}

          <motion.div
            ref={cardRef}
            style={{ y: portraitY, rotateX: smoothRotateX, rotateY: smoothRotateY }}
            onMouseMove={handlePointerMove}
            onMouseLeave={resetPointer}
            className="lux-tilt-card group relative overflow-visible"
          >
            <motion.div
              className="absolute inset-6 rounded-[2rem] opacity-80 blur-3xl"
              style={{ background: portraitGlow }}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#1A1A1A]/10 bg-[#EDE8E0] shadow-[0_30px_80px_rgba(26,26,26,0.16)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.7),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.42),transparent_32%)]" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/avt2.jpg"
                  alt="Jimmy Nguyen"
                  fill
                  priority
                  sizes="(max-width: 1280px) 90vw, 540px"
                  className="object-cover object-top transition-transform duration-[1800ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-white/10" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.22)]" />

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                  <div className="max-w-[17rem] rounded-[1.2rem] border border-white/15 bg-black/20 px-5 py-4 backdrop-blur-md">
                    <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.28em] text-[#F9F8F6]/55">
                      Primary Role
                    </p>
                    <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-[#F9F8F6]/88">
                      Building intelligent products with GenAI, CV, and modern web systems.
                    </p>
                  </div>

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 5.2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="rounded-[1.1rem] border border-white/15 bg-white/12 px-4 py-3 text-right backdrop-blur-md"
                  >
                    <p className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.24em] text-white/55">
                      Signature
                    </p>
                    <p className="mt-1 font-[var(--font-playfair)] text-xl text-white">
                      Human + AI
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 flex items-center justify-between border-t border-[#1A1A1A]/10 pt-5">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#6C6863]" strokeWidth={1.5} />
              <span className="font-[var(--font-inter)] text-[11px] text-[#6C6863]">
                Hurstville NSW, Australia
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.8)]" />
              <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#6C6863]">
                Open To Work
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em] text-[#6C6863]">
          Scroll
        </span>
        <div className="relative h-14 w-px overflow-hidden bg-[#1A1A1A]/10">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#D4AF37] to-transparent animate-[beamSweep_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
