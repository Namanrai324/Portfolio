'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function ScrambleText({ text, className = '' }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const scramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    if (isHovering) {
      scramble();
    } else {
      setDisplayText(text);
      clearInterval(interval!);
    }

    return () => clearInterval(interval);
  }, [isHovering, text]);

  // Initial animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;
    interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span 
      className={`inline-block font-mono ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText || text}
    </motion.span>
  );
}
