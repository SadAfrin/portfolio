"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function Projects() {
  const containerRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [errorProject, setErrorProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const projects = [
    {
      title: "👥 KeenKeeper — Friendship Tracker",
      tagline: "High-performance friendship management with visual analytics",
      brief: "A React-based friendship management system with dynamic interaction logging, real-time status tracking, and visual analytics using Recharts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Recharts", "Tailwind CSS"],
      features: [
        "Dynamic interaction logging to track relationship history",
        "Real-time status tracking with visual indicators",
        "Advanced analytics using Recharts for social engagement metrics",
        "Clean, responsive UI with smooth Framer Motion transitions"
      ],
      techStack: ["React.js", "Recharts", "Tailwind CSS", "Framer Motion", "Context API"],
      link: "#",
      liveLink: "https://keen-keeper-a7-ph.netlify.app/"
    },
    {
      title: "Notun-Jama eCommerce",
      tagline: "Premium MERN stack clothing platform",
      brief: "A full-featured MERN stack clothing platform with product management, user authentication, and shopping cart functionality.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      tags: ["MERN Stack", "Redux"],
      features: [
        "Full product management system with CRUD operations",
        "Secure user authentication and profile management",
        "Persistent shopping cart and integrated checkout flow",
        "Responsive administrative dashboard for inventory control"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "JWT", "Tailwind"],
      link: "#",
      liveLink: null
    },
    {
      title: "Pharmacy Management System",
      tagline: "Robust inventory and sales tracking for pharmacies",
      brief: "A robust management system built with PHP and MySQL to track inventory, sales, and supplier data for a pharmacy.",
      image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=2070&auto=format&fit=crop",
      tags: ["PHP", "MySQL"],
      features: [
        "Inventory tracking with low-stock alerts",
        "Sales and revenue reporting with date filtering",
        "Supplier management and order history logging",
        "Automated invoice generation and billing system"
      ],
      techStack: ["PHP", "MySQL", "XAMPP", "Bootstrap", "jQuery"],
      link: "#",
      liveLink: null
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleLiveClick = (project) => {
    if (project.liveLink) {
      window.open(project.liveLink, "_blank", "noopener,noreferrer");
    } else {
      setErrorProject(project);
    }
  };

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden mesh-gradient" id="projects">
      {/* Background Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-[10%] w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[10%] w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400">A showcase of my full-stack development and specialized management systems</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-brand-pink transition-colors" 
            href="https://github.com/SadAfrin"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div 
                key={project.title} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="glass-card rounded-2xl overflow-hidden group border-white/5 hover:border-brand-accent/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={project.image} 
                  />
                  <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                    <button onClick={() => setSelectedProject(project)} className="w-44 py-2.5 bg-white text-brand-dark rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                      Description
                    </button>
                    <button onClick={() => handleLiveClick(project)} className="w-44 py-2.5 bg-brand-accent text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                      Live Demo
                    </button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">{project.brief}</p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <button onClick={() => setSelectedProject(project)} className="flex-1 py-3 border border-white/10 hover:border-brand-accent/50 text-[11px] font-bold text-white rounded-lg transition-all">
                      DESCRIPTION
                    </button>
                    <button onClick={() => handleLiveClick(project)} className="flex-1 py-3 bg-brand-accent/10 border border-brand-accent/30 hover:bg-brand-accent/20 text-[11px] font-bold text-brand-accent rounded-lg transition-all text-center">
                      LIVE DEMO
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More/Less Toggle - Bottom Right aligned with GitHub link position */}
        {projects.length > 0 && (
          <div className="mt-12 flex justify-end">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 text-sm font-bold text-brand-accent hover:text-white transition-colors"
            >
              {showAll ? "View Less ←" : "View More →"}
            </button>
          </div>
        )}
      </div>

      {/* Description Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-2xl glass-card rounded-3xl overflow-hidden border-white/20 shadow-2xl z-10">
              <div className="aspect-video relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-10 h-10 bg-brand-dark/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-accent transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
              </div>
              <div className="p-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-brand-accent text-xs font-bold uppercase tracking-widest mt-1">{selectedProject.tagline}</p>
                </div>
                <div className="flex flex-wrap gap-2 my-6">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-[10px] font-bold text-brand-pink bg-brand-pink/5 border border-brand-pink/20 px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-pink"></span>{tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-6">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Project Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-gray-400 leading-relaxed">
                        <svg className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button onClick={() => handleLiveClick(selectedProject)} className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold text-center text-sm shadow-lg shadow-brand-accent/20 hover:scale-[1.02] transition-transform">
                    LAUNCH LIVE DEMO
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {errorProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setErrorProject(null)} className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative w-full max-w-md glass-card p-10 rounded-3xl border-white/20 text-center z-10">
              <div className="w-20 h-20 bg-brand-pink/10 rounded-full flex items-center justify-center text-brand-pink mx-auto mb-6 border border-brand-pink/20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Not Deployed Yet</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The <span className="text-white font-bold">{errorProject.title}</span> is not currently hosted on a live server. Please check back later or contact me for a private walkthrough.
              </p>
              <button onClick={() => setErrorProject(null)} className="w-full py-3 bg-white text-brand-dark rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-colors">
                Close Window
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
