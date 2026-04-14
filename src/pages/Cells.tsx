import SectionHeading from '../components/ui/SectionHeading';

export default function Cells() {
  const cellDirectory = [
    'IQAC Cell',
    'Exam Cell',
    'Training & Placement Cell',
    'CG&C Cell',
    'EDP Cell',
    'Grievances & Redressal Cell',
    'Anti-Discrimination Cell',
    'Women Protection Cell',
    'Gender Sensitisation Cell',
    'Student Activity Cell',
  ];

  const iqacRoles = [
    'Design and sustain quality assurance practices across academic systems.',
    'Monitor implementation and analysis of academic and administrative performance.',
    'Support teaching and learning goals aligned with the institutional plan.',
    'Collect feedback from students, parents, and stakeholders.',
    'Build an organized documentation methodology for quality processes.',
    'Disseminate information on quality parameters in higher education.',
  ];

  const iqacComposition = [
    { name: 'Dr. Y. Srinivasa Rao', role: 'Chairperson' },
    { name: 'Dr. P. V. Kamala Kumari', role: 'IQAC Coordinator' },
    { name: 'Dr. M Saritha', role: 'Member' },
    { name: 'Dr. K. Daniel Raju', role: 'Member' },
    { name: 'Dr. P Chiranjeevi', role: 'Member' },
    { name: 'Dr. D Vasudha', role: 'Member' },
    { name: 'Dr. Gana Manjusha K', role: 'Member' },
    { name: 'Mr P. N. Mallikarjun', role: 'Member' },
    { name: 'Shri N Srikant', role: 'Management Member' },
    { name: 'Mr B Chandra Rao', role: 'Local Society Member' },
    { name: 'Mr Ram Murthy', role: 'Parent Member' },
    { name: 'Mr K V Mohan Rao', role: 'Industry Member' },
    { name: 'Mr P Bala Vamsi Krishna', role: 'Student Member' },
    { name: 'Mr P V V Santhosh Kumar', role: 'Alumni Member' },
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cells"
          title="Institutional cells and support units"
          description="Dedicated cells that promote quality, compliance, and student wellbeing."
        />

        <section id="cell-directory" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">Cell Directory</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cellDirectory.map((cell) => (
              <div key={cell} className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                {cell}
              </div>
            ))}
          </div>
        </section>

        <section id="iqac" className="rounded-2xl border border-slate-100 bg-white p-6">
          <h3 className="text-lg font-semibold text-primary-900">Internal Quality Assurance Cell (IQAC)</h3>
          <p className="mt-3 text-sm text-slate-600">
            IQAC oversees academic quality and continuous improvement with representation from faculty, parents,
            alumni, students, and external members.
          </p>
        </section>

        <section id="iqac-roles" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">IQAC Roles & Functions</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {iqacRoles.map((role) => (
              <li key={role} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="iqac-composition" className="rounded-2xl border border-slate-100 bg-white p-6">
          <h3 className="text-lg font-semibold text-primary-900">IQAC Composition</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Role</th>
                </tr>
              </thead>
              <tbody>
                {iqacComposition.map((member) => (
                  <tr key={member.name} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-700">{member.name}</td>
                    <td className="px-4 py-3 text-slate-600">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
