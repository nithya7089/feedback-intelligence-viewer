# Feedback Intelligence Viewer – Architecture Overview

This project is a simple Next.js frontend that displays processed customer feedback JSON files in a clean and interactive UI. It reads feedback data from local mock JSON files, shows clean text, summary, reasons, entities, emotions, sentiment, and provenance, and includes a heatmap to visualize reason sentiment. The user can switch between 5 sample feedbacks using a top navigation selector.

---

## 1. System Overview
The application is built using **Next.js + TypeScript + TailwindCSS**.  
It fetches pre-processed feedback JSON from a mock API route and renders it through modular, reusable UI components.  
No real backend processing or AI is done — the UI simply visualizes structured JSON.

---

## 2. Project Folder Structure
project: feedback-intelligence-viewer

structure:
pages:
index.tsx: "main layout + sample selector"
 api:
 mock-feedback.ts: "serves selected or random mock JSON"

 components:
  FeedbackDetailViewer.tsx: "clean text, summary, language, provenance"
  ReasonAccordion.tsx: "expandable reason details"
  EntityCard.tsx: "entity-level information"
  ReasonHeatmap.tsx: "theme-grouped sentiment heatmap"

mocks:
  sample-1.json: "processed feedback sample #1"
  sample-2.json: "processed feedback sample #2"
  sample-3.json: "processed feedback sample #3"
  sample-4.json: "processed feedback sample #4"
  sample-5.json: "processed feedback sample #5"

types:
  feedback.ts: "TypeScript schema for JSON model"

styles:
  globals.css: "global Tailwind styles"

configs:
  tailwind.config.js: "Tailwind customization"
  next.config.js: "Next.js configuration"
  package.json: "project dependencies + scripts"
  ARCHITECTURE.md: "architecture documentation"

---

## 3. Data Flow

1. User selects a feedback sample number (1–5) from the top bar.
2. The UI calls:
GET /api/mock-feedback?sample=X

markdown
Copy code
3. The API loads the corresponding file from `/mocks/`.
4. JSON is returned to the frontend.
5. Components render:
- clean text  
- one-liner summary  
- language + confidence  
- reasons with details  
- sentiment score  
- emotion distribution  
- entities  
- provenance  
6. The heatmap visualizes reason sentiment grouped by theme.

---

## 4. Component Responsibilities

### **FeedbackDetailViewer**
- Displays clean text and summary
- Shows language + confidence
- Renders provenance info
- Lists reasons (each reason opens accordion view)

### **ReasonAccordion**
- Shows reason label, theme, intent
- Displays sentiment score (color-coded)
- Shows evidence snippets
- Displays entity list
- Shows suggested action

### **EntityCard**
- Shows extracted entity text
- Canonical label + category
- Label confidence + category confidence
- Extraction method

### **ReasonHeatmap**
- Groups reasons by `theme_label`
- Uses sentiment score to assign colors (red → green)
- Shows evidence count
- Gives a quick visual snapshot of key pain points

---

## 5. Handling Missing or Null Fields
JSON contains nullable items like:
- missing summary
- missing reason_label
- missing suggested_action
- empty entities list
- missing sentiment (score = 0)

UI handles this safely by:
- Showing fallback text (`—`)
- Using optional chaining (`?.`)
- Hiding sections when data is missing
- Preventing runtime crashes

---

## 6. Rendering & Performance
- Uses `useCallback` to prevent unnecessary re-renders
- Loads initial sample only after hydration finishes
- Avoids SSR mismatch by waiting for mount
- Stateful UI remains lightweight and responsive

---

## 7. Why TailwindCSS?
TailwindCSS is used for:
- fast styling directly in JSX
- consistent layout + spacing
- custom animations (shine, floaty)
- theme colors for sentiment + glass UI
- no need for separate CSS files

It makes building a dashboard UI simple, clean, and visually modern.

---

## 8. Conclusion
This project provides a clear and modular UI for visualizing processed customer feedback.  
It demonstrates:
- clean TypeScript models  
- structured component architecture  
- controlled API fetching  
- theme-grouped sentiment visualization  
- error-safe rendering of nested feedback data  

It is easy to extend and resembles real-world feedback intelligence dashboards.




