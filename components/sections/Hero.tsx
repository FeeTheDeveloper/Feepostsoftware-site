import Link from 'next/link'

import { hero } from '@/lib/content'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Reveal from '@/components/ui/Reveal'

const credibility = [
  { icon: 'shield', label: 'Veteran-Owned Corporation' },
  { icon: 'star', label: 'Mission-Critical Delivery' },
  { icon: 'users', label: 'Government & Enterprise Ready' },
]

const iconPaths: Record<string, string> = {
  shield: 'M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z',
  star: 'M12 3l2.6 5.3L20 9l-4 4 .9 5.7L12 16l-4.9 2.7L8 13 4 9l5.4-.7L12 3z',
  users:
    'M7 8a3 3 0 116 0 3 3 0 01-6 0zm9 2a3 3 0 114 0 3 3 0 01-4 0M3 19c0-2.5 2.5-4 5-4s5 1.5 5 4m4 0c0-1.8 1.8-3 3.5-3s3.5 1.2 3.5 3',
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="container py-22">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-foreground/70">
                Feepost Software &amp; Development Corporation
              </p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-secondary-foreground sm:text-5xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg text-secondary-foreground/80">
                {hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={hero.primaryCta.href}
                  className={cn(buttonVariants({ size: 'lg' }))}
                >
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}
                >
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary-foreground/70">
                Credibility Strip
              </p>
              <div className="mt-6 space-y-4">
                {credibility.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                      >
                        <path
                          d={iconPaths[item.icon]}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-base font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
