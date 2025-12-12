// utils/ui.ts
export const sentimentToColor = (score?: number) => {
  if (score == null) return 'bg-gray-200 text-gray-800';
  if (score <= -0.5) return 'bg-red-600 text-white';
  if (score < 0) return 'bg-red-300 text-black';
  if (score === 0) return 'bg-yellow-300 text-black';
  if (score < 0.5) return 'bg-green-300 text-black';
  return 'bg-green-600 text-white';
};

export const formatPercent = (v?: number) =>
  v == null ? '—' : `${Math.round((v + Number.EPSILON) * 100)}%`;
