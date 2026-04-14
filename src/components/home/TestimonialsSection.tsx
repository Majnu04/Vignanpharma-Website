import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    name: 'Ananya Rao',
    course: 'B. Pharmacy, Class of 2025',
    feedback:
      'The faculty mentorship and clinical exposure helped me secure a placement at a leading hospital pharmacy.',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Rahul Verma',
    course: 'M. Pharmacy, Class of 2024',
    feedback:
      'Hands-on research projects and industry connect sessions made the curriculum feel future-ready.',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Meera Joseph',
    course: 'Pharm. D, Class of 2026',
    feedback:
      'The clinical rotations and hospital training were the highlight of my program at VIPT.',
    image: 'https://i.pravatar.cc/150?img=47',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Student stories that inspire"
          description="Hear from students who are building impactful careers in pharmacy and healthcare."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm text-slate-600">"{item.feedback}"</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-primary-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.course}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
