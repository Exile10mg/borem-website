'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
  // Phone number - Borem.pl
  const phoneNumber = '48787041328';
  const defaultMessage = 'Cześć! Interesuje mnie współpraca. Chciałbym uzyskać więcej informacji.';

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Mobile Version - Icon with small text */}
      <div className="md:hidden fixed left-4 bottom-4 z-40">
        <button
          onClick={openWhatsApp}
          className="relative flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-[#25D366]/50 text-white rounded-2xl shadow-[0_4px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 px-3 py-2.5 group"
          aria-label="Skontaktuj się przez WhatsApp"
        >
          {/* Glow effect - always visible */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25D366]/20 to-[#22C55E]/20 blur-sm" />

          <FontAwesomeIcon
            icon={faWhatsapp}
            className="w-6 h-6 text-[#25D366] relative z-10 group-hover:scale-110 transition-transform duration-300"
          />

          {/* Small text */}
          <div className="relative z-10 flex flex-col">
            <span className="text-[10px] font-bold leading-tight whitespace-nowrap">Napisz do nas</span>
            <span className="text-[9px] text-gray-400 leading-tight whitespace-nowrap">na WhatsApp</span>
          </div>
        </button>
      </div>

      {/* Desktop Version - Full Button with Text */}
      <div className="hidden md:block fixed left-6 bottom-6 lg:left-8 lg:bottom-8 z-40">
        <button
          onClick={openWhatsApp}
          className="group relative flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-[#25D366]/50 text-white rounded-2xl shadow-[0_8px_40px_rgba(37,211,102,0.25)] transition-all duration-300 pl-3 pr-5 py-3 hover:scale-105 active:scale-95 hover:border-[#25D366]/70"
          aria-label="Skontaktuj się przez WhatsApp"
        >
          {/* Glowing border effect - always visible */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/20 to-[#22C55E]/0 blur-xl" />

          {/* Icon with background */}
          <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#25D366]/20 to-[#22C55E]/20 border border-[#25D366]/30 rounded-xl group-hover:border-[#25D366]/60 transition-all duration-300">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Text */}
          <div className="relative flex flex-col items-start gap-0.5 z-10">
            <span className="font-bold text-sm leading-none whitespace-nowrap text-white group-hover:text-[#25D366] transition-colors duration-300">
              Porozmawiaj z nami
            </span>
            <span className="text-[11px] font-medium text-gray-400 leading-none whitespace-nowrap group-hover:text-gray-300 transition-colors duration-300">
              na WhatsApp
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
