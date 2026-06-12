import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-yellow-700">SoftCo</h1>
        <div className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-yellow-600">Services</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600">About</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          We build <span className="text-yellow-600">great software</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
          Custom web and mobile apps that help your business grow.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">
          Get in touch
        </button>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 text-center bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-3"></div>
            <h3 className="font-bold text-lg mb-2">Fast</h3>
            <p className="text-gray-600">Lightning fast performance</p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-3"></div>
            <h3 className="font-bold text-lg mb-2">Secure</h3>
            <p className="text-gray-600">Enterprise-grade security</p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto mb-3"></div>
            <h3 className="font-bold text-lg mb-2">Responsive</h3>
            <p className="text-gray-600">Works on all devices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;