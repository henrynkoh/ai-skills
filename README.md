# AI Skills & Productivity Singularity — Curriculum

Next.js app that presents the key ideas from the video **"일주일치 업무 10분 컷! 상위 1%만 몰래쓰는 클로드 코드 SKILLS 치트키 공개"** (and related deep research) as a **curriculum for startup solo entrepreneurs**.

## Purpose

- **Explain** all key concepts in alignment with the video (100k+ expert skills, SP Search, 3-step protocol, Playwright stealth, autonomous skills, Productivity Singularity).
- **Present** them in **table format**, curriculum-style, by **category** for easy step-by-step follow-up.
- **Collect** related content **without redundancy or omissions** (single full step list at the bottom).

## Categories (in order)

1. **Scale & the Human Limit** — Why 100k+ skills and MCP tools exceed human capacity; paradox of choice.
2. **SP Search: Teaching AI to Find** — Goal, 10-min build, and public release.
3. **Skill Explorer: 3-Step Protocol** — Analyze → access → auto-build.
4. **Stealth & Structure Analysis** — Playwright stealth, structure extraction, API key + AI code.
5. **Autonomous AI & Skill Installation** — AI finding/installing skills (e.g. Modulist), one site / five themes, half-day result.
6. **Productivity Singularity & Role Shift** — Miner → conductor; operation overview; infinite productivity.
7. **Solo Entrepreneur: Step-by-Step Checklist** — Concrete actions (configure MCP, install SP Search, apply protocol, CLAUDE.md, run a mission).

## Landing page

The first page is a **modern landing** with:

- **Left sidebar** (scrollable): jump to Hero, each curriculum category, Full step list, and Features. Active section is highlighted as you scroll.
- **Main area**: hero, all curriculum sections (colorful gradient cards), full step list, and a Features & functions grid.
- **Bottom-right**: clickable **GitHub** link for easy navigation. Set `NEXT_PUBLIC_GITHUB_URL` in `.env` (see `.env.example`) to point to your repo.

On small screens, use the **menu button** (top-left) to open the same nav as a slide-out panel.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Docs

| Doc | Purpose |
|-----|--------|
| [Quickstarter](docs/QUICKSTARTER.md) | Get going in 5 minutes |
| [Tutorial](docs/TUTORIAL.md) | Step-by-step learning and first execution |
| [Manual](docs/MANUAL.md) | Full user manual (install, navigate, use, customize) |
| [Ads](docs/ads/README.md) | Ad copy for Facebook, Instagram, Threads, blogs, newsletter, email |
