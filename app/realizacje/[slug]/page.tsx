'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faExternalLinkAlt,
  faCheck,
  faArrowLeft,
  faClock,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projekt nie znaleziony</h1>
          <Link href="/realizacje" className="text-blue-400 hover:text-blue-300">
            Wróć do realizacji
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Very strong overlay for maximum contrast with navbar */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
              Strona główna
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            <Link href="/realizacje" className="hover:text-blue-400 transition-colors">
              Realizacje
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            <span className="text-white">{project.title}</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                {project.category}
              </span>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-all flex items-center gap-2"
                >
                  Odwiedź stronę
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                </a>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white">
              {project.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6">{project.subtitle}</p>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      {project.metrics && (
        <section className="relative py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-2xl"
                >
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      <section className="relative py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">O projekcie</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-red-600/10 to-red-600/5 border border-red-500/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-4">Wyzwanie</h3>
              <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-green-600/10 to-green-600/5 border border-green-500/20 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-4">Rozwiązanie</h3>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Rezultaty</h2>
            <div className="space-y-4">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-300">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Funkcjonalności</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-xl hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Technologie</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-semibold text-white border border-white/10 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="relative py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-3xl text-center"
            >
              <p className="text-xl sm:text-2xl text-gray-200 italic mb-6 leading-relaxed">
                "{project.testimonial.text}"
              </p>
              <div className="text-sm text-gray-400">
                <p className="font-bold text-white">{project.testimonial.author}</p>
                <p>{project.testimonial.position}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Chcesz <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">podobny projekt</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Skontaktuj się z nami i stwórzmy razem coś wyjątkowego
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
              >
                Bezpłatna konsultacja
              </Link>
              <Link
                href="/realizacje"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-semibold transition-all"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                Wszystkie realizacje
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
