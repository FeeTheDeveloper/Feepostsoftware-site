# Feepost Software & Development Corporation

Veteran-Owned Software Engineering & Digital Infrastructure Solutions. A production-ready Next.js website built with modern web technologies.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Node:** 20.x
- **Deployment:** Vercel-optimized

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

The page will auto-update as you edit files.

### Building for Production

1. **Create a production build:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

The build process will:
- Compile TypeScript
- Optimize assets
- Generate static pages where possible
- Prepare the application for deployment

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Home page (/)
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── services/          # Services page (/services)
│   ├── government/        # Government page (/government)
│   ├── readiness/         # Readiness page (/readiness)
│   └── contact/           # Contact page (/contact)
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── Button.tsx         # Button variants (primary, accent, outline)
│   ├── Card.tsx           # Dark surface card component
│   ├── Container.tsx      # Responsive container wrapper
│   ├── SectionHeading.tsx # Section title + subtitle
│   └── index.ts           # Component exports
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
│   └── assets/
│       └── feepost-logo.png  # Company logo
└── package.json           # Dependencies and scripts
```

## Deploying to Vercel

This project is optimized for zero-config deployment on Vercel.

### Step 1: Import Project

1. Go to [vercel.com](https://vercel.com) and sign in (or create account)
2. Click **"Add New..."** → **"Project"**
3. Select **"Import Git Repository"**
4. Connect your GitHub account if not already connected
5. Find and select the `Feepostsoftware-site` repository
6. Click **"Import"**

### Step 2: Configure Project

Vercel auto-detects Next.js. Default settings work out of the box:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 20.x |

Click **"Deploy"** — no changes needed.

### Step 3: Attach Custom Domain

After deployment completes:

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your domain (e.g., `feepost.com` or `www.feepost.com`)
4. Click **"Add"**
5. Update your DNS records as instructed:
   - **Option A (Recommended):** Add CNAME record pointing to `cname.vercel-dns.com`
   - **Option B:** Add A record pointing to Vercel's IP addresses
6. Vercel automatically provisions SSL certificate

**DNS Propagation:** May take up to 48 hours, typically within minutes.

### Step 4: Production Deployments

- **Automatic:** Push to `main` branch triggers production deploy
- **Preview:** Pull requests get unique preview URLs
- **Rollback:** One-click rollback from Vercel dashboard

## Updating Content

### Contact Email Configuration

The contact form currently uses a placeholder email. To update:

1. Open `app/contact/page.tsx`
2. Find the mailto link (search for `info@feepost.com`)
3. Replace with your actual contact email:
   ```tsx
   href="mailto:your-email@feepost.com"
   ```

**Future Enhancement:** To add form backend, integrate with:
- Vercel Serverless Functions + email service (SendGrid, Resend)
- Third-party form service (Formspree, Basin)

### Modifying Pages

| Page | File |
|------|------|
| Home | `app/page.tsx` |
| Services | `app/services/page.tsx` |
| Government | `app/government/page.tsx` |
| Readiness | `app/readiness/page.tsx` |
| Contact | `app/contact/page.tsx` |
| Navigation | `components/Navbar.tsx` |
| Footer | `components/Footer.tsx` |

### Updating Logo

Replace the logo file at `public/assets/feepost-logo.png`. Recommended:
- Format: PNG with transparency
- Size: At least 420×420px for crisp display
- The logo is used in three places: hero, navbar, and footer

### Brand Colors

Brand tokens are defined in `tailwind.config.js`:

```js
colors: {
  brand: {
    bg: '#0B0B0B',        // Background
    primary: '#196C24',    // Primary green
    primaryAlt: '#58912F', // Hover green
    accent: '#F8BF07',     // Yellow accent
    charcoal: '#323419',   // Borders
    neutral: '#A8A9A9',    // Muted text
    white: '#FEFEFE',      // Text
  }
}
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Example API configuration
NEXT_PUBLIC_API_URL=https://api.example.com

# Contact form backend (future)
CONTACT_EMAIL=info@feepost.com
```

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## License

Copyright © 2026 Feepost Software & Development Corporation. All rights reserved.