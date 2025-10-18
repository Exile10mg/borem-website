'use client';

import { useState, useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';
import PriceEstimatorChat from './PriceEstimatorChat';

export default function ConditionalComponents() {
  const [mounted, setMounted] = useState(false);
  const [isReklamaPage, setIsReklamaPage] = useState(false);

  useEffect(() => {
    setMounted(true);
    const path = window.location.pathname;
    setIsReklamaPage(path === '/reklama-10' || path === '/reklama-11' || path === '/reklama-12' || path === '/reklama-13' || path === '/cennik');
  }, []);

  // Don't render anything until mounted on client to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Don't show on /reklama-10, /reklama-11, /reklama-12, /reklama-13 and /cennik
  if (isReklamaPage) {
    return null;
  }

  return (
    <>
      <div id="floating-buttons">
        <ScrollToTopButton />
        <PriceEstimatorChat />
      </div>
      <CookieConsent />
    </>
  );
}
