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
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { blogPostsArray } from '@/data/blog-posts';

// Convert blog posts to the format expected by this page
const blogPosts = blogPostsArray.map((post) => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: post.category,
  categoryColor: post.categoryColor,
  author: post.author,
  date: post.date,
  readTime: post.readTime,
  image: post.image,
  tags: post.tags,
})).sort((a, b) => b.id - a.id);

const POSTS_PER_PAGE = 6;

const categories = ['Wszystkie', 'Web Development', 'AI & Automatyzacja', 'E-commerce', 'Marketing & SEO', 'Design & Branding', 'Aplikacje', 'Automatyzacja'];

const categoryColors: { [key: string]: string } = {
  'Web Development': 'blue',
  'AI & Automatyzacja': 'purple',
  'E-commerce': 'green',
  'Marketing & SEO': 'orange',
  'Design & Branding': 'pink',
  'Aplikacje': 'cyan',
  'Automatyzacja': 'purple',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogListRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'Wszystkie' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (blogListRef.current) {
      blogListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
                Strona główna
              </Link>
              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
              <span className="text-white">Blog</span>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                Nasz <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Blog</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-8">
                Poznaj najnowsze trendy, porady i inspiracje ze świata technologii i biznesu
              </p>

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

        <section ref={blogListRef} className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl text-gray-400">Nie znaleziono artykułów spełniających kryteria</p>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 hover:-translate-y-2 transition-all"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

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

                      <div className="p-6">
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

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                              <FontAwesomeIcon icon={faUser} className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-400">{post.author}</span>
                          </div>

                          <Link
                            href={`/blog/${post.slug || post.id}`}
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

                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                        currentPage === 1
                          ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                        currentPage === totalPages
                          ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

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
    </>
  );
}
