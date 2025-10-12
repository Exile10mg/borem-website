'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const isFirstRender = useRef(true);

  // Initial page load
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        isFirstRender.current = false;
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Detect navigation changes - use layoutEffect for earlier execution
  useLayoutEffect(() => {
    // Skip first render
    if (isFirstRender.current) {
      prevPathname.current = pathname;
      return;
    }

    // Detect pathname change
    if (prevPathname.current !== pathname) {
      // Block view immediately
      setIsNavigating(true);
      prevPathname.current = pathname;
      
      // Hide after 1 second
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const shouldShow = isLoading || isNavigating;

  if (!shouldShow) return null;

  return (
    <>
      {/* Overlay to block content */}
      <div 
        className="fixed inset-0 z-[9998] bg-black"
        style={{ display: shouldShow ? 'block' : 'none' }}
      />
      
      {/* Loader */}
      <div
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
        style={{ display: shouldShow ? 'flex' : 'none' }}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Logo - 1:1 z Navbar */}
          <div className="flex items-center gap-3 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-2xl opacity-75"></div>

            <div className="relative z-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[18px] opacity-75 blur-sm"></div>

              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                <span className="text-white font-black text-4xl sm:text-5xl relative z-10 drop-shadow-lg">B</span>
                <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">Borem</span>
                <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">.pl</span>
              </div>
              <div className="flex items-center gap-1.5 -mt-1">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <p className="text-[10px] sm:text-xs text-gray-400 font-semibold tracking-[0.15em] uppercase">
                  Agencja Marketingowa
                </p>
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </div>
            </div>
          </div>

          {/* Loading dots */}
          <div className="flex gap-1.5 mt-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>

          {/* Loading bar */}
          <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>
    </>
  );
}
