'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRobot,
  faBrain,
  faWandMagicSparkles,
  faChartLine,
  faClock,
  faCoins,
  faLightbulb,
  faGears,
  faBolt,
  faComments,
  faFileAlt,
  faImage,
  faLanguage,
  faArrowRight,
  faCheckCircle,
  faIndustry,
  faShoppingCart,
  faUserTie,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';

const aiSolutions = [
  {
    icon: faComments,
    title: 'Chatboty AI',
    description: 'Inteligentne asystenty dostępne 24/7, obsługujące klientów w naturalnym języku.',
    features: ['GPT-4 integration', 'Multi-language', 'Context awareness'],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: faFileAlt,
    title: 'Automatyzacja dokumentów',
    description: 'Przetwarzanie, analiza i generowanie dokumentów z wykorzystaniem AI.',
    features: ['OCR', 'Data extraction', 'Auto-generation'],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    icon: faChartLine,
    title: 'Analityka predykcyjna',
    description: 'Prognozowanie trendów, zachowań klientów i wyników biznesowych.',
    features: ['Machine Learning', 'Forecasting', 'Pattern recognition'],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    icon: faImage,
    title: 'Computer Vision',
    description: 'Rozpoznawanie obrazów, wykrywanie obiektów i analiza wizualna.',
    features: ['Image recognition', 'Object detection', 'Quality control'],
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    icon: faLanguage,
    title: 'NLP & Tłumaczenia',
    description: 'Przetwarzanie języka naturalnego, sentiment analysis, tłumaczenia.',
    features: ['Text analysis', 'Translation', 'Sentiment detection'],
    gradient: 'from-indigo-500 to-blue-500',
    bgGradient: 'from-indigo-500/10 to-blue-500/10'
  },
  {
    icon: faGears,
    title: 'Process Automation',
    description: 'RPA i inteligentna automatyzacja powtarzalnych procesów biznesowych.',
    features: ['RPA', 'Workflow automation', 'Integration'],
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-500/10 to-rose-500/10'
  }
];

const benefits = [
  {
    icon: faClock,
    value: '70%',
    label: 'Oszczędność czasu',
    description: 'Automatyzacja zadań'
  },
  {
    icon: faCoins,
    value: '50%',
    label: 'Redukcja kosztów',
    description: 'Mniej błędów ręcznych'
  },
  {
    icon: faBolt,
    value: '3x',
    label: 'Szybsze procesy',
    description: 'Instant processing'
  },
  {
    icon: faChartLine,
    value: '95%',
    label: 'Dokładność',
    description: 'AI-powered precision'
  }
];

const useCases = [
  {
    title: 'E-commerce',
    icon: faShoppingCart,
    description: 'Personalizacja rekomendacji, chatboty, analiza zachowań',
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop',
    examples: ['Product recommendations', 'Customer support bot', 'Inventory prediction']
  },
  {
    title: 'Produkcja',
    icon: faIndustry,
    description: 'Kontrola jakości, predictive maintenance, optymalizacja',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    examples: ['Quality inspection', 'Defect detection', 'Production optimization']
  },
  {
    title: 'Biuro',
    icon: faUserTie,
    description: 'Automatyzacja dokumentów, asystent AI, zarządzanie',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    examples: ['Document processing', 'Meeting assistant', 'Email automation']
  }
];

const aiModels = [
  { name: 'GPT-4', provider: 'OpenAI', useCase: 'Text generation' },
  { name: 'Claude', provider: 'Anthropic', useCase: 'Analysis' },
  { name: 'Gemini', provider: 'Google', useCase: 'Multimodal' },
  { name: 'LLaMA', provider: 'Meta', useCase: 'Custom models' },
  { name: 'Stable Diffusion', provider: 'Stability AI', useCase: 'Images' },
  { name: 'Whisper', provider: 'OpenAI', useCase: 'Speech-to-text' }
];

export default function AIAutomatyzacja() {
  const prefersReducedMotion = useReducedMotion();
  const [activeUseCase, setActiveUseCase] = useState(0);

  return (
    <section id="ai" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Tło animowane */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-10" />
      </div>

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
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf615_2px,transparent_2px),linear-gradient(to_bottom,#8b5cf615_2px,transparent_2px)] bg-[size:80px_80px]" />
        </motion.div>
      )}

      {/* Orby świetlne */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] z-0"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)'
            }}
            animate={{ scale: [1, 1.3, 1], x: [0, -80, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] rounded-full opacity-20 blur-[100px] z-0"
            style={{
              background: 'radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)'
            }}
            animate={{ scale: [1, 1.4, 1], x: [0, 70, 0], y: [0, -40, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        {/* Nagłówek */}
        <motion.div
          className="text-center mb-20 lg:mb-28"
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
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 border border-purple-500/30 text-purple-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-purple-500/10">
              <FontAwesomeIcon icon={faRobot} className="mr-2 animate-pulse" fixedWidth />
              AI & Automatyzacja
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Inteligentna automatyzacja</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              dla nowoczesnego biznesu
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Wykorzystaj moc <span className="font-semibold text-white">sztucznej inteligencji</span>{' '}
            do automatyzacji procesów.
            <br className="hidden sm:block" />
            Oszczędzaj czas, redukuj koszty i{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              zwiększ efektywność
            </span>.
          </p>
        </motion.div>

        {/* Benefits - Hero Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={benefit.icon} className="w-6 h-6 text-white" fixedWidth />
                </div>
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                  {benefit.value}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {benefit.label}
                </div>
                <div className="text-xs text-gray-400">
                  {benefit.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Use Cases */}
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
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg mb-4">
                      <FontAwesomeIcon icon={useCase.icon} className="w-7 h-7 text-white" fixedWidth />
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example) => (
                      <span
                        key={example}
                        className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-[10px] font-semibold text-white border border-white/20"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Solutions Grid */}
        <motion.div
          className="mb-20 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Rozwiązania AI
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Kompleksowe usługi <span className="text-white font-semibold">sztucznej inteligencji</span> dla Twojej firmy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
              >
                <div className={`relative h-full bg-gradient-to-br ${solution.bgGradient} backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-white/20`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg`}>
                      <FontAwesomeIcon
                        icon={solution.icon}
                        className="w-7 h-7 text-white"
                        fixedWidth
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {solution.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Models */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Współpracujemy z najlepszymi
            </h3>
            <p className="text-lg text-gray-400">
              Wykorzystujemy najnowsze modele AI od wiodących dostawców
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiModels.map((model, index) => (
              <motion.div
                key={model.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={!prefersReducedMotion ? { scale: 1.05, y: -4 } : undefined}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 hover:border-purple-500/30">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-xl text-white">
                    {model.name.charAt(0)}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {model.name}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    {model.provider}
                  </div>
                  <div className="text-[10px] text-purple-400">
                    {model.useCase}
                  </div>
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
            Gotowy na <span className="font-bold text-white">rewolucję AI</span> w Twoim biznesie?
            <br className="hidden sm:block" />
            Umów się na konsultację i odkryj możliwości!
          </p>
          <motion.a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
            whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : undefined}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              Rozpocznij z AI
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
