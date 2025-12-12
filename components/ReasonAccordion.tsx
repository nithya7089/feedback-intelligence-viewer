import React, { useState } from "react";
import { Reason } from "../types/feedback";
import EntityCard from "./EntityCard";

export default function ReasonAccordion({ reason }: { reason: Reason }) {
  const [open, setOpen] = useState(false);

  const sentimentClass =
    reason.reason_sentiment_score > 0.3
      ? "conf-high"
      : reason.reason_sentiment_score > 0
      ? "conf-mid"
      : reason.reason_sentiment_score < 0
      ? "conf-low"
      : "conf-missing";

  return (
    <div className="card bg-white/5 border border-white/10">
      {/* HEADER */}
      <div className="accordion-btn" onClick={() => setOpen(!open)}>
        <div>
          <h4 className="text-white font-semibold flex gap-2">
            {reason.reason_label ?? "Unlabeled reason"}
            <span className="text-slate-400 text-xs">
              ({Math.round(reason.reason_label_confidence * 100)}%)
            </span>
          </h4>

          <p className="text-xs text-slate-400">
            {reason.theme_label ?? "No Theme"} · {reason.reason_intent ?? "No Intent"}
          </p>
        </div>

        <span className={`conf-badge ${sentimentClass}`}>
          {reason.reason_sentiment_score.toFixed(2)}
        </span>
      </div>

      {/* BODY */}
      {open && (
        <div className="p-3 border-t border-white/10 text-slate-200 space-y-3">
          <p>{reason.extracted_reason_text}</p>

          {/* Evidence */}
          <div>
            <p className="text-xs text-slate-400">Evidence</p>
            <ul className="list-disc ml-5">
              {reason.reason_evidence_snippets.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          {/* Suggested Action */}
          {reason.reason_suggested_action && (
            <div>
              <p className="text-xs text-slate-400">Suggested Action:</p>
              <p>{reason.reason_suggested_action}</p>
            </div>
          )}

          {/* Entities */}
          {reason.entities.length > 0 && (
            <div>
              <p className="text-xs text-slate-400">Entities</p>
              <div className="space-y-2">
                {reason.entities.map((e, i) => (
                  <EntityCard key={i} entity={e} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
