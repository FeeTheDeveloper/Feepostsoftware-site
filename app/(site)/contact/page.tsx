import type { Metadata } from 'next'

import ContactForm from '@/components/sections/ContactForm'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Feepost Software & Development Corporation for software development contracts, IT modernization, and government technology partnerships.',
  openGraph: {
    title: 'Contact | Feepost Software',
    description:
      'Contact Feepost Software & Development Corporation for software development contracts, IT modernization, and government technology partnerships.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Available for immediate engagement for software development contracts, IT modernization initiatives, and government technology partnerships."
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="space-y-6">
            {[
              {
                title: 'Business Inquiries',
                body:
                  'For general business inquiries, project discussions, and partnership opportunities, please reach out through the contact form or email.',
              },
              {
                title: 'Government Contracts',
                body:
                  "Interested in partnering with us on federal, state, or municipal technology contracts? We're ready to engage on prime and subcontract opportunities.",
              },
              {
                title: 'IT Modernization',
                body:
                  'Looking to modernize legacy systems or implement new technology solutions? Contact us to discuss your digital transformation initiatives.',
              },
            ].map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-foreground">Veteran-Owned Business</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Feepost Software & Development Corporation is a veteran-owned Texas corporation ready to support your technology mission.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
