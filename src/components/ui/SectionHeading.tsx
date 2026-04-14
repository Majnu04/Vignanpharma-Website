type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow ? (
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
