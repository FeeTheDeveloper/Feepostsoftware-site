import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Government', href: '/government' },
  { label: 'Readiness', href: '/readiness' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-foreground">
          FEEPOST
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className={cn(buttonVariants({ size: 'sm' }))}>
          Schedule Intro
        </Link>
      </div>
    </header>
  )
}
