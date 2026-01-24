'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

const initialState = {
  name: '',
  email: '',
  message: '',
}

type FormState = typeof initialState

type FormErrors = Partial<Record<keyof FormState, string>>

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const validate = () => {
    const nextErrors: FormErrors = {}
    if (!formState.name.trim()) {
      nextErrors.name = 'Name is required.'
    }
    if (!formState.email.trim()) {
      nextErrors.email = 'Email is required.'
    }
    if (!formState.message.trim()) {
      nextErrors.message = 'Message is required.'
    }
    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }
    setStatus('submitted')
    setFormState(initialState)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-foreground">Send a Message</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill out the form below and we&apos;ll get back to you.
      </p>
      {status === 'submitted' ? (
        <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-foreground">
          Thanks for reaching out. Your message has been queued for review.
        </div>
      ) : null}
      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formState.name}
            onChange={handleChange('name')}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Your name"
            required
          />
          {errors.name ? <p className="mt-2 text-xs text-accent">{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange('email')}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="your@email.com"
            required
          />
          {errors.email ? <p className="mt-2 text-xs text-accent">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formState.message}
            onChange={handleChange('message')}
            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Tell us about your project or inquiry..."
            required
          />
          {errors.message ? <p className="mt-2 text-xs text-accent">{errors.message}</p> : null}
        </div>
        <Button type="submit" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
      <div className="mt-6 border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">Or reach us directly via email:</p>
        <a
          href="mailto:contact@feepostsoftware.com"
          className="mt-2 inline-flex items-center justify-center text-sm font-semibold text-accent"
        >
          contact@feepostsoftware.com
        </a>
      </div>
    </div>
  )
}
