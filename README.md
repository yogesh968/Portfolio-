# Portfolio Website

A modern, futuristic, premium portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Minimal, elegant, and futuristic design
- 🌙 Dark mode with premium color palette
- ✨ Smooth scrolling with Lenis
- 🎭 Framer Motion animations
- 📱 Fully responsive and accessible
- ⚡ Performance-focused

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Experience section
│   ├── Projects.tsx     # Projects section
│   ├── Achievements.tsx # Achievements section
│   ├── Certifications.tsx # Certifications section
│   ├── Education.tsx   # Education section
│   ├── Contact.tsx      # Contact section
│   ├── Footer.tsx       # Footer
│   └── SmoothScroll.tsx # Smooth scroll wrapper
└── data/
    └── resume.ts        # Resume data
```

## Customization

All content is stored in `data/resume.ts`. Update this file to customize your portfolio content.

## License

MIT




