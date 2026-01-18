import type { Metadata } from 'next'
import { Card, SectionHeading, Button, Container } from '@/components'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Feepost Software & Development Corporation for software development contracts, IT modernization, and government technology partnerships.',
}

export default function ContactPage() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-3xl mb-12">
          <p className="text-brand-accent font-semibold mb-4 tracking-wide uppercase text-sm">
            Get in Touch
          </p>
          <h1 className="text-4xl font-bold text-brand-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-brand-neutral">
            Available for immediate engagement for software development contracts, 
            IT modernization initiatives, and government technology partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <SectionHeading
              title="Send a Message"
              subtitle="Fill out the form below and we'll get back to you"
              className="mb-6"
            />
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-brand-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-charcoal/50 rounded-lg text-brand-white placeholder-brand-neutral/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-brand-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-charcoal/50 rounded-lg text-brand-white placeholder-brand-neutral/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-brand-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-brand-bg border border-brand-charcoal/50 rounded-lg text-brand-white placeholder-brand-neutral/50 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>

            {/* Mailto Fallback */}
            <div className="mt-6 pt-6 border-t border-brand-charcoal/30 text-center">
              <p className="text-brand-neutral text-sm mb-3">
                Or reach us directly via email:
              </p>
              <a
                href="mailto:contact@feepostsoftware.com"
                className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-accent/80 transition-colors font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@feepostsoftware.com
              </a>
            </div>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-semibold text-brand-white mb-4">Business Inquiries</h3>
              <p className="text-brand-neutral">
                For general business inquiries, project discussions, and partnership opportunities, 
                please reach out through the contact form or email.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-brand-white mb-4">Government Contracts</h3>
              <p className="text-brand-neutral">
                Interested in partnering with us on federal, state, or municipal technology 
                contracts? We&apos;re ready to engage on prime and subcontract opportunities.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-brand-white mb-4">IT Modernization</h3>
              <p className="text-brand-neutral">
                Looking to modernize legacy systems or implement new technology solutions? 
                Contact us to discuss your digital transformation initiatives.
              </p>
            </Card>

            <Card className="bg-brand-primary/20 border-brand-primary/30">
              <div className="flex items-start gap-3">
                <span className="text-brand-accent text-2xl">★</span>
                <div>
                  <h3 className="text-xl font-semibold text-brand-white mb-2">Veteran-Owned Business</h3>
                  <p className="text-brand-neutral">
                    Feepost Software & Development Corporation is a veteran-owned 
                    Texas corporation ready to support your technology mission.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}
