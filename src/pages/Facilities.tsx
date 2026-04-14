import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

const facilities = [
  {
    title: 'Central Library',
    description: 'A growing collection of books, titles, and international publications for research support.',
  },
  {
    title: 'Research Laboratories',
    description: 'Well-equipped labs to support academic research and specialized experimentation.',
  },
  {
    title: 'Training & Placement Cell',
    description: 'Structured placement support focused on employer readiness and career guidance.',
  },
  {
    title: 'Examination Systems',
    description: 'Organized exam processes aligned with university guidelines and EDEP practices.',
  },
  {
    title: 'Wi-Fi Enabled Campus',
    description: 'Connected learning spaces for students across classrooms, labs, and common areas.',
  },
  {
    title: 'Campus Hostels & Sports',
    description: 'Residential facilities and sports spaces that support student wellbeing.',
  },
];

export default function Facilities() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Facilities"
            title="Infrastructure designed for excellence"
            description="Academic, research, and student-support facilities designed for a modern pharmacy campus."
          />
        </Reveal>

        <Reveal delayMs={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-primary-900">{facility.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
