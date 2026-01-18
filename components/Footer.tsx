export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Feepost Software & Development Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
