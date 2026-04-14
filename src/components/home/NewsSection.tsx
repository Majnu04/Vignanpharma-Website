import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const newsItems = [
  {
    title: 'Central library expands research collections and digital resources',
    date: 'Campus Update',
    description:
      'The library continues to grow its book volumes and international publications to support advanced learning.',
  },
  {
    title: 'Faculty and students accelerate research publications',
    date: 'Research Update',
    description:
      'VIPT maintains an active research culture with strong publication output and conference participation.',
  },
  {
    title: 'Placement cell strengthens industry engagement',
    date: 'Placement Update',
    description:
      'Training and placement initiatives continue to connect students with pharma and healthcare recruiters.',
  },
  {
    title: 'Examination systems aligned with JNTU GV guidelines',
    date: 'Academic Update',
    description:
      'Exams follow EDEP practices and adhere to university schedules and governing body rules.',
  },
  {
    title: 'VIPT achievements highlighted across media channels',
    date: 'Media Update',
    description:
      'Campus achievements and events are shared through media coverage and public outreach.',
  },
  {
    title: 'Industry collaboration boosts student exposure',
    date: 'Industry Update',
    description:
      'Recent collaborations and MoUs strengthen practical learning and industry readiness.',
  },
];

export default function NewsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="News"
          title="Latest updates from campus"
          description="Summarized campus updates across academics, research, and placement initiatives."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                {item.date}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-primary-900">{item.title}</h3>
              <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">{item.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-all duration-200 group-hover:text-primary-900">
                Read full story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
