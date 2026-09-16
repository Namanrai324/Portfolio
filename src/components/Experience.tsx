'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const experiences = [
  {
    company: 'SyntecxHub',
    role: 'Data Science Intern',
    period: 'Feb 2026 – Apr 2026',
    points: [
      'Processed 5,000+ business records using Python and Pandas; fixed structural inconsistencies.',
      'Rebuilt 3 data pipelines, reducing preprocessing time by ~3 hours per sprint.',
      'Improved ML pipeline throughput by 30%.',
      'Benchmarked classification models using Scikit-learn (5-fold CV, GridSearchCV).',
      'Created a model scorecard that reduced stakeholder review cycles by 25% across 2 business units.'
    ]
  },
  {
    company: 'Elevate Labs',
    role: 'AI/ML Intern',
    period: 'Sep 2025 – Nov 2025',
    points: [
      'Conducted customer segmentation and behavioral analysis across marketing datasets.',
      'Trained Logistic Regression on 569 medical records — 96% precision, 94% recall, 0.97 AUC-ROC.',
      'Utilized Python, Pandas, SQL for analysis; Scikit-learn for modeling.',
      'Contributed to an insight report used by cross-functional teams.'
    ]
  },
  {
    company: 'The Skybrisk',
    role: 'Data Science Intern',
    period: '6 months',
    points: [
      'Applied Python and ML concepts to real-world practical analytics tasks.',
      'Focused on data analysis, preprocessing, and early-stage model development.'
    ]
  }
];

export default function Experience() {
  return (
    <section className="bg-[#05060f] py-24 px-6 md:px-12 lg:px-24 text-white relative z-20 overflow-hidden">
      
      {/* Infinite Marquee */}
      <div className="w-full bg-white/5 py-4 border-y border-white/10 mb-24 rotate-[-1deg] scale-110">
        <Marquee gradient={false} speed={50}>
          <div className="flex space-x-16 px-8 items-center text-xl font-bold tracking-widest uppercase text-white/50">
            <span>SyntecxHub</span>
            <span className="text-red-500">•</span>
            <span>Elevate Labs</span>
            <span className="text-white">•</span>
            <span>The Skybrisk</span>
            <span className="text-red-600">•</span>
            {/* Duplicate for smooth looping if necessary, Marquee handles it mostly */}
            <span>SyntecxHub</span>
            <span className="text-red-500">•</span>
            <span>Elevate Labs</span>
            <span className="text-white">•</span>
            <span>The Skybrisk</span>
            <span className="text-red-600">•</span>
          </div>
        </Marquee>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 via-red-500 to-white rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-6 items-baseline border-l border-white/10 md:border-none pl-6 md:pl-0 pb-12 md:pb-0 relative">
                
                {/* Timeline node mobile */}
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-red-500 md:hidden shadow-[0_0_10px_#ef4444]" />

                <div className="md:col-span-1 mb-4 md:mb-0 text-gray-400 font-mono text-sm">
                  {exp.period}
                </div>
                
                <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-red-400 font-medium mb-6">{exp.company}</h4>
                  
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-lg leading-none">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
