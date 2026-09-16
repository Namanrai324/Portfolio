'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from './ui/LiveProjectButton';
import FadeIn from './ui/FadeIn';
import TextNoise from './ui/TextNoise';

const projects = [
  {
    num: "01",
    title: "QueryMind — Agentic BI",
    category: "FastAPI / LangChain / LLaMA",
    description: "An intelligent Business Intelligence command center that interprets natural language into SQL, generating instant analytics and visualizations.",
    link: "https://github.com/Namanrai324/querymind",
    images: {
      leftTop: "/images/projects/querymind.jpg",
      leftBottom: "/images/projects/querymind.jpg",
      right: "/images/projects/querymind.jpg"
    }
  },
  {
    num: "02",
    title: "SafePayAI",
    category: "Random Forest / GANs / Flask",
    description: "A machine learning-based UPI fraud detection system utilizing deep learning ensembles to identify and block anomalous transactions in real-time.",
    link: "https://github.com/Namanrai324/-UPI-Payment-Fraud_detection",
    images: {
      leftTop: "/images/projects/safepayai.jpg",
      leftBottom: "/images/projects/safepayai.jpg",
      right: "/images/projects/safepayai.jpg"
    }
  },
  {
    num: "03",
    title: "SalesScope",
    category: "Power BI / MySQL / SQL",
    description: "A comprehensive multi-region sales analytics dashboard offering deep insights into revenue, profit margins, and regional performance.",
    link: "https://github.com/Namanrai324/Sales-Insight-Dashboard-using-Power-BI",
    images: {
      leftTop: "/images/projects/salesscope.jpg",
      leftBottom: "/images/projects/salesscope.jpg",
      right: "/images/projects/salesscope.jpg"
    }
  },
  {
    num: "04",
    title: "RetainIQ",
    category: "Power BI / PostgreSQL",
    description: "A customer intelligence and retention dashboard designed to analyze churn rates, segment high-value customers, and predict purchasing behavior.",
    link: "https://github.com/Namanrai324/Customer-Revenue-Intelligence-Dashboard-",
    images: {
      leftTop: "/images/projects/retainiq.jpg",
      leftBottom: "/images/projects/retainiq.jpg",
      right: "/images/projects/retainiq.jpg"
    }
  },
  {
    num: "05",
    title: "Fashion Finder AI",
    category: "ResNet50 / Nearest Neighbors",
    description: "An AI-powered fashion recommendation engine that uses neural embeddings to find visually similar clothing items across extensive catalogs.",
    link: "https://github.com/Namanrai324/FashionRecommendationSystem1",
    images: {
      leftTop: "/images/projects/fashion.jpg",
      leftBottom: "/images/projects/fashion.jpg",
      right: "/images/projects/fashion.jpg"
    }
  },
  {
    num: "06",
    title: "Facial Emotion Recognition",
    category: "Deep Learning / CNN / OpenCV",
    description: "A robust deep learning model capable of accurately detecting and classifying human facial emotions in real-time video streams.",
    link: "https://ieeexplore.ieee.org/document/10743754",
    images: {
      leftTop: "/images/projects/emotion.jpg",
      leftBottom: "/images/projects/emotion.jpg",
      right: "/images/projects/emotion.jpg"
    }
  }
];

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      ref={container} 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40} className="mb-16 sm:mb-20 md:mb-28 max-w-7xl mx-auto w-full flex justify-center">
        <h2 className="font-black uppercase text-center leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          <TextNoise text="Projects" className="hero-heading" />
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-10 sm:gap-14 md:gap-20">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - 1 - i) * 0.03);
          
          return (
            <Card 
              key={project.num}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.33, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

const Card = ({ project, i, progress, range, targetScale }: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-[85vh] sm:h-[90vh] md:h-screen flex items-center justify-center sticky top-24 md:top-32" style={{ top: `calc(6rem + ${i * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="w-full h-full max-h-[850px] bg-[#111111]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-5 sm:p-8 md:p-10 flex flex-col relative overflow-hidden group"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#7621B0]/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12 w-full px-2 sm:px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <div className="font-geist font-black leading-none shrink-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none" style={{ fontSize: 'clamp(3.5rem, 10vw, 140px)' }}>
              {project.num}
            </div>
            <div className="flex flex-col max-w-2xl">
              <span className="text-[#E9EB14] font-mono font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm mb-2">{project.category}</span>
              <h3 className="text-white font-geist font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-500">{project.title}</h3>
              {project.description && (
                <p className="text-white/60 font-light text-sm md:text-base leading-relaxed max-w-xl">{project.description}</p>
              )}
            </div>
          </div>
          <div className="shrink-0 md:mt-0 mt-2">
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex-1 w-full flex gap-3 sm:gap-4 md:gap-6 overflow-hidden relative z-10">
          {/* Left Column (40%) */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6 h-full">
            <div 
              className="w-full bg-white/5 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-white/5 relative group/img1"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img src={project.images.leftTop} alt="Project detail 1" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img1:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover/img1:bg-transparent transition-colors duration-500" />
            </div>
            <div 
              className="w-full flex-1 bg-white/5 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-white/5 relative group/img2"
              style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
            >
              <img src={project.images.leftBottom} alt="Project detail 2" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img2:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover/img2:bg-transparent transition-colors duration-500" />
            </div>
          </div>
          
          {/* Right Column (60%) */}
          <div className="w-[60%] h-full bg-white/5 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden border border-white/5 relative group/img3 shadow-inner">
            <img src={project.images.right} alt="Project main" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img3:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover/img3:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
