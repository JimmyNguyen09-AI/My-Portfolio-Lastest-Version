'use client';

import { ArrowUp, CheckCircle2, Github, Linkedin, Mail, Phone } from "lucide-react";

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
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/JimmyNguyen09-AI",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:ng.trungthanh04@gmail.com",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 cyber-grid opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_30%,rgb(255_0_255_/_0.08),transparent_24%),radial-gradient(circle_at_84%_72%,rgb(0_255_136_/_0.08),transparent_24%)]"
      />

      <div className="cyber-shell relative z-10 space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.7fr_0.8fr_0.9fr]">
          <div className="cyber-panel p-5 sm:p-6">
            <p className="font-[var(--font-orbitron)] text-xl uppercase tracking-[0.28em] text-[var(--accent)]">
              Jimmy Nguyen
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
              AI Engineer and Full Stack Developer crafting intelligent solutions at the
              intersection of AI and web development.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.08)] px-4 py-3 text-sm text-[var(--accent)] cyber-cut-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_#00ff88]" />
              Available for hire
            </div>
          </div>

          <div className="cyber-panel p-5 sm:p-6">
            <p className="cyber-label text-xs text-[var(--accent-tertiary)]">Quick Links</p>
            <div className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-sm text-white/66 transition hover:text-[var(--accent)]"
                >
                  <span className="h-px w-5 bg-[linear-gradient(90deg,var(--accent),transparent)]" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="cyber-panel p-5 sm:p-6">
            <p className="cyber-label text-xs text-[var(--accent-secondary)]">Services</p>
            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <div key={service} className="flex items-start gap-3 text-sm text-white/66">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" strokeWidth={1.5} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-panel p-5 sm:p-6">
            <p className="cyber-label text-xs text-[var(--accent)]">Get In Touch</p>
            <div className="mt-5 space-y-4 text-sm text-white/66">
              <a href="mailto:ng.trungthanh04@gmail.com" className="flex items-start gap-3 hover:text-[var(--accent)]">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>ng.trungthanh04@gmail.com</span>
              </a>
              <a href="tel:+61432047700" className="flex items-start gap-3 hover:text-[var(--accent)]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>+61 432 047 700</span>
              </a>
              <p className="flex items-start gap-3">
                <span className="cyber-cut-sm mt-0.5 inline-block h-4 w-4 shrink-0 border border-[rgba(0,212,255,0.35)]" />
                <span>Allawah,NSW,2218, Australia</span>
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                    className="cyber-button-ghost"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="cyber-panel flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/56">
            &copy; {currentYear} <span className="text-[var(--accent)]">Jimmy Nguyen</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="cyber-label text-[10px] text-white/36">Made by Jimmy Nguyen</p>
            <button
              type="button"
              onClick={scrollToTop}
              className="cyber-button"
              aria-label="Scroll to top"
            >
              Back To Top
              <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
