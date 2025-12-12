import React from "react";
import { Reason } from "../types/feedback";

export default function ReasonHeatmap({ reasons }: { reasons: Reason[] }) {
  const groups = {};

  reasons.forEach((r) => {
    const theme = r.theme_label ?? "Uncategorized";
    if (!groups[theme]) groups[theme] = [];
    groups[theme].push(r);
  });

  return (
    <div className="card-hero">
      <h3 className="text-lg h-accent mb-3">Reason Heatmap</h3>

      {Object.entries(groups).map(([theme, items]) => (
        <div key={theme} className="mb-4">
          <div className="text-slate-400 mb-2">{theme}</div>

          <div className="space-y-2">
            {items.map((r, i) => {
              const sentiment =
                r.reason_sentiment_score > 0.3
                  ? "conf-high"
                  : r.reason_sentiment_score > 0
                  ? "conf-mid"
                  : r.reason_sentiment_score < 0
                  ? "conf-low"
                  : "conf-missing";

              return (
                <div key={i} className="heatmap-cell">
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">{r.reason_label ?? "Unlabeled"}</p>
                    <p className="text-xs text-slate-400">{r.extracted_reason_text}</p>
                  </div>

                  <span className={`conf-badge ${sentiment}`}>
                    {r.reason_sentiment_score.toFixed(2)}
                  </span>

                  <span className="text-xs text-slate-400">
                    {r.reason_evidence_snippets.length} evidence
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
