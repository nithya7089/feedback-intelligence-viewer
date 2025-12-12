import { useEffect, useState, useCallback } from "react";
import { Feedback } from "../types/feedback";
import FeedbackDetailViewer from "../components/FeedbackDetailViewer";
import ReasonHeatmap from "../components/ReasonHeatmap";

export default function Home() {
  // States (hooks ALWAYS first, ALWAYS top)
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<Feedback | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  // Fetch specific sample
  const fetchData = useCallback(
    async (sampleNumber: number) => {
      setSelected(sampleNumber);
      setLoading(true);

      const res = await fetch(`/api/mock-feedback?sample=${sampleNumber}`);
      const json = await res.json();

      setData(json);
      setLoading(false);
    },
    []
  );

  // Mark component as mounted (prevents hydration errors)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load sample 1 initially, but ONLY after mounted = true
  useEffect(() => {
    if (mounted) {
      fetchData(1);
    }
  }, [mounted, fetchData]);

  // BEFORE hydration finishes → render nothing
  if (!mounted || loading || !data) {
    return (
      <div className="p-6 text-white">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  const samples = [1, 2, 3, 4, 5];

  return (
    <div className="p-6 space-y-6">

      {/* SWITCHER */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-white font-display text-lg">Choose Feedback:</span>

        {samples.map((num) => (
          <button
            key={num}
            onClick={() => fetchData(num)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selected === num
                ? "bg-blue-500 text-white shadow-xl scale-105"
                : "bg-white/10 text-slate-200 hover:bg-white/20 hover:scale-105"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* MAIN UI */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FeedbackDetailViewer feedback={data} />
        <ReasonHeatmap reasons={data.reasons} />
      </div>
    </div>
  );
}
