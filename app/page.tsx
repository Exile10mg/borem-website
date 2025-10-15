import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strona Główna',
  description: 'Profesjonalna agencja marketingowa Borem.pl ⭐ Tworzymy strony WWW, sklepy e-commerce, aplikacje webowe ✓ AI i automatyzacja ✓ Marketing i SEO ✓ 150+ projektów ✓ Bezpłatna konsultacja',
};

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faPalette, faMobileScreen, faLock, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNode, faWordpress } from '@fortawesome/free-brands-svg-icons';

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
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />

      {/* STATIC HERO - NO FRAMER MOTION */}
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-24 sm:pb-32 lg:pb-32 xl:pb-40"
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
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              
              {/* Text Column */}
              <div className="text-center lg:text-left space-y-6">
                {/* Title - SEO Optimized H1 */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
                  <span className="block text-white mb-2">Profesjonalna Agencja Marketingowa</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Tworzenie Stron WWW & E-commerce
                  </span>
                </h1>

                {/* Description - SEO Enhanced */}
                <div className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  <p className="mb-3">
                    <strong className="text-white">Tworzymy strony internetowe</strong>, sklepy e-commerce i aplikacje webowe. 
                    Specjalizujemy się w <strong className="text-white">AI, automatyzacji, marketingu i SEO</strong>.
                  </p>
                  <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-bold text-base sm:text-lg">
                    Kompleksowe rozwiązania dla Twojego biznesu online.
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
                    href="/realizacje"
                    className="px-8 py-4 bg-white/5 text-white rounded-full font-bold text-lg border-2 border-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Zobacz realizacje
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

              </div>

              {/* Visual Column - Simple mockup */}
              <div className="flex flex-col items-center justify-start gap-4">
                <div className="relative w-full max-w-md">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl rounded-3xl" />
                  
                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-black/90 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl p-4">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0">
                          <FontAwesomeIcon icon={faRocket} className="text-white text-lg" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">Twoja strona</div>
                          <div className="text-xs text-gray-400">Profesjonalny projekt</div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faPalette} className="text-white text-base" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-white">Nowoczesny design</div>
                            <div className="text-[10px] text-gray-400">Unikalne projekty</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-all group">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faBolt} className="text-white text-base" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-white">Błyskawiczna szybkość</div>
                            <div className="text-[10px] text-gray-400">Optymalizacja 100%</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all group">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faMobileScreen} className="text-white text-base" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-white">Responsywność</div>
                            <div className="text-[10px] text-gray-400">Mobile-first</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all group">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faLock} className="text-white text-base" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-white">Bezpieczeństwo</div>
                            <div className="text-[10px] text-gray-400">SSL + zabezpieczenia</div>
                          </div>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-center justify-center gap-2 pt-3 border-t border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] text-green-400 font-semibold">System gotowy do pracy</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack - pod boxem */}
                <div className="w-full max-w-md">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-3 font-semibold text-center">
                    Profesjonalne technologie
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {/* React */}
                    <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all hover:scale-105 cursor-default">
                      <div className="flex flex-col items-center gap-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                          <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                          <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
                          <ellipse cx="12" cy="12" rx="8" ry="3" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
                        </svg>
                        <span className="text-[10px] text-gray-300 font-medium group-hover:text-blue-400 transition-colors">React</span>
                      </div>
                    </div>

                    {/* Next.js */}
                    <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/10 hover:border-white/50 transition-all hover:scale-105 cursor-default">
                      <div className="flex flex-col items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012A11.875 11.875 0 000 10.255c0 1.21.145 2.376.432 3.495.652 4.506 3.859 8.292 8.208 9.695.779.251 1.6.422 2.534.525.364.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.157l-1.919-2.592-2.405-3.558c-.001 0-.187 1.578-.023 3.509-.007 3.38-.009 3.516-.052 3.596a.426.426 0 01-.157.171c-.075.037-.141.045-.495.045h-.406l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.073-.092c.038-.049.117-.112.174-.143.096-.047.134-.052.54-.052.478 0 .558.019.682.155.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.734 7.17l1.9 2.879.098-.063c.876-.554 1.801-1.271 2.61-2.025 1.858-1.736 3.142-3.828 3.753-6.112.257-1.022.356-1.79.356-2.762 0-1.148-.105-1.826-.402-2.609-1.828-4.831-6.741-8.148-12.035-8.148zm4.069 12.403c.105 0 .213.044.213.044.061.033.117.096.146.153.016.034.019 1.033.016 3.235l-.003 3.192-.716-1.089-.718-1.092v-2.091c0-1.214.009-2.123.024-2.17.019-.063.059-.117.1.143.038.023.094.04.174.044.079.005.218.005.54 0z" />
                        </svg>
                        <span className="text-[10px] text-gray-300 font-medium group-hover:text-white transition-colors">Next.js</span>
                      </div>
                    </div>

                    {/* TypeScript */}
                    <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all hover:scale-105 cursor-default">
                      <div className="flex flex-col items-center gap-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
                          <path d="M12 10v10M8 14h8M8 18h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <span className="text-[10px] text-gray-300 font-medium group-hover:text-blue-400 transition-colors">TypeScript</span>
                      </div>
                    </div>

                    {/* Tailwind */}
                    <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all hover:scale-105 cursor-default">
                      <div className="flex flex-col items-center gap-1">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <path fill="#38BDF8" d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
                        </svg>
                        <span className="text-[10px] text-gray-300 font-medium group-hover:text-cyan-400 transition-colors">Tailwind</span>
                      </div>
                    </div>

                    {/* WordPress */}
                    <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all hover:scale-105 cursor-default">
                      <div className="flex flex-col items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="#21759B" className="w-6 h-6 group-hover:fill-blue-400 transition-colors">
                          <path d="M12.158 12.786L9.46 20.625c.806.237 1.657.366 2.54.366 1.047 0 2.051-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.76-7.57zM3.009 12c0 3.559 2.068 6.634 5.067 8.092L3.788 8.341C3.289 9.459 3.009 10.696 3.009 12zm15.54.39c0-1.112-.399-1.881-.74-2.48-.456-.741-.883-1.368-.883-2.109 0-.826.627-1.594 1.51-1.594.04 0 .078.005.116.007-1.598-1.464-3.73-2.355-6.07-2.355-3.14 0-5.904 1.613-7.512 4.057.211.007.41.011.578.011.94 0 2.395-.114 2.395-.114.484-.028.541.684.057.74 0 0-.487.058-1.029.086l3.274 9.739 1.968-5.901-1.401-3.838c-.485-.028-.944-.085-.944-.085-.485-.057-.428-.77.056-.742 0 0 1.484.114 2.368.114.94 0 2.397-.114 2.397-.114.486-.028.543.684.058.74 0 0-.488.058-1.03.086l3.25 9.665.897-2.996c.456-1.17.684-2.137.684-2.907zm1.289-5.097c.038.253.06.525.06.818 0 .806-.15 1.71-.599 2.844l-2.406 6.946c2.343-1.364 3.922-3.89 3.922-6.815 0-1.304-.315-2.532-.876-3.61l-.101-.183z" />
                        </svg>
                        <span className="text-[10px] text-gray-300 font-medium group-hover:text-blue-400 transition-colors">WordPress</span>
                      </div>
                    </div>

                    {/* Node.js */}
                    <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all hover:scale-105 cursor-default">
                      <div className="flex flex-col items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="#339933" className="w-6 h-6 group-hover:fill-green-400 transition-colors">
                          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.55 16.6c-.07-.04-.11-.1-.11-.17V7.85c0-.07.04-.13.11-.17l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.1.11.17v8.58c0 .07-.04.13-.11.17l-7.44 4.29c-.06.04-.16.04-.22 0L10.6 20.3c-.07-.03-.14-.04-.21-.01-.63.35-.76.4-1.35.6-.15.06-.36.14.07.3l2.57 1.53c.24.14.51.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.49c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2zm2.41 7.14c-2.03 0-2.44.93-2.44 1.7 0 .12.1.22.22.22h.89c.11 0 .2-.08.22-.19.15-.95.58-1.43 1.89-1.43.97 0 1.45.32 1.45 1.05 0 .47-.2.83-.91 1.07l-1.83.48c-.95.25-1.44.87-1.44 1.8 0 1.18.99 1.89 2.65 1.89 1.87 0 2.79-.65 2.9-2.05 0-.06-.02-.12-.06-.17-.04-.05-.09-.07-.15-.07h-.9c-.09 0-.18.08-.21.17-.24 1.05-.82 1.38-1.95 1.38-.98 0-1.44-.42-1.44-1.02 0-.46.18-.69 1.16-.97l2.01-.52c.95-.25 1.44-.87 1.44-1.78.01-1.36-1.13-2.17-3.1-2.17z"/>
                        </svg>
                        <span className="text-[10px] text-gray-300 font-medium group-hover:text-green-400 transition-colors">Node.js</span>
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
