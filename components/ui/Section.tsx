import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
  className?: string
}

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn('py-18 lg:py-22', className)}>
      <div className="container">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}
