# Nexgent

A modern, responsive landing page for **Nexgent** — a smart task management platform built with Next.js, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org/)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/)
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Icons** — [Lucide React](https://lucide.dev/)
- **Font** — [Satoshi](https://fontshare.com/fonts/satoshi) via Fontshare + Geist

---

## Project Structure

```
nextgen/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Footer.tsx      # Footer with CTA, links, newsletter
│   │   └── JoinButton.tsx  # Reusable animated join button
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with background image
│   │   ├── Trusted.tsx     # Trusted brands + feature grid
│   │   ├── HowItWorks.tsx  # 3-step how it works section
│   │   ├── Benefits.tsx    # Benefits grid
│   │   ├── ProductOverview.tsx  # Dashboard showcase
│   │   ├── Comparison.tsx  # Nexgent vs others comparison
│   │   ├── Pricing.tsx     # Pricing plans
│   │   ├── Testimonials.tsx # Testimonial carousel
│   │   └── FAQ.tsx         # Accordion FAQ
│   └── ui/
│       ├── spotlight.tsx
│       └── container-scroll-animation.tsx
├── data/
│   ├── benefits.ts         # Benefits array
│   ├── comparison.ts       # Pain points & Nexgent features
│   ├── faqs.ts             # FAQ questions & answers
│   ├── plans.ts            # Pricing plans
│   ├── reviews.ts          # Testimonial reviews
│   └── steps.ts            # How it works steps
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets (images, SVGs)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nextgen

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

---

## Sections

| Section | Description |
|---|---|
| Navbar | Transparent overlay nav with smooth scroll links |
| Hero | Full-screen background with animated CTA button |
| Trusted | Brand logos + feature grid cards |
| How It Works | 3-step process with animated images |
| Benefits | 6-card benefits grid |
| Product Overview | Dashboard image showcase on dark background |
| Comparison | Side-by-side Nexgent vs other platforms |
| Pricing | 3-tier pricing cards with hover animations |
| Testimonials | Animated review carousel |
| FAQ | Accordion with smooth open/close animation |
| Footer | CTA banner, logo, contact info, newsletter |

---

## Features

- Fully responsive for mobile, tablet, and desktop
- Smooth scroll navigation
- Framer Motion page animations
- Green shutter hover effects on buttons
- Animated arrow icon transitions (MoveUpRight → MoveRight)
- Data separated from components in `/data` folder

---

## Credits

- Designed by **Olynex**
- Powered by **Webflow**
- Template: [Olynex Agency](https://webflow.com/templates/designers/olynex-agency)

---

© 2026 Nexgent. All rights reserved.
