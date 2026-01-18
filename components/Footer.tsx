import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/feepost-logo.png"
            alt="Feepost Logo"
            width={24}
            height={24}
            className="h-6 w-auto"
          />
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Feepost Software & Development Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
