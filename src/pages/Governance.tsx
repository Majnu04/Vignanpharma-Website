import SectionHeading from '../components/ui/SectionHeading';

export default function Governance() {
  const governanceSections = [
    {
      id: 'governing-body',
      title: 'Governing Body',
      description:
        'The apex body guides the long-term direction of the institution and ensures balanced representation from the society, government, council, and affiliating bodies.',
    },
    {
      id: 'finance-committee',
      title: 'Finance Committee',
      description:
        'Reviews budgets, recommends resource allocation, and monitors financial sustainability and transparency.',
    },
    {
      id: 'hr-policies',
      title: 'HR Policies',
      description:
        'Defines recruitment, performance review, professional development, and workplace conduct policies for staff and faculty.',
    },
  ];

  const roles = [
    'Provide strategic direction and policy oversight.',
    'Ensure compliance with regulatory and affiliating bodies.',
    'Review academic, administrative, and financial performance.',
    'Support quality assurance and continuous improvement.',
  ];

  const members = [
    { role: 'Chairman', representation: 'Society/Trust' },
    { role: 'Member Secretary', representation: 'Institution' },
    { role: 'Government Nominee', representation: 'Government' },
    { role: 'Council Nominee', representation: 'Regulatory Council' },
    { role: 'Affiliating Body Nominee', representation: 'University' },
    { role: 'External Experts', representation: 'Industry/Academia' },
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Governance"
          title="Transparent leadership and accountable administration"
          description="Overview of the governing bodies, leadership structure, and decision-making framework at VIPT."
        />
        <p className="text-sm text-slate-600">
          VIPT follows a structured governance system that supports academic excellence, ethical
          operations, and continuous institutional improvement.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {governanceSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <h3 className="text-lg font-semibold text-primary-900">{section.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{section.description}</p>
            </section>
          ))}
        </div>

        <section id="roles-responsibilities" className="rounded-2xl border border-slate-100 bg-white p-6">
          <h3 className="text-lg font-semibold text-primary-900">Roles & Responsibilities</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {roles.map((role) => (
              <li key={role} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600" />
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="members" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">Members Table</h3>
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
                <tr>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Representation</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.role} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-700">{member.role}</td>
                    <td className="px-4 py-3 text-slate-600">{member.representation}</td>
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
