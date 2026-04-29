"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CountUp } from "countup.js";
import { motion } from "framer-motion";

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const countRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fade in + slide up
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    // Image parallax/zoom
    gsap.to(imageRef.current, {
      scale: 1.1,
      y: -20,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Ambient blobs movement
    gsap.to(blob1Ref.current, {
      x: "30%",
      y: "20%",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(blob2Ref.current, {
      x: "-20%",
      y: "-30%",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Count up animation
    if (countRef.current) {
      const countUp = new CountUp(countRef.current, 150, {
        duration: 2.5,
        suffix: "+"
      });

      ScrollTrigger.create({
        trigger: countRef.current,
        start: "top 90%",
        onEnter: () => countUp.start()
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-brand-navy/30 relative overflow-hidden" 
      id="about"
    >
      {/* Background Motion Effects */}
      <div 
        ref={blob1Ref}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"
      ></div>
      <div 
        ref={blob2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-brand-pink/10 rounded-full blur-[80px] pointer-events-none"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Column */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <img 
                ref={imageRef}
                alt="Sadia Afrin Workspace" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
              />
            </motion.div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl border border-white/20 text-center z-10">
              <span ref={countRef} className="block text-4xl font-bold text-white mb-1">0</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 leading-tight">Problems Solved<br/>on Online Judges</span>
            </div>
          </div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
            <div className="space-y-6 text-gray-400">
              <p>I am a Computer Science & Engineering undergraduate at **BRAC University** with a specialized focus on the **MERN stack**. My technical journey is driven by a passion for backend systems and a commitment to building high-performance, user-centric full-stack applications.</p>
              <p>With a solid foundation in **JavaScript, Node.js, and modern database management**, I enjoy solving complex architectural problems. Beyond coding, I am an active leader as the **HR Director at BUCSC** and a **Student Tutor**, where I help others navigate core CSE concepts.</p>
              <p>I am dedicated to writing clean, maintainable code and continuously exploring new technologies to deliver impactful digital solutions.</p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "MERN Stack Development",
                "Backend System Design",
                "Full-Stack Applications",
                "Technical Leadership"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-brand-accent flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm font-medium group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
