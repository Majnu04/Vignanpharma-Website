import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-lg font-bold text-white">
                V
              </div>
              <span className="text-xl font-bold text-white">VIPT</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Vignan Institute of Pharmaceutical Technology is committed to providing quality education with global standards and Indian values.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/placements" className="hover:text-white transition-colors">Placements</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Beside VSEZ, Duvvada</li>
              <li>Visakhapatnam - 530049</li>
              <li>Phone: 0891 - 2511222</li>
              <li>Email: viptvizag@yahoo.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vignan Institute of Pharmaceutical Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
