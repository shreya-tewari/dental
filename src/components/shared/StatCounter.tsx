import { useCountUp } from '../../hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  note?: string;
}

export function StatCounter({ value, suffix, label, note }: StatCounterProps) {
  const { count, ref } = useCountUp({ end: value, duration: 2200 });

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-black text-neige tracking-tighter mb-2">
        {count.toLocaleString()}
        <span>{suffix}</span>
      </div>
      <div className="text-sm font-semibold text-neige/80 uppercase tracking-wider mb-1">
        {label}
      </div>
      {note && (
        <div className="text-xs text-muted mt-1">{note}</div>
      )}
    </div>
  );
}
