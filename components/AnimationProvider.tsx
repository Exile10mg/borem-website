'use client';

import { ReactNode, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <MotionConfig
      // Wyłącz wszystkie animacje na mobile
      transition={isMobile ? { duration: 0 } : undefined}
      reducedMotion={isMobile ? "always" : "never"}
    >
      {children}
    </MotionConfig>
  );
}
