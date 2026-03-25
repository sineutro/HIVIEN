# HIVIEN — High Vision Engine

## Project Overview
- **Name**: HIVIEN (High Vision Engine)
- **Type**: B2B SaaS Marketing Website
- **Goal**: Convert business visitors into qualified leads by encouraging demo requests
- **Platform**: Cloudflare Pages + Hono Framework

## Live Demo
- **Dev Server**: http://localhost:3000
- **Production**: Deploy with `npm run deploy`

## Features Implemented

### Sections
1. **🚀 Hero Section** — Strong headline, animated AI dashboard mockup, call-to-action
2. **🏢 Trusted By** — Animated ticker with company logos
3. **💼 Use Cases** — 5 industry scenarios (Healthcare, Support, Sales, Logistics, Hospitality)
4. **⚙️ Product Overview** — Interactive tabbed dashboard with 5 feature panels
5. **🧠 How It Works** — 4-step setup guide
6. **📈 Benefits Section** — Outcome-driven metrics with comparison table
7. **💬 Testimonials** — 3 customer stories with metrics
8. **🛡️ Trust & Credibility** — Security badges, integrations, compliance
9. **📊 ROI Calculator** — Interactive slider-based savings estimator
10. **🎯 Demo Request Form** — 5-field form with success state
11. **📩 Footer** — Full company links, social, legal

### Interactive Features
- Sticky navbar with scroll detection
- Mobile hamburger menu
- Animated dashboard with auto-rotating tabs
- ROI calculator with real-time computation
- Demo form with loading state and success animation
- Typewriter effect on hero headline
- Scroll-triggered entry animations (IntersectionObserver)
- Counter animations for stats
- Parallax floating cards
- Logo ticker with hover pause
- CTA button ripple effects

## Tech Stack
- **Framework**: Hono 4.x
- **Runtime**: Cloudflare Pages / Workers
- **Build**: Vite + @hono/vite-build
- **Styling**: Custom CSS with Inter font + FontAwesome icons
- **Frontend**: Vanilla JS (no framework)
- **CSS**: Custom properties, CSS Grid, CSS animations

## Project Structure
```
webapp/
├── src/
│   └── index.tsx        # Main Hono app (all HTML served here)
├── public/
│   └── static/
│       ├── style.css    # Main stylesheet (~2000 lines)
│       ├── app.js       # Frontend JavaScript
│       ├── hivien-logo.png  # Brand logo
│       └── favicon.svg  # Favicon
├── ecosystem.config.cjs # PM2 config for dev server
├── wrangler.jsonc       # Cloudflare config
├── vite.config.ts       # Build config
└── package.json
```

## Development Commands
```bash
npm run build           # Build for production
npm run dev             # Vite dev server
pm2 start ecosystem.config.cjs  # Start with PM2 (sandbox)
pm2 restart hivien-webapp       # Restart
pm2 logs hivien-webapp --nostream  # Check logs
```

## Deployment to Cloudflare
```bash
# 1. Setup Cloudflare API key
# 2. Create project
npx wrangler pages project create hivien --production-branch main
# 3. Deploy
npm run build && npx wrangler pages deploy dist --project-name hivien
```

## Brand Colors
- Primary Dark: #1a3a6b
- Primary: #2d5aa8
- Accent: #3b82f6
- Background Dark: #060e1e / #0f1624

## Status
- ✅ Hero + Dashboard UI
- ✅ All 9 core sections
- ✅ Interactive ROI Calculator
- ✅ Demo Request Form
- ✅ Mobile Responsive
- ✅ Animations & Micro-interactions
- ❌ Backend form submission (needs API endpoint)
- ❌ Real-time chat widget
- ❌ Audio demo player
- ❌ Blog/Content pages

## Next Steps
1. Connect demo form to email service (SendGrid/Resend)
2. Add Cloudflare Pages deployment
3. Add Google Analytics / tracking
4. Create pricing page
5. Add case studies page
6. Integrate calendar booking (Calendly)
