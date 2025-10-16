'use client';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faFileContract, faGavel, faHandshake, faMoneyBillWave, faClock, faExclamationTriangle, faUserShield, faEnvelope, faBalanceScale, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    title: '§1. Postanowienia ogólne',
    icon: faGavel,
    content: [
      'Niniejszy Regulamin określa zasady korzystania ze strony internetowej Borem.pl oraz świadczenia usług przez Usługodawcę.',
      '',
      '1. DEFINICJE:',
      'Na potrzeby niniejszego Regulaminu przyjmuje się następujące definicje:',
      '   • Usługodawca - Borem Michał Boryń, prowadzący działalność gospodarczą pod firmą Borem Michał Boryń, z siedzibą przy ul. Różana 28/66, 20-538 Lublin, NIP: 7123429572, REGON: 520995990',
      '   • Klient - osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która nawiązuje kontakt z Usługodawcą w celu zawarcia umowy o świadczenie usług',
      '   • Konsument - osoba fizyczna dokonująca czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową',
      '   • Przedsiębiorca - osoba fizyczna, osoba prawna lub jednostka organizacyjna niebędąca osobą prawną, prowadząca działalność gospodarczą lub zawodową',
      '   • Strona - strona internetowa dostępna pod adresem www.borem.pl',
      '   • Usługi - usługi świadczone przez Usługodawcę, w szczególności: tworzenie stron internetowych, aplikacji webowych, sklepów internetowych, usługi marketingowe, SEO, AI i automatyzacja',
      '   • Umowa - umowa o świadczenie usług zawarta między Usługodawcą a Klientem',
      '   • Oferta - indywidualna propozycja świadczenia usług przedstawiona Klientowi przez Usługodawcę',
      '',
      '2. ZAKRES ZASTOSOWANIA:',
      '   • Regulamin obowiązuje wszystkich Klientów korzystających z usług Usługodawcy',
      '   • Akceptacja Regulaminu jest dobrowolna, ale konieczna do zawarcia Umowy',
      '   • Zawarcie Umowy jest równoznaczne z akceptacją postanowień Regulaminu',
      '   • W przypadku konsumentów stosuje się bezwzględnie obowiązujące przepisy prawa konsumenckiego',
    ]
  },
  {
    title: '§2. Usługi i zakres świadczeń',
    icon: faHandshake,
    content: [
      'Usługodawca świadczy następujące kategorie usług:',
      '',
      '1. TWORZENIE STRON INTERNETOWYCH:',
      '   • Strony wizytówkowe (landing page)',
      '   • Strony firmowe i korporacyjne',
      '   • Portfolio i strony CV',
      '   • Strony advanced z rozbudowaną funkcjonalnością',
      '   • Projektowanie UI/UX',
      '   • Responsywność i dostosowanie do urządzeń mobilnych',
      '',
      '2. SKLEPY INTERNETOWE (E-COMMERCE):',
      '   • Sklepy podstawowe (do 50 produktów)',
      '   • Sklepy rozbudowane (do 500 produktów)',
      '   • Sklepy enterprise (bez limitu produktów)',
      '   • Integracje płatności (PayU, Przelewy24, PayPal)',
      '   • Integracje z kurierami',
      '   • Zarządzanie magazynem',
      '   • Systemy lojalnościowe i rabatowe',
      '',
      '3. APLIKACJE WEBOWE:',
      '   • Aplikacje MVP (Minimum Viable Product)',
      '   • Aplikacje biznesowe',
      '   • Aplikacje enterprise',
      '   • Panele administracyjne',
      '   • Systemy CRM i ERP',
      '   • Integracje z API zewnętrznymi',
      '',
      '4. SZTUCZNA INTELIGENCJA I AUTOMATYZACJA:',
      '   • Implementacja ChatGPT i innych modeli AI',
      '   • Chatboty i asystenci wirtualni',
      '   • Automatyzacja procesów biznesowych',
      '   • Analiza danych i machine learning',
      '   • Systemy rekomendacji',
      '',
      '5. MARKETING I SEO:',
      '   • Pozycjonowanie stron (SEO)',
      '   • Kampanie Google Ads',
      '   • Social Media Marketing',
      '   • Content Marketing',
      '   • E-mail Marketing',
      '   • Analityka i raportowanie',
      '',
      '6. USŁUGI DODATKOWE:',
      '   • Hosting i domeny',
      '   • Certyfikaty SSL',
      '   • Wsparcie techniczne',
      '   • Aktualizacje i modyfikacje',
      '   • Konsultacje techniczne',
      '   • Audyty UX/UI i bezpieczeństwa',
    ]
  },
  {
    title: '§3. Zawarcie umowy',
    icon: faFileContract,
    content: [
      'Umowa o świadczenie usług zawierana jest w następujący sposób:',
      '',
      '1. NAWIĄZANIE KONTAKTU:',
      '   • Klient kontaktuje się z Usługodawcą poprzez:',
      '     - Formularz kontaktowy na stronie',
      '     - E-mail: kontakt@borem.pl',
      '     - Telefon: +48 787 041 328',
      '     - WhatsApp',
      '   • Klient przedstawia swoje potrzeby i oczekiwania',
      '',
      '2. KONSULTACJA I ANALIZA:',
      '   • Usługodawca przeprowadza bezpłatną konsultację',
      '   • Analiza wymagań projektowych',
      '   • Badanie konkurencji i rynku (jeśli dotyczy)',
      '   • Rekomendacje technologiczne',
      '',
      '3. OFERTA:',
      '   • Usługodawca przygotowuje indywidualną Ofertę zawierającą:',
      '     - Szczegółowy opis zakresu usług',
      '     - Cenę i sposób płatności',
      '     - Harmonogram realizacji',
      '     - Warunki współpracy',
      '   • Oferta jest ważna przez 14 dni od daty jej przedstawienia',
      '',
      '4. AKCEPTACJA OFERTY:',
      '   • Klient akceptuje Ofertę poprzez:',
      '     - Podpisanie umowy (forma papierowa lub elektroniczna)',
      '     - Potwierdzenie e-mailem',
      '     - Wpłatę zaliczki (w przypadku projektów wymagających przedpłaty)',
      '   • Z momentem akceptacji Oferty zostaje zawarta Umowa',
      '',
      '5. FORMA UMOWY:',
      '   • Umowa może być zawarta:',
      '     - W formie pisemnej (tradycyjnej)',
      '     - W formie elektronicznej (PDF z podpisem elektronicznym)',
      '     - W formie dokumentowej (potwierdzenie e-mail)',
      '   • Dla umów o wartości powyżej 10 000 zł zalecana jest forma pisemna',
    ]
  },
  {
    title: '§4. Ceny i płatności',
    icon: faMoneyBillWave,
    content: [
      '1. CENY USŁUG:',
      '   • Ceny usług są określane indywidualnie w Ofercie',
      '   • Ceny podane na stronie internetowej mają charakter orientacyjny',
      '   • Ceny zawierają podatek VAT (jeśli Usługodawca jest czynnym podatnikiem VAT)',
      '   • Usługodawca zastrzega sobie prawo do promocji i rabatów',
      '',
      '2. MODELE ROZLICZEŃ:',
      '',
      'A) PROJEKTY JEDNORAZOWE (stałe wynagrodzenie):',
      '   • Płatność jednorazowa po zakończeniu projektu',
      '   • Płatność w transzach (zaliczka + raty + płatność końcowa)',
      '   • Typowy podział: 30% zaliczka, 40% w trakcie, 30% po odbiorze',
      '',
      'B) PROJEKTY SUBSKRYPCYJNE (abonament):',
      '   • Comiesięczna opłata abonamentowa',
      '   • Obejmuje hosting, wsparcie, aktualizacje',
      '   • Rozliczenie z góry za dany miesiąc',
      '',
      'C) PROJEKTY TIME & MATERIAL (czas pracy):',
      '   • Rozliczenie według stawki godzinowej',
      '   • Faktury wystawiane cyklicznie (co tydzień/miesiąc)',
      '   • Stawka określona w Ofercie',
      '',
      '3. TERMINY PŁATNOŚCI:',
      '   • Zaliczka: przed rozpoczęciem prac (0-3 dni)',
      '   • Płatności etapowe: w terminie 7 dni od wystawienia faktury',
      '   • Płatność końcowa: w terminie 7 dni od odbioru projektu',
      '   • Dla przedsiębiorców: możliwość negocjacji terminów (do 14-30 dni)',
      '',
      '4. FORMY PŁATNOŚCI:',
      '   • Przelew bankowy (tradycyjny)',
      '   • Przelew BLIK',
      '   • Płatności online (PayU, Przelewy24)',
      '   • Dla firm: faktury z odroczonym terminem płatności',
      '',
      '5. OPÓŹNIENIA W PŁATNOŚCIACH:',
      '   • W przypadku opóźnienia w płatności Usługodawca ma prawo do:',
      '     - Wstrzymania prac nad projektem',
      '     - Naliczenia odsetek ustawowych za zwłokę',
      '     - Odstąpienia od umowy (po upływie 14 dni od terminu płatności)',
      '   • Opóźnienie w płatności przesuwa termin realizacji projektu',
      '',
      '6. FAKTURY:',
      '   • Faktury VAT wystawiane elektronicznie (PDF)',
      '   • Wysyłka na adres e-mail podany przez Klienta',
      '   • Na życzenie: faktura tradycyjna (papierowa)',
      '   • Możliwość otrzymania duplikatu faktury',
    ]
  },
  {
    title: '§5. Realizacja usługi',
    icon: faClock,
    content: [
      '1. HARMONOGRAM REALIZACJI:',
      '   • Szczegółowy harmonogram określany jest w Ofercie',
      '   • Orientacyjne terminy realizacji:',
      '     - Landing Page: 5-7 dni',
      '     - Strona firmowa: 2-3 tygodnie',
      '     - Sklep internetowy: 3-6 tygodni',
      '     - Aplikacja webowa: 1-3 miesiące',
      '   • Terminy mogą ulec zmianie w przypadku zmian w zakresie projektu',
      '',
      '2. PROCES REALIZACJI:',
      '',
      'ETAP 1 - KONSULTACJA (1-2 dni):',
      '   • Brief projektu i analiza wymagań',
      '   • Badanie konkurencji',
      '   • Rekomendacje technologiczne',
      '',
      'ETAP 2 - PROJEKTOWANIE (5-7 dni):',
      '   • Wireframes i user flow',
      '   • Mockupy high-fidelity w Figma',
      '   • Interaktywny prototyp',
      '   • Akceptacja designu przez Klienta',
      '',
      'ETAP 3 - ROZWÓJ (10-30 dni):',
      '   • Kodowanie front-end',
      '   • Kodowanie back-end i API',
      '   • Implementacja CMS',
      '   • Regularne prezentacje postępów',
      '',
      'ETAP 4 - TESTOWANIE (2-3 dni):',
      '   • Testy funkcjonalne',
      '   • Testy cross-browser',
      '   • Testy responsywności',
      '   • Audyt wydajności',
      '',
      'ETAP 5 - WDROŻENIE (1-2 dni):',
      '   • Publikacja na serwerze produkcyjnym',
      '   • Konfiguracja domeny i SSL',
      '   • Szkolenie Klienta z obsługi',
      '   • Przekazanie dokumentacji',
      '',
      '3. WSPÓŁPRACA KLIENTA:',
      'Klient zobowiązuje się do:',
      '   • Terminowego dostarczania materiałów (teksty, grafiki, loga)',
      '   • Udzielania informacji zwrotnej w ciągu 3-5 dni roboczych',
      '   • Wskazania osoby kontaktowej po stronie Klienta',
      '   • Akceptacji lub zgłaszania uwag do poszczególnych etapów',
      '',
      '4. POPRAWKI I MODYFIKACJE:',
      '   • W cenę projektu wliczona jest określona liczba rund poprawek',
      '   • Zazwyczaj: 2-3 rundy poprawek na każdym etapie',
      '   • Dodatkowe poprawki rozliczane są według stawki godzinowej (od 150 zł)',
      '   • Większe zmiany w zakresie projektu wymagają aneksu do umowy',
      '',
      '5. ODBIÓR PROJEKTU:',
      '   • Po zakończeniu prac Klient otrzymuje zawiadomienie o gotowości do odbioru',
      '   • Klient ma 7 dni na zgłoszenie ewentualnych uwag',
      '   • Po tym terminie projekt uznaje się za odebrany',
      '   • Odbiór może nastąpić poprzez podpisanie protokołu odbioru lub potwierdzenie e-mail',
    ]
  },
  {
    title: '§6. Prawa autorskie i licencje',
    icon: faBalanceScale,
    content: [
      '1. PRAWA AUTORSKIE DO PROJEKTU:',
      '   • Wszelkie prawa autorskie do wykonanego projektu przysługują Usługodawcy',
      '   • Po pełnej zapłacie Klient otrzymuje niewyłączną licencję na korzystanie z projektu',
      '   • Licencja obejmuje prawo do:',
      '     - Eksploatacji strony/aplikacji w celach biznesowych',
      '     - Modyfikacji treści (teksty, grafiki)',
      '     - Publikacji i dystrybucji',
      '',
      '2. LICENCJA WYŁĄCZNA (opcjonalnie):',
      '   • Na życzenie Klienta możliwe jest przeniesienie pełnych praw autorskich',
      '   • Wymaga to dodatkowej opłaty (zwykle 20-50% wartości projektu)',
      '   • Przeniesienie praw autorskich następuje na podstawie odrębnej umowy',
      '',
      '3. PORTFOLIO I PROMOCJA:',
      '   • Usługodawca ma prawo do wykorzystania projektu w swoim portfolio',
      '   • Prawo do publikacji screenshotów i opisów projektu',
      '   • Prawo do umieszczenia informacji "Wykonane przez Borem.pl"',
      '   • Klient może żądać poufności (NDA) za dodatkową opłatą',
      '',
      '4. MATERIAŁY DOSTARCZONE PRZEZ KLIENTA:',
      '   • Klient oświadcza, że posiada prawa do wszystkich dostarczonych materiałów',
      '   • Klient ponosi odpowiedzialność za naruszenie praw autorskich osób trzecich',
      '   • Usługodawca nie weryfikuje praw autorskich do materiałów Klienta',
      '',
      '5. OPROGRAMOWANIE I BIBLIOTEKI:',
      '   • W projektach wykorzystywane są biblioteki open-source (React, Next.js, etc.)',
      '   • Stosowane są licencje: MIT, Apache 2.0, GPL (w zależności od projektu)',
      '   • Lista wykorzystanych bibliotek dostępna na życzenie',
      '',
      '6. GWARANCJA CZYSTOŚCI PRAW:',
      '   • Usługodawca gwarantuje, że wykonany projekt nie narusza praw osób trzecich',
      '   • W przypadku roszczeń osób trzecich Usługodawca zobowiązuje się do udzielenia pomocy prawnej',
    ]
  },
  {
    title: '§7. Gwarancja i reklamacje',
    icon: faExclamationTriangle,
    content: [
      '1. GWARANCJA JAKOŚCI:',
      '   • Usługodawca gwarantuje, że wykonane usługi będą zgodne z umową',
      '   • Strona/aplikacja będzie działać zgodnie z aktualną specyfikacją',
      '   • Responsywność i działanie w najpopularniejszych przeglądarkach',
      '',
      '2. OKRES GWARANCYJNY:',
      '   • Standardowy okres gwarancji: 30-90 dni (w zależności od pakietu)',
      '   • Gwarancja obejmuje:',
      '     - Naprawę błędów programistycznych',
      '     - Poprawę błędów funkcjonalnych',
      '     - Wsparcie techniczne',
      '   • Gwarancja nie obejmuje:',
      '     - Błędów wynikających z działań Klienta lub osób trzecich',
      '     - Problemów związanych z niewłaściwym hostingiem',
      '     - Zmian w zakresie projektu po odbiorze',
      '',
      '3. REKLAMACJE:',
      '   • Reklamacje należy zgłaszać na adres: kontakt@borem.pl',
      '   • Reklamacja powinna zawierać:',
      '     - Opis problemu',
      '     - Screenshoty lub nagranie ekranu',
      '     - Informacje o przeglądarce i urządzeniu',
      '   • Termin rozpatrzenia reklamacji: 14 dni',
      '',
      '4. ODPOWIEDZIALNOŚĆ USŁUGODAWCY:',
      '   • Usługodawca odpowiada za szkody wyrządzone działaniem lub zaniechaniem',
      '   • Odpowiedzialność ograniczona jest do wysokości wynagrodzenia z umowy',
      '   • Usługodawca nie ponosi odpowiedzialności za:',
      '     - Utracone korzyści',
      '     - Szkody pośrednie',
      '     - Awarię hostingu lub infrastruktury zewnętrznej',
      '',
      '5. FORCE MAJEURE:',
      '   • Strony nie ponoszą odpowiedzialności za niewykonanie lub nienależyte wykonanie umowy w przypadku siły wyższej',
      '   • Siła wyższa obejmuje: klęski żywiołowe, wojny, strajki, pandemie, przerwy w dostawie prądu/internetu, ataki cybernetyczne',
    ]
  },
  {
    title: '§8. Rozwiązanie umowy',
    icon: faFileInvoiceDollar,
    content: [
      '1. ROZWIĄZANIE UMOWY ZA POROZUMIENIEM STRON:',
      '   • Umowa może zostać rozwiązana w każdym czasie za zgodą obu stron',
      '   • Wymaga formy pisemnej lub dokumentowej',
      '   • Strony rozliczają się z wykonanych prac proporcjonalnie do zaawansowania projektu',
      '',
      '2. ODSTĄPIENIE OD UMOWY PRZEZ KLIENTA:',
      '',
      'A) KONSUMENT (prawo do odstąpienia w ciągu 14 dni):',
      '   • Konsument ma prawo odstąpić od umowy w ciągu 14 dni bez podania przyczyny',
      '   • Termin liczony od dnia zawarcia umowy',
      '   • Oświadczenie o odstąpieniu przesłane na: kontakt@borem.pl',
      '   • Zwrot wpłaconych środków w ciągu 14 dni',
      '   • UWAGA: Jeśli Konsument wyraził zgodę na rozpoczęcie prac przed upływem 14 dni, traci prawo do odstąpienia',
      '',
      'B) PRZEDSIĘBIORCA:',
      '   • Przedsiębiorca nie ma prawa do odstąpienia w ciągu 14 dni',
      '   • Odstąpienie możliwe jedynie na zasadach określonych w umowie',
      '   • W przypadku odstąpienia Klient zobowiązany jest zapłacić za wykonane prace',
      '',
      '3. ROZWIĄZANIE UMOWY PRZEZ USŁUGODAWCĘ:',
      'Usługodawca może rozwiązać umowę w następujących przypadkach:',
      '   • Opóźnienie w płatności przekraczające 14 dni',
      '   • Brak współpracy ze strony Klienta (brak odpowiedzi przez ponad 30 dni)',
      '   • Naruszenie postanowień Regulaminu przez Klienta',
      '   • Niemożność wykonania usługi z przyczyn niezależnych od Usługodawcy',
      '',
      '4. SKUTKI ROZWIĄZANIA UMOWY:',
      '   • W przypadku rozwiązania umowy przez Klienta:',
      '     - Klient zobowiązany jest zapłacić za prace wykonane do momentu rozwiązania',
      '     - Wpłacona zaliczka nie podlega zwrotowi (zaliczenie na poczet wykonanych prac)',
      '     - Klient nie otrzymuje dostępu do projektu',
      '   • W przypadku rozwiązania umowy przez Usługodawcę:',
      '     - Usługodawca rozlicza się z Klientem za wykonane prace',
      '     - Zwrot nadpłaty (jeśli występuje) w ciągu 14 dni',
    ]
  },
  {
    title: '§9. Ochrona danych osobowych',
    icon: faUserShield,
    content: [
      'Ochrona danych osobowych Klientów jest regulowana przez odrębną Politykę Prywatności.',
      '',
      '1. ADMINISTRATOR DANYCH:',
      '   • Administratorem danych osobowych jest Borem Michał Boryń',
      '   • Kontakt: kontakt@borem.pl',
      '   • Dane przetwarzane są zgodnie z RODO',
      '',
      '2. ZAKRES PRZETWARZANYCH DANYCH:',
      '   • Imię i nazwisko',
      '   • Adres e-mail',
      '   • Numer telefonu',
      '   • Nazwa firmy i dane firmy (NIP, REGON, adres)',
      '   • Dane niezbędne do wystawienia faktury',
      '',
      '3. CEL PRZETWARZANIA:',
      '   • Realizacja umowy',
      '   • Kontakt z Klientem',
      '   • Wystawienie faktury',
      '   • Marketing bezpośredni (za zgodą)',
      '',
      '4. PRAWA KLIENTA:',
      '   • Prawo dostępu do danych',
      '   • Prawo do sprostowania danych',
      '   • Prawo do usunięcia danych',
      '   • Prawo do ograniczenia przetwarzania',
      '   • Prawo do przenoszenia danych',
      '   • Prawo do sprzeciwu',
      '',
      'Szczegółowe informacje w Polityce Prywatności dostępnej na stronie: www.borem.pl/polityka-prywatnosci',
    ]
  },
  {
    title: '§10. Postanowienia końcowe',
    icon: faEnvelope,
    content: [
      '1. ZMIANA REGULAMINU:',
      '   • Usługodawca zastrzega sobie prawo do zmiany Regulaminu',
      '   • O zmianach Klienci zostaną poinformowani e-mailem (co najmniej 14 dni przed wejściem w życie)',
      '   • Zmiany nie dotyczą umów zawartych przed datą wejścia w życie nowego Regulaminu',
      '   • Klient ma prawo rozwiązać umowę w przypadku braku akceptacji nowego Regulaminu',
      '',
      '2. PRAWO WŁAŚCIWE I JURYSDYKCJA:',
      '   • Umowy zawierane są na podstawie prawa polskiego',
      '   • W sprawach nieuregulowanych stosuje się przepisy Kodeksu cywilnego',
      '   • Dla przedsiębiorców: spory rozstrzygane są przez sąd właściwy dla siedziby Usługodawcy',
      '   • Dla konsumentów: właściwość sądu zgodnie z przepisami Kodeksu postępowania cywilnego',
      '',
      '3. POZASĄDOWE ROZWIĄZYWANIE SPORÓW:',
      '   • Konsument ma prawo do skorzystania z pozasądowych sposobów rozpatrywania reklamacji:',
      '     - Mediacja',
      '     - Stały Polubowny Sąd Konsumencki',
      '     - Wojewódzki Inspektor Inspekcji Handlowej',
      '   • Platforma ODR: https://ec.europa.eu/consumers/odr',
      '',
      '4. KONTAKT:',
      'W sprawach związanych z Regulaminem prosimy o kontakt:',
      '   📧 E-mail: kontakt@borem.pl',
      '   📞 Telefon: +48 787 041 328',
      '   📍 Adres: ul. Różana 28/66, 20-538 Lublin',
      '',
      '5. POSTANOWIENIA DOTYCZĄCE KONSUMENTÓW:',
      '   • W przypadku sprzeczności postanowień Regulaminu z bezwzględnie obowiązującymi przepisami prawa konsumenckiego, pierwszeństwo mają przepisy prawa',
      '   • Konsumentowi przysługują wszystkie prawa wynikające z przepisów prawa, w szczególności z ustawy o prawach konsumenta',
      '',
      '6. LANGUAGE / JĘZYK:',
      '   • Regulamin sporządzony jest w języku polskim',
      '   • W przypadku sporządzenia wersji w innych językach, wersja polska jest wersją wiążącą',
      '',
      '7. KLAUZULA SALWATORYJNA:',
      '   • W przypadku uznania któregokolwiek postanowienia Regulaminu za nieważne lub nieskuteczne, pozostałe postanowienia pozostają w mocy',
      '   • Nieważne lub nieskuteczne postanowienie zastępuje się postanowieniem najbliższym intencji stron',
      '',
      '8. DATA WEJŚCIA W ŻYCIE:',
      'Niniejszy Regulamin wchodzi w życie z dniem jego publikacji na stronie internetowej.',
    ]
  },
];

export default function RegulaminPage() {
  useEffect(() => {
    document.title = 'Regulamin | Borem.pl - Agencja Marketingowa';
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Navbar />
      

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
              <li className="text-white font-semibold">Regulamin</li>
            </ol>
          </nav>

          {/* Title */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
              <FontAwesomeIcon icon={faFileContract} className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Regulamin{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                świadczenia usług
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Szczegółowe warunki korzystania ze strony i świadczenia usług przez Borem.pl
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
                      // Check if it's "ETAP" header
                      if (/^ETAP\s+\d+/.test(paragraph)) {
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
              <FontAwesomeIcon icon={faHandshake} className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Transparentna współpraca</h3>
              <p className="text-gray-300 leading-relaxed">
                Niniejszy Regulamin określa zasady współpracy między <strong>Borem Michał Boryń</strong> a Klientami.
                Dokładamy wszelkich starań, aby współpraca przebiegała sprawnie i profesjonalnie. Wierzymy w transparentność
                i uczciwe warunki - dlatego wszystkie zasady są jasno określone. W razie jakichkolwiek pytań lub wątpliwości
                dotyczących Regulaminu, jesteśmy do Twojej dyspozycji.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Pytania? Skontaktuj się z nami:
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
