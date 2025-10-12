'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faQuoteLeft,
  faQuoteRight,
  faUserCircle,
  faBuilding,
  faCheckCircle,
  faAward,
  faHandshake,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Marcin Kowalski',
    position: 'CEO',
    company: 'TechStart Solutions',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Współpraca z Borem.pl to strzał w dziesiątkę! Stworzyli nam sklep internetowy, który przekroczył nasze oczekiwania. Sprzedaż wzrosła o 300% w 6 miesięcy.',
    project: 'Sklep e-commerce',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Anna Nowak',
    position: 'Marketing Manager',
    company: 'GreenLife Sp. z o.o.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Kampania SEO przyniosła niesamowite rezultaty. Jesteśmy w TOP 3 Google na wszystkie kluczowe frazy. Profesjonalizm na najwyższym poziomie!',
    project: 'SEO & Marketing',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    name: 'Piotr Wiśniewski',
    position: 'Founder',
    company: 'InnovateLab',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Dedykowana aplikacja webowa, którą dla nas stworzyli, zautomatyzowała nasze procesy. Oszczędzamy 20 godzin tygodniowo. Rewelacja!',
    project: 'Aplikacja webowa',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    name: 'Katarzyna Lewandowska',
    position: 'Dyrektor',
    company: 'MediaPro Agency',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Integracja AI w naszym systemie CRM to game changer. Chatbot obsługuje 80% zapytań klientów. Fantastyczna praca!',
    project: 'AI & Automatyzacja',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    name: 'Tomasz Zieliński',
    position: 'Właściciel',
    company: 'FitZone Studio',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Strona WWW + system rezerwacji online. Proste, szybkie, skuteczne. Rezerwacje wzrosły o 250%. Polecam każdemu!',
    project: 'Strona WWW',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 6,
    name: 'Magdalena Kamińska',
    position: 'E-commerce Manager',
    company: 'StyleHub',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    rating: 5,
    text: 'Migracja z WooCommerce do Shopify przebiegła bezproblemowo. Zero przestojów, wszystkie dane przeniesione. Profesjonalny team!',
    project: 'E-commerce',
    gradient: 'from-pink-500 to-rose-500'
  }
];

const stats = [
  { icon: faCheckCircle, value: '150+', label: 'Zrealizowanych projektów' },
  { icon: faStar, value: '4.9/5', label: 'Średnia ocena' },
  { icon: faHandshake, value: '98%', label: 'Zadowolonych klientów' },
  { icon: faChartLine, value: '+250%', label: 'Średni wzrost sprzedaży' }
];

const platforms = [
  { name: 'Google', rating: '4.9/5', reviews: '45 opinii' },
  { name: 'Clutch', rating: '5.0/5', reviews: '28 opinii' },
  { name: 'Facebook', rating: '4.8/5', reviews: '67 opinii' }
];

export default function Opinie() {
  const prefersReducedMotion = useReducedMotion();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, prefersReducedMotion]);

  return (
    <section id="opinie" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Tło animowane */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-10" />
      </div>

      {/* Dekoracyjne elementy */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full opacity-10 blur-[100px]"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
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
              <FontAwesomeIcon icon={faStar} className="mr-2 animate-pulse" />
              Opinie klientów
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Zaufali nam</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              setki zadowolonych klientów
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Zobacz, co mówią o nas <span className="font-semibold text-white">nasi klienci</span>.
            <br className="hidden sm:block" />
            Prawdziwe opinie, prawdziwe rezultaty.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-24"
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
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Main testimonial card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote icon */}
                <div className="absolute top-8 left-8 opacity-10">
                  <FontAwesomeIcon icon={faQuoteLeft} className="w-16 h-16 text-blue-400" />
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="w-6 h-6 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white text-center mb-8 leading-relaxed max-w-4xl mx-auto">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white/20">
                      <Image
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-xl font-bold text-white mb-1">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-sm text-blue-400 font-semibold mb-1">
                        {testimonials[activeTestimonial].position}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonials[activeTestimonial].company}
                      </div>
                      <div className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-400">
                        {testimonials[activeTestimonial].project}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote icon bottom */}
                <div className="absolute bottom-8 right-8 opacity-10">
                  <FontAwesomeIcon icon={faQuoteRight} className="w-16 h-16 text-purple-400" />
                </div>
              </motion.div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Opinia ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -4 } : undefined}
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="w-4 h-4 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-4">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platforms ratings */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-400 mb-6">
            Sprawdź nasze oceny na popularnych platformach:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FontAwesomeIcon icon={faStar} className="w-5 h-5 text-yellow-400" />
                <div className="text-left">
                  <div className="text-sm font-bold text-white">{platform.name}</div>
                  <div className="text-xs text-gray-400">
                    {platform.rating} • {platform.reviews}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
