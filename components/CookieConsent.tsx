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

    // Listen for custom event to open settings
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] transition-opacity duration-300" />
      )}

      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[200] mx-auto max-w-7xl p-4 sm:p-6 transition-all duration-500">
        <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />

          <div className="relative p-6 sm:p-8">
            {!showSettings ? (
              // Main Banner
              <>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
                      <FontAwesomeIcon icon={faCookie} className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Ta strona używa plików cookies
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      Używamy plików cookies, aby zapewnić prawidłowe działanie strony, analizować ruch oraz personalizować treści i reklamy.
                      Możesz zaakceptować wszystkie cookies lub dostosować swoje preferencje.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
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

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20 flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faCog} className="w-4 h-4" />
                      Ustawienia
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20"
                    >
                      Tylko niezbędne
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg"
                    >
                      Akceptuj wszystkie
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Settings Panel
              <>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Ustawienia cookies
                    </h3>
                    <p className="text-sm text-gray-400">
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
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Zamknij ustawienia"
                  >
                    <FontAwesomeIcon icon={faTimes} className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-white mb-1">Cookies niezbędne</h4>
                      <p className="text-xs text-gray-400">
                        Wymagane do prawidłowego działania strony. Nie można ich wyłączyć.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-6 bg-green-500/20 border border-green-500 rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-green-500 rounded-full ml-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-white mb-1">Cookies funkcjonalne</h4>
                      <p className="text-xs text-gray-400">
                        Zapamiętują Twoje preferencje (język, ustawienia).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, functional: !preferences.functional })}
                      className="flex-shrink-0"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.functional ? 'bg-blue-500/20 border border-blue-500' : 'bg-gray-600/20 border border-gray-600'
                      }`}>
                        <div className={`w-4 h-4 rounded-full transition-all ${
                          preferences.functional ? 'bg-blue-500 ml-auto' : 'bg-gray-600'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-white mb-1">Cookies analityczne</h4>
                      <p className="text-xs text-gray-400">
                        Pomagają nam analizować ruch i optymalizować stronę (Google Analytics).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className="flex-shrink-0"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.analytics ? 'bg-purple-500/20 border border-purple-500' : 'bg-gray-600/20 border border-gray-600'
                      }`}>
                        <div className={`w-4 h-4 rounded-full transition-all ${
                          preferences.analytics ? 'bg-purple-500 ml-auto' : 'bg-gray-600'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-white mb-1">Cookies marketingowe</h4>
                      <p className="text-xs text-gray-400">
                        Personalizują reklamy i remarketing (Google Ads, Facebook Pixel).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className="flex-shrink-0"
                    >
                      <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                        preferences.marketing ? 'bg-pink-500/20 border border-pink-500' : 'bg-gray-600/20 border border-gray-600'
                      }`}>
                        <div className={`w-4 h-4 rounded-full transition-all ${
                          preferences.marketing ? 'bg-pink-500 ml-auto' : 'bg-gray-600'
                        }`} />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20"
                  >
                    Tylko niezbędne
                  </button>
                  <button
                    onClick={savePreferences}
                    className="flex-1 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all shadow-lg"
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
