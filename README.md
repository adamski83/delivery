# 🚚 Delivery

Nowoczesna aplikacja do zarządzania dostawami zbudowana w Next.js 15 z
wykorzystaniem najnowszych technologii webowych.

## ✨ Funkcjonalności

- 🎯 **Nowoczesny interfejs** - Responsywny design z Tailwind CSS
- ⚡ **Wysoka wydajność** - Next.js 15 z Turbopack
- 🔧 **TypeScript** - Pełne wsparcie dla TypeScript
- 🎨 **Stylowanie** - Tailwind CSS 4 z customową konfiguracją
- 📱 **Responsywność** - Optymalizacja dla wszystkich urządzeń
- 🔍 **Linting** - ESLint z konfiguracją Next.js

## 🛠️ Stack technologiczny

- **Framework**: Next.js 15.4.1
- **Język**: TypeScript 5
- **Stylowanie**: Tailwind CSS 4
- **Runtime**: React 19.1.0
- **Narzędzia**: ESLint, Turbopack

## 🚀 Szybki start

### Wymagania

- Node.js 18.0 lub nowszy
- npm, yarn, pnpm lub bun

### Instalacja

1. **Klonuj repozytorium**

```bash
git clone [URL-repo]
cd delivery
```

2. **Zainstaluj zależności**

```bash
npm install
```

3. **Uruchom serwer deweloperski**

```bash
npm run dev
```

4. **Otwórz w przeglądarce** Przejdź do
   [http://localhost:3000](http://localhost:3000)

## 📝 Dostępne skrypty

```bash
# Uruchom serwer deweloperski z Turbopack
npm run dev

# Zbuduj aplikację do produkcji
npm run build

# Uruchom serwer produkcyjny
npm run start

# Uruchom linter
npm run lint
```

## 📁 Struktura projektu

```
delivery/
├── app/                    # App Router (Next.js 13+)
│   ├── favicon.ico        # Favicon
│   ├── globals.css        # Globalne style
│   ├── layout.tsx         # Główny layout
│   └── page.tsx           # Strona główna
├── public/                # Statyczne zasoby
├── eslint.config.mjs      # Konfiguracja ESLint
├── next.config.ts         # Konfiguracja Next.js
├── package.json           # Zależności i skrypty
├── postcss.config.mjs     # Konfiguracja PostCSS
├── tailwind.config.ts     # Konfiguracja Tailwind CSS
└── tsconfig.json          # Konfiguracja TypeScript
```

## 🎨 Stylowanie

Projekt wykorzystuje **Tailwind CSS 4** do stylowania komponentów. Konfiguracja
znajduje się w pliku `tailwind.config.ts`.

### Główne funkcje stylowania:

- Responsywny design
- Customowe kolory i komponenty
- Optymalizacja rozmiaru bundle'a
- Dark mode support (do dodania)

## 🔧 Konfiguracja

### TypeScript

Projekt jest w pełni skonfigurowany z TypeScript z strict mode włączonym.

### ESLint

Wykorzystuje konfigurację `eslint-config-next` z dodatkowymi regułami.

### Next.js

Konfiguracja w `next.config.ts` - gotowa do rozszerzenia o dodatkowe opcje.

## 🚀 Deployment

### Vercel (Rekomendowane)

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Inne platformy

```bash
# Zbuduj aplikację
npm run build

# Uruchom serwer produkcyjny
npm run start
```

## 📚 Przydatne linki

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## 📄 Licencja

Ten projekt jest prywatny i nie posiada otwartej licencji.

## 👨‍💻 Autor

**Adamski83** - _Initial work_

---

⭐ Jeśli projekt Ci się podoba, zostaw gwiazdkę!
