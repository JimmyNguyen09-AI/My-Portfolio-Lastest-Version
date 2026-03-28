"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Menu, X } from "lucide-react";

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
      if (event.key === "Escape") {
        setOpen(false);
      }
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
        .find((sectionId) => {
          const element = document.getElementById(sectionId);
          if (!element) {
            return false;
          }

          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        });

      if (current) {
        setActiveSection(`#${current}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] px-3 pt-3 sm:px-5 sm:pt-5">
        <div
          className={`cyber-shell transition-all duration-300 ${
            scrolled ? "translate-y-0" : "translate-y-0"
          }`}
        >
          <div
            className={`cyber-panel cyber-cut-sm transition-all duration-300 ${
              scrolled
                ? "border-[rgba(0,255,136,0.32)] bg-[rgba(10,10,15,0.88)] shadow-[0_0_22px_rgba(0,255,136,0.12)]"
                : "bg-[rgba(10,10,15,0.7)]"
            }`}
          >
            <div className="flex min-h-[74px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <a
                href="#home"
                onClick={() => setActiveSection("#home")}
                className="group min-w-0"
              >
                <span className="block truncate font-[var(--font-orbitron)] text-sm uppercase tracking-[0.32em] text-[var(--accent)] sm:text-base">
                  Jimmy Nguyen
                </span>
                <span className="mt-1 block font-[var(--font-share-tech)] text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
                  AI // FULL STACK // ONLINE
                </span>
              </a>

              <nav className="hidden items-center gap-2 lg:flex">
                {links.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setActiveSection(link.href)}
                      data-active={isActive}
                      className={`cyber-nav-link cyber-cut-sm relative border px-4 py-3 text-[11px] tracking-[0.28em] transition-all duration-200 ${
                        isActive
                          ? "border-[rgba(0,255,136,0.45)] bg-[rgba(0,255,136,0.1)] text-[var(--accent)] shadow-[0_0_16px_rgba(0,255,136,0.12)]"
                          : "border-transparent text-white/62 hover:border-[rgba(0,212,255,0.3)] hover:bg-white/[0.03] hover:text-[var(--accent-tertiary)]"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href="https://github.com/JimmyNguyen09-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-icon-box h-11 w-11 text-white/70 transition hover:text-[var(--accent)]"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/"
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-icon-box h-11 w-11 text-white/70 transition hover:text-[var(--accent-secondary)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a href="#contact" className="cyber-button">
                  Open Channel
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="cyber-icon-box h-11 w-11 lg:hidden"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[85] bg-black/70 backdrop-blur-sm transition-opacity duration-200 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-[90] flex h-screen w-full max-w-xs flex-col bg-[rgba(6,7,11,0.96)] p-4 transition-transform duration-200 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="cyber-terminal flex h-full flex-col">
          <div className="cyber-terminal-header">
            <div>
              <p className="font-[var(--font-orbitron)] text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                Navigation
              </p>
              <p className="mt-1 font-[var(--font-share-tech)] text-[10px] uppercase tracking-[0.28em] text-white/45">
                access://jimmy.main
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="cyber-icon-box h-10 w-10"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-3 px-4 py-5">
            {links.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    setActiveSection(link.href);
                  }}
                  className={`cyber-cut-sm flex min-h-[54px] items-center justify-between border px-4 py-3 font-[var(--font-share-tech)] text-sm uppercase tracking-[0.22em] transition-all ${
                    isActive
                      ? "border-[rgba(0,255,136,0.45)] bg-[rgba(0,255,136,0.12)] text-[var(--accent)] shadow-[0_0_16px_rgba(0,255,136,0.14)]"
                      : "border-[rgba(42,42,58,0.95)] bg-[rgba(18,18,26,0.7)] text-white/68 hover:border-[rgba(0,212,255,0.3)] hover:text-[var(--accent-tertiary)]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </a>
              );
            })}
          </nav>

          <div className="border-t border-white/10 px-4 py-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="cyber-button cyber-button-glitch w-full"
            >
              Open Channel
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/JimmyNguyen09-AI"
                target="_blank"
                rel="noreferrer"
                className="cyber-icon-box h-11 w-11"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/"
                target="_blank"
                rel="noreferrer"
                className="cyber-icon-box h-11 w-11"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
