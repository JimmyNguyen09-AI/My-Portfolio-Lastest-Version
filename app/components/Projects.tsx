'use client';

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const categories = ["All", "Computer Vision", "GenAI & FullStack"];

const projects = [
    {
        id: 1,
        title: "ZORA – AI Chat Platform",
        description: "Scalable AI chat system using microservices architecture with RAG for context-aware responses and real-time message streaming with secure JWT authentication.",
        image: "/jnzora.jpg",
        category: "GenAI & FullStack",
        tags: ["FastAPI", "LangChain", "Pixtral 12B", "Next.js", "Docker", "ExpressJS","NodeJS","PostgreSQL", "Vercel"],
        github: "https://github.com/JimmyNguyen09-AI",
        demo: "https://www.jnzora.com",
        featured: true
    },
    {
        id: 2,
        title: "Quick, Draw! – Finger Drawing Recognition",
        description: "Recreated Google's Quick, Draw! game with real-time finger tracking via webcam. Implemented gesture recognition and digit classification using OpenCV and custom CNN.",
        image: "/quickdraw.gif",
        category: "Computer Vision",
        tags: ["Python", "OpenCV", "CNN", "Computer Vision","Mediapipe"],
        github: "https://github.com/JimmyNguyen09-AI/QuickDrawGoogle-CNN",
        demo: "https://github.com/JimmyNguyen09-AI/QuickDrawGoogle-CNN",
        featured: true
    },
    {
        id: 3,
        title: "Staff-Tracking YOLO",
        description: "Real-time staff detection and tracking in video streams using YOLOv5. Automatically marks seats as empty when staff leave and logs absence duration.",
        image: "/output.gif",
        category: "Computer Vision",
        tags: ["Python", "OpenCV", "YOLO", "Ultralytics"],
        github: "https://github.com/JimmyNguyen09-AI/Staff-Tracking",
        demo: "https://github.com/JimmyNguyen09-AI/Staff-Tracking",
        featured: true
    },
    
    {
        id: 6,
        title: "DCGAN – Face Image Generation",
        description: "Deep Convolutional GAN to synthesize realistic human faces from noise vectors. Focused on training stability, visual quality, and generator-discriminator balance.",
        image: "/face_gene.jpg",
        category: "AI/ML",
        tags: ["PyTorch", "DCGAN", "Deep Learning", "GANs"],
        github: "https://github.com/JimmyNguyen09-AI/DCGANs-FaceGenerate",
        demo: "https://github.com/JimmyNguyen09-AI/DCGANs-FaceGenerate",
        featured: false
    },
    {
        id: 7,
        title: "Faster R-CNN – Object Detection",
        description: "Applied pretrained Faster R-CNN model to detect and classify objects using Pascal VOC dataset. Focused on evaluation, bounding box visualization, and dataset integration.",
        image: "/fasterRCNN.jpg",
        category: "Computer Vision",
        tags: ["PyTorch", "Faster R-CNN", "Pascal VOC", "Object Detection"],
        github: "https://github.com/JimmyNguyen09-AI/FasterRCNN-VOC",
        demo: "https://github.com/JimmyNguyen09-AI/FasterRCNN-VOC",
        featured: false
    },
    {
        id: 8,
        title: "Photomosaic Generator",
        description: "Tool to generate mosaic-style images and videos by matching tiles based on color similarity using image processing techniques and distance metrics.",
        image: "/phomosaic.jpg",
        category: "Computer Vision",
        tags: ["Python", "OpenCV", "NumPy", "Image Processing"],
        github: "https://github.com/JimmyNguyen09-AI/Photomosaic-Generator",
        demo: "https://github.com/JimmyNguyen09-AI/Photomosaic-Generator",
        featured: false
    }
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects = activeCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
            <AnimatePresence >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
                            My Work
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
                        Featured <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        A showcase of my work in AI/ML, Computer Vision, and GenAI applications
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mt-6" />
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Featured badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        ⭐ Featured
                                    </span>
                                </div>
                            )}

                            {/* Project image */}
                            <div className="relative h-56 overflow-hidden bg-slate-900">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 mix-blend-overlay" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent transition-opacity duration-300 ${
                                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                                }`}>
                                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-sm font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                            </svg>
                                            GitHub
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-white text-sm font-medium hover:scale-105 transition-all flex items-center justify-center gap-2"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Project info */}
                            <div className="p-6 space-y-4">
                                {/* Category badge */}
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                                        {project.category}
                                    </span>
                                    <svg 
                                        className="w-5 h-5 text-white/40 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-white/5 text-white/70 rounded-lg border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View more button */}
                <div className="text-center mt-16">
                    <a
                        href="https://github.com/JimmyNguyen09-AI"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 group"
                    >
                        View All Projects on GitHub
                        <svg 
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>

            </motion.div>
            </AnimatePresence>
        </section>
    );
}