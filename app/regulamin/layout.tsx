import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulamin - Zasady Świadczenia Usług',
  description: '📋 Regulamin świadczenia usług Borem.pl ✓ Warunki współpracy ✓ Zasady realizacji projektów ✓ Prawa i obowiązki stron ✓ Reklamacje ✓ Postanowienia prawne',
  keywords: [
    'regulamin świadczenia usług',
    'regulamin strony internetowej',
    'warunki współpracy',
    'zasady korzystania',
    'ogc',
    'regulamin agencji',
    'warunki handlowe',
  ],
  openGraph: {
    title: 'Regulamin - Zasady Świadczenia Usług | Borem.pl',
    description: '📋 Regulamin świadczenia usług ✓ Warunki współpracy ✓ Zasady realizacji projektów',
    url: 'https://borem.pl/regulamin',
    type: 'website',
  },
  twitter: {
    title: 'Regulamin - Zasady Świadczenia Usług',
    description: '📋 Regulamin świadczenia usług ✓ Warunki współpracy',
  },
  alternates: {
    canonical: 'https://borem.pl/regulamin',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RegulaminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
