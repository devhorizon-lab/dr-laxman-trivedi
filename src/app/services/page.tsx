export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive homeopathic treatments and consultations tailored to your 
            individual health needs and wellness goals.
          </p>
        </div>
      </section>

      {/* Consultation Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
              <p className="text-gray-700 mb-6">
                A comprehensive 60-90 minute session including detailed case history, 
                physical examination, and personalized treatment plan.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Complete health history review</li>
                <li>• Detailed symptom analysis</li>
                <li>• Physical examination</li>
                <li>• Personalized treatment plan</li>
                <li>• Homeopathic remedy prescription</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-lg">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Follow-up Consultations</h3>
              <p className="text-gray-700 mb-6">
                Regular 30-45 minute sessions to monitor progress and adjust treatment 
                as needed for optimal healing.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Progress assessment</li>
                <li>• Treatment adjustment</li>
                <li>• New symptom evaluation</li>
                <li>• Remedy potency changes</li>
                <li>• Health maintenance guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Treatment Areas
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pediatric Care</h3>
              <p className="text-gray-700 mb-4">
                Gentle and effective homeopathic treatments for children of all ages.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Common childhood illnesses</li>
                <li>• Behavioral issues</li>
                <li>• Allergies and asthma</li>
                <li>• Developmental concerns</li>
                <li>• Vaccination support</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👩</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Women's Health</h3>
              <p className="text-gray-700 mb-4">
                Specialized care for women's unique health needs and concerns.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Hormonal imbalances</li>
                <li>• Menstrual disorders</li>
                <li>• Menopause support</li>
                <li>• Fertility issues</li>
                <li>• Pregnancy care</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Health</h3>
              <p className="text-gray-700 mb-4">
                Natural approaches to emotional and mental wellness.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Anxiety and depression</li>
                <li>• Stress management</li>
                <li>• Sleep disorders</li>
                <li>• Emotional trauma</li>
                <li>• Mood disorders</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🫁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Respiratory Health</h3>
              <p className="text-gray-700 mb-4">
                Treatment for various respiratory conditions and allergies.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Asthma and bronchitis</li>
                <li>• Sinusitis and colds</li>
                <li>• Allergic reactions</li>
                <li>• Hay fever</li>
                <li>• Chronic cough</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🫀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Chronic Conditions</h3>
              <p className="text-gray-700 mb-4">
                Long-term management of chronic diseases and conditions.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Diabetes management</li>
                <li>• Hypertension</li>
                <li>• Arthritis and joint pain</li>
                <li>• Autoimmune disorders</li>
                <li>• Chronic fatigue</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digestive Health</h3>
              <p className="text-gray-700 mb-4">
                Natural solutions for digestive disorders and gut health.
              </p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Irritable bowel syndrome</li>
                <li>• Acid reflux</li>
                <li>• Food intolerances</li>
                <li>• Inflammatory bowel disease</li>
                <li>• Digestive discomfort</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Treatment Process
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Assessment</h3>
              <p className="text-gray-700">
                Comprehensive evaluation of your health history, current symptoms, 
                and overall wellness goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treatment Plan</h3>
              <p className="text-gray-700">
                Personalized homeopathic treatment plan with specific remedies 
                and dosage instructions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow-up Care</h3>
              <p className="text-gray-700">
                Regular monitoring of your progress with treatment adjustments 
                as needed for optimal results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wellness Maintenance</h3>
              <p className="text-gray-700">
                Ongoing support for maintaining good health and preventing 
                future health issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Fees
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Initial Consultation</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$150</div>
              <p className="text-gray-700 mb-6">
                60-90 minute comprehensive assessment and treatment plan
              </p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>• Complete health history</li>
                <li>• Detailed symptom analysis</li>
                <li>• Physical examination</li>
                <li>• Personalized treatment plan</li>
                <li>• First month of remedies</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-2 border-blue-600">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Follow-up Consultation</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$80</div>
              <p className="text-gray-700 mb-6">
                30-45 minute progress review and treatment adjustment
              </p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>• Progress assessment</li>
                <li>• Treatment adjustment</li>
                <li>• New symptom evaluation</li>
                <li>• Remedy changes</li>
                <li>• Health guidance</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Emergency Consultation</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$120</div>
              <p className="text-gray-700 mb-6">
                Same-day consultation for urgent health concerns
              </p>
              <ul className="text-gray-700 text-sm space-y-2 mb-6">
                <li>• Urgent symptom relief</li>
                <li>• Acute condition treatment</li>
                <li>• Immediate remedy prescription</li>
                <li>• Follow-up scheduling</li>
                <li>• Emergency guidance</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Natural Healing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your consultation with Dr. Laxman Trivedi and start your journey 
            toward better health through homeopathic medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Your Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
