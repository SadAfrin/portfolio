"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const projects = [
    {
      title: "Notun-Jama eCommerce",
      description: "A full-featured MERN stack clothing platform with product management, user authentication, and shopping cart functionality.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      tags: [
        { name: "MERN Stack", color: "blue-400" },
        { name: "Redux", color: "brand-pink" }
      ],
      link: "#"
    },
    {
      title: "Pharmacy Management System",
      description: "A robust management system built with PHP and MySQL to track inventory, sales, and supplier data for a pharmacy.",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2070&auto=format&fit=crop",
      tags: [
        { name: "PHP", color: "indigo-400" },
        { name: "MySQL", color: "yellow-400" }
      ],
      link: "#"
    },
    {
      title: "Assembly E-Commerce Sim",
      description: "An innovative e-commerce simulation project developed using Assembly language (EMU8086) for academic coursework.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      tags: [
        { name: "Assembly", color: "blue-400" },
        { name: "EMU8086", color: "green-400" }
      ],
      link: "#"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden mesh-gradient" id="projects">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"
      ></motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 left-[10%] w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400">A showcase of my full-stack development and low-level programming projects</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-pink transition-colors" 
            href="https://github.com/sadia-afrin"
          >
            View GitHub Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden group border-white/5 hover:border-brand-accent/50 transition-all duration-500"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src={project.image} 
                />
                <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <motion.a 
                    href={project.link}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-2 bg-white text-brand-dark rounded-full text-xs font-bold uppercase tracking-widest cursor-pointer shadow-xl"
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`text-[10px] font-bold text-${tag.color} border border-${tag.color}/30 px-2 py-0.5 rounded-full uppercase`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 h-20 overflow-hidden">{project.description}</p>
                <motion.a 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-brand-accent" 
                  href={project.link}
                >
                  View Details
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
