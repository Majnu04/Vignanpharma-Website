import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Admissions() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-4xl font-bold text-primary-900 sm:text-5xl mb-4">Admissions 2026</h1>
          <p className="text-lg text-slate-600">
            Take the first step towards a rewarding career in pharmaceutical sciences. Fill out the enquiry form below, and our admissions team will guide you through the process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Information Side */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary-900 mb-6">Admission Process</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Submit Enquiry', desc: 'Fill out the online form with your basic details and course preference.' },
                { step: '02', title: 'Counseling Session', desc: 'Our academic counselors will contact you to discuss eligibility and career goals.' },
                { step: '03', title: 'Document Verification', desc: 'Submit required academic transcripts and identification documents.' },
                { step: '04', title: 'Seat Confirmation', desc: 'Pay the admission fee to secure your seat for the upcoming academic year.' }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 text-accent-700 font-bold font-heading">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Enquiry Submitted!</h3>
                <p className="text-slate-600">Thank you for your interest in VIPT. Our admissions team will contact you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-accent-600 font-semibold hover:text-accent-700"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-heading text-2xl font-bold text-primary-900 mb-6">Enquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input type="text" id="firstName" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input type="text" id="lastName" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" id="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200" />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-slate-700 mb-1">Interested Course</label>
                    <select id="course" required className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200">
                      <option value="">Select a course</option>
                      <option value="bpharm">B. Pharmacy</option>
                      <option value="mpharm">M. Pharmacy</option>
                      <option value="pharmd">Pharm. D</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full rounded-lg bg-primary-600 px-4 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-primary-700">
                    Submit Enquiry
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
