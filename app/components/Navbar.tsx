"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

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
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = links
        .map((link) => link.href.slice(1))
        .find((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        });
      if (current) setActiveSection(`#${current}`);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-700 ${
          scrolled
            ? "bg-[#F9F8F6]/95 backdrop-blur-sm border-b border-[#1A1A1A]/8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="cyber-shell flex min-h-[84px] items-center justify-between gap-8 px-8">
          {/* Brand */}
          <a
            href="#home"
            onClick={() => setActiveSection("#home")}
            className="group min-w-0"
          >
            <span className="block font-[var(--font-playfair)] text-[1.35rem] tracking-tight text-[#1A1A1A] transition-colors duration-500 group-hover:text-[#D4AF37]">
              Jimmy Nguyen
            </span>
            <span className="mt-0.5 block font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em] text-[#6C6863]">
              AI Engineer — Sydney
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`cyber-nav-link relative transition-colors duration-500 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#6C6863] hover:text-[#1A1A1A]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-[#D4AF37] transition-all duration-500" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="https://github.com/JimmyNguyen09-AI"
              target="_blank"
              rel="noreferrer"
              className="text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/"
              target="_blank"
              rel="noreferrer"
              className="text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <div className="h-4 w-px bg-[#1A1A1A]/15" />
            <a href="#contact" className="cyber-button h-10 px-6">
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="text-[#1A1A1A] transition-colors duration-300 hover:text-[#D4AF37] lg:hidden"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-[85] bg-[#1A1A1A]/20 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[90] flex h-screen w-full max-w-sm flex-col bg-[#F9F8F6] transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A]/8 px-8 py-6">
          <span className="font-[var(--font-playfair)] text-xl tracking-tight text-[#1A1A1A]">
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-[#6C6863] transition-colors hover:text-[#1A1A1A]"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-1 flex-col px-8 py-8 gap-0">
          {links.map((link, i) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  setActiveSection(link.href);
                }}
                className={`flex items-baseline justify-between border-b border-[#1A1A1A]/8 py-7 font-[var(--font-playfair)] text-[2rem] leading-tight transition-colors duration-500 ${
                  isActive ? "text-[#D4AF37]" : "text-[#1A1A1A] hover:text-[#D4AF37]"
                }`}
              >
                <span>{link.label}</span>
                <span className="font-[var(--font-inter)] text-[9px] tracking-[0.28em] text-[#6C6863]">
                  0{i + 1}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="border-t border-[#1A1A1A]/8 px-8 py-8">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="cyber-button w-full"
          >
            <span>Get In Touch</span>
          </a>
          <div className="mt-6 flex items-center gap-5">
            <a
              href="https://github.com/JimmyNguyen09-AI"
              target="_blank"
              rel="noreferrer"
              className="text-[#6C6863] transition-colors hover:text-[#D4AF37]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/"
              target="_blank"
              rel="noreferrer"
              className="text-[#6C6863] transition-colors hover:text-[#D4AF37]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
