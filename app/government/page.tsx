import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, SectionHeading, Button, Container } from '@/components'

export const metadata: Metadata = {
  title: 'Government Solutions',
  description: 'Government contracting solutions for federal, state, and municipal agencies. Secure, scalable, and mission-critical technology from Feepost Software.',
}

export default function GovernmentPage() {
  const targetAgencies = [
    { name: 'Department of Defense (DoD)', description: 'Defense technology and mission-critical systems' },
    { name: 'Department of Homeland Security (DHS)', description: 'Security infrastructure and data protection' },
    { name: 'Department of Transportation (DOT)', description: 'Transportation systems and logistics' },
    { name: 'State & Municipal IT Departments', description: 'Local government technology modernization' },
  ]

  const capabilities = [
    {
      title: 'Compliance & Cybersecurity',
      description: 'Aligned with federal compliance requirements and cybersecurity expectations to protect sensitive government data.',
    },
    {
      title: 'Procurement Standards',
      description: 'Structured to meet federal, state, and municipal procurement standards and contract requirements.',
    },
    {
      title: 'Secure Systems',
      description: 'Secure-by-design development practices ensuring data protection and system integrity.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Technology solutions that scale with your agency\'s needs and mission requirements.',
    },
    {
      title: 'Mission-Critical Reliability',
      description: 'High-availability systems designed for the demanding requirements of government operations.',
    },
    {
      title: 'Legacy Modernization',
      description: 'Transform legacy systems to modern, maintainable architectures without disrupting operations.',
    },
  ]

  return (
    <div className="py-16">
      <Container className="mb-16">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Government Contracting
          </p>
          <h1 className="text-4xl font-bold text-brand-white mb-6">
            Government Solutions
          </h1>
          <p className="text-xl text-brand-neutral">
            Structured to support federal, state, and municipal technology contracts. 
            We align with compliance, cybersecurity expectations, and procurement standards 
            to deliver systems that are secure, scalable, and mission-critical.
          </p>
        </div>

        <SectionHeading
          title="Our Capabilities"
          subtitle="Technology solutions designed for government requirements"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability) => (
            <Card key={capability.title}>
              <h3 className="text-lg font-semibold text-brand-white mb-2">{capability.title}</h3>
              <p className="text-brand-neutral">{capability.description}</p>
            </Card>
          ))}
        </div>

        <SectionHeading
          title="Target Agencies"
          subtitle="We support technology initiatives across government sectors"
        />
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {targetAgencies.map((agency) => (
            <Card key={agency.name} className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-brand-white mb-1">{agency.name}</h3>
                <p className="text-brand-neutral">{agency.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      {/* CTA Section */}
      <Container>
        <Card className="text-center py-12">
          <h2 className="text-2xl font-bold text-brand-white mb-4">
            Partner With Us
          </h2>
          <p className="text-brand-neutral mb-6 max-w-2xl mx-auto">
            Interested in working with a veteran-owned technology firm? 
            Contact our team to discuss how we can support your agency&apos;s mission.
          </p>
          <Link href="/contact">
            <Button variant="accent">Contact Us</Button>
          </Link>
        </Card>
      </Container>
    </div>
  )
}
