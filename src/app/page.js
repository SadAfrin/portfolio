import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="h-px w-full animated-gradient opacity-20"></div>
      <About />
      <div className="h-px w-full animated-gradient opacity-20"></div>
      <Skills />
      <div className="h-px w-full animated-gradient opacity-20"></div>
      <Experience />
      <div className="h-px w-full animated-gradient opacity-20"></div>
      <Projects />
      <div className="h-px w-full animated-gradient opacity-20"></div>
      <Contact />
      <Footer />
    </main>
  );
}

