"use client"
import Image from "next/image";
import TypingTitle from "./_components/Typing";
import { AnimatePresence, motion } from "framer-motion";
export default function Hero() {
    const words = ["GenAI Engineer", "AI Engineer", "Full Stack Web Developer", "Computer Vision Engineer"];
    
    return (
        
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            
            <AnimatePresence >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
                                    Available for freelance
                                </span>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <span className="text-white/90">Hi, I&apos;m</span>
                                <br />
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                                        Jimmy Nguyen
                                    </span>
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 blur-sm" />
                                </span>
                            </h1>

                            <div className="flex items-center gap-3 justify-center lg:justify-start text-xl md:text-2xl text-white/70">
                                <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-emerald-400/50" />
                                <div className="min-h-[32px]">
                                    <TypingTitle words={words} typingChar="|" />
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Crafting intelligent solutions at the intersection of AI and web development. 
                            Transforming ideas into scalable, cutting-edge applications.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                            <a 
                                href="#contact" 
                                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Let&apos;s Collaborate
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            
                            <a 
                                href="/JimmyNguyenProfessionalCV.pdf" 
                                target="_blank" 
                                rel="noreferrer"
                                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                            >
                                View Resume
                            </a>
                        </div>

                        {/* Tech stack */}
                        <div className="pt-8">
                            <p className="text-xs uppercase tracking-wider text-white/40 mb-4 font-medium">
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                {["Python","Typescript","NodeJS","Pytorch","NEXT.JS","EXPRESS.JS","LangChain","OpenCV","Pydantic AI"].map((tech) => (
                                    <span 
                                        key={tech}
                                        className="px-4 py-2 text-sm font-medium text-white/70 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="relative">
                            {/* Glowing orbs */}
                            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                            
                            {/* Main image container */}
                            <div className="relative">
                                {/* Rotating border effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 p-[3px] animate-spin" style={{ animationDuration: '3s' }}>
                                    <div className="w-full h-full rounded-full bg-slate-950" />
                                </div>
                                
                                {/* Image */}
                                <div className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px] rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_0_80px_rgba(59,130,246,0.3)]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 mix-blend-overlay" />
                                    <Image
                                        src="/avt2.jpg"
                                        alt="Jimmy Nguyen"
                                        fill
                                        sizes="(max-width: 768px) 340px, 420px"
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-xl animate-float">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                                        <span className="text-sm font-semibold text-white">Available</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-white">5+</p>
                                        <p className="text-xs text-white/70">Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
            </motion.div>
            </AnimatePresence>
        </section>
    );
}