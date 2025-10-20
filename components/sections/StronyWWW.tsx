'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faChartLine,
  faMobileAlt,
  faShieldAlt,
  faCode,
  faPalette,
  faCheckCircle,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const features = [
  {
    icon: faRocket,
    title: 'Błyskawiczna wydajność',
    description: 'Optymalizacja pod kątem szybkości ładowania i Core Web Vitals',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: faChartLine,
    title: 'SEO & Marketing',
    description: 'Pozycjonowanie i widoczność w Google od pierwszego dnia',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: faMobileAlt,
    title: 'Responsywność',
    description: 'Perfekcyjny wygląd na każdym urządzeniu - mobile first',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: faShieldAlt,
    title: 'Bezpieczeństwo',
    description: 'SSL, backup, ochrona przed atakami i RODO compliance',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: faCode,
    title: 'Nowoczesny kod',
    description: 'React, Next.js, TypeScript - najlepsze technologie',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: faPalette,
    title: 'Unikalny design',
    description: 'Autorskie projekty dopasowane do Twojej marki',
    gradient: 'from-pink-500 to-rose-500',
  },
];

const websiteTypes = [
  {
    title: 'Landing Page',
    description: 'Szybka strona sprzedażowa',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    price: 'od 1,299 zł',
    timeframe: '5-7 dni',
    features: [
      '1 strona (one-page)',
      'Responsywny design',
      'Formularz kontaktowy',
      'Podstawowe SEO',
      'Hosting i domena (1 rok)',
      'SSL (certyfikat)',
      'Google Analytics',
      'Szybkie ładowanie',
      'Wsparcie 30 dni',
    ],
    highlight: false,
  },
  {
    title: 'Strona Firmowa',
    description: 'Profesjonalna obecność w sieci',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    price: 'od 2,999 zł',
    timeframe: '2-3 tygodnie',
    features: [
      'Do 10 podstron',
      'Responsywny design',
      'Panel CMS (edycja treści)',
      'Formularz kontaktowy',
      'Zaawansowane SEO',
      'Hosting i domena (1 rok)',
      'Google Maps integracja',
      'Wsparcie 60 dni',
      'Blog + Google Analytics',
    ],
    highlight: true,
  },
  {
    title: 'Strona Advanced',
    description: 'Rozbudowana strona biznesowa',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    price: 'od 5,999 zł',
    timeframe: '4-6 tygodni',
    features: [
      'Nielimitowane podstrony',
      'Responsywny design Premium',
      'Zaawansowany panel CMS',
      'Wielojęzyczność',
      'Premium SEO + konsultacje',
      'Hosting i domena (1 rok)',
      'Zaawansowane formularze',
      'Wsparcie 90 dni',
      'Blog + Portfolio + Newsletter + API',
    ],
    highlight: false,
  },
];

export default function StronyWWW() {
  return (
    <section id="strony-www" className="relative py-20 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* Static background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Static gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold backdrop-blur-sm">
              Strony WWW
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Nowoczesne strony internetowe
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              które napędzają biznes
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Projektujemy i budujemy strony WWW, które nie tylko świetnie wyglądają,
            ale przede wszystkim <span className="font-semibold text-white">konwertują odwiedzających w klientów</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />

              <div className="relative">
                <div className="mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 lg:items-center">
          {websiteTypes.map((type) => (
            <div
              key={type.title}
              className={`relative rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 ${
                type.highlight ? 'lg:scale-110' : ''
              }`}
            >
              {/* Highlight ring */}
              {type.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75" />
              )}

              <div className={`relative h-full ${
                type.highlight
                  ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-[2px]'
                  : 'bg-white/5'
              } rounded-2xl`}>
                <div className="relative h-full bg-black rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={type.image}
                      alt={type.title}
                      fill
                      sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 28vw"
                      quality={80}
                      priority={type.highlight}
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                    {type.highlight && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold text-white shadow-lg">
                        POPULARNE
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2 text-white">{type.title}</h3>
                    <p className="text-sm mb-4 text-gray-400">
                      {type.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                        {type.price}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Czas realizacji: {type.timeframe}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-400"
                          />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#kontakt"
                      className={`block w-full text-center px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 mt-auto ${
                        type.highlight
                          ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/50'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      Wybierz pakiet
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-lg">
            Nie znalazłeś odpowiedniego pakietu? Skontaktuj się z nami – przygotujemy ofertę dopasowaną do Twoich potrzeb!
          </p>
          <a
            href="/kontakt?konsultacja=true"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
          >
            Bezpłatna konsultacja
            <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
