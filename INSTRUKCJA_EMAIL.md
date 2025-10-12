# 📧 Instrukcja konfiguracji wysyłki emaili

Formularz kontaktowy został skonfigurowany do wysyłania emaili na Twój adres. Musisz tylko ustawić klucz API Resend.

## 🚀 Kroki konfiguracji (5 minut)

### 1. Zarejestruj się na Resend (DARMOWE)
1. Wejdź na https://resend.com
2. Kliknij "Sign Up" i zarejestruj się (można przez GitHub)
3. Potwierdź email

### 2. Wygeneruj klucz API
1. Po zalogowaniu, wejdź w "API Keys" w menu
2. Kliknij "Create API Key"
3. Nazwa: "Borem Website"
4. Permission: "Sending access"
5. Kliknij "Add"
6. **WAŻNE:** Skopiuj klucz (zaczyna się od `re_...`)

### 3. Ustaw klucz API w projekcie
1. Otwórz plik `.env.local` w głównym folderze projektu
2. Zamień `re_your_api_key_here` na swój klucz:

```env
RESEND_API_KEY=re_twoj_prawdziwy_klucz_api
CONTACT_EMAIL=kontakt@borem.pl
```

3. Zapisz plik

### 4. Zrestartuj serwer
1. Zatrzymaj serwer (Ctrl+C w terminalu)
2. Uruchom ponownie: `npm run dev`

## ✅ Gotowe!

Teraz gdy ktoś wypełni formularz kontaktowy, dostaniesz **profesjonalnego emaila** na adres `kontakt@borem.pl` z:

- ✉️ Ładnie sformatowaną treścią
- 📱 Danymi kontaktowymi klienta  
- 🎯 Informacją o usłudze
- 💰 Budżecie
- 💬 Pełną wiadomością

## 📝 Testowanie

1. Otwórz http://localhost:3000/kontakt
2. Wypełnij formularz
3. Wyślij
4. Sprawdź swoją skrzynkę email!

## 🔧 Rozwiązywanie problemów

### Email nie przychodzi?
1. Sprawdź czy klucz API jest poprawnie ustawiony w `.env.local`
2. Sprawdź SPAM w swojej skrzynce
3. Sprawdź konsolę przeglądarki (F12) czy nie ma błędów
4. Sprawdź terminal (gdzie działa `npm run dev`) czy nie ma błędów

### Limit 100 emaili/dzień za mało?
- Darmowy plan Resend to 100 emaili/dzień
- Jeśli to za mało, możesz:
  - Upgrade na płatny plan ($20/mies za 50k emaili)
  - Użyć innego adresu email dla dodatkowych 100/dzień

### Chcę wysyłać z własnej domeny?
1. W Resend, wejdź w "Domains"
2. Dodaj swoją domenę (np. borem.pl)
3. Skonfiguruj DNS (Resend pokaże dokładne instrukcje)
4. Zmień w `app/api/contact/route.ts` linię:
   ```typescript
   from: 'Formularz <noreply@borem.pl>',
   ```

## 💡 Dodatkowe możliwości

### Automatyczna odpowiedź dla klienta?
Możesz dodać drugiego emaila w API endpoint, który wysyła automatyczną odpowiedź do klienta:

```typescript
// Wysłanie odpowiedzi do klienta
await resend.emails.send({
  from: 'Borem.pl <noreply@borem.pl>',
  to: [email], // email klienta
  subject: 'Dziękujemy za kontakt!',
  html: `Cześć ${name}! Otrzymaliśmy Twoją wiadomość...`
});
```

### Powiadomienia SMS?
Możesz zintegrować np. Twilio, aby dostawać SMS gdy ktoś wypełni formularz.

## 📞 Potrzebujesz pomocy?
Napisz na kontakt@borem.pl

---

**Status:** ✅ Formularz skonfigurowany i gotowy do użycia!
