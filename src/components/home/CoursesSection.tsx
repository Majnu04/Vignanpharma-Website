import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

const courses = [
  {
    title: 'B. Pharmacy',
    duration: '4 Years',
    description:
      'Undergraduate program focused on pharmaceutical sciences, patient care, and industry readiness.',
  },
  {
    title: 'M. Pharmacy',
    duration: '2 Years',
    description:
      'Advanced studies with specialization options in pharmaceutics, analysis, and pharmacology.',
  },
  {
    title: 'Pharm. D',
    duration: '6 Years',
    description:
      'Doctoral pathway emphasizing clinical practice, hospital training, and therapeutic decision-making.',
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Academics"
            title="Future-ready pharmacy programs"
            description="Programs approved by statutory bodies and designed for clinical, research, and industry careers."
          />
        </Reveal>

        <Reveal delayMs={120}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-100 hover:shadow-xl"
              >
                <div className="mb-4 inline-flex w-fit items-center rounded-full bg-primary-100 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-700">
                  {course.duration}
                </div>
                <h3 className="text-2xl font-semibold text-primary-900">{course.title}</h3>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">{course.description}</p>
                <Link
                  to="/courses"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-all duration-200 group-hover:text-primary-900"
                >
                  Explore course details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
