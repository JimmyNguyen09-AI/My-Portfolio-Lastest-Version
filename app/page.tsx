import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatBotWidget";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <div className="fixed bottom-20 right-5 z-50"> <ChatbotWidget/></div>
      <Footer/>
    </>
  );
}
