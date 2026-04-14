import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

export default function Committees() {
  const committeeList = [
    'Library Committee',
    'Research Committee',
    'Self Appraisal Committee',
    'Sports Committee',
    'Student Welfare Committee',
    'Academic Audit Committee',
    'Admissions Committee',
    'Academic Monitoring Committee',
    'Anti-Ragging Committee',
    'College Development Committee',
    'Extra-Curricular Activities Committee',
    'Hostel Management Committee',
    'Infrastructure Maintenance Committee',
    'Purchase Committee',
    'Finance Committee',
    'Web Maintenance Committee',
  ];

  const libraryRoles = [
    'Guide the librarian in defining library policies and regulations.',
    'Support documentation services and update the library collection.',
    'Modernize and improve library and information services.',
    'Recommend procedures for efficient use of library resources.',
    'Review readership and improve engagement across departments.',
    'Prepare budget proposals for library development.',
    'Recommend fees and other charges related to library services.',
    'Gather feedback and submit annual library reports.',
  ];

  const libraryComposition = [
    {
      name: 'Dr K Daniel Raju',
      designation: 'Assoc. Professor, VIPT',
      role: 'Chairman',
    },
    {
      name: 'Mr P Srinivasa Rao',
      designation: 'Librarian, VIPT',
      role: 'Member',
    },
    {
      name: 'Mr P N Mallikarjun',
      designation: 'Assoc. Professor, VIPT',
      role: 'Member',
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Committees"
            title="Focused teams that support campus quality"
            description="Academic, administrative, and statutory committees that guide institutional performance."
          />
        </Reveal>

        <Reveal delayMs={120}>
          <section id="committee-list" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-primary-900">Committee List</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {committeeList.map((committee) => (
                <div key={committee} className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                  {committee}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delayMs={180}>
          <section id="library-committee" className="rounded-2xl border border-slate-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-primary-900">Library Committee</h3>
            <p className="mt-3 text-sm text-slate-600">
              The Library Committee recommends policies, reviews the collection budget, and ensures the library
              services align with the teaching and learning needs of the campus.
            </p>
          </section>
        </Reveal>

        <Reveal delayMs={220}>
          <section id="library-roles" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-primary-900">Powers & Functions</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {libraryRoles.map((role) => (
                <li key={role} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delayMs={260}>
          <section id="library-composition" className="rounded-2xl border border-slate-100 bg-white p-6">
            <h3 className="text-lg font-semibold text-primary-900">Composition of Library Committee</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Designation</th>
                    <th className="px-4 py-3">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {libraryComposition.map((member) => (
                    <tr key={member.name} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-700">{member.name}</td>
                      <td className="px-4 py-3 text-slate-600">{member.designation}</td>
                      <td className="px-4 py-3 text-slate-600">{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
