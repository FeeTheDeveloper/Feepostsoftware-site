export default function GovernmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Government Solutions</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-lg text-slate-700 mb-6">
            Feepost Software & Development Corporation is committed to serving government 
            agencies with secure, compliant, and mission-critical software solutions.
          </p>
          
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Capabilities</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Compliance & Security</h3>
              <p className="text-slate-600">
                We understand the unique security and compliance requirements of government 
                projects, including FedRAMP, FISMA, and other federal standards.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Mission-Critical Systems</h3>
              <p className="text-slate-600">
                Our team has experience building and maintaining systems that require 
                high availability, reliability, and performance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Modernization Services</h3>
              <p className="text-slate-600">
                We help government agencies modernize legacy systems with cloud-native 
                architectures and contemporary development practices.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-slate-700">
            <strong>Interested in working with us?</strong> Contact our team to discuss 
            how we can support your agency&apos;s mission.
          </p>
        </div>
      </div>
    </div>
  )
}
