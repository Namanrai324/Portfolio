'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const trailingXSpring = useSpring(cursorX, { damping: 30, stiffness: 150, mass: 1 });
  const trailingYSpring = useSpring(cursorY, { damping: 30, stiffness: 150, mass: 1 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setIsVisible(true);
      
      const moveCursor = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };

      window.addEventListener('mousemove', moveCursor);
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] shadow-[0_0_10px_#fff]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      {/* Trailing comet tail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99] border border-red-500/50 bg-red-500/10 backdrop-blur-sm"
        style={{
          x: trailingXSpring,
          y: trailingYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </>
  );
}
