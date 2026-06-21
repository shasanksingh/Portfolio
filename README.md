# Nextgen Portfolio

Premium AI Engineer portfolio for Shashank Singh, built as a standalone Next.js application. The release branch publishes this application at the GitHub repository root.

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

Recommended local runtime:

- Node.js 20 or newer
- npm 10.5 or newer

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
npm run lint
npm run typecheck
npm run build
npm run start
```

## Verification

This project is designed to be checked with:

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy On Netlify

The application uses Next.js static export because every route is prerendered. The checked-in `netlify.toml` configures Netlify to publish the generated site:

- Base directory: repository root
- Build command: `npm run build`
- Publish directory: `out`
- Node.js: 20

After migrating from the previous static HTML site, use **Clear cache and deploy site** once in Netlify. In **Build settings**, ensure the base directory is empty or `.`, rather than `nextgen-portfolio`.

Vercel can also deploy the repository with its default Next.js settings and no custom root directory.
