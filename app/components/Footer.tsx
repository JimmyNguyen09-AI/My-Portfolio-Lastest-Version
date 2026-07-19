"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import AmbientMotion from "./AmbientMotion";

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
      <AmbientMotion tone="dark" density="calm" />

      <div className="pointer-events-none absolute inset-0">
        <div className="lux-ambient-orb left-[-6rem] top-10 h-56 w-56 bg-[#D4AF37]/18" />
        <div className="lux-ambient-orb right-[12%] top-20 h-72 w-72 bg-white/6 [animation-delay:-6s]" />
      </div>

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />

      <div className="cyber-shell relative z-10 space-y-14 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.35 }}
          className="lux-footer-panel grid gap-6 border border-white/10 p-6 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/8 px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" strokeWidth={1.6} />
              <span className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]">
                Let&apos;s build something ambitious
              </span>
            </div>
            <h2 className="max-w-2xl font-[var(--font-playfair)] text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] text-white">
              Premium AI experiences deserve equally strong design and engineering.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-4 lg:items-end">
            <p className="max-w-md font-[var(--font-inter)] text-sm leading-7 text-white/62 lg:text-right">
              If you want a portfolio-worthy product, an AI system with polish, or a modern web
              experience that feels high-end, I&apos;m open to the conversation.
            </p>
            <a href="#contact" className="lux-btn-dark-outline min-w-[14rem]">
              Start a Project
            </a>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr_0.85fr_0.95fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.35 }}
            className="space-y-6"
          >
            <div>
              <p className="font-[var(--font-playfair)] text-[1.45rem] tracking-tight text-white">
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
              className="max-w-xs font-[var(--font-inter)] text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              AI Engineer and Full Stack Developer crafting intelligent solutions at the
              intersection of AI and web development.
            </p>

            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/8 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.65)]" />
              <span
                className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em]"
                style={{ color: "#D4AF37" }}
              >
                Available for hire
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.7 }}
            viewport={{ once: true, amount: 0.35 }}
            className="space-y-5"
          >
            <p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em]"
              style={{ color: "#D4AF37" }}
            >
              Quick Links
            </p>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-3 font-[var(--font-inter)] text-sm transition-colors duration-500 hover:text-[#D4AF37]"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  <span className="h-px w-4 shrink-0 bg-current" />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            viewport={{ once: true, amount: 0.35 }}
            className="space-y-5"
          >
            <p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.28em]"
              style={{ color: "#D4AF37" }}
            >
              Services
            </p>
            <div className="space-y-3">
              {services.map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 font-[var(--font-inter)] text-sm"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            viewport={{ once: true, amount: 0.35 }}
            className="space-y-5"
          >
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
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                    whileHover={{ y: -4, borderColor: "#D4AF37", color: "#D4AF37" }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300"
                    style={{
                      borderColor: "rgba(255,255,255,0.25)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    aria-label={social.name}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div
          className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p
            className="font-[var(--font-inter)] text-[11px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            &copy; {currentYear} <span style={{ color: "#D4AF37" }}>Jimmy Nguyen</span>. All rights
            reserved.
          </p>

          <div className="flex items-center gap-5">
            <p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Crafted with precision
            </p>
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -4, rotate: 6 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "rgba(255,255,255,0.7)",
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
