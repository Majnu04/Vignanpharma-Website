import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

const stats = [
  { label: 'Highest Package', value: '8.5 LPA' },
  { label: 'Average Package', value: '4.2 LPA' },
  { label: 'Recruiters', value: '120+' },
  { label: 'Internships', value: '300+' },
];

const recruiters = [
  { name: 'Hetero', logo: 'https://www.vignanpharma.com/images/hetero.jpg' },
  { name: 'Dr. Reddys', logo: 'https://www.vignanpharma.com/images/dr-reddys-logo.jpg' },
  { name: 'Sutherland', logo: 'https://www.vignanpharma.com/images/sutherland.jpg' },
  { name: 'Ricon', logo: 'https://www.vignanpharma.com/images/ricon.jpg' },
  { name: 'Aurobindo', logo: 'https://www.vignanpharma.com/images/aurobindo.jpg' },
  { name: 'Aizant', logo: 'https://www.vignanpharma.com/images/aizant.jpg' },
  { name: 'Genpact', logo: 'https://www.vignanpharma.com/images/genpact.jpg' },
  { name: 'Astra', logo: 'https://www.vignanpharma.com/images/astra.jpg' },
];

export default function Placements() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Placements"
            title="A dedicated path to career success"
            description="An integrated training and placement cell that supports student job expectations and industry readiness."
          />
        </Reveal>

        <Reveal delayMs={120}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
                <p className="mt-3 text-3xl font-bold text-primary-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
            <h3 className="text-lg font-semibold text-primary-900">Recruiting Partners</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our students are placed in leading pharmaceutical, hospital, and healthcare organizations.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {recruiters.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-4"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-9 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
