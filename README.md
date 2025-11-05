# 💳 BankCardApp - React Native + Expo + TypeScript + Tailwind

Bu proje, modern bir **mobil bankacılık** arayüzünü simüle eden bir uygulamadır. Kullanıcıların kart bilgilerini, işlem geçmişini ve yatırım sekmelerini görüntülemesini sağlar.

📸 Ekran Görüntüsü

![Home](/assets/BankCardApp.jpg)

## 📁 Proje Yapısı

```
BankCardApp/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── analytics.tsx
│   │   ├── index.tsx
│   │   ├── investing.tsx
│   │   ├── more.tsx
│   │   └── wallet.tsx
│   ├── _layout.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   └── details.tsx
│
├── assets/                     
│
├── components/                 
│   ├── Button.tsx
│   ├── CardSlider.tsx
│   ├── Container.tsx
│   ├── CreditCard.tsx
│   ├── EditScreenInfo.tsx
│   ├── MoneyInfo.tsx
│   ├── QuickActions.tsx
│   ├── ScreenContent.tsx
│   └── TopInfo.tsx
│
├── node_modules/                
│
├── .gitattributes
├── .gitignore
├── app.json
├── babel.config.js
├── eslint.config.js
├── expo-env.d.ts
├── global.css
├── metro.config.js
├── nativewind-env.d.ts
├── package.json
├── package-lock.json
├── prettier.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 🛠 Kullanılan Teknolojiler

- ⚛️ **React Native** - Mobil uygulama geliştirme framework’ü  
- 🧩 **Expo** - React Native geliştirme ortamı  
- 🟦 **TypeScript** - Tip güvenli JavaScript  
- 🎨 **Tailwind CSS / NativeWind** - Utility-first stil sistemi  
- 🧹 **ESLint & Prettier** - Kod kalitesi ve biçimlendirme  
- ⚡ **React Navigation (Expo Router)** - Sekme ve sayfa yönlendirme  

## ✨ Özellikler

- 💳 Kredi kartı arayüzü  
- 📊 Yatırım ve analiz sekmeleri  
- 💰 Hızlı işlem (Quick Actions) menüsü  
- 🏦 Cüzdan ve para hareketleri görüntüleme  
- 🎨 Modern ve minimalist tasarım (Tailwind CSS ile)  
- 📱 Responsive mobil arayüz  

## 🧪 Gereksinimler

- Node.js 18+  
- npm veya yarn  
- Expo CLI

## 🚀 Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Uygulamayı başlat
npm run start
```

## 🧩 Önemli Dosyalar

- `app/(tabs)/` → Uygulama sekmeleri (Wallet, Analytics, Investing, More)  
- `components/` → Yeniden kullanılabilir UI bileşenleri  
- `assets/` → Görsel ve ikon dosyaları  
- `global.css` → Tailwind yapılandırması  
- `tailwind.config.js` → NativeWind teması  
