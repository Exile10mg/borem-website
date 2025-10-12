'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faShoppingCart, faCode, faRobot, faArrowRight, faChartLine, faComments } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    category: 'Strony WWW',
    href: '/#strony-www',
    icon: faGlobe,
    description: 'Nowoczesne strony internetowe',
  },
  {
    category: 'E-Commerce',
    href: '/#ecommerce',
    icon: faShoppingCart,
    description: 'Sklepy internetowe',
  },
  {
    category: 'Aplikacje',
    href: '/#aplikacje',
    icon: faCode,
    description: 'Dedykowane rozwiązania',
  },
  {
    category: 'AI & Automatyzacja',
    href: '/#ai',
    icon: faRobot,
    description: 'AI i Marketing',
  },
  {
    category: 'Marketing & SEO',
    href: '/#marketing',
    icon: faChartLine,
    description: 'Promocja i optymalizacja',
  },
  {
    category: 'Konsultacja',
    href: '/kontakt',
    icon: faComments,
    description: 'Bezpłatna rozmowa',
  },
];

const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[60] transition-all duration-200 ${
          isScrolled ? 'backdrop-blur-2xl shadow-2xl shadow-purple-500/20' : ''
        }`}
      >
        <div className={`absolute inset-0 z-[1] transition-opacity duration-200 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px]"></div>
          </div>

          <div className="absolute inset-0">
            <div
              className="absolute -top-10 left-1/4 w-[250px] h-[250px] rounded-full opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0) 70%)',
                filter: 'blur(60px)',
              }}
            />
            <div
              className="absolute -top-10 right-1/4 w-[220px] h-[220px] rounded-full opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0) 70%)',
                filter: 'blur(60px)',
              }}
            />
            <div
              className="absolute -top-5 left-1/2 w-[200px] h-[200px] rounded-full opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(236,72,153,0.5) 0%, rgba(236,72,153,0) 70%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/98 via-black/95 to-black/98 z-0"></div>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
        </div>

        <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group relative z-[100]">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-[110]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-[18px] opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300"></div>

                <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
                  <span className="text-white font-black text-xl sm:text-2xl lg:text-3xl relative z-10 drop-shadow-lg">B</span>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-40 group-hover:opacity-80 transition-opacity"></div>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-base sm:text-xl lg:text-2xl font-black text-white tracking-tight">Borem</span>
                  <span className="text-base sm:text-xl lg:text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">.pl</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 -mt-0.5">
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <p className="text-[7px] sm:text-[9px] lg:text-[10px] text-gray-400 font-semibold tracking-[0.1em] sm:tracking-[0.15em] uppercase whitespace-nowrap">
                    Agencja Marketingowa
                  </p>
                  <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-lg group/nav overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
                <span className="relative group-hover/nav:translate-x-0.5 inline-block transition-transform">Strona główna</span>
              </Link>

              <div className="h-6 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>

              <div
                className="relative group/mega"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="relative px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-lg flex items-center gap-2 group/nav overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
                  <span className="relative group-hover/nav:translate-x-0.5 transition-transform">Usługi</span>
                  <svg
                    className={`relative w-3 h-3 transition-all duration-300 ${
                      activeDropdown === 'services' ? 'rotate-180' : 'group-hover/nav:translate-y-0.5'
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] z-[70]">
                    <div className="relative mt-1">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-xl blur-lg"></div>

                      <div className="relative bg-black/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/10 p-3">
                        <div className="grid grid-cols-3 gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.category}
                              href={service.href}
                              className="group/item flex items-center gap-2.5 p-3 rounded-lg hover:bg-white/5 transition-all"
                            >
                              <div className="relative flex-shrink-0">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover/item:scale-105 group-hover/item:from-blue-500/30 group-hover/item:to-purple-500/30 transition-all duration-200 border border-blue-500/20">
                                  <FontAwesomeIcon icon={service.icon} className="w-4 h-4 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-white group-hover/item:text-blue-400 transition-colors text-[13px] leading-tight mb-0.5 truncate">
                                  {service.category}
                                </h3>
                                <p className="text-[10px] text-gray-500 group-hover/item:text-gray-400 transition-colors leading-tight truncate">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>

              <Link
                href="/realizacje"
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-lg group/nav overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
                <span className="relative group-hover/nav:translate-x-0.5 inline-block transition-transform">Realizacje</span>
              </Link>

              <div className="h-6 w-px bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"></div>

              <Link
                href="/cennik"
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-lg group/nav overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
                <span className="relative group-hover/nav:translate-x-0.5 inline-block transition-transform">Cennik</span>
              </Link>

              <div className="h-6 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>

              <Link
                href="/blog"
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-lg group/nav overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
                <span className="relative group-hover/nav:translate-x-0.5 inline-block transition-transform">Blog</span>
              </Link>

              <div className="h-6 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>

              <Link
                href="/o-nas"
                className="relative px-5 py-2.5 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 rounded-lg group/nav overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover/nav:opacity-100 transition-opacity"></span>
                <span className="relative group-hover/nav:translate-x-0.5 inline-block transition-transform">O Nas</span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-3 relative z-[100]">
              <Link
                href="/kontakt?konsultacja=true"
                className="relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>Bezpłatna konsultacja</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-white relative z-[100]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[999]">
          <style jsx global>{`
            @keyframes slideInFromRight {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
            @keyframes slideDown {
              from {
                opacity: 0;
                max-height: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                max-height: 500px;
                transform: translateY(0);
              }
            }
            .slide-in-right {
              animation: slideInFromRight 0.3s ease-out forwards;
            }
            .animate-slideDown {
              animation: slideDown 0.3s ease-out forwards;
            }
          `}</style>
          <div className="relative w-full h-full bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl overflow-hidden slide-in-right">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px]"></div>
              </div>

              <div
                className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
                  filter: 'blur(60px)',
                }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0) 70%)',
                  filter: 'blur(60px)',
                }}
              />

              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <span className="text-white font-black text-2xl">B</span>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xl font-black text-white">Borem</span>
                        <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">.pl</span>
                      </div>
                      <p className="text-[9px] text-gray-400 font-semibold tracking-wider uppercase">Agencja Marketingowa</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                    aria-label="Zamknij menu"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-500/20 transition-all">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Strona główna</span>
                  </Link>

                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="group w-full flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all active:scale-95"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-500/20 transition-all">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Usługi</span>
                      </div>
                      <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-2 ml-14 space-y-2 animate-slideDown">
                        {services.map((service) => (
                          <Link
                            key={service.category}
                            href={service.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all group/service"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                              <FontAwesomeIcon icon={service.icon} className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="flex-1 text-left">
                              <div className="font-semibold text-white group-hover/service:text-blue-400 transition-colors">{service.category}</div>
                              <div className="text-xs text-gray-400">{service.description}</div>
                            </div>
                            <svg
                              className="w-4 h-4 text-gray-600 group-hover/service:text-blue-400 transition-colors flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/realizacje"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-pink-500/20 transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-500/10 flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-pink-500/20 transition-all">
                      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">Realizacje</span>
                  </Link>

                  <Link
                    href="/cennik"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-500/30 hover:to-green-500/20 transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-500/20 transition-all">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Cennik</span>
                  </Link>

                  <Link
                    href="/o-nas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-orange-500/30 hover:to-orange-500/20 transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-orange-500/20 transition-all">
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">O Nas</span>
                  </Link>

                  <Link
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-cyan-500/20 transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-cyan-500/20 transition-all">
                      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Blog</span>
                  </Link>
                </div>

                <div className="px-6 py-6 space-y-3 border-t border-white/10 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-xl">
                  <Link
                    href="/kontakt?konsultacja=true"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group relative block px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl text-center font-bold text-base shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Bezpłatna konsultacja</span>
                    </div>
                  </Link>

                  <Link
                    href="/realizacje"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group relative block px-8 py-4 bg-white/5 backdrop-blur-xl text-white rounded-2xl text-center font-bold text-base border-2 border-white/20 hover:border-purple-500/50 hover:bg-white/10 active:scale-95 transition-all overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>Zobacz realizacje</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
});

export default Navbar;
