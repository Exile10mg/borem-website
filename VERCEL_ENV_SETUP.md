# Konfiguracja zmiennych środowiskowych w Vercel

## 🎯 Cel
Dodanie Google Analytics 4 do produkcji (Vercel)

---

## 📋 Krok po kroku

### Krok 1: Zaloguj się do Vercel

1. Wejdź na: https://vercel.com/
2. Zaloguj się na swoje konto
3. Przejdź do swojego projektu **Borem.pl**

---

### Krok 2: Przejdź do ustawień projektu

1. Kliknij na nazwę projektu (Borem.pl)
2. Kliknij zakładkę **"Settings"** (u góry)
3. W menu po lewej stronie wybierz **"Environment Variables"**

---

### Krok 3: Dodaj zmienną GA_MEASUREMENT_ID

1. W sekcji "Environment Variables" zobaczysz formularz
2. Wypełnij pola:

   **Key (Klucz):**
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID
   ```

   **Value (Wartość):**
   ```
   G-8VMY8NJXJL
   ```

3. **Environment:** Zaznacz wszystkie opcje:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. Kliknij **"Save"** (Zapisz)

---

### Krok 4: Redeploy projektu

Po dodaniu zmiennej środowiskowej musisz prze-deployować projekt:

#### Opcja A: Automatyczny redeploy przez push
```bash
# Najprostszy sposób - po prostu pushni cokolwiek do GitHuba
git commit --allow-empty -m "Trigger redeploy for GA4 env vars"
git push origin main
```

#### Opcja B: Manualny redeploy w Vercel
1. W Vercel przejdź do zakładki **"Deployments"**
2. Znajdź najnowszy deployment
3. Kliknij menu (trzy kropki) po prawej stronie
4. Wybierz **"Redeploy"**
5. Kliknij **"Redeploy"** w oknie potwierdzenia

---

### Krok 5: Weryfikacja

Po zakończeniu deployment:

1. Wejdź na swoją produkcyjną stronę: **https://borem.pl**
2. Zaakceptuj cookies analityczne
3. Sprawdź w Google Analytics:
   - Wejdź na https://analytics.google.com/
   - Reports → Realtime
   - Powinieneś zobaczyć ruch z borem.pl!

---

## 📊 Screenshot zmiennych w Vercel

Twoje zmienne powinny wyglądać tak:

```
Key: NEXT_PUBLIC_GA_MEASUREMENT_ID
Value: G-8VMY8NJXJL
Environments: Production, Preview, Development
```

---

## ✅ Checklist

- [ ] Zalogowano do Vercel
- [ ] Przeszedłem do Settings → Environment Variables
- [ ] Dodano `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-8VMY8NJXJL`
- [ ] Zaznaczono wszystkie środowiska (Production, Preview, Development)
- [ ] Zapisano zmienną
- [ ] Zrobiono redeploy projektu (git push lub manual)
- [ ] Strona działa na https://borem.pl
- [ ] Ruch widoczny w GA4 Realtime

---

## 🔧 Rozwiązywanie problemów

### Problem: Nie widzę zmiennej środowiskowej

**Rozwiązanie:**
- Upewnij się, że nazwa klucza to dokładnie: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Zmienna musi zaczynać się od `NEXT_PUBLIC_` aby była dostępna w przeglądarce

### Problem: GA4 nie działa po deploy

**Rozwiązania:**
1. Sprawdź czy zmienna jest dodana w Vercel (Settings → Environment Variables)
2. Sprawdź czy zrobiłeś redeploy po dodaniu zmiennej
3. Wyczyść cache przeglądarki (Ctrl + Shift + Delete)
4. Sprawdź w DevTools → Console czy są błędy
5. Sprawdź w DevTools → Network czy ładuje się gtag.js

### Problem: Ruch lokalny widać, produkcyjny nie

**Rozwiązania:**
1. Upewnij się, że zaakceptowałeś cookies analityczne na https://borem.pl
2. Sprawdź w GA4 czy stream jest skonfigurowany dla borem.pl
3. Odczekaj 5-10 minut - czasami dane w Realtime pojawiają się z opóźnieniem

---

## 📞 Dodatkowe zasoby

- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [GA4 Documentation](https://support.google.com/analytics/)

---

## 🎉 Gotowe!

Po wykonaniu tych kroków, Google Analytics 4 będzie działać na produkcji!
