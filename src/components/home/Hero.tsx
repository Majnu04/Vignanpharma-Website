import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-slate-50/70 pt-0 pb-16 sm:pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mt-4 inline-flex items-center rounded-full border border-primary-200/70 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 shadow-sm">
              Admissions Open for 2026-27
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Empowering Future <span className="text-primary-600">Pharmacists</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Vignan Institute of Pharmaceutical Technology nurtures industry-ready professionals with
              expert faculty, advanced labs, and strong clinical exposure.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/admissions"
                className="inline-flex items-center justify-center rounded-full bg-secondary-500 px-8 py-4 text-base font-bold text-primary-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary-600 hover:shadow-md"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md">
                Download Brochure
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <Award className="h-5 w-5 text-secondary-500" />
                <div className="flex flex-col">
                  <span className="text-slate-900">NAAC A++</span>
                  <span className="text-xs text-slate-500">Accredited</span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <ShieldCheck className="h-5 w-5 text-accent-600" />
                <div className="flex flex-col">
                  <span className="text-slate-900">PCI & AICTE</span>
                  <span className="text-xs text-slate-500">Approved</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/BnT-BjwymcE?autoplay=1&mute=1&loop=1&playlist=BnT-BjwymcE&controls=0&playsinline=1"
                  title="Vignan Institute of Pharmaceutical Technology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Highest Package</p>
                <p className="mt-2 text-2xl font-bold text-primary-900">8.5 LPA</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Top Recruiters</p>
                <p className="mt-2 text-base font-semibold text-slate-700">Pfizer, Dr. Reddy's, Divis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
