'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faRocket,
  faChartLine,
  faLock,
  faGaugeHigh,
  faMobile,
  faServer,
  faDatabase,
  faCloud,
  faCogs,
  faCheckCircle,
  faArrowRight,
  faLayerGroup,
  faPlugCircleCheck,
  faBolt,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

const features = [
  {
    icon: faGaugeHigh,
    title: 'Wysoka wydajność',
    description: 'Aplikacje zoptymalizowane pod kątem szybkości i wydajności. Czas ładowania < 1s.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: faLock,
    title: 'Bezpieczeństwo',
    description: 'Najwyższe standardy zabezpieczeń, szyfrowanie, autoryzacja i ochrona przed atakami.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: faMobile,
    title: 'Responsywność',
    description: 'Progressive Web Apps (PWA) działające jak natywne aplikacje na wszystkich urządzeniach.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    icon: faLayerGroup,
    title: 'Skalowalna architektura',
    description: 'Mikroserwisy i cloud-native architecture gotowe na wzrost liczby użytkowników.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    icon: faDatabase,
    title: 'Zarządzanie danymi',
    description: 'Zaawansowane bazy danych, cache, real-time sync i backup automatyczny.',
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10'
  },
  {
    icon: faPlugCircleCheck,
    title: 'Integracje API',
    description: 'Łączymy Twoją aplikację z systemami ERP, CRM, płatnościami i dowolnymi usługami.',
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10'
  }
];

const technologies = [
  { name: 'React', color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', color: '#FFFFFF', category: 'Framework' },
  { name: 'TypeScript', color: '#3178C6', category: 'Language' },
  { name: 'Node.js', color: '#339933', category: 'Backend' },
  { name: 'PostgreSQL', color: '#4169E1', category: 'Database' },
  { name: 'MongoDB', color: '#47A248', category: 'Database' },
  { name: 'Redis', color: '#DC382D', category: 'Cache' },
  { name: 'Docker', color: '#2496ED', category: 'DevOps' },
  { name: 'AWS', color: '#FF9900', category: 'Cloud' },
  { name: 'GraphQL', color: '#E10098', category: 'API' }
];

const useCases = [
  {
    title: 'SaaS Platforms',
    description: 'Platformy abonamentowe dla firm B2B i B2C',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    examples: ['CRM', 'Project Management', 'Analytics Dashboard']
  },
  {
    title: 'Portale firmowe',
    description: 'Intranety, portale pracownicze, systemy zarządzania',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    examples: ['Intranet', 'HR Portal', 'Document Management']
  },
  {
    title: 'Aplikacje mobilne',
    description: 'Progressive Web Apps działające offline',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    examples: ['PWA', 'Mobile-first', 'Offline-ready']
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'Analiza wymagań, user stories, architektura systemu',
    icon: faChartLine
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'UX/UI design, prototypy interaktywne, user testing',
    icon: faCode
  },
  {
    number: '03',
    title: 'Development',
    description: 'Agile development, CI/CD, code review, testing',
    icon: faCogs
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Deployment, monitoring, maintenance, updates',
    icon: faRocket
  }
];

export default function AplikacjeWebowe() {
  const prefersReducedMotion = useReducedMotion();
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <section id="aplikacje" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Tło z gradientem */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />

      {/* Dekoracyjne elementy */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-0" />

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
              <FontAwesomeIcon icon={faCode} className="mr-2 animate-pulse" fixedWidth />
              Aplikacje Webowe
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Dedykowane rozwiązania</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              dla Twojego biznesu
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Tworzymy zaawansowane aplikacje webowe{' '}
            <span className="font-semibold text-white">dopasowane do Twoich potrzeb</span>.
            <br className="hidden sm:block" />
            Od CRM po platformy SaaS -{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              zrealizujemy każdy projekt
            </span>.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-32">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={!prefersReducedMotion ? { y: -8 } : undefined}
              onHoverStart={() => setActiveUseCase(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <div className="aspect-[3/2] relative">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-black text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example) => (
                      <span
                        key={example}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          className="mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Dlaczego nasze aplikacje?
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Stawiamy na <span className="text-white font-semibold">jakość, wydajność i bezpieczeństwo</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
              >
                <div className={`relative h-full bg-gradient-to-br ${feature.bgGradient} backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-white/20`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="w-6 h-6 text-white"
                        fixedWidth
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Nowoczesny stack technologiczny
            </h3>
            <p className="text-lg text-gray-400">
              Używamy sprawdzonych i wydajnych technologii
            </p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-8 sm:p-12 border border-gray-700 shadow-2xl overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={!prefersReducedMotion ? { scale: 1.05, y: -4 } : undefined}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:border-white/20">
                    <div
                      className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center font-bold text-xl"
                      style={{ backgroundColor: tech.color + '20', color: tech.color }}
                    >
                      {tech.name.charAt(0)}
                    </div>
                    <div className="text-sm font-bold text-white mb-1">
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {tech.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Proces tworzenia aplikacji
            </h3>
            <p className="text-lg text-gray-400">
              Agile methodology i przejrzysta komunikacja na każdym etapie
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon
                        icon={step.icon}
                        className="w-6 h-6 text-white"
                        fixedWidth
                      />
                    </div>
                    <span className="text-4xl font-black bg-gradient-to-br from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
            Masz pomysł na aplikację?{' '}
            <span className="font-bold text-white">Porozmawiajmy o możliwościach</span>!
          </p>
          <motion.a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
            whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : undefined}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
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
