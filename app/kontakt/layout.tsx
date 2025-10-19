import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Agencja Marketingowa | Bezpłatna Konsultacja',
  description: '📞 Skontaktuj się z nami ✓ Bezpłatna konsultacja ✓ Odpowiadamy w ciągu 24h ✓ Tel: +48 787 041 328 ✓ Email: kontakt@borem.pl ✓ Lublin, ul. Różana 28/66 ✓ Wypełnij formularz kontaktowy',
  keywords: [
    'kontakt agencja interaktywna',
    'kontakt tworzenie stron www',
    'bezpłatna konsultacja strony internetowej',
    'formularz kontaktowy',
    'wycena strony internetowej',
    'konsultacja strony www',
    'kontakt agencja marketingowa',
    'agencja interaktywna lublin',
    'telefon agencja marketingowa',
    'email agencja',
    'strony internetowe lublin kontakt',
  ],
  openGraph: {
    title: 'Kontakt - Agencja Marketingowa | Bezpłatna Konsultacja | Borem.pl',
    description: '📞 Skontaktuj się z nami ✓ Bezpłatna konsultacja ✓ Tel: +48 787 041 328 ✓ Email: kontakt@borem.pl',
    url: 'https://borem.pl/kontakt',
    type: 'website',
  },
  twitter: {
    title: 'Kontakt - Agencja Marketingowa | Bezpłatna Konsultacja',
    description: '📞 Skontaktuj się z nami ✓ Bezpłatna konsultacja ✓ Tel: +48 787 041 328',
  },
  alternates: {
    canonical: 'https://borem.pl/kontakt',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
