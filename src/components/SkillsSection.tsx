'use client';

import React from 'react';
import FadeIn from './ui/FadeIn';
import Skiper31 from './ui/Skiper31';

export default function SkillsSection() {
  return (
    <section className="bg-[#0C0C0C] py-20 relative z-10">
      <div className="w-full flex flex-col">
        <FadeIn y={40} className="mb-12 px-5 sm:px-8 md:px-10 max-w-5xl mx-auto w-full">
          <h2 className="font-black uppercase text-2xl tracking-widest text-white/50">Tech Stack</h2>
        </FadeIn>

        <FadeIn y={40} delay={0.2} className="w-full">
          <Skiper31 />
        </FadeIn>
      </div>
    </section>
  );
}
