'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faTimes, faCog } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 1 second
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Separate useEffect for event listener - always active
  useEffect(() => {
    const handleOpenSettings = () => {
      const savedConsent = localStorage.getItem('cookieConsent');
      if (savedConsent) {
        try {
          const parsed = JSON.parse(savedConsent);
          setPreferences({
            necessary: true,
            functional: parsed.functional || false,
            analytics: parsed.analytics || false,
            marketing: parsed.marketing || false,
          });
        } catch (e) {
          // ignore
        }
      }
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
    
    // Give React time to process before hiding
    setTimeout(() => {
      setShowBanner(false);
      setShowSettings(false);
      window.dispatchEvent(new Event('storage'));
    }, 100);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(necessaryOnly));

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
    
    // Give React time to process before hiding
    setTimeout(() => {
      setShowBanner(false);
      setShowSettings(false);
      window.dispatchEvent(new Event('storage'));
    }, 100);
  };

  const savePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(savedPreferences));

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: preferences.analytics ? 'granted' : 'denied',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
      });
    }
    
    // Give React time to process before hiding
    setTimeout(() => {
      setShowBanner(false);
      setShowSettings(false);
      window.dispatchEvent(new Event('storage'));
    }, 100);
  };

  return (
    <>
      {/* Backdrop - pokazuje się zawsze gdy banner jest otwarty */}
      {showBanner && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9997] transition-opacity duration-300" />
      )}

      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[9998] mx-auto max-w-7xl p-2 sm:p-4 md:p-6 transition-all duration-500">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />

          <div className="relative p-4 sm:p-6 md:p-8">
            {!showSettings ? (
              // Main Banner
              <>
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
                      <FontAwesomeIcon icon={faCookie} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                      Ta strona używa plików cookies
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                      Używamy plików cookies, aby zapewnić prawidłowe działanie strony, analizować ruch oraz personalizować treści i reklamy.
                      Możesz zaakceptować wszystkie cookies lub dostosować swoje preferencje.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm justify-center sm:justify-start">
                    <Link
                      href="/polityka-prywatnosci"
                      className="text-blue-400 hover:text-blue-300 transition-colors underline"
                    >
                      Polityka prywatności
                    </Link>
                    <span className="text-gray-600">•</span>
                    <Link
                      href="/cookies"
                      className="text-blue-400 hover:text-blue-300 transition-colors underline"
                    >
                      Polityka Cookies
                    </Link>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faCog} className="w-4 h-4" />
                      Ustawienia
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20"
                    >
                      Tylko niezbędne
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg"
                    >
                      Akceptuj wszystkie
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Settings Panel
              <>
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                      Ustawienia cookies
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Dostosuj swoje preferencje dotyczące plików cookies
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setShowSettings(false);
                      // Jeśli użytkownik już ma zapisane zgody, zamknij cały banner
                      const consent = localStorage.getItem('cookieConsent');
                      if (consent) {
                        setShowBanner(false);
                      }
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
                    aria-label="Zamknij ustawienia"
                  >
                    <FontAwesomeIcon icon={faTimes} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Cookies niezbędne</h4>
                      <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                        Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.
                      </p>
                    </div>
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="w-10 h-5 sm:w-12 sm:h-6 bg-green-500/20 border border-green-500 rounded-full flex items-center px-0.5 sm:px-1">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-green-500 rounded-full ml-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Cookies funkcjonalne</h4>
                      <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                        Zapamiętują Twoje preferencje (język, ustawienia).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                      className="flex-shrink-0 pt-0.5"
                    >
                      <div className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full flex items-center px-0.5 sm:px-1 transition-colors ${
                        preferences.functional ? 'bg-blue-500/20 border border-blue-500' : 'bg-gray-600/20 border border-gray-600'
                      }`}>
                        <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all ${
                          preferences.functional ? 'bg-blue-500 ml-auto' : 'bg-gray-600'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Cookies analityczne</h4>
                      <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                        Pomagają nam analizować ruch i optymalizować stronę (Google Analytics).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className="flex-shrink-0 pt-0.5"
                    >
                      <div className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full flex items-center px-0.5 sm:px-1 transition-colors ${
                        preferences.analytics ? 'bg-purple-500/20 border border-purple-500' : 'bg-gray-600/20 border border-gray-600'
                      }`}>
                        <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all ${
                          preferences.analytics ? 'bg-purple-500 ml-auto' : 'bg-gray-600'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 gap-2 sm:gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Cookies marketingowe</h4>
                      <p className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                        Personalizują reklamy i remarketing (Google Ads, Facebook Pixel).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className="flex-shrink-0 pt-0.5"
                    >
                      <div className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full flex items-center px-0.5 sm:px-1 transition-colors ${
                        preferences.marketing ? 'bg-pink-500/20 border border-pink-500' : 'bg-gray-600/20 border border-gray-600'
                      }`}>
                        <div className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full transition-all ${
                          preferences.marketing ? 'bg-pink-500 ml-auto' : 'bg-gray-600'
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20"
                  >
                    Tylko niezbędne
                  </button>
                  <button
                    onClick={savePreferences}
                    className="flex-1 px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg"
                  >
                    Zapisz preferencje
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        </div>
      )}
    </>
  );
}
