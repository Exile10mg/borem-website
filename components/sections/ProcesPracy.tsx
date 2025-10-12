'use client';

import { motion, useReducedMotion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faPenRuler,
  faCode,
  faVial,
  faFlaskVial,
  faRocket,
  faHeadset,
  faCheckCircle,
  faArrowRight,
  faClock,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

const vialIcon = faVial || faFlaskVial;

const steps = [
  {
    number: '01',
    title: 'Konsultacja',
    subtitle: 'Poznajemy Twoje potrzeby',
    description:
      'Bezpłatna rozmowa, podczas której dokładnie poznajemy Twój biznes, cele i oczekiwania. Analizujemy konkurencję i rynek, aby stworzyć strategię dopasowaną do Twoich potrzeb.',
    icon: faComments,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    duration: '1-2 dni',
    deliverables: [
      'Brief projektu i analiza wymagań',
      'Badanie konkurencji i rynku',
      'Szczegółowa wycena i timeline',
      'Rekomendacje technologiczne'
    ]
  },
  {
    number: '02',
    title: 'Projektowanie',
    subtitle: 'Tworzymy unikalny design',
    description:
      "Projektujemy wireframe'y i szczegółowe makiety w Figma. Otrzymujesz interaktywny prototyp do sprawdzenia przed rozpoczęciem kodowania - wszystko zgodnie z najnowszymi trendami UX/UI.",
    icon: faPenRuler, // <- poprawione
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    duration: '5-7 dni',
    deliverables: [
      "Wireframe'y i user flow",
      'Mockupy high-fidelity w Figma',
      'Interaktywny prototyp do testów',
      'Style guide i design system'
    ]
  },
  {
    number: '03',
    title: 'Rozwój',
    subtitle: 'Kodujemy Twój projekt',
    description:
      'Zamieniamy design w działającą stronę używając najnowszych technologii - React, Next.js, TypeScript. Regularnie pokazujemy postępy i zbieramy feedback.',
    icon: faCode,
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10',
    duration: '10-14 dni',
    deliverables: [
      'Frontend (React/Next.js/TypeScript)',
      'Backend i API integrations',
      'CMS / Panel administracyjny',
      'Baza danych i hosting setup'
    ]
  },
  {
    number: '04',
    title: 'Testowanie',
    subtitle: 'Wszystko musi działać perfekcyjnie',
    description:
      'Sprawdzamy każdy pixel i funkcjonalność. Kompleksowe testy na różnych urządzeniach, przeglądarkach i rozdzielczościach. Testy wydajności i accessibility.',
    icon: vialIcon, // <- pewny import (vial lub flask-vial)
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10',
    duration: '2-3 dni',
    deliverables: [
      'Testy cross-browser i responsywności',
      'Audyt wydajności (Core Web Vitals)',
      'Testy accessibility (WCAG)',
      'QA checklist i bug fixing'
    ]
  },
  {
    number: '05',
    title: 'Wdrożenie',
    subtitle: 'Publikujemy Twoją stronę',
    description:
      'Umieszczamy stronę na serwerze produkcyjnym, konfigurujemy domenę, SSL, CDN i wszystkie niezbędne narzędzia marketingowe i analityczne.',
    icon: faRocket,
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10',
    duration: '1-2 dni',
    deliverables: [
      'Hosting i konfiguracja serwera',
      'Domena, SSL i CDN',
      'Google Analytics & Search Console',
      'Backup i monitoring'
    ]
  },
  {
    number: '06',
    title: 'Wsparcie',
    subtitle: 'Jesteśmy dla Ciebie 24/7',
    description:
      'Nie zostawiamy Cię samemu! Oferujemy kompleksowe wsparcie techniczne, regularne aktualizacje, szkolenia i pomoc w rozwoju projektu.',
    icon: faHeadset,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10',
    duration: 'Ciągłe',
    deliverables: [
      'Szkolenia z obsługi CMS',
      'Pełna dokumentacja techniczna',
      'Wsparcie techniczne 24/7',
      'Regularne aktualizacje i backup'
    ]
  }
];

export default function ProcesPracy() {
  const prefersReducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* Tło z gradientem */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />

      {/* Siatka animowana */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 opacity-[0.15] z-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            backgroundPosition: {
              duration: 30,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            },
            opacity: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_2px,transparent_2px),linear-gradient(to_bottom,#1e3a8a15_2px,transparent_2px)] bg-[size:80px_80px]" />
        </motion.div>
      )}

      {/* Orby */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] z-0"
            style={{
              background:
                'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)'
            }}
            animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-2/3 right-1/4 w-[450px] h-[450px] rounded-full opacity-20 blur-[100px] z-0"
            style={{
              background:
                'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)'
            }}
            animate={{ scale: [1, 1.4, 1], x: [0, -70, 0], y: [0, -40, 0] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 3
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-[100px] z-0"
            style={{
              background:
                'radial-gradient(circle, rgba(236,72,153,0.5) 0%, transparent 70%)'
            }}
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, 60, 0] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 5
            }}
          />
        </>
      )}

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20"
        ref={ref}
      >
        {/* Nagłówek */}
        <motion.div
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-blue-500/10">
              <FontAwesomeIcon icon={faLightbulb} className="mr-2 animate-pulse" fixedWidth />
              Jak pracujemy
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Transparentny proces</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              od pomysłu do sukcesu
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">6 kroków</span>, które gwarantują sukces Twojego projektu.
            <br className="hidden sm:block" />
            Żadnych niespodzianek, pełna kontrola i{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              100% transparentności
            </span>.
          </p>
        </motion.div>

        {/* Oś czasu */}
        <div className="relative max-w-6xl mx-auto mb-20 lg:mb-32">
          {/* Kroki */}
          <div className="space-y-16 lg:space-y-32">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isHovered = hoveredStep === index;

              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onViewportEnter={() => setActiveStep(index)}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
                    {/* Ikona */}
                    <div className="flex-shrink-0 flex justify-center lg:justify-start lg:pt-4">
                      <motion.div
                        className="relative z-10"
                        whileHover={
                          !prefersReducedMotion
                            ? { scale: 1.1, transition: { duration: 0.3 } }
                            : undefined
                        }
                      >
                        <div
                          className={`absolute -inset-3 bg-gradient-to-r ${step.gradient} opacity-30 blur-xl rounded-full`}
                        />

                        <motion.div
                          className={`relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl border-4 border-black/50`}
                          animate={
                            isActive && !prefersReducedMotion
                              ? {
                                  boxShadow: [
                                    '0 0 30px rgba(59,130,246,0.4)',
                                    '0 0 50px rgba(139,92,246,0.5)',
                                    '0 0 30px rgba(236,72,153,0.4)'
                                  ]
                                }
                              : {}
                          }
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div className="absolute inset-2 rounded-full bg-black/30 backdrop-blur-sm" />
                          <FontAwesomeIcon
                            icon={step.icon}
                            className="relative w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-white drop-shadow-2xl z-10"
                            fixedWidth
                          />
                        </motion.div>

                        {(isActive || isHovered) && !prefersReducedMotion && (
                          <motion.div
                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.gradient} opacity-40`}
                            initial={{ scale: 1, opacity: 0.4 }}
                            animate={{ scale: 2.2, opacity: 0 }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                            aria-hidden="true"
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Treść */}
                    <motion.div
                      className="flex-1"
                      whileHover={
                        !prefersReducedMotion
                          ? { y: -4, transition: { duration: 0.3 } }
                          : undefined
                      }
                    >
                      <div className="relative group">
                        <div
                          className={`absolute -inset-3 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 rounded-2xl`}
                          aria-hidden="true"
                        />

                        <div
                          className={`relative bg-gradient-to-br ${step.bgGradient} backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:border-white/20`}
                        >
                          <div className="flex items-start gap-4 sm:gap-6 mb-5">
                            <span
                              className={`text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r ${step.gradient} text-transparent bg-clip-text leading-none flex-shrink-0`}
                            >
                              {step.number}
                            </span>

                            <div className="flex-1 pt-1">
                              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1.5 leading-tight">
                                {step.title}
                              </h3>
                              <p className="text-sm sm:text-base text-gray-400 font-medium mb-4">
                                {step.subtitle}
                              </p>

                              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  className="w-3.5 h-3.5 text-blue-400"
                                  fixedWidth
                                />
                                <span className="text-xs font-bold text-white">
                                  {step.duration}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed pl-0 sm:pl-2">
                            {step.description}
                          </p>

                          <div className="space-y-2.5 pl-0 sm:pl-2">
                            <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-3">
                              Otrzymujesz:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {step.deliverables.map((item, idx) => (
                                <motion.div
                                  key={item}
                                  className="flex items-start gap-2.5"
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.08 }}
                                >
                                  <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-400"
                                    fixedWidth
                                  />
                                  <span className="text-sm text-gray-300 font-medium leading-snug">
                                    {item}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Statystyki */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { number: '21-30', label: 'Średni czas realizacji', unit: 'dni' },
            { number: '98%', label: 'Zadowolonych klientów', unit: '' },
            { number: '150+', label: 'Ukończonych projektów', unit: '' },
            { number: '24/7', label: 'Wsparcie techniczne', unit: '' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={!prefersReducedMotion ? { scale: 1.05, y: -5 } : undefined}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all backdrop-blur-sm">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-3">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 font-semibold leading-tight">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
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
            Gotowy, żeby <span className="font-bold text-white">rozpocząć współpracę</span>?
            <br className="hidden sm:block" />
            Porozmawiajmy o Twoim projekcie!
          </p>
          <motion.a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
            whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : undefined}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              Rozpocznij projekt
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
