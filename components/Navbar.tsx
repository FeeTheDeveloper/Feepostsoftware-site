import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Feepost Software & Development
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/government" className="hover:text-blue-400 transition-colors">
              Government
            </Link>
            <Link href="/readiness" className="hover:text-blue-400 transition-colors">
              Readiness
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
