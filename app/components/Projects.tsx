"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import AmbientMotion from "./AmbientMotion";

const categories = ["All", "Computer Vision", "GenAI & FullStack"];

const projects = [
  {
    id: 1,
    title: "ZORA — AI Chat Platform",
    description:
      "Scalable AI chat system using microservices architecture with RAG for context-aware responses and real-time message streaming with secure JWT authentication.",
    image: "/zora.png",
    category: "GenAI & FullStack",
    tags: ["FastAPI", "LangChain", "MistralAI", "LangGraph", "Microservices", "Firebase", "JWT", "MCP", "RAG", "Next.js", "Docker", "PostgreSQL"],
    github: "https://github.com/JimmyNguyen09-AI",
    demo: "https://www.jnzora.com",
    featured: true,
  },
  {
    id: 2,
    title: "SKILLEXA — AI Coding Platform",
    description:
      "An online programming learning platform for developers using a microservices architecture separating backend and AI services.",
    image: "/skillexa.jpg",
    category: "GenAI & FullStack",
    tags: ["FastAPI", "LangChain", "MistralAI", "LangGraph", "RAG", "React.js", "Docker", "ASP.NET", "PostgreSQL"],
    github: "https://github.com/JimmyNguyen09-AI",
    demo: "https://www.skillexa.site",
    featured: true,
  },
  {
    id: 3,
    title: "Quick, Draw! Recognition",
    description:
      "Recreated Google's Quick, Draw! game with real-time finger tracking via webcam. Implemented gesture recognition and digit classification using OpenCV and custom CNN.",
    image: "/quickdraw.gif",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "CNN", "Computer Vision", "Mediapipe"],
    github: "https://github.com/JimmyNguyen09-AI/QuickDrawGoogle-CNN",
    demo: "https://github.com/JimmyNguyen09-AI/QuickDrawGoogle-CNN",
    featured: true,
  },
  {
    id: 4,
    title: "Staff-Tracking YOLO",
    description:
      "Real-time staff detection and tracking in video streams using YOLOv5. Automatically marks seats as empty when staff leave and logs absence duration.",
    image: "/output.gif",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "YOLO", "Ultralytics"],
    github: "https://github.com/JimmyNguyen09-AI/Staff-Tracking",
    demo: "https://github.com/JimmyNguyen09-AI/Staff-Tracking",
    featured: true,
  },
  {
    id: 5,
    title: "DCGAN — Face Generation",
    description:
      "Deep Convolutional GAN to synthesize realistic human faces from noise vectors. Focused on training stability, visual quality, and generator-discriminator balance.",
    image: "/face_gene.jpg",
    category: "AI/ML",
    tags: ["PyTorch", "DCGAN", "Deep Learning", "GANs"],
    github: "https://github.com/JimmyNguyen09-AI/DCGANs-FaceGenerate",
    demo: "https://github.com/JimmyNguyen09-AI/DCGANs-FaceGenerate",
    featured: false,
  },
  {
    id: 6,
    title: "Faster R-CNN Detection",
    description:
      "Applied pretrained Faster R-CNN model to detect and classify objects using Pascal VOC dataset. Focused on evaluation, bounding box visualization, and dataset integration.",
    image: "/fasterRCNN.jpg",
    category: "Computer Vision",
    tags: ["PyTorch", "Faster R-CNN", "Pascal VOC", "Object Detection"],
    github: "https://github.com/JimmyNguyen09-AI/FasterRCNN-VOC",
    demo: "https://github.com/JimmyNguyen09-AI/FasterRCNN-VOC",
    featured: false,
  },
  {
    id: 7,
    title: "Photomosaic Generator",
    description:
      "Tool to generate mosaic-style images and videos by matching tiles based on color similarity using image processing techniques and distance metrics.",
    image: "/phomosaic.jpg",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "NumPy", "Image Processing"],
    github: "https://github.com/JimmyNguyen09-AI/Photomosaic-Generator",
    demo: "https://github.com/JimmyNguyen09-AI/Photomosaic-Generator",
    featured: false,
  },
  {
    id: 8,
    title: "Traffic Violation Detection",
    description:
      "End-to-end computer vision system that automatically detects vehicles violating red traffic lights, captures license plates, and visualizes violations in real-time.",
    image: "/red_light.jpg",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "YOLOv8", "Docker", "Roboflow", "Streamlit"],
    github: "https://github.com/JimmyNguyen09-AI/Traffic-Light-Violation-Detection-YOLO",
    demo: "https://github.com/JimmyNguyen09-AI/Traffic-Light-Violation-Detection-YOLO",
    featured: true,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#1A1A1A]">
      <AmbientMotion tone="dark" density="rich" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.1 }}
        className="cyber-shell relative z-10 py-24 space-y-14 lg:py-32"
      >
        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6">
            {/* Overline */}
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#D4AF37]" />
              <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-white/50">
                Selected Deployments
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-[var(--font-playfair)] text-[clamp(2.8rem,6vw,4.5rem)] font-normal leading-[0.92] text-white">
              Featured{" "}
              <em className="not-italic text-[#D4AF37]">Projects</em>
            </h2>

            <p className="font-[var(--font-inter)] text-base leading-relaxed text-white/60">
              A showcase of my work in AI/ML, Computer Vision, and GenAI applications —
              a live dossier of systems built and shipped.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`cyber-filter min-h-[44px] border px-5 py-2.5 text-[11px] transition-colors duration-300 ${
                    isActive
                      ? "border-[#D4AF37] text-[#D4AF37]"
                      : "border-white/20 text-white/55 hover:border-white/40 hover:text-white/85"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Projects Grid ─────────────────────────────────────── */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group flex h-full flex-col border-t border-white/15 bg-transparent transition-all duration-500 hover:bg-white/[0.03] ${
                index % 3 === 1 ? "md:mt-8" : ""
              } ${index % 3 === 2 ? "xl:-mt-6" : ""}`}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0d0d0d]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.04]"
                  />
                  {/* Bottom gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span
                      className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.12em] border px-2.5 py-1"
                      style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)", background: "rgba(0,0,0,0.35)" }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.12em] border px-2.5 py-1"
                        style={{ borderColor: "rgba(212,175,55,0.4)", color: "#D4AF37", background: "rgba(0,0,0,0.35)" }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col gap-5 px-0 py-6">
                <div className="space-y-2.5">
                  <h3 className="font-[var(--font-playfair)] text-xl leading-snug text-white transition-colors duration-500 group-hover:text-[#D4AF37]">
                    {project.title}
                  </h3>
                  <p className="font-[var(--font-inter)] text-sm leading-7 text-white/55">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.1em] border px-2 py-1"
                      style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 6 && (
                    <span
                      className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.1em] border px-2 py-1"
                      style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                    >
                      +{project.tags.length - 6}
                    </span>
                  )}
                </div>

                {/* Action links */}
                <div className="mt-auto flex gap-3 border-t border-white/10 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 min-h-[44px] items-center justify-center gap-2 border font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-white/50 hover:text-white"
                    style={{ borderColor: "rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.6)" }}
                  >
                    <Github className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 min-h-[44px] items-center justify-center gap-2 border font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    style={{ borderColor: "rgba(212,175,55,0.35)", color: "rgba(212,175,55,0.75)" }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See all CTA */}
        <div className="flex justify-center border-t border-white/10 pt-12">
          <a
            href="https://github.com/JimmyNguyen09-AI"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] items-center gap-3 border font-[var(--font-inter)] text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 px-8 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)" }}
          >
            View All Projects On GitHub
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
