'use client';

import React from 'react';

const row1Images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
];

const row2Images = [
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
];

export default function MarqueeSection() {
  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden flex flex-col gap-6 sm:gap-8 relative">
      
      {/* Self-contained CSS animations for perfect seamless scrolling */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: marqueeLeft 45s linear infinite;
        }
        .animate-scroll-right {
          animation: marqueeRight 45s linear infinite;
        }
      `}} />

      {/* Edge Fade Masks for Professional Integration (Narrowed to just the edges) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(to_right,#0C0C0C_0%,transparent_10%,transparent_90%,#0C0C0C_100%)] w-full" />

      {/* Row 1 - Moves Left */}
      <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
        {/* We render the row twice. The CSS translates by exactly -50% to create a seamless loop */}
        {[...Array(2)].map((_, chunkIdx) => (
          <div key={`r1-chunk-${chunkIdx}`} className="flex gap-3 sm:gap-4 pr-3 sm:pr-4">
            {row1Images.map((src, idx) => (
              <div key={`r1-${chunkIdx}-${idx}`} className="group relative w-[280px] sm:w-[380px] h-[180px] sm:h-[250px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/5 cursor-pointer shadow-2xl">
                <img
                  src={src}
                  alt="Portfolio visual"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#7621B0]/0 group-hover:bg-[#7621B0]/20 transition-colors duration-500 mix-blend-overlay" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Row 2 - Moves Right */}
      <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] -ml-32">
        {[...Array(2)].map((_, chunkIdx) => (
          <div key={`r2-chunk-${chunkIdx}`} className="flex gap-3 sm:gap-4 pr-3 sm:pr-4">
            {row2Images.map((src, idx) => (
              <div key={`r2-${chunkIdx}-${idx}`} className="group relative w-[280px] sm:w-[380px] h-[180px] sm:h-[250px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/5 cursor-pointer shadow-2xl">
                <img
                  src={src}
                  alt="Portfolio visual"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#7621B0]/0 group-hover:bg-[#7621B0]/20 transition-colors duration-500 mix-blend-overlay" />
              </div>
            ))}
          </div>
        ))}
      </div>
      
    </section>
  );
}
