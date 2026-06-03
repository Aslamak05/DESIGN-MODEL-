# AXIOM Studio — Design Agency Homepage

A modern, production-quality design agency homepage built with **Next.js 14** (App Router), **Tailwind CSS**, and a refined dark aesthetic.

## 🚀 Live Demo
> Deploy to Vercel for a live link (see below)

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework, SSR, routing, metadata |
| **Tailwind CSS 3** | Utility-first styling |
| **next/image** | Optimized image rendering |
| **Google Fonts** | Playfair Display + DM Sans + DM Mono |
| **Vercel** | Recommended deployment target |

---

## ✨ Features

- **4 required sections**: Hero, Services, Portfolio, Contact
- **Dark/light mode toggle** via navbar button
- **Scroll-triggered reveal animations** on all sections
- **Parallax mouse-tracking** on the hero
- **Form validation** with inline error messages + success state
- **Next/Image optimization** for all portfolio thumbnails
- **SEO metadata** via `export const metadata` in layout.js
- **Fully responsive** — mobile, tablet, desktop
- **Geometric animated decorations** (floating shapes, shimmer text)
- **Custom scrollbar**, text selection color, noise texture overlay

---

## 📁 Folder Structure

```
design-agency/
├── app/
│   ├── layout.js        # Root layout + metadata + fonts
│   ├── page.js          # Homepage (assembles all sections)
│   └── globals.css      # Global styles, animations, CSS variables
├── components/
│   ├── Navbar.js        # Sticky navbar with dark mode toggle
│   ├── Hero.js          # Full-screen hero with parallax
│   ├── Services.js      # 4 service cards with icons
│   ├── Portfolio.js     # 6-project grid with hover effects
│   ├── Contact.js       # Form with validation + success message
│   └── Footer.js        # Simple footer
├── public/              # Static assets
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd design-agency

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

---

## 💡 Assumptions & Additional Features

- **Images** are fetched from Unsplash (configured in `next.config.js` remotePatterns) — no local assets required
- **Dark mode** defaults to `true` (dark theme on initial load); toggled with a sun/moon button in the navbar
- **Contact form** simulates submission with a 1.5s loading delay — no backend integration (extend with a service like Resend, Formspree, or a custom API route)
- **Portfolio items** link to `#` — extend with individual case study pages using Next.js dynamic routes
- **Fonts** are loaded via Google Fonts CDN for simplicity; for production, use `next/font/google` for zero-CLS

---

## 📝 Notes

- All components are **functional components** using React Hooks
- **No class components**, no Redux, no heavy dependencies
- Tailwind config extends the default theme with custom colors, fonts, and animation keyframes
- CSS variables are used for consistent theming across the custom CSS and Tailwind
