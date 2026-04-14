import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

export default function Research() {
  const policyPoints = [
    'Encourage faculty to pursue cutting-edge research and quality output.',
    'Recognize and reward research contributions during the academic year.',
    'Include journal publications, conference presentations, and organized events.',
    'Use quality indicators such as citation index, impact factor, and H-index.',
  ];

  const researchAreas = [
    { id: 'publications', title: 'Journal & Book Publications', description: 'Peer-reviewed outputs and scholarly contributions across pharmacy domains.' },
    { id: 'projects', title: 'Research Projects & Patents', description: 'Funded projects, patent filings, and innovation outcomes.' },
    { id: 'consultancy', title: 'Consultancy', description: 'Industry advisory and applied research partnerships.' },
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Research"
            title="Innovation, publications, and funded projects"
            description="Research strengths, labs, publications, patents, and collaborations."
          />
        </Reveal>

        <Reveal delayMs={120}>
          <section id="policy" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-primary-900">Research & Development Policy</h3>
            <p className="mt-3 text-sm text-slate-600">
              VIPT builds a supportive ecosystem for faculty research with clear policies, incentives,
              and performance benchmarks.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {policyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="grid gap-6 md:grid-cols-3">
            {researchAreas.map((area) => (
              <section key={area.id} id={area.id} className="rounded-2xl border border-slate-100 bg-white p-6">
                <h3 className="text-lg font-semibold text-primary-900">{area.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{area.description}</p>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
