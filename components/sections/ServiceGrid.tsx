import { services } from '@/lib/content'
import IconCard from '@/components/ui/IconCard'
import Reveal from '@/components/ui/Reveal'

const iconPaths = [
  'M4 7h16M4 12h16M4 17h16',
  'M12 3l8 4-8 4-8-4 8-4zm0 8l8 4-8 4-8-4 8-4z',
  'M12 2v4m0 12v4m8-8h-4M8 12H4m12.4-5.6l-2.8 2.8m-2.8 2.8L7.6 15.6m8.8 0-2.8-2.8M10.8 9.2 8 6.4',
  'M4 14c0-4 4-8 8-8s8 4 8 8v6H4v-6z',
  'M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z',
  'M4 6h16v12H4z M8 6v12 M16 6v12',
]

export default function ServiceGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => {
        const iconPath = iconPaths[index % iconPaths.length]
        return (
          <Reveal key={service.title} delay={index * 0.05}>
            <IconCard
              icon={
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                >
                  <path d={iconPath} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
              title={service.title}
              description={service.description}
            />
          </Reveal>
        )
      })}
    </div>
  )
}
