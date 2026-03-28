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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgb(0_212_255_/_0.14),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[32rem] h-[48rem] bg-[radial-gradient(circle_at_center,rgb(255_0_255_/_0.08),transparent_46%)]"
      />
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
