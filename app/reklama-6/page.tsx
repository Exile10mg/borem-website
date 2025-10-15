import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landing Page 6',
  description: 'Strona reklamowa Borem.pl - Landing Page 6',
  robots: {"index":false,"follow":false},
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGlobe, faShoppingCart, faMobileScreenButton, faRobot, faChartLine, faPalette } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Reklama6Page() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Main content - 1024x1024 optimized */}
      <div className="max-w-2xl w-full relative z-10">
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left side - Hero content */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 blur-sm"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl"></div>
                  <span className="text-white font-black text-3xl relative z-10 drop-shadow-lg">B</span>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl font-black text-white tracking-tight">Borem</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">.pl</span>
                </div>
                <div className="flex items-center gap-1.5 -mt-0.5">
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <p className="text-[10px] text-gray-400 font-semibold tracking-[0.15em] uppercase">
                    Agencja Marketingowa
                  </p>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
              Kompleksowe
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Usługi IT
              </span>
            </h1>

            <p className="text-base text-gray-300 mb-6 leading-relaxed">
              Od strony WWW po zaawansowane rozwiązania AI
            </p>

            <Link
              href="/kontakt?reklama=6"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-black text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              <span>BEZPŁATNA KONSULTACJA</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
            </Link>
          </div>

          {/* Right side - Services */}
          <div className="space-y-3">
            {[
              { icon: faGlobe, name: 'Strony WWW', desc: 'od 2999 zł', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop' },
              { icon: faShoppingCart, name: 'Sklepy Online', desc: 'od 4999 zł', image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=200&fit=crop' },
              { icon: faMobileScreenButton, name: 'Aplikacje Webowe', desc: 'od 9999 zł', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop' },
              { icon: faRobot, name: 'AI & Automatyzacja', desc: 'od 2999 zł', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop' },
              { icon: faChartLine, name: 'Marketing & SEO', desc: 'od 999 zł/mies', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop' },
              { icon: faPalette, name: 'Design & Branding', desc: 'indywidualnie', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop' },
            ].map((service, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl p-3 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-15">
                  <img src={service.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60"></div>
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FontAwesomeIcon icon={service.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-white">{service.name}</h3>
                    <p className="text-xs text-gray-400">{service.desc}</p>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {[
            { value: '150+', label: 'Projektów', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop' },
            { value: '98%', label: 'Zadowolonych', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=300&h=200&fit=crop' },
            { value: '8+', label: 'Lat', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop' },
            { value: '24/7', label: 'Wsparcie', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=300&h=200&fit=crop' },
          ].map((stat, i) => (
            <div key={i} className="relative text-center rounded-xl overflow-hidden p-4 bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800">
              <div className="absolute inset-0 opacity-15">
                <img src={stat.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}
