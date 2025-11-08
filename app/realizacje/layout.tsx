import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realizacje - Portfolio Stron Internetowych i Sklepów E-commerce',
  description: '🎯 Zobacz nasze realizacje ✓ 150+ ukończonych projektów ✓ Strony internetowe ✓ Sklepy e-commerce ✓ Aplikacje webowe ✓ Sprawdź wyniki kampanii Google Ads i SEO ✓ Case studies',
  keywords: [
    'portfolio stron internetowych',
    'realizacje stron www',
    'przykłady stron internetowych',
    'nasze projekty',
    'portfolio agencji interaktywnej',
    'zrealizowane strony',
    'case study strony internetowej',
    'przykłady sklepów internetowych',
    'portfolio e-commerce',
    'strony internetowe portfolio',
    'aplikacje webowe przykłady',
    'kampanie google ads wyniki',
    'wyniki pozycjonowania seo',
    'skuteczność kampanii reklamowych',
  ],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Realizacje - Portfolio Stron Internetowych i Sklepów E-commerce | Borem.pl',
    description: '🎯 Zobacz nasze realizacje ✓ 150+ ukończonych projektów ✓ Strony internetowe ✓ Sklepy e-commerce ✓ Sprawdź wyniki kampanii',
    url: 'https://borem.pl/realizacje',
    type: 'website',
  },
  twitter: {
    title: 'Realizacje - Portfolio Stron Internetowych i Sklepów E-commerce',
    description: '🎯 Zobacz nasze realizacje ✓ 150+ ukończonych projektów ✓ Sprawdź wyniki kampanii Google Ads i SEO',
  },
  alternates: {
    canonical: 'https://borem.pl/realizacje',
  },
};

export default function RealizacjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
