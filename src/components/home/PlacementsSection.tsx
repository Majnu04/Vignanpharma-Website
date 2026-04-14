import SectionHeading from '../ui/SectionHeading';

const placementStats = [
  { label: 'Highest Package', value: '8.5 LPA' },
  { label: 'Average Package', value: '4.2 LPA' },
  { label: 'Recruiting Partners', value: '120+' },
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

export default function PlacementsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Placements"
          title="Career outcomes that stand out"
          description="Dedicated training and placement support with strong ties to pharma, healthcare, and research organizations."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            {placementStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-primary-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Recruiters
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {recruiters.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-4"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
