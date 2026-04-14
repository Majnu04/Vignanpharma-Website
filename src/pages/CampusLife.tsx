import SectionHeading from '../components/ui/SectionHeading';

export default function CampusLife() {
  const clubs = [
    'Yoga',
    'Music',
    'Fine Arts',
    'Hobby Club',
    'Counsellor',
    'Circular & Extra-Curricular Activities',
    'NSS',
    'IPA Local Chapter',
    'Student Activity Center (SAC)',
    'Yuvtarang',
  ];

  const events = [
    'Covid-19 Awareness Quiz (Online)',
    'Seven Days NSS Camp at Sattivanipalem',
    "International Women's Day",
    'Alumni Reunion',
    'Sankranti Celebrations',
    'Swachh Bharat Cleanliness Awareness',
    'National Seminar (One Day)',
    'Medical Camp at Duvvada',
    'Personality Development & Communication Skills',
    'Inauguration of IPA-Student Chapter',
    'International Yoga Day',
    'Inauguration of Student Activity Center',
  ];

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Life"
          title="Clubs, events, and student experiences"
          description="Vibrant campus culture through activities, clubs, and celebrations."
        />

        <section id="clubs" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">Clubs & Activities</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club) => (
              <div key={club} className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                {club}
              </div>
            ))}
          </div>
        </section>

        <section id="events" className="rounded-2xl border border-slate-100 bg-white p-6">
          <h3 className="text-lg font-semibold text-primary-900">Functions & Celebrations</h3>
          <p className="mt-3 text-sm text-slate-600">
            Campus events blend academics, wellness, culture, and community service to build holistic student growth.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {events.map((event) => (
              <div key={event} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                {event}
              </div>
            ))}
          </div>
        </section>

        <section id="sac" className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
          <h3 className="text-lg font-semibold text-primary-900">Student Activity Center</h3>
          <p className="mt-3 text-sm text-slate-600">
            SAC supports student-led initiatives, cultural events, leadership workshops, and peer engagement.
          </p>
        </section>
      </div>
    </div>
  );
}
