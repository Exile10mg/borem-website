'use client';

import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  // Phone number - Borem.pl
  const phoneNumber = '48787041328';
  const defaultMessage = 'Cześć! Interesuje mnie współpraca. Chciałbym uzyskać więcej informacji.';

  const handleButtonClick = () => {
    if (window.innerWidth < 768) {
      // Mobile: toggle tooltip
      setShowTooltip(!showTooltip);
    } else {
      // Desktop: open immediately
      openWhatsApp();
    }
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowTooltip(false);
  };

  // Close tooltip when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    };

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showTooltip]);

  return (
    <>
      {/* Mobile Version - Only Icon with Badge */}
      <div className="md:hidden fixed left-4 bottom-4 z-40" ref={tooltipRef}>
        <div className="relative">
          <button
            onClick={handleButtonClick}
            className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#25D366] to-[#22C55E] text-white rounded-full shadow-lg hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Skontaktuj się przez WhatsApp"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-7 h-7 text-white"
            />
          </button>

          {/* Tooltip - klikalne dymek */}
          <div
            className={`absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${
              showTooltip
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none'
            }`}
          >
            <button
              onClick={openWhatsApp}
              className="relative bg-gradient-to-r from-[#25D366] to-[#22C55E] text-white px-4 py-2.5 rounded-xl shadow-lg active:scale-95 transition-transform"
            >
              <div className="text-xs font-bold">Kliknij tutaj</div>
              <div className="text-[10px] text-white/90">aby porozmawiać</div>
              
              {/* Arrow */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#25D366]" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Version - Full Button with Text */}
      <div className="hidden md:block fixed left-6 bottom-6 lg:left-8 lg:bottom-8 z-40">
        <button
          onClick={handleButtonClick}
          className="group relative flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#22C55E] text-white rounded-2xl shadow-lg hover:shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-200 pl-3 pr-5 py-3 hover:scale-105 active:scale-95"
          aria-label="Skontaktuj się przez WhatsApp"
        >
          {/* White box with WhatsApp icon */}
          <div className="relative flex items-center justify-center w-11 h-11 bg-white rounded-xl">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-7 h-7 text-[#25D366]"
            />
          </div>

          {/* Text */}
          <div className="relative flex flex-col items-start gap-0.5">
            <span className="font-bold text-sm leading-none whitespace-nowrap">
              Porozmawiaj z nami
            </span>
            <span className="text-[11px] font-medium text-white/95 leading-none whitespace-nowrap">
              na WhatsApp
            </span>
          </div>

          {/* Notification Badge - Desktop */}
          <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-black shadow-md">
            1
          </div>
        </button>
      </div>
    </>
  );
}
