import type { Metadata } from 'next'

import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Government Solutions',
  description:
    'Government contracting solutions for federal, state, and municipal agencies. Secure, scalable, and mission-critical technology from Feepost Software.',
  openGraph: {
    title: 'Government Solutions | Feepost Software',
    description:
      'Government contracting solutions for federal, state, and municipal agencies. Secure, scalable, and mission-critical technology from Feepost Software.',
  },
}

const targetAgencies = [
  {
    name: 'Department of Defense (DoD)',
    description: 'Defense technology and mission-critical systems',
  },
  {
    name: 'Department of Homeland Security (DHS)',
    description: 'Security infrastructure and data protection',
  },
  {
    name: 'Department of Transportation (DOT)',
    description: 'Transportation systems and logistics',
  },
  {
    name: 'State & Municipal IT Departments',
    description: 'Local government technology modernization',
  },
]

const capabilities = [
  {
    title: 'Compliance & Cybersecurity',
    description:
      'Aligned with federal compliance requirements and cybersecurity expectations to protect sensitive government data.',
  },
  {
    title: 'Procurement Standards',
    description:
      'Structured to meet federal, state, and municipal procurement standards and contract requirements.',
  },
  {
    title: 'Secure Systems',
    description:
      'Secure-by-design development practices ensuring data protection and system integrity.',
  },
  {
    title: 'Scalable Solutions',
    description:
      "Technology solutions that scale with your agency's needs and mission requirements.",
  },
  {
    title: 'Mission-Critical Reliability',
    description:
      'High-availability systems designed for the demanding requirements of government operations.',
  },
  {
    title: 'Legacy Modernization',
    description:
      'Transform legacy systems to modern, maintainable architectures without disrupting operations.',
  },
]

export default function GovernmentPage() {
  return (
    <>
      <Section
        eyebrow="Government Contracting"
        title="Government Solutions"
        subtitle="Structured to support federal, state, and municipal technology contracts. We align with compliance, cybersecurity expectations, and procurement standards to deliver systems that are secure, scalable, and mission-critical."
      />
      <Section
        title="Our Capabilities"
        subtitle="Technology solutions designed for government requirements"
        className="pt-0"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{capability.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section
        title="Target Agencies"
        subtitle="We support technology initiatives across government sectors"
        className="bg-muted/40"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {targetAgencies.map((agency, index) => (
            <Reveal key={agency.name} delay={index * 0.05}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="mt-2 h-3 w-3 rounded-full bg-accent" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{agency.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{agency.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
