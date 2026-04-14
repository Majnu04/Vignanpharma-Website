import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <div className="bg-accent-700 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start your journey?
            </h2>
            <p className="mt-3 text-lg text-accent-100 max-w-xl">
              Admissions for the academic year 2026 are now open. Secure your seat in one of the top pharmacy colleges.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center rounded-full bg-secondary-500 px-8 py-4 text-base font-bold text-primary-900 shadow-lg hover:bg-secondary-600 transition-all hover:-translate-y-1"
            >
              Apply Online Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-transparent px-8 py-4 text-base font-bold text-white ring-2 ring-white hover:bg-white/10 transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
