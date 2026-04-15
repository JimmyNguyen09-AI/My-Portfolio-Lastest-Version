import About from "./components/About";
import ChatbotWidget from "./components/ChatBotWidget";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      {/* Editorial vertical gridlines — desktop only */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-[8.33%] z-[60] hidden w-px bg-[#1A1A1A]/6 lg:block" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-[33.33%] z-[60] hidden w-px bg-[#1A1A1A]/6 lg:block" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 left-[66.66%] z-[60] hidden w-px bg-[#1A1A1A]/6 lg:block" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-y-0 right-[8.33%] z-[60] hidden w-px bg-[#1A1A1A]/6 lg:block" />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <div className="fixed bottom-5 right-5 z-[70] sm:bottom-7 sm:right-7">
        <ChatbotWidget />
      </div>

      <Footer />
    </main>
  );
}
