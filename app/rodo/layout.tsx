import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RODO - Informacje o Przetwarzaniu Danych Osobowych',
  description: '🛡️ Klauzula informacyjna RODO ✓ Administrator danych osobowych ✓ Cel przetwarzania danych ✓ Twoje prawa RODO ✓ Okres przechowywania danych ✓ Odbiorcy danych',
  keywords: [
    'rodo',
    'klauzula informacyjna',
    'administrator danych',
    'przetwarzanie danych osobowych',
    'prawa rodo',
    'gdpr informacje',
    'ochrona danych',
  ],
  openGraph: {
    title: 'RODO - Informacje o Przetwarzaniu Danych Osobowych | Borem.pl',
    description: '🛡️ Klauzula informacyjna RODO ✓ Administrator danych ✓ Twoje prawa RODO',
    url: 'https://borem.pl/rodo',
    type: 'website',
  },
  twitter: {
    title: 'RODO - Informacje o Przetwarzaniu Danych Osobowych',
    description: '🛡️ Klauzula informacyjna RODO ✓ Twoje prawa',
  },
  alternates: {
    canonical: 'https://borem.pl/rodo',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
