# assgn – Full Stack Intern Assignment (Gauz24 AI)

This project implements the required components for the Gauz24 AI Full Stack Intern assignment.

## ✔ Part 1 — Feedback Detail Viewer
Displays:
- Clean text  
- One-liner summary  
- Language + confidence badge  
- Reasons in accordion view  
- Entities per reason  
- Provenance information  

## ✔ Part 2 — Reason Heatmap (No chart library)
Visualization using **Tailwind + CSS Grid**:
- reason_label → Rows  
- sentiment score → Color  
- reason_intent → Icon  
- evidence count → Scaled size  
- theme → Grouped categories  

## ✔ Part 3 — Mock API Integration
- `/api/mock-feedback` returns random mock data  
- 5 mock JSON files under `/mocks`  
- Handles loading, error, retry, empty states  
- Strong TypeScript schema  

## ✔ Part 4 — Architecture Document
Explains components, typing, UX, and performance decisions.

---

## 🏗 Tech Stack
- Next.js (Pages Router)  
- TypeScript  
- TailwindCSS  
- CSS Grid  
- No chart libraries  

---

## 🛠 Run Locally
```sh
npm install
npm run dev
