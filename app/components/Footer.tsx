'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ];

    const services = [
        "AI/ML Development",
        "Computer Vision",
        "GenAI Solutions",
        "Full Stack Development",
        "Web Applications",
        "API Development"
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
            ),
            url: "https://github.com/JimmyNguyen09-AI"
        },
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            ),
            url: "https://linkedin.com/in/jimmy-nguyen"
        },
        {
            name: "Email",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            url: "mailto:ng.trungthanh04@gmail.com"
        },
        {
            name: "Portfolio",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            ),
            url: "https://jimmynguyen09.vercel.app/"
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-slate-950 border-t border-white/10 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.03),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.03),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Main Footer Content */}
                <div className="py-12 md:py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1 space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-3">
                                    Jimmy Nguyen
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    AI Engineer & Full Stack Developer crafting intelligent solutions at the intersection of AI and web development.
                                </p>
                            </div>

                            {/* Availability Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-emerald-400 text-sm font-medium">Available for hire</span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-white/60 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                                        >
                                            <span className="w-0 h-0.5 bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service} className="text-white/60 text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold mb-6 text-lg">Get In Touch</h4>
                            <div className="space-y-4">
                                <a 
                                    href="mailto:ng.trungthanh04@gmail.com"
                                    className="flex items-start gap-3 text-white/60 hover:text-emerald-400 transition-colors text-sm group"
                                >
                                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="group-hover:underline">ng.trungthanh04@gmail.com</span>
                                </a>
                                <a 
                                    href="tel:+61432047700"
                                    className="flex items-start gap-3 text-white/60 hover:text-emerald-400 transition-colors text-sm group"
                                >
                                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="group-hover:underline">+61 432 047 700</span>
                                </a>
                                <div className="flex items-start gap-3 text-white/60 text-sm">
                                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Hurstville NSW, Australia</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-6">
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target={social.url.startsWith('http') ? '_blank' : undefined}
                                            rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
                                            className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-600 hover:border-transparent transition-all duration-300 group hover:scale-110"
                                            aria-label={social.name}
                                        >
                                            <div className="text-white/70 group-hover:text-white transition-colors">
                                                {social.icon}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Bottom Bar */}
                <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/60 text-sm text-center md:text-left">
                        © {currentYear} <span className="text-emerald-400 font-medium">Jimmy Nguyen</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="text-white/60 hover:text-emerald-400 transition-colors">
                            Privacy Policy
                        </a>
                        <span className="text-white/20">•</span>
                        <a href="#" className="text-white/60 hover:text-emerald-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>

                    {/* Scroll to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 group"
                        aria-label="Scroll to top"
                    >
                        <svg 
                            className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

                {/* Made with love text */}
                <div className="pb-6 text-center">
                    <p className="text-white/40 text-xs flex items-center justify-center gap-2">
                        Made by Jimmy Nguyen
                    </p>
                </div>
            </div>
        </footer>
    );
}