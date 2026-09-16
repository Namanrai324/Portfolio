'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className={`
        flex items-center justify-between px-2 py-2 rounded-full border transition-all duration-500
        ${scrolled 
          ? 'bg-black/60 border-white/10 backdrop-blur-md shadow-lg shadow-black/50' 
          : 'bg-black/20 border-white/5 backdrop-blur-sm'}
      `}>
        
        {/* Left side: Live Moving Logo */}
        <div className="relative flex items-center justify-center w-11 h-11 ml-1 cursor-pointer group">
          {/* Spinning Gradient Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7621B0] via-yellow-400 to-[#7621B0] animate-[spin_3s_linear_infinite]" />
          
          {/* Inner Dark Circle */}
          <div className="absolute inset-[2px] rounded-full bg-[#0C0C0C] flex items-center justify-center overflow-hidden z-10">
            {/* Pulsing background glow */}
            <div className="absolute inset-0 bg-yellow-400/10 animate-[pulse_2s_ease-in-out_infinite]" />
            
            <span className="font-bebas text-xl text-white tracking-widest mt-1 relative z-20 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300">
              NR
            </span>
          </div>
          
          {/* Outer Ambient Glow */}
          <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-md -z-10 group-hover:blur-xl transition-all duration-300" />
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 px-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`
                text-xs font-semibold tracking-[0.2em] transition-colors duration-300
                ${link.name === 'CONTACT' ? 'text-white border-b border-yellow-400 pb-1' : 'text-gray-400 hover:text-white'}
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side: CTA Button */}
        <a 
          href="#contact"
          className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-xs font-semibold tracking-[0.1em] hover:bg-white/10 transition-colors mr-1"
        >
          <span>LET'S TALK</span>
          <span>→</span>
        </a>

      </div>
    </motion.header>
  );
}
