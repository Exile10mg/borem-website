'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCookie } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  useEffect(() => {
    // Listen for storage changes
    const handleStorageChange = () => {
      const consent = localStorage.getItem('cookieConsent');
      setCookieBannerVisible(!consent);
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Listen for custom event when cookie settings are opened/closed
    const handleCookieOpen = () => {
      setCookieBannerVisible(true);
    };
    
    const handleCookieClose = () => {
      const consent = localStorage.getItem('cookieConsent');
      setCookieBannerVisible(!consent);
    };
    
    window.addEventListener('openCookieSettings', handleCookieOpen);
    window.addEventListener('closeCookieSettings', handleCookieClose);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('openCookieSettings', handleCookieOpen);
      window.removeEventListener('closeCookieSettings', handleCookieClose);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const openCookieSettings = () => {
    // Wyślij custom event aby otworzyć ustawienia cookies
    window.dispatchEvent(new Event('openCookieSettings'));
  };

  return (
    <div className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 transition-all duration-300 ${
      cookieBannerVisible ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
    }`}>
      {/* Cookie Settings Button */}
      <button
        onClick={openCookieSettings}
        className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Ustawienia cookies"
      >
        <FontAwesomeIcon
          icon={faCookie}
          className="w-5 h-5 text-white"
        />
        
        {/* Tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-white/10">
            Ustawienia cookies
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
          </div>
        </div>
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Przewiń do góry"
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="w-5 h-5 text-white"
        />
        
        {/* Tooltip */}
        <div className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg border border-white/10">
            Przewiń do góry
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
          </div>
        </div>
      </button>
    </div>
  );
}
