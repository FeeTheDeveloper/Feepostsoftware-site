import Link from 'next/link'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Government', href: '/government' },
  { label: 'Readiness', href: '/readiness' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">Feepost</p>
            <p className="mt-4 text-sm text-secondary-foreground/70">
              Veteran-Owned Software &amp; Development Corporation delivering secure software engineering,
              systems integration, and digital infrastructure for government and enterprise missions.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-secondary-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">Compliance</p>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
              <li>Veteran-Owned Corporation</li>
              <li>Contract-Ready Structure</li>
              <li>Secure-by-Design Practices</li>
              <li>Government &amp; Enterprise Ready</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-secondary-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>© 2024 Feepost Software &amp; Development Corporation.</span>
          <span>contact@feepostsoftware.com</span>
        </div>
      </div>
    </footer>
  )
}
