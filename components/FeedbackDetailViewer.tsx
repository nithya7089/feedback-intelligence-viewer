import React from "react";
import { Feedback } from "../types/feedback";
import ReasonAccordion from "./ReasonAccordion";
import ProvenanceSection from "./ProvenanceSection";

export default function FeedbackDetailViewer({ feedback }: { feedback: Feedback }) {
  return (
    <div className="card-hero shine">
      <h2 className="text-xl h-accent mb-4">Feedback Details</h2>

      {/* CLEAN TEXT */}
      <div className="card mb-4">
        <p className="text-slate-200 text-sm">{feedback.clean_text}</p>
        <p className="text-xs text-slate-400 mt-2 italic">
          Summary: {feedback.one_liner_summary ?? "—"}
        </p>
      </div>

      {/* LANGUAGE + CONFIDENCE */}
      <div className="flex gap-2 text-sm text-slate-300 mb-3">
        <span>Language:</span>
        <span className="text-white">{feedback.feedback_language}</span>

        {/* Badge */}
        <span className="conf-badge conf-high">
          {Math.round(feedback.feedback_language_confidence * 100)}%
        </span>
      </div>

      {/* REASONS */}
      <h3 className="text-lg h-accent mb-2">Reasons</h3>

      {feedback.reasons.length === 0 ? (
        <p className="text-slate-400">No reasons extracted</p>
      ) : (
        <div className="space-y-3">
          {feedback.reasons.map((r, i) => (
            <ReasonAccordion key={i} reason={r} />
          ))}
        </div>
      )}

      {/* PROVENANCE */}
      <h3 className="text-lg h-accent mt-6 mb-2">Provenance</h3>
      <ProvenanceSection provenance={feedback.provenance} />
    </div>
  );
}
