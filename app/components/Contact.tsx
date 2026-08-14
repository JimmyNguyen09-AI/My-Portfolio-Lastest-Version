"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import AmbientMotion from "./AmbientMotion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ng.trungthanh04@gmail.com",
      href: "mailto:ng.trungthanh04@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+61 432 047 700",
      href: "tel:+61432047700",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hurstville NSW, Australia",
      href: "https://www.google.com/maps/place/Hurstville+NSW+2220",
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/JimmyNguyen09-AI" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/trung-thanh-nguyen-5aab6b332/",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F9F8F6]">
      <AmbientMotion tone="light" density="calm" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.12 }}
        className="cyber-shell relative z-10 py-24 space-y-16 lg:py-32"
      >
        {/* ── Section Header ──────────────────────────────────────── */}
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#D4AF37]" />
            <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-[#6C6863]">
              Open Communication
            </span>
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(2.8rem,6vw,4.5rem)] font-normal leading-[0.92] text-[#1A1A1A]">
            Let&apos;s Work{" "}
            <em className="not-italic text-[#D4AF37]">Together</em>
          </h2>
          <p className="font-[var(--font-inter)] text-base leading-relaxed text-[#6C6863]">
            Have a project in mind or want to discuss opportunities? I&apos;m available for
            freelance projects and full-time roles in AI/ML and Software Development.
          </p>
        </div>

        {/* ── Two-Column Layout ───────────────────────────────────── */}
        <div className="grid gap-16 xl:grid-cols-[0.75fr_1.25fr] xl:gap-24">

          {/* ── Left: Contact Info ──────────────────────────────── */}
          <div className="space-y-10">
            {/* Contact links */}
            <div className="space-y-0">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-start gap-4 border-t border-[#1A1A1A]/10 py-5 transition-colors duration-500 last:border-b hover:border-[#D4AF37]/30"
                  >
                    <div className="mt-0.5 shrink-0 text-[#6C6863] transition-colors duration-500 group-hover:text-[#D4AF37]">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]">
                        {info.label}
                      </p>
                      <p className="mt-1 font-[var(--font-inter)] text-sm text-[#1A1A1A] transition-colors duration-500 group-hover:text-[#D4AF37]">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                  Currently Available
                </span>
              </div>
              <p className="font-[var(--font-inter)] text-sm leading-relaxed text-[#6C6863]">
                Accepting freelance projects and full-time opportunities in AI/ML and Software
                Development.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cyber-button-ghost inline-flex items-center gap-2"
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                    {social.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Right: Contact Form ─────────────────────────────── */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name + Email row */}
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]"
                  >
                    Your Name *
                  </label>
                  <div className="cyber-field">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="cyber-input font-[var(--font-inter)] text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]"
                  >
                    Your Email *
                  </label>
                  <div className="cyber-field">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="cyber-input font-[var(--font-inter)] text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]"
                >
                  Subject *
                </label>
                <div className="cyber-field">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="cyber-input font-[var(--font-inter)] text-sm"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em] text-[#6C6863]"
                >
                  Message *
                </label>
                <div className="cyber-field cyber-field--textarea">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="cyber-textarea font-[var(--font-inter)] text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="cyber-button w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span>
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                  {status === "idle" && "Send Message"}
                </span>
                {status === "idle" && (
                  <Send className="h-3.5 w-3.5" strokeWidth={1.5} />
                )}
              </button>

              {/* Success message */}
              {status === "success" && (
                <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-5 py-4">
                  <p className="font-[var(--font-inter)] text-sm text-[#6C6863]">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
