import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page 7',
  description: 'Strona reklamowa Borem.pl - Landing Page 7',
  robots: {"index":false,"follow":false},
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Reklama7Page() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Main content - 1024x1024 optimized */}
      <div className="max-w-3xl w-full relative z-10">
        
        {/* Logo at top */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 blur-sm"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
              <span className="text-white font-black text-4xl relative z-10 drop-shadow-lg">B</span>
              <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-3xl font-black text-white tracking-tight">Borem</span>
              <span className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">.pl</span>
            </div>
            <div className="flex items-center gap-1.5 -mt-0.5">
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <p className="text-xs text-gray-400 font-semibold tracking-[0.15em] uppercase">
                Agencja Marketingowa
              </p>
              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Gotowy na
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Bezpłatną Konsultację?
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Porozmawiajmy o Twoim projekcie. Bez zobowiązań, za darmo.
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: faCircleCheck, text: 'Darmowa wycena', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=300&h=200&fit=crop' },
              { icon: faCircleCheck, text: 'Bezpłatny audyt', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop' },
              { icon: faCircleCheck, text: 'Plan działania', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop' },
            ].map((benefit, i) => (
              <div key={i} className="relative bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl p-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img src={benefit.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                </div>
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <FontAwesomeIcon icon={benefit.icon} className="w-6 h-6 text-green-400" />
                  <span className="text-white font-semibold">{benefit.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/kontakt?konsultacja=true"
            className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-black text-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 mb-8"
          >
            <span>UMÓW KONSULTACJĘ</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-7 h-7" />
          </Link>

          {/* Contact info */}
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">+48 787 041 328</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">kontakt@borem.pl</span>
            </div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
              alt="" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          </div>
          <div className="flex items-center gap-1 mb-3 justify-center relative z-10">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white font-bold ml-2">5.0/5.0</span>
          </div>
          <p className="text-gray-300 text-center italic leading-relaxed relative z-10">
            "Profesjonalna konsultacja, konkretny plan i świetne rezultaty. Polecam!"
          </p>
          <p className="text-gray-500 text-center text-sm mt-2 relative z-10">— Zarząd DAKRO Group</p>
        </div>

      </div>
    </div>
  );
}
