'use client';

import React from 'react';
import FadeIn from './ui/FadeIn';
import TextNoise from './ui/TextNoise';

const secondaryProjects = [
  {
    title: "Customer Lifetime Value Prediction",
    tech: "Lifetimes / Streamlit",
    description: "Built a web app to predict customer lifetime value using probabilistic models, helping businesses optimize retention strategies.",
    link: "https://github.com/Namanrai324/customer_lifetime_value"
  },
  {
    title: "House Price Prediction",
    tech: "Linear Regression / Flask",
    description: "Developed a machine learning model to estimate real estate prices based on property attributes, deployed as a REST API.",
    link: "https://github.com/Namanrai324/house-price-prediction"
  }
];

export default function SecondaryProjects() {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 text-white relative z-10 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col">
        <FadeIn y={40} className="mb-12 flex justify-center">
          <h2 className="font-black uppercase tracking-widest text-center" style={{ fontSize: 'clamp(2rem, 5vw, 60px)' }}>
            <TextNoise text="More Projects" className="text-white/40" />
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20}>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8 rounded-3xl bg-[#111111]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all h-full flex flex-col group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-500"
              >
                {/* Ambient Hover Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7621B0]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h3 className="text-2xl font-geist font-bold tracking-tight mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300 relative z-10">
                  {project.title}
                </h3>
                <p className="text-[#E9EB14] font-mono text-xs tracking-widest uppercase mb-6 relative z-10">{project.tech}</p>
                <p className="text-white/60 font-light leading-relaxed mt-auto relative z-10">
                  {project.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
