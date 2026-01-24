# Feepost Software & Development Corporation

Veteran-Owned Software Engineering & Digital Infrastructure Solutions built with a high-trust, enterprise-ready design system.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui patterns
- **Motion:** framer-motion (subtle section reveals)
- **Linting:** ESLint
- **Node:** 20.x
- **Deployment:** Vercel-optimized

## Local Development

1. Install dependencies:
   ```bash
   npm ci
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

## Deployment (Vercel)

1. Import the repository in Vercel.
2. Use the default Next.js settings:
   - **Build Command:** `npm run build`
   - **Install Command:** `npm ci`
   - **Output Directory:** `.next`
   - **Node.js:** 20.x
3. Deploy and attach your domain.

## Project Structure

```
├── app/
│   ├── (site)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── services/page.tsx
│   │   ├── government/page.tsx
│   │   ├── readiness/page.tsx
│   │   └── contact/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── sections/
│   ├── site/
│   └── ui/
├── lib/
│   ├── content.ts
│   └── utils.ts
└── public/
```

## Content Updates

- Core content is defined in `lib/content.ts`.
- Layout and sections live in `components/sections` and `components/site`.
- SEO metadata is defined per page in `app/(site)/*/page.tsx`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
