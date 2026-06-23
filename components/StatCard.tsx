interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="text-xs text-gray-500 mb-1.5">{label}</p>
      <p className="text-2xl font-medium text-gray-900">{value}</p>
    </div>
  );
}
