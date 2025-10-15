import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page 5',
  description: 'Strona reklamowa Borem.pl - Landing Page 5',
  robots: {"index":false,"follow":false},
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faBoltLightning, faStar, faCrown, faChartLine, faRocket, faBullseye, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Reklama5Page() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Main content - 1024x1024 optimized */}
      <div className="max-w-4xl w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
            Marketing & SEO
          </h1>

          <p className="text-xl text-gray-300 font-semibold mb-6">
            które <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 font-black">przyciąga klientów</span> na autopilota
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          
          {/* SEO Start */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-5">
              <h3 className="text-xl font-bold text-white mb-3">SEO Start</h3>
              <div className="text-4xl font-black text-white mb-2">999 zł</div>
              <p className="text-sm text-gray-500">miesięcznie</p>
            </div>
            <ul className="space-y-3">
              {[
                'Audyt SEO',
                'Analiza słów kluczowych',
                'Optymalizacja on-page',
                'Link building',
                'Raportowanie',
                'Google Analytics',
                'Do 10 fraz',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Business - FEATURED */}
          <div className="relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10">
              <div className="flex items-center gap-1 text-[10px] font-bold text-white">
                <FontAwesomeIcon icon={faCrown} className="w-2.5 h-2.5" />
                <span>WYBÓR</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl p-6 shadow-2xl shadow-purple-500/20">
              <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-white mb-3">SEO Business</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-white/60 line-through">2499</span>
                  <span className="text-4xl font-black text-white">1999 zł</span>
                </div>
                <p className="text-sm text-blue-100 font-semibold">miesięcznie</p>
              </div>
              <ul className="space-y-3">
                {[
                  'Pełny audyt SEO',
                  'Zaawansowana analiza',
                  'Optymalizacja techniczna',
                  'Zaawansowany linking',
                  'Content marketing',
                  'Local SEO',
                  'Do 30 fraz',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-white text-sm">
                    <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marketing 360° */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:shadow-xl">
            <div className="text-center mb-5">
              <h3 className="text-xl font-bold text-white mb-3">Marketing 360°</h3>
              <div className="text-4xl font-black text-white mb-2">3999 zł</div>
              <p className="text-sm text-gray-500">miesięcznie</p>
            </div>
            <ul className="space-y-3">
              {[
                'Premium SEO',
                'Google Ads',
                'Social Media',
                'Email Marketing',
                'Content Marketing',
                'Automation',
                'Dedykowany manager',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { icon: faChartLine, value: '+250%', label: 'Ruch', color: 'text-green-400', bg: 'from-green-500/10 to-green-500/5', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop' },
            { icon: faRocket, value: 'TOP 3', label: 'Google', color: 'text-blue-400', bg: 'from-blue-500/10 to-blue-500/5', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300&h=200&fit=crop' },
            { icon: faBullseye, value: '+180%', label: 'Konwersja', color: 'text-purple-400', bg: 'from-purple-500/10 to-purple-500/5', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop' },
            { icon: faShieldHalved, value: 'ROI 12x', label: 'Zwrot', color: 'text-yellow-400', bg: 'from-yellow-500/10 to-yellow-500/5', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=300&h=200&fit=crop' },
          ].map((stat, i) => (
            <div key={i} className={`relative bg-gradient-to-br ${stat.bg} border border-gray-800 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 overflow-hidden`}>
              <div className="absolute inset-0 opacity-20">
                <img src={stat.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color} mb-2 drop-shadow-lg`} />
                <div className="text-xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof & Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-yellow-500/20 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop" 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            </div>
            <div className="relative z-10 flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 text-yellow-400 drop-shadow-lg" />
              ))}
              <span className="text-white font-bold text-base ml-1">5.0</span>
            </div>
            <p className="text-gray-300 text-sm italic leading-relaxed mb-3">
              "+250% ruchu organicznego w 6 miesięcy. Strona zwróciła się 10x!"
            </p>
            <p className="text-gray-500 text-xs font-semibold">— DAKRO Group</p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900/20 border border-gray-800 rounded-xl p-6 flex items-center justify-center hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-25">
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=300&fit=crop" 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
            </div>
            <div className="text-center relative z-10">
              <div className="text-3xl font-black text-white mb-2">EFEKTY W 90 DNI</div>
              <p className="text-gray-400 text-sm mb-3">gwarantowane wyniki</p>
              <div className="flex items-center justify-center gap-2 text-green-400 text-xs">
                <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4" />
                <span>Gwarancja zadowolenia</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/kontakt?reklama=5"
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-black text-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500"
          >
            BEZPŁATNA KONSULTACJA →
          </Link>
        </div>

      </div>
    </div>
  );
}
