'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TextEmerge({ text, className = '', style }: { text: string, className?: string, style?: React.CSSProperties }) {
  return (
    <div className={`overflow-hidden ${className}`} style={style}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      >
        {text}
      </motion.div>
    </div>
  );
}
