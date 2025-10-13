# Instrukcja konfiguracji Google Analytics 4

## 📋 Spis treści
1. [Tworzenie konta Google Analytics 4](#1-tworzenie-konta-google-analytics-4)
2. [Pobieranie Measurement ID](#2-pobieranie-measurement-id)
3. [Konfiguracja w projekcie](#3-konfiguracja-w-projekcie)
4. [Testowanie integracji](#4-testowanie-integracji)
5. [Weryfikacja danych w GA4](#5-weryfikacja-danych-w-ga4)

---

## 1. Tworzenie konta Google Analytics 4

### Krok 1.1: Wejdź na stronę Google Analytics
- Przejdź na: https://analytics.google.com/
- Zaloguj się na swoje konto Google

### Krok 1.2: Utwórz konto Analytics (jeśli nie masz)
1. Kliknij **"Start measuring"** (Rozpocznij pomiar)
2. Podaj nazwę konta (np. "Borem.pl")
3. Wybierz opcje udostępniania danych (zalecane domyślne)
4. Kliknij **"Next"** (Dalej)

### Krok 1.3: Utwórz właściwość (Property)
1. Podaj nazwę właściwości: **"Borem.pl - Strona główna"**
2. Wybierz strefę czasową: **Poland (GMT+01:00)**
3. Wybierz walutę: **Polish Zloty (PLN)**
4. Kliknij **"Next"** (Dalej)

### Krok 1.4: Informacje o firmie
1. Wybierz branżę: **"Internet and Telecom"** lub **"Business and Industrial Markets"**
2. Wybierz rozmiar firmy
3. Wybierz cele użycia Analytics (np. "Examine user behavior")
4. Kliknij **"Create"** (Utwórz)
5. Zaakceptuj warunki korzystania z usługi

---

## 2. Pobieranie Measurement ID

### Krok 2.1: Konfiguracja strumienia danych
Po utworzeniu konta zobaczysz ekran "Set up your data stream":

1. Wybierz platformę: **"Web"** (Sieć)
2. Wprowadź URL strony: **https://borem.pl**
3. Wprowadź nazwę strumienia: **"Borem.pl Website"**
4. Kliknij **"Create stream"** (Utwórz strumień)

### Krok 2.2: Skopiuj Measurement ID
Po utworzeniu strumienia zobaczysz szczegóły:

1. W górnej części ekranu znajdziesz **"Measurement ID"**
2. Format: `G-XXXXXXXXXX` (np. `G-ABC1234567`)
3. Kliknij ikonę kopiowania obok ID
4. **ZAPISZ TO ID** - będzie potrzebne w następnym kroku!

📝 **Przykład Measurement ID:** `G-ABC1234567`

---

## 3. Konfiguracja w projekcie

### Krok 3.1: Utwórz plik .env.local

W głównym katalogu projektu (gdzie jest package.json):

1. Jeśli plik `.env.local` nie istnieje, utwórz go
2. Jeśli istnieje, otwórz go do edycji

### Krok 3.2: Dodaj Measurement ID

Dodaj następującą linię do pliku `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

⚠️ **WAŻNE:** Zamień `G-XXXXXXXXXX` na swoje prawdziwe Measurement ID!

**Przykład:**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC1234567
```

### Krok 3.3: Zapisz plik

Zapisz plik `.env.local` i **zrestartuj serwer deweloperski**.

---

## 4. Testowanie integracji

### Krok 4.1: Zrestartuj serwer

W terminalu:
1. Zatrzymaj serwer: `Ctrl + C`
2. Uruchom ponownie: `npm run dev`

### Krok 4.2: Otwórz stronę

1. Otwórz: http://localhost:3000
2. Pojawi się banner cookies
3. **WAŻNE:** Kliknij **"Akceptuj wszystkie"** lub włącz "Cookies analityczne" w ustawieniach

### Krok 4.3: Sprawdź w konsoli przeglądarki

Otwórz DevTools (F12) i sprawdź:

1. Zakładka **Network** → filtruj po "analytics"
2. Powinny pojawić się żądania do:
   - `googletagmanager.com/gtag/js`
   - `google-analytics.com/g/collect`

3. Zakładka **Console** → sprawdź czy nie ma błędów

---

## 5. Weryfikacja danych w GA4

### Krok 5.1: Real-time reports (Raporty czasu rzeczywistego)

1. Wróć do Google Analytics: https://analytics.google.com/
2. Wybierz swoją właściwość (Borem.pl)
3. W menu po lewej stronie kliknij: **Reports** → **Realtime**
4. Powinieneś zobaczyć aktywnych użytkowników (siebie) na stronie!

### Krok 5.2: Sprawdź DebugView (opcjonalnie)

Dla bardziej szczegółowej diagnostyki:

1. W GA4 przejdź do: **Admin** → **DebugView**
2. Zainstaluj rozszerzenie "Google Analytics Debugger" w Chrome
3. Włącz rozszerzenie i odśwież stronę
4. W DebugView zobaczysz szczegółowe wydarzenia

---

## ✅ Checklist końcowy

- [ ] Utworzone konto Google Analytics 4
- [ ] Utworzona właściwość dla borem.pl
- [ ] Skopiowane Measurement ID
- [ ] Dodane `NEXT_PUBLIC_GA_MEASUREMENT_ID` do `.env.local`
- [ ] Zrestartowany serwer deweloperski
- [ ] Zaakceptowane cookies analityczne na stronie
- [ ] Widoczny ruch w czasie rzeczywistym w GA4

---

## 🔧 Rozwiązywanie problemów

### Problem: Nie widzę ruchu w GA4

**Rozwiązania:**
1. Sprawdź czy zaakceptowałeś cookies analityczne na stronie
2. Upewnij się, że Measurement ID jest poprawne w `.env.local`
3. Zrestartuj serwer deweloperski
4. Wyczyść cache przeglądarki (Ctrl + Shift + Delete)
5. Sprawdź Console w DevTools (F12) - czy są błędy?

### Problem: GA4 nie ładuje się wcale

**Rozwiązania:**
1. Sprawdź czy masz AdBlocka - wyłącz go na localhost
2. Sprawdź czy plik `.env.local` jest w głównym katalogu projektu
3. Upewnij się, że nazwa zmiennej to dokładnie: `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Problem: Cookies banner nie pokazuje się

**Rozwiązania:**
1. Wyczyść localStorage: DevTools → Application → Local Storage → Clear All
2. Odśwież stronę (F5)

---

## 📊 Co będzie śledzone?

Po poprawnej konfiguracji, Google Analytics 4 automatycznie śledzi:

- ✅ **Odsłony stron** (page views)
- ✅ **Liczba użytkowników** (unique users)
- ✅ **Sesje** (sessions)
- ✅ **Źródła ruchu** (traffic sources)
- ✅ **Geografia użytkowników** (location)
- ✅ **Urządzenia** (devices - desktop/mobile)
- ✅ **Zachowania na stronie** (scroll, engagement)

---

## 🎯 Następne kroki (opcjonalne)

Po wdrożeniu podstawowej integracji możesz:

1. **Skonfigurować konwersje** - np. wysłanie formularza kontaktowego
2. **Dodać wydarzenia niestandardowe** - np. kliknięcia w WhatsApp
3. **Połączyć z Google Search Console**
4. **Skonfigurować Google Ads remarketing**

---

## 📞 Potrzebujesz pomocy?

Jeśli masz problemy z konfiguracją:
- Sprawdź dokumentację: https://support.google.com/analytics/
- Kontakt: https://borem.pl/kontakt
