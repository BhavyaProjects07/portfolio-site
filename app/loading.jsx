export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-neutral-950 text-neutral-400">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-neutral-800 border-t-orange-500 animate-spin" />
        <span className="text-xs font-mono text-neutral-500">Loading portfolio view...</span>
      </div>
    </div>
  );
}
