import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, SectionHeading, Button, Container } from '@/components'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Custom software development, systems integration, cloud infrastructure, and IT modernization services from Feepost Software & Development Corporation.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to your exact specifications using modern technologies and best practices.',
      features: [
        'Full-stack web application development',
        'Mobile application development',
        'API design and development',
        'Database architecture and optimization',
      ],
    },
    {
      title: 'Government & Enterprise Application Development',
      description: 'Mission-critical applications designed to meet the rigorous requirements of government agencies and large enterprises.',
      features: [
        'Secure application architecture',
        'Compliance-ready development',
        'High-availability systems',
        'Legacy system integration',
      ],
    },
    {
      title: 'Systems Integration & Automation',
      description: 'Seamlessly connect disparate systems and automate workflows to improve efficiency and reduce operational costs.',
      features: [
        'Enterprise system integration',
        'Workflow automation',
        'Data synchronization',
        'Process optimization',
      ],
    },
    {
      title: 'Cloud Infrastructure & DevOps Support',
      description: 'Deploy, manage, and scale your applications on secure cloud platforms with modern DevOps practices.',
      features: [
        'Cloud architecture design',
        'Infrastructure as Code',
        'CI/CD pipeline implementation',
        'Container orchestration',
      ],
    },
    {
      title: 'Secure Data & Workflow Solutions',
      description: 'Protect sensitive data and ensure secure workflows across your organization with our security-first approach.',
      features: [
        'Data encryption and protection',
        'Secure workflow design',
        'Access control implementation',
        'Security auditing',
      ],
    },
    {
      title: 'IT Modernization & Digital Transformation',
      description: 'Transform legacy systems and processes to leverage modern technology and drive business growth.',
      features: [
        'Legacy system assessment',
        'Modernization roadmap',
        'Cloud migration',
        'Technology stack upgrade',
      ],
    },
  ]

  return (
    <div className="py-16">
      <Container className="mb-16">
        <SectionHeading
          title="Core Services"
          subtitle="Comprehensive technology solutions for government and enterprise clients"
        />
        
        <div className="space-y-8">
          {services.map((service) => (
            <Card key={service.title} className="p-8">
              <h2 className="text-2xl font-bold text-brand-white mb-4">{service.title}</h2>
              <p className="text-brand-neutral mb-6">{service.description}</p>
              <ul className="grid md:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-brand-white">
                    <span className="text-brand-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>

      {/* CTA Section */}
      <Container>
        <Card className="text-center py-12">
          <h2 className="text-2xl font-bold text-brand-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-brand-neutral mb-6 max-w-2xl mx-auto">
            Contact us to discuss how our services can help achieve your technology goals.
          </p>
          <Link href="/contact">
            <Button variant="accent">Contact Us</Button>
          </Link>
        </Card>
      </Container>
    </div>
  )
}
