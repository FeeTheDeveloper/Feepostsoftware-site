import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'accent' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-primary text-brand-white hover:bg-brand-primaryAlt focus-visible:ring-brand-primary',
  accent: 'bg-brand-accent text-brand-bg hover:bg-brand-accent/90 focus-visible:ring-brand-accent',
  outline: 'bg-transparent border border-brand-neutral/50 text-brand-white hover:border-brand-white hover:bg-brand-charcoal/20 focus-visible:ring-brand-neutral',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-6 py-3
        font-medium rounded-lg
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
