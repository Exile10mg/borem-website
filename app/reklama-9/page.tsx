import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page 9',
  description: 'Strona reklamowa Borem.pl - Landing Page 9',
  robots: {"index":false,"follow":false},
};

'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faRocket,
  faStar,
  faClock,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function Reklama9Page() {
  return (
    <div className="w-full h-screen bg-gray-950 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Main content - FB Cover optimized (1640x924) */}
      <div className="relative z-10 h-full flex items-center justify-center gap-12 px-16 max-w-[1640px] mx-auto">
        
        {/* Left side - Branding */}
        <div className="flex-shrink-0">
          <div className="flex items-center gap-4 mb-6">
            {/* Logo */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-50 blur-2xl rounded-2xl"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                <span className="text-white font-black text-[70px] relative z-10 drop-shadow-2xl">B</span>
                <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-white rounded-full opacity-60"></div>
                <div className="absolute bottom-2.5 left-2.5 w-2 h-2 bg-white rounded-full opacity-40"></div>
              </div>
            </div>

            {/* Brand name */}
            <div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-[80px] font-black text-white tracking-tight leading-none">Borem</span>
                <span className="text-[80px] font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-none">.pl</span>
              </div>
              <div className="flex items-center gap-2 -mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <p className="text-[10px] text-gray-400 font-semibold tracking-[0.2em] uppercase">
                  Agencja Marketingowa
                </p>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <h1 className="text-3xl font-black text-white mb-3 leading-tight max-w-2xl">
            Tworzymy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">cyfrowe doświadczenia</span>,
            <br />
            które napędzają rozwój biznesu
          </h1>

          {/* Services */}
          <div className="flex flex-wrap gap-1.5 max-w-2xl">
            {[
              'Strony WWW',
              'E-commerce',
              'Aplikacje Webowe',
              'AI & Automatyzacja',
              'Marketing & SEO',
              'Design & Branding',
            ].map((service, i) => (
              <div
                key={i}
                className="px-3 py-1.5 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-bold text-white"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Contact & Stats in 2 columns */}
        <div className="flex-shrink-0 grid grid-cols-2 gap-2 w-[400px]">
          
          {/* Contact info */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-3 space-y-2">
            <div className="text-center pb-2 border-b border-white/10">
              <div className="text-base font-black text-white mb-0.5">Skontaktuj się</div>
              <div className="text-[9px] text-gray-400">Odpowiadamy w 24h</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-[8px] text-gray-400 font-semibold">Email</div>
                  <div className="text-[10px] font-bold text-white">kontakt@borem.pl</div>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                  <FontAwesomeIcon icon={faPhone} className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-[8px] text-gray-400 font-semibold">Telefon</div>
                  <div className="text-[10px] font-bold text-white">+48 787 041 328</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-3 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-1.5">
                  <FontAwesomeIcon icon={faRocket} className="w-3 h-3 text-blue-400" />
                </div>
                <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-0.5 leading-none">150+</div>
                <div className="text-[8px] text-gray-400 font-semibold uppercase leading-tight">Projektów</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-1.5">
                  <FontAwesomeIcon icon={faStar} className="w-3 h-3 text-purple-400" />
                </div>
                <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-0.5 leading-none">98%</div>
                <div className="text-[8px] text-gray-400 font-semibold uppercase leading-tight">Zadowolonych</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-blue-500/20 flex items-center justify-center mb-1.5">
                  <FontAwesomeIcon icon={faClock} className="w-3 h-3 text-pink-400" />
                </div>
                <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 mb-0.5 leading-none">8+</div>
                <div className="text-[8px] text-gray-400 font-semibold uppercase leading-tight">Lat</div>
              </div>
            </div>
          </div>

          {/* CTA - spans 2 columns */}
          <div className="col-span-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl p-3 text-center shadow-2xl shadow-purple-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-white mb-1.5" />
              <div className="text-base font-black text-white mb-0.5">Bezpłatna konsultacja</div>
              <div className="text-[9px] text-blue-100 font-semibold">Wycena w 24 godziny</div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

    </div>
  );
}
