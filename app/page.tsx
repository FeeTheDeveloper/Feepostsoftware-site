import Link from 'next/link'
import { Card, SectionHeading, Button, Container } from '@/components'

export default function Home() {
  const coreServices = [
    'Custom Software Development',
    'Government & Enterprise Application Development',
    'Systems Integration & Automation',
    'Cloud Infrastructure & DevOps Support',
    'Secure Data & Workflow Solutions',
    'IT Modernization & Digital Transformation',
  ]

  const whyFeepost = [
    { title: 'Veteran-Owned', description: 'Veteran-owned and operated with a mission-first mindset' },
    { title: 'Mission-Driven', description: 'Engineering teams focused on delivering results' },
    { title: 'Secure by Design', description: 'Security integrated into every development practice' },
    { title: 'Contract-Ready', description: 'Structured corporate foundation for government work' },
    { title: 'Agile Delivery', description: 'Scalable delivery models that adapt to your needs' },
  ]

  return (
    <div className="py-16">
      {/* Hero Section */}
      <Container className="mb-20">
        <div className="max-w-4xl">
          <p className="text-brand-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Veteran-Owned Technology Firm
          </p>
          <h1 className="text-5xl font-bold text-brand-white mb-6 leading-tight">
            Software Engineering &<br />Digital Infrastructure Solutions
          </h1>
          <p className="text-xl text-brand-neutral mb-8 max-w-3xl">
            Feepost Software & Development Corporation delivers scalable software engineering, 
            systems development, and digital infrastructure solutions. Built with a mission-first 
            mindset, we support government agencies and commercial enterprises requiring secure, 
            reliable, and performance-driven technology execution.
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button variant="primary">Get in Touch</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline">Our Services</Button>
            </Link>
          </div>
        </div>
      </Container>

      {/* Core Services Section */}
      <Container className="mb-20">
        <SectionHeading
          title="Core Services"
          subtitle="Comprehensive technology solutions for government and enterprise"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service) => (
            <Card key={service}>
              <h3 className="text-lg font-semibold text-brand-white">{service}</h3>
            </Card>
          ))}
        </div>
      </Container>

      {/* Why Feepost Section */}
      <Container className="mb-20">
        <SectionHeading
          title="Why Feepost"
          subtitle="What sets us apart in delivering technology solutions"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeepost.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-brand-white mb-2">{item.title}</h3>
              <p className="text-brand-neutral">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>

      {/* CTA Section */}
      <Container>
        <Card className="text-center py-12">
          <h2 className="text-2xl font-bold text-brand-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-brand-neutral mb-6 max-w-2xl mx-auto">
            Available for immediate engagement for software development contracts, 
            IT modernization initiatives, and government technology partnerships.
          </p>
          <Link href="/contact">
            <Button variant="accent">Contact Us Today</Button>
          </Link>
        </Card>
      </Container>
    </div>
  )
}
