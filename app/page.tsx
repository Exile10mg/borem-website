'use client';

import React, { memo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const StronyWWW = dynamic(() => import('@/components/sections/StronyWWW'), {
  loading: () => <div className="min-h-screen" />,
});

const ProcesPracy = dynamic(() => import('@/components/sections/ProcesPracy'), {
  loading: () => <div className="min-h-screen" />,
});

const ECommerce = dynamic(() => import('@/components/sections/ECommerce'), {
  loading: () => <div className="min-h-screen" />,
});

const AplikacjeWebowe = dynamic(() => import('@/components/sections/AplikacjeWebowe'), {
  loading: () => <div className="min-h-screen" />,
});

const AIAutomatyzacja = dynamic(() => import('@/components/sections/AIAutomatyzacja'), {
  loading: () => <div className="min-h-screen" />,
});

const MarketingSEO = dynamic(() => import('@/components/sections/MarketingSEO'), {
  loading: () => <div className="min-h-screen" />,
});

const Opinie = dynamic(() => import('@/components/sections/Opinie'), {
  loading: () => <div className="min-h-screen" />,
});

const DlaczegoMy = dynamic(() => import('@/components/sections/DlaczegoMy'), {
  loading: () => <div className="min-h-screen" />,
});

const Kontakt = dynamic(() => import('@/components/sections/Kontakt'), {
  loading: () => <div className="min-h-screen" />,
});

type Particle = {
  size: number;
  startTop: number;
  startLeft: number;
  color: string;
  shadowColor: string;
  glowSize: number;
  duration: number;
  delay: number;
};

const heroSlides = [
  {
    title: 'Przekształcamy wizje',
    subtitle: 'w rzeczywistość',
    description:
      'Projektujemy i budujemy cyfrowe doświadczenia, które napędzają rozwój biznesu.',
    highlight: 'Od stron WWW po aplikacje AI.',
  },
  {
    title: 'Tworzymy rozwiązania',
    subtitle: 'które wygrywają',
    description:
      'Wykorzystujemy najnowsze technologie, aby Twój biznes wyprzedził konkurencję.',
    highlight: 'Innowacyjne podejście i efekty.',
  },
  {
    title: 'Budujemy sukces',
    subtitle: 'Twojej marki',
    description:
      'Kompleksowe wsparcie od pomysłu do realizacji i dalszego rozwoju Twojego biznesu.',
    highlight: 'Więcej niż agencja - partner.',
  },
];

const codeLines: { code: string; color: string; isComment?: boolean }[] = [
  { code: '// Tworzymy Twoją wizję ✨', color: 'text-gray-500', isComment: true },
  { code: 'import { magic } from "@borem/studio"', color: 'text-pink-400' },
  { code: '', color: '' },
  { code: 'const project = {', color: 'text-purple-400' },
  { code: '  design: "modern & unique",', color: 'text-blue-300' },
  { code: '  animations: "butter smooth",', color: 'text-green-300' },
  { code: '  performance: "blazing fast ⚡",', color: 'text-yellow-300' },
  { code: '  seo: "top rankings 📈",', color: 'text-pink-300' },
  { code: '  responsive: true,', color: 'text-cyan-300' },
  { code: '};', color: 'text-white' },
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [counters, setCounters] = React.useState({ projects: 0, satisfaction: 0 });
  const [typedCode, setTypedCode] = React.useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0);
  const [buildProgress, setBuildProgress] = React.useState(0);
  
  // Detect mobile for disabling animations
  const [isMobile, setIsMobile] = React.useState(false);

  // Particles (generowane tylko na kliencie, aby uniknąć błędów hydratacji)
  const [particles, setParticles] = React.useState<Particle[]>([]);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    const isMobileWidth = window.innerWidth < 768;
    const count = isMobileWidth ? 30 : 60;
    const newParticles = [...Array(count)].map((_, i) => {
      const startLeft = Math.random() * 100;
      const startTop = Math.random() * 100;
      return {
        size: Math.random() * 5 + 2,
        startTop,
        startLeft,
        color:
          i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#ec4899',
        shadowColor:
          i % 3 === 0
            ? 'rgba(59,130,246,1)'
            : i % 3 === 1
            ? 'rgba(139,92,246,1)'
            : 'rgba(236,72,153,1)',
        glowSize: Math.random() * 20 + 10,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 8,
      };
    });
    setParticles(newParticles);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollHeight = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // inicjalizuj postęp po pierwszym renderze
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll as any);
    };
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [prefersReducedMotion, isMobile]);

  React.useEffect(() => {
    if (prefersReducedMotion || isMobile) {
      setCounters({ projects: 150, satisfaction: 98 });
      return;
    }
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        projects: Math.min(Math.floor((currentStep / steps) * 150), 150),
        satisfaction: Math.min(Math.floor((currentStep / steps) * 98), 98),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  // Typing + build progress (z respektowaniem prefers-reduced-motion i mobile)
  React.useEffect(() => {
    if (prefersReducedMotion || isMobile) {
      setTypedCode(codeLines.map((l) => l.code));
      setBuildProgress(100);
      setCurrentLineIndex(codeLines.length);
      setCurrentCharIndex(0);
      return;
    }

    const totalChars = codeLines.reduce((acc, line) => acc + line.code.length, 0);
    const typedChars = typedCode.reduce((acc, line) => acc + (line?.length || 0), 0);

    const progress = Math.min((typedChars / totalChars) * 100 || 0, 100);
    setBuildProgress(progress);

    if (currentLineIndex >= codeLines.length) return;

    const currentLine = codeLines[currentLineIndex].code;

    if (currentCharIndex < currentLine.length) {
      const charTimer = setTimeout(() => {
        setTypedCode((prev) => {
          const next = [...prev];
          if (!next[currentLineIndex]) next[currentLineIndex] = '';
          next[currentLineIndex] += currentLine[currentCharIndex];
          return next;
        });
        setCurrentCharIndex((v) => v + 1);
      }, 50);
      return () => clearTimeout(charTimer);
    } else {
      const lineTimer = setTimeout(() => {
        setCurrentLineIndex((v) => v + 1);
        setCurrentCharIndex(0);
      }, 300);
      return () => clearTimeout(lineTimer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLineIndex, currentCharIndex, prefersReducedMotion, isMobile, typedCode]);


  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Pasek postępu scrolla */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[10000] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />

      <Navbar />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-24 sm:pb-32"
      >
        {/* Background effects - Static gradients like other pages */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Przyciemnienie (naprawa z-index) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-[5]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Lewa kolumna - Tekst (order-1 na mobile) */}
              <div className="order-1 lg:order-1 text-center lg:text-left space-y-4 sm:space-y-6">
                <div className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-black mb-4 sm:mb-6 leading-[1.15] lg:leading-[1.25] tracking-tight min-h-[90px] xs:min-h-[100px] sm:min-h-[110px] lg:min-h-[120px] flex items-center justify-center lg:justify-start">
                  <motion.h1
                    key={currentSlide}
                    initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-xl lg:max-w-2xl"
                  >
                    <motion.span
                      className="block text-white"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {heroSlides[currentSlide].title}
                    </motion.span>
                    <motion.span
                      className="block mt-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      style={{ backgroundSize: '200% 200%' }}
                    >
                      {heroSlides[currentSlide].subtitle}
                    </motion.span>
                  </motion.h1>
                </div>

                <div className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 min-h-[60px] sm:min-h-[70px] md:min-h-[80px] flex items-center justify-center lg:justify-start">
                  <motion.p
                    key={`desc-${currentSlide}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-gray-300 leading-relaxed max-w-xl"
                  >
                    {heroSlides[currentSlide].description}
                    <motion.span
                      className="block mt-2 sm:mt-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-bold text-sm sm:text-base"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {heroSlides[currentSlide].highlight}
                    </motion.span>
                  </motion.p>
                </div>

                <motion.div
                  className="flex gap-2 mb-4 sm:mb-5 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  {heroSlides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className="relative h-1 rounded-full overflow-hidden cursor-pointer touch-manipulation"
                      style={{ width: currentSlide === index ? '40px' : '20px' }}
                      animate={{ width: currentSlide === index ? '40px' : '20px' }}
                      transition={{ duration: 0.3 }}
                      aria-label={`Przełącz slájd ${index + 1}`}
                    >
                      <div className="absolute inset-0 bg-white/20" />
                      {currentSlide === index && !prefersReducedMotion && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                          initial={{ x: '-100%' }}
                          animate={{ x: '0%' }}
                          transition={{ duration: 5, ease: 'linear' }}
                        />
                      )}
                    </motion.button>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <motion.a
                    href="#kontakt"
                    className="group/cta relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-bold text-base sm:text-lg shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-2 overflow-hidden touch-manipulation"
                    whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
                    whileTap={{ scale: 0.95 }}
                  >
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/cta:opacity-100 transition-opacity"
                        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                        style={{ backgroundSize: '200% 200%' }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2 group-hover/cta:text-white transition-colors">
                      Rozpocznij projekt
                      {!prefersReducedMotion && (
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      )}
                    </span>
                  </motion.a>

                  <motion.a
                    href="#realizacje"
                    className="group/cta2 relative px-6 sm:px-8 py-3 sm:py-4 bg-white/5 text-white rounded-full font-bold text-base sm:text-lg border-2 border-white/20 backdrop-blur-xl overflow-hidden flex items-center justify-center gap-2 touch-manipulation"
                    whileHover={
                      !prefersReducedMotion
                        ? {
                            scale: 1.05,
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            borderColor: 'rgba(139,92,246,0.6)',
                            boxShadow: '0 0 30px rgba(139,92,246,0.4)',
                          }
                        : undefined
                    }
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Zobacz realizacje
                      {!prefersReducedMotion && (
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          whileHover={{ x: 3 }}
                        >
                          <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </motion.svg>
                      )}
                    </span>
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/40 to-pink-500/0 opacity-0 group-hover/cta2:opacity-100"
                        animate={{
                          x: ['-100%', '100%'],
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        style={{ backgroundSize: '200% 200%' }}
                        transition={{
                          x: { duration: 2, repeat: Infinity, ease: 'linear' },
                          backgroundPosition: { duration: 3, repeat: Infinity },
                        }}
                      />
                    )}
                  </motion.a>
                </motion.div>
              </div>

              {/* Prawa kolumna - Animacje (order-2 na mobile = po tekście) */}
              <div className="order-2 lg:order-2">
                {/* Mobilna wersja - tylko technologie */}
                <div className="lg:hidden -mt-6">
                  {/* Technologie na mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-2"
                  >
                    <div className="text-center mb-3">
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        Profesjonalne technologie
                      </p>
                    </div>

                    <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
                      {/* React */}
                      <motion.div
                        className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-blue-400/50 transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9, type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative">
                          <div className="w-full aspect-square flex items-center justify-center mb-0.5">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
                              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
                              <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
                            </svg>
                          </div>
                          <p className="text-[8px] text-gray-300 text-center font-semibold group-hover:text-blue-400 transition-colors">React</p>
                        </div>
                      </motion.div>

                      {/* Next.js */}
                      <motion.div
                        className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-white/50 transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-white/20"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative">
                          <div className="w-full aspect-square flex items-center justify-center mb-0.5">
                            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                              <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0971-.0633c.8763-.5536 1.8014-1.2708 2.6096-2.0247 1.8587-1.7356 3.1424-3.8279 3.7534-6.1119.2572-1.0218.3557-1.7898.3557-2.7622 0-1.1475-.1048-1.8261-.4019-2.6091-1.8281-4.8308-6.7413-8.1479-12.0352-8.1479zm4.0685 12.4027c.105 0 .2127.0445.2127.0445.061.0328.1174.0961.1456.1529.0162.0336.0188 1.0329.0162 3.2347l-.0026 3.1921-.7156-1.0893-.7182-1.0915v-2.0916c0-1.2136.0094-2.1229.0235-2.1694.0188-.0629.0587-.1174.1.143.0376.0234.0936.0398.1736.0445.0786.0047.2182.0047.5396 0z" />
                            </svg>
                          </div>
                          <p className="text-[8px] text-gray-300 text-center font-semibold group-hover:text-white transition-colors">Next.js</p>
                        </div>
                      </motion.div>

                      {/* WordPress */}
                      <motion.div
                        className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-blue-500/50 transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1, type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative">
                          <div className="w-full aspect-square flex items-center justify-center mb-0.5">
                            <svg viewBox="0 0 24 24" fill="#21759B" className="w-6 h-6 group-hover:fill-blue-400 transition-colors">
                              <path d="M12.158 12.786L9.46 20.625c.806.237 1.657.366 2.54.366 1.047 0 2.051-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.76-7.57zM3.009 12c0 3.559 2.068 6.634 5.067 8.092L3.788 8.341C3.289 9.459 3.009 10.696 3.009 12zm15.54.39c0-1.112-.399-1.881-.74-2.48-.456-.741-.883-1.368-.883-2.109 0-.826.627-1.594 1.51-1.594.04 0 .078.005.116.007-1.598-1.464-3.73-2.355-6.07-2.355-3.14 0-5.904 1.613-7.512 4.057.211.007.41.011.578.011.94 0 2.395-.114 2.395-.114.484-.028.541.684.057.74 0 0-.487.058-1.029.086l3.274 9.739 1.968-5.901-1.401-3.838c-.485-.028-.944-.085-.944-.085-.485-.057-.428-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.996c.456-1.17.684-2.137.684-2.907zm1.289-5.097c.038.253.06.525.06.818 0 .806-.15 1.71-.599 2.844l-2.406 6.946c2.343-1.364 3.922-3.89 3.922-6.815 0-1.304-.315-2.532-.876-3.61l-.101-.183z" />
                            </svg>
                          </div>
                          <p className="text-[8px] text-gray-300 text-center font-semibold group-hover:text-blue-400 transition-colors">WordPress</p>
                        </div>
                      </motion.div>

                      {/* Tailwind */}
                      <motion.div
                        className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:border-cyan-500/50 transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative">
                          <div className="w-full aspect-square flex items-center justify-center mb-0.5">
                            <svg viewBox="0 0 24 24" className="w-6 h-6">
                              <path
                                fill="#38BDF8"
                                className="group-hover:fill-cyan-300 transition-colors"
                                d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                              />
                            </svg>
                          </div>
                          <p className="text-[8px] text-gray-300 text-center font-semibold group-hover:text-cyan-400 transition-colors">Tailwind</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Mała animacja mockup na mobile */}
                  <motion.div
                    className="relative w-full max-w-xs mx-auto mt-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-2xl rounded-2xl" />

                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

                      {/* Particles effect */}
                      {!prefersReducedMotion && (
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-blue-400 rounded-full"
                              style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 2) * 20}%`,
                              }}
                              animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Terminal header */}
                      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 border-b border-white/10 px-3 py-2">
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg" />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg" />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg" />
                          </div>
                          <span className="text-[8px] text-gray-400 font-mono ml-1">Building...</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-3 space-y-2">
                        {[
                          { width: '85%', color: 'from-blue-400 to-blue-600', delay: 1.5 },
                          { width: '65%', color: 'from-purple-400 to-purple-600', delay: 1.7 },
                          { width: '75%', color: 'from-pink-400 to-pink-600', delay: 1.9 },
                          { width: '55%', color: 'from-cyan-400 to-cyan-600', delay: 2.1 },
                        ].map((bar, idx) => (
                          <motion.div
                            key={idx}
                            className={`h-2 bg-gradient-to-r ${bar.color} rounded-full shadow-lg`}
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: bar.width, opacity: 1 }}
                            transition={{ delay: bar.delay, duration: 1, ease: 'easeOut' }}
                          />
                        ))}

                        {/* Success message */}
                        <motion.div
                          className="flex items-center gap-1.5 pt-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.3, duration: 0.5 }}
                        >
                          <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[8px] text-green-400 font-mono">Build completed</span>
                        </motion.div>
                      </div>

                      {/* Bottom glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-600/20 to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                </div>

                {/* Desktop wersja - Static mockups */}
                <motion.div
                  className="hidden lg:block relative w-full h-[500px]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >

                  {/* MacBook + kod - Static */}
                  <motion.div
                    className="absolute z-10 left-0 scale-75 xs:scale-90 sm:scale-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="relative">
                      {/* Ekran */}
                      <div className="relative w-56 xs:w-64 sm:w-72 h-36 xs:h-42 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 xs:border-3 sm:border-4 border-gray-700 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                        <div className="relative bg-[#1e1e1e] border-b border-gray-700 px-2 xs:px-3 py-1.5 xs:py-2 flex items-center gap-2">
                          <div className="flex gap-1 xs:gap-1.5">
                            <div className="w-1.5 xs:w-2 sm:w-2.5 h-1.5 xs:h-2 sm:h-2.5 rounded-full bg-red-500" />
                            <div className="w-1.5 xs:w-2 sm:w-2.5 h-1.5 xs:h-2 sm:h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-1.5 xs:w-2 sm:w-2.5 h-1.5 xs:h-2 sm:h-2.5 rounded-full bg-green-500" />
                          </div>
                          <span className="text-[7px] xs:text-[8px] text-gray-400 font-mono">index.tsx</span>
                        </div>

                        <div className="relative w-full h-full p-2 xs:p-2.5 sm:p-3 bg-[#1e1e1e] overflow-hidden">
                          <div className="space-y-0.5 xs:space-y-1 text-[7px] xs:text-[8px] sm:text-[9px] font-mono leading-relaxed">
                            {codeLines.map((line, index) => (
                              <div key={index} className={line.color}>
                                {line.code}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
                      </div>
                      <div className="relative w-56 xs:w-64 sm:w-72 h-1.5 xs:h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg -mt-1" />
                      <div className="relative w-64 xs:w-72 sm:w-80 h-0.5 xs:h-1 bg-gradient-to-r from-transparent via-gray-600 to-transparent -mt-1 -mx-4 rounded-full" />
                    </div>
                  </motion.div>

                  {/* Okno przeglądarki - Static */}
                  <motion.div
                    className="absolute z-20 right-0 top-4 xs:top-6 sm:top-8 scale-75 xs:scale-85 sm:scale-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <div className="relative w-52 xs:w-56 sm:w-64 h-64 xs:h-72 sm:h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg xs:rounded-xl border xs:border-2 border-gray-700 shadow-2xl overflow-hidden">
                      <div className="bg-gray-800 border-b border-gray-700 px-2 xs:px-3 py-1.5 xs:py-2">
                        <div className="flex items-center gap-2 mb-1.5 xs:mb-2">
                          <div className="flex gap-1 xs:gap-1.5">
                            <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-red-500" />
                            <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-yellow-500" />
                            <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-green-500" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 xs:gap-2 bg-gray-700 rounded px-1.5 xs:px-2 py-0.5 xs:py-1">
                          <svg className="w-1.5 xs:w-2 h-1.5 xs:h-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-[6px] xs:text-[7px] text-gray-300 font-mono">yourwebsite.com</span>
                        </div>
                      </div>

                      {/* Treść - gotowa strona */}
                      <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 p-2 xs:p-2.5 sm:p-3 overflow-hidden">
                        <div className="h-full relative">
                          <div className="space-y-2">
                            <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg p-3 border border-blue-500/50 relative overflow-hidden">
                              <div className="h-2 bg-white/70 rounded w-3/4 mb-2" />
                              <div className="h-1.5 bg-white/50 rounded w-full mb-1" />
                              <div className="h-1.5 bg-white/50 rounded w-2/3" />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {[0, 1, 2, 3].map((i) => (
                                <div
                                  key={i}
                                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-2 border border-purple-500/30"
                                >
                                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded mb-1" />
                                  <div className="h-1 bg-white/40 rounded w-full mb-0.5" />
                                  <div className="h-1 bg-white/30 rounded w-2/3" />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="absolute bottom-2 right-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[8px] font-bold text-white">LIVE</span>
                          </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none rounded-xl" />
                    </div>
                  </motion.div>

                  {/* Technologie */}
                  <motion.div
                    className="absolute -bottom-16 xs:-bottom-14 sm:-bottom-12 md:-bottom-10 lg:bottom-0 right-0 left-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    <div className="text-center mb-2 sm:mb-3">
                      <p className="text-[10px] xs:text-xs text-gray-400 font-semibold uppercase tracking-wider">
                        Profesjonalne technologie
                      </p>
                    </div>

                    <div className="grid grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 max-w-xs xs:max-w-sm sm:max-w-md mx-auto px-4">
                      {/* React */}
                      <motion.div
                        className="group relative bg-white/5 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-2.5 sm:p-3 border border-white/10 hover:border-blue-400/50 transition-all hover:bg-white/10"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.7 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/10 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <svg className="w-full h-6 xs:h-7 sm:h-8" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
                          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
                          <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
                        </svg>
                        <p className="text-[8px] xs:text-[9px] text-gray-400 text-center mt-0.5 xs:mt-1 font-medium">React</p>
                      </motion.div>

                      {/* Next.js */}
                      <motion.div
                        className="group relative bg-white/5 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-2.5 sm:p-3 border border-white/10 hover:border-white/50 transition-all hover:bg-white/10"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-full h-6 xs:h-7 sm:h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6">
                            <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.0971-.0633c.8763-.5536 1.8014-1.2708 2.6096-2.0247 1.8587-1.7356 3.1424-3.8279 3.7534-6.1119.2572-1.0218.3557-1.7898.3557-2.7622 0-1.1475-.1048-1.8261-.4019-2.6091-1.8281-4.8308-6.7413-8.1479-12.0352-8.1479zm4.0685 12.4027c.105 0 .2127.0445.2127.0445.061.0328.1174.0961.1456.1529.0162.0336.0188 1.0329.0162 3.2347l-.0026 3.1921-.7156-1.0893-.7182-1.0915v-2.0916c0-1.2136.0094-2.1229.0235-2.1694.0188-.0629.0587-.1174.1.143.0376.0234.0936.0398.1736.0445.0786.0047.2182.0047.5396 0z" />
                          </svg>
                        </div>
                        <p className="text-[8px] xs:text-[9px] text-gray-400 text-center mt-0.5 xs:mt-1 font-medium">Next.js</p>
                      </motion.div>

                      {/* WordPress */}
                      <motion.div
                        className="group relative bg-white/5 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-2.5 sm:p-3 border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.9 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-full h-6 xs:h-7 sm:h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="#21759B" className="w-6 h-6 xs:w-6.5 xs:h-6.5 sm:w-7 sm:h-7">
                            <path d="M12.158 12.786L9.46 20.625c.806.237 1.657.366 2.54.366 1.047 0 2.051-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.76-7.57zM3.009 12c0 3.559 2.068 6.634 5.067 8.092L3.788 8.341C3.289 9.459 3.009 10.696 3.009 12zm15.54.39c0-1.112-.399-1.881-.74-2.48-.456-.741-.883-1.368-.883-2.109 0-.826.627-1.594 1.51-1.594.04 0 .078.005.116.007-1.598-1.464-3.73-2.355-6.07-2.355-3.14 0-5.904 1.613-7.512 4.057.211.007.41.011.578.011.94 0 2.395-.114 2.395-.114.484-.028.541.684.057.74 0 0-.487.058-1.029.086l3.274 9.739 1.968-5.901-1.401-3.838c-.485-.028-.944-.085-.944-.085-.485-.057-.428-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.996c.456-1.17.684-2.137.684-2.907zm1.289-5.097c.038.253.06.525.06.818 0 .806-.15 1.71-.599 2.844l-2.406 6.946c2.343-1.364 3.922-3.89 3.922-6.815 0-1.304-.315-2.532-.876-3.61l-.101-.183z" />
                          </svg>
                        </div>
                        <p className="text-[8px] xs:text-[9px] text-gray-400 text-center mt-0.5 xs:mt-1 font-medium">WordPress</p>
                      </motion.div>

                      {/* Tailwind */}
                      <motion.div
                        className="group relative bg-white/5 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-2.5 sm:p-3 border border-white/10 hover:border-cyan-500/50 transition-all hover:bg-white/10"
                        whileHover={!prefersReducedMotion ? { scale: 1.05, y: -3 } : undefined}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.0 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/10 rounded-lg xs:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-full h-6 xs:h-7 sm:h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-7 h-7 xs:w-7.5 xs:h-7.5 sm:w-8 sm:h-8">
                            <path
                              fill="#38BDF8"
                              d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                            />
                          </svg>
                        </div>
                        <p className="text-[8px] xs:text-[9px] text-gray-400 text-center mt-0.5 xs:mt-1 font-medium">Tailwind</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Strony WWW Section */}
      <StronyWWW />

      {/* Proces Pracy Section */}
      <ProcesPracy />

      {/* E-Commerce Section */}
      <ECommerce />

      {/* Aplikacje Webowe Section */}
      <AplikacjeWebowe />

      {/* AI & Automatyzacja Section */}
      <AIAutomatyzacja />

      {/* Marketing & SEO Section */}
      <MarketingSEO />

      {/* Opinie Section */}
      <Opinie />

      {/* Dlaczego My Section */}
      <DlaczegoMy />

      {/* Kontakt Section */}
      <Kontakt />

      {/* Footer */}
      <Footer />
    </main>
  );
}

const FeatureCard = memo(function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;   // było: string
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
});
