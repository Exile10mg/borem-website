import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faPhone, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: '404 - Strona nie znaleziona',
  description: 'Przepraszamy, strona której szukasz nie istnieje. Wróć do strony głównej Borem.pl - agencja marketingowa.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      {/* 404 Content */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 opacity-20 blur-3xl rounded-full" />
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-purple-500/20 backdrop-blur-xl border border-red-500/30 flex items-center justify-center">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-6xl text-red-400" />
              </div>
            </div>
          </div>

          {/* 404 Number */}
          <div className="mb-6">
            <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none">
              <span className="bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                404
              </span>
            </h1>
          </div>

          {/* Main Message */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Ups! Strona nie istnieje
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Strona, której szukasz nie została znaleziona. Mogła zostać przeniesiona, usunięta lub nigdy nie istniała.
          </p>

          {/* Search suggestions */}
          <div className="mb-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faSearch} className="text-blue-400" />
              Możliwe przyczyny:
            </h3>
            <ul className="text-left space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Błędnie wpisany adres URL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Link jest przestarzały lub nieprawidłowy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>Strona została przeniesiona lub usunięta</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <FontAwesomeIcon icon={faHome} className="text-xl" />
              Strona główna
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/kontakt"
              className="px-8 py-4 bg-white/5 text-white rounded-full font-bold text-lg border-2 border-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              Skontaktuj się
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">
              Popularne strony
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/cennik"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all border border-white/10 hover:border-blue-500/30"
              >
                Cennik
              </Link>
              <Link
                href="/realizacje"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all border border-white/10 hover:border-purple-500/30"
              >
                Realizacje
              </Link>
              <Link
                href="/o-nas"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all border border-white/10 hover:border-pink-500/30"
              >
                O nas
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 hover:text-white transition-all border border-white/10 hover:border-cyan-500/30"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
