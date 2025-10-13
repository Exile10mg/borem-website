import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fontawesome";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import CookieConsent from '@/components/CookieConsent';
import PageLoader from '@/components/PageLoader';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import WhatsAppButton from '@/components/WhatsAppButton';
import GoogleAnalytics from '@/components/GoogleAnalytics';

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://borem.pl'),
  title: {
    default: "Borem.pl - Profesjonalne strony WWW i aplikacje webowe",
    template: "%s | Borem.pl"
  },
  description: "Tworzymy nowoczesne strony WWW, sklepy e-commerce, aplikacje webowe. Specjalizujemy się w AI, automatyzacji, marketingu i SEO.",
  keywords: ["strony www", "e-commerce", "aplikacje webowe", "AI", "automatyzacja", "SEO", "marketing", "agencja interaktywna", "tworzenie stron", "sklepy online"],
  authors: [{ name: "Borem.pl" }],
  creator: "Borem.pl",
  publisher: "Borem.pl",
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://borem.pl',
    title: 'Borem.pl - Profesjonalne strony WWW i aplikacje webowe',
    description: 'Tworzymy nowoczesne strony WWW, sklepy e-commerce, aplikacje webowe. Specjalizujemy się w AI, automatyzacji, marketingu i SEO.',
    siteName: 'Borem.pl',
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
    title: 'Borem.pl - Profesjonalne strony WWW i aplikacje webowe',
    description: 'Tworzymy nowoczesne strony WWW, sklepy e-commerce, aplikacje webowe. Specjalizujemy się w AI, automatyzacji, marketingu i SEO.',
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
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <PageLoader />
        {children}
        <WhatsAppButton />
        <ScrollToTopButton />
        <CookieConsent />
      </body>
    </html>
  );
}
