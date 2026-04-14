import SectionHeading from '../ui/SectionHeading';

const gallery = [
  {
    title: 'Advanced Labs',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22731c7a4f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Library & Research',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Clinical Practice',
    image:
      'https://images.unsplash.com/photo-1580281657521-0da2ab61d7a0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Student Activities',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function CampusLifeSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Campus Life"
          title="A vibrant campus experience"
          description="From world-class labs to dynamic student clubs, every space is designed to inspire learning."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {gallery.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="border-t border-slate-200 px-5 py-4">
                <p className="text-base font-semibold text-slate-800">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
