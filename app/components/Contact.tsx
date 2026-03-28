'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, Signal } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ng.trungthanh04@gmail.com",
      link: "mailto:ng.trungthanh04@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+61 432 047 700",
      link: "tel:+61432047700",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hurstville NSW, Australia",
      link: "https://www.google.com/maps/place/Hurstville+NSW+2220",
    },
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
  ];

  return (
    <section id="contact" className="cyber-section overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 cyber-grid opacity-45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgb(0_255_136_/_0.12),transparent_26%),radial-gradient(circle_at_82%_72%,rgb(0_212_255_/_0.12),transparent_28%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.15 }}
        className="cyber-shell relative z-10 space-y-12"
      >
        <div className="max-w-3xl space-y-5">
          <span className="cyber-kicker">
            <Signal className="h-4 w-4" strokeWidth={1.5} />
            Open Communication
          </span>
          <h2 className="cyber-heading text-[clamp(2.5rem,7vw,4.8rem)] text-white">
            Let&apos;s Work
            <br />
            <span className="text-[var(--accent-secondary)]">Together</span>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
            Have a project in mind or want to discuss opportunities? This section keeps the same
            contact pathways, but now feels like sending a message through a secured terminal.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-6">
            <div className="cyber-terminal">
              <div className="cyber-terminal-header">
                <div className="cyber-terminal-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <p className="cyber-label text-[10px] text-white/42">contact://access-points</p>
              </div>

              <div className="space-y-4 px-5 py-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;

                  return (
                    <a
                      key={info.title}
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noreferrer" : undefined}
                      className="cyber-panel cyber-panel-hover flex items-start gap-4 p-4"
                    >
                      <div className="cyber-icon-box shrink-0">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1">
                        <p className="cyber-label text-[10px] text-white/42">{info.title}</p>
                        <p className="text-sm leading-6 text-white/78">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="cyber-panel p-5">
              <p className="cyber-label text-xs text-[var(--accent)]">Availability</p>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Currently accepting freelance projects and full-time opportunities in AI/ML and
                Software Development.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
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

          <div className="cyber-terminal">
            <div className="cyber-terminal-header">
              <div className="cyber-terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <p className="cyber-label text-[10px] text-white/42">transmit://secure-form</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 px-5 py-6 sm:px-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="cyber-label text-[10px] text-white/50">
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
                      className="cyber-input"
                      placeholder="Enter your name here"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="cyber-label text-[10px] text-white/50">
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
                      className="cyber-input"
                      placeholder="Enter your email here"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="cyber-label text-[10px] text-white/50">
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
                    className="cyber-input"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="cyber-label text-[10px] text-white/50">
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
                    className="cyber-textarea"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="cyber-button cyber-button-glitch w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' && "Sending..."}
                {status === 'success' && "Message Sent!"}
                {status === 'idle' && "Send Message"}
                <Send className="h-4 w-4" strokeWidth={1.5} />
              </button>

              {status === 'success' && (
                <div className="cyber-cut-sm border border-[rgba(0,255,136,0.35)] bg-[rgba(0,255,136,0.08)] px-4 py-4 text-sm text-[var(--accent)]">
                  Thank you! I&apos;ll get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
