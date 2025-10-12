'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faTrophy,
  faCode,
  faHeadset,
  faShieldAlt,
  faBolt,
  faHeart,
  faLightbulb,
  faHandshake,
  faGem,
  faChartLine,
  faStar,
  faAward,
  faCertificate,
  faCheckCircle,
  faCloudUploadAlt,
  faMedal,
  faFileContract
} from '@fortawesome/free-solid-svg-icons';

const reasons = [
  {
    icon: faRocket,
    title: 'Doświadczenie od 2016',
    description: '8 lat na rynku to setki rozwiązanych problemów i wypracowanych najlepszych praktyk.',
    stats: [{ value: '150+', label: 'Projektów' }, { value: '98%', label: 'Sukcesu' }, { value: '8 lat', label: 'Doświadczenia' }],
    gradient: 'from-blue-500 to-cyan-500',
    features: ['E-commerce', 'Aplikacje SaaS', 'Systemy B2B', 'Landing pages']
  },
  {
    icon: faTrophy,
    title: 'Mierzalne rezultaty',
    description: 'Koncentrujemy się na KPI i ROI. Każdy projekt to konkretne cele biznesowe.',
    stats: [{ value: '+250%', label: 'Wzrost sprzedaży' }, { value: '3x', label: 'Więcej konwersji' }, { value: '45%', label: 'Redukcja kosztów' }],
    gradient: 'from-purple-500 to-pink-500',
    features: ['Analityka', 'A/B testing', 'Optymalizacja CRO', 'Tracking ROI']
  },
  {
    icon: faCode,
    title: 'Stack najnowszych technologii',
    description: 'React, Next.js 14, TypeScript, AI, serverless cloud. Zawsze na czele innowacji.',
    stats: [{ value: '15+', label: 'Technologii' }, { value: '99%', label: 'Uptime' }, { value: '100ms', label: 'Czas ładowania' }],
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: faHeadset,
    title: 'Support 24/7/365',
    description: 'Nie zostawiamy Cię samego po wdrożeniu. Jesteśmy dostępni zawsze gdy potrzebujesz.',
    stats: [{ value: '15 min', label: 'Czas reakcji' }, { value: '24/7', label: 'Dostępność' }, { value: '100%', label: 'SLA uptime' }],
    gradient: 'from-orange-500 to-red-500',
    features: ['Monitoring 24/7', 'Hot fixes', 'Backup daily', 'Updates']
  },
  {
    icon: faShieldAlt,
    title: 'Bezpieczeństwo enterprise',
    description: 'RODO, ISO, SSL, WAF, CDN, backupy. Zabezpieczenia jak w banku dla każdego klienta.',
    stats: [{ value: '0', label: 'Incydentów' }, { value: '100%', label: 'Zgodność RODO' }, { value: '365 dni', label: 'Backup' }],
    gradient: 'from-indigo-500 to-blue-500',
    features: ['SSL/TLS', 'WAF', 'DDoS protection', 'Penetration tests']
  },
  {
    icon: faBolt,
    title: 'Szybkość dostawy',
    description: 'Agile, CI/CD, automatyzacja deploymentu. MVP w 2 tygodnie, pełny projekt w 6-8 tygodni.',
    stats: [{ value: '14 dni', label: 'Do MVP' }, { value: '48h', label: 'Deploy' }, { value: '100%', label: 'Automatyzacji' }],
    gradient: 'from-pink-500 to-rose-500',
    features: ['Agile/Scrum', 'CI/CD pipeline', 'Auto-deploy', 'Daily updates']
  }
];

const values = [
  { icon: faHeart, title: 'Pasja', description: 'Nie traktujemy tego jako pracy - to nasza pasja. Każdy projekt to nowe wyzwanie.', color: 'from-red-500 to-pink-500' },
  { icon: faLightbulb, title: 'Innowacyjność', description: 'Śledzimy trendy, testujemy nowe technologie. Zawsze krok przed konkurencją.', color: 'from-yellow-500 to-orange-500' },
  { icon: faHandshake, title: 'Partnerstwo', description: 'Długoterminowe relacje oparte na zaufaniu. Jesteśmy Twoim tech-partnerem.', color: 'from-blue-500 to-cyan-500' },
  { icon: faGem, title: 'Jakość premium', description: 'Perfekcjonizm w kodzie, designie, UX. Zero kompromisów w jakości.', color: 'from-purple-500 to-pink-500' }
];

const awards = [
  { title: 'Best Web Agency 2023', issuer: 'Polish Web Awards', icon: faMedal, color: 'from-yellow-500 to-orange-500' },
  { title: 'Innovation Award', issuer: 'Tech Excellence 2023', icon: faLightbulb, color: 'from-blue-500 to-cyan-500' },
  { title: 'Top 10 Digital Agencies', issuer: 'Clutch 2024', icon: faTrophy, color: 'from-purple-500 to-pink-500' },
  { title: 'Customer Choice 2024', issuer: 'Google Reviews', icon: faStar, color: 'from-green-500 to-emerald-500' }
];

const certifications = [
  { name: 'Google Partner', icon: faAward, description: 'Certyfikowany partner Google Ads', year: '2019' },
  { name: 'Meta Business Partner', icon: faCertificate, description: 'Oficjalny partner Facebook Ads', year: '2020' },
  { name: 'AWS Certified', icon: faCloudUploadAlt, description: 'Solutions Architect Professional', year: '2021' },
  { name: 'Shopify Partner', icon: faStar, description: 'Expert w tworzeniu sklepów', year: '2022' }
];

const guarantees = [
  { icon: faCheckCircle, title: 'Gwarancja satysfakcji', description: '30 dni na darmowe poprawki' },
  { icon: faShieldAlt, title: '12 miesięcy gwarancji', description: 'Pełna gwarancja techniczna' },
  { icon: faFileContract, title: 'Transparentna umowa', description: 'Bez ukrytych kosztów' }
];

export default function DlaczegoMy() {
  return (
    <section id="dlaczego-my" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />

      {/* Static blobs */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-block mb-6">
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl">
              <FontAwesomeIcon icon={faTrophy} className="mr-2" />
              Dlaczego My
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white mb-2">Jesteśmy Twoim partnerem</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              w cyfrowej transformacji
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Nie jesteśmy tylko agencją - jesteśmy <span className="font-semibold text-white">Twoim zespołem</span>.
            <br className="hidden sm:block" />
            Rozumiemy biznes, dostarczamy rezultaty, budujemy długoterminowe relacje.
          </p>
        </div>

        {/* Main Stats */}
        <div className="mb-24 lg:mb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: '150+', label: 'Projektów zrealizowanych', icon: faRocket },
              { value: '98%', label: 'Zadowolonych klientów', icon: faHeart },
              { value: '8+', label: 'Lat doświadczenia', icon: faTrophy },
              { value: '+250%', label: 'Średni wzrost ROI', icon: faChartLine }
            ].map((stat) => (
              <div
                key={stat.label}
                className="relative group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:border-white/20 transition-all">
                  <FontAwesomeIcon icon={stat.icon} className="w-8 h-8 mb-4 text-blue-400" />
                  <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="mb-24 lg:mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Dlaczego ponad 150 firm nam zaufało
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Konkretne liczby, mierzalne rezultaty, technologia enterprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group relative hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`absolute -inset-2 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />

                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 transition-all hover:border-white/20">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg`}>
                    <FontAwesomeIcon icon={reason.icon} className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">{reason.title}</h3>
                  <p className="text-base text-gray-300 leading-relaxed mb-6">{reason.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-white/10">
                    {reason.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-2xl font-black bg-gradient-to-r ${reason.gradient} text-transparent bg-clip-text mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {reason.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${reason.gradient}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">Nagrody i wyróżnienia</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award) => (
              <div key={award.title} className="group relative hover:scale-105 transition-transform duration-300">
                <div className={`absolute -inset-1 bg-gradient-to-r ${award.color} opacity-20 blur-xl rounded-2xl`} />
                <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${award.color} flex items-center justify-center`}>
                    <FontAwesomeIcon icon={award.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{award.title}</h4>
                  <p className="text-sm text-gray-400">{award.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">Nasze fundamenty</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="group relative hover:-translate-y-2 transition-transform duration-300">
                <div className={`absolute -inset-2 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity rounded-3xl`} />
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}>
                    <FontAwesomeIcon icon={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">Certyfikaty i partnerstwa</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={cert.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-lg mb-1">{cert.name}</h4>
                  <span className="text-xs text-gray-500">Od {cert.year}</span>
                  <p className="text-sm text-gray-400 mt-2">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4">Nasze gwarancje</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {guarantees.map((guarantee) => (
              <div key={guarantee.title} className="relative group hover:scale-105 transition-transform duration-300">
                <div className="relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={guarantee.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{guarantee.title}</h4>
                  <p className="text-sm text-gray-400">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-8">
            Gotowy na transformację swojego biznesu?
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Dołącz do ponad <span className="font-bold text-white">150 zadowolonych klientów</span>!
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 hover:scale-105 hover:-translate-y-1 transition-all relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
              Rozpocznijmy współpracę
            </span>
          </a>
          <p className="text-sm text-gray-500 mt-6">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-500" />
            Darmowa konsultacja • Wycena w 24h • Bez zobowiązań
          </p>
        </div>
      </div>
    </section>
  );
}
