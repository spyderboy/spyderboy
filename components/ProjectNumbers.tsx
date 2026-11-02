// A project's "By the numbers": the value first, so the stats lead. The card shows the first few, the page all.
export default function ProjectNumbers({
  numbers,
  compact = false,
}: {
  numbers: { value: string; label: string }[];
  compact?: boolean;
}) {
  return (
    <div className={`grid ${compact ? 'grid-cols-3 gap-2' : 'grid-cols-2 md:grid-cols-3 gap-3'}`}>
      {numbers.map((n) => (
        <div key={n.label} className={`bg-gray-50 rounded-lg ${compact ? 'p-3' : 'p-4'}`}>
          <p className={`${compact ? 'text-xl' : 'text-2xl'} font-medium text-gray-900 leading-tight`}>{n.value}</p>
          <p className={`${compact ? 'text-[11px]' : 'text-xs'} text-gray-500 mt-1 leading-snug`}>{n.label}</p>
        </div>
      ))}
    </div>
  );
}
