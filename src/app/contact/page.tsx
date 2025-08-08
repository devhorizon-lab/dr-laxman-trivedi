import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Book Appointment',
  description: 'Contact Dr. Laxman Trivedi for homeopathic consultation. Call +916386019546 or visit Shobha Complex Rauza Road, Sasaram, Bihar. Book your appointment today.',
  keywords: 'contact Dr. Laxman Trivedi, book appointment, homeopathic consultation, Sasaram, Bihar, phone number, address, Dr. Laxman Trivedi contact',
  openGraph: {
    title: 'Contact Dr. Laxman Trivedi - Book Your Appointment',
    description: 'Contact Dr. Laxman Trivedi for homeopathic consultation. Call +916386019546 or visit Shobha Complex Rauza Road, Sasaram, Bihar.',
    url: 'https://dr-laxman-trivedi.vercel.app/contact',
    images: [
      {
        url: '/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Dr. Laxman Trivedi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dr. Laxman Trivedi - Book Your Appointment',
    description: 'Contact Dr. Laxman Trivedi for homeopathic consultation. Call +916386019546 or visit Shobha Complex Rauza Road, Sasaram, Bihar.',
    images: ['/contact-og-image.jpg'],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Information */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.05) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-medium shadow-lg border border-blue-100 mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Contact Information
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Reach out to Dr. Laxaman Trivedi for consultations, appointments, 
                  or any questions about homeopathic treatment.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-white/20">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Branch Locations</h3>
                      <div className="space-y-3">
                        <div className="border-l-4 border-blue-500 pl-3">
                          <p className="text-sm font-semibold text-blue-600 mb-1">Main Office</p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Shobha Complex Rauza Road<br />
                            Sasaram, Bihar 821115<br />
                            India
                          </p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-3">
                          <p className="text-sm font-semibold text-green-600 mb-1">Residence Branch</p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Vill- Patadhi (Vishwamitra ITI)<br />
                            Near Hanuman Mandir<br />
                            Sasaram, Bihar
                          </p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-3">
                          <p className="text-sm font-semibold text-purple-600 mb-1">Chandrawanshi Nagar Branch</p>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Chandrawanshi Nagar<br />
                            Sasaram, Bihar<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-white/20">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Numbers</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Main:</strong> +91 6386019546<br />
                        <strong>Emergency:</strong> +91 8877712278<br />
                        <span className="text-sm text-green-600">Available 24/7 for emergencies</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-white/20">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                        <p><strong>Sunday:</strong> Closed</p>
                        <p className="text-sm text-purple-600 mt-2">
                          Emergency consultations available outside office hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-white/20">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Email:</strong> narayanjeetrivedi@gmail.com<br />
                        <span className="text-sm text-indigo-600">For appointments, consultations, and inquiries</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-white/20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Office Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Located in Shobha Complex on Rauza Road, easily accessible 
                    with ample parking available. Well-connected to major areas of Sasaram.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="consultation">General Consultation</option>
                    <option value="emergency">Emergency Consultation</option>
                    <option value="question">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your health concerns or reason for contacting us..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    I agree to the privacy policy and consent to being contacted regarding my inquiry *
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Online Booking</h3>
              <p className="text-gray-700 mb-6">
                Schedule your appointment online for your convenience
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Online
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Booking</h3>
              <p className="text-gray-700 mb-6">
                Call us directly to schedule your consultation
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Call Now
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Booking</h3>
              <p className="text-gray-700 mb-6">
                Send us an email to request an appointment
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does the initial consultation take?
              </h3>
              <p className="text-gray-700">
                The initial consultation typically takes 60-90 minutes, including a comprehensive 
                health history review, physical examination, and treatment plan development.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you accept insurance?
              </h3>
              <p className="text-gray-700">
                We accept most major insurance plans. Please contact us to verify your coverage 
                and discuss payment options.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I book an emergency consultation?
              </h3>
              <p className="text-gray-700">
                Yes, we offer emergency consultations for urgent health concerns. Please call 
                our emergency line at (555) 987-6543 for immediate assistance.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What should I bring to my first appointment?
              </h3>
              <p className="text-gray-700">
                Please bring a list of current medications, recent medical reports, and any 
                relevant health history. We&apos;ll provide a detailed questionnaire before your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Contact Dr. Laxaman Trivedi today to schedule your consultation and 
            experience the benefits of natural homeopathic healing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Appointment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
