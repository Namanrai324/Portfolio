'use client';

import React from 'react';
import FadeIn from './ui/FadeIn';
import TextNoise from './ui/TextNoise';

const achievements = [
  {
    title: "IEEE Research Paper Published",
    description: "A Multimodel Deep Learning Based Facial Emotion Recognition and Detection with Hyper Parameters.",
    date: "Oct 2024",
    link: "https://ieeexplore.ieee.org/document/10743754"
  },
  {
    title: "Finalist at HackX 2025",
    description: "Competed against 50+ teams in a 48-hour hackathon, building an AI-powered accessibility tool.",
    date: "Aug 2025"
  },
  {
    title: "AWS Certified Machine Learning – Specialty",
    description: "Validated expertise in building, training, tuning, and deploying ML models on AWS.",
    date: "Jan 2026"
  }
];

export default function AchievementsSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-12 md:py-20 text-white relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col">
        <FadeIn y={40} className="mb-12 flex justify-center">
          <h2 className="font-black uppercase tracking-widest text-center" style={{ fontSize: 'clamp(2rem, 5vw, 60px)' }}>
            <TextNoise text="Achievements" className="text-white/40" />
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {achievements.map((achievement, i) => {
            const CardContent = (
              <div className="flex flex-col md:flex-row md:items-start justify-between p-6 md:p-8 rounded-3xl bg-[#111111]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-500 hover:border-yellow-400/30">
                {/* Ambient Hover Glow */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-[#7621B0]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="mb-4 md:mb-0 md:pr-8 relative z-10 flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="w-8 h-[2px] bg-yellow-400" />
                    <h3 className="text-xl md:text-2xl font-geist font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-yellow-200 transition-all duration-300 flex items-center gap-3">
                      {achievement.title}
                      {achievement.link && (
                        <svg className="w-5 h-5 text-yellow-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </h3>
                  </div>
                  <p className="text-white/60 font-light leading-relaxed pl-12">
                    {achievement.description}
                  </p>
                </div>
                {achievement.date && (
                  <div className="shrink-0 text-white/40 font-mono text-sm tracking-widest uppercase relative z-10 pl-12 md:pl-0 md:border-l border-white/10 md:pl-8 md:ml-8 py-2 md:h-full md:flex md:items-center mt-2 md:mt-0">
                    {achievement.date}
                  </div>
                )}
              </div>
            );

            return (
              <FadeIn key={i} delay={i * 0.1} y={20}>
                {achievement.link ? (
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
