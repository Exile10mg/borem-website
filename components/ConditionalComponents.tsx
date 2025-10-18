'use client';

import { useState, useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';
import PriceEstimatorChat from './PriceEstimatorChat';

export default function ConditionalComponents() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted on client to avoid hydration mismatch
  if (!mounted) {
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
