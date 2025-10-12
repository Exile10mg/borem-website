'use client';

import { ReactNode, useEffect, useState } from 'react';

// Prosty komponent bez animacji dla mobile
export function MobileOptimized({ 
  children,
  className = ''
}: { 
  children: ReactNode;
  className?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) {
    // Mobile: bez motion, zwykły div
    return <div className={className}>{children}</div>;
  }

  // Desktop: z motion
  return <div className={className}>{children}</div>;
}
