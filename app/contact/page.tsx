export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Contact Us</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-lg text-slate-700 mb-6">
            We&apos;d love to hear from you. Get in touch to discuss your project or learn 
            more about our services.
          </p>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Business Inquiries</h2>
              <p className="text-slate-600">
                For general business inquiries and project discussions, please reach out 
                to our team.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Government Contracts</h2>
              <p className="text-slate-600">
                Interested in partnering with us on government projects? Contact our 
                government solutions team.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Technical Support</h2>
              <p className="text-slate-600">
                Existing clients can reach our support team for technical assistance 
                and maintenance requests.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-slate-700 mb-4">
            <strong>Feepost Software & Development Corporation</strong>
          </p>
          <p className="text-slate-600">
            Ready to start your next project? Contact us to schedule a consultation 
            and discover how we can help bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  )
}
