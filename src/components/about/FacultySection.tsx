import SectionHeading from '../ui/SectionHeading';
import { facultyMembers } from '../../data/faculty';

const getInitials = (name: string) => {
  return name
    .replace(/\./g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
};

export default function FacultySection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Faculty"
          title="Experienced mentors and academic leaders"
          description="Meet the faculty team guiding our students across pharmacy, research, and clinical practice."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.map((faculty) => (
            <article
              key={faculty.name}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-sm font-semibold text-white">
                {getInitials(faculty.name)}
              </div>
              <h3 className="text-lg font-semibold text-primary-900">{faculty.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{faculty.qualification}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-600">
                Experience: {faculty.experienceYears} years
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
