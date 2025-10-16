'use client';

import { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';

export default function ConditionalComponents() {
  const [mounted, setMounted] = useState(false);
  const [isReklamaPage, setIsReklamaPage] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsReklamaPage(window.location.pathname === '/reklama-10');
  }, []);

  // Don't render anything until mounted on client to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Don't show on /reklama-10
  if (isReklamaPage) {
    return null;
  }

  return (
    <>
      <div id="floating-buttons">
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
      <CookieConsent />
    </>
  );
}
