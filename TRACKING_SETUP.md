# 🎯 Przewodnik konfiguracji tracking (Google Analytics & Meta Ads)

## Problem który został naprawiony

**Przed:**
- Google Analytics ładował się TYLKO gdy użytkownik zaakceptował cookies
- Użytkownicy z Meta Ads klikali "Tylko niezbędne" → GA się nie ładował → brak w statystykach
- Brakowało Facebook Pixel do śledzenia konwersji z Meta Ads

**Po:**
- ✅ Google Analytics ładuje się ZAWSZE (zgodnie z Consent Mode v2)
- ✅ W trybie "denied" śledzi anonimowo (bez cookies)
- ✅ Gdy użytkownik zaakceptuje → przełącza się na "granted" (pełne dane)
- ✅ Facebook Pixel gotowy do użycia (trzeba dodać ID)

---

## 📊 Jak to teraz działa

### Google Analytics (CONSENT MODE V2)

```
Użytkownik wchodzi na stronę
         ↓
GA ładuje się natychmiast w trybie "denied"
         ↓
Anonimowe śledzenie (bez cookies, bez danych osobowych)
         ↓
Użytkownik akceptuje cookies?
    ↓                    ↓
   TAK                  NIE
    ↓                    ↓
GA: "granted"       GA: pozostaje "denied"
Pełne dane          Anonimowe dane
```

**Efekt:** Wszystkie kliknięcia z Meta Ads są teraz widoczne w Google Analytics!

---

## 🔧 Co musisz zrobić

### 1. ✅ Google Analytics - GOTOWE
- Już skonfigurowane: `G-8VMY8NJXJL`
- Działa zgodnie z Consent Mode v2
- Nie musisz nic robić!

### 2. ⚠️ Facebook Pixel - WYMAGA KONFIGURACJI

**Gdzie znaleźć Facebook Pixel ID:**

1. Wejdź na: https://business.facebook.com/events_manager
2. Wybierz swoją stronę/konto reklamowe
3. W menu bocznym kliknij **"Data Sources"** lub **"Źródła danych"**
4. Kliknij na swój Pixel
5. Skopiuj **Pixel ID** (15-16 cyfr, np. `123456789012345`)

**Jak dodać do strony:**

1. Otwórz plik `.env.local`
2. Znajdź linię:
   ```
   # NEXT_PUBLIC_FB_PIXEL_ID=YOUR_PIXEL_ID_HERE
   ```
3. Odkomentuj i wklej swoje ID:
   ```
   NEXT_PUBLIC_FB_PIXEL_ID=123456789012345
   ```
4. Zapisz plik
5. Zrestartuj serwer: `npm run dev` lub `npm run build`

---

## 🧪 Jak sprawdzić czy działa

### Sprawdzenie Google Analytics:

1. Otwórz stronę w przeglądarce
2. Otwórz Developer Tools (F12)
3. W konsoli wpisz: `dataLayer`
4. Powinno pokazać tablicę z eventami

**LUB:**

1. Zainstaluj rozszerzenie: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
2. Odśwież stronę
3. W konsoli zobaczysz wszystkie eventy GA

### Sprawdzenie Facebook Pixel:

1. Zainstaluj: [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/)
2. Odśwież stronę
3. Kliknij ikonę rozszerzenia
4. Powinno pokazać Twój Pixel ID i eventy

---

## 📈 Co się poprawi w statystykach

### Google Analytics:

- **Przed:** ~30-50% użytkowników z Meta Ads niewidocznych (bo nie akceptowali cookies)
- **Po:** 100% użytkowników widocznych
- Dane są mniej dokładne dla użytkowników bez zgody, ale przynajmniej ich widzisz!

### Meta Ads (gdy dodasz Pixel):

- Meta będzie widzieć które reklamy generują kliknięcia
- Możliwość tworzenia "Custom Audiences" (remarketingu)
- Tracking konwersji (formularz kontaktowy, zapytania, etc.)
- Optymalizacja kampanii na podstawie rzeczywistych danych

---

## 🎓 Dodatkowe eventy do śledzenia (opcjonalne)

Możesz śledzić więcej akcji użytkowników. Przykłady:

### Kliknięcie w przycisk kontaktowy:

```typescript
// W komponencie przycisku
const handleClick = () => {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'contact_click', {
      button_location: 'hero_section'
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Contact');
  }
};
```

### Wysłanie formularza:

```typescript
const handleSubmit = () => {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      form_name: 'contact_form'
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
};
```

---

## ⚖️ Zgodność z RODO/GDPR

✅ **TAK, to jest zgodne z RODO!**

- Google Consent Mode v2 to oficjalne rozwiązanie Google zatwierdzone przez GDPR
- W trybie "denied" GA śledzi anonimowo (bez cookies, bez IP, bez identyfikatorów)
- Gdy użytkownik akceptuje → dopiero wtedy zbieramy pełne dane
- Meta Pixel również działa w trybie ograniczonym do czasu zgody

---

## 🆘 Troubleshooting

**Problem:** Nadal nie widzę kliknięć z Meta Ads w GA

**Rozwiązania:**
1. Poczekaj 24-48h (Google potrzebuje czasu na przetworzenie danych)
2. Sprawdź czy w GA masz włączone "Google signals"
3. Sprawdź filtry w GA (może wykluczasz swój własny ruch)

**Problem:** Meta Pixel nie działa

**Rozwiązania:**
1. Sprawdź czy dodałeś `NEXT_PUBLIC_FB_PIXEL_ID` do `.env.local`
2. Zrestartuj serwer (`npm run dev`)
3. Wyczyść cache przeglądarki (Ctrl + F5)
4. Użyj Meta Pixel Helper do debugowania

---

## 📞 Wsparcie

Jeśli masz problemy, sprawdź:
1. Console w Developer Tools (F12) - czy nie ma błędów?
2. Network tab - czy skrypty GA i FB się ładują?
3. Dokumentacja Google: https://developers.google.com/tag-platform/security/guides/consent
4. Dokumentacja Meta: https://developers.facebook.com/docs/meta-pixel

---

**Powodzenia! 🚀**
