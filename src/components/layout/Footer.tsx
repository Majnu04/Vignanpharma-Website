import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 py-14 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-4">
              <img
                src="/output-onlinepngtools.png"
                alt="Vignan Institute of Pharmaceutical Technology"
                className="h-12 w-auto sm:h-14"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-500">
              Vignan Institute of Pharmaceutical Technology is committed to providing quality education with global standards and Indian values.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="transition-colors hover:text-primary-700">About Us</Link></li>
              <li><Link to="/admissions" className="transition-colors hover:text-primary-700">Admissions</Link></li>
              <li><Link to="/placements" className="transition-colors hover:text-primary-700">Placements</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary-700">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Contact Us</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Beside VSEZ, Duvvada</li>
              <li>Visakhapatnam - 530049</li>
              <li>
                <a href="tel:08912511222" className="transition-colors hover:text-primary-700">
                  Phone: 0891 - 2511222
                </a>
              </li>
              <li>
                <a href="mailto:viptvizag@yahoo.com" className="transition-colors hover:text-primary-700">
                  Email: viptvizag@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vignan Institute of Pharmaceutical Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
