
---

# ✅ **2. ARCHITECTURE.md**
*(same content, no name inside, so no changes needed)*  
I will still include it fully updated:

```md
# UI Architecture Explanation

## 1. Component Choices
The UI is divided into small, focused components:
- FeedbackDetailViewer  
- ReasonAccordion  
- EntityCard  
- ReasonHeatmap  
- ProvenanceSection  

This keeps the system modular and scalable.

## 2. Handling Null / Missing Fields
- All TypeScript fields are optional  
- UI checks for `null`, `undefined`  
- Displays `"—"` for missing values  
- Layout does not break  
- Confidence badge uses 3 safe states  
  
Ensures robustness across all valid JSON shapes.

## 3. Avoiding Unnecessary Re-renders
- `useMemo` for grouping and computing bars  
- `useCallback` for API fetch  
- Components remain pure  
- No repeated heavy computations  

## 4. Type Structure
Types split into:
- Feedback  
- Reason  
- Entity  
- Provenance  

Designed to tolerate schema evolution.

## 5. UX Approach for Nested Data
- Accordions → avoid overwhelming user  
- Sentiment badges → quick emotional insight  
- Grouped heatmap → fast scanning  
- Entities rendered compactly  
- Evidence + actions grouped  

UX improves readability and comprehension.

## 6. Trade-offs
- No virtualization  
- Heatmap uses CSS Grid  
- Mock JSON kept minimal  

A balance of clarity, performance, and assignment scope.
