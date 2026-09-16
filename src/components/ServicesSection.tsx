'use client';

import React from 'react';
import FadeIn from './ui/FadeIn';
import { AsciiGlitchRipple } from './ui/ascii-glitch-ripple';
import AnimatedCounter from './ui/AnimatedCounter';

const services = [
  {
    num: "01",
    title: "Data Analytics",
    desc: "Uncovering hidden insights through robust analysis and interactive dashboards to drive informed business decisions.",
    tags: ["SQL", "Pandas", "Excel"]
  },
  {
    num: "02",
    title: "Machine Learning",
    desc: "Designing and training predictive models using advanced algorithms for classification, regression, and clustering.",
    tags: ["Scikit-Learn", "TensorFlow", "PyTorch"]
  },
  {
    num: "03",
    title: "Generative AI",
    desc: "Building intelligent agentic systems and conversational tools leveraging LLMs and the latest GenAI technologies.",
    tags: ["LangChain", "OpenAI", "FastAPI"]
  },
  {
    num: "04",
    title: "Data Engineering",
    desc: "Architecting efficient, scalable data pipelines to streamline preprocessing and enhance model throughput.",
    tags: ["Airflow", "Spark", "AWS"]
  },
  {
    num: "05",
    title: "BI & Visualization",
    desc: "Creating compelling data visualizations and reports using Power BI and SQL to empower stakeholders.",
    tags: ["Power BI", "Tableau", "DAX"]
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8F9FA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 text-[#0C0C0C] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      
      {/* Subtle Background Typography */}
      <div className="absolute top-20 -right-20 pointer-events-none opacity-[0.02] rotate-90 md:rotate-0 origin-center scale-150 md:scale-100 z-0">
        <h1 className="font-black text-[300px] leading-none tracking-tighter uppercase whitespace-nowrap">
          Skills
        </h1>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 relative z-10">
        
        {/* Left Sticky Column */}
        <div className="w-full md:w-[35%] flex flex-col items-start md:sticky md:top-32 h-fit">
          <FadeIn y={40} className="w-full">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-[#7621B0]" />
              <span className="uppercase tracking-[0.2em] text-[#7621B0] font-bold text-sm">Capabilities</span>
            </div>
            <h2 className="font-black uppercase tracking-tight leading-none mb-6 text-black" style={{ fontSize: 'clamp(3rem, 6vw, 80px)' }}>
              <AsciiGlitchRipple as="span">Expertise</AsciiGlitchRipple>
            </h2>
            <p className="text-black/60 font-light leading-relaxed max-w-sm mb-10 text-lg">
              Specialized skills tailored for intelligent systems, predictive modeling, and data-driven growth.
            </p>
            
            <div className="hidden md:block w-full h-[1px] bg-black/10 mb-10" />

            {/* Professional Filler Elements */}
            <div className="hidden md:flex flex-col gap-10 w-full max-w-sm">
              
              {/* Rotating Badge & Status */}
              <div className="flex items-center gap-6">
                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite] opacity-30">
                    <svg viewBox="0 0 200 200" className="w-full h-full text-black">
                      <path id="textPath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                      <text className="font-mono text-[16px] uppercase tracking-[0.2em] fill-current">
                        <textPath href="#textPath" startOffset="0%">
                          • AI ENGINEER • DATA SCIENTIST
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-geist font-bold text-black text-lg">Currently Available</span>
                  <span className="text-black/50 font-light text-sm">For freelance & full-time</span>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#7621B0]/30 transition-all duration-300 group">
                  <div className="text-3xl font-geist font-black text-black group-hover:text-[#7621B0] mb-1 transition-colors">
                    <AnimatedCounter value={5} suffix="+" duration={1} />
                  </div>
                  <div className="text-xs text-black/40 group-hover:text-[#7621B0]/70 uppercase tracking-widest font-mono font-bold transition-colors">Core Domains</div>
                </div>
                <div className="p-5 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#7621B0]/30 transition-all duration-300 group">
                  <div className="text-3xl font-geist font-black text-black group-hover:text-[#7621B0] mb-1 transition-colors">
                    <AnimatedCounter value={10} suffix="+" duration={1.2} />
                  </div>
                  <div className="text-xs text-black/40 group-hover:text-[#7621B0]/70 uppercase tracking-widest font-mono font-bold transition-colors">Projects</div>
                </div>
              </div>

              {/* Core Arsenal */}
              <div className="mt-2">
                <h4 className="text-xs text-black/40 uppercase tracking-widest font-mono mb-3">Core Arsenal</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'LangChain', 'Power BI', 'AWS', 'Docker', 'FastAPI'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-white border border-black/10 rounded-lg text-sm font-bold text-black/70 transition-all duration-300 shadow-sm hover:shadow-md hover:border-[#7621B0] hover:text-[#7621B0] cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a href="#contact" className="mt-2 group flex items-center justify-between p-4 rounded-2xl bg-black text-white hover:bg-[#7621B0] transition-colors duration-500 shadow-xl shadow-black/10 hover:shadow-[#7621B0]/20">
                <span className="font-bold tracking-wide">Let's Discuss a Project</span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <path d="M5 19L19 5M19 5H8M19 5V16" />
                  </svg>
                </div>
              </a>
              
            </div>
          </FadeIn>
        </div>

        {/* Right Scrollable Column */}
        <div className="w-full md:w-[65%] flex flex-col gap-6">
          {services.map((service, i) => (
            <FadeIn 
              key={service.num} 
              delay={i * 0.1} 
              y={30}
              className="group"
            >
              <div className="w-full bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.05] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden hover:border-[#7621B0]/30">
                
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 w-1.5 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#7621B0]" />
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono font-bold text-black/20 transition-colors duration-500 text-xl group-hover:text-[#7621B0]">
                        {service.num}
                      </span>
                      <h3 className="font-geist font-black text-2xl sm:text-3xl uppercase tracking-tight text-black cursor-pointer transition-colors duration-500 group-hover:text-[#7621B0]">
                        <AsciiGlitchRipple as="span">{service.title}</AsciiGlitchRipple>
                      </h3>
                    </div>
                    
                    <p className="font-light leading-relaxed text-black/60 mb-6 max-w-xl text-base sm:text-lg">
                      {service.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-3">
                      {service.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-black/[0.03] border border-black/5 rounded-full text-xs font-mono tracking-widest text-black/50 transition-colors duration-500 group-hover:bg-[#7621B0]/5 group-hover:text-[#7621B0] group-hover:border-[#7621B0]/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="shrink-0 w-14 h-14 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 overflow-hidden bg-black/[0.02] group-hover:bg-[#7621B0] group-hover:border-[#7621B0]">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="w-5 h-5 text-black/40 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"
                    >
                      <path d="M5 19L19 5M19 5H8M19 5V16" />
                    </svg>
                  </div>
                  
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
