'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StaggeredGridProps {
  children: React.ReactNode[];
  className?: string;
}

export default function StaggeredGrid({ children, className = '' }: StaggeredGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children.map((child, index) => {
        // Create a staggered masonry look by translating some columns
        const isMiddleCol = index % 3 === 1;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`w-full ${isMiddleCol ? 'lg:translate-y-12' : ''}`}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
