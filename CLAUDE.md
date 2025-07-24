# CLAUDE.md - Formeta Labs Website Project Guide

## 🎯 Project Overview

**Formeta Labs Website** is a modern, professional corporate website for a Spanish technology consultancy specializing in enterprise digitalization. The project has undergone a complete transformation from a pixel-art aesthetic to a sophisticated glassmorphism-based design system.

### Key Information
- **Framework**: SvelteKit 2.22.0 with TypeScript
- **Styling**: Tailwind CSS 3.4.17 + Custom CSS with Glassmorphism
- **Typography**: Geist font system (replacing pixel-art fonts)
- **Version**: 0.0.1 (v2.0.0 in config)
- **Status**: Production-ready homepage, other pages in various states

## 🏗️ Project Architecture

### Technology Stack
```
Frontend:
├── SvelteKit 2.22.0 (Frontend Framework)
├── TypeScript 5.0.0 (Type Safety)
├── Tailwind CSS 3.4.17 (Styling Framework)
├── Vite 7.0.4 (Build Tool)
├── GSAP 3.13.0 (Animations)
├── Three.js 0.178.0 (3D Background Effects)
└── Clerk.js 5.74.1 (Authentication)

Development:
├── ESLint 9.31.0 (Linting)
├── Prettier 3.6.2 (Formatting)
├── svelte-check 4.0.0 (Type Checking)
└── autoprefixer + postcss (CSS Processing)
```

### Directory Structure
```
/
├── src/
│   ├── app.css                    # Main stylesheet (heavily modernized)
│   ├── app.html                   # HTML template
│   ├── lib/
│   │   ├── components/            # Reusable Svelte components
│   │   │   ├── AboutPreview.svelte
│   │   │   ├── AnimatedBackground.svelte
│   │   │   ├── ContactCTA.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte (multiple versions)
│   │   │   ├── Navigation.svelte
│   │   │   ├── ServiceModal.svelte
│   │   │   └── ServicesPreview.svelte
│   │   ├── stores/               # Svelte stores
│   │   │   ├── auth.ts          # Clerk authentication
│   │   │   ├── contact.ts       # Contact form state
│   │   │   └── settings.ts      # App settings
│   │   ├── types/               # TypeScript definitions
│   │   ├── services/            # API services
│   │   ├── composables/         # Reusable logic
│   │   └── utils/               # Utility functions
│   └── routes/                  # SvelteKit file-based routing
│       ├── +page.svelte         # Homepage (FULLY MODERNIZED)
│       ├── +layout.svelte       # Global layout
│       ├── contacto/            # Contact page
│       ├── nosotros/            # About page
│       ├── servicios/           # Services (with sub-services)
│       └── intranet/            # Protected area with admin panel
├── static/                      # Static assets
│   ├── fonts/                   # Geist font files
│   ├── images/                  # SVG icons and logos
│   └── formeta-favicon.svg      # Site favicon
├── formeta-styleguide/          # Design system reference
├── design/                      # Design assets
└── TODO.md                      # Comprehensive project log
```

## 🎨 Design System (Recently Modernized)

### Current State: **FULLY IMPLEMENTED**
The website has been completely transformed using the `formeta-styleguide/` as reference:

#### Color System
```css
/* Primary palette */
--formeta-primary: #007AFF        /* Blue digital */
--formeta-secondary: #64748B      /* Professional gray */
--formeta-accent: #FF6B6B         /* Coral accent */
--formeta-text: #1E293B          /* Primary text */

/* Extended palette (50-900 variants available) */
primary: { 50: '#EBF8FF', 500: '#007AFF', 900: '#002C51' }
secondary: { 50: '#F7FAFC', 500: '#64748B', 900: '#171923' }
accent: { 50: '#FFF5F5', 500: '#FF6B6B', 900: '#942222' }
```

#### Typography: Geist System
```css
/* Hierarchy implemented */
--font-size-display-large: 48px   /* Hero titles */
--font-size-display: 36px         /* Section titles */
--font-size-heading: 24px         /* Subtitles */
--font-size-body-large: 18px      /* Lead text */
--font-size-body: 16px            /* Normal text */
--font-size-body-small: 14px      /* Secondary text */
--font-size-caption: 12px         /* Labels */
```

#### Glassmorphism Components
The design system includes advanced glassmorphism effects:
```css
/* Base glass effect */
background: rgba(248, 250, 252, 0.6);
backdrop-filter: blur(16px);
border: 1px solid rgba(30, 41, 59, 0.08);
box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
```

## 🚀 Development Workflow

### Available Scripts
```bash
# Development
npm run dev              # Start dev server at localhost:5173 --host
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run check           # Type checking with svelte-check
npm run check:watch     # Watch mode type checking
npm run prepare         # Sync SvelteKit (with fallback)
```

### Environment Setup
```bash
# Installation
npm install

# Start development
npm run dev

# The server runs with --host flag, allowing external connections
# Configured for: formeta.es, localhost, 192.168.1.80
```

## 🔧 Configuration Details

### Vite Configuration
- **Adapter**: @sveltejs/adapter-auto
- **Allowed Hosts**: formeta.es, localhost, 192.168.1.80
- **Plugins**: SvelteKit integration

### Tailwind Configuration
- **Dark Mode**: Class-based (`darkMode: 'class'`)
- **Custom Theme**: Complete Formeta design system
- **Plugins**: @tailwindcss/forms, @tailwindcss/typography
- **Content**: All Svelte, JS, TS, HTML files in src/

### Key Features Implemented
1. **Glassmorphism Design System** - Professional cards and surfaces
2. **Geist Typography** - Complete hierarchy with CSS variables
3. **Responsive Grid Layouts** - Mobile-first approach
4. **Advanced Animations** - GSAP + CSS custom keyframes
5. **Three.js Background** - Subtle animated backgrounds
6. **Authentication** - Clerk.js integration for admin panel
7. **Contact Forms** - TypeScript interfaces and validation

## 📄 Page Status

### ✅ Completed Pages
- **Homepage (`/`)** - FULLY MODERNIZED
  - Glassmorphism hero section
  - Professional services preview
  - About section with stats
  - Technology showcase
  - Contact CTA with trust indicators

### 🔄 In Progress Pages
- **Services (`/servicios/`)** - Needs glassmorphism update
- **About (`/nosotros/`)** - Needs design system application
- **Contact (`/contacto/`)** - Functional but needs styling update

### 🔒 Protected Areas
- **Intranet (`/intranet/`)** - Basic dashboard
- **Admin Panel (`/intranet/admin/`)** - User management with Clerk

## 🛠️ Development Guidelines

### When Working on This Project:

#### 1. **ALWAYS** Reference the Styleguide
- Check `formeta-styleguide/index.html` for visual reference
- Use `formeta-styleguide/doc.html` for technical details
- Follow `formeta-styleguide/VERIFICACION.md` checklist

#### 2. Design System Usage
```css
/* Use CSS Variables (preferred) */
color: var(--formeta-primary);
font-size: var(--font-size-heading);

/* Or Tailwind classes */
bg-primary-500 text-heading font-primary
```

#### 3. Component Development
- All components should support dark mode
- Use glassmorphism patterns from `src/app.css`
- Include `prefers-reduced-motion` support
- Follow TypeScript interfaces from `src/lib/types/`

#### 4. File Modification Priority
1. **Edit existing files** before creating new ones
2. **Reference TODO.md** for current status and notes
3. **Update TODO.md** with any significant changes
4. **Test responsive design** on all breakpoints

## 🧩 Key Components

### Navigation (`src/lib/components/Navigation.svelte`)
- Glassmorphism navbar with backdrop blur
- Formeta logo with color-cycling animation
- Responsive dropdown menus
- Sticky positioning with enhanced scroll effects

### Hero Section (`src/routes/+page.svelte`)
- Three.js animated background
- Professional glassmorphism cards
- Enterprise metrics with tweened animations
- Mobile-optimized layout

### Service Modal (`src/lib/components/ServiceModal.svelte`)
- **Status**: Referenced but needs completion
- Should follow glassmorphism design patterns

## 🔍 Testing & Quality Assurance

### Before Deployment
1. **Console Error Check** - Verify no import/prop errors
2. **Cross-Browser Testing** - Chrome, Firefox, Safari
3. **Responsive Testing** - All breakpoints (sm, md, lg, xl)
4. **Performance Audit** - Lighthouse score optimization
5. **Accessibility Check** - Screen reader compatibility

### Performance Considerations
- Lazy loading for complex animations
- CSS optimized with @supports queries
- Minimal JavaScript footprint maintained
- Reduced motion support implemented

## 📚 Important Files to Review

### Critical Configuration
- `src/app.css` - Complete design system implementation
- `tailwind.config.js` - Extended theme with Formeta tokens
- `TODO.md` - Comprehensive project log and status
- `.github/instructions/backend.instructions.md` - Development protocols

### Key Components to Understand
- `src/routes/+page.svelte` - Homepage (reference implementation)
- `src/lib/components/Navigation.svelte` - Modern navbar
- `src/lib/stores/auth.ts` - Clerk authentication logic
- `src/lib/types/contact.ts` - TypeScript interfaces

## 🚨 Known Issues & Next Steps

### High Priority Fixes
1. **ServiceModal completion** - Referenced but not fully implemented
2. **Console error review** - Check imports and references
3. **Cross-browser testing** - Ensure Safari compatibility
4. **Mobile optimization** - Fine-tune responsive breakpoints

### Medium Priority Optimizations
- CSS purging for unused styles
- Bundle size optimization
- Analytics implementation
- A/B testing for CTAs

## 🎯 Business Context

**Formeta Labs** specializes in:
1. **VeriFactu Compliance** - Spanish tax regulation compliance
2. **Enterprise AI Solutions** - Local LLM implementations
3. **Web Development** - Modern SvelteKit applications
4. **Process Automation** - Business workflow optimization

The website serves as both a marketing tool and a platform for client services, including a protected intranet area for client management and an admin panel for user administration.

---

## 🔗 Quick References

- **Styleguide**: `formeta-styleguide/index.html`
- **Project Status**: `TODO.md`
- **Type Definitions**: `src/lib/types/`
- **Design System**: `src/app.css`
- **Configuration**: `tailwind.config.js`, `vite.config.ts`

---

*This guide was generated on 2025-01-22. For the most current information, always check the TODO.md file and recent git commits.*