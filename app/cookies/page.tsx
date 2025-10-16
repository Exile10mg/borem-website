'use client';

import { useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faCookie, faCog, faChartLine, faBullhorn, faShieldAlt, faToggleOn, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const sections = [
  {
    title: 'Czym są pliki cookies?',
    icon: faInfoCircle,
    content: [
      'Pliki cookies (ciasteczka) to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu (komputerze, tablecie, smartfonie) podczas przeglądania stron internetowych.',
      '',
      'PODSTAWOWE INFORMACJE:',
      '   • Cookies zawierają informacje w postaci tekstu',
      '   • Są zapisywane przez przeglądarkę internetową',
      '   • Pozwalają stronie "zapamiętać" Twoje preferencje i działania',
      '   • Nie zawierają wirusów ani złośliwego oprogramowania',
      '   • Nie mogą uzyskać dostępu do Twoich plików',
      '   • Nie mogą się samodzielnie uruchamiać',
      '',
      'JAK DZIAŁAJĄ COOKIES:',
      '1. Odwiedzasz stronę internetową',
      '2. Strona wysyła do przeglądarki plik cookie',
      '3. Przeglądarka zapisuje cookie na Twoim urządzeniu',
      '4. Przy kolejnych wizytach przeglądarka odsyła cookie do strony',
      '5. Strona rozpoznaje Cię i może dostosować treści',
    ]
  },
  {
    title: 'Rodzaje cookies na naszej stronie',
    icon: faCookie,
    content: [
      'Na stronie Borem.pl wykorzystujemy różne rodzaje plików cookies:',
      '',
      '1. COOKIES NIEZBĘDNE (TECHNICZNE)',
      '   🔹 Typ: First-party cookies',
      '   🔹 Czas przechowywania: sesja lub do 24 miesięcy',
      '   🔹 Cel: zapewnienie podstawowego działania strony',
      '   🔹 Zgoda: nie wymagana (niezbędne do świadczenia usługi)',
      '',
      '   Przykłady:',
      '   • Identyfikator sesji użytkownika',
      '   • Zapamiętanie zgody na cookies',
      '   • Token CSRF (zabezpieczenie formularzy)',
      '   • Ustawienia bezpieczeństwa',
      '',
      '   ✅ Te cookies są konieczne i nie można ich wyłączyć',
      '',
      '2. COOKIES FUNKCJONALNE',
      '   🔹 Typ: First-party cookies',
      '   🔹 Czas przechowywania: do 12 miesięcy',
      '   🔹 Cel: zapamiętywanie preferencji użytkownika',
      '   🔹 Zgoda: wymagana',
      '',
      '   Przykłady:',
      '   • Wybrany język interfejsu',
      '   • Ustawienia regionalne',
      '   • Preferowana waluta',
      '   • Rozmiar czcionki',
      '',
      '   ⚙️ Możesz je wyłączyć, ale część funkcji strony może nie działać',
      '',
      '3. COOKIES ANALITYCZNE (STATYSTYCZNE)',
      '   🔹 Typ: Third-party cookies (Google Analytics)',
      '   🔹 Czas przechowywania: do 26 miesięcy',
      '   🔹 Cel: analiza ruchu i zachowań użytkowników',
      '   🔹 Zgoda: wymagana',
      '',
      '   Zbierane dane:',
      '   • Odwiedzone strony',
      '   • Czas spędzony na stronie',
      '   • Źródło ruchu (skąd przyszedłeś)',
      '   • Przeglądarka i system operacyjny',
      '   • Urządzenie i rozdzielczość ekranu',
      '   • Interakcje na stronie (kliknięcia, scrolling)',
      '',
      '   Wykorzystywane narzędzia:',
      '   • Google Analytics 4 (GA4)',
      '   • Google Tag Manager',
      '',
      '   📊 Dane są anonimizowane i wykorzystywane do optymalizacji strony',
      '',
      '4. COOKIES MARKETINGOWE (REKLAMOWE)',
      '   🔹 Typ: Third-party cookies',
      '   🔹 Czas przechowywania: do 24 miesięcy',
      '   🔹 Cel: personalizacja reklam i remarketing',
      '   🔹 Zgoda: wymagana',
      '',
      '   Zbierane dane:',
      '   • Historia przeglądania',
      '   • Zainteresowania i preferencje',
      '   • Interakcje z reklamami',
      '   • Konwersje i cele',
      '',
      '   Wykorzystywane narzędzia:',
      '   • Google Ads (remarketing)',
      '   • Facebook Pixel',
      '   • LinkedIn Insight Tag',
      '   • TikTok Pixel (jeśli dotyczy)',
      '',
      '   🎯 Te cookies pozwalają wyświetlać Ci spersonalizowane reklamy',
    ]
  },
  {
    title: 'Zarządzanie cookies',
    icon: faCog,
    content: [
      'Masz pełną kontrolę nad plikami cookies. Możesz zarządzać nimi na kilka sposobów:',
      '',
      '1. USTAWIENIA NA NASZEJ STRONIE:',
      '   • Kliknij ikonę "Ustawienia cookies" w lewym dolnym rogu',
      '   • Wybierz, które kategorie cookies akceptujesz',
      '   • Zapisz swoje preferencje',
      '   • Możesz zmienić ustawienia w dowolnym momencie',
      '',
      '2. USTAWIENIA PRZEGLĄDARKI:',
      '',
      '🌐 GOOGLE CHROME:',
      '   1. Menu (⋮) → Ustawienia',
      '   2. Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn',
      '   3. Wybierz odpowiednią opcję:',
      '      - Zezwalaj na wszystkie pliki cookie',
      '      - Blokuj pliki cookie stron trzecich',
      '      - Blokuj wszystkie pliki cookie',
      '',
      '🦊 MOZILLA FIREFOX:',
      '   1. Menu (≡) → Ustawienia',
      '   2. Prywatność i bezpieczeństwo',
      '   3. Ciasteczka i dane stron → Zarządzaj ustawieniami',
      '',
      '🧭 SAFARI (macOS):',
      '   1. Safari → Preferencje',
      '   2. Prywatność',
      '   3. Zaznacz "Blokuj wszystkie ciasteczka" (lub dostosuj)',
      '',
      '🌊 MICROSOFT EDGE:',
      '   1. Menu (⋯) → Ustawienia',
      '   2. Pliki cookie i uprawnienia witryny',
      '   3. Zarządzaj plikami cookie i danymi witryn',
      '',
      '3. USUWANIE COOKIES:',
      'Możesz w każdej chwili usunąć zapisane cookies:',
      '   • Chrome: Ctrl+Shift+Del → Pliki cookie i inne dane witryn',
      '   • Firefox: Ctrl+Shift+Del → Ciasteczka',
      '   • Safari: Safari → Wyczyść historię',
      '   • Edge: Ctrl+Shift+Del → Pliki cookie i inne dane witryn',
      '',
      '4. NARZĘDZIA OPT-OUT:',
      'Możesz zrezygnować z śledzenia przez konkretne narzędzia:',
      '   • Google Ads: adssettings.google.com',
      '   • Google Analytics: tools.google.com/dlpage/gaoptout',
      '   • Facebook: facebook.com/ads/preferences',
      '   • Your Online Choices: youronlinechoices.eu',
      '',
      '⚠️ SKUTKI WYŁĄCZENIA COOKIES:',
      '   • Strona może działać nieprawidłowo',
      '   • Utrata personalizacji',
      '   • Konieczność ponownego logowania',
      '   • Brak zapamiętywania preferencji',
      '   • Ograniczona funkcjonalność',
    ]
  },
  {
    title: 'Cookies stron trzecich',
    icon: faChartLine,
    content: [
      'Nasza strona korzysta z usług podmiotów trzecich, które mogą umieszczać własne pliki cookies:',
      '',
      '1. GOOGLE LLC (Alphabet Inc.)',
      '   📍 Siedziba: USA (transfer danych poza EOG)',
      '   🔒 Zabezpieczenia: Standard Contractual Clauses (SCC)',
      '',
      '   Usługi:',
      '   • Google Analytics - analiza ruchu',
      '   • Google Tag Manager - zarządzanie tagami',
      '   • Google Ads - reklamy i remarketing',
      '   • Google Fonts - czcionki',
      '   • reCAPTCHA - ochrona przed botami',
      '',
      '   Polityka prywatności: policies.google.com/privacy',
      '   Opt-out: tools.google.com/dlpage/gaoptout',
      '',
      '2. META PLATFORMS INC. (Facebook, Instagram)',
      '   📍 Siedziba: USA',
      '   🔒 Zabezpieczenia: Standard Contractual Clauses (SCC)',
      '',
      '   Usługi:',
      '   • Facebook Pixel - remarketing',
      '   • Instagram Pixel - śledzenie konwersji',
      '',
      '   Polityka prywatności: facebook.com/privacy/policy',
      '   Opt-out: facebook.com/ads/preferences',
      '',
      '3. LINKEDIN CORPORATION (Microsoft)',
      '   📍 Siedziba: USA',
      '   🔒 Zabezpieczenia: Standard Contractual Clauses (SCC)',
      '',
      '   Usługi:',
      '   • LinkedIn Insight Tag - analityka B2B',
      '',
      '   Polityka prywatności: linkedin.com/legal/privacy-policy',
      '   Opt-out: linkedin.com/psettings/guest-controls',
      '',
      '4. INNE PODMIOTY:',
      '   • YouTube (Google) - wideo embedded',
      '   • Cloudflare - CDN i bezpieczeństwo',
      '   • Hosting provider - infrastruktura',
      '',
      '⚠️ UWAGA: Transfer danych poza EOG',
      'Niektóre cookies pochodzą od firm z siedzibą poza Europejskim Obszarem Gospodarczym (głównie USA). W takich przypadkach zapewniamy odpowiedni poziom ochrony poprzez:',
      '   • Standardowe klauzule umowne (SCC) zatwierdzone przez Komisję Europejską',
      '   • Dodatkowe środki bezpieczeństwa (szyfrowanie, pseudonimizacja)',
      '   • Zgodność z wyrokiem TSUE "Schrems II"',
    ]
  },
  {
    title: 'Inne technologie śledzące',
    icon: faToggleOn,
    content: [
      'Oprócz cookies nasza strona może wykorzystywać inne technologie do przechowywania i przetwarzania informacji:',
      '',
      '1. LOCAL STORAGE:',
      '   • Podobny do cookies, ale z większą pojemnością',
      '   • Dane nie są automatycznie wysyłane do serwera',
      '   • Przechowywane bez daty wygaśnięcia',
      '   • Wykorzystanie: zapamiętywanie preferencji UI, cache danych',
      '',
      '2. SESSION STORAGE:',
      '   • Dane przechowywane tylko podczas sesji przeglądarki',
      '   • Usuwane po zamknięciu karty/okna',
      '   • Wykorzystanie: tymczasowe dane formularzy, stan aplikacji',
      '',
      '3. WEB BEACONS (PIKSELE ŚLEDZĄCE):',
      '   • Małe niewidoczne obrazki (1x1 px)',
      '   • Umieszczane w treści strony lub e-mailach',
      '   • Wykorzystanie: śledzenie otwarć e-maili, analiza konwersji',
      '   • Przykład: Facebook Pixel, LinkedIn Insight Tag',
      '',
      '4. ETAGS (ENTITY TAGS):',
      '   • Nagłówki HTTP wykorzystywane do cache',
      '   • Mogą być używane do śledzenia użytkowników',
      '   • Wykorzystanie: optymalizacja ładowania strony',
      '',
      '5. FINGERPRINTING (ODCISK PALCA PRZEGLĄDARKI):',
      '   ⚠️ Nasza strona NIE wykorzystuje aktywnie fingerprintingu',
      '   • Technika identyfikacji na podstawie konfiguracji przeglądarki',
      '   • Analizuje: czcionki, wtyczki, rozdzielczość, timezone, język, etc.',
      '   • Trudniejsze do zablokowania niż cookies',
      '',
      '🛡️ TWOJA PRYWATNOŚĆ:',
      'Szanujemy Twoją prywatność i stosujemy te technologie wyłącznie w uzasadnionych celach:',
      '   • Poprawy działania strony',
      '   • Analizy ruchu i optymalizacji',
      '   • Personalizacji treści',
      '   • Marketingu (tylko za zgodą)',
    ]
  },
  {
    title: 'Zgoda na cookies - podstawa prawna',
    icon: faShieldAlt,
    content: [
      'Wykorzystanie plików cookies podlega regulacjom prawnym:',
      '',
      '1. PODSTAWY PRAWNE:',
      '   • Dyrektywa 2002/58/WE (Dyrektywa e-Privacy)',
      '   • RODO - Rozporządzenie 2016/679',
      '   • Ustawa o świadczeniu usług drogą elektroniczną',
      '   • Ustawa o ochronie danych osobowych',
      '   • Wytyczne EDPB (European Data Protection Board)',
      '',
      '2. WYMOGI PRAWNE:',
      '',
      'A) COOKIES NIEZBĘDNE:',
      '   ✅ Nie wymagają zgody',
      '   • Niezbędne do świadczenia usługi',
      '   • Technicznie konieczne',
      '   • Użytkownik nie może ich odrzucić',
      '',
      'B) COOKIES OPCJONALNE (funkcjonalne, analityczne, marketingowe):',
      '   ❌ Wymagają wyraźnej zgody',
      '   • Zgoda musi być dobrowolna',
      '   • Zgoda musi być konkretna',
      '   • Zgoda musi być świadoma',
      '   • Zgoda musi być jednoznaczna (opt-in)',
      '   • Musi być możliwość odmowy bez konsekwencji',
      '',
      '3. CECHY PRAWIDŁOWEJ ZGODY (RODO art. 7):',
      '   ✅ Dobrowolność - brak przymusu',
      '   ✅ Konkretność - osobno dla każdego celu',
      '   ✅ Świadomość - jasne informacje o przetwarzaniu',
      '   ✅ Jednoznaczność - wyraźne działanie potwierdzające',
      '',
      '4. TWOJE PRAWA:',
      '   • Prawo do cofnięcia zgody w dowolnym momencie',
      '   • Cofnięcie zgody nie wpływa na legalność wcześniejszego przetwarzania',
      '   • Prawo do szczegółowych informacji o cookies',
      '   • Prawo do zarządzania preferencjami',
      '',
      '5. SANKCJE ZA NARUSZENIE:',
      'Niewłaściwe wykorzystanie cookies może skutkować:',
      '   • Karami finansowymi (do 20 mln EUR lub 4% rocznych obrotów)',
      '   • Nakazem zaprzestania przetwarzania',
      '   • Obowiązkiem poinformowania użytkowników',
      '   • Negatywnymi konsekwencjami wizerunku',
      '',
      '⚖️ NASZA POLITYKA:',
      'Borem.pl w pełni przestrzega przepisów o cookies:',
      '   ✅ Informujemy o wszystkich używanych cookies',
      '   ✅ Prosimy o zgodę przed umieszczeniem cookies opcjonalnych',
      '   ✅ Umożliwiamy łatwą zmianę preferencji',
      '   ✅ Szanujemy Twoje decyzje',
    ]
  },
  {
    title: 'Często zadawane pytania (FAQ)',
    icon: faInfoCircle,
    content: [
      '❓ CZY COOKIES SĄ BEZPIECZNE?',
      'Tak, cookies same w sobie są bezpieczne. To zwykłe pliki tekstowe, które nie mogą zawierać wirusów ani uruchamiać programów. Nie mają dostępu do Twoich plików. Jedyne ryzyko dotyczy prywatności - dlatego ważne jest zarządzanie cookies.',
      '',
      '❓ CZY MOGĘ KORZYSTAĆ ZE STRONY BEZ COOKIES?',
      'Możesz odrzucić wszystkie cookies opcjonalne (analityczne, marketingowe), ale cookies niezbędne są konieczne do działania strony. Bez nich strona może nie działać prawidłowo.',
      '',
      '❓ CO SIĘ STANIE, JAK USUNĘ WSZYSTKIE COOKIES?',
      'Stracisz zapamiętane preferencje (język, ustawienia), zostaniesz wylogowany ze wszystkich serwisów, a strony mogą działać wolniej (brak cache). Będziesz musiał ponownie wyrazić zgody na cookies.',
      '',
      '❓ CZY COOKIES ŚLEDZĄ MOJĄ AKTYWNOŚĆ NA INNYCH STRONACH?',
      'Cookies first-party (nasze) śledzą tylko aktywność na naszej stronie. Cookies third-party (np. Google, Facebook) mogą śledzić Twoją aktywność na wielu stronach internetowych - dlatego możesz je odrzucić.',
      '',
      '❓ JAK DŁUGO COOKIES SĄ PRZECHOWYWANE?',
      'To zależy od rodzaju cookies:',
      '   • Session cookies - do zamknięcia przeglądarki',
      '   • Persistent cookies - od kilku dni do 24 miesięcy',
      '   • Dokładny czas znajduje się w tabeli cookies powyżej',
      '',
      '❓ CZY MOJE DANE SĄ SPRZEDAWANE?',
      'NIE! Nie sprzedajemy Twoich danych osobowych. Dane z cookies wykorzystujemy wyłącznie do celów opisanych w Polityce Prywatności. Niektóre cookies pochodzą od partnerów (Google, Facebook), którzy mają własne polityki prywatności.',
      '',
      '❓ JAK ZMIENIĆ USTAWIENIA COOKIES?',
      'Możesz zmienić ustawienia w każdej chwili:',
      '   1. Kliknij ikonę "Ustawienia cookies" w lewym dolnym rogu',
      '   2. Dostosuj swoje preferencje',
      '   3. Zapisz zmiany',
      '',
      '❓ CO TO JEST TRYB INCOGNITO/PRYWATNY?',
      'To tryb przeglądarki, który nie zapisuje historii, cookies ani danych formularzy na Twoim urządzeniu. Uwaga: strony internetowe nadal widzą Twoje IP i mogą używać cookies podczas sesji.',
      '',
      '❓ CZY COOKIES DZIAŁAJĄ NA URZĄDZENIACH MOBILNYCH?',
      'Tak, cookies działają tak samo na smartfonach i tabletach. Możesz zarządzać nimi w ustawieniach przeglądarki mobilnej (Chrome, Safari, Firefox).',
      '',
      '❓ KONTAKT W SPRAWIE COOKIES:',
      'Jeśli masz pytania dotyczące cookies, skontaktuj się z nami:',
      '📧 kontakt@borem.pl',
      '📞 +48 787 041 328',
    ]
  },
];

export default function CookiesPage() {
  useEffect(() => {
    document.title = 'Polityka Cookies | Borem.pl - Agencja Marketingowa';
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
              <li className="text-white font-semibold">Polityka Cookies</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
              <FontAwesomeIcon icon={faCookie} className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Polityka{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Cookies
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Wszystko o plikach cookies i innych technologiach śledzących wykorzystywanych na naszej stronie
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
                      // Check if it's a numbered section header
                      if (/^\d+\.\s+[A-ZŻŹĆĄŚĘŁÓŃ]/.test(paragraph)) {
                        return (
                          <h3 key={idx} className="text-lg sm:text-xl font-bold text-white mt-6 mb-3">
                            {paragraph}
                          </h3>
                        );
                      }
                      // Check if it's a lettered subsection
                      if (/^[A-Z]\)\s+/.test(paragraph)) {
                        return (
                          <h4 key={idx} className="text-base sm:text-lg font-semibold text-blue-400 mt-4 mb-2">
                            {paragraph}
                          </h4>
                        );
                      }
                      // Check if starts with emoji/special marker
                      if (/^[🔹📍🔒🌐🦊🧭🌊⚠️✅❌📧📞❓]/.test(paragraph)) {
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
              <FontAwesomeIcon icon={faCookie} className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Masz kontrolę nad cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                W każdej chwili możesz zmienić swoje preferencje dotyczące cookies. Kliknij ikonę "Ustawienia cookies"
                w lewym dolnym rogu strony, aby dostosować ustawienia. Szanujemy Twoją prywatność i dajemy Ci pełną kontrolę
                nad tym, jakie dane są zbierane. Pamiętaj, że niektóre cookies są niezbędne do prawidłowego działania strony.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Pytania o cookies? Skontaktuj się z nami:
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
