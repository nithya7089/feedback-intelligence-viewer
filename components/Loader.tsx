// components/Loader.tsx
export default function Loader(){ return <div className="p-4">Loading…</div>; }

// components/ErrorState.tsx
export function ErrorState({onRetry}:{onRetry:()=>void}) {
  return <div className="p-4">
    <div className="mb-2">Failed to load data.</div>
    <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={onRetry}>Retry</button>
  </div>;
}
