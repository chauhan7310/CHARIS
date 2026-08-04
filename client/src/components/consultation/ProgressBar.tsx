type Props = {
  step: number;
  total: number;
};

export default function ProgressBar({ step, total }: Props) {
  const percentage = (step / total) * 100;

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Progress</span>
        <span>{step}/{total}</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6A1E2A]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}