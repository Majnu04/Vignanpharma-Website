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
    <div className={`flex flex-col ${alignment} gap-4`}>
      {eyebrow ? (
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-primary-600/90">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
