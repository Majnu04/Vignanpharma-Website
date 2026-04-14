import { Award, Building2, GraduationCap, ShieldCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const highlights = [
  {
    title: 'PCI & AICTE Approved',
    description: 'Programs aligned with national regulatory standards and academic quality benchmarks.',
    icon: ShieldCheck,
  },
  {
    title: 'ISO Certified Campus',
    description: 'ISO 9001, 14001, and 45001 certifications for quality and safety systems.',
    icon: Award,
  },
  {
    title: 'Research-Driven Culture',
    description: 'Active research ecosystem with strong publication and conference participation.',
    icon: GraduationCap,
  },
  {
    title: 'Strong Placement Support',
    description: 'Career training and campus recruitment with leading pharma organizations.',
    icon: Building2,
  },
];

export default function HighlightsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="Why students choose VIPT"
          description="A quality-focused campus that blends global standards, modern labs, and industry-ready training."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-900/90 text-secondary-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-primary-900">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
