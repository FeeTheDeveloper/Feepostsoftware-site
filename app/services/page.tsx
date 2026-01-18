export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Our Services</h1>
        
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Software Development</h2>
            <p className="text-slate-700 mb-4">
              We build custom software solutions using modern technologies and best practices. 
              Our team specializes in web applications, mobile apps, and enterprise systems.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Full-stack web development</li>
              <li>Mobile application development</li>
              <li>API design and integration</li>
              <li>Database architecture</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cloud Infrastructure</h2>
            <p className="text-slate-700 mb-4">
              Deploy and manage your applications on secure, scalable cloud platforms. 
              We provide expertise in cloud architecture, migration, and optimization.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Cloud migration services</li>
              <li>Infrastructure as Code</li>
              <li>DevOps and CI/CD pipelines</li>
              <li>Monitoring and security</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">IT Consulting</h2>
            <p className="text-slate-700 mb-4">
              Strategic technology guidance to help you make informed decisions and 
              maximize your IT investments.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Technology strategy planning</li>
              <li>System architecture review</li>
              <li>Security assessments</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
