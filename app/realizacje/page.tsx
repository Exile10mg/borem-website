'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faGlobe,
  faMobileAlt,
  faCog,
  faArrowRight,
  faCheck,
  faExternalLinkAlt,
  faChartLine,
  faBullseye,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, type Project } from '@/data/projects';

// Typy projektów
type ProjectCategory = 'Wszystkie' | 'Strony WWW' | 'Aplikacje' | 'Automatyzacje';

// Campaign Results Data
const campaignResults = [
  {
    title: 'Sztuka skutecznej kampanii',
    subtitle: 'Google Ads dla E-commerce',
    metrics: [
      { label: 'Przychód w miesiąc', value: '44 tys. zł' },
      { label: 'Budżet reklamowy', value: '4 tys. zł' },
      { label: 'ROI', value: '1000%' },
    ],
    description: 'Kampania Google Ads dla sklepu z regenerowanymi częściami. Osiągnęliśmy wyjątkowy zwrot z inwestycji dzięki precyzyjnemu targetowaniu i optymalizacji.',
    icon: faBullseye,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Sztuka widoczności w Google',
    subtitle: 'Działania SEO',
    metrics: [
      { label: 'Wyświetlenia', value: '172 tys.' },
      { label: 'Kliknięcia', value: '8,81 tys.' },
      { label: 'CTR', value: '5,1%' },
    ],
    description: 'Od sierpnia 2024 prowadzimy działania SEO. Osiągnęliśmy ponad 172 tys. wyświetleń i 8,81 tys. kliknięć bez płatnych reklam. Średnia pozycja: 7,8.',
    icon: faChartLine,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Sztuka skalowania przez Meta Ads',
    subtitle: 'Facebook & Instagram Ads',
    metrics: [
      { label: 'Kliknięcia', value: '1,17 mln' },
      { label: 'Wyświetlenia', value: '5,89 mln' },
      { label: 'Koszt kliknięcia', value: '0,37-0,73 zł' },
    ],
    description: 'Dla marek DAKRO wygenerowaliśmy 1,17 mln kliknięć i 5,89 mln wyświetleń przy budżecie 26,2 tys. zł. Skalowaliśmy wyniki dzięki testom i optymalizacji.',
    icon: faRocket,
    gradient: 'from-purple-500 to-pink-600',
  },
];


export default function RealizacjePage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Wszystkie');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['Wszystkie', 'Strony WWW', 'Aplikacje', 'Automatyzacje'];

  const filteredProjects = projects.filter(
    project => activeCategory === 'Wszystkie' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section - STATIC */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
              Strona główna
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            <span className="text-white">Realizacje</span>
          </div>

          {/* Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Nasze <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Realizacje</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Poznaj projekty, które pomogły naszym klientom osiągnąć sukces
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter - STATIC */}
      <section className="relative py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:scale-105 border border-white/10'
                }`}
              >
                {category === 'Strony WWW' && <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />}
                {category === 'Aplikacje' && <FontAwesomeIcon icon={faMobileAlt} className="w-4 h-4" />}
                {category === 'Automatyzacje' && <FontAwesomeIcon icon={faCog} className="w-4 h-4" />}
                {category}
                {category !== 'Wszystkie' && (
                  <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {projects.filter(p => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Results Section - NEW */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Poznaj <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">efekty naszych klientów</span>
            </h2>
            <p className="text-lg text-gray-400">
              Mierzalne wyniki z kampanii reklamowych Google Ads, SEO i Meta Ads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaignResults.map((result, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 hover:-translate-y-2 transition-all"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${result.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <FontAwesomeIcon icon={result.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6">{result.subtitle}</p>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {result.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">{metric.label}</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-6">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - STATIC */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <Link 
                  href={`/realizacje/${project.slug}`}
                  className="block group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all h-full"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={project.id === 1}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* URL Badge */}
                    {project.url && (
                      <div className="absolute top-4 right-4">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.url, '_blank', 'noopener,noreferrer');
                          }}
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* View Details */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-sm text-gray-400">Zobacz szczegóły</span>
                      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-blue-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - STATIC */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Zrealizowane projekty', value: '14+' },
              { label: 'Zadowoleni klienci', value: '100%' },
              { label: 'Lata doświadczenia', value: '5+' },
              { label: 'Średni ROI', value: '500%' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:scale-105 hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - STATIC */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Gotowy na <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">podobne efekty</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Skontaktuj się z nami i dowiedz się, jak możemy pomóc w rozwoju Twojego biznesu
            </p>
            <Link
              href="/kontakt?konsultacja=true"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all"
            >
              Bezpłatna konsultacja
            </Link>
          </div>
        </div>
      </section>

      {/* Modal with Case Study - STATIC */}
      {selectedProject && selectedProject.caseStudy && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {selectedProject.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Wyzwanie</h3>
                <p className="text-gray-300">{selectedProject.caseStudy.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Rozwiązanie</h3>
                <p className="text-gray-300">{selectedProject.caseStudy.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Rezultaty</h3>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.results.map((result: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-400" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedProject.url && (
                <div className="pt-6 border-t border-white/10">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all"
                  >
                    Odwiedź stronę
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
