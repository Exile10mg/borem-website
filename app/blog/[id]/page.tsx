'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faCalendar,
  faClock,
  faUser,
  faTag,
  faShare,
  faArrowLeft,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useParams } from 'next/navigation';
import { blogPostsData } from '@/data/blog-posts';

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPostsData[postId];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post nie znaleziony</h1>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">
            Wróć do bloga
          </Link>
        </div>
      </div>
    );
  }

  // Convert markdown-style content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('## ')) {
          return `<h2 key="${index}" class="text-2xl sm:text-3xl font-bold text-white mt-8 sm:mt-12 mb-4 sm:mb-6">${line.substring(3)}</h2>`;
        }
        if (line.startsWith('### ')) {
          return `<h3 key="${index}" class="text-xl sm:text-2xl font-semibold text-blue-400 mt-6 sm:mt-8 mb-3 sm:mb-4">${line.substring(4)}</h3>`;
        }
        // Bold
        if (line.includes('**')) {
          line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');
        }
        // Lists
        if (line.startsWith('- ')) {
          return `<li key="${index}" class="ml-4 sm:ml-6 mb-2 text-sm sm:text-base text-gray-300">${line.substring(2)}</li>`;
        }
        // Checkboxes
        if (line.startsWith('✅ ')) {
          return `<div key="${index}" class="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3"><span class="text-green-400 text-lg sm:text-xl flex-shrink-0">✅</span><span class="text-sm sm:text-base text-gray-300">${line.substring(2)}</span></div>`;
        }
        // Regular paragraph
        if (line.trim()) {
          return `<p key="${index}" class="text-sm sm:text-base text-gray-300 leading-relaxed mb-3 sm:mb-4">${line}</p>`;
        }
        return '';
      })
      .join('');
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Image */}
      <div className="relative h-[45vh] sm:h-[60vh] overflow-hidden pt-20">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* Breadcrumbs */}
        <div className="absolute top-28 sm:top-32 left-0 right-0 z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 overflow-x-auto pb-2"
          >
            <Link href="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5 flex-shrink-0">
              <FontAwesomeIcon icon={faHome} className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Strona główna</span>
              <span className="sm:hidden">Home</span>
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
            <Link href="/blog" className="hover:text-blue-400 transition-colors flex-shrink-0">
              Blog
            </Link>
            <FontAwesomeIcon icon={faChevronRight} className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
            <span className="text-white truncate text-xs sm:text-sm">{post.title}</span>
          </motion.div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pb-4 sm:pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Category Badge */}
              <span className={`inline-block mb-2 sm:mb-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r ${
                post.categoryColor === 'blue' ? 'from-blue-600 to-blue-500' :
                post.categoryColor === 'purple' ? 'from-purple-600 to-purple-500' :
                post.categoryColor === 'green' ? 'from-green-600 to-green-500' :
                post.categoryColor === 'orange' ? 'from-orange-600 to-orange-500' :
                post.categoryColor === 'pink' ? 'from-pink-600 to-pink-500' :
                'from-cyan-600 to-cyan-500'
              } text-white shadow-lg`}>
                {post.category}
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-6 text-white drop-shadow-2xl leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-6 text-xs sm:text-base text-gray-300">
                <div className="flex items-center gap-1.5">
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-semibold text-xs sm:text-base">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FontAwesomeIcon icon={faCalendar} className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-base">{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <FontAwesomeIcon icon={faClock} className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-base">{post.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="relative py-8 sm:py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <span className="text-gray-400 font-semibold flex items-center gap-2 text-sm sm:text-base">
              <FontAwesomeIcon icon={faShare} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Udostępnij:
            </span>
            <div className="flex gap-2 sm:gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-blue-600 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-blue-400 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-blue-700 border border-white/10 flex items-center justify-center transition-all hover:scale-110"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </motion.div>

          {/* Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8 sm:mb-12 p-4 sm:p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-l-4 border-blue-500 rounded-r-xl sm:rounded-r-2xl"
          >
            <FontAwesomeIcon icon={faQuoteLeft} className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-2 sm:mb-3" />
            <p className="text-base sm:text-xl text-gray-200 leading-relaxed italic">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faTag} className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 font-semibold">Tagi:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-gray-300 border border-white/10 transition-all cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faUser} className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">O autorze</h3>
                <p className="text-gray-400 mb-2"><strong className="text-white">{post.author}</strong></p>
                <p className="text-gray-300">{post.authorBio}</p>
              </div>
            </div>
          </motion.div>

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 text-center"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all hover:scale-105"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
              Powrót do bloga
            </Link>
          </motion.div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">
              Potrzebujesz <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">profesjonalnej strony</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
              Skontaktuj się z nami i dowiedz się, jak możemy pomóc w realizacji Twojego projektu
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl sm:rounded-2xl font-bold shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all text-sm sm:text-base"
            >
              Bezpłatna konsultacja
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
