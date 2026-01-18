import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-charcoal/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/feepost-logo.png"
            alt="Feepost Logo"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
          <p className="text-sm text-brand-neutral">
            &copy; {new Date().getFullYear()} Feepost Software & Development Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
