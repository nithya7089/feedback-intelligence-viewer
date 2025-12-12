import React from "react";
import { Entity } from "../types/feedback";

export default function EntityCard({ entity }: { entity: Entity }) {
  return (
    <div className="entity-card">
      <div className="flex justify-between">
        <div>
          <h4 className="text-white text-sm font-semibold">
            {entity.extracted_entity_text}
          </h4>
          <p className="text-xs text-slate-400">
            {entity.canonical_entity_label ?? "—"} · {entity.entity_category ?? "—"}
          </p>
        </div>

        <div className="text-right text-xs text-slate-400">
          <p>{Math.round(entity.entity_label_confidence * 100)}% label</p>
          <p>{Math.round(entity.entity_category_confidence * 100)}% category</p>
        </div>
      </div>
    </div>
  );
}
