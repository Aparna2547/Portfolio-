interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <div className="flex justify-center items-center w-full py-2">
        <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800">
          {badge}
        </span>
      </div>
      <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-gray-600 leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}
