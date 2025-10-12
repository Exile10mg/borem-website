'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faChartLine,
  faMagnifyingGlass,
  faBullhorn,
  faEnvelope,
  faHashtag,
  faAd,
  faPenToSquare,
  faUsers,
  faArrowTrendUp,
  faCheckCircle,
  faArrowRight,
  faGlobe,
  faSearch,
  faLink,
  faStar,
  faFileLines,
  faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    icon: faMagnifyingGlass,
    title: 'SEO',
    subtitle: 'Optymalizacja dla wyszukiwarek',
    description: 'Pozycjonowanie w Google, analiza słów kluczowych, link building i audyty SEO.',
    features: ['On-page SEO', 'Technical SEO', 'Link building', 'Local SEO'],
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
  },
  {
    icon: faAd,
    title: 'Google Ads',
    subtitle: 'Reklamy PPC',
    description: 'Kampanie Google Ads, remarketing, optymalizacja konwersji i analiza ROI.',
    features: ['Search Ads', 'Display', 'Shopping', 'YouTube Ads'],
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop'
  },
  {
    icon: faHashtag,
    title: 'Social Media',
    subtitle: 'Marketing w mediach społecznościowych',
    description: 'Strategie social media, content creation, community management i reklamy.',
    features: ['Facebook Ads', 'Instagram', 'LinkedIn', 'TikTok'],
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop'
  },
  {
    icon: faPenToSquare,
    title: 'Content Marketing',
    subtitle: 'Treści które konwertują',
    description: 'Copywriting, blog, content strategy, storytelling i tworzenie wartościowych treści.',
    features: ['Blog posts', 'Copywriting', 'Video content', 'Infographics'],
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=800&h=500&fit=crop'
  },
  {
    icon: faEnvelope,
    title: 'Email Marketing',
    subtitle: 'Automatyzacja i personalizacja',
    description: 'Kampanie email, automation workflows, segmentacja i A/B testing.',
    features: ['Newsletters', 'Automation', 'Segmentation', 'A/B testing'],
    gradient: 'from-indigo-500 to-blue-500',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop'
  },
  {
    icon: faChartLine,
    title: 'Analytics',
    subtitle: 'Analityka i raportowanie',
    description: 'Google Analytics 4, dashboardy, tracking konwersji i optymalizacja.',
    features: ['GA4', 'GTM', 'Data Studio', 'Conversion tracking'],
    gradient: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
  }
];

const seoProcess = [
  {
    step: '01',
    title: 'Audyt SEO',
    description: 'Analiza techniczna, content audit, konkurencja',
    icon: faSearch
  },
  {
    step: '02',
    title: 'Strategia',
    description: 'Słowa kluczowe, content plan, link building',
    icon: faFileLines
  },
  {
    step: '03',
    title: 'Optymalizacja',
    description: 'On-page, technical SEO, mobile optimization',
    icon: faMobileScreenButton
  },
  {
    step: '04',
    title: 'Monitoring',
    description: 'Ranking tracking, analytics, reporting',
    icon: faChartLine
  }
];

const stats = [
  { value: '+250%', label: 'Wzrost ruchu organicznego', description: 'Średnio po 6 miesiącach' },
  { value: 'Top 3', label: 'Pozycje w Google', description: '80% słów kluczowych' },
  { value: '5x', label: 'ROI z kampanii', description: 'Google Ads & Facebook' },
  { value: '95%', label: 'Retention rate', description: 'Zadowoleni klienci' }
];

const benefits = [
  'Zwiększ widoczność w Google',
  'Przyciągnij więcej klientów',
  'Buduj rozpoznawalność marki',
  'Generuj więcej leadów',
  'Popraw konwersję',
  'Obniż koszt pozyskania klienta'
];

export default function MarketingSEO() {
  const prefersReducedMotion = useReducedMotion();
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="marketing" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Tło z gradientem */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

      {/* Dekoracyjne elementy */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full opacity-10 blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, 40, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Nagłówek */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-blue-500/10">
              <FontAwesomeIcon icon={faRocket} className="mr-2 animate-pulse" fixedWidth />
              Marketing & SEO
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Przyciągnij więcej klientów</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              z marketingu online
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Kompleksowe usługi <span className="font-semibold text-white">marketingu internetowego</span>.
            <br className="hidden sm:block" />
            SEO, Google Ads, Social Media -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              skutecznie i mierzalnie
            </span>.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 text-center hover:border-purple-500/30 transition-all duration-300">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-1 leading-tight">
                  {stat.label}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services - Staggered Layout */}
        <motion.div
          className="mb-20 lg:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Nasze usługi marketingowe
            </h3>
            <p className="text-lg text-gray-400">
              360° marketing - od SEO po Social Media
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { scale: 1.02 } : undefined}
                onHoverStart={() => setActiveService(index)}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-white/20 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/9] lg:aspect-[2/1] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                    {/* Icon overlay */}
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl`}>
                        <FontAwesomeIcon icon={service.icon} className="w-6 h-6 sm:w-7 sm:h-7 text-white" fixedWidth />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <h4 className="text-2xl sm:text-3xl font-black text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-blue-400 font-semibold mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-base text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-blue-400 flex-shrink-0" fixedWidth />
                          <span className="text-sm text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO Process */}
        <motion.div
          className="mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl p-8 sm:p-12 border border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Proces pozycjonowania SEO
              </h3>
              <p className="text-lg text-gray-400">
                Sprawdzony proces prowadzący do <span className="text-white font-semibold">TOP 3 w Google</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={process.icon} className="w-6 h-6 text-white" fixedWidth />
                      </div>
                      <span className="text-5xl font-black bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                        {process.step}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {process.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {process.description}
                    </p>
                  </div>

                  {/* Connector line */}
                  {index < seoProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Korzyści dla Twojego biznesu
            </h3>
            <p className="text-lg text-gray-400">
              Mierzalne rezultaty i długoterminowy wzrost
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3 p-4 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl hover:border-purple-500/30 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4 text-white" fixedWidth />
                </div>
                <span className="text-sm font-semibold text-white">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Chcesz <span className="font-bold text-white">zdominować Google</span> w swojej branży?
            <br className="hidden sm:block" />
            Porozmawiajmy o Twojej strategii marketingowej!
          </p>
          <motion.a
            href="/kontakt?konsultacja=true"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
            whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : undefined}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              Bezpłatna konsultacja SEO
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fixedWidth
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
