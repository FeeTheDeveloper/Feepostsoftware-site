export default function ReadinessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Organizational Readiness</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-lg text-slate-700 mb-6">
            At Feepost Software & Development Corporation, we maintain the highest standards 
            of operational excellence and project readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Technical Expertise</h2>
            <p className="text-slate-600">
              Our team brings deep technical knowledge across modern software development 
              stacks, cloud platforms, and enterprise architectures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Quality Assurance</h2>
            <p className="text-slate-600">
              We follow rigorous testing and quality assurance processes to ensure reliable, 
              bug-free software delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Security First</h2>
            <p className="text-slate-600">
              Security is integrated into every phase of our development process, from 
              design through deployment and maintenance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Agile Methodology</h2>
            <p className="text-slate-600">
              We use agile development practices to deliver value quickly and adapt to 
              changing requirements efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Documentation</h2>
            <p className="text-slate-600">
              Comprehensive documentation ensures knowledge transfer and long-term 
              maintainability of all our solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">Support & Maintenance</h2>
            <p className="text-slate-600">
              We provide ongoing support and maintenance services to keep your systems 
              running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
