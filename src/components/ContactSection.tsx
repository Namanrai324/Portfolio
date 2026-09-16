'use client';

import React from 'react';
import FadeIn from './ui/FadeIn';
import SocialFlipButton from './ui/SocialFlipButton';
import AsciiFlameBall from './ui/ascii-flame-ball';
import StaggeredGrid from './ui/StaggeredGrid';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhoneAlt, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-[#0C0C0C] py-24 md:py-32 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col items-center">
        
        <FadeIn y={40} className="w-full text-center mb-16 sm:mb-24 relative">
          {/* Flame Ball & Ambient Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] sm:h-[400px] pointer-events-none z-0 mix-blend-screen flex items-center justify-center">
            {/* Soft Yellow Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-yellow-400/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="opacity-90">
              <AsciiFlameBall 
                background="transparent" 
                baseColor="#FACC15" 
                size={140} 
                density={60} 
                speed={20} 
              />
            </div>
          </div>
          
          <h2 className="font-black uppercase tracking-tight leading-none mb-6 relative z-10 drop-shadow-2xl flex flex-wrap justify-center gap-x-4 sm:gap-x-6" style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Let's
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_0_30px_rgba(250,204,21,0.3)]">
              Talk
            </span>
          </h2>
          <p className="text-white/80 font-light text-lg md:text-xl max-w-2xl mx-auto relative z-10">
            Available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </FadeIn>

        <SocialFlipButton 
          items={[
            { letter: "C", icon: <FaEnvelope />, label: "Email", href: "mailto:namanroy183@gmail.com" },
            { letter: "O", icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/naman-rai-634058299/" },
            { letter: "N", icon: <FaGithub />, label: "GitHub", href: "https://github.com/Namanrai324" },
            { letter: "T", icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/__naman_roy/" },
            { letter: "A", icon: <FaPhoneAlt />, label: "Phone", href: "tel:6264072931" },
            { letter: "C", icon: <FaTwitter />, label: "Twitter", href: "#" },
            { letter: "T", icon: <FaFacebook />, label: "Facebook", href: "#" }
          ]} 
        />

        <FadeIn y={20} delay={0.4} className="mt-32 border-t border-white/10 pt-8 w-full flex flex-col md:flex-row items-center justify-between text-white/40 font-mono text-sm tracking-wider">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 gap-2">
            <p className="uppercase tracking-widest text-white/70">
              © {new Date().getFullYear()} <span className="text-yellow-400 font-bold">Naman Rai</span>. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">Based in Raipur, India • Open to Global Opportunities</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="uppercase tracking-widest text-white/70">
              Designed & Built with <span className="text-yellow-400 font-bold">passion</span>
            </p>
            <p className="text-white/40 text-xs">Powered by Next.js & Framer Motion</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
