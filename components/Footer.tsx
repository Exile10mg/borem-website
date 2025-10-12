'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faRocket,
  faCode,
  faShoppingCart,
  faMobileAlt,
  faRobot,
  faChartLine,
  faHeart,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const footerLinks = {
  services: [
    { name: 'Strony WWW', icon: faCode, href: '/#strony-www' },
    { name: 'E-commerce', icon: faShoppingCart, href: '/#ecommerce' },
    { name: 'Aplikacje Webowe', icon: faMobileAlt, href: '/#aplikacje' },
    { name: 'AI & Automatyzacja', icon: faRobot, href: '/#ai' },
    { name: 'Marketing & SEO', icon: faChartLine, href: '/#marketing' },
  ],
  company: [
    { name: 'O nas', href: '/o-nas' },
    { name: 'Proces pracy', href: '/proces-pracy' },
    { name: 'Realizacje', href: '/realizacje' },
    { name: 'Opinie', href: '/#opinie' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    { name: 'Regulamin', href: '/regulamin' },
    { name: 'RODO', href: '/rodo' },
    { name: 'Cookies', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: faFacebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: faTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: faLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: faInstagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: faGithub, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
];

const stats = [
  { value: '150+', label: 'Projektów' },
  { value: '98%', label: 'Zadowolonych klientów' },
  { value: '8+', label: 'Lat doświadczenia' },
  { value: '24/7', label: 'Wsparcie' },
];

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background effects */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full opacity-10 blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <motion.div
          className="py-12 lg:py-16 border-b border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-white">Borem.pl</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tworzymy nowoczesne rozwiązania cyfrowe, które napędzają rozwój biznesu.
                Od stron WWW po zaawansowane aplikacje AI - jesteśmy Twoim partnerem w cyfrowej transformacji.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="mailto:kontakt@borem.pl"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                </div>
                <span className="text-sm">kontakt@borem.pl</span>
              </a>

              <a
                href="tel:+48787041328"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                </div>
                <span className="text-sm">+48 787 041 328</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                </div>
                <span className="text-sm">ul. Różana 28/66, 20-538 Lublin</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Usługi</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors"
                    />
                    <span className="text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Firma</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Informacje prawne</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social media */}
            <div className="mt-8">
              <h5 className="text-sm font-bold text-white mb-4">Śledź nas</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                    whileHover={!prefersReducedMotion ? { scale: 1.1, y: -2 } : undefined}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Borem.pl. Wszelkie prawa zastrzeżone.
              <span className="inline-flex items-center gap-1 ml-2">
                Stworzone z <FontAwesomeIcon icon={faHeart} className="w-3 h-3 text-red-500 mx-1 animate-pulse" /> w Polsce
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-xs text-gray-500">
              <div>
                NIP: 7123429572
              </div>
              <div>
                REGON: 520995990
              </div>
              <div className="hidden sm:block">
                Borem Michał Boryń
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl hover:shadow-purple-500/50 transition-all group"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={!prefersReducedMotion ? { scale: 1.1, y: -2 } : undefined}
        whileTap={{ scale: 0.95 }}
        aria-label="Przewiń do góry"
      >
        <FontAwesomeIcon
          icon={faArrowUp}
          className="w-5 h-5 text-white group-hover:animate-bounce"
        />
      </motion.button>
    </footer>
  );
}
