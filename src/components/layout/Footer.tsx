import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/output-onlinepngtools.png"
                alt="Vignan Institute of Pharmaceutical Technology"
                className="h-12 w-auto sm:h-14"
              />
              <span className="text-xl font-bold text-slate-900"></span>
            </div>
            <p className="max-w-md text-sm text-slate-500">
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
              <li>Phone: 0891 - 2511222</li>
              <li>Email: viptvizag@yahoo.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vignan Institute of Pharmaceutical Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
