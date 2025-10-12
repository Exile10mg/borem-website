'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChevronRight,
  faCheck,
  faTimes,
  faRocket,
  faStore,
  faCode,
  faChartLine,
  faStar,
  faCrown,
  faLightbulb,
  faArrowRight,
  faInfoCircle,
  faQuestionCircle,
  faGlobe,
  faShoppingCart,
  faMobile,
  faRobot,
  faBullhorn,
  faPalette,
  faDatabase,
  faShieldAlt,
  faMagnifyingGlass,
  faBolt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// All pricing packages
const allServices = {
  'strony-www': [
    {
      name: 'Landing Page',
      icon: faBolt,
      price: '1,299',
      period: 'zł',
      description: 'Szybka strona sprzedażowa',
      timeframe: '5-7 dni',
      features: [
        { text: '1 strona (one-page)', included: true },
        { text: 'Responsywny design', included: true },
        { text: 'Formularz kontaktowy', included: true },
        { text: 'Podstawowe SEO', included: true },
        { text: 'Hosting i domena (1 rok)', included: true },
        { text: 'SSL (certyfikat)', included: true },
        { text: 'Wsparcie 30 dni', included: true },
        { text: 'Panel CMS', included: false },
        { text: 'Blog', included: false },
      ],
      popular: false,
      color: 'cyan',
    },
    {
      name: 'Portfolio / CV',
      icon: faLightbulb,
      price: '1,799',
      period: 'zł',
      description: 'Twoja wizytówka w sieci',
      timeframe: '7-10 dni',
      features: [
        { text: 'Do 5 podstron', included: true },
        { text: 'Responsywny design', included: true },
        { text: 'Galeria projektów', included: true },
        { text: 'Formularz kontaktowy', included: true },
        { text: 'Podstawowe SEO', included: true },
        { text: 'Hosting i domena (1 rok)', included: true },
        { text: 'Wsparcie 30 dni', included: true },
        { text: 'Blog (opcjonalnie)', included: true },
        { text: 'Integracja social media', included: true },
      ],
      popular: false,
      color: 'purple',
    },
    {
      name: 'Strona Firmowa',
      icon: faGlobe,
      price: '2,999',
      period: 'zł',
      description: 'Profesjonalna obecność w sieci',
      timeframe: '2-3 tygodnie',
      features: [
        { text: 'Do 10 podstron', included: true },
        { text: 'Responsywny design', included: true },
        { text: 'Panel CMS (edycja treści)', included: true },
        { text: 'Formularz kontaktowy', included: true },
        { text: 'Zaawansowane SEO', included: true },
        { text: 'Hosting i domena (1 rok)', included: true },
        { text: 'Google Maps integracja', included: true },
        { text: 'Wsparcie 60 dni', included: true },
        { text: 'Blog', included: true },
        { text: 'Newsletter', included: true },
        { text: 'Google Analytics', included: true },
      ],
      popular: true,
      color: 'blue',
    },
    {
      name: 'Strona Advanced',
      icon: faCrown,
      price: '5,999',
      period: 'zł',
      description: 'Rozbudowana strona biznesowa',
      timeframe: '4-6 tygodni',
      features: [
        { text: 'Nielimitowane podstrony', included: true },
        { text: 'Responsywny design Premium', included: true },
        { text: 'Zaawansowany panel CMS', included: true },
        { text: 'Wielojęzyczność', included: true },
        { text: 'Premium SEO + konsultacje', included: true },
        { text: 'Hosting i domena (1 rok)', included: true },
        { text: 'Zaawansowane formularze', included: true },
        { text: 'Wsparcie 90 dni', included: true },
        { text: 'Blog + Portfolio', included: true },
        { text: 'Newsletter + Automaty', included: true },
        { text: 'Animacje i efekty', included: true },
        { text: 'Integracje API', included: true },
      ],
      popular: false,
      color: 'pink',
    },
  ],
  'ecommerce': [
    {
      name: 'Sklep Start',
      icon: faStore,
      price: '4,999',
      period: 'zł',
      description: 'Rozpocznij sprzedaż online',
      timeframe: '3-4 tygodnie',
      features: [
        { text: 'Do 50 produktów', included: true },
        { text: 'Koszyk i płatności', included: true },
        { text: 'Panel administracyjny', included: true },
        { text: 'Responsywny design', included: true },
        { text: 'Podstawowe SEO', included: true },
        { text: 'Integracja płatności (PayU/P24)', included: true },
        { text: 'Integracja z kurierem', included: true },
        { text: 'Wsparcie 60 dni', included: true },
        { text: 'Zarządzanie magazynem', included: true },
        { text: 'Kody rabatowe', included: false },
        { text: 'Program lojalnościowy', included: false },
      ],
      popular: false,
      color: 'green',
    },
    {
      name: 'Sklep Business',
      icon: faShoppingCart,
      price: '8,999',
      period: 'zł',
      description: 'Profesjonalny sklep internetowy',
      timeframe: '5-7 tygodni',
      features: [
        { text: 'Do 200 produktów', included: true },
        { text: 'Koszyk i płatności', included: true },
        { text: 'Zaawansowany panel', included: true },
        { text: 'Responsywny design Premium', included: true },
        { text: 'Zaawansowane SEO', included: true },
        { text: 'Wszystkie płatności (PayU/P24/PayPal/BLIK)', included: true },
        { text: 'Integracje kurierskie', included: true },
        { text: 'Wsparcie 120 dni', included: true },
        { text: 'Zarządzanie magazynem', included: true },
        { text: 'Kody rabatowe i promocje', included: true },
        { text: 'Program lojalnościowy', included: true },
        { text: 'Newsletter', included: true },
        { text: 'Recenzje produktów', included: true },
      ],
      popular: true,
      color: 'orange',
    },
    {
      name: 'Sklep Enterprise',
      icon: faChartLine,
      price: '14,999',
      period: 'zł',
      description: 'Pełnowymiarowa platforma sprzedażowa',
      timeframe: '8-12 tygodni',
      features: [
        { text: 'Nielimitowane produkty', included: true },
        { text: 'Koszyk z AI rekomendacjami', included: true },
        { text: 'Panel z analityką biznesową', included: true },
        { text: 'Responsywny design + PWA', included: true },
        { text: 'Premium SEO + marketing', included: true },
        { text: 'Wszystkie płatności + raty', included: true },
        { text: 'Automaty kurierskie', included: true },
        { text: 'Wsparcie 180 dni', included: true },
        { text: 'Zaawansowany magazyn', included: true },
        { text: 'Marketing automation', included: true },
        { text: 'Program lojalnościowy', included: true },
        { text: 'Wielojęzyczność', included: true },
        { text: 'Multi-walutowość', included: true },
        { text: 'B2B i B2C', included: true },
      ],
      popular: false,
      color: 'red',
    },
  ],
  'aplikacje': [
    {
      name: 'Aplikacja MVP',
      icon: faCode,
      price: '9,999',
      period: 'zł',
      description: 'Minimum Viable Product',
      timeframe: '6-8 tygodni',
      features: [
        { text: 'Dedykowana aplikacja webowa', included: true },
        { text: 'Panel użytkownika', included: true },
        { text: 'Autoryzacja i logowanie', included: true },
        { text: 'API i baza danych', included: true },
        { text: 'Responsywny interfejs', included: true },
        { text: 'Do 5 głównych funkcji', included: true },
        { text: 'Hosting i domena (1 rok)', included: true },
        { text: 'Wsparcie 90 dni', included: true },
        { text: 'Dokumentacja podstawowa', included: true },
        { text: 'Mobile app', included: false },
      ],
      popular: false,
      color: 'indigo',
    },
    {
      name: 'Aplikacja Standard',
      icon: faMobile,
      price: '19,999',
      period: 'zł',
      description: 'Pełnowymiarowa aplikacja',
      timeframe: '10-14 tygodni',
      features: [
        { text: 'Dedykowana architektura', included: true },
        { text: 'Zaawansowany panel', included: true },
        { text: 'Multi-user system', included: true },
        { text: 'Zaawansowane API', included: true },
        { text: 'PWA (działa jak app)', included: true },
        { text: 'Nielimitowane funkcje', included: true },
        { text: 'Hosting premium (1 rok)', included: true },
        { text: 'Wsparcie 180 dni', included: true },
        { text: 'Pełna dokumentacja', included: true },
        { text: 'Integracje zewnętrzne', included: true },
        { text: 'Analytics i monitoring', included: true },
        { text: 'Szkolenie zespołu', included: true },
      ],
      popular: true,
      color: 'purple',
    },
    {
      name: 'Aplikacja Custom',
      icon: faStar,
      price: 'od 39,999',
      period: 'zł',
      description: 'Enterprise solution',
      timeframe: '16+ tygodni',
      features: [
        { text: 'Dedykowana architektura', included: true },
        { text: 'Zaawansowane funkcje AI', included: true },
        { text: 'Multi-tenant system', included: true },
        { text: 'Microservices API', included: true },
        { text: 'Native mobile apps (iOS + Android)', included: true },
        { text: 'Wszystko custom', included: true },
        { text: 'Skalowalny hosting', included: true },
        { text: 'Wsparcie 365 dni', included: true },
        { text: 'Dedykowany zespół', included: true },
        { text: 'Wszystkie integracje', included: true },
        { text: 'DevOps i monitoring', included: true },
        { text: 'Szkolenia i konsultacje', included: true },
      ],
      popular: false,
      color: 'yellow',
    },
  ],
  'ai-automatyzacja': [
    {
      name: 'Chatbot AI',
      icon: faRobot,
      price: '2,999',
      period: 'zł',
      description: 'Inteligentny asystent 24/7',
      timeframe: '2-3 tygodnie',
      features: [
        { text: 'Integracja GPT-4', included: true },
        { text: 'Dostosowanie do branży', included: true },
        { text: 'Wielojęzyczność', included: true },
        { text: 'Integracja ze stroną', included: true },
        { text: 'Panel administracyjny', included: true },
        { text: 'Podstawowe uczenie', included: true },
        { text: 'Wsparcie 60 dni', included: true },
        { text: 'Raportowanie', included: false },
      ],
      popular: true,
      color: 'blue',
    },
    {
      name: 'Automatyzacja procesów',
      icon: faBolt,
      price: '4,999',
      period: 'zł',
      description: 'Zautomatyzuj rutynowe zadania',
      timeframe: '3-5 tygodni',
      features: [
        { text: 'Analiza procesów', included: true },
        { text: 'Automatyzacja workflow', included: true },
        { text: 'Integracje API', included: true },
        { text: 'Web scraping', included: true },
        { text: 'Automatyczne raporty', included: true },
        { text: 'Email automation', included: true },
        { text: 'Wsparcie 90 dni', included: true },
        { text: 'Dokumentacja', included: true },
        { text: 'Szkolenie zespołu', included: true },
      ],
      popular: false,
      color: 'purple',
    },
    {
      name: 'AI Enterprise',
      icon: faCrown,
      price: 'od 14,999',
      period: 'zł',
      description: 'Zaawansowane rozwiązania AI',
      timeframe: '8+ tygodni',
      features: [
        { text: 'Custom AI models', included: true },
        { text: 'Machine Learning', included: true },
        { text: 'Analityka predykcyjna', included: true },
        { text: 'Computer Vision', included: true },
        { text: 'NLP i rozpoznawanie', included: true },
        { text: 'Pełna automatyzacja', included: true },
        { text: 'Wsparcie 180 dni', included: true },
        { text: 'Dedykowany zespół', included: true },
        { text: 'Ciągłe uczenie modeli', included: true },
      ],
      popular: false,
      color: 'cyan',
    },
  ],
  'marketing-seo': [
    {
      name: 'SEO Start',
      icon: faMagnifyingGlass,
      price: '999',
      period: 'zł/mies',
      description: 'Podstawowe pozycjonowanie',
      timeframe: 'Miesięcznie',
      features: [
        { text: 'Audyt SEO strony', included: true },
        { text: 'Analiza słów kluczowych', included: true },
        { text: 'Optymalizacja on-page', included: true },
        { text: 'Podstawowy link building', included: true },
        { text: 'Raportowanie miesięczne', included: true },
        { text: 'Google Analytics', included: true },
        { text: 'Do 10 fraz kluczowych', included: true },
        { text: 'Local SEO', included: false },
      ],
      popular: false,
      color: 'green',
    },
    {
      name: 'SEO Business',
      icon: faChartLine,
      price: '1,999',
      period: 'zł/mies',
      description: 'Kompleksowe pozycjonowanie',
      timeframe: 'Miesięcznie',
      features: [
        { text: 'Pełny audyt SEO', included: true },
        { text: 'Zaawansowana analiza', included: true },
        { text: 'Optymalizacja techniczna', included: true },
        { text: 'Zaawansowany link building', included: true },
        { text: 'Content marketing', included: true },
        { text: 'Local SEO', included: true },
        { text: 'Do 30 fraz kluczowych', included: true },
        { text: 'Google Search Console', included: true },
        { text: 'Konsultacje', included: true },
      ],
      popular: true,
      color: 'blue',
    },
    {
      name: 'Marketing 360°',
      icon: faBullhorn,
      price: '3,999',
      period: 'zł/mies',
      description: 'Pełen marketing internetowy',
      timeframe: 'Miesięcznie',
      features: [
        { text: 'Premium SEO', included: true },
        { text: 'Google Ads', included: true },
        { text: 'Social Media Marketing', included: true },
        { text: 'Email Marketing', included: true },
        { text: 'Content Marketing', included: true },
        { text: 'Marketing automation', included: true },
        { text: 'Analytics i raporty', included: true },
        { text: 'Strategia marketingowa', included: true },
        { text: 'Dedykowany manager', included: true },
      ],
      popular: false,
      color: 'orange',
    },
  ],
  'design': [
    {
      name: 'Logo i identyfikacja',
      icon: faPalette,
      price: '899',
      period: 'zł',
      description: 'Branding dla Twojej firmy',
      timeframe: '1-2 tygodnie',
      features: [
        { text: '3 propozycje logo', included: true },
        { text: '2 rundy poprawek', included: true },
        { text: 'Paleta kolorów', included: true },
        { text: 'Typografia', included: true },
        { text: 'Wersje wektorowe', included: true },
        { text: 'Wersje kolorowe i mono', included: true },
        { text: 'Book brandziowy', included: false },
      ],
      popular: false,
      color: 'pink',
    },
    {
      name: 'Redesign strony',
      icon: faPalette,
      price: '2,499',
      period: 'zł',
      description: 'Odśwież wygląd strony',
      timeframe: '2-3 tygodnie',
      features: [
        { text: 'Analiza obecnej strony', included: true },
        { text: 'Nowy design UI/UX', included: true },
        { text: 'Responsywny layout', included: true },
        { text: 'Mockupy i prototypy', included: true },
        { text: '2 rundy poprawek', included: true },
        { text: 'Style guide', included: true },
        { text: 'Wsparcie 30 dni', included: true },
      ],
      popular: true,
      color: 'purple',
    },
    {
      name: 'Kompleksowy branding',
      icon: faCrown,
      price: '4,999',
      period: 'zł',
      description: 'Pełna identyfikacja wizualna',
      timeframe: '4-6 tygodni',
      features: [
        { text: 'Logo + warianty', included: true },
        { text: 'Brand book', included: true },
        { text: 'Wizytówki', included: true },
        { text: 'Papier firmowy', included: true },
        { text: 'Szablony dokumentów', included: true },
        { text: 'Social media templates', included: true },
        { text: 'Prezentacje', included: true },
        { text: 'Nielimitowane poprawki', included: true },
        { text: 'Konsultacje brandingowe', included: true },
      ],
      popular: false,
      color: 'yellow',
    },
  ],
  'inne': [
    {
      name: 'Konsultacja',
      icon: faInfoCircle,
      price: '0',
      period: 'zł',
      description: 'Bezpłatna konsultacja projektu',
      timeframe: '30-60 minut',
      features: [
        { text: 'Analiza potrzeb', included: true },
        { text: 'Propozycje rozwiązań', included: true },
        { text: 'Wstępna wycena', included: true },
        { text: 'Doradztwo technologiczne', included: true },
        { text: 'Plan działania', included: true },
        { text: 'Online lub stacjonarnie', included: true },
        { text: 'Bez zobowiązań', included: true },
      ],
      popular: true,
      color: 'blue',
    },
    {
      name: 'Wsparcie techniczne',
      icon: faShieldAlt,
      price: '299',
      period: 'zł/mies',
      description: 'Opieka nad stroną',
      timeframe: 'Miesięcznie',
      features: [
        { text: 'Aktualizacje bezpieczeństwa', included: true },
        { text: 'Backup danych', included: true },
        { text: 'Monitoring działania', included: true },
        { text: 'Małe poprawki', included: true },
        { text: 'Pomoc techniczna', included: true },
        { text: 'Raport miesięczny', included: true },
        { text: 'Priorytetowe wsparcie', included: true },
      ],
      popular: false,
      color: 'green',
    },
    {
      name: 'Hosting i domena',
      icon: faDatabase,
      price: '199',
      period: 'zł/rok',
      description: 'Po pierwszym roku',
      timeframe: 'Rocznie',
      features: [
        { text: 'Domena .pl lub .com', included: true },
        { text: 'Hosting SSD', included: true },
        { text: 'SSL certyfikat', included: true },
        { text: 'Email firmowy (5 kont)', included: true },
        { text: '10GB przestrzeni', included: true },
        { text: 'Backup automatyczny', included: true },
        { text: 'Panel cPanel', included: true },
      ],
      popular: false,
      color: 'gray',
    },
  ],
};

const categories = [
  { id: 'strony-www', name: 'Strony WWW', icon: faGlobe },
  { id: 'ecommerce', name: 'Sklepy Online', icon: faShoppingCart },
  { id: 'aplikacje', name: 'Aplikacje', icon: faCode },
  { id: 'ai-automatyzacja', name: 'AI & Automatyzacja', icon: faRobot },
  { id: 'marketing-seo', name: 'Marketing & SEO', icon: faBullhorn },
  { id: 'design', name: 'Design & Branding', icon: faPalette },
  { id: 'inne', name: 'Inne Usługi', icon: faInfoCircle },
];

const faqItems = [
  {
    question: 'Czy ceny są jednorazowe czy miesięczne?',
    answer:
      'Większość cen (strony, aplikacje, design) to opłaty jednorazowe za wykonanie projektu. Usługi SEO i Marketing są rozliczane miesięcznie. Hosting po pierwszym roku to koszt 199 zł/rok.',
  },
  {
    question: 'Dlaczego wasze ceny są tak niskie?',
    answer:
      'Jesteśmy młodą agencją budującą portfolio. Oferujemy konkurencyjne ceny, aby zdobyć pierwszych klientów i pokazać jakość naszej pracy. To Twoja szansa na profesjonalną stronę w świetnej cenie!',
  },
  {
    question: 'Czy mogę zapłacić w ratach?',
    answer:
      'Tak! Dla projektów powyżej 3,000 zł oferujemy możliwość płatności w ratach (50% na start, 50% po realizacji). Dla większych projektów możemy ustalić indywidualny harmonogram płatności.',
  },
  {
    question: 'Co się dzieje po zakończeniu wsparcia?',
    answer:
      'Po darmowym wsparciu możesz wykupić abonament za 299 zł/mies. Małe zmiany wyceniamy od 150 zł, większe modyfikacje indywidualnie. Zawsze służymy pomocą!',
  },
  {
    question: 'Jak długo trwa realizacja?',
    answer:
      'Czas realizacji podany jest przy każdym pakiecie. Landing page to 5-7 dni, strona firmowa 2-3 tygodnie, sklep 3-7 tygodni, aplikacje 6-16 tygodni. Zawsze dotrzymujemy terminów!',
  },
  {
    question: 'Czy oferujecie gwarancję?',
    answer:
      'Tak! Dajemy gwarancję satysfakcji. Jeśli w ciągu 14 dni od oddania projektu nie będziesz zadowolony, zwracamy 100% pieniędzy. Dodatkowo wszystkie projekty mają gwarancję techniczną na działanie.',
  },
  {
    question: 'Co jeśli chcę coś zmienić w projekcie?',
    answer:
      'W każdym pakiecie masz określoną liczbę rund poprawek. Dodatkowe zmiany wyceniamy od 150 zł za drobną zmianę. Zawsze staramy się wyjść naprzeciw Twoim potrzebom!',
  },
  {
    question: 'Czy mogę zobaczyć wasze realizacje?',
    answer:
      'Oczywiście! Przejdź do sekcji Realizacje lub skontaktuj się z nami, a pokażemy Ci nasze portfolio i przygotujemy demo strony dla Twojej branży.',
  },
];

export default function CennikPage() {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<keyof typeof allServices>('strony-www');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
                <span className="text-white font-semibold">Cennik</span>
              </li>
            </ol>
          </motion.nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-lg shadow-blue-500/10">
                <FontAwesomeIcon icon={faChartLine} className="mr-2 animate-pulse" />
                Przejrzyste Ceny - Bez Ukrytych Kosztów
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-white mb-2">Najlepsze ceny,</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient bg-[length:200%_200%]">
                najwyższa jakość
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Konkurencyjne ceny dla startupów i małych firm.{' '}
              <span className="font-bold text-white">Profesjonalizm</span> w przystępnej cenie!
            </motion.p>

            {/* Benefits badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-bold">
                ✓ Gwarancja satysfakcji
              </div>
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
                ✓ Możliwość płatności w ratach
              </div>
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-bold">
                ✓ Bezpłatna konsultacja
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="relative py-8 bg-gradient-to-b from-black via-gray-900/50 to-gray-900 sticky top-20 z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id as keyof typeof allServices)}
                className={`px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
                whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={category.icon} className="mr-2" />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pt-24 pb-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            activeCategory === 'strony-www'
              ? 'md:grid-cols-2 xl:grid-cols-4'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {allServices[activeCategory].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${pkg.popular ? 'lg:scale-105 z-10' : ''}`}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[10px] sm:text-xs font-bold rounded-full shadow-xl">
                      <FontAwesomeIcon icon={faStar} className="w-3 h-3" />
                      NAJPOPULARNIEJSZY
                    </span>
                  </div>
                )}

                <div
                  className={`relative h-full bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border ${
                    pkg.popular ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' : 'border-white/10'
                  } rounded-3xl p-6 sm:p-8 hover:border-purple-500/50 transition-all group`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon icon={pkg.icon} className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Package name */}
                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{pkg.description}</p>

                  {/* Timeframe */}
                  <div className="mb-4 inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold">
                    <FontAwesomeIcon icon={faClock} className="mr-1" />
                    {pkg.timeframe}
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-white">{pkg.price}</span>
                      <span className="text-xl text-gray-400">{pkg.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={feature.included ? faCheck : faTimes}
                            className="w-3 h-3"
                          />
                        </div>
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-gray-300' : 'text-gray-500 line-through'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href="/kontakt?konsultacja=true"
                    className={`block w-full px-6 py-4 rounded-xl font-bold text-center transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-purple-500/50 hover:scale-105'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/20 hover:border-purple-500/50'
                    }`}
                  >
                    Wybierz pakiet
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table - for all categories */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-black mb-4">
                Porównaj <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">pakiety</span>
              </h3>
              <p className="text-gray-400">Szczegółowe porównanie funkcji wszystkich pakietów</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">Funkcja</th>
                    {allServices[activeCategory].map((pkg) => (
                      <th key={pkg.name} className="py-4 px-4 text-center min-w-[150px]">
                        <div className="font-black text-white text-base lg:text-lg mb-1">{pkg.name}</div>
                        <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                          {pkg.price} {pkg.period}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Get all unique features */}
                  {(() => {
                    const allFeatures = new Set<string>();
                    allServices[activeCategory].forEach(pkg => {
                      pkg.features.forEach(f => allFeatures.add(f.text));
                    });
                    return Array.from(allFeatures).map((featureName, idx) => (
                      <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 text-gray-300 text-sm">{featureName}</td>
                        {allServices[activeCategory].map((pkg) => {
                          const feature = pkg.features.find(f => f.text === featureName);
                          return (
                            <td key={pkg.name} className="py-4 px-4 text-center">
                              {feature ? (
                                feature.included ? (
                                  <div className="inline-flex w-6 h-6 rounded-full bg-green-500/20 items-center justify-center">
                                    <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-green-400" />
                                  </div>
                                ) : (
                                  <div className="inline-flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center">
                                    <FontAwesomeIcon icon={faTimes} className="w-3 h-3 text-red-400" />
                                  </div>
                                )
                              ) : (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ));
                  })()}
                </tbody>
                <tfoot>
                  <tr className="border-t border-white/10">
                    <td className="py-6 px-4"></td>
                    {allServices[activeCategory].map((pkg) => (
                      <td key={pkg.name} className="py-6 px-4 text-center">
                        <Link
                          href="/kontakt?konsultacja=true"
                          className={`inline-block px-4 lg:px-6 py-3 rounded-xl font-bold text-sm lg:text-base transition-all ${
                            pkg.popular
                              ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-purple-500/50 hover:scale-105'
                              : 'bg-white/5 text-white hover:bg-white/10 border border-white/20 hover:border-purple-500/50'
                          }`}
                        >
                          Wybierz
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/30 text-blue-400 text-sm font-bold backdrop-blur-xl">
                <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                Najczęściej zadawane pytania
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Masz pytania? Mamy odpowiedzi!
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold text-white pr-4">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-gray-400 rotate-90" />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: openFaq === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed">{item.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FontAwesomeIcon
              icon={faRocket}
              className="w-16 h-16 text-blue-400 mb-6 mx-auto"
            />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Gotowy na start?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Skontaktuj się z nami i otrzymaj{' '}
              <span className="font-bold text-white">
                bezpłatną konsultację
              </span>{' '}
              oraz szczegółową wycenę dopasowaną do Twojego budżetu!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt?konsultacja=true"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                Bezpłatna konsultacja
                <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+48787041328"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Zadzwoń: +48 787 041 328
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
