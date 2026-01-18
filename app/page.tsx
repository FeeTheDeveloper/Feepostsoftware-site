import Link from 'next/link'
import Image from 'next/image'
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
    <div>
      {/* Hero Section */}
      <section className="min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-brand-bg">
        <div className="flex flex-col items-center text-center px-4 py-12">
          {/* Centered Logo */}
          <div className="w-full max-w-[240px] md:max-w-[320px] lg:max-w-[420px] mb-8">
            <Image
              src="/assets/feepost-logo.png"
              alt="Feepost Software & Development Corporation Logo"
              width={420}
              height={420}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-white mb-6 max-w-2xl leading-tight">
            Veteran-Owned Software Engineering & Digital Infrastructure
          </h1>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button variant="primary">View Services</Button>
            </Link>
            <Link href="/contact">
              <Button variant="accent">Contact</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <Container className="py-20">
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
      <Container className="py-20">
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
      <Container className="pb-20">
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
