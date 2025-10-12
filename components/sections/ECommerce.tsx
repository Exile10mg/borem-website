'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faCreditCard,
  faChartLine,
  faMobileAlt,
  faShieldAlt,
  faTruck,
  faBox,
  faPercent,
  faBell,
  faUsers,
  faArrowRight,
  faCheckCircle,
  faGlobe,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const features = [
  {
    icon: faShoppingCart,
    title: 'Zaawansowany koszyk',
    description: 'Intuicyjny proces zakupowy z opcją zakupu gościnnego, zapisywaniem koszyka i rekomendacjami produktów.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: faCreditCard,
    title: 'Płatności online',
    description: 'Integracja z popularnymi bramkami: PayU, Przelewy24, PayPal, BLIK. Bezpieczne transakcje i automatyczne powiadomienia.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: faChartLine,
    title: 'Analityka sprzedaży',
    description: 'Zaawansowane raporty i statystyki sprzedaży. Śledź trendy, bestsellery i zachowania klientów w czasie rzeczywistym.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    icon: faMobileAlt,
    title: 'Mobile-first design',
    description: 'Responsywny design zoptymalizowany pod kątem urządzeń mobilnych. Ponad 70% klientów robi zakupy przez telefon.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    icon: faShieldAlt,
    title: 'Bezpieczeństwo',
    description: 'Certyfikat SSL, szyfrowanie danych, zgodność z RODO i PSD2. Twoi klienci mogą czuć się bezpiecznie.',
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10'
  },
  {
    icon: faTruck,
    title: 'Zarządzanie dostawą',
    description: 'Integracja z InPost, DPD, DHL, Pocztą Polską. Automatyczne etykiety i śledzenie przesyłek.',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10'
  }
];

const additionalFeatures = [
  {
    icon: faBox,
    title: 'Zarządzanie magazynem',
    description: 'Automatyczna kontrola stanów magazynowych, powiadomienia o niskim stanie, historia operacji.'
  },
  {
    icon: faPercent,
    title: 'Kody rabatowe i promocje',
    description: 'Twórz nieograniczone kampanie promocyjne, kody rabatowe, program lojalnościowy.'
  },
  {
    icon: faBell,
    title: 'Automatyczne powiadomienia',
    description: 'E-mail marketing, SMS, powiadomienia push o statusie zamówienia i promocjach.'
  },
  {
    icon: faUsers,
    title: 'Panel klienta',
    description: 'Konta użytkowników, historia zamówień, lista życzeń, ulubione produkty.'
  },
  {
    icon: faGlobe,
    title: 'Wiele języków i walut',
    description: 'Sprzedawaj międzynarodowo z automatyczną konwersją walut i tłumaczeniami.'
  },
  {
    icon: faHeadset,
    title: 'Live chat i wsparcie',
    description: 'Zintegrowany chat na żywo, chatbot AI, centrum pomocy i FAQ.'
  }
];

const stats = [
  { number: '3-5x', label: 'Wzrost konwersji', description: 'vs. tradycyjne sklepy' },
  { number: '2-3s', label: 'Czas ładowania', description: 'Błyskawiczna wydajność' },
  { number: '99.9%', label: 'Dostępność', description: 'Niezawodne działanie 24/7' },
  { number: '50+', label: 'Integracji', description: 'Płatności, kurierzy, ERP' }
];

const platforms = [
  {
    name: 'WooCommerce',
    description: 'Najpopularniejsza platforma e-commerce na świecie. Elastyczna, skalowalna i z tysiącami rozszerzeń.',
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
    features: ['WordPress integration', 'Tysiące wtyczek', 'SEO-friendly', 'Otwarty kod']
  },
  {
    name: 'Shopify',
    description: 'Profesjonalna platforma SaaS dla rosnących biznesów. Kompleksowe rozwiązanie all-in-one.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    features: ['Hosting w cenie', 'Łatwa obsługa', 'Wsparcie 24/7', 'Dropshipping']
  },
  {
    name: 'Custom Solution',
    description: 'Dedykowane rozwiązanie stworzone od podstaw. Pełna kontrola i nieograniczone możliwości.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    features: ['100% personalizacja', 'Unikalne funkcje', 'Najwyższa wydajność', 'Własność kodu']
  }
];

export default function ECommerce() {
  return (
    <section id="ecommerce" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-10" />
      </div>

      {/* Static grid */}
      <div className="absolute inset-0 opacity-[0.15] z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_2px,transparent_2px),linear-gradient(to_bottom,#1e3a8a15_2px,transparent_2px)] bg-[size:80px_80px]" />
      </div>

      {/* Static gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] z-0"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full opacity-20 blur-[100px] z-0"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-block mb-6">
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-blue-500/10">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" fixedWidth />
              E-Commerce
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Sklepy internetowe</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              które naprawdę sprzedają
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Tworzymy sklepy online zoptymalizowane pod{' '}
            <span className="font-semibold text-white">konwersję i sprzedaż</span>.
            <br className="hidden sm:block" />
            Pełna integracja z płatnościami, kurierami i systemami{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              magazynowymi
            </span>.
          </p>
        </div>

        {/* Hero Image Section with Stats */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-32">
          {/* Left - Image with Stats */}
          <div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="Nowoczesny sklep internetowy"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50 z-10" />

              {/* Stats overlay */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6 sm:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-black/70 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-1">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white mb-0.5 leading-tight">
                        {stat.label}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-400 leading-tight">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Sales Growth Chart */}
          <div>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Wzrost sprzedaży
                </h3>
                <p className="text-sm text-gray-400">
                  Średni wzrost po wdrożeniu naszego sklepu
                </p>
              </div>

              {/* Static Chart */}
              <div className="flex-1 flex items-end justify-between gap-2 sm:gap-3 lg:gap-4 mb-6 min-h-[180px] sm:min-h-[200px]">
                {[
                  { month: 'M1', height: 30, mobileHeight: 40, label: '30k' },
                  { month: 'M2', height: 45, mobileHeight: 55, label: '45k' },
                  { month: 'M3', height: 65, mobileHeight: 75, label: '65k' },
                  { month: 'M4', height: 85, mobileHeight: 95, label: '85k' },
                  { month: 'M5', height: 110, mobileHeight: 120, label: '110k' },
                  { month: 'M6', height: 150, mobileHeight: 150, label: '150k' }
                ].map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-1 sm:gap-2">
                    <div
                      className="relative w-full bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-t-lg shadow-lg min-w-[30px] transition-all duration-300 hover:brightness-110"
                      style={{
                        height: `${bar.height}px`
                      }}
                    >
                      <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs lg:text-sm font-bold text-white whitespace-nowrap">
                        {bar.label}
                      </div>
                    </div>
                    <span className="text-[9px] sm:text-[10px] lg:text-xs text-gray-400 font-semibold">
                      {bar.month}
                    </span>
                  </div>
                ))}
              </div>

              {/* Growth Indicator */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                    +400%
                  </span>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-xs sm:text-sm font-bold text-white">Wzrost w 6 miesięcy</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">Rzeczywiste dane klientów</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="mb-20 lg:mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Kompleksowe rozwiązanie
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Wszystko czego potrzebujesz do prowadzenia{' '}
              <span className="text-white font-semibold">skutecznego sklepu online</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-full">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />

                  <div className={`relative h-full bg-gradient-to-br ${feature.bgGradient} backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-white/20`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <FontAwesomeIcon
                          icon={feature.icon}
                          className="w-7 h-7 text-white"
                          fixedWidth
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {feature.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features List */}
        <div className="mb-20 lg:mb-32">
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-8 text-center">
                I wiele więcej funkcji...
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {additionalFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="w-5 h-5 text-white"
                        fixedWidth
                      />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-sm text-gray-400 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Wybierz swoją platformę
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dopasujemy technologię do Twoich potrzeb i budżetu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group relative cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-white/20">
                  <div className="aspect-video w-full relative overflow-hidden">
                    <Image
                      src={platform.image}
                      alt={platform.name}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
                  </div>

                  <div className="p-6">
                    <h4 className="text-2xl font-black text-white mb-3">
                      {platform.name}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {platform.description}
                    </p>

                    <div className="space-y-2">
                      {platform.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="w-4 h-4 text-green-400 flex-shrink-0"
                            fixedWidth
                          />
                          <span className="text-sm text-gray-400">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Gotowy, żeby <span className="font-bold text-white">zwiększyć sprzedaż online</span>?
            <br className="hidden sm:block" />
            Stwórzmy razem sklep, który konwertuje!
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 hover:-translate-y-1 transition-all relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              Wycena sklepu online
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fixedWidth
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
