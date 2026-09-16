"use client";

import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (so it doesn't break SSR)
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };
      
      // Initial check
      checkIsMobile();

      // Add event listener for resize
      window.addEventListener("resize", checkIsMobile);
      
      // Cleanup
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    }
  }, [breakpoint]);

  return isMobile;
}
