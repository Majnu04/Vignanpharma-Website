import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-primary-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:flex-row md:p-12">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ready to start your journey?
            </h2>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-slate-600">
              Admissions for the academic year 2026 are now open. Secure your seat in one of the top pharmacy colleges.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-secondary-500 px-8 py-4 text-base font-bold text-primary-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary-600 hover:shadow-md"
            >
              Apply Online Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
