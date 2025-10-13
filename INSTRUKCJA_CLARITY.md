# Microsoft Clarity - Instrukcja Konfiguracji

## 🎯 Co to jest Microsoft Clarity?

Microsoft Clarity to **w pełni darmowe** narzędzie do analizy UX, które oferuje:
- 📹 **Nagrywanie sesji** - zobacz jak użytkownicy korzystają ze strony
- 🔥 **Heatmapy** - gdzie klikają użytkownicy
- 📊 **Scroll maps** - jak daleko scrollują
- 😡 **Rage clicks** - gdzie się frustrują
- ✅ **100% darmowy** - bezterminowo, bez limitów!

---

## 📋 Krok po kroku

### Krok 1: Załóż konto Microsoft Clarity

1. Wejdź na: **https://clarity.microsoft.com/**
2. Kliknij **"Sign in"** lub **"Get started - it's free"**
3. Zaloguj się przez:
   - Microsoft Account
   - Google Account
   - Facebook Account
4. Kliknij **"Create a new project"**

---

### Krok 2: Utwórz projekt

1. **Project name:** Borem.pl
2. **Website URL:** https://borem.pl
3. **Industry:** wybierz "Marketing & Advertising" lub "Web Development"
4. Kliknij **"Create project"**

---

### Krok 3: Skopiuj Project ID

Po utworzeniu projektu zobaczysz:

```
Project ID: xxxxxxxxxx
```

**To jest Twój Clarity Project ID!**

Skopiuj go - będzie potrzebny w następnym kroku.

---

### Krok 4: Dodaj Project ID do projektu

1. Otwórz/edytuj plik `.env.local` w głównym katalogu projektu
2. Dodaj linię:

```bash
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
```

**Zamień `xxxxxxxxxx` na swój prawdziwy Project ID!**

**Przykład `.env.local`:**
```bash
# Production URL
NEXT_PUBLIC_SITE_URL=https://borem.pl

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-8VMY8NJXJL

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_PROJECT_ID=abc123xyz456
```

---

### Krok 5: Zrestartuj serwer

```bash
# Zatrzymaj serwer (Ctrl+C)
npm run dev
```

---

### Krok 6: Przetestuj

1. Otwórz: **http://localhost:3000**
2. **Zaakceptuj cookies analityczne** (ważne!)
3. Kliknij po stronie, poscrolluj
4. Otwórz DevTools (F12) → Console
5. Sprawdź czy widzisz: `"Microsoft Clarity initialized"`

---

### Krok 7: Sprawdź w Clarity Dashboard

1. Wróć do: https://clarity.microsoft.com/
2. Wybierz swój projekt (Borem.pl)
3. **Poczekaj 5-10 minut** na pierwsze dane
4. Powinieneś zobaczyć:
   - Live view (aktywni użytkownicy)
   - Nagrania sesji
   - Heatmapy

---

## 🎥 Co możesz zobaczyć w Clarity?

### 1. Session Recordings (Nagrania sesji)
- Odtwarzaj sesje użytkowników jak wideo
- Zobacz dokładnie co robią na stronie
- Gdzie klikają, jak scrollują
- Gdzie się gubią lub frustrują

### 2. Heatmaps (Mapy ciepła)
- **Click maps** - gdzie najczęściej klikają
- **Scroll maps** - jak daleko scrollują
- **Area maps** - które sekcje przyciągają uwagę

### 3. Dashboard Metrics
- **Rage clicks** - wielokrotne kliknięcia w jedno miejsce (frustracja!)
- **Dead clicks** - kliknięcia w nieaktywne elementy
- **Quick backs** - szybkie wyjścia ze strony
- **JavaScript errors** - błędy techniczne
- **Excessive scrolling** - nadmierne scrollowanie (zagubienie)

---

## 🔒 WAŻNE - Prywatność (GDPR)

### Nasza implementacja jest zgodna z GDPR:

✅ **Clarity ładuje się TYLKO po akceptacji cookies analitycznych**
✅ Nie śledzi użytkowników bez zgody
✅ Integracja z CookieConsent
✅ Real-time reakcja na zmiany zgód

### Co Clarity automatycznie ukrywa:

- Wrażliwe dane wejściowe (hasła, karty kredytowe)
- Dane osobowe (jeśli są oznaczone)
- Elementy z klasą `.clarity-mask`

---

## 💡 Jak używać Clarity efektywnie?

### Tygodniowy workflow:

**Poniedziałek:**
1. Sprawdź dashboard → nowe błędy JavaScript?
2. Przejrzyj top 5 stron z najwyższym bounce rate

**Środa:**
3. Zobacz 5-10 nagrań sesji
4. Szukaj wzorców - gdzie użytkownicy się gubią?

**Piątek:**
5. Sprawdź heatmapy dla kluczowych stron
6. Zidentyfikuj elementy które są ignorowane
7. Zaplanuj optymalizacje na przyszły tydzień

---

## 🎯 Przykłady co możesz odkryć:

### Problemy które znajdziesz:

1. **Niedziałające przyciski**
   - Dead clicks pokazują gdzie użytkownicy klikają ale nic się nie dzieje

2. **Zagubienie w nawigacji**
   - Session recordings pokazują jak użytkownicy bezskutecznie szukają czegoś

3. **Niewidoczny content**
   - Scroll maps pokazują, że nikt nie scrolluje do ważnych sekcji

4. **Błędy JavaScript**
   - Dashboard pokazuje błędy które wpływają na UX

5. **Problemy mobile**
   - Nagrania mobile pokazują problemy z responsywnością

---

## 🚀 Zaawansowane funkcje

### 1. Segmentacja
Filtruj sesje według:
- Urządzenie (desktop/mobile)
- Kraj
- Źródło ruchu
- Konkretna strona
- Błędy JavaScript

### 2. Custom Tags
Możesz tagować sesje programatically:
```javascript
if (window.clarity) {
  clarity("set", "user_type", "premium");
  clarity("set", "plan", "enterprise");
}
```

### 3. Identify Users (opcjonalnie)
```javascript
if (window.clarity) {
  clarity("identify", "USER_ID", "SESSION_ID", "PAGE_ID", "friendly_name");
}
```

---

## 🔧 Rozwiązywanie problemów

### Problem: "Nie widzę danych w Clarity"

**Rozwiązania:**

1. **Sprawdź Project ID**
   - Upewnij się że ID w `.env.local` jest prawidłowe
   - Sprawdź w konsoli czy pojawia się "Microsoft Clarity initialized"

2. **Sprawdź cookies**
   - Musisz zaakceptować cookies analityczne
   - Sprawdź w localStorage czy `analytics: true`

3. **Poczekaj**
   - Pierwsze dane mogą pojawić się po 5-10 minutach
   - Nagran sesji może być mało na początku

4. **Sprawdź deployment**
   - Upewnij się że zmienne są w Vercel (Settings → Environment Variables)
   - Zrób redeploy jeśli dodałeś zmienne po ostatnim deploy

### Problem: "Clarity pokazuje niewłaściwe dane"

**Rozwiązania:**
- Sprawdź czy URL w projekcie Clarity to `https://borem.pl`
- Wyczyść cache przeglądarki
- Sprawdź w DevTools → Network czy ładuje się `clarity.ms/tag/`

### Problem: "Zbyt dużo danych wrażliwych"

**Rozwiązania:**
- Dodaj klasę `.clarity-mask` do wrażliwych elementów:
```html
<input type="text" className="clarity-mask" />
```

- Clarity automatycznie maskuje:
  - input type="password"
  - input type="email" (opcjonalnie)
  -
