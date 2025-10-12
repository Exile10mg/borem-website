'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const StronyWWW = dynamic(() => import('@/components/sections/StronyWWW'));
const ProcesPracy = dynamic(() => import('@/components/sections/ProcesPracy'));
const ECommerce = dynamic(() => import('@/components/sections/ECommerce'));
const AplikacjeWebowe = dynamic(() => import('@/components/sections/AplikacjeWebowe'));
const AIAutomatyzacja = dynamic(() => import('@/components/sections/AIAutomatyzacja'));
const MarketingSEO = dynamic(() => import('@/components/sections/MarketingSEO'));
const Opinie = dynamic(() => import('@/components/sections/Opinie'));
const DlaczegoMy = dynamic(() => import('@/components/sections/DlaczegoMy'));
const Kontakt = dynamic(() => import('@/components/sections/Kontakt'));

export default function Home() {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollHeight = Math.max(1, doc.scrollHeight - window.innerHeight);
      const progress = Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll as any);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Progress bar - Simple CSS */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[10000] origin-left transition-transform duration-100"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <Navbar />
      <WhatsAppButton />

      {/* STATIC HERO - NO FRAMER MOTION */}
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-24 sm:pb-32"
      >
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-[5]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Text Column */}
              <div className="text-center lg:text-left space-y-6">
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="block text-white mb-2">Przekształcamy wizje</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    w rzeczywistość
                  </span>
                </h1>

                {/* Description */}
                <div className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  <p className="mb-3">Projektujemy i budujemy cyfrowe doświadczenia, które napędzają rozwój biznesu.</p>
                  <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-bold text-base sm:text-lg">
                    Od stron WWW po aplikacje AI.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 py-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      150+
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Zrealizowanych projektów</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      98%
                    </div>
                    <div className="text-sm text-gray-400 mt-1">Zadowolonych klientów</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <a
                    href="#kontakt"
                    className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Rozpocznij projekt
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>

                  <a
                    href="#realizacje"
                    className="px-8 py-4 bg-white/5 text-white rounded-full font-bold text-lg border-2 border-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Zobacz realizacje
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Tech Stack */}
                <div className="pt-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 font-semibold">Profesjonalne technologie</p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {[
                      { name: 'React', color: 'blue' },
                      { name: 'Next.js', color: 'white' },
                      { name: 'TypeScript', color: 'blue' },
                      { name: 'Tailwind', color: 'cyan' },
                      { name: 'WordPress', color: 'blue' },
                      { name: 'Node.js', color: 'green' }
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-blue-500/30 hover:scale-105 transition-all cursor-default"
                      >
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visual Column - Simple mockup (Desktop only) */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl rounded-3xl" />
                  
                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-8">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Twoja strona</div>
                          <div className="text-xs text-gray-400">Profesjonalny projekt</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {[
                          { icon: '🎨', title: 'Nowoczesny design', desc: 'Unikalne projekty' },
                          { icon: '⚡', title: 'Błyskawiczna szybkość', desc: 'Optymalizacja 100%' },
                          { icon: '📱', title: 'Responsywność', desc: 'Mobile-first' },
                          { icon: '🔒', title: 'Bezpieczeństwo', desc: 'SSL + zabezpieczenia' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                            <div className="text-2xl">{item.icon}</div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-white">{item.title}</div>
                              <div className="text-xs text-gray-400">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Status */}
                      <div className="flex items-center justify-center gap-2 pt-4 border-t border-white/10">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-400 font-semibold">System gotowy do pracy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <StronyWWW />
      <ProcesPracy />
      <ECommerce />
      <AplikacjeWebowe />
      <AIAutomatyzacja />
      <MarketingSEO />
      <Opinie />
      <DlaczegoMy />
      <Kontakt />
      <Footer />
    </main>
  );
}
