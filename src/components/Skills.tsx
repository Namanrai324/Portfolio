'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Random Forest", "CNN", "LSTM", "Transformers", "Generative AI", "RAG", "Agentic AI"],
    color: "from-red-600 to-red-400"
  },
  {
    title: "Data Analytics & BI",
    skills: ["Excel", "Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Data Visualization", "Business Intelligence"],
    color: "from-red-500 to-red-300"
  },
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "C/C++"],
    color: "from-gray-300 to-white"
  },
  {
    title: "Backend & Databases",
    skills: ["FastAPI", "Flask", "Streamlit", "REST APIs", "MySQL", "PostgreSQL", "SQLite", "BigQuery"],
    color: "from-red-400 to-white"
  }
];

export default function Skills() {
  return (
    <section className="bg-[#05060f] py-24 px-6 md:px-12 lg:px-24 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Competencies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 via-red-500 to-white rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 bg-gradient-to-br ${category.color} shadow-[0_0_15px_currentColor]`} />
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
