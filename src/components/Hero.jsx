"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import HeroImage from "@/assets/HeroProfileImage.png";

export default function Hero() {
  const avatarRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Soft floating effect for avatar
    gsap.to(avatarRef.current, {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Background parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      if (backgroundRef.current) {
        gsap.to(backgroundRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="hero">
      {/* Decorative background elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 opacity-20 bg-hero-pattern bg-cover bg-center scale-110"
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/20 rounded-full blur-[120px] z-0"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div 
          variants={itemVariants} 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-8 flex justify-center"
        >
          <div 
            ref={avatarRef}
            className="relative p-1.5 rounded-full bg-gradient-to-tr from-brand-accent to-brand-pink shadow-2xl shadow-brand-accent/20 group"
          >
            <div className="absolute inset-0 rounded-full animate-pulse-slow border-2 border-brand-accent/50 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-brand-dark overflow-hidden z-10 bg-brand-dark">
              <Image 
                alt="Sadia Afrin" 
                priority
                className="object-cover" 
                src={HeroImage} 
              />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-navy border border-white/10 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Available for New Projects</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="gradient-text">Sadia Afrin</span>
        </motion.h1>
        
        <motion.h2 
          variants={itemVariants} 
          className="text-xl md:text-2xl font-medium text-gray-400 mb-6 min-h-[1.5em] flex justify-center items-center"
        >
          <TypingEffect text="Full-Stack Web Developer (MERN)" />
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Computer Science & Engineering undergraduate focused on building high-performance web applications using the MERN stack and modern backend architectures.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-all" 
            href="/resume-placeholder.pdf"
            download
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
            Download Resume
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(217, 70, 239, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 bg-brand-pink/20 border border-brand-pink/30 hover:bg-brand-pink/30 text-white rounded-lg flex items-center justify-center gap-2 transition-all" 
            href="#projects"
          >
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3 border border-white/10 hover:bg-white/5 text-white rounded-lg transition-all flex items-center justify-center gap-2" 
            href="#contact"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </motion.div>
      
      <div className="mt-20 flex justify-center animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </div>
    </section>
  );
}

function TypingEffect({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullText = text;
      const updatedText = isDeleting 
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        // Pause at the end
        setTypingSpeed(3000); 
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      } else {
        setTypingSpeed(isDeleting ? 50 : 100);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, text, loopNum]);

  return (
    <div className="flex items-center">
      <span>{displayedText}</span>
      <span className="w-0.5 h-[1.1em] bg-brand-accent ml-1 animate-pulse shrink-0">|</span>
    </div>
  );
}
