# AI Skills & Productivity Singularity Curriculum — User Manual

This manual describes how to use the curriculum app: what it shows, how to navigate it, and how to use the content for learning and execution.

---

## 1. What This App Is

- **Product:** A Next.js web app that presents a structured curriculum.
- **Audience:** Startup solo entrepreneurs who want to use AI skills, SP Search, and productivity workflows.
- **Content source:** Key ideas from the video *"일주일치 업무 10분 컷! 상위 1%만 몰래쓰는 클로드 코드 SKILLS 치트키 공개"* plus research (MCP, Playwright stealth, tool selection, etc.).

You use the app to **learn** the concepts and **follow** the steps in order.

---

## 2. Requirements

- **Node.js** 18+ (recommended: 20+)
- **npm** (or yarn/pnpm)
- A modern browser (Chrome, Firefox, Safari, Edge)

No account or API keys are required to view the curriculum.

---

## 3. Installation & Running

### First time

```bash
cd curriculum-app
npm install
npm run dev
```

- App runs at **http://localhost:3000**
- Leave the terminal open while using the app.

### Later runs

```bash
cd curriculum-app
npm run dev
```

### Production build

```bash
npm run build
npm start
```

Runs the app in production mode (e.g. port 3000 unless you set `PORT`).

---

## 4. Page Structure

### 4.1 Header

- **Title:** AI Skills & Productivity Singularity
- **Subtitle:** Short description of the curriculum and audience
- **Reference:** Video title (Korean) that the content is aligned to

### 4.2 Category navigation

- List of all **7 categories** plus **Full step list**
- Click a link to jump to that section (anchor links)
- **Recommended order:** Follow categories 1 → 7, then use Full step list for a single checklist

### 4.3 Category sections

Each category has:

1. **Section title** (e.g. "1. Scale & the Human Limit")
2. **Short description** of what the section covers
3. **Table** with columns:
   - **Step** — Number (1–23) for execution order
   - **Concept** — Name of the idea
   - **Video** — Timestamp in the reference video (e.g. 00:00, 05:00)
   - **Explanation** — Plain-language explanation
   - **Research / Deep dive** — Extra context from research (tokens, MCP, tools, etc.)

Use the table to read, compare, and tick off steps as you do them.

### 4.4 Full step list

- One table with **all 23 steps** in order
- No duplicate steps; each concept appears once
- Use this as a single **checklist** when executing the protocol (e.g. configure MCP → SP Search → 3-step protocol → CLAUDE.md → mission).

### 4.5 Footer

- Short note that content is collected without redundancy and steps are ordered for follow-up.

---

## 5. How to Use the Curriculum

### For learning

1. Read **Category 1** (Scale & the Human Limit) to understand why “teaching AI to find” matters.
2. Go through **Categories 2–6** in order to build a mental model (SP Search, 3-step protocol, stealth, autonomous skills, productivity singularity).
3. Use **Category 7** (Solo Entrepreneur Checklist) as your action list.
4. Use **Video** column timestamps to jump to the exact moment in the reference video when a concept is explained.

### For execution

1. Open the **Full step list** section.
2. Start at **Step 1** and work in order (e.g. configure search/MCP, then SP Search, then one 3-step protocol run, then CLAUDE.md, then one half-day mission).
3. Use **Explanation** and **Research / Deep dive** as reminders (e.g. serverInstructions, Playwright fingerprint, SKILL.md paths).

### For teaching or sharing

- Share the app URL (after deploy) or run it locally and share your screen.
- Point to specific categories or step numbers so others can follow the same sequence.

---

## 6. Content Categories Summary

| # | Category | What it covers |
|---|----------|----------------|
| 1 | Scale & the Human Limit | 100k+ skills, 120k MCP tools, paradox of choice |
| 2 | SP Search | Teaching AI to find, 10-min build, code release |
| 3 | Skill Explorer: 3-Step Protocol | Analyze → access → auto-build |
| 4 | Stealth & Structure Analysis | Playwright stealth, structure extraction, API key + AI code |
| 5 | Autonomous AI & Skill Installation | Finding/installing skills (e.g. Modulist), one site / five themes |
| 6 | Productivity Singularity | Miner → conductor, operation overview, infinite productivity |
| 7 | Solo Entrepreneur Checklist | Configure MCP, SP Search, protocol, CLAUDE.md, run a mission |

---

## 7. Keyboard & Accessibility

- **Navigation:** Use the in-page links; no special shortcuts.
- **Scrolling:** Click category links to scroll to sections (`scroll-mt-8` for offset under fixed headers if you add one later).
- **Tables:** Responsive; on small screens, horizontal scroll is available for the table.

---

## 8. Customization (optional)

- **Content:** Edit `src/data/curriculum.ts` to change categories, steps, or text. The app reads from this file; no backend.
- **Styling:** Tailwind classes in `src/app/page.tsx` and `src/app/globals.css`. Dark mode is supported via `dark:` classes.
- **Metadata:** Edit `src/app/layout.tsx` for title and description (SEO and social previews).

---

## 9. Troubleshooting

| Issue | What to do |
|-------|------------|
| `npm run dev` fails | Run `npm install` again; ensure Node 18+ |
| Port 3000 in use | Set `PORT=3001 npm run dev` (or another port) |
| Blank page | Check browser console; ensure you’re on http://localhost:3000 |
| Build fails | Run `npm run build` and fix any TypeScript/ESLint errors reported |

---

## 10. License & Credits

- Curriculum content is aligned to the referenced video and to public research (MCP, Claude, Playwright, tool selection).
- App code: use according to your project’s license.
- For ads and promotional copy, see the `docs/ads/` folder.

---

**Manual version:** 1.0  
**Last updated:** 2026-02
