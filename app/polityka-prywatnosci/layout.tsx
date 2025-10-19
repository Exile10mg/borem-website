import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka Prywatności - Ochrona Danych Osobowych RODO',
  description: '🔒 Polityka prywatności Borem.pl ✓ Ochrona danych osobowych zgodnie z RODO ✓ Bezpieczeństwo Twoich danych ✓ Prawa użytkownika ✓ Przetwarzanie danych ✓ Cookies',
  keywords: [
    'polityka prywatności',
    'ochrona danych osobowych',
    'rodo',
    'przetwarzanie danych',
    'bezpieczeństwo danych',
    'prawa użytkownika rodo',
    'gdpr',
    'polityka cookies',
    'administrator danych',
  ],
  openGraph: {
    title: 'Polityka Prywatności - Ochrona Danych Osobowych RODO | Borem.pl',
    description: '🔒 Polityka prywatności ✓ Ochrona danych osobowych zgodnie z RODO ✓ Bezpieczeństwo Twoich danych',
    url: 'https://borem.pl/polityka-prywatnosci',
    type: 'website',
  },
  twitter: {
    title: 'Polityka Prywatności - Ochrona Danych Osobowych RODO',
    description: '🔒 Polityka prywatności ✓ Ochrona danych zgodnie z RODO',
  },
  alternates: {
    canonical: 'https://borem.pl/polityka-prywatnosci',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitykaPrywatnosciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
