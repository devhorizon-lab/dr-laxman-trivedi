import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Dr. Laxman Trivedi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
                Homeopathic Physician
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Over 30 years of experience in homeopathic medicine, 
                providing personalized care and natural healing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  Book Consultation
                </a>
                <a href="/about" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full p-8 shadow-lg inline-block">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center">
                  <span className="text-6xl">🏥</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Dr. Laxman Trivedi
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                30+ Years of Healing Experience
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dr. Laxman Trivedi is a distinguished homeopathic physician with over three decades 
                of experience in treating patients with natural and holistic approaches. His expertise 
                spans across various health conditions, providing personalized treatment plans that 
                address the root cause of ailments.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With a deep understanding of homeopathic principles and modern medical knowledge, 
                Dr. Trivedi has successfully treated thousands of patients, helping them achieve 
                better health and wellness through natural healing methods.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">30+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Patients Treated</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Specializations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Chronic Diseases Management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Pediatric Homeopathy
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Women's Health
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Mental Health & Stress
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Digestive Disorders
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">✓</span>
                  Respiratory Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
              <p className="text-gray-700">
                Comprehensive health assessment including detailed case history, 
                physical examination, and personalized treatment plan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Homeopathic Medicines</h3>
              <p className="text-gray-700">
                High-quality homeopathic remedies prescribed based on individual 
                symptoms and constitutional factors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow-up Care</h3>
              <p className="text-gray-700">
                Regular monitoring of treatment progress with adjustments 
                to medication as needed for optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-4">📍</span>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-700">123 Medical Center Drive, City, State 12345</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-4">📞</span>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-700">(555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-4">✉️</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-700">dr.trivedi@example.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-4">🕒</span>
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Book Your Appointment
              </h3>
              <p className="text-gray-700 mb-6">
                Schedule your consultation with Dr. Trivedi for personalized 
                homeopathic treatment and care.
              </p>
              <a href="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-4">Dr. Laxman Trivedi</p>
          <p className="text-gray-400 mb-4">Homeopathic Physician with 30+ Years of Experience</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Dr. Laxman Trivedi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
