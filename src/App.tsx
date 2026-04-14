/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import CampusLife from './pages/CampusLife';
import Cells from './pages/Cells';
import Committees from './pages/Committees';
import Courses from './pages/Courses';
import Placements from './pages/Placements';
import Facilities from './pages/Facilities';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Governance from './pages/Governance';
import Research from './pages/Research';
import ViptMedia from './pages/ViptMedia';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="governance" element={<Governance />} />
          <Route path="committees" element={<Committees />} />
          <Route path="academics" element={<Academics />} />
          <Route path="cells" element={<Cells />} />
          <Route path="courses" element={<Courses />} />
          <Route path="placements" element={<Placements />} />
          <Route path="research" element={<Research />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="campus-life" element={<CampusLife />} />
          <Route path="vipt-media" element={<ViptMedia />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="flex min-h-[60vh] items-center justify-center">
                <h1 className="text-3xl font-bold text-slate-400">404 Not Found</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
