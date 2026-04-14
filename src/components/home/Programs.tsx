import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    title: 'B. Pharmacy',
    duration: '4 Years',
    intake: '100 Seats',
    description: 'A comprehensive undergraduate program focusing on the properties and impacts of medicines and developing the skills required to counsel patients.',
    color: 'bg-primary-50',
    textColor: 'text-primary-900',
    borderColor: 'border-primary-100'
  },
  {
    title: 'M. Pharmacy',
    duration: '2 Years',
    intake: 'Various Specializations',
    description: 'Advanced postgraduate studies in Pharmaceutics, Pharmaceutical Analysis, and Pharmacology for specialized career paths in research and industry.',
    color: 'bg-accent-50',
    textColor: 'text-accent-900',
    borderColor: 'border-accent-100'
  },
  {
    title: 'Pharm. D',
    duration: '6 Years',
    intake: '30 Seats',
    description: 'A professional doctorate degree in pharmacy focusing on clinical practice, patient care, and advanced therapeutic knowledge.',
    color: 'bg-secondary-50',
    textColor: 'text-secondary-900',
    borderColor: 'border-secondary-200'
  },
];

export default function Programs() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent-600 mb-2">Academics</h2>
          <p className="font-heading text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
            Our Academic Programs
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Industry-aligned curriculum designed to create the next generation of healthcare leaders and pharmaceutical innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.title} className={`flex flex-col rounded-2xl bg-white p-8 shadow-sm border ${program.borderColor} transition-all hover:shadow-xl hover:-translate-y-2 group`}>
              <div className={`mb-6 inline-flex w-fit items-center rounded-lg ${program.color} px-3 py-1 text-sm font-bold ${program.textColor}`}>
                {program.duration}
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3">{program.title}</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4 uppercase tracking-wide">Intake: {program.intake}</p>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{program.description}</p>
              
              <Link to="/courses" className="inline-flex items-center text-sm font-bold text-accent-600 group-hover:text-accent-700 transition-colors">
                View Curriculum
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
