import SectionHeading from '../components/ui/SectionHeading';
import FacultySection from '../components/about/FacultySection';
import Reveal from '../components/ui/Reveal';

const values = [
  {
    title: 'Academic Excellence',
    description: 'Outcome-driven learning with strong research and industry engagement.',
  },
  {
    title: 'Student Success',
    description: 'Personalized mentoring, career guidance, and holistic development.',
  },
  {
    title: 'Ethical Practice',
    description: 'A culture grounded in integrity, empathy, and patient care.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-primary-900 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary-200">About VIPT</p>
            <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
              Vignan Institute of Pharmaceutical Technology
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
              A constituent college of Vignan Institutions, VIPT delivers pharmacy education with global standards and Indian values.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Our Mission"
                title="Quality-driven pharmacy education"
                description="VIPT offers B.Pharm, M.Pharm, and Pharm.D programs with approvals from AICTE, PCI, and affiliation to JNTU GV-Vizianagaram."
                align="left"
              />
              <p className="text-sm text-slate-600">
                The campus supports academic learning with well-planned infrastructure, a clean and comfortable environment, and systems aligned with ISO 9001, 14001, and 45001 certifications.
              </p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
              <h3 className="text-lg font-semibold text-primary-900">Quick Facts</h3>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {[
                  { label: 'Established', value: '2006' },
                  { label: 'Programs', value: 'B.Pharm, M.Pharm, Pharm.D' },
                  { label: 'Approvals', value: 'AICTE & PCI' },
                  { label: 'Affiliation', value: 'JNTU GV' },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-primary-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="values" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Values"
              title="What guides us"
              description="A quality-first mindset that blends academic rigor, research focus, and student wellbeing."
            />
          </Reveal>
          <Reveal delayMs={120}>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-primary-900">{value.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faculty">
        <Reveal>
          <FacultySection />
        </Reveal>
      </section>
    </div>
  );
}
