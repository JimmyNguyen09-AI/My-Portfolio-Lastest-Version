import About from "./components/About";
import ChatbotWidget from "./components/ChatBotWidget";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PixelCat from "./components/PixelCat";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CursorGlow />
      <PixelCat />

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="lux-ambient-orb left-[-8rem] top-[-2rem] h-72 w-72 bg-[#D4AF37]/16" />
        <div className="lux-ambient-orb right-[-6rem] top-[14rem] h-[24rem] w-[24rem] bg-[#1A1A1A]/10 [animation-delay:-4s]" />
        <div className="lux-ambient-orb bottom-[8%] left-[18%] h-80 w-80 bg-[#D4AF37]/10 [animation-delay:-9s]" />
        <div className="lux-light-beam left-[12%] top-[-4rem] h-[32rem] w-40 rotate-[8deg]" />
        <div className="lux-light-beam right-[18%] top-[24rem] h-[26rem] w-32 -rotate-[14deg] opacity-60" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <div className="fixed bottom-5 right-5 z-[70] sm:bottom-7 sm:right-7">
        <ChatbotWidget />
      </div>

      <Footer />
    </main>
  );
}
