'use client';

import React from 'react';
import './GlitchText.css';

export default function GlitchText({ text, className = '' }: { text: string, className?: string }) {
  return (
    <div className={`glitch-wrapper ${className}`}>
      <div className="glitch" data-text={text}>
        {text}
      </div>
    </div>
  );
}
