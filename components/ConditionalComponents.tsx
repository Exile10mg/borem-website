'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';
import PriceEstimatorChat from './PriceEstimatorChat';

export default function ConditionalComponents() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted on client to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Hide all UI elements on reklama-15 page (clean Fiverr gig thumbnail)
  if (pathname === '/reklama-15') {
    return null;
  }

  return (
    <>
      <div id="floating-buttons" style={{ zIndex: 9999 }}>
        <ScrollToTopButton />
        <PriceEstimatorChat />
      </div>
      <CookieConsent />
    </>
  );
}
