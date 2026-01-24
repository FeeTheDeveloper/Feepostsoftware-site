import type { Metadata } from 'next'
import './globals.css'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'Feepost Software & Development Corporation',
    template: '%s | Feepost Software',
  },
  description: 'Veteran-Owned Software Engineering & Digital Infrastructure Solutions. Delivering scalable software, systems development, and secure technology for government and enterprise.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
