import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polityka Prywatności',
  description: 'Polityka Prywatności Borem.pl ⭐ Dowiedz się jak chronimy Twoje dane osobowe ✓ RODO ✓ Bezpieczeństwo ✓ Przejrzystość ✓ Zgodność z prawem',
};

'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight, faShieldAlt, faLock, faUserShield, faDatabase, faEnvelope, faCookie, faGavel, faClock, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const sections = [
  {
    title: '§1. Postanowienia ogólne',
    icon: faGavel,
    content: [
      'Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych Użytkowników korzystających ze strony internetowej Borem.pl.',
      'Administratorem danych osobowych jest Borem Michał Boryń, prowadzący działalność gospodarczą pod firmą Borem Michał Boryń, z siedzibą przy ul. Różana 28/66, 20-538 Lublin, wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej, NIP: 7123429572, REGON: 520995990.',
      'Kontakt z Administratorem jest możliwy pod adresem e-mail: kontakt@borem.pl lub telefonicznie pod numerem: +48 787 041 328.',
      'Polityka Prywatności określa w szczególności: rodzaje i zakres zbieranych danych, cele i podstawy prawne przetwarzania danych, okres przechowywania danych, odbiorców danych oraz prawa osób, których dane dotyczą.',
      'Administrator dokłada wszelkich starań, aby zapewnić bezpieczeństwo danych osobowych zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).',
    ]
  },
  {
    title: '§2. Zakres zbieranych danych osobowych',
    icon: faDatabase,
    content: [
      'W ramach świadczonych usług Administrator zbiera następujące kategorie danych osobowych:',
      '',
      '1. DANE PODANE DOBROWOLNIE PRZEZ UŻYTKOWNIKA:',
      '   • Imię i nazwisko',
      '   • Adres e-mail',
      '   • Numer telefonu',
      '   • Nazwa firmy (opcjonalnie)',
      '   • Treść wiadomości przesłanej przez formularz kontaktowy',
      '   • Inne dane podane w korespondencji',
      '',
      '2. DANE ZBIERANE AUTOMATYCZNIE:',
      '   • Adres IP',
      '   • Typ przeglądarki internetowej',
      '   • System operacyjny',
      '   • Dostawca usług internetowych (ISP)',
      '   • Data i czas wizyty na stronie',
      '   • Czas spędzony na stronie',
      '   • Odwiedzone podstrony',
      '   • Strona, z której nastąpiło przekierowanie',
      '   • Lokalizacja geograficzna (na poziomie miasta)',
      '   • Urządzenie i rozdzielczość ekranu',
      '',
      '3. DANE Z PLIKÓW COOKIES:',
      '   • Identyfikator sesji',
      '   • Preferencje użytkownika',
      '   • Statystyki odwiedzin',
      '   • Dane dotyczące zachowania na stronie',
      '',
      '4. DANE Z NARZĘDZI ANALITYCZNYCH:',
      '   • Google Analytics - dane o korzystaniu ze strony',
      '   • Facebook Pixel - dane o interakcjach marketingowych (jeśli dotyczy)',
      '   • Inne narzędzia remarketingowe',
    ]
  },
  {
    title: '§3. Cele i podstawy prawne przetwarzania danych',
    icon: faLock,
    content: [
      'Administrator przetwarza dane osobowe w następujących celach i na następujących podstawach prawnych:',
      '',
      '1. KONTAKT I KORESPONDENCJA (art. 6 ust. 1 lit. a i f RODO):',
      '   • Udzielanie odpowiedzi na zapytania przesłane przez formularz kontaktowy',
      '   • Prowadzenie korespondencji biznesowej',
      '   • Udzielanie informacji o usługach',
      '   Podstawa: zgoda użytkownika oraz prawnie uzasadniony interes Administratora',
      '',
      '2. REALIZACJA UMÓW (art. 6 ust. 1 lit. b RODO):',
      '   • Zawarcie i realizacja umowy o świadczenie usług',
      '   • Rozliczenia finansowe',
      '   • Wystawianie faktur i dokumentów księgowych',
      '   • Realizacja zobowiązań umownych',
      '   Podstawa: niezbędność do wykonania umowy',
      '',
      '3. MARKETING BEZPOŚREDNI (art. 6 ust. 1 lit. f RODO):',
      '   • Przesyłanie informacji o produktach i usługach',
      '   • Wysyłka newslettera (po wyrażeniu zgody)',
      '   • Remarketing i targetowanie reklam',
      '   • Analiza efektywności działań marketingowych',
      '   Podstawa: prawnie uzasadniony interes Administratora oraz zgoda użytkownika',
      '',
      '4. STATYSTYKI I ANALIZA (art. 6 ust. 1 lit. f RODO):',
      '   • Prowadzenie statystyk odwiedzin strony',
      '   • Analiza zachowań użytkowników',
      '   • Optymalizacja działania strony',
      '   • Badanie efektywności kampanii marketingowych',
      '   Podstawa: prawnie uzasadniony interes Administratora',
      '',
      '5. BEZPIECZEŃSTWO (art. 6 ust. 1 lit. f RODO):',
      '   • Zapewnienie bezpieczeństwa IT',
      '   • Wykrywanie i zapobieganie nadużyciom',
      '   • Ochrona przed cyberatakami',
      '   • Archiwizacja dla celów dowodowych',
      '   Podstawa: prawnie uzasadniony interes Administratora',
      '',
      '6. OBOWIĄZKI PRAWNE (art. 6 ust. 1 lit. c RODO):',
      '   • Wypełnienie obowiązków prawnych, w szczególności podatkowych i księgowych',
      '   • Odpowiedź na żądania organów państwowych',
      '   Podstawa: wypełnienie obowiązku prawnego',
    ]
  },
  {
    title: '§4. Okres przechowywania danych osobowych',
    icon: faClock,
    content: [
      'Dane osobowe będą przechowywane przez następujące okresy:',
      '',
      '1. DANE Z FORMULARZY KONTAKTOWYCH:',
      '   • Do czasu udzielenia odpowiedzi na zapytanie',
      '   • Do czasu wycofania zgody na przetwarzanie',
      '   • Maksymalnie 3 lata od ostatniego kontaktu (dla celów dowodowych)',
      '',
      '2. DANE Z ZAWARTYCH UMÓW:',
      '   • Przez okres trwania umowy',
      '   • 6 lat po zakończeniu współpracy (dla celów księgowych i podatkowych)',
      '   • Zgodnie z przepisami ustawy o rachunkowości',
      '',
      '3. DANE DO MARKETINGU BEZPOŚREDNIEGO:',
      '   • Do czasu wycofania zgody lub wniesienia sprzeciwu',
      '   • Maksymalnie 3 lata od ostatniej aktywności użytkownika',
      '',
      '4. DANE ANALITYCZNE I COOKIES:',
      '   • Zgodnie z ustawieniami przeglądarki',
      '   • Google Analytics: 26 miesięcy (domyślnie)',
      '   • Pliki cookies: od zakończenia sesji do 24 miesięcy',
      '',
      '5. DANE ARCHIWALNE (dla celów dowodowych):',
      '   • Do momentu przedawnienia roszczeń',
      '   • Zgodnie z przepisami Kodeksu cywilnego (do 10 lat)',
      '',
      'Po upływie okresu przechowywania dane są bezpowrotnie usuwane lub anonimizowane w sposób uniemożliwiający identyfikację osoby.',
    ]
  },
  {
    title: '§5. Udostępnianie danych osobowych',
    icon: faUserShield,
    content: [
      'Administrator może przekazywać dane osobowe następującym kategoriom odbiorców:',
      '',
      '1. PODMIOTY ŚWIADCZĄCE USŁUGI NA RZECZ ADMINISTRATORA:',
      '   • Dostawcy usług hostingowych i serwerowych',
      '   • Dostawcy usług IT i wsparcia technicznego',
      '   • Dostawcy systemów CRM i narzędzi do e-mail marketingu',
      '   • Dostawcy usług chmurowych',
      '   • Agencje marketingowe i reklamowe',
      '',
      '2. PODMIOTY ŚWIADCZĄCE USŁUGI PŁATNICZE:',
      '   • Operatorzy płatności online (PayU, Przelewy24, PayPal)',
      '   • Banki obsługujące transakcje',
      '   • Operatorzy kart płatniczych',
      '',
      '3. NARZĘDZIA ANALITYCZNE I MARKETINGOWE:',
      '   • Google LLC (Google Analytics, Google Ads)',
      '   • Meta Platforms Inc. (Facebook, Instagram)',
      '   • LinkedIn Corporation',
      '   • Inne platformy social media i reklamowe',
      '',
      '4. PODMIOTY UPRAWNIONE NA PODSTAWIE PRZEPISÓW PRAWA:',
      '   • Organy ścigania i wymiaru sprawiedliwości',
      '   • Urzędy skarbowe',
      '   • Inne organy administracji publicznej',
      '',
      '5. INNE PODMIOTY:',
      '   • Kancelarie prawne (w przypadku sporów)',
      '   • Firmy kurierskie (przy realizacji umów)',
      '   • Dostawcy usług księgowych',
      '',
      'PRZEKAZYWANIE DANYCH POZA EUROPEJSKI OBSZAR GOSPODARCZY (EOG):',
      'Niektóre dane mogą być przekazywane do USA i innych państw trzecich (np. Google, Meta). W takich przypadkach Administrator zapewnia odpowiedni poziom ochrony poprzez:',
      '   • Standardowe klauzule umowne zatwierdzone przez Komisję Europejską',
      '   • Mechanizmy przewidziane w RODO (art. 46-49)',
      '   • Stosowanie się do zasad Privacy Shield (tam gdzie ma zastosowanie)',
      '',
      'Wszyscy odbiorcy danych są związani obowiązkiem zachowania poufności oraz przestrzegania przepisów o ochronie danych osobowych.',
    ]
  },
  {
    title: '§6. Prawa osób, których dane dotyczą',
    icon: faUserShield,
    content: [
      'Zgodnie z RODO przysługują Ci następujące prawa:',
      '',
      '1. PRAWO DOSTĘPU DO DANYCH (art. 15 RODO):',
      '   • Prawo do uzyskania informacji, czy dane są przetwarzane',
      '   • Prawo do otrzymania kopii przetwarzanych danych',
      '   • Prawo do informacji o celach, podstawach i okresie przetwarzania',
      '',
      '2. PRAWO DO SPROSTOWANIA DANYCH (art. 16 RODO):',
      '   • Prawo do poprawienia nieprawidłowych danych',
      '   • Prawo do uzupełnienia niekompletnych danych',
      '',
      '3. PRAWO DO USUNIĘCIA DANYCH - "prawo do bycia zapomnianym" (art. 17 RODO):',
      '   • Prawo do żądania usunięcia danych, gdy:',
      '     - nie są już niezbędne do celów, dla których zostały zebrane',
      '     - wycofano zgodę na przetwarzanie',
      '     - wniesiono sprzeciw wobec przetwarzania',
      '     - dane są przetwarzane niezgodnie z prawem',
      '     - dane muszą zostać usunięte w celu wywiązania się z obowiązku prawnego',
      '',
      '4. PRAWO DO OGRANICZENIA PRZETWARZANIA (art. 18 RODO):',
      '   • Prawo do ograniczenia przetwarzania, gdy:',
      '     - kwestionujesz prawidłowość danych',
      '     - przetwarzanie jest niezgodne z prawem, ale sprzeciwiasz się usunięciu',
      '     - Administrator nie potrzebuje już danych, ale są one potrzebne Tobie do ustalenia, dochodzenia lub obrony roszczeń',
      '     - wniosłeś sprzeciw wobec przetwarzania',
      '',
      '5. PRAWO DO PRZENOSZENIA DANYCH (art. 20 RODO):',
      '   • Prawo do otrzymania danych w ustrukturyzowanym, powszechnie używanym formacie',
      '   • Prawo do przesłania danych innemu administratorowi',
      '   • Dotyczy danych przetwarzanych na podstawie zgody lub umowy',
      '',
      '6. PRAWO DO SPRZECIWU (art. 21 RODO):',
      '   • Prawo do wniesienia sprzeciwu wobec przetwarzania danych:',
      '     - ze względu na szczególną sytuację',
      '     - gdy dane są przetwarzane na podstawie prawnie uzasadnionego interesu',
      '     - w celach marketingu bezpośredniego',
      '',
      '7. PRAWO DO COFNIĘCIA ZGODY (art. 7 ust. 3 RODO):',
      '   • Prawo do cofnięcia zgody w dowolnym momencie',
      '   • Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania przed jej cofnięciem',
      '',
      '8. PRAWO DO WNIESIENIA SKARGI (art. 77 RODO):',
      '   • Prawo do wniesienia skargi do organu nadzorczego:',
      '   • Prezes Urzędu Ochrony Danych Osobowych (PUODO)',
      '   • ul. Stawki 2, 00-193 Warszawa',
      '   • Tel: +48 22 531 03 00',
      '   • www.uodo.gov.pl',
      '',
      'SPOSÓB REALIZACJI PRAW:',
      'Aby skorzystać z powyższych praw, należy skontaktować się z Administratorem:',
      '   • E-mail: kontakt@borem.pl',
      '   • Pisemnie: ul. Różana 28/66, 20-538 Lublin',
      'Administrator odpowie na żądanie w ciągu 30 dni od jego otrzymania. W uzasadnionych przypadkach termin może zostać przedłużony o kolejne 60 dni.',
    ]
  },
  {
    title: '§7. Pliki cookies i podobne technologie',
    icon: faCookie,
    content: [
      'Strona internetowa wykorzystuje pliki cookies i podobne technologie do prawidłowego funkcjonowania oraz analizy ruchu.',
      '',
      '1. CZYM SĄ PLIKI COOKIES:',
      'Cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika przez przeglądarkę internetową. Zawierają informacje niezbędne do prawidłowego działania strony lub do zbierania statystyk.',
      '',
      '2. RODZAJE STOSOWANYCH COOKIES:',
      '',
      'A) COOKIES NIEZBĘDNE (TECHNICZNE):',
      '   • Czas przechowywania: sesja / do 24 miesięcy',
      '   • Cel: zapewnienie prawidłowego działania strony',
      '   • Nie wymagają zgody (niezbędne do świadczenia usługi)',
      '   • Przykłady: identyfikator sesji, zapamiętanie zgód na cookies',
      '',
      'B) COOKIES FUNKCJONALNE:',
      '   • Czas przechowywania: do 12 miesięcy',
      '   • Cel: zapamiętywanie preferencji użytkownika',
      '   • Wymagają zgody',
      '   • Przykłady: język interfejsu, ustawienia regionalne',
      '',
      'C) COOKIES ANALITYCZNE (STATYSTYCZNE):',
      '   • Google Analytics',
      '   • Czas przechowywania: do 26 miesięcy',
      '   • Cel: analiza ruchu, statystyki odwiedzin',
      '   • Wymagają zgody',
      '   • Dane: strony odwiedzone, czas wizyty, źródło ruchu',
      '',
      'D) COOKIES MARKETINGOWE (REKLAMOWE):',
      '   • Google Ads, Facebook Pixel, LinkedIn Insight Tag',
      '   • Czas przechowywania: do 24 miesięcy',
      '   • Cel: personalizacja reklam, remarketing',
      '   • Wymagają zgody',
      '   • Dane: zachowania reklamowe, zainteresowania',
      '',
      '3. COOKIES PODMIOTÓW TRZECICH:',
      'Strona może wykorzystywać cookies pochodzące od podmiotów trzecich, takich jak:',
      '   • Google (Analytics, Ads, Tag Manager)',
      '   • Meta (Facebook, Instagram Pixel)',
      '   • LinkedIn (Insight Tag)',
      '   • YouTube (wideo embedded)',
      '',
      '4. ZARZĄDZANIE COOKIES:',
      'Możesz w każdej chwili zmienić ustawienia cookies poprzez:',
      '   • Ustawienia przeglądarki (blokowanie, usuwanie cookies)',
      '   • Panel zgód na stronie (zmiana preferencji)',
      '   • Narzędzia opt-out dostawców (np. Google Ads Settings)',
      '',
      '5. SKUTKI WYŁĄCZENIA COOKIES:',
      'Wyłączenie cookies może spowodować:',
      '   • Ograniczenie funkcjonalności strony',
      '   • Konieczność ponownego logowania',
      '   • Brak personalizacji treści',
      '   • Niemożność korzystania z niektórych funkcji',
      '',
      '6. INNE TECHNOLOGIE ŚLEDZĄCE:',
      'Oprócz cookies strona może wykorzystywać:',
      '   • Local Storage',
      '   • Session Storage',
      '   • Web beacons (piksele śledzące)',
      '   • Fingerprinting (w minimalnym zakresie)',
    ]
  },
  {
    title: '§8. Bezpieczeństwo danych osobowych',
    icon: faLock,
    content: [
      'Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo danych osobowych, w tym:',
      '',
      '1. ŚRODKI TECHNICZNE:',
      '   • Szyfrowanie połączenia SSL/TLS (certyfikat HTTPS)',
      '   • Szyfrowanie baz danych',
      '   • Zabezpieczenia serwerów (firewall, IDS/IPS)',
      '   • Regularne aktualizacje oprogramowania i systemów',
      '   • Ochrona przed atakami DDoS',
      '   • Zabezpieczenia antywirusowe i antimalware',
      '   • Bezpieczne przechowywanie kopii zapasowych',
      '   • Monitoring bezpieczeństwa IT',
      '',
      '2. ŚRODKI ORGANIZACYJNE:',
      '   • Polityki i procedury bezpieczeństwa informacji',
      '   • Ograniczenie dostępu do danych osobowych',
      '   • Umowy o poufności z pracownikami i współpracownikami',
      '   • Szkolenia z zakresu ochrony danych osobowych',
      '   • Procedury reagowania na incydenty bezpieczeństwa',
      '   • Regularne audyty bezpieczeństwa',
      '   • Ocena ryzyka dla przetwarzanych danych',
      '',
      '3. KOPIE ZAPASOWE:',
      '   • Regularne wykonywanie kopii zapasowych',
      '   • Przechowywanie kopii w bezpiecznych lokalizacjach',
      '   • Szyfrowanie kopii zapasowych',
      '   • Testowanie procedur odzyskiwania danych',
      '',
      '4. REAGOWANIE NA INCYDENTY:',
      'W przypadku naruszenia ochrony danych osobowych Administrator:',
      '   • Niezwłocznie podejmie działania naprawcze',
      '   • Zgłosi incydent do PUODO (w ciągu 72 godzin)',
      '   • Poinformuje osoby, których dane dotyczą (jeśli zachodzi wysokie ryzyko)',
      '   • Udokumentuje incydent i podjęte działania',
      '',
      '5. BEZPIECZEŃSTWO PŁATNOŚCI:',
      '   • Transakcje obsługiwane przez licencjonowanych operatorów',
      '   • Standard PCI DSS dla danych kart płatniczych',
      '   • Brak przechowywania danych kart płatniczych',
      '   • Bezpieczne protokoły komunikacji',
    ]
  },
  {
    title: '§9. Zautomatyzowane podejmowanie decyzji i profilowanie',
    icon: faDatabase,
    content: [
      'Administrator informuje, że:',
      '',
      '1. PROFILOWANIE W CELACH MARKETINGOWYCH:',
      'Dane osobowe mogą być przetwarzane w sposób zautomatyzowany (w tym w formie profilowania) w następujących celach:',
      '   • Dostosowanie treści marketingowych do zainteresowań użytkownika',
      '   • Personalizacja wyświetlanych reklam',
      '   • Analiza zachowań użytkowników na stronie',
      '   • Optymalizacja kampanii reklamowych',
      '',
      '2. ZAKRES PROFILOWANIA:',
      'Profilowanie obejmuje analizę lub prognozowanie:',
      '   • Zainteresowań i preferencji użytkownika',
      '   • Prawdopodobieństwa zakupu usług',
      '   • Efektywności działań marketingowych',
      '',
      '3. PODSTAWA PRAWNA I ZGODA:',
      '   • Profilowanie odbywa się na podstawie zgody użytkownika',
      '   • Zgoda może zostać cofnięta w dowolnym momencie',
      '   • Profilowanie nie wywołuje skutków prawnych ani nie wpływa w istotny sposób na sytuację użytkownika',
      '',
      '4. TWOJE PRAWA:',
      'Masz prawo do:',
      '   • Sprzeciwu wobec profilowania',
      '   • Uzyskania interwencji człowieka ze strony Administratora',
      '   • Wyrażenia własnego stanowiska',
      '   • Zakwestionowania decyzji opartej na profilowaniu',
      '',
      'Administrator NIE podejmuje zautomatyzowanych decyzji wywołujących skutki prawne lub w podobny sposób istotnie wpływających na użytkowników.',
    ]
  },
  {
    title: '§10. Postanowienia końcowe',
    icon: faExclamationTriangle,
    content: [
      '1. ZMIANA POLITYKI PRYWATNOŚCI:',
      '   • Administrator zastrzega sobie prawo do zmiany Polityki Prywatności',
      '   • O zmianach użytkownicy zostaną poinformowani na stronie internetowej',
      '   • Zmiany wchodzą w życie z chwilą publikacji nowej wersji',
      '   • Data ostatniej aktualizacji znajduje się na górze dokumentu',
      '',
      '2. LINKI DO STRON TRZECICH:',
      '   • Strona może zawierać linki do stron zewnętrznych',
      '   • Administrator nie odpowiada za politykę prywatności tych stron',
      '   • Zalecamy zapoznanie się z politykami prywatności witryn zewnętrznych',
      '',
      '3. KONTAKT:',
      'W sprawach dotyczących ochrony danych osobowych prosimy o kontakt:',
      '   📧 E-mail: kontakt@borem.pl',
      '   📞 Telefon: +48 787 041 328',
      '   📍 Adres: ul. Różana 28/66, 20-538 Lublin',
      '',
      '4. CZAS ODPOWIEDZI:',
      '   • Administrator odpowie na zapytania w ciągu 30 dni',
      '   • W uzasadnionych przypadkach termin może zostać przedłużony do 90 dni',
      '   • O przedłużeniu terminu użytkownik zostanie poinformowany',
      '',
      '5. PRAWO WŁAŚCIWE:',
      '   • Niniejsza Polityka Prywatności podlega prawu polskiemu',
      '   • W sprawach nieuregulowanych zastosowanie mają przepisy RODO i polskie ustawy',
      '',
      '6. AKCEPTACJA POLITYKI:',
      'Korzystanie ze strony oznacza akceptację niniejszej Polityki Prywatności. Jeśli nie zgadzasz się z jej postanowieniami, prosimy o zaprzestanie korzystania ze strony.',
    ]
  },
];

export default function PolitykaPrywatnosciPage() {
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
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
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
              <li className="text-white font-semibold">Polityka prywatności</li>
            </ol>
          </motion.nav>

          {/* Title */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 mb-6">
              <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Polityka{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                prywatności
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Szczegółowe informacje o przetwarzaniu i ochronie Twoich danych osobowych zgodnie z RODO
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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
              </motion.div>
            ))}
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"
          >
            <div className="text-center">
              <FontAwesomeIcon icon={faShieldAlt} className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Twoje dane są bezpieczne</h3>
              <p className="text-gray-300 leading-relaxed">
                Administratorem Twoich danych osobowych jest <strong>Borem Michał Boryń</strong>. Twoje dane są przetwarzane zgodnie z
                obowiązującymi przepisami prawa, w tym z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679
                z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych
                i w sprawie swobodnego przepływu takich danych (RODO). Masz pełne prawo do dostępu, sprostowania, usunięcia,
                ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu wobec przetwarzania swoich danych.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  W razie pytań lub wątpliwości dotyczących ochrony danych osobowych skontaktuj się z nami:
                </p>
                <a href="mailto:kontakt@borem.pl" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                  kontakt@borem.pl
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
