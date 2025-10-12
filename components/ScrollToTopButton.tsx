'use client';

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 md:bottom-28 md:left-8 z-[90] group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
          whileTap={{ scale: 0.95 }}
          aria-label="Przewiń do góry"
        >
          <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg hover:shadow-blue-500/40 transition-shadow duration-200">
            <FontAwesomeIcon
              icon={faArrowUp}
              className="w-5 h-5 text-white"
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
