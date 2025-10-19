import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cennik - Ceny Stron Internetowych i Sklepów Online 2025',
  description: '💰 Sprawdź ceny tworzenia stron internetowych ✓ Strony WWW od 1299 zł ✓ Sklepy e-commerce od 4999 zł ✓ Aplikacje webowe od 9999 zł ✓ Możliwość płatności w ratach ✓ Bezpłatna konsultacja',
  keywords: [
    'cennik stron internetowych',
    'ile kosztuje strona internetowa',
    'ceny stron www',
    'koszt strony internetowej',
    'cennik sklepu internetowego',
    'ceny tworzenia stron',
    'tanie strony internetowe',
    'strona firmowa cennik',
    'landing page cena',
    'sklep internetowy koszt',
    'aplikacja webowa cennik',
    'tworzenie stron www ceny',
    'ile kosztuje sklep internetowy',
    'ceny stron responsywnych',
    'strona internetowa na raty',
  ],
  openGraph: {
    title: 'Cennik - Ceny Stron Internetowych i Sklepów Online 2025 | Borem.pl',
    description: '💰 Sprawdź ceny tworzenia stron internetowych ✓ Strony WWW od 1299 zł ✓ Sklepy e-commerce od 4999 zł ✓ Możliwość płatności w ratach',
    url: 'https://borem.pl/cennik',
    type: 'website',
  },
  twitter: {
    title: 'Cennik - Ceny Stron Internetowych i Sklepów Online 2025',
    description: '💰 Sprawdź ceny tworzenia stron internetowych ✓ Strony WWW od 1299 zł ✓ Sklepy e-commerce od 4999 zł',
  },
  alternates: {
    canonical: 'https://borem.pl/cennik',
  },
};

export default function CennikLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
