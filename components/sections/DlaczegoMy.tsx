'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faTrophy,
  faUsers,
  faLightbulb,
  faShieldAlt,
  faClock,
  faHeart,
  faCode,
  faBolt,
  faGem,
  faHandshake,
  faChartLine,
  faHeadset,
  faStar,
  faAward,
  faCertificate,
  faCheckCircle,
  faInfinity,
  faFire,
  faMedal,
  faRobot,
  faServer,
  faLock,
  faCloudUploadAlt,
  faUserShield,
  faChartBar,
  faGlobe,
  faMobile,
  faSearch,
  faPalette,
  faTools,
  faFileContract
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Animated counter component
function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000 }: { target: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${target}-${suffix}`);
    if (element) observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [target, duration, suffix, hasAnimated]);

  return (
    <span id={`counter-${target}-${suffix}`}>
      {prefix}{count}{suffix}
    </span>
  );
}

const reasons = [
  {
    icon: faRocket,
    title: 'Doświadczenie od 2016',
    description: '8 lat na rynku to setki rozwiązanych problemów i wypracowanych najlepszych praktyk.',
    stats: [
      { value: 150, suffix: '+', label: 'Projektów' },
      { value: 98, suffix: '%', label: 'Sukcesu' },
      { value: 8, suffix: ' lat', label: 'Doświadczenia' }
    ],
    gradient: 'from-blue-500 to-cyan-500',
    features: ['E-commerce', 'Aplikacje SaaS', 'Systemy B2B', 'Landing pages']
  },
  {
    icon: faTrophy,
    title: 'Mierzalne rezultaty',
    description: 'Koncentrujemy się na KPI i ROI. Każdy projekt to konkretne cele biznesowe.',
    stats: [
      { value: 250, suffix: '%', label: 'Wzrost sprzedaży' },
      { value: 3, suffix: 'x', label: 'Więcej konwersji' },
      { value: 45, suffix: '%', label: 'Redukcja kosztów' }
    ],
    gradient: 'from-purple-500 to-pink-500',
    features: ['Analityka', 'A/B testing', 'Optymalizacja CRO', 'Tracking ROI']
  },
  {
    icon: faCode,
    title: 'Stack najnowszych technologii',
    description: 'React, Next.js 14, TypeScript, AI, serverless cloud. Zawsze na czele innowacji.',
    stats: [
      { value: 15, suffix: '+', label: 'Technologii' },
      { value: 99, suffix: '%', label: 'Uptime' },
      { value: 100, suffix: 'ms', label: 'Czas ładowania' }
    ],
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: faHeadset,
    title: 'Support 24/7/365',
    description: 'Nie zostawiamy Cię samego po wdrożeniu. Jesteśmy dostępni zawsze gdy potrzebujesz.',
    stats: [
      { value: 15, suffix: ' min', label: 'Czas reakcji' },
      { value: 24, suffix: '/7', label: 'Dostępność' },
      { value: 100, suffix: '%', label: 'SLA uptime' }
    ],
    gradient: 'from-orange-500 to-red-500',
    features: ['Monitoring 24/7', 'Hot fixes', 'Backup daily', 'Updates']
  },
  {
    icon: faShieldAlt,
    title: 'Bezpieczeństwo enterprise',
    description: 'RODO, ISO, SSL, WAF, CDN, backupy. Zabezpieczenia jak w banku dla każdego klienta.',
    stats: [
      { value: 0, suffix: '', label: 'Incydentów' },
      { value: 100, suffix: '%', label: 'Zgodność RODO' },
      { value: 365, suffix: ' dni', label: 'Backup' }
    ],
    gradient: 'from-indigo-500 to-blue-500',
    features: ['SSL/TLS', 'WAF', 'DDoS protection', 'Penetration tests']
  },
  {
    icon: faBolt,
    title: 'Szybkość dostawy',
    description: 'Agile, CI/CD, automatyzacja deploymentu. MVP w 2 tygodnie, pełny projekt w 6-8 tygodni.',
    stats: [
      { value: 14, suffix: ' dni', label: 'Do MVP' },
      { value: 48, suffix: ' h', label: 'Deploy' },
      { value: 100, suffix: '%', label: 'Automatyzacji' }
    ],
    gradient: 'from-pink-500 to-rose-500',
    features: ['Agile/Scrum', 'CI/CD pipeline', 'Auto-deploy', 'Daily updates']
  }
];

const values = [
  {
    icon: faHeart,
    title: 'Pasja',
    description: 'Nie traktujemy tego jako pracy - to nasza pasja. Każdy projekt to nowe wyzwanie, które przyjmujemy z entuzjazmem.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: faLightbulb,
    title: 'Innowacyjność',
    description: 'Śledzimy trendy, testujemy nowe technologie, eksperymentujemy. Zawsze krok przed konkurencją.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: faHandshake,
    title: 'Partnerstwo',
    description: 'Długoterminowe relacje oparte na zaufaniu. Nie jesteśmy dostawcą - jesteśmy Twoim tech-partnerem.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: faGem,
    title: 'Jakość premium',
    description: 'Perfekcjonizm w kodzie, designie, UX. Testy, code review, audyty. Zero kompromisów w jakości.',
    color: 'from-purple-500 to-pink-500'
  }
];

const certifications = [
  {
    name: 'Google Partner',
    icon: faAward,
    description: 'Certyfikowany partner Google Ads i Analytics',
    year: '2019'
  },
  {
    name: 'Meta Business Partner',
    icon: faCertificate,
    description: 'Oficjalny partner Facebook & Instagram Ads',
    year: '2020'
  },
  {
    name: 'AWS Certified',
    icon: faCloudUploadAlt,
    description: 'Solutions Architect Professional',
    year: '2021'
  },
  {
    name: 'Shopify Partner',
    icon: faStar,
    description: 'Expert w tworzeniu sklepów Shopify',
    year: '2022'
  }
];

const timeline = [
  {
    year: '2016',
    event: 'Start działalności',
    description: 'Pierwsza strona WWW dla lokalnego biznesu',
    icon: faRocket,
    metric: '1 projekt'
  },
  {
    year: '2018',
    event: 'Ekspansja portfolio',
    description: 'Rozszerzenie usług o e-commerce i aplikacje webowe',
    icon: faChartLine,
    metric: '50+ projektów'
  },
  {
    year: '2020',
    event: 'Rozbudowa zespołu',
    description: 'Otwarcie biura i zatrudnienie pierwszych specjalistów',
    icon: faUsers,
    metric: '10+ osób w zespole'
  },
  {
    year: '2022',
    event: 'Specjalizacja w AI',
    description: 'Implementacja pierwszych rozwiązań opartych o AI i ML',
    icon: faRobot,
    metric: 'Lider w AI'
  },
  {
    year: '2024',
    event: 'Lider w branży',
    description: 'Ponad 150 projektów, zespół ekspertów, innowacyjne rozwiązania',
    icon: faTrophy,
    metric: '150+ projektów'
  }
];

const team = [
  {
    name: 'Michał Kowalski',
    role: 'CEO & Full-Stack Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    skills: ['React', 'Node.js', 'AWS'],
    experience: '10+ lat'
  },
  {
    name: 'Anna Nowak',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    skills: ['UI/UX', 'Figma', 'Branding'],
    experience: '8+ lat'
  },
  {
    name: 'Piotr Wiśniewski',
    role: 'AI/ML Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    skills: ['Python', 'TensorFlow', 'GPT'],
    experience: '7+ lat'
  },
  {
    name: 'Karolina Dąbrowska',
    role: 'Marketing & SEO Lead',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    skills: ['SEO', 'Google Ads', 'Analytics'],
    experience: '9+ lat'
  }
];

const awards = [
  {
    title: 'Best Web Agency 2023',
    issuer: 'Polish Web Awards',
    icon: faMedal,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Innovation Award',
    issuer: 'Tech Excellence 2023',
    icon: faLightbulb,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Top 10 Digital Agencies',
    issuer: 'Clutch 2024',
    icon: faTrophy,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Customer Choice 2024',
    issuer: 'Google Reviews',
    icon: faStar,
    color: 'from-green-500 to-emerald-500'
  }
];

const guarantees = [
  {
    icon: faCheckCircle,
    title: 'Gwarancja satysfakcji',
    description: '30 dni na darmowe poprawki po wdrożeniu'
  },
  {
    icon: faInfinity,
    title: 'Nieograniczone konsultacje',
    description: 'Podczas trwania projektu zawsze możesz się z nami skontaktować'
  },
  {
    icon: faShieldAlt,
    title: '12 miesięcy gwarancji',
    description: 'Pełna gwarancja techniczna na kod i infrastrukturę'
  },
  {
    icon: faFileContract,
    title: 'Transparentna umowa',
    description: 'Jasne warunki, bez ukrytych kosztów i niespodzianek'
  }
];

export default function DlaczegoMy() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="dlaczego-my" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Tło z gradientem */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

      {/* Dekoracyjne elementy */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] rounded-full opacity-10 blur-[120px]"
            style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, transparent 70%)' }}
            animate={{ scale: [1, 1.3, 1], x: [0, 60, 0], y: [0, -35, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Nagłówek */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
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
              <FontAwesomeIcon icon={faTrophy} className="mr-2 animate-pulse" />
              Dlaczego My
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Jesteśmy Twoim partnerem</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
              w cyfrowej transformacji
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Nie jesteśmy tylko agencją - jesteśmy <span className="font-semibold text-white">Twoim zespołem</span>.
            <br className="hidden sm:block" />
            Rozumiemy biznes, dostarczamy rezultaty, budujemy długoterminowe relacje.
          </p>
        </motion.div>

        {/* Main Stats Hero */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: 150, suffix: '+', label: 'Projektów zrealizowanych', icon: faRocket },
              { value: 98, suffix: '%', label: 'Zadowolonych klientów', icon: faHeart },
              { value: 8, suffix: '+', label: 'Lat doświadczenia', icon: faTrophy },
              { value: 250, suffix: '%', label: 'Średni wzrost ROI', icon: faChartLine }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -8 } : undefined}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:border-white/20 transition-all duration-500">
                  <FontAwesomeIcon icon={stat.icon} className="w-8 h-8 mb-4 text-blue-400" />
                  <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Reasons Grid - Enhanced */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Dlaczego ponad 150 firm nam zaufało
            </h3>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Konkretne liczby, mierzalne rezultaty, technologia enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="group relative h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -8 } : undefined}
              >
                <div className="relative h-full min-h-[520px] flex flex-col">
                  {/* Glow effect */}
                  <div className={`absolute -inset-2 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />

                  <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-white/20 flex flex-col">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg shadow-black/50 flex-shrink-0`}>
                      <FontAwesomeIcon icon={reason.icon} className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 flex-shrink-0">
                      {reason.title}
                    </h3>

                    <p className="text-base text-gray-300 leading-relaxed mb-6 flex-shrink-0 min-h-[72px]">
                      {reason.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-white/10 flex-shrink-0">
                      {reason.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`text-2xl font-black bg-gradient-to-r ${reason.gradient} text-transparent bg-clip-text mb-1`}>
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-xs text-gray-400 leading-tight min-h-[32px] flex items-center justify-center">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 flex-grow">
                      {reason.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400 min-h-[24px]">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${reason.gradient} flex-shrink-0`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Nagrody i wyróżnienia
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Uznani przez branżę i docenieni przez klientów
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${award.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center`}>
                    <FontAwesomeIcon icon={award.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {award.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Poznaj nasz zespół
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Pasjonaci, eksperci z wieloletnim doświadczeniem
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -8 } : undefined}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-purple-500/30 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white text-center mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm text-purple-400 text-center mb-3">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    {member.experience} doświadczenia
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-[21/9] relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop"
                  alt="Zespół Borem.pl"
                  width={1400}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                      Razem tworzymy <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">przyszłość</span>
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                      Nasz zespół to połączenie kreatywności, technologii i biznesowej ekspertyzy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section - Enhanced */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Nasze fundamenty
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Wartości, które kierują każdą naszą decyzją
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -8 } : undefined}
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                    <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline - Enhanced */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Nasza droga do sukcesu
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Od małego startupu do lidera innowacji
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      className="inline-block group"
                      whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
                    >
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl" />
                        <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                          <div className="flex items-center gap-4 mb-4" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                              <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                              {item.year}
                            </div>
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-3">
                            {item.event}
                          </h4>
                          <p className="text-base text-gray-300 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg">
                            <span className="text-sm font-bold text-blue-400">{item.metric}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block relative z-10">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-purple-500/50"
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications - Enhanced */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Certyfikaty i partnerstwa
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Zaufali nam najwięksi gracze w branży tech
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { y: -8 } : undefined}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl" />
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                      <FontAwesomeIcon icon={cert.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{cert.name}</h4>
                      <span className="text-xs text-gray-500">Od {cert.year}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees Section */}
        <motion.div
          className="mb-24 lg:mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Nasze gwarancje
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Współpraca bez ryzyka, oparta na zaufaniu
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl" />
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-500 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={guarantee.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {guarantee.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {guarantee.description}
                  </p>
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
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl" />
            <p className="relative text-2xl sm:text-3xl lg:text-4xl font-black text-white max-w-3xl mx-auto leading-tight">
              Gotowy na transformację swojego biznesu?
            </p>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Dołącz do ponad <span className="font-bold text-white">150 zadowolonych klientów</span> którzy już rozwijają swój biznes z nami!
          </p>

          <motion.a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden group"
            whileHover={!prefersReducedMotion ? { scale: 1.05, y: -2 } : undefined}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
              Rozpocznijmy współpracę
              <FontAwesomeIcon
                icon={faRocket}
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </span>
          </motion.a>

          <p className="text-sm text-gray-500 mt-6">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
            Darmowa konsultacja • Wycena w 24h • Bez zobowiązań
          </p>
        </motion.div>
      </div>
    </section>
  );
}
