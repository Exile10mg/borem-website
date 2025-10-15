import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page 10',
  description: 'Strona reklamowa Borem.pl - Landing Page 10',
  robots: {"index":false,"follow":false},
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPhone, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Reklama10Page() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="max-w-3xl w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <span className="text-white text-sm font-bold">🎁 BEZPŁATNA KONSULTACJA</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            Twoja firma potrzebuje<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Profesjonalnej Strony WWW?
            </span>
          </h1>

          <p className="text-xl text-gray-300 font-medium">
            Zwiększ sprzedaż i zaufanie klientów z <span className="text-blue-400 font-bold">nowoczesną stroną</span>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { icon: faCircleCheck, text: 'Responsywna (mobile-first)' },
            { icon: faCircleCheck, text: 'Szybka i zoptymalizowana' },
            { icon: faCircleCheck, text: 'Profesjonalny design' },
            { icon: faCircleCheck, text: 'Panel zarządzania CMS' },
          ].map((feature, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={feature.icon} className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium text-base">{feature.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Price Card */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-10 mb-10 shadow-2xl shadow-purple-500/30">
          <div className="text-center">
            <div className="text-6xl font-black text-white mb-4">
              Od 2999 zł
            </div>
            <div className="text-white text-lg mb-6">
              ⚡ Realizacja: 2-3 tygodnie
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5">
              <p className="text-white font-bold text-xl">
                ✨ Pierwsze 5 klientów otrzymuje <span className="text-yellow-300">rabat 20%</span>!
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { value: '150+', label: 'Projektów' },
            { value: '98%', label: 'Zadowolonych' },
            { value: '<24h', label: 'Odpowiedź' },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 text-center backdrop-blur-sm">
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-10 backdrop-blur-sm">
          <div className="flex items-center gap-1 mb-3 justify-center">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 text-yellow-400" />
            ))}
            <span className="text-white font-bold ml-2 text-lg">5.0/5.0</span>
          </div>
          <p className="text-gray-300 text-base italic text-center mb-2">
            "Profesjonalna konsultacja, konkretny plan i świetne rezultaty. Polecam!"
          </p>
          <p className="text-gray-500 text-sm text-center">— Zarząd DAKRO Group</p>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Link
            href="/kontakt?reklama=10"
            className="flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <span>Wyślij Wiadomość</span>
          </Link>

          <a
            href="tel:+48787041328"
            className="flex items-center justify-center gap-3 px-8 py-6 bg-white text-gray-900 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
            <span>Zadzwoń Teraz</span>
          </a>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            📱 +48 787 041 328 | ✉️ kontakt@borem.pl | 🌐 borem.pl
          </p>
        </div>

      </div>
    </div>
  );
}
