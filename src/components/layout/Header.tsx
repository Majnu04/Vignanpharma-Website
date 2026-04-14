import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      children: [
        { name: 'Overview', path: '/' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      name: 'About Us',
      path: '/about',
      children: [
        { name: 'About VIPT', path: '/about' },
        { name: 'Mission & Values', path: '/about#values' },
        { name: 'Faculty', path: '/about#faculty' },
      ],
    },
    {
      name: 'Governance',
      path: '/governance',
      children: [
        { name: 'Governing Body', path: '/governance#governing-body' },
        { name: 'Finance Committee', path: '/governance#finance-committee' },
        { name: 'HR Policies', path: '/governance#hr-policies' },
        { name: 'Roles & Responsibilities', path: '/governance#roles-responsibilities' },
        { name: 'Members Table', path: '/governance#members' },
      ],
    },
    {
      name: 'Committees',
      path: '/committees',
      children: [
        { name: 'Committee List', path: '/committees#committee-list' },
        { name: 'Library Committee', path: '/committees#library-committee' },
        { name: 'Roles & Functions', path: '/committees#library-roles' },
        { name: 'Composition', path: '/committees#library-composition' },
      ],
    },
    {
      name: 'Academics',
      path: '/academics',
      children: [
        { name: 'Courses Offered', path: '/academics#courses' },
        { name: 'Fees Structure', path: '/academics#fees' },
        { name: 'Academic Calendar', path: '/academics#calendar' },
        { name: 'Academic Linkages', path: '/academics#linkages' },
        { name: 'Achievements', path: '/academics#achievements' },
      ],
    },
    {
      name: 'Cells',
      path: '/cells',
      children: [
        { name: 'Cell Directory', path: '/cells#cell-directory' },
        { name: 'IQAC', path: '/cells#iqac' },
        { name: 'IQAC Roles', path: '/cells#iqac-roles' },
        { name: 'IQAC Composition', path: '/cells#iqac-composition' },
      ],
    },
    {
      name: 'Placements',
      path: '/placements',
      children: [
        { name: 'Placements Overview', path: '/placements' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      name: 'Research',
      path: '/research',
      children: [
        { name: 'R&D Policy', path: '/research#policy' },
        { name: 'Publications', path: '/research#publications' },
        { name: 'Projects & Patents', path: '/research#projects' },
        { name: 'Consultancy', path: '/research#consultancy' },
      ],
    },
    {
      name: 'Facilities',
      path: '/facilities',
      children: [
        { name: 'Facilities Overview', path: '/facilities' },
        { name: 'Campus Life', path: '/campus-life' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      name: 'Campus Life',
      path: '/campus-life',
      children: [
        { name: 'Clubs & Activities', path: '/campus-life#clubs' },
        { name: 'Events & Celebrations', path: '/campus-life#events' },
        { name: 'Student Activity Center', path: '/campus-life#sac' },
      ],
    },
    {
      name: 'VIPT Media',
      path: '/vipt-media',
      children: [
        { name: 'Press Reports', path: '/vipt-media#press' },
        { name: 'Social Media', path: '/vipt-media#social' },
        { name: 'Media Gallery', path: '/vipt-media#gallery' },
      ],
    },
  ];

  const normalizePath = (path: string) => path.split('#')[0];
  const isActive = (path: string) => location.pathname === normalizePath(path);
  const isLinkActive = (path: string, children?: { name: string; path: string }[]) => {
    if (isActive(path)) {
      return true;
    }
    return Boolean(children?.some((child) => isActive(child.path)));
  };

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
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-accent-600 ${
                  isLinkActive(link.path, link.children) ? 'text-accent-600' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
              {link.children && (
                <div className="invisible absolute left-0 top-full z-50 mt-3 w-56 translate-y-1 rounded-2xl border border-slate-100 bg-white/95 p-3 opacity-0 shadow-xl backdrop-blur-md transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-accent-600"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              <div key={link.name} className="flex flex-col gap-2">
                <Link
                  to={link.path}
                  className={`text-base font-semibold ${
                    isLinkActive(link.path, link.children) ? 'text-accent-600' : 'text-slate-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="ml-3 flex flex-col gap-2 border-l border-slate-100 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="text-sm font-semibold text-slate-600 transition-colors hover:text-accent-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
