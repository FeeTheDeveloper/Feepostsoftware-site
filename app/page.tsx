export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Welcome to Feepost Software & Development Corporation
        </h1>
        <p className="text-lg text-slate-700 mb-8">
          We deliver innovative software solutions and professional IT services 
          to help your business thrive in the digital age.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Custom Development</h3>
            <p className="text-slate-600">
              Tailored software solutions built to meet your specific business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Cloud Services</h3>
            <p className="text-slate-600">
              Scalable and secure cloud infrastructure for modern applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Consulting</h3>
            <p className="text-slate-600">
              Expert guidance to optimize your technology strategy and operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
