export function SignalBadge({ signal }: { signal: string }) {
  const styles: Record<string, string> = {
    accelerating: "text-red bg-red/10 ring-red/20",
    spike: "text-amber bg-amber/10 ring-amber/20",
    emerging: "text-ember bg-ember/10 ring-ember/20",
    sustained: "text-glow bg-glow/10 ring-glow/20",
    steady: "text-ash-200 bg-ash-600/20 ring-ash-600/20",
    cooling: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20",
  };
  const cls = styles[signal] ?? styles.steady;
  return (
    <span
      className={`inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded ring-1 ${cls}`}
    >
      {signal}
    </span>
  );
}
