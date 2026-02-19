# skills.md — Agent Skill Selection Protocol

## Purpose

This file governs how the agent searches, evaluates, and selects the **single best skill** (or optimal combination of skills) from the ever-growing population of available skills — currently 150,000+ and expanding rapidly — to fully and correctly execute any task given by the user.

---

## Core Directive

> **For every task received, you MUST search the full skill population, evaluate candidates against the task requirements, select the best-fit skill(s), and execute. Never default to generic reasoning when a specialized skill exists.**

---

## Step 1 — Task Decomposition

Before searching, break the task into its atomic requirements:

1. **Intent** — What outcome does the user expect?
2. **Domain** — Which field does this belong to? (e.g., code, data, web, media, research, finance, writing, ops)
3. **Sub-tasks** — List every discrete action needed to complete the task end-to-end.
4. **Constraints** — Any stated limits: speed, cost, format, tool, language, platform, privacy.
5. **Success criteria** — How will you know the task is fully done?

---

## Step 2 — Skill Search Protocol

Search the skill population using the following priority order:

### 2a. Exact Match Search
- Query by **task intent + domain keyword** combination.
- Example: task = "scrape product prices from Amazon" → search `["web scraping", "Amazon", "price extraction", "e-commerce data"]`
- If one skill covers ≥ 90% of the task → select it immediately and proceed to Step 4.

### 2b. Composite Search (when no single exact match)
- Decompose into sub-tasks and search each independently.
- Identify 2–5 skills that together cover 100% of the task.
- Prefer **fewer skills** — complexity compounds failure rates.

### 2c. Capability-First Search (when domain is ambiguous)
- Search by **output type** rather than input type.
- Example: "I need a spreadsheet with cleaned data" → search output: `["CSV generation", "data cleaning", "structured output"]`

### 2d. Fallback — Nearest Neighbor Search
- If no direct match exists, find the skill with the highest **functional overlap**.
- Document the gap between skill capability and task requirement.
- Proceed only if overlap ≥ 70%; otherwise flag to user.

---

## Step 3 — Skill Evaluation Criteria

Score each candidate skill across these dimensions (1–5 scale):

| Criterion | Description | Weight |
|-----------|-------------|--------|
| **Task Fit** | How well does the skill match the exact task intent? | 35% |
| **Coverage** | What % of sub-tasks does this skill handle? | 25% |
| **Reliability** | Track record, community rating, error rate | 15% |
| **Speed** | Execution time relative to task urgency | 10% |
| **Composability** | How well does it chain with other selected skills? | 10% |
| **Cost Efficiency** | Resource/token/API cost to execute | 5% |

**Minimum threshold to select a skill: weighted score ≥ 3.5 / 5.0**

---

## Step 4 — Selection Decision Rules

Apply these rules in order:

1. **Single Best Skill Rule** — If one skill scores ≥ 4.5, select it alone. Do not add other skills unless a genuine gap exists.
2. **Minimum Skill Rule** — Use the fewest skills that achieve full task coverage. Adding skills beyond necessity reduces reliability.
3. **Recency Preference** — When two skills are otherwise equal, prefer the more recently updated one (skill population grows; newer skills often supersede older ones).
4. **Specialization Over Generality** — A narrow skill that perfectly covers the domain always beats a broad general-purpose skill.
5. **No-Skill Prohibition** — Never proceed without at least attempting skill search. If truly no skill applies, state this explicitly and propose one be built.

---

## Step 5 — Pre-Execution Checklist

Before running the selected skill(s):

- [ ] Confirm the skill(s) collectively cover all sub-tasks from Step 1.
- [ ] Verify any required inputs are available (API keys, data, credentials, file paths).
- [ ] Set expected output format to match user's success criteria.
- [ ] Identify the failure mode: what will you do if the skill returns an error or partial result?
- [ ] If chaining skills: define the data handoff format between each skill.

---

## Step 6 — Execution

Execute the selected skill(s) with full autonomy:

- Pass all required parameters.
- Monitor output at each step.
- If a skill fails mid-execution, immediately search for an alternative from the evaluated candidates before giving up.
- Do not ask the user for clarification mid-execution unless a **blocking ambiguity** exists that cannot be inferred.

---

## Step 7 — Output & Verification

After execution:

1. **Validate** output against the success criteria defined in Step 1.
2. **Present** the result in the format the user expects (code, text, file, table, etc.).
3. **Report** which skill(s) were used and why — one sentence per skill selected.
4. **Flag** any sub-tasks that were not fully covered, with a recommendation for follow-up.

---

## Skill Population Context

- **Current population**: 150,000+ skills and growing rapidly
- **Growth rate**: New skills are published continuously; the population doubles frequently
- **Categories include but are not limited to**:
  - Code generation, debugging, refactoring, testing
  - Web scraping, browser automation, API integration
  - Data analysis, transformation, visualization
  - Document processing (PDF, Word, Excel, CSV)
  - Image, video, and audio generation/editing
  - Research, summarization, translation, writing
  - DevOps, cloud infrastructure, CI/CD
  - Finance, legal, compliance, contracts
  - Marketing, SEO, social media, ads
  - E-commerce, CRM, sales automation
  - Education, tutoring, curriculum design
  - Healthcare, biomedical, scientific computing
  - Security, penetration testing, compliance audits
  - Business intelligence, reporting, dashboards

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails |
|---|---|
| Defaulting to GPT general reasoning when a skill exists | Misses specialized capability; slower and less accurate |
| Selecting the first skill found | Ignores better-fit skills deeper in the population |
| Using 5+ skills for a task one skill can do | Compounds failure risk; harder to debug |
| Skipping evaluation criteria | Leads to poor-fit selections and task failure |
| Not checking for newly added skills | The population grows fast; yesterday's gap may be filled today |

---

## Quick Reference Card

```
TASK RECEIVED
    ↓
DECOMPOSE → intent, domain, sub-tasks, constraints, success criteria
    ↓
SEARCH skill population (150,000+)
    → Exact match → Composite → Capability-first → Nearest neighbor
    ↓
EVALUATE candidates (Task Fit 35%, Coverage 25%, Reliability 15%, Speed 10%, Composability 10%, Cost 5%)
    ↓
SELECT (min score 3.5/5) — fewest skills, most specialized
    ↓
PRE-EXECUTION CHECKLIST
    ↓
EXECUTE with full autonomy
    ↓
VALIDATE output vs. success criteria
    ↓
REPORT result + skills used + gaps (if any)
```

---

## Instruction Override

This file takes precedence over default agent behavior for skill selection. The agent must follow this protocol for **every task**, regardless of perceived simplicity. Even a simple task may have a purpose-built skill that executes it 10x faster and more accurately than general reasoning.

*Last updated: 2026-02-18 | Designed for skill populations of 100,000–∞*
