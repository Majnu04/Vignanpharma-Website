import SectionHeading from '../components/ui/SectionHeading';

const courses = [
  {
    title: 'B. Pharmacy',
    duration: '4 Years',
    intake: '100 Seats',
    highlights: [
      'Core pharmaceutical sciences and lab training',
      'Clinical practice exposure',
      'Industry internships and projects',
    ],
  },
  {
    title: 'M. Pharmacy - Pharmaceutics',
    duration: '2 Years',
    intake: '18 Seats',
    highlights: [
      'Advanced drug formulation labs',
      'Research thesis and publication support',
      'Guest lectures from industry leaders',
    ],
  },
  {
    title: 'M. Pharmacy - Pharmaceutical Analysis',
    duration: '2 Years',
    intake: '18 Seats',
    highlights: [
      'State-of-the-art instrumentation',
      'Regulatory and quality assurance focus',
      'Hands-on analytical chemistry projects',
    ],
  },
  {
    title: 'Pharm. D',
    duration: '6 Years',
    intake: '30 Seats',
    highlights: [
      'Clinical rotations in partner hospitals',
      'Therapeutic drug monitoring',
      'Patient counseling and case-based learning',
    ],
  },
];

export default function Courses() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Courses"
          title="Programs built for modern pharmacy careers"
          description="Choose from undergraduate, postgraduate, and doctoral programs designed for clinical and research excellence."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary-900">{course.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">Duration: {course.duration}</p>
                </div>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
                  {course.intake}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
