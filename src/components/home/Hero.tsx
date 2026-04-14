import { ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-primary-900 pt-16 md:pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" 
          alt="Pharmacy Students in Lab" 
          className="h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-secondary-500/30 bg-secondary-500/10 px-4 py-1.5 text-sm font-semibold text-secondary-500 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-secondary-500 mr-2 animate-pulse"></span>
              Admissions Open for 2026-27
            </div>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-[1.1]">
              Empowering Future <span className="text-secondary-500">Pharmacists.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl font-medium">
              Join Andhra Pradesh's premier institution for pharmaceutical sciences. World-class laboratories, expert faculty, and 100% placement assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/admissions" 
                className="inline-flex items-center justify-center rounded-full bg-secondary-500 px-8 py-4 text-base font-bold text-primary-900 shadow-lg hover:bg-secondary-600 transition-all hover:-translate-y-1"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-all">
                Download Brochure
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm font-semibold text-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Award className="h-5 w-5 text-secondary-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white">NAAC A++</span>
                  <span className="text-xs text-slate-400">Accredited</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <ShieldCheck className="h-5 w-5 text-accent-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white">PCI & AICTE</span>
                  <span className="text-xs text-slate-400">Approved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Graphic/Stats area */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none hidden lg:block">
            {/* Abstract shapes or floating cards to make it premium */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Excellence in Education</h3>
                <p className="text-slate-400 text-sm">Fostering innovation and research in pharmaceutical sciences since 2006.</p>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-xl bg-primary-800/50 p-4 border border-white/5">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Highest Package</p>
                  <p className="font-heading text-3xl font-bold text-secondary-500">8.5 LPA</p>
                </div>
                <div className="rounded-xl bg-primary-800/50 p-4 border border-white/5">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Top Recruiters</p>
                  <p className="font-heading text-xl font-bold text-white">Pfizer, Dr. Reddy's, Divis</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
