'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink, FolderGit2, Github, Star } from "lucide-react";

const categories = ["All", "Computer Vision", "GenAI & FullStack"];

const projects = [
  {
    id: 1,
    title: "ZORA - AI Chat Platform",
    description:
      "Scalable AI chat system using microservices architecture with RAG for context-aware responses and real-time message streaming with secure JWT authentication.",
    image: "/jnzora.jpg",
    category: "GenAI & FullStack",
    tags: [
      "FastAPI",
      "LangChain",
      "MistralAI",
      "LangGraph",
      "Microservices Pattern",
      "Firebase",
      "JWT",
      "MCP",
      "RAG",
      "LangSmith",
      "Next.js",
      "Docker",
      "ExpressJS",
      "NodeJS",
      "PostgreSQL",
      "Vercel",
    ],
    github: "https://github.com/JimmyNguyen09-AI",
    demo: "https://www.jnzora.com",
    featured: true,
  },
  {
    id: 2,
    title: "SKILLEXA - AI-Powered Coding Learning Platform",
    description:
      "An online programming learning platform for developers using a microservices architecture separating backend and AI services.",
    image: "/skillexa.jpg",
    category: "GenAI & FullStack",
    tags: [
      "FastAPI",
      "LangChain",
      "MistralAI",
      "LangGraph",
      "Microservices Pattern",
      "JWT",
      "RAG",
      "LangSmith",
      "React.js",
      "Docker",
      "ASP.NET",
      "PostgreSQL",
      "Vercel",
    ],
    github: "https://github.com/JimmyNguyen09-AI",
    demo: "https://www.skillexa.site",
    featured: true,
  },
  {
    id: 3,
    title: "Quick, Draw! - Finger Drawing Recognition",
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
    title: "DCGAN - Face Image Generation",
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
    title: "Faster R-CNN - Object Detection",
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
    title: "Traffic-Light-Violation-Detection",
    description:
      "This project is an end-to-end computer vision system that automatically detects vehicles violating red traffic lights, captures their license plates, and visualizes violations in a real-time web interface.",
    image: "/red_light.jpg",
    category: "Computer Vision",
    tags: ["Python", "OpenCV", "NumPy", "YOLOv8", "Docker", "Roboflow", "Streamlit"],
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
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="cyber-section overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 cyber-grid opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgb(0_212_255_/_0.14),transparent_28%),radial-gradient(circle_at_78%_72%,rgb(255_0_255_/_0.12),transparent_26%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.12 }}
        className="cyber-shell relative z-10 space-y-12"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <span className="cyber-kicker">
              <FolderGit2 className="h-4 w-4" strokeWidth={1.5} />
              Selected Deployments
            </span>
            <h2 className="cyber-heading text-[clamp(2.5rem,7vw,4.8rem)] text-white">
              Featured
              <br />
              <span className="text-[var(--accent)]">Projects</span>
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              A showcase of my work in AI/ML, Computer Vision, and GenAI applications, reframed as
              a live dossier rather than a standard portfolio grid.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`cyber-filter min-h-[48px] border px-4 py-3 text-xs sm:text-sm ${
                    isActive
                      ? "border-[rgba(0,255,136,0.42)] bg-[rgba(0,255,136,0.12)] text-[var(--accent)] shadow-[0_0_18px_rgba(0,255,136,0.12)]"
                      : "border-[rgba(42,42,58,0.95)] bg-[rgba(18,18,26,0.76)] text-white/60 hover:border-[rgba(0,212,255,0.3)] hover:text-[var(--accent-tertiary)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`cyber-panel cyber-panel-hover group flex h-full flex-col p-4 sm:p-5 ${
                index % 3 === 1 ? "md:translate-y-8" : ""
              } ${index % 3 === 2 ? "xl:-translate-y-6" : ""}`}
            >
              <div className="cyber-cut relative overflow-hidden border border-[rgba(0,212,255,0.2)]">
                <div className="relative aspect-[16/11] overflow-hidden bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_10%,rgba(10,10,15,0.82)_100%)]" />
                  <div className="absolute inset-0 cyber-grid opacity-25 mix-blend-screen" />

                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="cyber-chip border-[rgba(0,212,255,0.3)] text-[var(--accent-tertiary)]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="cyber-chip border-[rgba(255,0,255,0.35)] text-[var(--accent-secondary)]">
                        <Star className="h-3 w-3" strokeWidth={1.5} />
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 pt-5">
                <div className="space-y-3">
                  <h3 className="text-xl leading-8 text-white transition-colors group-hover:text-[var(--accent)]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/68">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="cyber-chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="cyber-button-ghost flex-1"
                  >
                    <Github className="h-4 w-4" strokeWidth={1.5} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="cyber-button flex-1"
                  >
                    <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                    View
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <a
            href="https://github.com/JimmyNguyen09-AI"
            target="_blank"
            rel="noreferrer"
            className="cyber-button-secondary"
          >
            View All Projects On GitHub
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
