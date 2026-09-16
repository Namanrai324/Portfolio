'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-[#05060f] py-24 px-6 md:px-12 lg:px-24 text-white relative z-20 flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex flex-col items-start md:items-center text-left md:text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 via-red-500 to-white rounded-full" />
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed md:text-center">
            I'm Naman Rai, a Data Science & AI graduate from IIIT Naya Raipur. I enjoy working with data, finding meaningful patterns, building interactive dashboards, and developing practical AI/ML solutions to solve real-world problems.
          </p>
          
          <div className="space-y-6 md:text-center">
            <div>
              <h3 className="text-red-400 font-mono text-sm mb-2 uppercase tracking-wider">Hands-on Experience</h3>
              <p className="text-gray-400">Python, SQL, Power BI, Excel, Machine Learning, Data Analytics, AI technologies.</p>
            </div>
            <div>
              <h3 className="text-red-400 font-mono text-sm mb-2 uppercase tracking-wider">Interests</h3>
              <p className="text-gray-400">Data Analytics, Data Science, Machine Learning, Generative AI, Agentic AI, Business Intelligence, AI-powered applications.</p>
            </div>
            <div>
              <h3 className="text-red-400 font-mono text-sm mb-2 uppercase tracking-wider">Education</h3>
              <p className="text-gray-400">B.Tech in Data Science & Artificial Intelligence — IIIT Naya Raipur</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
