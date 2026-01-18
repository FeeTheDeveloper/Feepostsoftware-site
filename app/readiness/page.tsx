import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, SectionHeading, Button, Container } from '@/components'

export const metadata: Metadata = {
  title: 'Business Readiness',
  description: 'Business credentials and readiness for government contracting. EIN established, veteran-owned Texas corporation, SAM.gov ready.',
}

export default function ReadinessPage() {
  const credentials = [
    { title: 'EIN Established', description: 'Employer Identification Number established and fully compliant' },
    { title: 'Texas Veteran-Owned Corporation', description: 'Registered as a veteran-owned corporation in the state of Texas' },
    { title: 'SAM.gov Registration', description: 'Structured and prepared for System for Award Management registration' },
    { title: 'CAGE Code Ready', description: 'Prepared for Commercial and Government Entity Code issuance' },
    { title: 'Prime & Subcontract Ready', description: 'Corporate structure supports both prime contractor and subcontractor roles' },
  ]

  const whyFeepost = [
    { title: 'Veteran-Owned & Operated', description: 'Leadership with military discipline and mission-first mindset' },
    { title: 'Mission-Driven Teams', description: 'Engineering teams focused on delivering results, not excuses' },
    { title: 'Secure-by-Design', description: 'Security integrated into every phase of development' },
    { title: 'Contract-Ready Structure', description: 'Corporate foundation built for government contracting' },
    { title: 'Agile Delivery Models', description: 'Scalable approaches that adapt to project requirements' },
  ]

  const creditStrategy = [
    'Vendor credit relationships',
    'Corporate credit cards',
    'Cloud credit lines',
    'Working capital facilities',
  ]

  return (
    <div className="py-16">
      <Container className="mb-16">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Business Credentials
          </p>
          <h1 className="text-4xl font-bold text-brand-white mb-6">
            Business Readiness
          </h1>
          <p className="text-xl text-brand-neutral">
            Feepost Software & Development Corporation maintains a contract-ready corporate 
            structure designed to support government and enterprise technology initiatives.
          </p>
        </div>

        <SectionHeading
          title="Business Credentials"
          subtitle="Established foundation for government contracting"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {credentials.map((credential) => (
            <Card key={credential.title}>
              <div className="flex items-start gap-3">
                <span className="text-brand-primary text-xl">✓</span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-white mb-1">{credential.title}</h3>
                  <p className="text-brand-neutral text-sm">{credential.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <SectionHeading
          title="Why Feepost"
          subtitle="What sets us apart in delivering technology solutions"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {whyFeepost.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-brand-white mb-2">{item.title}</h3>
              <p className="text-brand-neutral">{item.description}</p>
            </Card>
          ))}
        </div>

        <SectionHeading
          title="Credit & Growth Strategy"
          subtitle="Disciplined approach to business growth and contract execution"
        />
        
        <Card className="mb-16">
          <p className="text-brand-neutral mb-6">
            Disciplined business credit and capital strategy to support staffing, 
            infrastructure, and contract execution:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {creditStrategy.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-brand-accent">•</span>
                <span className="text-brand-white">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </Container>

      {/* CTA Section */}
      <Container>
        <Card className="text-center py-12">
          <h2 className="text-2xl font-bold text-brand-white mb-4">
            Ready to Partner?
          </h2>
          <p className="text-brand-neutral mb-6 max-w-2xl mx-auto">
            Our contract-ready structure means we can engage immediately on your 
            technology initiatives.
          </p>
          <Link href="/contact">
            <Button variant="accent">Contact Us</Button>
          </Link>
        </Card>
      </Container>
    </div>
  )
}
