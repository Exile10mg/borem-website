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

      {/* Projects Grid - STATIC */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Nasze <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Projekty</span>
            </h2>
            <p className="text-lg text-gray-400">
              Poznaj strony i aplikacje, które stworzyliśmy dla naszych klientów
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <Link 
                  href={`/realizacje/${project.slug}`}
                  className="block group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={project.id === 1}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Very light overlay - just to slightly darken */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Visit Website Button - Always Visible */}
                    {project.url && (
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.url, '_blank', 'noopener,noreferrer');
                          }}
                          className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all"
                        >
                          <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                          Odwiedź stronę
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-3 sm:mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white/10">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 line-clamp-1">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* View Details */}
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-400">Zobacz szczegóły</span>
                      <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Results Section - NEW */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Wyniki <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Kampanii</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Mierzalne efekty naszych działań marketingowych - Google Ads, SEO i Meta Ads
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {campaignResults.map((result, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-r ${result.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={result.icon} className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6">{result.subtitle}</p>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {result.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="flex justify-between items-center gap-4">
                      <span className="text-xs lg:text-sm text-gray-400">{metric.label}</span>
                      <span className="text-base lg:text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text whitespace-nowrap">
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

      {/* FAQ Section - NEW */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Najczęściej Zadawane <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Pytania</span>
            </h2>
            <p className="text-lg text-gray-400">
              Odpowiedzi na pytania, które najczęściej słyszymy od naszych klientów
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Ile czasu trwa realizacja projektu strony internetowej?",
                answer: "Czas realizacji zależy od złożoności projektu. Prosta strona wizytówka to 2-3 tygodnie, zaawansowana strona firmowa 4-6 tygodni, a sklep internetowy lub aplikacja webowa 8-12 tygodni. Po pierwszej konsultacji przedstawiamy dokładny harmonogram."
              },
              {
                question: "Czy oferujecie hosting i domeny?",
                answer: "Tak! Pomagamy w wyborze i konfiguracji hostingu oraz rejestracji domeny. Współpracujemy z najlepszymi dostawcami (Vercel, AWS, home.pl) i zapewniamy pełne wsparcie techniczne. Możemy również zarządzać hostingiem w Twoim imieniu."
              },
              {
                question: "Co jeśli będę potrzebować zmian po wdrożeniu?",
                answer: "Każdy projekt objęty jest 30-dniowym okresem gwarancji, w którym wprowadzamy drobne poprawki bezpłatnie. Po tym okresie oferujemy elastyczne pakiety wsparcia technicznego lub rozliczenie godzinowe. Zawsze jesteśmy dostępni dla naszych klientów."
              },
              {
                question: "Czy otrzymam kod źródłowy strony?",
                answer: "Tak, kod źródłowy należy do Ciebie! Po zakończeniu projektu i realizacji płatności przekazujemy pełny kod źródłowy wraz z dokumentacją. Masz pełną kontrolę nad swoją stroną i możesz ją rozwijać samodzielnie lub z naszą pomocą."
              },
              {
                question: "Ile kosztuje stworzenie strony internetowej?",
                answer: "Ceny zaczynają się od 2000 zł dla prostej strony wizytówki. Zaawansowane strony firmowe to 5000-10000 zł, sklepy internetowe od 8000 zł, a aplikacje webowe od 15000 zł. Po konsultacji przygotujemy szczegółową wycenę dopasowaną do Twoich potrzeb i budżetu."
              },
              {
                question: "Czy zapewniacie wsparcie techniczne po wdrożeniu?",
                answer: "Oczywiście! Oferujemy różne pakiety wsparcia technicznego: od podstawowego (aktualizacje i monitoring) przez rozszerzony (+ zmiany treści) po kompleksowy (+ rozwój funkcjonalności). Jesteśmy dostępni przez email, telefon i komunikatory."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-start gap-3">
                  <span className="text-blue-400 flex-shrink-0">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl">
            <p className="text-lg text-gray-300 mb-4">
              Masz inne pytania? Chętnie na nie odpowiemy!
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - STATIC */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            {[
              { label: 'Zrealizowane projekty', value: '14+' },
              { label: 'Zadowoleni klienci', value: '100%' },
              { label: 'Lata doświadczenia', value: '5+' },
              { label: 'Średni ROI', value: '500%' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:scale-105 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
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
