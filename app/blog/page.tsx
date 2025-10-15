'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faCalendar,
  faClock,
  faUser,
  faTag,
  faArrowRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Jak stworzyć skuteczną stronę internetową w 2024?',
    excerpt: 'Poznaj najważniejsze trendy i najlepsze praktyki tworzenia stron internetowych, które przyciągną klientów i zwiększą konwersję.',
    category: 'Web Development',
    categoryColor: 'blue',
    author: 'Jan Kowalski',
    date: '15 Marca 2024',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['Design', 'SEO', 'UX/UI'],
  },
  {
    id: 2,
    title: 'AI w biznesie - praktyczny przewodnik 2024',
    excerpt: 'Dowiedz się, jak wykorzystać AI do automatyzacji procesów biznesowych i zwiększenia efektywności Twojej firmy.',
    category: 'AI & Automatyzacja',
    categoryColor: 'purple',
    author: 'Anna Nowak',
    date: '10 Marca 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['AI', 'Automatyzacja', 'ChatGPT'],
  },
  {
    id: 3,
    title: 'E-commerce w 2024: trendy i strategie sprzedaży',
    excerpt: 'Sprawdź, jakie strategie sprzedażowe działają najlepiej w sklepach internetowych i jak zwiększyć przychody.',
    category: 'E-commerce',
    categoryColor: 'green',
    author: 'Piotr Wiśniewski',
    date: '5 Marca 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['E-commerce', 'Marketing', 'Sprzedaż'],
  },
  {
    id: 4,
    title: 'SEO w 2024 - kompletny przewodnik dla początkujących',
    excerpt: 'Wszystko co musisz wiedzieć o pozycjonowaniu stron internetowych w Google. Od podstaw do zaawansowanych technik.',
    category: 'Marketing & SEO',
    categoryColor: 'orange',
    author: 'Katarzyna Zielińska',
    date: '1 Marca 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop',
    tags: ['SEO', 'Google', 'Content Marketing'],
  },
  {
    id: 5,
    title: 'Responsive Design - dlaczego to ważne dla Twojego biznesu?',
    excerpt: 'Poznaj znaczenie responsywnych stron internetowych i dowiedz się, jak wpływają one na doświadczenie użytkowników.',
    category: 'Design & Branding',
    categoryColor: 'pink',
    author: 'Michał Lewandowski',
    date: '25 Lutego 2024',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
    tags: ['Design', 'Mobile', 'UX'],
  },
  {
    id: 6,
    title: 'Aplikacje webowe vs natywne - co wybrać dla swojego projektu?',
    excerpt: 'Porównanie aplikacji webowych i natywnych. Zalety, wady i najlepsze przypadki użycia każdego rozwiązania.',
    category: 'Aplikacje',
    categoryColor: 'cyan',
    author: 'Tomasz Kamiński',
    date: '20 Lutego 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    tags: ['Aplikacje', 'PWA', 'Mobile'],
  },
];

const categories = ['Wszystkie', 'Web Development', 'AI & Automatyzacja', 'E-commerce', 'Marketing & SEO', 'Design & Branding', 'Aplikacje'];

const categoryColors: { [key: string]: string } = {
  'Web Development': 'blue',
  'AI & Automatyzacja': 'purple',
  'E-commerce': 'green',
  'Marketing & SEO': 'orange',
  'Design & Branding': 'pink',
  'Aplikacje': 'cyan',
};

export default function BlogPage() {
  useEffect(() => {
    document.title = 'Blog | Borem.pl - Agencja Marketingowa';
  }, []);

  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'Wszystkie' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <WhatsAppButton />

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
            <span className="text-white">Blog</span>
          </div>

          {/* Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Nasz <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Poznaj najnowsze trendy, porady i inspiracje ze świata technologii i biznesu
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <FontAwesomeIcon icon={faSearch} className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Szukaj artykułów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 transition-all"
              />
            </div>
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
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid - STATIC */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">Nie znaleziono artykułów spełniających kryteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r ${
                        post.categoryColor === 'blue' ? 'from-blue-600 to-blue-500' :
                        post.categoryColor === 'purple' ? 'from-purple-600 to-purple-500' :
                        post.categoryColor === 'green' ? 'from-green-600 to-green-500' :
                        post.categoryColor === 'orange' ? 'from-orange-600 to-orange-500' :
                        post.categoryColor === 'pink' ? 'from-pink-600 to-pink-500' :
                        'from-cyan-600 to-cyan-500'
                      } text-white shadow-lg`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faCalendar} className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                      >
                        Czytaj
                        <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - STATIC */}
      <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Potrzebujesz <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">pomocy</span>?
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

      <Footer />
    </div>
  );
}
