'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[90vh] flex flex-col justify-between bg-[#05060f] overflow-hidden border-t border-white/5 pt-20">
      
      {/* Background Massive Text */}
      <div className="absolute inset-0 flex justify-center items-end pb-12 pointer-events-none z-0 overflow-hidden">
        <h1 
          className="text-[20vw] font-bebas leading-none text-red-600 uppercase text-center select-none"
          style={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: 'linear-gradient(to bottom, rgba(220, 38, 38, 0.8) 0%, rgba(220, 38, 38, 0) 100%)'
          }}
        >
          NAMAN
        </h1>
      </div>

      {/* Top Section */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-start w-full max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24">
        
        {/* Left Side: Big Text */}
        <div className="flex flex-col">
          <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Let's make something
          </p>
          <h2 className="text-6xl md:text-[9rem] font-bebas leading-[0.8] tracking-wider uppercase drop-shadow-lg">
            <span className="text-white block">GET IN</span>
            <span className="text-red-600 block">TOUCH.</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm mt-6 max-w-sm">
            Open to opportunities, collaborations or just a good conversation.
          </p>
        </div>

        {/* Right Side: Mail Icon & Handwritten Note */}
        <div className="flex items-center gap-4 mt-12 md:mt-0">
          <motion.a 
            href="mailto:namanroy183@gmail.com" 
            className="w-12 h-12 flex justify-center items-center rounded-full border border-white/20 hover:bg-white/10 hover:border-red-500 transition-colors group z-30 perspective-1000"
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
          >
            <Mail className="w-5 h-5 text-white group-hover:text-red-500 transition-colors" />
          </motion.a>
          <div className="flex flex-col">
            <p className="font-caveat text-3xl md:text-4xl text-white transform -rotate-2">
              Drop me a "hi".
            </p>
            <p className="font-caveat text-3xl md:text-4xl text-white transform -rotate-2 mt-[-5px]">
              <span className="border-b-2 border-red-600 pb-1">Let's catch up</span> soon.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Text */}
      <div className="relative z-20 w-full text-center pb-8 pt-20 mt-auto">
        <p className="text-xs md:text-sm text-gray-500 font-mono tracking-[0.3em] uppercase">
          KEEP EXPLORING <span className="text-red-600 mx-2">/</span> KEEP BUILDING <span className="text-red-600 mx-2">/</span> KEEP GOING
        </p>
      </div>

    </section>
  );
}
