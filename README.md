# DentaIQ — AI Platform for Dentistry

A modern, responsive, multi-section marketing website for DentaIQ.

## Tech Stack

- **React 18 + TypeScript** — component framework
- **Vite** — build tool and dev server
- **Tailwind CSS v3** — utility-first styling with custom design tokens
- **Framer Motion** — scroll-reveal and hover animations
- **React Router v6** — client-side routing
- **Lucide React** — icons

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The dev server runs at **http://localhost:5173** by default.

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # TopBar, Navbar (mega-menu), Footer, Layout
│   └── shared/        # Reusable components
├── content/           # ← Edit all copy here (no CMS needed)
│   ├── nav.ts         # Mega-menu links and product descriptions
│   ├── homepage.ts    # All homepage section content
│   ├── pricing.ts     # Pricing tiers and feature table
│   ├── blog.ts        # Blog post data
│   └── glossary.ts    # A-Z dental AI terms
├── hooks/
│   └── useCountUp.ts  # Animated number counter hook
├── pages/             # One file per route
│   ├── solutions/     # Audience pages (Dentists, DSOs, Insurers, Educators)
│   └── products/      # Product pages (Vision AI, Imaging, Voice, etc.)
├── lib/
│   └── utils.ts       # cn() class-merging utility
└── App.tsx            # React Router route tree
```

---

## Editing Content

All copy lives in **`src/content/`** — no CMS required. Each file exports typed TypeScript constants.

### Homepage sections (src/content/homepage.ts)
- `heroContent` → Hero section
- `productSuiteContent` → Product suite cards
- `featureShowcaseContent` → Feature rows (Vision AI, Imaging, Insurance Verification, Voice)
- `howItWorksContent` → How it works steps
- `statsContent` → Animated stat numbers (marked as placeholder)
- `testimonialsContent` → Quote cards
- `faqContent` → FAQ accordion
- `missionContent` → Mission section
- `finalCtaContent` → Final CTA band

### Navigation (src/content/nav.ts)
Controls the audience mega-menu dropdowns and product descriptions.

### Blog posts (src/content/blog.ts)
Add entries to `blogPosts` following the `BlogPost` interface.

### Pricing (src/content/pricing.ts)
Edit `pricingTiers` and `pricingFeatures`.

---

## Reusable Components

| Component | Purpose |
|---|---|
| `Section` | Padded section with bg variants |
| `Container` | Max-width centred wrapper |
| `Button` | Primary / Secondary / Ghost |
| `AnimatedSection` | Scroll-reveal wrapper (Framer Motion) |
| `FeatureRow` | Alternating text + illustration rows |
| `TestimonialCard` | Quote card with avatar placeholder |
| `LogoMarquee` | Auto-scrolling trusted-by strip |
| `StatCounter` | Animated count-up on scroll |
| `PricingCard` | Pricing tier card |
| `FAQAccordion` | Accessible accordion |
| `SolutionPageTemplate` | Inner page template (hero + benefits + FAQ + CTA) |
| `Illustrations` | Inline SVG dental illustrations |

---

## Design System

Custom Tailwind colour tokens (tailwind.config.js):

| Token | Hex | Usage |
|---|---|---|
| `white` | `#FFFFFF` | Main backgrounds |
| `neige` | `#F6F4F0` | Alternate sections, on-dark text |
| `neige-dark` | `#ECE9E3` | Cards, fills |
| `black` | `#121212` | Hero, footer, primary buttons |
| `black-soft` | `#1E1E1E` | Hover states |
| `border` | `#DAD8D3` | Dividers |
| `muted` | `#8A8885` | Captions, labels |
| `body` | `#4A4947` | Body copy |

---

## Accessibility

- WCAG AA colour contrast throughout
- All interactive elements have unique `id` attributes and ARIA labels
- FAQ accordion uses `aria-expanded` / `aria-controls`
- Animations respect `prefers-reduced-motion`
- Skip-to-main via `id="main-content"`

---

## Disclaimer

> AI outputs are decision-support tools and do not replace the clinical judgment of a licensed dentist.

This appears in the footer on every page.

---

## Placeholder Data Note

Stats in the Stats Band are marked `* Placeholder — representative data`. Replace with verified figures before launch.
