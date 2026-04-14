import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

export default function Academics() {
  const quickLinks = [
    {
      id: 'courses',
      title: 'Courses Offered',
      description: 'UG, PG, and Pharm.D programs designed for modern pharmacy careers.',
    },
    {
      id: 'fees',
      title: 'Fees Structure',
      description: 'Tuition fee guidance and payment schedules published by the institute.',
    },
    {
      id: 'calendar',
      title: 'Academic Calendar',
      description: 'Key academic dates, examinations, and session timelines.',
    },
    {
      id: 'linkages',
      title: 'Academic Linkages',
      description: 'Industry and academic collaborations that strengthen learning outcomes.',
    },
    {
      id: 'achievements',
      title: 'Achievements',
      description: 'Student and faculty achievements in academics and research.',
    },
  ];

  const programs = [
    { name: 'B.Pharmacy', specialization: 'B.Pharmacy', duration: '4 years', intake: '100' },
    { name: 'M.Pharmacy', specialization: 'Pharmaceutics', duration: '2 years', intake: '15' },
    { name: 'M.Pharmacy', specialization: 'Pharmaceutical Analysis', duration: '2 years', intake: '15' },
    { name: 'M.Pharmacy', specialization: 'Pharmacology', duration: '2 years', intake: '15' },
    { name: 'Pharm.D', specialization: 'Doctor of Pharmacy', duration: '6 years', intake: '30' },
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Academics"
            title="Curriculum, departments, and academic resources"
            description="Program structure, academic calendars, regulations, and learning resources."
          />
        </Reveal>

        <Reveal delayMs={120}>
          <section className="grid gap-4 md:grid-cols-3">
            {quickLinks.map((link) => (
              <article key={link.id} id={link.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-primary-900">{link.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{link.description}</p>
              </article>
            ))}
          </section>
        </Reveal>

        <Reveal delayMs={200}>
          <section className="rounded-2xl border border-slate-100 bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-primary-900">Programs at VIPT</h3>
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
                Intake approved by regulators
              </span>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Program</th>
                    <th className="px-4 py-3">Specialization</th>
                    <th className="px-4 py-3">Duration</th>
                    <th className="px-4 py-3">Intake</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((program) => (
                    <tr key={`${program.name}-${program.specialization}`} className="border-t border-slate-100">
                      <td className="px-4 py-3 font-medium text-slate-700">{program.name}</td>
                      <td className="px-4 py-3 text-slate-600">{program.specialization}</td>
                      <td className="px-4 py-3 text-slate-600">{program.duration}</td>
                      <td className="px-4 py-3 text-slate-600">{program.intake}</td>
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
