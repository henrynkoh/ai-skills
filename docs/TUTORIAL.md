# Tutorial: AI Skills & Productivity Singularity Curriculum

This tutorial walks you through the curriculum app and the concepts it teaches, so you can learn and then execute the workflow yourself.

---

## Part A: Using the App (10 min)

### Step 1: Run the app

```bash
cd curriculum-app
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

### Step 2: Understand the layout

- **Top:** Title and short description; under it, the reference video title.
- **Nav box:** Links to 7 categories + “Full step list.” Click any link to jump to that section.
- **Sections:** Each category has a title, description, and a table (Step, Concept, Video, Explanation, Research).
- **Bottom:** “Full step list” (all 23 steps in one table), then footer.

### Step 3: Follow the categories in order

Read from **Category 1** through **Category 7** without skipping. Use the **Video** column to open the reference video at that timestamp and watch while you read. That’s one full pass of the curriculum.

---

## Part B: Learning the Concepts (30–45 min)

### Lesson 1: Why “find” beats “list everything” (Categories 1–2)

- **Idea:** There are 100k+ expert skills and 120k+ MCP tools. Loading them all into the AI wastes tokens and hurts accuracy (paradox of choice).
- **Takeaway:** Teach the AI **how to find** the right tool (e.g. SP Search, semantic/lazy tool selection) instead of giving it the whole catalog.
- **Action:** Note “SP Search” and “MCP Tool Search” as ways to reduce context and improve selection.

### Lesson 2: The 3-step protocol (Category 3)

- **Idea:** For any new site or API: (1) **Analyze** structure, (2) **Get access** (API key, DB, etc.), (3) **Auto-build** with AI (e.g. Claude Code).
- **Takeaway:** Don’t code first. Analyze and get permissions, then let the agent build.
- **Action:** Pick one target (e.g. a small API or a site you’re allowed to scrape) and mentally run: analyze → access → build.

### Lesson 3: Stealth and real access (Category 4)

- **Idea:** Playwright in “stealth” mode (no automation flags, realistic UA/viewport, coherent fingerprint) gets past simple bot checks so you can analyze structure. Then use **official** access (API key, DB) and let AI write the integration code.
- **Takeaway:** Stealth is for analysis; API/DB is for production. Keep fingerprints and behavior coherent.
- **Action:** If you’ll scrape or automate, read one short guide on Playwright stealth and one on your target’s API.

### Lesson 4: Autonomous skills (Category 5)

- **Idea:** The AI can **search for** a skill (e.g. Modulist), **install** it, and **apply** it to a task (e.g. one site, five themes) without you listing every step. Result: professional-style output in half a day.
- **Takeaway:** Your job is to define the mission and quality bar; the agent’s job is to find and run the right skills.
- **Action:** Think of one “mission” (e.g. “Turn this Figma into 3 variants”) and which skill or tool the agent might find.

### Lesson 5: Productivity singularity (Category 6)

- **Idea:** Shift from being the **miner** (doing every task) to the **conductor** (directing AI). The “Productivity Singularity” is the overall playbook: SP Search + 3-step protocol + autonomous skills + good context (e.g. CLAUDE.md).
- **Takeaway:** Invest in context (project conventions, CLAUDE.md, skill discovery) so the agent can run with minimal hand-holding.
- **Action:** List three tasks you still do by hand that could be “conducted” by an agent with the right skills and access.

### Lesson 6: Your checklist (Category 7)

- **Idea:** Concrete steps: configure search/MCP → install or build SP Search (or equivalent) → apply 3-step protocol to one target → add CLAUDE.md and project skills → run one half-day mission.
- **Takeaway:** The app’s “Full step list” is your execution checklist; Category 7 is the high-level version.
- **Action:** Copy the 5 Solo Entrepreneur actions into your notes and tick them as you do them.

---

## Part C: Doing It Yourself (1–2 hours)

### C1: Configure your environment

- Install or use Claude Code (or your preferred agent).  
- In config (e.g. `~/.claude/settings.json` or Claude Desktop config), add:
  - A search MCP (e.g. Brave Search, Tavily) if you want web search.
  - MCP Tool Search / lazy loading if you have many tools (to save context).
- Set `serverInstructions` for each server so the agent knows when to use it (see Research column in the app).

### C2: One 3-step protocol run

- **Analyze:** Use Playwright (or browser DevTools) to inspect one site or API. Write 3–5 bullet points: endpoints, auth, main data shape.
- **Access:** Get an API key or DB read-only user (or skip if you’re only analyzing).
- **Auto-build:** In Claude Code, describe the target and your analysis; ask it to generate the integration (e.g. a small script or MCP tool). Review and run.

### C3: CLAUDE.md and one skill

- In your project root, create **CLAUDE.md**: tech stack, how to run tests, naming conventions, and one paragraph on “when to use which tool.”
- Add one **project skill** in `.claude/skills/` with a `SKILL.md` that has a clear `description` so the agent can discover it when relevant.

### C4: One “half-day mission”

- Define a mission: e.g. “Take this one page and produce 5 theme variants” or “Summarize this doc in 3 formats.”
- Let the agent **find** a skill or procedure (via SP Search or your docs), **install** or load it, and **execute**. You only approve and review.
- Compare time: with vs. without the agent. That’s your productivity delta.

---

## Part D: Next steps

- Re-read the **Research / Deep dive** column for steps you’ll use often (e.g. MCP transport, SKILL.md paths, Playwright evasions).
- Bookmark the **Full step list** and use it as a recurring checklist for new targets.
- Share the app or this tutorial with other solo founders and iterate on the checklist together.

---

**Tutorial version:** 1.0  
**Last updated:** 2026-02
