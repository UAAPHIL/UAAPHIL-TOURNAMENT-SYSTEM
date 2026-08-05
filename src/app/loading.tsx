import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Spinner size="md" />
        <p className="text-[12px] text-muted animate-pulse">Loading tournament data...</p>
      </div>
    </div>
  );
}
