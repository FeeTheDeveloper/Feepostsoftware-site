import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-brand-bg border-b border-brand-charcoal/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg rounded-md"
          >
            <Image
              src="/assets/feepost-logo.png"
              alt="Feepost Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span className="text-xl font-bold text-brand-white">Feepost Software & Development</span>
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-brand-neutral hover:text-brand-white focus-visible:outline-none focus-visible:text-brand-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-brand-neutral hover:text-brand-white focus-visible:outline-none focus-visible:text-brand-accent transition-colors"
            >
              Services
            </Link>
            <Link
              href="/government"
              className="text-brand-neutral hover:text-brand-white focus-visible:outline-none focus-visible:text-brand-accent transition-colors"
            >
              Government
            </Link>
            <Link
              href="/readiness"
              className="text-brand-neutral hover:text-brand-white focus-visible:outline-none focus-visible:text-brand-accent transition-colors"
            >
              Readiness
            </Link>
            <Link
              href="/contact"
              className="text-brand-neutral hover:text-brand-white focus-visible:outline-none focus-visible:text-brand-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
