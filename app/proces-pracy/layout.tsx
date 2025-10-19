import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proces Pracy - Jak Tworzymy Strony Internetowe Krok Po Kroku',
  description: '⚙️ Sprawdź nasz proces tworzenia stron ✓ 6 kroków do sukcesu ✓ Od pomysłu do wdrożenia ✓ Transparentny proces ✓ Analiza, design, programowanie, testy, wdrożenie ✓ Wsparcie techniczne',
  keywords: [
    'proces tworzenia strony internetowej',
    'jak powstaje strona internetowa',
    'etapy tworzenia strony www',
    'metodyka pracy agencji',
    'krok po kroku strona internetowa',
    'projektowanie stron proces',
    'cykl życia projektu',
    'workflow agencji',
    'etapy realizacji strony',
    'jak tworzymy strony',
  ],
  openGraph: {
    title: 'Proces Pracy - Jak Tworzymy Strony Internetowe Krok Po Kroku | Borem.pl',
    description: '⚙️ Sprawdź nasz proces tworzenia stron ✓ 6 kroków do sukcesu ✓ Od pomysłu do wdrożenia ✓ Transparentny proces',
    url: 'https://borem.pl/proces-pracy',
    type: 'website',
  },
  twitter: {
    title: 'Proces Pracy - Jak Tworzymy Strony Internetowe Krok Po Kroku',
    description: '⚙️ Sprawdź nasz proces tworzenia stron ✓ 6 kroków do sukcesu ✓ Od pomysłu do wdrożenia',
  },
  alternates: {
    canonical: 'https://borem.pl/proces-pracy',
  },
};

export default function ProcesPracyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
