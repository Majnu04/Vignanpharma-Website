import { Users, BookOpen, Award, Building2 } from 'lucide-react';

const stats = [
  { id: 1, name: 'Expert Faculty', value: '50+', icon: Users },
  { id: 2, name: 'Placement Rate', value: '95%', icon: Building2 },
  { id: 3, name: 'Research Papers', value: '100+', icon: BookOpen },
  { id: 4, name: 'Years of Excellence', value: '15+', icon: Award },
];

export default function Stats() {
  return (
    <div className="bg-primary-900 py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col items-center text-center group">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-secondary-500 ring-1 ring-white/10 group-hover:bg-secondary-500 group-hover:text-primary-900 transition-all duration-300 group-hover:-translate-y-1">
                  <Icon className="h-7 w-7" />
                </div>
                <dd className="font-heading text-4xl font-bold tracking-tight text-white mb-2">{stat.value}</dd>
                <dt className="text-sm font-semibold uppercase tracking-wider text-slate-400">{stat.name}</dt>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
