import SectionHeading from '../components/ui/SectionHeading';

export default function ViptMedia() {
  const pressHighlights = [
    'Institutional achievements in regional press',
    'Student awards and academic recognitions',
    'Community outreach and health awareness drives',
    'Industry collaborations and MoU announcements',
  ];

  const socialHighlights = [
    'Event updates and campus celebrations',
    'Faculty talks and expert sessions',
    'Student clubs and competition wins',
    'Alumni stories and career milestones',
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="VIPT Media"
          title="News, announcements, and campus updates"
          description="Media coverage, press releases, and institutional updates."
        />

        <section id="press" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">Press Reports</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {pressHighlights.map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="social" className="rounded-2xl border border-slate-100 bg-white p-6">
          <h3 className="text-lg font-semibold text-primary-900">Social Media</h3>
          <p className="mt-3 text-sm text-slate-600">
            Follow campus updates, student achievements, and event highlights across social platforms.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {socialHighlights.map((item) => (
              <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">Media Gallery</h3>
          <p className="mt-3 text-sm text-slate-600">
            A curated gallery of campus milestones, events, and media coverage will be published here.
          </p>
        </section>
      </div>
    </div>
  );
}
