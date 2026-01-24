import Link from 'next/link'

import { cta } from '@/lib/content'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Reveal from '@/components/ui/Reveal'

export default function CTABand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">{cta.title}</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">{cta.line}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {cta.buttons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className={cn(
                    buttonVariants({
                      size: 'lg',
                      variant: button.variant === 'secondary' ? 'secondary' : 'outline',
                    })
                  )}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
