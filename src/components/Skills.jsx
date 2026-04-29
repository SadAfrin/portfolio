"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Skills() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: "M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "blue-400",
      skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind", "JavaScript"]
    },
    {
      title: "Backend & DB",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      color: "brand-pink",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"]
    },
    {
      title: "Others",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      color: "green-400",
      skills: ["Git", "GitHub", "Python", "Java", "C++"]
    }
  ];

  const floatingKeywords = [
    "<div>", "</>", "{}", "const", "npm", "git", "API", "JSON", "async", "await", "import", "export"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Floating Keywords Background - Only rendered on client */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none z-0">
          <div className="flex flex-wrap gap-x-24 gap-y-16 p-10">
            {floatingKeywords.concat(floatingKeywords).map((keyword, i) => (
              <motion.div
                key={i}
                initial={{ x: Math.random() * 100, y: Math.random() * 100 }}
                animate={{ 
                  x: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
                  y: [Math.random() * 50, Math.random() * -50, Math.random() * 50]
                }}
                transition={{ 
                  duration: 15 + Math.random() * 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="text-6xl font-mono font-bold blur-[1px]"
              >
                {keyword}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            My specialized toolset for building modern full-stack applications
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border-white/10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 bg-${category.color}/10 rounded-lg`}>
                  <svg className={`w-6 h-6 text-${category.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d={category.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, x: 5, borderColor: category.color === 'blue-400' ? '#6366f1' : category.color === 'brand-pink' ? '#d946ef' : '#10b981' }}
                    className="bg-brand-dark border border-white/5 p-3 rounded-xl flex items-center justify-center text-center transition-all cursor-default"
                  >
                    <span className="text-[12px] font-medium leading-tight">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
