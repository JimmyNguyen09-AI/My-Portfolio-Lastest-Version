"use client";

import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "AI/ML Development",
    "Computer Vision",
    "GenAI Solutions",
    "Full Stack Development",
    "Web Applications",
    "API Development",
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/JimmyNguyen09-AI" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/" },
    { name: "Email", icon: Mail, url: "mailto:ng.trungthanh04@gmail.com" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#1A1A1A]">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

      <div className="cyber-shell relative z-10 py-16 space-y-14">
        {/* ── Four-column grid ──────────────────────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.85fr_0.95fr] lg:gap-8">

          {/* Brand column */}
          <div className="space-y-6">
            <div>
              <p className="font-[var(--font-playfair)] text-[1.35rem] tracking-tight text-white">
                Jimmy Nguyen
              </p>
              <p
                className="mt-1 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em]"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                AI Engineer — Sydney
              </p>
            </div>
            <p
              className="font-[var(--font-inter)] text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              AI Engineer and Full Stack Developer crafting intelligent solutions at the
              intersection of AI and web development.
            </p>
            <div className="inline-flex items-center gap-2.5 border border-[#D4AF37] border-opacity-30 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span
                className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em]"
                style={{ color: "#D4AF37" }}
              >
                Available for hire
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em]"
              style={{ color: "#D4AF37" }}
            >
              Quick Links
            </p>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 font-[var(--font-inter)] text-sm transition-colors duration-500 hover:text-[#D4AF37]"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  <span className="h-px w-4 shrink-0 bg-current" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em]"
              style={{ color: "#D4AF37" }}
            >
              Services
            </p>
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 font-[var(--font-inter)] text-sm"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div className="space-y-5">
            <p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em]"
              style={{ color: "#D4AF37" }}
            >
              Get In Touch
            </p>
            <div className="space-y-4">
              <a
                href="mailto:ng.trungthanh04@gmail.com"
                className="flex items-start gap-3 font-[var(--font-inter)] text-sm transition-colors duration-500 hover:text-[#D4AF37]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                ng.trungthanh04@gmail.com
              </a>
              <a
                href="tel:+61432047700"
                className="flex items-start gap-3 font-[var(--font-inter)] text-sm transition-colors duration-500 hover:text-[#D4AF37]"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                +61 432 047 700
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex h-10 w-10 items-center justify-center border transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    style={{
                      borderColor: "rgba(255,255,255,0.25)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    aria-label={social.name}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────── */}
        <div
          className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p
            className="font-[var(--font-inter)] text-[11px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            &copy; {currentYear}{" "}
            <span style={{ color: "#D4AF37" }}>Jimmy Nguyen</span>.{" "}
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Crafted with precision
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex h-10 w-10 items-center justify-center border transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
