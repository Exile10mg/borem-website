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
    const path = window.location.pathname;
    setIsReklamaPage(path === '/reklama-10' || path === '/reklama-11' || path === '/reklama-12' || path === '/reklama-13');
  }, []);

  // Don't render anything until mounted on client to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  // Don't show on /reklama-10, /reklama-11, /reklama-12 and /reklama-13
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
