'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
  const prefersReducedMotion = useReducedMotion();

  // Phone number - Borem.pl
  const phoneNumber = '48787041328';
  const defaultMessage = 'Cześć! Interesuje mnie współpraca. Chciałbym uzyskać więcej informacji.';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="fixed left-6 bottom-6 md:left-8 md:bottom-8 z-[50]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
        ease: 'easeOut',
      }}
    >
      <motion.button
        onClick={handleClick}
        className="group relative flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#22C55E] text-white rounded-2xl shadow-lg hover:shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-shadow duration-200 pl-3 pr-5 py-3"
        whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
        whileTap={{ scale: 0.95 }}
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
      </motion.button>
    </motion.div>
  );
}
