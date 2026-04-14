import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Placements', path: '/placements' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top Bar (Contact & Small Links) */}
      <div className="hidden w-full bg-primary-900 px-4 py-2 text-xs font-medium text-slate-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-3 w-3" /> +91 0891-2511222
            </span>
            <a href="mailto:viptvizag@yahoo.com" className="hover:text-white transition-colors">viptvizag@yahoo.com</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/alumni" className="hover:text-white transition-colors">Alumni</Link>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-900 text-2xl font-heading font-bold text-white shadow-md group-hover:bg-primary-800 transition-colors">
            V
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-heading font-bold leading-tight text-primary-900 tracking-tight">VIPT</span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-600">Pharmacy College</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-semibold transition-colors hover:text-accent-600 ${
                isActive(link.path) ? 'text-accent-600' : 'text-slate-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/admissions" 
            className="rounded-full bg-secondary-500 px-6 py-2.5 text-sm font-bold text-primary-900 shadow-sm hover:bg-secondary-600 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-primary-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-base font-semibold ${
                  isActive(link.path) ? 'text-accent-600' : 'text-slate-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <Link 
                to="/admissions" 
                className="flex w-full justify-center rounded-lg bg-secondary-500 px-4 py-3 text-sm font-bold text-primary-900 shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
