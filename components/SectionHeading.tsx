interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  className = '',
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold text-brand-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-brand-neutral">
          {subtitle}
        </p>
      )}
    </div>
  )
}
