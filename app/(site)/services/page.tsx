import type { Metadata } from 'next'

import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom software development, systems integration, cloud infrastructure, and IT modernization services from Feepost Software & Development Corporation.',
  openGraph: {
    title: 'Services | Feepost Software',
    description:
      'Custom software development, systems integration, cloud infrastructure, and IT modernization services from Feepost Software & Development Corporation.',
  },
}

const services = [
  {
    title: 'Custom Software Development',
    description:
      'Tailored software solutions built to your exact specifications using modern technologies and best practices.',
    features: [
      'Full-stack web application development',
      'Mobile application development',
      'API design and development',
      'Database architecture and optimization',
    ],
  },
  {
    title: 'Government & Enterprise Application Development',
    description:
      'Mission-critical applications designed to meet the rigorous requirements of government agencies and large enterprises.',
    features: [
      'Secure application architecture',
      'Compliance-ready development',
      'High-availability systems',
      'Legacy system integration',
    ],
  },
  {
    title: 'Systems Integration & Automation',
    description:
      'Seamlessly connect disparate systems and automate workflows to improve efficiency and reduce operational costs.',
    features: [
      'Enterprise system integration',
      'Workflow automation',
      'Data synchronization',
      'Process optimization',
    ],
  },
  {
    title: 'Cloud Infrastructure & DevOps Support',
    description:
      'Deploy, manage, and scale your applications on secure cloud platforms with modern DevOps practices.',
    features: [
      'Cloud architecture design',
      'Infrastructure as Code',
      'CI/CD pipeline implementation',
      'Container orchestration',
    ],
  },
  {
    title: 'Secure Data & Workflow Solutions',
    description:
      'Protect sensitive data and ensure secure workflows across your organization with our security-first approach.',
    features: [
      'Data encryption and protection',
      'Secure workflow design',
      'Access control implementation',
      'Security auditing',
    ],
  },
  {
    title: 'IT Modernization & Digital Transformation',
    description:
      'Transform legacy systems and processes to leverage modern technology and drive business growth.',
    features: [
      'Legacy system assessment',
      'Modernization roadmap',
      'Cloud migration',
      'Technology stack upgrade',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Core Services"
        title="Services"
        subtitle="Comprehensive technology solutions for government and enterprise clients"
      >
        <div className="space-y-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
                <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
                <p className="mt-3 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
