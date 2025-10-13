# Dodawanie strony do Google Search Console - Instrukcja

## 🎯 Cel
Dodanie Borem.pl do Google Search Console dla monitorowania SEO, pozycji i ruchu organicznego

---

## 📋 Krok po kroku

### Krok 1: Zaloguj się do Google Search Console

1. Wejdź na: **https://search.google.com/search-console**
2. Zaloguj się tym samym kontem Google co Google Analytics
3. Kliknij **"Dodaj właściwość"** (Add Property)

---

### Krok 2: Wybierz typ właściwości

Zobaczysz dwa typy:

#### Opcja A: Domena (ZALECANE) ✅
```
Domena: borem.pl
```
**Zalety:**
- Śledzi wszystkie subdomeny (www.borem.pl, borem.pl)
- Śledzi wszystkie protokoły (http, https)
- Kompletne dane

**Wymaga:** Weryfikacji przez DNS (rekord TXT u hostingera)

#### Opcja B: Prefiks URL
```
URL: https://borem.pl
```
**Zalety:**
- Szybsza weryfikacja
- Łatwiejsza dla początkujących

**Wady:**
- Tylko ten konkretny URL

**REKOMENDACJA:** Wybierz **"Domena"** dla kompletnych danych

---

### Krok 3: Weryfikacja właściciela

Google oferuje kilka metod weryfikacji:

#### METODA 1: Google Analytics (NAJŁATWIEJSZA) ✅

**Jeśli masz już Google Analytics 4:**

1. Po wybraniu właściwości, przewiń do metod weryfikacji
2. Wybierz **"Google Analytics"**
3. Google automatycznie wykryje twoje konto GA4
4. Kliknij **"Weryfikuj"**
5. ✅ Gotowe!

**Uwaga:** Używaj tego samego konta Google co w GA4!

---

#### METODA 2: Tag HTML (ALTERNATYWNA)

**Jeśli Google Analytics nie zadziała:**

1. Google pokaże meta tag:
```html
<meta name="google-site-verification" content="TU_BĘDZIE_DŁUGI_KOD" />
```

2. Skopiuj ten kod
3. Wklej do pliku `app/layout.tsx` w sekcji `<head>`
4. Push do GitHuba
5. Poczekaj na deploy w Vercel
6. Wróć do Search Console i kliknij **"Weryfikuj"**

**Gdzie dodać w layout.tsx:**
```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no" />
        {/* TUTAJ DODAJ META TAG OD GOOGLE */}
        <meta name="google-site-verification" content="TWÓJ_KOD" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

---

#### METODA 3: DNS (DLA WERYFIKACJI DOMENY)

**Jeśli wybrałeś opcję "Domena":**

1. Google pokaże rekord TXT:
```
Typ: TXT
Host/Nazwa: @
Wartość: google-site-verification=DŁUGI_KOD
```

2. Zaloguj się do panelu hostingera (Hostinger)
3. Przejdź do **DNS/Nameservers**
4. Dodaj nowy rekord:
   - **Typ:** TXT
   - **Nazwa/Host:** @ (lub zostaw puste)
   - **Wartość:** Wklej kod od Google
   - **TTL:** 3600 (lub domyślne)
5. Zapisz zmiany
6. Poczekaj 5-60 minut na propagację DNS
7. Wróć do Search Console i kliknij **"Weryfikuj"**

---

### Krok 4: Po weryfikacji

Po pomyślnej weryfikacji:

1. ✅ Zobaczysz dashboard Google Search Console
2. Google zacznie zbierać dane (trwa 24-48h)
3. Przejdź do następnego kroku: **Dodaj sitemap.xml**

---

## 🗺️ Krok 5: Dodaj Sitemap.xml

**WAŻNE:** To zwiększy szybkość indeksowania!

1. W Google Search Console, w menu po lewej kliknij **"Sitemaps"**
2. W polu tekstowym wpisz:
```
sitemap.xml
```
3. Kliknij **"Wyślij"** (Submit)
4. ✅ Status: "Sukces" (może potrwać kilka minut)

**Twój sitemap:** https://borem.pl/sitemap.xml

---

## 📊 Krok 6: Co sprawdzić po dodaniu

Po 24-48 godzinach sprawdź:

### 1. Przegląd (Overview)
- Ile stron jest zaindeksowanych
- Błędy indeksowania
- Wydajność mobilna

### 2. Wydajność (Performance)
- Kliknięcia z Google
- Wyświetlenia
- CTR (Click-Through Rate)
- Średnia pozycja

### 3. Zasięg (Coverage/Index)
- Ile stron zaindeksowano
- Błędy indeksowania
- Ostrzeżenia

### 4. Core Web Vitals
- LCP (Largest Contentful Paint)
- FID (First Input Delay)
- CLS (Cumulative Layout Shift)

### 5. Dostępność (Mobile Usability)
- Problemy z wersją mobilną
- Elementy zbyt blisko siebie

### 6. Strukturyzowane dane (Rich Results)
- Status Schema.org
- Błędy structured data
- Podgląd rich snippets

---

## ⚙️ Krok 7: Dodatkowe ustawienia

### A) Ustaw preferowaną domenę
1. Idź do **Ustawienia** → **Ustawienia witryny**
2. Wybierz preferowaną wersję:
   - https://borem.pl (zalecane)
   - https://www.borem.pl

### B) Wskaż lokalizację docelową
1. Idź do **Ustawienia** → **Ustawienia witryny**
2. **Kraj docelowy:** Polska

### C) Połącz z Google Analytics
1. Idź do **Ustawienia** → **Skojarzenia**
2. Połącz z kontem Google Analytics 4
3. Dane będą synchronizowane

---

## 🔧 Rozwiązywanie problemów

### Problem: "Nie można zweryfikować właściciela"

**Rozwiązania:**

1. **Dla Google Analytics:**
   - Upewnij się, że GA4 jest aktywny na stronie
   - Sprawdź czy używasz tego samego konta Google
   - Poczekaj 24h po dodaniu GA4

2. **Dla Meta Tag:**
   - Sprawdź czy meta tag jest w `<head>`
   - Sprawdź kod źródłowy strony (Ctrl+U)
   - Poczekaj na deploy w Vercel

3. **Dla DNS:**
   - Sprawdź czy rekord TXT jest poprawny
   - Poczekaj 1-2 godziny na propagację
   - Użyj narzędzia: https://mxtoolbox.com/TXTLookup.aspx

### Problem: "Sitemap nie może być przetworzony"

**Rozwiązania:**
- Sprawdź czy https://borem.pl/sitemap.xml działa
- Upewnij się że nie ma błędów XML
- Poczekaj 24h i spróbuj ponownie

### Problem: "Żadne strony nie są indeksowane"

**Rozwiązania:**
- Poczekaj 48-72h po dodaniu sitemap
- Sprawdź robots.txt (https://borem.pl/robots.txt)
- Sprawdź czy strona jest dostępna publicznie
- Użyj "Sprawdź URL" w Search Console

---

## 📈 Co będziesz mógł monitorować

Po skonfigurowaniu Google Search Console będziesz miał dostęp do:

✅ **Wydajność:**
- Które frazy kluczowe przynoszą ruch
- Pozycje w wyszukiwarce
- CTR dla każdej frazy
- Wykresy ruchu organicznego

✅ **Indeksowanie:**
- Ile stron jest w Google
- Błędy crawlingu
- Status każdej strony

✅ **Doświadczenie:**
- Core Web Vitals (szybkość)
- Problemy z mobile
- HTTPS status

✅ **Ulepszenia:**
- Rich results status
- Strukturyzowane dane
- Breadcrumbs

✅ **Bezpieczeństwo:**
- Problemy z bezpieczeństwem
- Hacked content alerts

---

## ✅ Checklist

- [ ] Zalogowano do Google Search Console
- [ ] Dodano właściwość (Domena lub URL)
- [ ] Zweryfikowano właściciela (GA4 lub Meta Tag lub DNS)
- [ ] Dodano sitemap.xml
- [ ] Ustawiono kraj docelowy: Polska
- [ ] Połączono z Google Analytics
- [ ] Sprawdzono po 48h czy strony są indeksowane

---

## 🎯 Oczekiwane rezultaty

Po 7-14 dniach:
- ✅ 20+ stron zaindeksowanych
- ✅ Rich snippets widoczne w Google
- ✅ Pierwsze wyświetlenia w wynikach
- ✅ Monitorowanie pozycji

Po 30 dniach:
- ✅ Pierwsze kliknięcia organiczne
- ✅ Dane o frazach kluczowych
- ✅ Statystyki wydajności
- ✅ Wzrost widoczności

---

## 📞 Przydatne linki

- **Google Search Console:** https://search.google.com/search-console
- **Pomoc Search Console:** https://support.google.com/webmasters
- **Test Rich Results:** https://search.google.com/test/rich-results
- **Check DNS TXT:** https://mxtoolbox.com/TXTLookup.aspx

---

## 🚀 Podsumowanie

Po wykonaniu tych kroków:
1. Twoja strona będzie widoczna w Google Search Console
2. Google rozpocznie indeksowanie wszystkich stron
3. Otrzymasz dane o wydajności SEO
4. Będziesz mógł monitorować pozycje i ruch
5. Otrzymasz alerty o problemach

**Czas realizacji:** 30-60 minut
**Pierwsze dane:** 24-48 godzin
**Pełne dane:** 7-14 dni

Powodzenia! 🎉
