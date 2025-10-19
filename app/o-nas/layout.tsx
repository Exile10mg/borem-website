import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Nas - Profesjonalna Agencja Marketingowa i Interaktywna',
  description: '👥 Poznaj nasz zespół ✓ 5+ lat doświadczenia ✓ 150+ zrealizowanych projektów ✓ 99% zadowolonych klientów ✓ Specjaliści od stron WWW, e-commerce i marketingu ✓ Nasza historia i wartości',
  keywords: [
    'o nas agencja interaktywna',
    'o firmie tworzenie stron',
    'zespół agencji marketingowej',
    'agencja interaktywna historia',
    'kto tworzy strony internetowe',
    'doświadczenie w tworzeniu stron',
    'profesjonalna agencja',
    'wartości agencji',
    'misja agencji marketingowej',
    'nasz zespół programistów',
    'agencja z lublin',
  ],
  openGraph: {
    title: 'O Nas - Profesjonalna Agencja Marketingowa i Interaktywna | Borem.pl',
    description: '👥 Poznaj nasz zespół ✓ 5+ lat doświadczenia ✓ 150+ zrealizowanych projektów ✓ 99% zadowolonych klientów',
    url: 'https://borem.pl/o-nas',
    type: 'website',
  },
  twitter: {
    title: 'O Nas - Profesjonalna Agencja Marketingowa i Interaktywna',
    description: '👥 Poznaj nasz zespół ✓ 5+ lat doświadczenia ✓ 150+ zrealizowanych projektów',
  },
  alternates: {
    canonical: 'https://borem.pl/o-nas',
  },
};

export default function ONasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
