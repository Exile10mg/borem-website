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
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Typy projektów
type ProjectCategory = 'Wszystkie' | 'Strony WWW' | 'Aplikacje' | 'Automatyzacje';

interface Project {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  url?: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

const projects: Project[] = [
  // Strony WWW
  {
    id: 1,
    slug: 'dakro',
    title: 'DAKRO',
    category: 'Strony WWW',
    description: 'Nowoczesna strona dla grupy DAKRO - lidera w branży motoryzacyjnej. Responsywny design, integracje z systemami CRM.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    url: 'https://dakro.pl',
    tags: ['WordPress', 'E-commerce', 'SEO'],
    metrics: [
      { label: 'Wzrost ruchu', value: '+250%' },
      { label: 'Czas ładowania', value: '<2s' },
    ],
  },
  {
    id: 2,
    slug: 'e-dakro',
    title: 'E-DAKRO',
    category: 'Strony WWW',
    description: 'Platforma e-commerce dla DAKRO z zaawansowanym systemem zarządzania produktami i integracją z hurtowniami.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    url: 'https://e-dakro.pl',
    tags: ['E-commerce', 'WooCommerce', 'Integracje'],
    metrics: [
      { label: 'ROI', value: '1000%' },
      { label: 'Przychód/mc', value: '44k zł' },
    ],
    caseStudy: {
      challenge: 'Klient potrzebował sklepu internetowego z automatyczną synchronizacją stanów magazynowych z systemem ERP.',
      solution: 'Stworzyliśmy sklep WooCommerce z dedykowaną integracją API, automatycznym importem produktów i zaawansowanym systemem rabatowym.',
      results: [
        '44 tys. zł przychodu przy budżecie 4 tys. zł',
        'ROI na poziomie 1000%',
        'Automatyzacja 90% procesów',
      ],
    },
  },
  {
    id: 3,
    slug: 'serwis-bmw-lublin',
    title: 'Serwis BMW Lublin',
    category: 'Strony WWW',
    description: 'Profesjonalna strona dla serwisu BMW z systemem rezerwacji online i galerią realizacji.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    url: 'https://serwisbmwlublin.pl',
    tags: ['WordPress', 'Rezerwacje', 'Local SEO'],
  },
  {
    id: 4,
    slug: 'dakro-multidealer',
    title: 'DAKRO Multidealer',
    category: 'Strony WWW',
    description: 'Portal dla sieci dealerskiej DAKRO z wyszukiwarką pojazdów i systemem porównywania ofert.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    url: 'https://dakromultidealer.pl',
    tags: ['Portal', 'Wyszukiwarka', 'Multi-site'],
  },
  {
    id: 5,
    slug: 'ciociocake',
    title: 'Ciociocake',
    category: 'Strony WWW',
    description: 'Elegancka strona dla cukierni z galerią tortów, systemem zamówień online i blogiem kulinarnym.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
    url: 'https://ciociocake.pl',
    tags: ['WordPress', 'Galeria', 'Zamówienia'],
  },
  {
    id: 6,
    slug: 'sl-spare-parts-polska',
    title: 'SL SPARE PARTS - POLSKA',
    category: 'Strony WWW',
    description: 'Międzynarodowy sklep z regenerowanymi częściami do silników diesel: pompy CR/VP, wtryskiwacze, turbosprężarki. System kaucji zwrotnej i wyszukiwarka po VIN.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    url: 'https://slsp24.pl',
    tags: ['WooCommerce', 'Multilingual', 'System Kaucji'],
    metrics: [
      { label: 'Produkty', value: '5000+' },
      { label: 'Kraje', value: '3' },
    ],
  },
  {
    id: 7,
    slug: 'dakro-com-pl',
    title: 'DAKRO.COM.PL - Sklep B2B',
    category: 'Strony WWW',
    description: 'Hurtownia części regenerowanych dla warsztatów i dealerów. Zaawansowany system rabatowy, integracja z magazynem i automatyczne aktualizacje stanów.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    url: 'https://dakro.com.pl',
    tags: ['B2B', 'WooCommerce', 'API Integration'],
  },
  {
    id: 8,
    slug: 'sl-spare-parts-niemcy',
    title: 'SL SPARE PARTS - NIEMCY',
    category: 'Strony WWW',
    description: 'Niemiecka wersja sklepu SL Spare Parts z lokalizacją płatności, języka i obsługą niemieckich przewoźników. Pełna integracja z polskim magazynem.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    url: 'https://dieselservice24.de',
    tags: ['German', 'Localization', 'DHL/DPD'],
  },
  {
    id: 9,
    slug: 'sl-spare-parts-czechy',
    title: 'SL SPARE PARTS - CZECHY',
    category: 'Strony WWW',
    description: 'Czeska wersja platformy z obsługą CZK, lokalnymi metodami płatności i przewoźnikami. Synchronizacja z głównym systemem magazynowym.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    url: 'https://dieselservice24.cz',
    tags: ['Czech', 'Multi-currency', 'Sync'],
  },
  
  // Aplikacje Webowe
  {
    id: 10,
    slug: 'system-urlopowy',
    title: 'System Urlopowy',
    category: 'Aplikacje',
    description: 'Dedykowana aplikacja do zarządzania urlopami i absencjami pracowników z automatycznym rozliczaniem i powiadomieniami.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Oszczędność czasu HR', value: '80%' },
      { label: 'Użytkownicy', value: '150+' },
    ],
    caseStudy: {
      challenge: 'Firma potrzebowała zunifikowanego systemu zarządzania urlopami dla 3 oddziałów w różnych krajach.',
      solution: 'Stworzyliśmy aplikację PWA z konfigurowalnymi politykami urlopowymi, automatycznym rozliczaniem i integracją z kalendarzami.',
      results: [
        'Redukcja czasu HR o 80%',
        'Automatyzacja rozliczeń urlopowych',
        'Dostęp mobilny dla pracowników',
      ],
    },
  },
  {
    id: 11,
    slug: 'system-raportowania',
    title: 'System Raportowania Regeneracji',
    category: 'Aplikacje',
    description: 'Aplikacja do śledzenia procesu regeneracji części z fotografowaniem, statusami i raportami PDF.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Laravel', 'PDF Generation'],
    metrics: [
      { label: 'Przetworzone zlecenia', value: '10k+' },
      { label: 'Wzrost efektywności', value: '+60%' },
    ],
  },
  {
    id: 12,
    slug: 'fleet-management',
    title: 'Fleet Management System',
    category: 'Aplikacje',
    description: 'Zaawansowany system zarządzania flotą pojazdów z GPS tracking, harmonogramem przeglądów i kontrolą kosztów.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    tags: ['React', 'GPS', 'Analytics'],
    metrics: [
      { label: 'Monitorowane pojazdy', value: '200+' },
      { label: 'Redukcja kosztów', value: '-25%' },
    ],
  },
  
  // Automatyzacje
  {
    id: 13,
    slug: 'auto-wystawianie',
    title: 'Auto-wystawianie Produktów',
    category: 'Automatyzacje',
    description: 'System automatycznego importu i wystawiania tysięcy produktów z hurtowni do sklepu z optymalizacją SEO.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Python', 'API', 'Cron Jobs'],
    metrics: [
      { label: 'Produkty/dzień', value: '5000+' },
      { label: 'Oszczędność czasu', value: '95%' },
    ],
    caseStudy: {
      challenge: 'Ręczne dodawanie produktów zajmowało 40 godzin tygodniowo i było podatne na błędy.',
      solution: 'Stworzyliśmy automatyczny system importujący produkty z API hurtowni, optymalizujący opisy pod SEO i aktualizujący stany magazynowe co godzinę.',
      results: [
        '5000+ produktów dziennie automatycznie',
        'Oszczędność 160 godzin miesięcznie',
        '95% redukcja błędów w danych',
      ],
    },
  },
  {
    id: 14,
    slug: 'bi-dashboard',
    title: 'Business Intelligence Dashboard',
    category: 'Automatyzacje',
    description: 'Zaawansowany system analiz danych biznesowych z predykcją sprzedaży i automatycznymi raportami.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Power BI', 'Python', 'Machine Learning'],
    metrics: [
      { label: 'Analizowane źródła', value: '15+' },
      { label: 'Trafność predykcji', value: '87%' },
    ],
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
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
                  {selectedProject.caseStudy.results.map((result, idx) => (
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
