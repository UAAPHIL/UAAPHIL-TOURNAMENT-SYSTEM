import { PodiumCard } from "@/features/results/components/podium-card";
export default function ResultsPage() {
  // Mock podium per division - foundation for PHASE 5
  const mockGold = { id:"1", name:"Juan Dela Cruz", club:"San Beda", place:1 as const };
  const mockSilver = { id:"2", name:"Pedro Santos", club:"UST", place:2 as const };
  const mockBronze = [{ id:"3", name:"Miguel Reyes", club:"DLSU", place:3 as const }];
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8 py-12">
        <div>
          <h1 className="text-2xl font-semibold">Resulta at Parangal</h1>
          <p className="text-sm text-muted">Phase 5 - Auto-advance, Podium, History, Certificates</p>
        </div>
        <PodiumCard gold={mockGold} silver={mockSilver} bronze={mockBronze} />
      </div>
    </main>
  );
}
