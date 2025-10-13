"use client";
import { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = links.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg" 
                        : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a 
                            href="#home" 
                            className="relative group"
                            onClick={() => setActiveSection("#home")}
                        >
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                Jimmy Nguyen
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setActiveSection(link.href)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                                        activeSection === link.href
                                            ? "text-emerald-400"
                                            : "text-white/70 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                    {activeSection === link.href && (
                                        <span className="absolute inset-0 bg-emerald-400/10 border border-emerald-400/20 rounded-lg" />
                                    )}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg text-sm font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-emerald-500/25"
                        >
                            Let &apos; s Talk
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                            aria-expanded={open}
                        >
                            <BiMenuAltRight size={24} className="text-white" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
                    open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={() => setOpen(false)}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            {/* Mobile Menu Drawer */}
            <aside
                className={`fixed right-0 top-0 z-50 h-screen w-72 bg-slate-950/95 backdrop-blur-xl border-l border-white/10 md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
                role="dialog"
                aria-modal="true"
            >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Menu
                    </span>
                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <AiOutlineClose size={22} className="text-white/70" />
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2 px-4 py-6">
                    {links.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => {
                                setOpen(false);
                                setActiveSection(link.href);
                            }}
                            className={`group relative rounded-xl px-5 py-4 transition-all duration-300 ${
                                activeSection === link.href
                                    ? "bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-emerald-400/30 text-emerald-400"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <span className="flex items-center justify-between">
                                <span className="font-medium">{link.label}</span>
                                <svg 
                                    className={`w-5 h-5 transition-transform ${
                                        activeSection === link.href ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                    }`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Mobile CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        Get In Touch
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <a 
                            href="https://github.com/JimmyNguyen09-AI" 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label="GitHub"
                        >
                            <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/" 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </aside>
        </>
    );
}