import type { Metadata } from 'next'

import Hero from '@/components/sections/Hero'
import ServiceGrid from '@/components/sections/ServiceGrid'
import ValueGrid from '@/components/sections/ValueGrid'
import CTABand from '@/components/sections/CTABand'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Feepost Software & Development Corporation',
  description:
    'Veteran-Owned Software Engineering & Digital Infrastructure Solutions for government and enterprise missions.',
  openGraph: {
    title: 'Feepost Software & Development Corporation',
    description:
      'Veteran-Owned Software Engineering & Digital Infrastructure Solutions for government and enterprise missions.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        title="Core Services"
        subtitle="Comprehensive technology solutions for government and enterprise"
      >
        <ServiceGrid />
      </Section>
      <Section
        title="Why Feepost"
        subtitle="What sets us apart in delivering technology solutions"
        className="bg-muted/40"
      >
        <ValueGrid />
      </Section>
      <CTABand />
    </>
  )
}
