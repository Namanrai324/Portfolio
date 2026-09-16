'use client';

import React from 'react';
import './TextNoise.css';

export default function TextNoise({ text, className = '' }: { text: string, className?: string }) {
  return (
    <div className={`noise-text ${className}`}>
      {text}
    </div>
  );
}
