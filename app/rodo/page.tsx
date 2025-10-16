'use client';

import { useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faShieldAlt, faUserShield, faKey, faFileAlt, faExclamationCircle, faCheckCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const sections = [
  {
    title: 'Informacje o RODO',
    icon: faShieldAlt,
    content: [
      'RODO (Rozporządzenie o Ochronie Danych Osobowych) to ogólnounijne rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych.',
      '',
      'Rozporządzenie RODO obowiązuje od 25 maja 2018 roku we wszystkich krajach Unii Europejskiej i ma na celu:',
      '   • Wzmocnienie ochrony danych osobowych obywateli UE',
      '   • Ujednolicenie przepisów o ochronie danych w całej Unii Europejskiej',
      '   • Zwiększenie kontroli osób nad swoimi danymi osobowymi',
      '   • Zapewnienie odpowiedzialności administratorów danych',
      '',
      'RODO zastąpiło wcześniejszą Dyrektywę 95/46/WE i wprowadziło szereg nowych praw dla osób, których dane dotyczą, oraz obowiązków dla administratorów i procesorów danych.',
    ]
  },
  {
    title: 'Administrator danych osobowych',
    icon: faUserShield,
    content: [
      'Administratorem Twoich danych osobowych w rozumieniu RODO jest:',
      '',
      '📋 DANE ADMINISTRATORA:',
      '   • Nazwa: Borem Michał Boryń',
      '   • Forma prawna: działalność gospodarcza',
      '   • Adres: ul. Różana 28/66, 20-538 Lublin',
      '   • NIP: 7123429572',
      '   • REGON: 520995990',
      '',
      '📧 KONTAKT W SPRAWACH RODO:',
      '   • E-mail: kontakt@borem.pl',
      '   • Telefon: +48 787 041 328',
      '   • Formularz kontaktowy na stronie',
      '',
      'Administrator przetwarza dane osobowe zgodnie z wymogami RODO oraz polskimi przepisami o ochronie danych osobowych.',
      '',
      'INSPEKTOR OCHRONY DANYCH (IOD):',
      'Ze względu na charakter i zakres działalności Administrator nie powołał Inspektora Ochrony Danych. W sprawach dotyczących ochrony danych osobowych prosimy o kontakt bezpośrednio z Administratorem.',
    ]
  },
  {
    title: 'Twoje prawa wynikające z RODO',
    icon: faKey,
    content: [
      'Zgodnie z RODO przysługuje Ci szereg praw w zakresie ochrony danych osobowych:',
      '',
      '1. PRAWO DOSTĘPU DO DANYCH (art. 15 RODO):',
      '   • Możesz uzyskać potwierdzenie, czy przetwarzamy Twoje dane',
      '   • Masz prawo do otrzymania kopii swoich danych',
      '   • Możesz zapytać o cele, podstawy prawne i okres przetwarzania',
      '   • Możesz uzyskać informacje o odbiorcach danych',
      '   Sposób realizacji: wysłanie żądania na kontakt@borem.pl',
      '   Termin: 30 dni (możliwość przedłużenia do 90 dni)',
      '',
      '2. PRAWO DO SPROSTOWANIA (art. 16 RODO):',
      '   • Możesz żądać poprawienia nieprawidłowych danych',
      '   • Możesz uzupełnić niekompletne dane',
      '   Sposób realizacji: przesłanie poprawnych danych na kontakt@borem.pl',
      '   Termin: niezwłocznie, nie dłużej niż 30 dni',
      '',
      '3. PRAWO DO USUNIĘCIA - "prawo do bycia zapomnianym" (art. 17 RODO):',
      '   • Możesz żądać usunięcia danych, gdy:',
      '     - dane nie są już niezbędne',
      '     - wycofałeś zgodę na przetwarzanie',
      '     - wniósłeś sprzeciw wobec przetwarzania',
      '     - dane przetwarzane są niezgodnie z prawem',
      '   Ograniczenia: nie możemy usunąć danych, jeśli są niezbędne np. do wypełnienia obowiązków prawnych',
      '   Sposób realizacji: przesłanie żądania na kontakt@borem.pl',
      '',
      '4. PRAWO DO OGRANICZENIA PRZETWARZANIA (art. 18 RODO):',
      '   • Możesz żądać ograniczenia przetwarzania, gdy:',
      '     - kwestionujesz prawidłowość danych',
      '     - przetwarzanie jest niezgodne z prawem',
      '     - potrzebujesz danych do ustalenia, dochodzenia lub obrony roszczeń',
      '     - wniosłeś sprzeciw wobec przetwarzania',
      '   Skutek: dane będą tylko przechowywane, ale nie przetwarzane',
      '',
      '5. PRAWO DO PRZENOSZENIA DANYCH (art. 20 RODO):',
      '   • Możesz otrzymać dane w formacie ustrukturyzowanym (np. CSV, JSON)',
      '   • Możesz przesłać dane innemu administratorowi',
      '   • Dotyczy danych przetwarzanych na podstawie zgody lub umowy',
      '',
      '6. PRAWO DO SPRZECIWU (art. 21 RODO):',
      '   • Możesz wnieść sprzeciw wobec przetwarzania danych:',
      '     - ze względu na szczególną sytuację',
      '     - w celach marketingu bezpośredniego (bezwarunkowy sprzeciw)',
      '   Skutek: zaprzestaniemy przetwarzania danych (z wyjątkiem szczególnych przypadków)',
      '',
      '7. PRAWO DO COFNIĘCIA ZGODY (art. 7 ust. 3 RODO):',
      '   • Możesz w każdej chwili cofnąć zgodę na przetwarzanie danych',
      '   • Cofnięcie zgody nie wpływa na legalność przetwarzania przed jej cofnięciem',
      '   Sposób realizacji: e-mail, telefon, formularz kontaktowy',
      '',
      '8. PRAWO DO WNIESIENIA SKARGI (art. 77 RODO):',
      '   • Masz prawo złożyć skargę do organu nadzorczego:',
      '   📍 Prezes Urzędu Ochrony Danych Osobowych (PUODO)',
      '   📮 ul. Stawki 2, 00-193 Warszawa',
      '   📞 Tel: +48 22 531 03 00',
      '   📧 E-mail: kancelaria@uodo.gov.pl',
      '   🌐 www.uodo.gov.pl',
    ]
  },
  {
    title: 'Podstawy prawne przetwarzania danych',
    icon: faFileAlt,
    content: [
      'Twoje dane osobowe przetwarzamy wyłącznie na podstawie przesłanek określonych w art. 6 RODO:',
      '',
      '1. ZGODA (art. 6 ust. 1 lit. a RODO):',
      '   • Przetwarzanie odbywa się na podstawie Twojej dobrowolnej zgody',
      '   • Zgoda musi być świadoma, konkretna i jednoznaczna',
      '   • Możesz ją w każdej chwili cofnąć',
      '   Przykłady: newsletter, marketing bezpośredni, cookies marketingowe',
      '',
      '2. WYKONANIE UMOWY (art. 6 ust. 1 lit. b RODO):',
      '   • Przetwarzanie jest niezbędne do zawarcia lub wykonania umowy',
      '   • Bez tych danych nie możemy świadczyć usług',
      '   Przykłady: realizacja zamówienia, świadczenie usług, kontakt w sprawie projektu',
      '',
      '3. OBOWIĄZEK PRAWNY (art. 6 ust. 1 lit. c RODO):',
      '   • Przetwarzanie wynika z obowiązku prawnego ciążącego na Administratorze',
      '   Przykłady: przechowywanie faktur (obowiązek podatkowy), archiwizacja dokumentacji księgowej',
      '',
      '4. PRAWNIE UZASADNIONY INTERES (art. 6 ust. 1 lit. f RODO):',
      '   • Przetwarzanie jest niezbędne dla realizacji prawnie uzasadnionych interesów Administratora',
      '   • Administrator dokonał oceny, że jego interes przeważa nad prawami osoby',
      '   • Masz prawo wnieść sprzeciw wobec takiego przetwarzania',
      '   Przykłady: marketing bezpośredni własnych produktów, zapewnienie bezpieczeństwa IT, dochodzenie roszczeń',
      '',
      '5. INTERES PUBLICZNY (art. 6 ust. 1 lit. e RODO):',
      '   • Przetwarzanie niezbędne do wykonania zadania realizowanego w interesie publicznym',
      '   Uwaga: Administrator zwykle nie przetwarza danych na tej podstawie',
      '',
      '6. INTERES ŻYCIOWY (art. 6 ust. 1 lit. d RODO):',
      '   • Przetwarzanie niezbędne do ochrony żywotnych interesów osoby',
      '   Uwaga: Administrator zwykle nie przetwarza danych na tej podstawie',
    ]
  },
  {
    title: 'Bezpieczeństwo danych - środki ochrony',
    icon: faCheckCircle,
    content: [
      'Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo danych zgodnie z art. 32 RODO:',
      '',
      '1. ŚRODKI TECHNICZNE:',
      '   ✅ Szyfrowanie danych - SSL/TLS (certyfikat HTTPS)',
      '   ✅ Szyfrowanie baz danych',
      '   ✅ Firewall i systemy IDS/IPS',
      '   ✅ Regularne aktualizacje oprogramowania',
      '   ✅ Ochrona przed atakami DDoS',
      '   ✅ Zabezpieczenia antywirusowe i antimalware',
      '   ✅ Bezpieczne kopie zapasowe (backup)',
      '   ✅ Monitoring bezpieczeństwa 24/7',
      '   ✅ Pseudonimizacja danych (tam gdzie to możliwe)',
      '',
      '2. ŚRODKI ORGANIZACYJNE:',
      '   ✅ Polityka bezpieczeństwa informacji',
      '   ✅ Ograniczony dostęp do danych (need-to-know)',
      '   ✅ Umowy o zachowaniu poufności (NDA)',
      '   ✅ Szkolenia pracowników z zakresu RODO',
      '   ✅ Procedury reagowania na incydenty',
      '   ✅ Regularne audyty bezpieczeństwa',
      '   ✅ Ocena skutków dla ochrony danych (DPIA - jeśli wymagana)',
      '   ✅ Rejestr czynności przetwarzania',
      '',
      '3. PROCEDURY W PRZYPADKU NARUSZENIA DANYCH:',
      '   • Niezwłoczne podjęcie działań naprawczych',
      '   • Zgłoszenie do PUODO w ciągu 72 godzin (jeśli zachodzi ryzyko)',
      '   • Powiadomienie osób, których dane dotyczą (jeśli zachodzi wysokie ryzyko)',
      '   • Dokumentowanie incydentu',
      '   • Analiza przyczyn i wdrożenie działań prewencyjnych',
      '',
      '4. KOPIE ZAPASOWE:',
      '   • Regularne wykonywanie kopii zapasowych',
      '   • Przechowywanie w bezpiecznych lokalizacjach',
      '   • Szyfrowanie kopii zapasowych',
      '   • Testowanie procedur odzyskiwania danych',
    ]
  },
  {
    title: 'Naruszenie ochrony danych osobowych',
    icon: faExclamationCircle,
    content: [
      'W przypadku naruszenia ochrony danych osobowych (tzw. data breach) Administrator postępuje zgodnie z art. 33 i 34 RODO:',
      '',
      '1. CO TO JEST NARUSZENIE OCHRONY DANYCH:',
      'Naruszenie ochrony danych osobowych oznacza przypadkowe lub niezgodne z prawem:',
      '   • Zniszczenie danych',
      '   • Utratę danych',
      '   • Modyfikację danych',
      '   • Nieuprawnione ujawnienie danych',
      '   • Nieuprawniony dostęp do danych',
      '',
      '2. OBOWIĄZKI ADMINISTRATORA:',
      '',
      'A) ZGŁOSZENIE DO PUODO (art. 33 RODO):',
      '   • Termin: w ciągu 72 godzin od stwierdzenia naruszenia',
      '   • Dotyczy: naruszeń stwarzających ryzyko dla praw i wolności osób',
      '   • Treść zgłoszenia:',
      '     - Opis charakteru naruszenia',
      '     - Kategorie i liczba osób, których dane dotyczą',
      '     - Prawdopodobne konsekwencje naruszenia',
      '     - Środki zaradcze podjęte przez Administratora',
      '',
      'B) POWIADOMIENIE OSÓB, KTÓRYCH DANE DOTYCZĄ (art. 34 RODO):',
      '   • Termin: bez zbędnej zwłoki',
      '   • Dotyczy: naruszeń stwarzających wysokie ryzyko',
      '   • Forma: indywidualne powiadomienie (e-mail, SMS, telefon)',
      '   • Treść:',
      '     - Opis charakteru naruszenia',
      '     - Dane kontaktowe osoby odpowiedzialnej',
      '     - Prawdopodobne konsekwencje',
      '     - Zalecane środki zaradcze',
      '',
      '3. WYJĄTKI OD OBOWIĄZKU POWIADAMIANIA:',
      'Nie powiadamiamy osób, jeśli:',
      '   • Zastosowano odpowiednie zabezpieczenia (np. szyfrowanie)',
      '   • Podjęto działania zmniejszające ryzyko',
      '   • Powiadomienie wymagałoby niewspółmiernie dużego wysiłku (wtedy: publiczne ogłoszenie)',
      '',
      '4. PRZYKŁADY NARUSZEŃ:',
      '   • Wyciek danych w wyniku ataku hakerskiego',
      '   • Utrata nieszyfrowanego laptopa z danymi',
      '   • Przypadkowe wysłanie danych na niewłaściwy adres e-mail',
      '   • Nieuprawniony dostęp pracownika do danych',
      '   • Atak ransomware szyfrujący dane',
    ]
  },
  {
    title: 'Kontakt w sprawach RODO',
    icon: faEnvelope,
    content: [
      'W sprawach dotyczących ochrony danych osobowych oraz realizacji praw wynikających z RODO prosimy o kontakt:',
      '',
      '📧 E-MAIL:',
      '   kontakt@borem.pl',
      '   (preferowana forma kontaktu dla żądań RODO)',
      '',
      '📞 TELEFON:',
      '   +48 787 041 328',
      '   (poniedziałek - piątek, 9:00 - 17:00)',
      '',
      '📮 ADRES KORESPONDENCYJNY:',
      '   Borem Michał Boryń',
      '   ul. Różana 28/66',
      '   20-538 Lublin',
      '   (z dopiskiem "RODO")',
      '',
      '💬 FORMULARZ KONTAKTOWY:',
      '   Dostępny na stronie: www.borem.pl/kontakt',
      '',
      '⏱️ CZAS ODPOWIEDZI:',
      '   • Standardowo: 30 dni od otrzymania żądania',
      '   • W uzasadnionych przypadkach: przedłużenie do 90 dni',
      '   • O przedłużeniu zostaniesz poinformowany w ciągu 30 dni',
      '',
      '📋 WYMAGANE INFORMACJE W ŻĄDANIU:',
      'Aby przyspieszyć rozpatrzenie żądania, prosimy o podanie:',
      '   • Imienia i nazwiska',
      '   • Adresu e-mail lub nr telefonu',
      '   • Opisu żądania (jakie prawo chcesz zrealizować)',
      '   • Danych identyfikujących (aby potwierdzić tożsamość)',
      '',
      '🔐 WERYFIKACJA TOŻSAMOŚCI:',
      'W przypadku wątpliwości co do tożsamości osoby składającej żądanie możemy poprosić o dodatkowe informacje w celu weryfikacji.',
      '',
      '💰 OPŁATY:',
      '   • Realizacja praw RODO jest bezpłatna',
      '   • W przypadku żądań oczywiście bezzasadnych lub nadmiernych możemy naliczyć opłatę lub odmówić realizacji',
    ]
  },
];

export default function RODOPage() {
  useEffect(() => {
    document.title = 'RODO | Borem.pl - Agencja Marketingowa';
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-black" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
                  <span>Strona główna</span>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3 text-gray-600" />
              </li>
              <li className="text-white font-semibold">RODO</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
              <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Informacje{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                RODO
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Wszystko co musisz wiedzieć o ochronie danych osobowych i Twoich prawach wynikających z RODO
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className="relative"
              >
                {/* Section Header - Centered */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-4">
                    <FontAwesomeIcon icon={section.icon} className="w-7 h-7 text-blue-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>

                {/* Content - Left Aligned in Centered Container */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="space-y-4 text-left">
                    {section.content.map((paragraph, idx) => {
                      // Empty line
                      if (paragraph === '') {
                        return <div key={idx} className="h-2" />;
                      }
                      // Check if it's a numbered section header (starts with number and period)
                      if (/^\d+\.\s+[A-ZŻŹĆĄŚĘŁÓŃ]/.test(paragraph)) {
                        return (
                          <h3 key={idx} className="text-lg sm:text-xl font-bold text-white mt-6 mb-3">
                            {paragraph}
                          </h3>
                        );
                      }
                      // Check if it's a lettered subsection (A), B), etc)
                      if (/^[A-Z]\)\s+/.test(paragraph)) {
                        return (
                          <h4 key={idx} className="text-base sm:text-lg font-semibold text-blue-400 mt-4 mb-2">
                            {paragraph}
                          </h4>
                        );
                      }
                      // Check if starts with emoji or special marker
                      if (/^[📋📧📞📮💬⏱️📍🔐💰✅🌐]/.test(paragraph)) {
                        return (
                          <h4 key={idx} className="text-base sm:text-lg font-semibold text-purple-400 mt-4 mb-2">
                            {paragraph}
                          </h4>
                        );
                      }
                      // Regular paragraph
                      return (
                        <p key={idx} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                {index < sections.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mt-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div className="text-center">
              <FontAwesomeIcon icon={faUserShield} className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Twoje prawa są chronione</h3>
              <p className="text-gray-300 leading-relaxed">
                Zgodnie z RODO masz pełne prawo kontroli nad swoimi danymi osobowymi. <strong>Borem Michał Boryń</strong> jako
                Administrator danych dokłada wszelkich starań, aby zapewnić najwyższy poziom ochrony Twoich danych osobowych.
                Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo, integralność i poufność danych.
                W razie jakichkolwiek pytań lub wątpliwości dotyczących ochrony danych osobowych, jesteśmy do Twojej dyspozycji.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Pytania o RODO? Skontaktuj się z nami:
                </p>
                <a href="mailto:kontakt@borem.pl" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                  kontakt@borem.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
