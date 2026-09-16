'use client';

import React from 'react';
import FadeIn from './ui/FadeIn';
import AnimatedText from './ui/AnimatedText';
import ContactButton from './ui/ContactButton';
import Magnet from './ui/Magnet';
import TextNoise from './ui/TextNoise';
import PixelatedImageTrail from './ui/pixelated-image-trail';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Interactive Cursor Trail Effect */}
      <PixelatedImageTrail 
        className="z-0 pointer-events-none" 
        images={[
          "/images/trail-1.jpg",
          "/images/trail-2.jpg",
          "/images/trail-3.jpg",
        ]}
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl">
        
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full flex justify-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            <TextNoise text="About me" className="hero-heading" />
          </h2>
        </FadeIn>

        {/* Text */}
        <div className="max-w-[560px] text-center w-full mb-12 sm:mb-16 px-4 sm:px-0">
          <AnimatedText 
            text="I specialize in building data-driven solutions and interactive applications. I am passionate about discovering meaningful patterns, engineering scalable AI pipelines, and solving complex real-world problems. Let's innovate together!" 
            className="text-[#D7E2EA] font-medium justify-center text-center leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Education Details - Professional Layout without boxes */}
        <FadeIn delay={0.1} y={20} className="w-full max-w-4xl mx-auto mb-16 sm:mb-24 px-4 sm:px-0">
          <div className="flex flex-col items-center">
            
            <div className="flex items-center gap-6 mb-8 w-full max-w-lg mx-auto">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
              <h3 className="text-white/40 font-mono uppercase tracking-[0.3em] text-xs sm:text-sm">
                Education
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
            </div>
            
            <div className="text-center w-full">
              <h4 className="text-white font-geist font-black text-2xl sm:text-3xl md:text-4xl tracking-tight mb-3">
                B.Tech in Data Science & Artificial Intelligence
              </h4>
              <p className="text-white/60 font-geist font-medium text-lg sm:text-xl tracking-wide mb-3">
                International Institute of Information Technology, Naya Raipur
              </p>
              <p className="text-[#E9EB14] font-mono text-sm tracking-[0.2em] uppercase">
                Class of 2026
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={20}>
          <Magnet>
            <ContactButton />
          </Magnet>
        </FadeIn>
        
      </div>
    </section>
  );
}
