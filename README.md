# Feepost Software & Development Corporation

A professional Next.js website for Feepost Software & Development Corporation, built with modern web technologies.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint
- **Node:** 20.x

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
│   ├── services/          # Services page (/services)
│   ├── government/        # Government page (/government)
│   ├── readiness/         # Readiness page (/readiness)
│   ├── contact/           # Contact page (/contact)
│   └── globals.css        # Global styles & Tailwind imports
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions and helpers
├── public/                # Static assets (images, fonts, etc.)
└── package.json           # Dependencies and scripts
```

## Deploying to Vercel

This project is optimized for deployment on Vercel:

### Method 1: GitHub Integration (Recommended)

1. Push your code to a GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will automatically detect Next.js and configure settings
6. Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project

### Deployment Configuration

Vercel automatically configures:
- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`
- Node.js version: 20.x (specified in package.json)

No additional configuration is required.

## Updating Content

### Adding New Pages

1. Create a new folder in `app/` with the route name
2. Add a `page.tsx` file inside the folder
3. Update the navigation in `components/Navbar.tsx`

Example:
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold">About Us</h1>
      {/* Your content */}
    </div>
  )
}
```

### Modifying Existing Content

- **Home page:** Edit `app/page.tsx`
- **Services page:** Edit `app/services/page.tsx`
- **Government page:** Edit `app/government/page.tsx`
- **Readiness page:** Edit `app/readiness/page.tsx`
- **Contact page:** Edit `app/contact/page.tsx`
- **Navigation:** Edit `components/Navbar.tsx`
- **Footer:** Edit `components/Footer.tsx`

### Styling

This project uses Tailwind CSS. Common classes:
- Container: `container mx-auto px-4`
- Headings: `text-4xl font-bold text-slate-900`
- Cards: `bg-white p-6 rounded-lg shadow-md`
- Buttons: `bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded`

For custom styles, edit `app/globals.css` or configure `tailwind.config.js`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory for environment-specific variables:

```env
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## License

Copyright © 2026 Feepost Software & Development Corporation. All rights reserved.