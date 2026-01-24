import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface IconCardProps {
  icon: ReactNode
  title: string
  description?: string
  className?: string
}

export default function IconCard({ icon, title, description, className }: IconCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-crisp',
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      {description ? (
        <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
