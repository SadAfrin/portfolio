"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export default function Experience() {
  const [isMounted, setIsMounted] = useState(false);
  const lineRef1 = useRef(null);
  const lineRef2 = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);

    [lineRef1, lineRef2].forEach(ref => {
      if (ref.current) {
        gsap.fromTo(ref.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: true
            }
          }
        );
      }
    });
  }, []);

  const professionalExperience = [
    {
      year: "OCT 2024 – MAY 2025",
      role: "Student Tutor (ST)",
      company: "BRAC University, Dhaka",
      description: "Providing academic support to fellow students through personalized study plans and group tutoring sessions to enhance performance in core CSE courses.",
      color: "brand-accent"
    },
    {
      year: "OCT 2023 – DEC 2024",
      role: "HR Director",
      company: "BRAC University Community Service Club (BUCSC)",
      description: "Leading recruitment, member engagement, and cross-departmental coordination to drive team performance and club growth.",
      color: "white/20"
    }
  ];

  const education = [
    {
      year: "JUNE 2021 – PRESENT",
      degree: "BSc in Computer Science & Engineering",
      institution: "BRAC University",
      description: "Focusing on full-stack web development, backend architecture, and core computer science fundamentals with a current CGPA of 3.87/4.00.",
      color: "brand-pink",
      current: true,
      gradDate: "EXPECTED GRADUATION: MAY 2026"
    },
    {
      year: "2019",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Dhaka Board (Science)",
      description: "Result: GPA 5.00 / 5.00.",
      color: "brand-pink/50"
    },
    {
      year: "2017",
      degree: "Secondary School Certificate (SSC)",
      institution: "Jashore Board (Science)",
      description: "Result: GPA 5.00 / 5.00.",
      color: "brand-pink/50"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-brand-navy/30 relative overflow-hidden"
      id="experience"
    >
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

      {isMounted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "110%", x: `${Math.random() * 100}%`, opacity: Math.random() }}
              animate={{ y: "-10%", opacity: [0, 0.5, 0] }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-brand-accent rounded-full"
            ></motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Involvement */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Experience & Leadership</h2>
            </div>
            <div className="space-y-12 relative">
              <div
                ref={lineRef1}
                className="absolute inset-y-0 left-[11px] w-0.5 bg-gradient-to-b from-brand-accent to-transparent origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              ></div>
              <div className="absolute inset-y-0 left-[11px] w-0.5 bg-white/5"></div>

              {professionalExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-10"
                >
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 z-10 transition-colors duration-500 ${exp.color === 'brand-accent' ? 'border-brand-accent shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'border-white/20'}`}></div>
                  <span className={`text-xs font-bold ${exp.color === 'brand-accent' ? 'text-brand-accent' : 'text-gray-500'} uppercase tracking-widest`}>{exp.year}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{exp.role}</h3>
                  <p className="text-sm text-gray-500 font-medium">{exp.company}</p>
                  <p className="text-gray-400 mt-4 leading-relaxed text-[13px]">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Educational Qualification */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-brand-pink/20 rounded-lg flex items-center justify-center text-brand-pink">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-12 relative">
              <div
                ref={lineRef2}
                className="absolute inset-y-0 left-[11px] w-0.5 bg-gradient-to-b from-brand-pink to-transparent origin-top shadow-[0_0_15px_rgba(217,70,239,0.5)]"
              ></div>
              <div className="absolute inset-y-0 left-[11px] w-0.5 bg-white/5"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-10"
                >
                  <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full bg-brand-dark border-2 z-10 transition-colors duration-500 ${edu.current ? 'border-brand-pink shadow-[0_0_10px_rgba(217,70,239,0.5)]' : 'border-white/20'}`}>
                    {edu.current && <div className="absolute inset-0 rounded-full animate-ping bg-brand-pink/20"></div>}
                  </div>
                  <div className="flex flex-col mb-1">
                    <span className={`text-xs font-bold ${edu.current ? 'text-brand-pink' : 'text-gray-500'} uppercase tracking-widest flex flex-wrap items-center gap-x-3 gap-y-1`}>
                      {edu.year}
                    </span>
                    {edu.gradDate && (
                      <span className="text-[10px] font-bold text-brand-pink uppercase tracking-widest mt-1">
                        {edu.gradDate}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{edu.degree}</h3>
                  <p className="text-sm text-gray-500 font-medium">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-gray-400 mt-4 leading-relaxed text-[13px]">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
