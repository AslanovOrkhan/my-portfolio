# 🚀 Orkhan Aslanov - Portfolio Website

Modern and responsive portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 🎨 **Modern UI/UX Design** - Clean and professional interface with gradient effects
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast loading
- 🎭 **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 📝 **Type-Safe** - Built with TypeScript for better code quality
- 🎯 **Interactive Components** - Dynamic typewriter effects, smooth scrolling, and more
- 🌙 **Dark Theme** - Eye-friendly dark color scheme
- 🔄 **Auto Hide Header** - Smart header that hides on scroll down and shows on scroll up
- 📧 **Contact Form** - Working contact form with validation
- 🎨 **Custom Swiper Sliders** - Beautiful carousels for portfolio and services

## 🛠️ Tech Stack

### Frontend
- **React** 19.2.0 - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Swiper** - Touch slider
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📂 Project Structure

```
orkhan-portfolio/
├── frontend/
│   ├── src/
│   │   ├── assets/          # Static assets
│   │   ├── components/      # Reusable components
│   │   │   ├── contactCard/
│   │   │   ├── contactForm/
│   │   │   ├── featureCard/
│   │   │   ├── portfolioCard/
│   │   │   ├── ScrollToTop/
│   │   │   ├── skillCard/
│   │   │   └── Typewriter/
│   │   ├── layout/          # Layout components
│   │   │   ├── Header/
│   │   │   └── Footer/
│   │   ├── pages/           # Page components
│   │   │   └── Home/
│   │   ├── routes/          # Route configuration
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── public/              # Public assets
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/AslanovOrkhan/my-portfolio.git
cd my-portfolio
```


# Orkhan Aslanov Portfolio

This is a full-stack personal portfolio project built with React (Vite), Tailwind CSS, and Node.js/Express. The project showcases my skills, projects, and contact information, and includes a backend for handling contact form submissions.

## ✨ Features
- Modern responsive design
- Animated sections and smooth scrolling
- Portfolio slider (Swiper.js)
- Downloadable CV
- Contact form with backend integration
- Dark UI with Tailwind CSS
- TypeScript type management

## 🛠️ Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Framer Motion, Swiper.js
- **Backend:** Node.js, Express.js

## 📁 Project Structure

```
orkhan-portfolio/
├── frontend/         # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── types/
│   │   └── ...
│   ├── public/
│   └── ...
├── backend/          # Backend (Node.js + Express)
│   ├── src/
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```

## 🖥️ Backend (Node.js & Express)

The `backend` folder contains the server-side code for handling contact form submissions and other API endpoints. It is built with Express.js and provides the following features:

- Accepts contact form data from the frontend via the **/api/contact** route
- Can be configured to send messages via email or store them in a database
- Uses CORS, body-parser, and other Express middleware for security and parsing

### Backend Folder Structure
```
backend/
├── src/
│   ├── server.js           # Main Express server file
│   ├── config/             # Configuration files (e.g., environment variables)
│   ├── controllers/        # API controller functions
│   └── routes/             # API routes
└── package.json
```

### Key Files and Features
- **server.js** — Starts the Express server and connects all routes
- **routes/contact.routes.js** — API endpoints for the contact form
- **controllers/contact.controller.js** — Handles contact form data processing and sending
- **config/** — Used for email sending or other configuration

### Running the Backend
```bash
cd backend
npm install
npm start
```

### Note
The backend can run locally or on a server. If you deploy only the frontend to platforms like Vercel or Netlify, you should host the backend separately (e.g., Render, Heroku, etc.).

---
## 🌐 Deployment
The frontend can be deployed as a static site to Vercel, Netlify, or other platforms. For the backend, you can use Vercel serverless functions or host it on a separate server.

## 📸 Demo
Live demo: [Demo Link](https://your-vercel-link.vercel.app/)

## 📬 Contact
- Email: orkhan.aslanov@example.com
- LinkedIn: [linkedin.com/in/orkhanaslanov](https://www.linkedin.com/in/orkhanaslanov)
- GitHub: [github.com/AslanovOrkhan](https://github.com/AslanovOrkhan)

---
> © 2025 Orkhan Aslanov. All rights reserved.
- Portfolio slider (Swiper.js)
- Downloadable CV
- Contact form with backend integration
- Dark UI with Tailwind CSS
- TypeScript type management

## 🛠️ Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, Framer Motion, Swiper.js
- **Backend:** Node.js, Express.js

## 📁 Project Structure

```
orkhan-portfolio/
├── frontend/         # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── types/
│   │   └── ...
│   ├── public/
│   └── ...
├── backend/          # Backend (Node.js + Express)
│   ├── src/
│   └── ...
└── README.md
```

## 🚀 Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```


## 🖥️ Backend (Node.js & Express)

Backend qovluğu layihənin server hissəsini təşkil edir və əsasən əlaqə formundan gələn mesajların göndərilməsi və saxlanılması üçün istifadə olunur. Burada Express.js ilə REST API yaradılıb və aşağıdakı əsas imkanlar mövcuddur:

- **/api/contact** route-u vasitəsilə frontend-dən gələn əlaqə formu məlumatlarını qəbul edir
- Gələn mesajları email və ya verilənlər bazasına göndərmək üçün konfiqurasiya oluna bilər
- Əlavə olaraq, təhlükəsizlik üçün CORS, body-parser və digər Express middleware-lərdən istifadə olunur

### Backend Qovluq Strukturu
```
backend/
├── src/
│   ├── server.js           # Express serverin əsas faylı
│   ├── config/             # Konfiqurasiya faylları (məs. environment variables)
│   ├── controllers/        # API üçün controller funksiyaları
│   └── routes/             # API route-ları
└── package.json
```

### Əsas Fayllar və İmkanlar
- **server.js** — Express serveri işə salır və bütün route-ları birləşdirir
- **routes/contact.routes.js** — Əlaqə formu üçün API endpoint-ləri
- **controllers/contact.controller.js** — Əlaqə formundan gələn məlumatların işlənməsi və göndərilməsi
- **config/** — Emaillə göndərmə və ya digər konfiqurasiya üçün istifadə olunur

### Backend-i İşə Salmaq
```bash
cd backend
npm install
npm start
```

### Qeyd
Backend lokalda və ya serverdə işləyə bilər. Əgər Vercel və ya Netlify kimi platformalarda yalnız frontend deploy edirsinizsə, backend-i ayrıca serverdə host etməlisiniz (məsələn, Render, Heroku və s.).

---
## 🌐 Deployment
Frontend as a static site can be deployed to Vercel, Netlify və ya digər platformalara. Backend üçün Vercel serverless functions və ya ayrıca server istifadə oluna bilər.

## 📸 Demo
Live demo: [Demo Link](https://your-vercel-link.vercel.app/)

## 📬 Contact
- Email: orkhan.aslanov@example.com
- LinkedIn: [linkedin.com/in/orkhanaslanov](https://www.linkedin.com/in/orkhanaslanov)
- GitHub: [github.com/AslanovOrkhan](https://github.com/AslanovOrkhan)

---
> © 2025 Orkhan Aslanov. All rights reserved.
