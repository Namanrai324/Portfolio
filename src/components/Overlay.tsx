'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import ScrambleText from './ui/ScrambleText';
import GlitchEffect from './ui/GlitchEffect';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 5% (Disappears quickly on scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05], [0, -50]);
  const display1 = useTransform(scrollYProgress, p => p > 0.05 ? 'none' : 'block');

  // Section 2: 25% to 45% (Left aligned)
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);
  const display2 = useTransform(scrollYProgress, p => (p < 0.2 || p > 0.5) ? 'none' : 'flex');

  // Section 3: 55% to 75% (Right aligned)
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);
  const display3 = useTransform(scrollYProgress, p => (p < 0.5 || p > 0.8) ? 'none' : 'flex');

  // Section 4: 75% to 100% (Reappear at the end)
  const opacity4 = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [50, 0]);
  const display4 = useTransform(scrollYProgress, p => p < 0.75 ? 'none' : 'block');

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center z-10 text-white">
      <motion.div 
        style={{ opacity: opacity1, y: y1, display: display1 }}
        className="absolute bottom-20 w-full px-6 md:px-20 text-center"
      >
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl font-kanit font-black tracking-tight mb-2 drop-shadow-lg text-white uppercase pointer-events-auto"
        >
          <ScrambleText text="Naman Rai" />
        </h1>
        <p className="text-sm md:text-lg text-gray-300 font-light tracking-widest drop-shadow-md uppercase">
          AI Engineer & ML Engineer
        </p>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity2, y: y2, display: display2 }}
        className="absolute w-full px-6 md:px-24 flex justify-start"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight drop-shadow-lg">
            Building <span className="text-gradient-nebula">AI-powered</span> systems
          </h2>
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity: opacity3, y: y3, display: display3 }}
        className="absolute w-full px-6 md:px-24 flex justify-end text-right"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight drop-shadow-lg">
            From raw data <br /> to <span className="text-gradient-nebula">deployed solutions.</span>
          </h2>
        </div>
      </motion.div>

      {/* Section 4: Reappear at the end */}
      <motion.div 
        style={{ opacity: opacity4, y: y4, display: display4 }}
        className="absolute bottom-10 w-full px-6 md:px-10 flex justify-start text-left"
      >
        <div 
          className="text-2xl sm:text-3xl md:text-5xl font-kanit font-bold tracking-tight uppercase drop-shadow-md pointer-events-auto"
        >
          <GlitchEffect 
            text="Naman Rai" 
            color="#FFFFFF"
            playMode="enter"
            font={{
              fontFamily: "Kanit, sans-serif",
              fontSize: "clamp(2rem, 8vw, 50px)",
              fontWeight: 700
            }}
            transition={{
              duration: 2,
              ease: "easeInOut"
            }}
            shake={{
              enabled: true,
              intensity: 40,
              x: 20,
              y: 20
            }}
            slice={{
              enabled: true,
              intensity: 80,
              minHeight: 10,
              maxHeight: 40
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
