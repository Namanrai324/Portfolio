'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import Overlay from './Overlay';
import { useIsMobile } from '@/hooks/useIsMobile';

const FRAME_COUNT = 144;

function getFramePath(index: number) {
  const paddedIndex = index.toString().padStart(3, '0');
  return `/sequence/frame_${paddedIndex}_delay-0.042s.png`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const renderRef = useRef<() => void>(() => {});
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images progressively
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        // Remove loading state as soon as we have at least one frame loaded
        if (i === 0 || loadedCount > 0) {
          setIsLoaded(true);
        }
        // Force a render in case the user is already on this frame and waiting for it
        if (renderRef.current) {
          requestAnimationFrame(renderRef.current);
        }
      };
      loadedImages[i] = img;
    }
    
    imagesRef.current = loadedImages;
  }, []);

  // Draw frame on canvas when scroll or images change
  useEffect(() => {
    let animationFrameId: number;
    
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;
      
      const images = imagesRef.current;
      if (!images || images.length === 0) return;

      // Update canvas size to match display size
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        // High DPI support
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }
      
      const currentFrame = Math.round(frameIndex.get());
      let img = images[currentFrame];
      
      // Progressive enhancement: if the exact frame isn't loaded yet, find the closest one that is
      if (!img || !img.complete) {
        let fallbackFound = false;
        // Search backwards for a loaded frame
        for (let i = currentFrame - 1; i >= 0; i--) {
          if (images[i] && images[i].complete) {
            img = images[i];
            fallbackFound = true;
            break;
          }
        }
        // If not found backwards, search forwards
        if (!fallbackFound) {
          for (let i = currentFrame + 1; i < FRAME_COUNT; i++) {
            if (images[i] && images[i].complete) {
              img = images[i];
              fallbackFound = true;
              break;
            }
          }
        }
        
        if (!fallbackFound) return; // No frames loaded at all yet
      }
      
      // Object-fit cover logic
      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      
      const centerShift_x = (width - img.width * ratio) / 2;
      const centerShift_y = (height - img.height * ratio) / 2;
      
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
      );
    };

    renderRef.current = render;

    // Use Framer Motion's onChange to trigger render
    const unsubscribe = frameIndex.on("change", () => {
      // Use requestAnimationFrame for smooth drawing
      animationFrameId = requestAnimationFrame(render);
    });

    // Initial render
    render();

    return () => {
      unsubscribe();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden mix-blend-screen">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-20">
            <p className="animate-pulse">Loading experience...</p>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block object-cover"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
