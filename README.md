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

2. Navigate to frontend directory
```bash
cd frontend
```

3. Install dependencies
```bash
npm install
```

4. Start development server
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The project uses a custom color palette defined in the Tailwind CSS configuration. Main colors:
- Primary: Cyan (#22d3ee) to Emerald (#34d399) gradient
- Background: Dark (#0a0a0a)
- Text: Light gray (#c4cfde)

### Fonts
The project uses system fonts for optimal performance.

## 📱 Sections

1. **Hero Section** - Introduction with animated typewriter effect
2. **About Section** - Personal information and CV download
3. **Skills Section** - Technical skills showcase
4. **Features Section** - Services offered with carousel
5. **Portfolio Section** - Project showcase with custom pagination
6. **Contact Section** - Contact form and information

## 🌟 Key Features Implementation

### Scroll-Triggered Animations
All major section headings have scroll-triggered typewriter animations using IntersectionObserver API.

### Auto-Hide Header
Smart header that automatically hides when scrolling down and shows when scrolling up.

### Smooth Scrolling
Smooth scroll behavior implemented throughout the site.

### Custom Swiper Pagination
Beautiful gradient pagination dots for portfolio slider.

### Responsive Navigation
Mobile-friendly navigation with smooth slide-in menu.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Orkhan Aslanov - [GitHub](https://github.com/AslanovOrkhan)

Project Link: [https://github.com/AslanovOrkhan/my-portfolio](https://github.com/AslanovOrkhan/my-portfolio)

---

⭐ If you like this project, please give it a star on GitHub!
