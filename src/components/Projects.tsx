import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: 'QueryMind — Agentic BI Assistant', 
    category: 'FastAPI / LangChain / LLaMA', 
    description: 'An AI-powered BI assistant translating natural language to SQL and visualizing data with dynamic schema understanding.',
    link: 'https://github.com/Namanrai324/querymind'
  },
  { 
    id: 2, 
    title: 'SafePayAI — UPI Fraud Detection', 
    category: 'Random Forest / GANs / Flask', 
    description: 'ML-based UPI fraud detection. 10k records, GAN-generated samples, ~97% accuracy. Trained and deployed.',
    link: 'https://github.com/Namanrai324/-UPI-Payment-Fraud_detection'
  },
  { 
    id: 3, 
    title: 'SalesScope — Performance Analytics', 
    category: 'Power BI / MySQL / SQL', 
    description: 'Interactive dashboard analyzing ₹985M revenue across 2M units to uncover hidden sales insights.',
    link: 'https://github.com/Namanrai324/Sales-Insight-Dashboard-using-Power-BI'
  },
  { 
    id: 4, 
    title: 'Fashion Finder AI', 
    category: 'ResNet50 / Streamlit', 
    description: 'Image-embedding-based fashion recommendation system finding visually similar products. Trained and deployed.',
    link: 'https://github.com/Namanrai324/FashionRecommendationSystem1'
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#05060f] py-24 px-6 md:px-12 lg:px-24 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-red-600 via-red-500 to-white rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[350px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/10 flex flex-col justify-between p-8"
            >
              {/* Animated Nebula Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start relative z-10">
                <p className="text-sm font-mono text-red-400">
                  {project.category}
                </p>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-white transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
