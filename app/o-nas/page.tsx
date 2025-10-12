'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faRocket,
  faLightbulb,
  faHeart,
  faUsers,
  faTrophy,
  faCheckCircle,
  faArrowRight,
  faStar,
  faCode,
  faPalette,
  faChartLine,
  faBolt,
  faShieldAlt,
  faHandshake,
  faClock,
  faAward,
  faFire,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const stats = [
  { number: '50+', label: 'Zadowolonych klientów', icon: faUsers },
  { number: '100+', label: 'Zrealizowanych projektów', icon: faTrophy },
  { number: '5+', label: 'Lat doświadczenia', icon: faAward },
  { number: '99%', label: 'Satysfakcji klientów', icon: faStar },
];

const values = [
  {
    icon: faLightbulb,
    title: 'Innowacyjność',
    description: 'Wykorzystujemy najnowsze technologie i trendy, aby Twoja strona była zawsze o krok przed konkurencją.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: faHeart,
    title: 'Pasja',
    description: 'Kochamy to, co robimy. Każdy projekt traktujemy jako własny, wkładając w niego serce i duszę.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: faShieldAlt,
    title: 'Jakość',
    description: 'Nie idziemy na kompromisy. Tylko najwyższe standardy, czytelny kod i perfekcyjny design.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: faHandshake,
    title: 'Partnerstwo',
    description: 'Jesteśmy partnerem, nie tylko wykonawcą. Wspieramy Cię na każdym etapie rozwoju biznesu.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: faBolt,
    title: 'Szybkość',
    description: 'Dotrzymujemy terminów i reagujemy błyskawicznie. Twój czas jest dla nas cenny.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: faGem,
    title: 'Przejrzystość',
    description: 'Jasne zasady, uczciwe ceny, zero ukrytych kosztów. Wiesz dokładnie, za co płacisz.',
    color: 'from-indigo-500 to-purple-500',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Pierwsze kroki',
    description: 'Zaczynaliśmy jako freelancer, tworząc pierwsze strony dla lokalnych firm w Lublinie.',
    icon: faRocket,
  },
  {
    year: '2020',
    title: 'Rozwój portfolio',
    description: 'Zrealizowaliśmy już 20+ projektów. Klienci zaczęli nas polecać swoim znajomym.',
    icon: faFire,
  },
  {
    year: '2021',
    title: 'Agencja',
    description: 'Przekształciliśmy się w agencję. Dołączyli do nas pierwsi współpracownicy.',
    icon: faUsers,
  },
  {
    year: '2022',
    title: 'Specjalizacja',
    description: 'Rozszerzyliśmy usługi o e-commerce, aplikacje webowe i automatyzację AI.',
    icon: faCode,
  },
  {
    year: '2023',
    title: 'Ekspansja',
    description: '50+ zadowolonych klientów. Zaczęliśmy obsługiwać firmy z całej Polski.',
    icon: faChartLine,
  },
  {
    year: '2024',
    title: 'Lider rynku',
    description: 'Obecnie jesteśmy jedną z najszybciej rozwijających się agencji w regionie.',
    icon: faTrophy,
  },
];

const team = [
  {
    name: 'Michał Boryń',
    role: 'Founder & CEO',
    description: 'Full-stack developer z pasją do tworzenia nowoczesnych rozwiązań webowych.',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    image: '👨‍💻',
  },
  {
    name: 'Zespół Backend',
    role: 'Backend Developers',
    description: 'Specjaliści od API, baz danych i architektury systemów.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    image: '⚙️',
  },
  {
    name: 'Zespół Design',
    role: 'UI/UX Designers',
    description: 'Kreują piękne i funkcjonalne interfejsy, które konwertują.',
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    image: '🎨',
  },
  {
    name: 'Zespół Marketing',
    role: 'Digital Marketing',
    description: 'Eksperci od SEO, Google Ads i strategii marketingowych.',
    skills: ['SEO', 'Google Ads', 'Analytics', 'Content Marketing'],
    image: '📈',
  },
];

const whyUs = [
  {
    icon: faClock,
    title: 'Szybka realizacja',
    description: 'Landing page w 5-7 dni, strona firmowa w 2-3 tygodnie. Zawsze na czas!',
  },
  {
    icon: faCheckCircle,
    title: 'Gwarancja jakości',
    description: '14 dni gwarancji satysfakcji. Nie jesteś zadowolony? Zwracamy pieniądze.',
  },
  {
    icon: faBolt,
    title: 'Nowoczesne technologie',
    description: 'React, Next.js, TypeScript. Twoja strona będzie szybka i skalowalna.',
  },
  {
    icon: faShieldAlt,
    title: 'Bezpieczeństwo',
    description: 'SSL, backup, ochrona przed atakami. Twoje dane są u nas bezpieczne.',
  },
  {
    icon: faChartLine,
    title: 'SEO od podstaw',
    description: 'Każda strona jest optymalizowana pod Google. Pozycjonowanie w cenie!',
  },
  {
    icon: faHandshake,
    title: 'Wsparcie po realizacji',
    description: 'Darmowe wsparcie techniczne przez 30-180 dni. Jesteśmy zawsze dostępni.',
  },
];

export default function ONasPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section - STATIC */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
                  <span>Strona główna</span>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-600" />
              </li>
              <li>
                <span className="text-white font-semibold">O nas</span>
              </li>
            </ol>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-blue-500/10">
                <FontAwesomeIcon icon={faUsers} className="mr-2" />
                Poznaj Nas
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
              <span className="block text-white mb-2">Tworzymy</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                cyfrową przyszłość
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Młoda, dynamiczna agencja z pasją do technologii.{' '}
              <span className="font-bold text-white">Budujemy strony i aplikacje</span>, które
              napędzają rozwój biznesu.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - STATIC */}
      <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
                  <FontAwesomeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - STATIC */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Nasza <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">historia</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Od freelancera do agencji. Zobacz, jak rozwijaliśmy się przez lata.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                      <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center flex-shrink-0 z-10">
                    <FontAwesomeIcon icon={item.icon} className="w-7 h-7 text-white" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - STATIC */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Nasze <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">wartości</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              To, co nas wyróżnia i co napędza nas każdego dnia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:-translate-y-1 transition-all group"
              >
                <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color}`}>
                  <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:text-transparent group-hover:bg-clip-text transition-all">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - STATIC */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Nasz <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">zespół</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Pasjonaci, eksperci i kreatywni umysły w jednym.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-purple-500/50 hover:-translate-y-1 transition-all group"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-sm text-purple-400 font-semibold mb-4">{member.role}</div>
                <p className="text-gray-400 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - STATIC */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Dlaczego <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">my?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              6 powodów, dla których warto nam zaufać.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:-translate-y-1 transition-all"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-10 h-10 text-blue-400 mb-4"
                />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - STATIC */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div>
            <FontAwesomeIcon
              icon={faRocket}
              className="w-16 h-16 text-blue-400 mb-6 mx-auto"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Zbudujmy coś razem!
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Masz pomysł? Potrzebujesz strony? A może chcesz rozwinąć swój biznes?{' '}
              <span className="font-bold text-white">
                Porozmawiajmy!
              </span>
            </p>
            <Link
              href="/kontakt?konsultacja=true"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              Bezpłatna konsultacja
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
