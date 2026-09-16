'use client';

import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import PixelDrift from './ui/PixelDrift';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: "Let's Talk", href: '#contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-6`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="relative flex items-center justify-center w-12 h-12 shrink-0 group mt-1 ml-1">
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          {/* Outer Orbital Ring (Slow Dashed) */}
          <div className="absolute -inset-1.5 rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite] group-hover:border-[#7621B0]/60 transition-colors duration-500" />
          
          {/* Inner Orbital Ring (Fast Glowing Swoosh) */}
          <div className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-yellow-400 border-l-yellow-400/30 animate-[spin_3s_linear_infinite] group-hover:animate-[spin_1s_linear_infinite]" />
          
          {/* Center Dark Base */}
          <div className="absolute inset-[2px] bg-[#0C0C0C] rounded-full z-10 border border-white/5" />
          
          {/* Center Text */}
          <span className="font-black text-xl text-white tracking-tighter relative z-20 group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
            NR
          </span>
          
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium uppercase tracking-widest transition-colors block w-32 h-8 relative"
            >
              <PixelDrift 
                text={link.name} 
                mode="onEnter" 
                particleCount={50}
                particleSize={2}
                fontSize={24}
                autoFit={true}
                mouseEnabled={true}
                mouseForce={30}
                mouseRadius={50}
                fontFamily='"Kanit", sans-serif'
                transition={{ type: "tween", duration: 0, ease: "linear" }}
                colors={["#FFFFFF", "#FACC15", "#7621B0"]}
              />
            </a>
          ))}
        </div>

        {/* Right Controls (Search + Mobile Menu) */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto md:ml-0">
          {/* Search Bar with Live Effects */}
          <div className="relative flex items-center h-10 group">
            
            {/* Inline style for the flowing gradient animation */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes gradientFlow {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
              }
              .animate-gradient-flow {
                background-size: 200% auto;
                animation: gradientFlow 3s linear infinite;
              }
            `}} />

            <div 
              className={`relative flex items-center transition-all duration-500 ease-out rounded-full h-full ${
                isSearchOpen ? 'w-36 sm:w-48 md:w-64' : 'w-10'
              }`}
            >
              {/* Live Flowing Gradient Border */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-[#7621B0] to-yellow-400 animate-gradient-flow transition-all duration-500 ${
                isSearchOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
              }`} />
              
              {/* Inner Dark Background */}
              <div className={`absolute inset-[1.5px] rounded-full flex items-center overflow-hidden transition-colors duration-300 z-10 ${
                isSearchOpen ? 'bg-[#0C0C0C]' : 'bg-transparent hover:bg-white/5'
              }`}>
                <button 
                  suppressHydrationWarning
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`w-10 h-10 shrink-0 flex items-center justify-center transition-colors duration-300 z-20 ${
                    isSearchOpen ? 'text-yellow-400' : 'text-white/70 group-hover:text-white'
                  }`}
                >
                  <Search className={`w-5 h-5 transition-transform duration-300 ${!isSearchOpen && 'group-hover:scale-110'}`} />
                </button>
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className={`bg-transparent border-none outline-none font-mono text-[10px] sm:text-xs tracking-wider text-white placeholder-white/40 w-full pr-4 relative z-20 transition-all duration-500 ${
                    isSearchOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
                  }`}
                  disabled={!isSearchOpen}
                  onBlur={(e) => {
                    // Slight delay to allow clicking search icon to close without blur race condition
                    setTimeout(() => setIsSearchOpen(false), 200);
                  }}
                />
                
                {/* Live Ambient Inner Glow when open */}
                <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-yellow-400/20 to-transparent pointer-events-none transition-opacity duration-500 ${
                  isSearchOpen ? 'opacity-100 animate-pulse' : 'opacity-0'
                }`} />
              </div>
              
              {/* Outer Ambient Glow */}
              <div className={`absolute inset-0 bg-yellow-400/20 rounded-full blur-md -z-10 transition-opacity duration-500 ${
                isSearchOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
              }`} />
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            suppressHydrationWarning
            className="md:hidden text-white w-10 h-10 flex items-center justify-center shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0C0C0C]/95 backdrop-blur-lg border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium uppercase tracking-widest text-lg"
            >
              {link.name}
            </a>
          ))}
          <button className="text-white mt-4">
            <Search className="w-6 h-6" />
          </button>
        </div>
      )}
    </nav>
  );
}
