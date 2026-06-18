# Nextgen Portfolio

Premium AI Engineer portfolio for Shashank Singh, built as a standalone Next.js application inside `nextgen-portfolio/`.

The original static portfolio at the repository root is intentionally untouched and remains fully functional.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- React Three Fiber
- Three.js
- Shadcn-style UI components
- Lucide React
- Lenis smooth scroll

## Routes

- `/` - Home
- `/about` - About
- `/experience` - Experience timeline
- `/skills` - Interactive AI galaxy and skill graph
- `/projects` - Product-style project presentations
- `/ai-systems` - Animated AI architecture diagrams
- `/case-studies` - Case-study index
- `/case-studies/[slug]` - Premium project case-study pages
- `/resume` - Resume and capability summary
- `/contact` - Contact links

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deploy

Recommended deployment: Vercel.

1. Import this repository in Vercel.
2. Set the project root to `nextgen-portfolio`.
3. Use the default Next.js build settings.
4. Deploy.

For other hosts, run `npm run build` from `nextgen-portfolio/` and serve the Next.js production app with `npm run start`.
