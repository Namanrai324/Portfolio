'use client';

import React from 'react';
import FadeIn from './ui/FadeIn';
import TextEmerge from './ui/TextEmerge';
import FuzzyText from './ui/text-noise';
import RisingLines from './ui/rising-lines';

const experiences = [
  {
    company: "SyntecxHub",
    role: "Data Science Intern",
    period: "Feb 2026 – Apr 2026",
    details: [
      "Worked with 5,000+ business records using Python and Pandas.",
      "Fixed structural inconsistencies and improved data quality.",
      "Rebuilt 3 data pipelines.",
      "Reduced preprocessing time by approximately 3 hours per sprint.",
      "Improved ML pipeline throughput by 30%.",
      "Benchmarked classification models using Scikit-learn.",
      "Used 5-fold cross-validation and GridSearchCV.",
      "Created a model scorecard that reduced stakeholder review cycles by 25% across 2 business units."
    ]
  },
  {
    company: "Elevate Labs",
    role: "AI/ML Intern",
    period: "Sep 2025 – Nov 2025",
    details: [
      "Worked on customer segmentation and behavioral analysis across marketing datasets.",
      "Used Python, Pandas and SQL for data analysis.",
      "Built machine learning models using Scikit-learn.",
      "Worked with Logistic Regression on 569 medical records.",
      "Achieved 96% precision, 94% recall and 0.97 AUC-ROC.",
      "Contributed to an insight report used by cross-functional teams."
    ]
  },
  {
    company: "The Skybrisk",
    role: "Data Science Intern",
    period: "6 months",
    details: [
      "Worked on practical data science and analytics tasks.",
      "Applied Python and machine learning concepts to real-world problems.",
      "Focused on data analysis, preprocessing and model development."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 text-white mt-[-2rem] sm:mt-[-3rem] overflow-hidden">
      
      {/* Background Effect Maintained */}
      <RisingLines className="absolute inset-0 z-0 pointer-events-none opacity-40" color="#ffffff" horizonColor="#ffffff" particles={300} riseSpeed={15} scale={5} />
      
      <div className="max-w-6xl mx-auto flex flex-col relative z-10">
        
        <FadeIn y={40} className="mb-20 sm:mb-24 md:mb-32 flex justify-center w-full">
          <FuzzyText 
            text="Where I've worked" 
            font={{
              fontFamily: "inherit",
              fontWeight: 900,
              fontSize: "clamp(2rem, 7vw, 100px)",
            }}
            color="#ffffff"
            hoverIntensity={8}
            baseIntensity={1.5}
          />
        </FadeIn>

        <div className="flex flex-col gap-10 sm:gap-14">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 border-b border-white/[0.08] last:border-b-0 relative"
            >
              
              {/* Left Column: Role and Company */}
              <div className="w-full lg:w-[35%] shrink-0 relative z-10 border-l-4 border-white/10 group-hover:border-[#7621B0] pl-6 transition-colors duration-500">
                <TextEmerge 
                  text={exp.role} 
                  className="font-geist font-black text-3xl sm:text-4xl uppercase tracking-tight mb-4 text-white group-hover:text-[#7621B0] transition-colors duration-500"
                />
                <FadeIn delay={0.1}>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-bold text-xl text-white/90 uppercase tracking-widest">{exp.company}</span>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7621B0]/80">
                      • Internship
                    </span>
                  </div>
                  <p className="font-mono text-sm text-white/40 group-hover:text-white/70 uppercase tracking-[0.2em] mt-3 transition-colors">{exp.period}</p>
                </FadeIn>
              </div>

              {/* Right Column: Details */}
              <div className="w-full lg:w-[65%] relative z-10 flex flex-col justify-center">
                <ul className="flex flex-col gap-4 sm:gap-5">
                  {exp.details.map((detail, j) => (
                    <FadeIn key={j} delay={j * 0.05 + 0.2}>
                      <li className="flex items-start gap-4">
                        <span className="shrink-0 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#7621B0] mt-2.5 transition-colors duration-500" />
                        <span className="font-light text-white/60 text-base sm:text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                          {detail}
                        </span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
