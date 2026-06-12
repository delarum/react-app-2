import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Column: Information */}
          <div className="bg-blue-900 p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-blue-100 mb-12 text-lg leading-relaxed">
              Ready to elevate your project? Our team is standing by to provide expert solutions tailored to your unique business needs.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-blue-200 uppercase tracking-wider text-sm">Email</h4>
                <p className="text-xl">contact@yoursoftware.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200 uppercase tracking-wider text-sm">Phone</h4>
                <p className="text-xl">+254712345678</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200 uppercase tracking-wider text-sm">Office</h4>
                <p className="text-xl">Parklands, Nairobi</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition duration-200"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition duration-200 transform active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;