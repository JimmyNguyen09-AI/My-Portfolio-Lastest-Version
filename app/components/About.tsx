'use client';

import Image from "next/image";
import { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');

    const skills = {
        "AI & Machine Learning": ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "GenAI", "LangChain"],
        "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
        "Backend": ["Node.js", "Python", "FastAPI", "Express", "REST APIs"],
        "Tools & Others": ["Git", "GitHub", "Docker", "AWS", "Vercel", "MongoDB"]
    };

    const experience = [
        {
            period: "2023 - Present",
            role: "AI Engineer",
            company: "Tech Company",
            description: "Developing cutting-edge AI solutions and implementing machine learning models for production systems."
        },
        {
            period: "2021 - 2023",
            role: "Full Stack Developer",
            company: "Digital Agency",
            description: "Built responsive web applications and integrated AI features for client projects."
        },
        {
            period: "2020 - 2021",
            role: "Junior Developer",
            company: "Startup Inc",
            description: "Collaborated on developing web applications and learning modern development practices."
        }
    ];

    const education = [
        {
            period: "2018 - 2022",
            degree: "Bachelor of Computer Science",
            institution: "University Name",
            description: "Specialized in Artificial Intelligence and Software Engineering with honors."
        },
        {
            period: "2023",
            degree: "AI Certification",
            institution: "Online Platform",
            description: "Advanced certification in Machine Learning and Deep Learning applications."
        }
    ];

    return (
        <section id="about" className="relative py-20 md:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)]" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
                            Get to know me
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
                        About <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left side - Image and stats */}
                    <div className="space-y-8">
                        <div className="relative group">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                            
                            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 mix-blend-overlay" />
                                <Image
                                    src="/avt.jpeg"
                                    alt="Jimmy Nguyen"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { number: "5+", label: "Years Experience" },
                                { number: "50+", label: "Projects Done" },
                                { number: "30+", label: "Happy Clients" }
                            ].map((stat, index) => (
                                <div 
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                                        {stat.number}
                                    </p>
                                    <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-8">
                        {/* Bio */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">
                                Passionate about building the future with AI
                            </h3>
                            <div className="space-y-4 text-white/70 leading-relaxed">
                                <p>
                                    I&apos;m a dedicated AI Engineer and Full Stack Developer with a passion for creating 
                                    intelligent solutions that make a real-world impact. My journey in tech has been 
                                    driven by curiosity and a constant desire to learn and innovate.
                                </p>
                                <p>
                                    Specializing in GenAI, Computer Vision, and modern web technologies, I bridge 
                                    the gap between cutting-edge AI research and practical, user-friendly applications. 
                                    Every project is an opportunity to push boundaries and deliver exceptional results.
                                </p>
                                <p>
                                    When I&apos;m not coding, you&apos;ll find me exploring the latest AI papers, contributing 
                                    to open-source projects, or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div>
                            <div className="flex gap-2 mb-6 border-b border-white/10">
                                {(['skills', 'experience', 'education'] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-3 font-semibold capitalize transition-all duration-300 relative ${
                                            activeTab === tab
                                                ? 'text-emerald-400'
                                                : 'text-white/50 hover:text-white/80'
                                        }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab content */}
                            <div className="min-h-[300px]">
                                {activeTab === 'skills' && (
                                    <div className="space-y-6 animate-fadeIn">
                                        {Object.entries(skills).map(([category, items]) => (
                                            <div key={category}>
                                                <h4 className="text-white font-semibold mb-3">{category}</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {items.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="px-4 py-2 text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 hover:bg-white/10 hover:border-emerald-400/30 hover:text-emerald-400 transition-all duration-300 cursor-default"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'experience' && (
                                    <div className="space-y-6 animate-fadeIn">
                                        {experience.map((exp, index) => (
                                            <div
                                                key={index}
                                                className="relative pl-8 pb-6 border-l-2 border-white/10 last:pb-0 group hover:border-emerald-400/50 transition-colors"
                                            >
                                                <div className="absolute left-0 top-0 w-4 h-4 bg-emerald-400 rounded-full -translate-x-[9px] ring-4 ring-slate-950" />
                                                <p className="text-sm text-emerald-400 font-medium mb-1">{exp.period}</p>
                                                <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                                                <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                                                <p className="text-white/60 text-sm">{exp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'education' && (
                                    <div className="space-y-6 animate-fadeIn">
                                        {education.map((edu, index) => (
                                            <div
                                                key={index}
                                                className="relative pl-8 pb-6 border-l-2 border-white/10 last:pb-0 group hover:border-blue-400/50 transition-colors"
                                            >
                                                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px] ring-4 ring-slate-950" />
                                                <p className="text-sm text-blue-400 font-medium mb-1">{edu.period}</p>
                                                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                                <p className="text-emerald-400 font-medium mb-2">{edu.institution}</p>
                                                <p className="text-white/60 text-sm">{edu.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-emerald-500/25"
                            >
                                Let&apos;s Work Together
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </section>
    );
}