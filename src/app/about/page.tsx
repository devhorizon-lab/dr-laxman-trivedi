import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. Laxman Trivedi',
  description: 'Learn about Dr. Laxman Trivedi, a distinguished homeopathic physician with 30+ years of experience. Discover his journey, philosophy, and expertise in natural healing.',
  keywords: 'Dr. Laxman Trivedi, homeopathic physician, 30 years experience, natural healing, holistic medicine, Sasaram, Bihar',
  openGraph: {
    title: 'About Dr. Laxman Trivedi - 30+ Years of Healing Excellence',
    description: 'Learn about Dr. Laxman Trivedi, a distinguished homeopathic physician with 30+ years of experience in natural healing and holistic medicine.',
    url: 'https://drlaxmantrivedi.com/about',
    images: [
      {
        url: '/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Laxman Trivedi - Homeopathic Physician',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Laxman Trivedi - 30+ Years of Healing Excellence',
    description: 'Learn about Dr. Laxman Trivedi, a distinguished homeopathic physician with 30+ years of experience in natural healing.',
    images: ['/about-og-image.jpg'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            Meet Dr. Laxman Trivedi
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            A Legacy of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Healing Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            With over three decades of dedicated practice in homeopathic medicine, Dr. Laxman Trivedi 
            has transformed thousands of lives through his unique blend of traditional wisdom and 
            modern medical understanding. His commitment to treating the whole person, not just symptoms, 
            has earned him recognition as one of the region&apos;s most trusted homeopathic physicians.
          </p>
        </div>
      </section>

      {/* Doctor's Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                My Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Medical Student to Healing Pioneer
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  My journey in homeopathic medicine began in the early 1990s when I first discovered 
                  the profound healing potential of natural remedies. After completing my conventional 
                  medical education, I was drawn to homeopathy&apos;s holistic approach - treating the whole 
                  person rather than just isolated symptoms.
                </p>
                <p>
                  What started as curiosity became a lifelong passion. I spent years studying under 
                  renowned homeopathic masters, learning the intricate art of case-taking and remedy 
                  selection. This foundation, combined with my conventional medical background, allows 
                  me to provide comprehensive care that bridges traditional and modern approaches.
                </p>
                <p>
                  Over three decades, I&apos;ve treated over 10,000 patients with conditions ranging from 
                  chronic diseases to acute ailments. Each patient has taught me something new, 
                  reinforcing my belief that every individual is unique and deserves personalized care.
                </p>
              </div>
              
              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600 text-sm">Patients Treated</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Philosophy</h3>
                <div className="space-y-6">
                  {[
                    { 
                      title: "Holistic Healing", 
                      desc: "Treating mind, body, and spirit as interconnected elements of health",
                      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    },
                    { 
                      title: "Individualized Care", 
                      desc: "Every treatment plan is uniquely tailored to the patient&apos;s specific needs",
                      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    },
                    { 
                      title: "Root Cause Treatment", 
                      desc: "Addressing underlying causes rather than just symptom suppression",
                      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    },
                    { 
                      title: "Preventive Medicine", 
                      desc: "Focusing on wellness and prevention alongside treatment",
                      icon: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    }
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={principle.icon} />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{principle.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{principle.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Areas of Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Specialized Treatment Areas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Chronic Diseases",
                desc: "Diabetes, hypertension, arthritis, autoimmune disorders, and other long-term conditions",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                color: "blue",
                cases: "2,500+ cases"
              },
              {
                title: "Pediatric Care",
                desc: "Childhood illnesses, behavioral issues, developmental concerns, and vaccination support",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
                color: "green",
                cases: "1,800+ cases"
              },
              {
                title: "Women's Health",
                desc: "Hormonal imbalances, menstrual disorders, menopause, fertility, and pregnancy care",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                color: "pink",
                cases: "1,200+ cases"
              },
              {
                title: "Mental Health",
                desc: "Anxiety, depression, stress management, sleep disorders, and emotional trauma",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                color: "purple",
                cases: "900+ cases"
              },
              {
                title: "Respiratory Health",
                desc: "Asthma, bronchitis, sinusitis, allergies, hay fever, and chronic cough",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                color: "indigo",
                cases: "1,100+ cases"
              },
              {
                title: "Digestive Disorders",
                desc: "IBS, acid reflux, food intolerances, inflammatory bowel disease, and gut health",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                color: "orange",
                cases: "800+ cases"
              }
            ].map((expertise, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br from-${expertise.color}-500 to-${expertise.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expertise.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{expertise.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{expertise.desc}</p>
                <div className="text-sm font-medium text-blue-600">{expertise.cases}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Treatment Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Trivedi Method
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                A Comprehensive Approach to Healing
              </h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  My treatment approach is built on three decades of clinical experience and 
                  continuous learning. I combine traditional homeopathic principles with modern 
                  medical understanding to create a unique methodology that addresses the root 
                  causes of illness.
                </p>
                <p>
                  Every consultation begins with a comprehensive assessment that goes beyond 
                  physical symptoms. I explore emotional patterns, lifestyle factors, family 
                  history, and even dreams to understand the complete picture of your health.
                </p>
                <p>
                  This detailed understanding allows me to select the most appropriate homeopathic 
                  remedy and develop a personalized treatment plan that addresses your unique 
                  health challenges.
                </p>
              </div>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60-90</div>
                  <div className="text-gray-600 text-sm">Minutes Initial Consultation</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">4-6</div>
                  <div className="text-gray-600 text-sm">Weeks Average Recovery</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Comprehensive Case Taking",
                  desc: "Detailed 60-90 minute consultation including medical history, current symptoms, emotional state, lifestyle factors, and family history.",
                  icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                  color: "blue"
                },
                {
                  title: "Remedy Selection",
                  desc: "Careful analysis of symptoms to select the most appropriate homeopathic remedy for your unique condition.",
                  icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                  color: "green"
                },
                {
                  title: "Follow-up Protocol",
                  desc: "Regular monitoring and adjustment of treatment to ensure optimal progress and complete healing.",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  color: "purple"
                }
              ].map((step, index) => (
                <div key={index} className={`bg-${step.color}-50 p-6 rounded-xl border-l-4 border-${step.color}-500`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${step.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-6 h-6 text-${step.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Patient Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                age: "42",
                condition: "Chronic Migraines",
                                  testimonial: "After suffering from debilitating migraines for 15 years, Dr. Trivedi&apos;s treatment completely transformed my life. I&apos;m now migraine-free for over 2 years.",
                duration: "3 months treatment"
              },
              {
                name: "Rajesh K.",
                age: "38",
                condition: "Diabetes Management",
                testimonial: "Dr. Trivedi helped me manage my diabetes naturally. My blood sugar levels are now stable and I feel more energetic than ever.",
                duration: "6 months treatment"
              },
              {
                name: "Priya S.",
                age: "29",
                condition: "Anxiety & Depression",
                testimonial: "His holistic approach to mental health helped me overcome anxiety and depression. I feel like myself again after years of struggle.",
                duration: "4 months treatment"
              },
              {
                name: "Michael T.",
                age: "55",
                condition: "Arthritis",
                                  testimonial: "The pain and stiffness in my joints have significantly reduced. Dr. Trivedi&apos;s treatment gave me back my mobility and quality of life.",
                duration: "8 months treatment"
              },
              {
                name: "Aisha R.",
                age: "31",
                condition: "Fertility Issues",
                                  testimonial: "After trying for 3 years, Dr. Trivedi&apos;s treatment helped us conceive naturally. We&apos;re now proud parents of a healthy baby girl.",
                duration: "9 months treatment"
              },
              {
                name: "David L.",
                age: "47",
                condition: "Digestive Disorders",
                testimonial: "My IBS symptoms have completely resolved. Dr. Trivedi&apos;s approach addressed the root cause, not just the symptoms.",
                duration: "5 months treatment"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} years • {testimonial.condition}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">&quot;{testimonial.testimonial}&quot;</p>
                <div className="text-sm text-blue-600 font-medium">{testimonial.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Trivedi Difference
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of patients who have experienced the transformative power of 
            Dr. Laxman Trivedi&apos;s personalized homeopathic treatment. Begin your journey 
            to lasting health and wellness today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Your Consultation
            </a>
            <a href="/services" className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
