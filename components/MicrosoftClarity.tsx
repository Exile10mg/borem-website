'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    clarity?: (action: string, ...args: any[]) => void;
  }
}

export default function MicrosoftClarity() {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  useEffect(() => {
    // Check if user has accepted analytics cookies
    const checkConsent = () => {
      try {
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
          const consentData = JSON.parse(consent);
          return consentData.analytics === true;
        }
      } catch (error) {
        console.error('Error checking cookie consent:', error);
      }
      return false;
    };

    // Listen for consent changes
    const handleConsentChange = () => {
      const hasConsent = checkConsent();
      
      if (hasConsent && clarityId && !window.clarity) {
        // Initialize Clarity when consent is given
        initClarity();
      }
    };

    const initClarity = () => {
      if (window.clarity || !clarityId) {
        return; // Already initialized or no ID
      }

      // Clarity initialization
      (function(c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: Element) {
        c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0];
        y?.parentNode?.insertBefore(t, y);
      })(window, document, "clarity", "script", clarityId);

      console.log('Microsoft Clarity initialized');
    };

    // Check initial consent
    if (checkConsent() && clarityId) {
      initClarity();
    }

    // Listen for storage events (when consent changes)
    window.addEventListener('storage', handleConsentChange);
    
    // Listen for custom consent event
    window.addEventListener('cookieConsentUpdated', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleConsentChange);
      window.removeEventListener('cookieConsentUpdated', handleConsentChange);
    };
  }, [clarityId]);

  // Don't render anything if no Clarity ID
  if (!clarityId) {
    return null;
  }

  return null;
}
