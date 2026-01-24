import { values } from '@/lib/content'
import Reveal from '@/components/ui/Reveal'

export default function ValueGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {values.map((value, index) => (
        <Reveal key={value.title} delay={index * 0.05}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
