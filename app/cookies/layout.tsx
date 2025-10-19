import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka Cookies - Informacje o Plikach Cookies',
  description: '🍪 Polityka cookies Borem.pl ✓ Rodzaje plików cookies ✓ Cel wykorzystania cookies ✓ Zarządzanie cookies ✓ Zgody na cookies ✓ Google Analytics ✓ Cookies marketingowe',
  keywords: [
    'polityka cookies',
    'pliki cookies',
    'ciasteczka internetowe',
    'zgoda na cookies',
    'zarządzanie cookies',
    'google analytics cookies',
    'cookies marketingowe',
    'cookies funkcjonalne',
  ],
  openGraph: {
    title: 'Polityka Cookies - Informacje o Plikach Cookies | Borem.pl',
    description: '🍪 Polityka cookies ✓ Rodzaje plików cookies ✓ Zarządzanie cookies',
    url: 'https://borem.pl/cookies',
    type: 'website',
  },
  twitter: {
    title: 'Polityka Cookies - Informacje o Plikach Cookies',
    description: '🍪 Polityka cookies ✓ Zarządzanie cookies',
  },
  alternates: {
    canonical: 'https://borem.pl/cookies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
