export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Dr. Laxman Trivedi
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A distinguished homeopathic physician with over three decades of experience 
            in natural healing and holistic medicine.
          </p>
        </div>
      </section>

      {/* Doctor's Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                My Journey in Homeopathy
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                My journey in homeopathic medicine began over 30 years ago when I first 
                discovered the profound healing potential of natural remedies. After completing 
                my medical education, I specialized in homeopathy, drawn by its holistic 
                approach to treating the whole person rather than just symptoms.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Throughout my career, I have treated thousands of patients with various 
                health conditions, from chronic diseases to acute ailments. My approach 
                combines traditional homeopathic principles with modern medical understanding, 
                ensuring the best possible outcomes for my patients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in treating each patient as a unique individual, understanding 
                that the same condition can manifest differently in different people. This 
                personalized approach has been the cornerstone of my practice and the key 
                to my success in helping patients achieve better health and wellness.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Principles</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <div>
                    <strong>Holistic Approach:</strong> Treating the whole person, not just symptoms
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <div>
                    <strong>Individualized Care:</strong> Personalized treatment plans for each patient
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <div>
                    <strong>Natural Healing:</strong> Using gentle, natural remedies for lasting results
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <div>
                    <strong>Preventive Care:</strong> Focusing on prevention and overall wellness
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Bachelor of Homeopathic Medicine</li>
                <li>Advanced Certification in Classical Homeopathy</li>
                <li>Specialized Training in Pediatric Homeopathy</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience</h3>
              <ul className="text-gray-700 space-y-2">
                <li>30+ Years Clinical Practice</li>
                <li>1000+ Patients Treated</li>
                <li>Specialized in Chronic Diseases</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuing Education</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Regular Homeopathic Conferences</li>
                <li>Advanced Case Studies</li>
                <li>Latest Research & Developments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Treatment Philosophy
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                The Homeopathic Approach
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Homeopathy is based on the principle of "like cures like" - substances that 
                cause symptoms in healthy people can cure similar symptoms in sick people. 
                This approach stimulates the body's natural healing processes.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I believe in treating the root cause of illness rather than just suppressing 
                symptoms. This leads to more lasting and profound healing, addressing the 
                underlying imbalances that cause disease.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every patient is unique, and so is their treatment. I take the time to 
                understand each person's complete health picture, including physical symptoms, 
                emotional state, and lifestyle factors.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Comprehensive Assessment</h4>
                <p className="text-gray-700">
                  Detailed case taking including medical history, current symptoms, 
                  emotional state, and lifestyle factors.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Personalized Treatment</h4>
                <p className="text-gray-700">
                  Individualized homeopathic remedies selected based on the unique 
                  symptom picture of each patient.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Follow-up Care</h4>
                <p className="text-gray-700">
                  Regular monitoring and adjustment of treatment to ensure optimal 
                  progress and healing.
                </p>
              </div>
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
            Experience the benefits of natural healing with Dr. Laxman Trivedi's 
            personalized homeopathic treatment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Your Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More About Homeopathy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
