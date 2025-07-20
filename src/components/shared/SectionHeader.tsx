export default function SectionHeader({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <>
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
        {subTitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        {title}
      </h2>
    </>
  );
}
