import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`
        bg-brand-charcoal/20
        border border-brand-charcoal/30
        rounded-lg
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  )
}
