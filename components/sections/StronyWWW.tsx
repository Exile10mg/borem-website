'use client';

import { motion, useReducedMotion } from 'framer-motion';
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
    title: 'Strony firmowe',
    description: 'Profesjonalna wizytówka Twojej firmy w internecie',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    price: 'od 2500 zł',
    features: [
      'Responsywny design',
      'Panel administracyjny',
      'Formularz kontaktowy',
      'Google Maps',
      'Optymalizacja SEO',
    ],
  },
  {
    title: 'Landing pages',
    description: 'Strony sprzedażowe z wysoką konwersją',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    price: 'od 1800 zł',
    features: [
      'Skupienie na konwersji',
      'A/B testing ready',
      'Integracja z CRM',
      'Analytics i tracking',
      'Fast loading',
    ],
    highlight: true,
  },
  {
    title: 'Portfólia & CV',
    description: 'Wyróżnij się na rynku pracy lub pokaż swoje projekty',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    price: 'od 1200 zł',
    features: [
      'Minimalistyczny design',
      'Galeria projektów',
      'Blog (opcjonalnie)',
      'Formularze kontaktowe',
      'Social media',
    ],
  },
];

export default function StronyWWW() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="strony-www" className="relative py-20 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* Animated background grid */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px]" />
        </motion.div>
      )}

      {/* Gradient blobs */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)',
              filter: 'blur(80px)',
            }}
            animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0) 70%)',
              filter: 'blur(80px)',
            }}
            animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] rounded-full opacity-25"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)',
              filter: 'blur(90px)',
            }}
            animate={{ x: [0, -60, 0], y: [0, 80, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold backdrop-blur-sm">
              Strony WWW
            </span>
          </motion.div>

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
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={!prefersReducedMotion ? { y: -5, scale: 1.02 } : undefined}
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
            </motion.div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {websiteTypes.map((type, index) => (
            <motion.div
              key={type.title}
              className={`relative rounded-2xl overflow-hidden ${
                type.highlight
                  ? 'lg:scale-105 lg:-mt-4 lg:mb-4'
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={!prefersReducedMotion ? { y: -8 } : undefined}
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
                  <div className="p-6 lg:p-8">
                    <h3 className="text-2xl font-bold mb-2 text-white">{type.title}</h3>
                    <p className="text-sm mb-4 text-gray-400">
                      {type.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                        {type.price}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
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

                    <motion.a
                      href="#kontakt"
                      className={`block w-full text-center px-6 py-3 rounded-xl font-bold transition-all ${
                        type.highlight
                          ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-purple-500/50'
                          : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                      whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
                      whileTap={{ scale: 0.95 }}
                    >
                      Wybierz pakiet
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 mb-6 text-lg">
            Nie znalazłeś odpowiedniego pakietu? Skontaktuj się z nami – przygotujemy ofertę dopasowaną do Twoich potrzeb!
          </p>
          <motion.a
            href="/kontakt?konsultacja=true"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
            whileTap={{ scale: 0.95 }}
          >
            Bezpłatna konsultacja
            <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
