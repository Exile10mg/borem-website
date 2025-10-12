# 🚀 Jak wrzucić projekt Borem.pl na Hostinger

## ⚠️ WAŻNE: Next.js wymaga Node.js

Next.js to framework, który **wymaga serwera Node.js**. Zwykły hosting PHP (cPanel) **NIE ZADZIAŁA**.

---

## 🎯 OPCJA 1: VERCEL (POLECANA - DARMOWA!) ⭐

**Najlepsza opcja dla Next.js - dedykowana, darmowa, zero konfiguracji!**

### Krok 1: Stwórz konto GitHub
1. Idź na https://github.com
2. Zarejestruj się (darmowe)
3. Zaloguj się

### Krok 2: Wrzuć projekt na GitHub
W terminalu w folderze projektu:
```bash
git init
git add .
git commit -m "Initial commit - Borem.pl"
git branch -M main
```

Stwórz repozytorium na GitHub:
- Kliknij `New repository`
- Nazwa: `borem-website`
- Kliknij `Create repository`

Wrzuć kod:
```bash
git remote add origin https://github.com/TWOJA_NAZWA/borem-website.git
git push -u origin main
```

### Krok 3: Deploy na Vercel
1. Idź na https://vercel.com
2. Kliknij "Sign up" (zaloguj przez GitHub)
3. Kliknij "Add New Project"
4. Wybierz `borem-website`
5. **WAŻNE:** Dodaj Environment Variables:
   ```
   RESEND_API_KEY=re_twoj_klucz_tutaj
   CONTACT_EMAIL=kontakt@borem.pl
   ```
6. Kliknij "Deploy"

**GOTOWE!** Za 2-3 minuty dostaniesz link typu:
`https://borem-website.vercel.app`

### Krok 4: Podłącz domenę z Hostinger do Vercel ✅

**NIE MUSISZ PRZENOSIĆ DOMENY!** Domena może zostać w Hostinger, tylko zmienisz DNS.

#### W Vercel (dodaj domenę):
1. Kliknij na swój projekt
2. Idź do: **Settings** → **Domains**
3. Dodaj domenę: `borem.pl`
4. Vercel wyświetli **3 opcje** - wybierz **Option 3** (Nameservers pozostają w Hostinger)
5. Vercel pokaże DNS records do dodania:
   ```
   A Record:     @     →  76.76.21.21
   CNAME Record: www   →  cname.vercel-dns.com
   ```

#### W Hostinger (zmień DNS):
1. Zaloguj się do panelu Hostinger
2. Idź do: **Domains** → wybierz `borem.pl`
3. Kliknij: **DNS / Name Servers**
4. **USUŃ stare rekordy A i CNAME** (jeśli są)
5. **DODAJ nowe rekordy:**
   - **A Record:**
     - Type: `A`
     - Name: `@` (lub zostaw puste)
     - Points to: `76.76.21.21`
     - TTL: `3600` (lub automatyczne)
   
   - **CNAME Record:**
     - Type: `CNAME`
     - Name: `www`
     - Points to: `cname.vercel-dns.com`
     - TTL: `3600`

6. Kliknij **Save** / **Zapisz**

#### Weryfikacja w Vercel:
1. Wróć do Vercel → Domains
2. Kliknij **Verify** obok `borem.pl`
3. Poczekaj 10-60 minut (propagacja DNS)
4. Status zmieni się na **Valid** ✅

**GOTOWE!** Strona działa na `https://borem.pl` 🎉

#### Troubleshooting:
- **"Domain not verified"** - poczekaj 1-2 godziny
- **Sprawdź DNS:** https://dnschecker.org
- **Błąd SSL** - poczekaj 24h (automatyczny certyfikat)

**KOSZT: 0 zł** (domena pozostaje w Hostinger, Vercel hosting darmowy) ✅

---

## 🖥️ OPCJA 2: HOSTINGER VPS

**Jeśli masz VPS lub Cloud Hosting na Hostinger**

### Krok 1: Połącz się przez SSH
```bash
ssh root@twoj-vps-ip
```

### Krok 2: Zainstaluj Node.js
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node --version  # Sprawdź wersję
```

### Krok 3: Zainstaluj PM2 (process manager)
```bash
npm install -g pm2
```

### Krok 4: Wgraj projekt
Opcja A - przez FTP/SFTP:
- Użyj FileZilla
- Wgraj cały folder projektu do `/var/www/borem`

Opcja B - przez Git:
```bash
cd /var/www
git clone https://github.com/TWOJA_NAZWA/borem-website.git borem
cd borem
```

### Krok 5: Zainstaluj zależności i zbuduj
```bash
cd /var/www/borem
npm install
npm run build
```

### Krok 6: Stwórz .env.local
```bash
nano .env.local
```
Wklej:
```
RESEND_API_KEY=re_twoj_klucz_tutaj
CONTACT_EMAIL=kontakt@borem.pl
```
Zapisz: `Ctrl + X`, potem `Y`, potem `Enter`

### Krok 7: Uruchom z PM2
```bash
pm2 start npm --name "borem" -- start
pm2 startup
pm2 save
```

### Krok 8: Skonfiguruj Nginx
```bash
sudo nano /etc/nginx/sites-available/borem
```

Wklej:
```nginx
server {
    listen 80;
    server_name borem.pl www.borem.pl;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktywuj:
```bash
sudo ln -s /etc/nginx/sites-available/borem /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Krok 9: SSL (HTTPS)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d borem.pl -d www.borem.pl
```

**GOTOWE!** Strona działa na `https://borem.pl`

**KOSZT: ~20-50 zł/miesiąc** (VPS)

---

## 🆚 PORÓWNANIE

| Opcja | Koszt | Trudność | Czas setup |
|-------|-------|----------|------------|
| **Vercel** ✅ | 0 zł | ⭐ Łatwe | 5 min |
| **Hostinger VPS** | ~30 zł/m | ⭐⭐⭐ Trudne | 30-60 min |

---

## 💡 POLECAM: VERCEL

**Dlaczego?**
- ✅ **Darmowe** (do 100GB bandwidth/miesiąc)
- ✅ **Zero konfiguracji** (Next.js out-of-the-box)
- ✅ **Automatyczne SSL**
- ✅ **CDN globalny** (szybka strona na całym świecie)
- ✅ **Auto-deploy** (push do GitHub = automatyczny update)
- ✅ **99.99% uptime**

**Kiedy VPS?**
- Jeśli już masz VPS
- Jeśli potrzebujesz backend/database na tym samym serwerze
- Jeśli masz specjalne wymagania

---

## 📝 CHECKLIST PRZED DEPLOYMENT

- [ ] Skonfigurowany Resend API key
- [ ] Przetestowane formularze lokalnie
- [ ] Wszystkie zdjęcia zoptymalizowane
- [ ] Sprawdzone wszystkie linki
- [ ] Dodane Google Analytics (opcjonalnie)
- [ ] Skonfigurowany Facebook Pixel (opcjonalnie)

---

## 🆘 POMOC

**Problem z Vercel?**
- Discord: https://discord.gg/vercel
- Docs: https://vercel.com/docs

**Problem z VPS?**
- Hostinger Support: panel → Help Center
- 24/7 Live Chat

---

## ✅ PO DEPLOYMENT

1. **Przetestuj formularz** - wyślij testową wiadomość
2. **Sprawdź na mobile** - responsywność
3. **Google Search Console** - dodaj stronę
4. **Facebook Pixel** - zainstaluj (do FB Ads)
5. **Google Analytics** - monitoruj ruch

---

**POWODZENIA Z DEPLOYMENT!** 🚀

Polecam Vercel - będziesz działać za 10 minut! 💪
