import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

export default function Contact() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Connect with VIPT"
            description="Reach out to our admissions team for course details, campus visits, and application support."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-lg font-semibold text-primary-900">Send us a message</h3>
              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-700"
                >
                  Submit message
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-primary-900">Campus Address</h3>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-accent-600" />
                  <span>Beside VSEZ, Duvvada, Visakhapatnam - 530049</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-accent-600" />
                  <span>+91 0891-2511222</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-accent-600" />
                  <span>viptvizag@yahoo.com, viptvizag@gmail.com</span>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                Map placeholder
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
