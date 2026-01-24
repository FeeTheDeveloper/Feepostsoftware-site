import type { Metadata } from 'next'

import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Business Readiness',
  description:
    'Business credentials and readiness for government contracting. EIN established, veteran-owned Texas corporation, SAM.gov ready.',
  openGraph: {
    title: 'Business Readiness | Feepost Software',
    description:
      'Business credentials and readiness for government contracting. EIN established, veteran-owned Texas corporation, SAM.gov ready.',
  },
}

const credentials = [
  {
    title: 'EIN Established',
    description: 'Employer Identification Number established and fully compliant',
  },
  {
    title: 'Texas Veteran-Owned Corporation',
    description: 'Registered as a veteran-owned corporation in the state of Texas',
  },
  {
    title: 'SAM.gov Registration',
    description: 'Structured and prepared for System for Award Management registration',
  },
  {
    title: 'CAGE Code Ready',
    description: 'Prepared for Commercial and Government Entity Code issuance',
  },
  {
    title: 'Prime & Subcontract Ready',
    description: 'Corporate structure supports both prime contractor and subcontractor roles',
  },
]

const whyFeepost = [
  {
    title: 'Veteran-Owned & Operated',
    description: 'Leadership with military discipline and mission-first mindset',
  },
  {
    title: 'Mission-Driven Teams',
    description: 'Engineering teams focused on delivering results, not excuses',
  },
  {
    title: 'Secure-by-Design',
    description: 'Security integrated into every phase of development',
  },
  {
    title: 'Contract-Ready Structure',
    description: 'Corporate foundation built for government contracting',
  },
  {
    title: 'Agile Delivery Models',
    description: 'Scalable approaches that adapt to project requirements',
  },
]

const creditStrategy = [
  'Vendor credit relationships',
  'Corporate credit cards',
  'Cloud credit lines',
  'Working capital facilities',
]

export default function ReadinessPage() {
  return (
    <>
      <Section
        eyebrow="Business Credentials"
        title="Business Readiness"
        subtitle="Feepost Software & Development Corporation maintains a contract-ready corporate structure designed to support government and enterprise technology initiatives."
      />
      <Section
        title="Business Credentials"
        subtitle="Established foundation for government contracting"
        className="pt-0"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {credentials.map((credential, index) => (
            <Reveal key={credential.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{credential.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section
        title="Why Feepost"
        subtitle="What sets us apart in delivering technology solutions"
        className="bg-muted/40"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyFeepost.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section
        title="Credit & Growth Strategy"
        subtitle="Disciplined approach to business growth and contract execution"
      >
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="text-muted-foreground">
              Disciplined business credit and capital strategy to support staffing, infrastructure, and contract
              execution:
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {creditStrategy.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-accent">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
