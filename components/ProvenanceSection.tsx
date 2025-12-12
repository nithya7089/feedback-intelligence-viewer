// components/ProvenanceSection.tsx
import React from 'react';
import type { Provenance } from '../types/feedback';

export default function ProvenanceSection({provenance}:{provenance?:Provenance}) {
  if (!provenance) return <div className="text-sm text-gray-500">No provenance info.</div>;
  return (
    <div className="text-sm">
      <div>Human review needed: <strong>{provenance.human_review_needed ? 'Yes' : 'No'}</strong></div>
      <div className="mt-1 text-xs text-gray-500">Triggers: {provenance.trigger_reasons?.length ? provenance.trigger_reasons.join(', ') : '—'}</div>
    </div>
  );
}
