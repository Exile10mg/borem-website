import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Darmowy Audyt Strony | SEO & Performance Analyzer | BOREM',
  description: 'Sprawdź bezpłatnie co psuje Twoją stronę! Profesjonalny raport SEO, Performance i Security w 10 sekund. Powered by AI.',
  keywords: ['audyt strony', 'analiza seo', 'test wydajności strony', 'sprawdź stronę', 'seo checker', 'performance test'],
  openGraph: {
    title: 'Darmowy Audyt Strony | SEO & Performance Analyzer',
    description: 'Odkryj co psuje Twoją stronę! Bezpłatna analiza SEO, wydajności i bezpieczeństwa.',
    type: 'website',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darmowy Audyt Strony | BOREM',
    description: 'Profesjonalny raport SEO w 10 sekund. Powered by AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AnalizaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* Wyłączone komponenty: Navbar, Footer, Chat, CookieConsent, ScrollToTop */}
    </>
  );
}
