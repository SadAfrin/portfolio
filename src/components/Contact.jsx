"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const floatingIcons = [
    "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  ];

  return (
    <section className="py-24 relative overflow-hidden animated-gradient" id="contact">
      {/* Background Overlay to tone down the gradient */}
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-3xl z-0"></div>

      {/* Floating Icons Background - Only rendered on client */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0">
          {floatingIcons.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: `${Math.random() * 80 + 10}%`, 
                y: `${Math.random() * 80 + 10}%`,
                rotate: Math.random() * 360 
              }}
              animate={{ 
                y: ["-20px", "20px", "-20px"],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 10 + Math.random() * 10, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute w-24 h-24 text-white"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d={icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-10 lg:p-16 bg-brand-accent/5">
              <h2 className="text-3xl font-bold text-white mb-4">Get in touch today</h2>
              <p className="text-gray-400 mb-12 text-lg">Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.</p>
              <div className="space-y-8">
                {[
                  { label: "Email", value: "sadia.afrin@example.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "brand-accent", href: "mailto:sadia.afrin@example.com" },
                  { label: "LinkedIn", value: "Connect on LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", color: "brand-accent", href: "https://www.linkedin.com/in/-sadiaafrin-/" },
                  { label: "GitHub", value: "Follow on GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", color: "brand-pink", href: "https://github.com/SadAfrin" },
                  { label: "Location", value: "London, United Kingdom", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", color: "white/50" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6"
                  >
                    <div className={`w-12 h-12 bg-brand-dark border border-white/10 rounded-xl flex items-center justify-center text-${item.color} shadow-lg shadow-black/20`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
                      {item.href ? (
                        <a className={`text-lg font-bold text-white hover:text-${item.color} transition-colors`} href={item.href}>{item.value}</a>
                      ) : (
                        <p className="text-lg font-bold text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-10 lg:p-16">
              <form action="#" className="space-y-6" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider" htmlFor="name">Name</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01, borderColor: "#6366f1" }}
                      className="w-full bg-brand-dark/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600 outline-none" 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider" htmlFor="email">Email</label>
                    <motion.input 
                      whileFocus={{ scale: 1.01, borderColor: "#6366f1" }}
                      className="w-full bg-brand-dark/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600 outline-none" 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider" htmlFor="subject">Subject</label>
                  <motion.input 
                    whileFocus={{ scale: 1.01, borderColor: "#6366f1" }}
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600 outline-none" 
                    id="subject" 
                    name="subject" 
                    placeholder="Project Inquiry" 
                    type="text" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider" htmlFor="message">Message</label>
                  <motion.textarea 
                    whileFocus={{ scale: 1.01, borderColor: "#6366f1" }}
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg py-3 px-4 text-white focus:ring-1 focus:ring-brand-accent transition-all placeholder:text-gray-600 resize-none outline-none" 
                    id="message" 
                    name="message" 
                    placeholder="How can I help you?" 
                    rows="4"
                  ></motion.textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 gradient-button text-white rounded-lg font-bold shadow-lg shadow-brand-accent/20 transition-all flex items-center justify-center gap-2" 
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
