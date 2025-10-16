import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import PageLoader from '@/components/PageLoader';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import StructuredData from '@/components/StructuredData';
import MicrosoftClarity from '@/components/MicrosoftClarity';
import ConditionalComponents from '@/components/ConditionalComponents';

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://borem.pl'),
  title: {
    default: "Borem.pl - Tworzenie Stron WWW, Sklepy E-commerce | Agencja Marketingowa",
    template: "%s | Borem.pl - Agencja Marketingowa"
  },
  description: "★ Profesjonalna agencja marketingowa ★ Tworzymy strony WWW, sklepy e-commerce, aplikacje webowe ✓ AI i automatyzacja ✓ Marketing i SEO ✓ 150+ projektów ✓ Bezpłatna konsultacja",
  keywords: [
    // Główne usługi
    "tworzenie stron internetowych",
    "strony www",
    "projektowanie stron www",
    "strony internetowe dla firm",
    "tanie strony internetowe",
    "responsywne strony www",
    
    // E-commerce
    "sklep internetowy",
    "e-commerce",
    "sklepy online",
    "tworzenie sklepów internetowych",
    "platforma e-commerce",
    
    // Aplikacje
    "aplikacje webowe",
    "systemy webowe",
    "aplikacje internetowe",
    "panele administracyjne",
    "crm",
    "erp",
    
    // AI i automatyzacja
    "sztuczna inteligencja",
    "ai dla biznesu",
    "automatyzacja procesów",
    "chatboty",
    "integracje api",
    
    // Marketing
    "agencja marketingowa",
    "marketing internetowy",
    "pozycjonowanie stron",
    "seo",
    "google ads",
    "kampanie reklamowe",
    "content marketing",
    
    // Technologie
    "react",
    "next.js",
    "wordpress",
    "webflow",
    
    // Lokalizacja
    "agencja interaktywna polska",
    "tworzenie stron www polska",
    
    // Dodatkowe
    "strona wizytówka",
    "landing page",
    "redesign strony",
    "optymalizacja strony"
  ],
  authors: [{ name: "Borem.pl" }],
  creator: "Borem.pl",
  publisher: "Borem.pl",
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://borem.pl',
    title: 'Borem.pl - Tworzenie Stron WWW, Sklepy E-commerce | Agencja Marketingowa',
    description: '★ Profesjonalna agencja marketingowa ★ Tworzymy strony WWW, sklepy e-commerce, aplikacje webowe ✓ AI i automatyzacja ✓ Marketing i SEO ✓ 150+ projektów',
    siteName: 'Borem.pl - Agencja Marketingowa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Borem.pl - Agencja Marketingowa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borem.pl - Tworzenie Stron WWW, Sklepy E-commerce | Agencja Marketingowa',
    description: '★ Profesjonalna agencja marketingowa ★ Tworzymy strony WWW, sklepy e-commerce, aplikacje webowe ✓ 150+ projektów ✓ Bezpłatna konsultacja',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://borem.pl',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Borem.pl',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />

        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* Preload critical font to avoid LCP delay */}
        <link
          rel="preload"
          href="/_next/static/media/8e9860b6e62d6359-s.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <MicrosoftClarity />
        <StructuredData />
        <PageLoader />
        {children}
        <ConditionalComponents />
      </body>
    </html>
  );
}
