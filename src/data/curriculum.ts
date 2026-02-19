/**
 * Curriculum: AI Skills, SP Search & Productivity Singularity
 * For startup solo entrepreneurs. Aligned to video timestamps + deep research.
 * Categories ordered for step-by-step follow-up.
 */

export type CurriculumRow = {
  id: string;
  concept: string;
  videoRef: string;
  explanation: string;
  researchNote: string;
  stepOrder: number;
};

export type CurriculumCategory = {
  id: string;
  title: string;
  description: string;
  steps: CurriculumRow[];
};

export const curriculumCategories: CurriculumCategory[] = [
  {
    id: "scale-and-problem",
    title: "1. Scale & the Human Limit",
    description:
      "Why 100k+ expert skills and MCP tools create a problem only AI can solve.",
    steps: [
      {
        id: "scale-1",
        concept: "100k+ expert skills, self-learned by AI",
        videoRef: "00:00",
        explanation:
          "AI projects can learn and equip vast numbers of expert skills on their own—far beyond what any human can manually configure.",
        researchNote:
          "Skills are ~150 tokens each; MCP tools load full definitions (e.g. 150K tokens for 1K tools). Token overhead makes manual curation impossible at scale.",
        stepOrder: 1,
      },
      {
        id: "scale-2",
        concept: "Skills.com / 120k MCP tools",
        videoRef: "01:00",
        explanation:
          "Ecosystems like Skills.com expose 12만(120k) MCP tools—data and capability volume that exceeds human processing capacity.",
        researchNote:
          "CmdBrief: 16k+ MCP servers/skills. MCP is open standard (Anthropic → Agentic AI Foundation); tools + resources + prompts. Enterprise adoption growing.",
        stepOrder: 2,
      },
      {
        id: "scale-3",
        concept: "Paradox of choice",
        videoRef: "01:28",
        explanation:
          "Too many tools degrades performance: decision overload, latency, cost. The fix is not more tools—it's teaching AI how to find the right one.",
        researchNote:
          "~740 tools (120K tokens) → 0–20% accuracy; ~50 tools → 84–95%. Solutions: semantic tool selection, lazy loading (e.g. MCP Tool Search), graph-based selection.",
        stepOrder: 3,
      },
    ],
  },
  {
    id: "sp-search",
    title: "2. SP Search: Teaching AI to Find",
    description: "Goal of SP Search and why 'find' beats 'list everything'.",
    steps: [
      {
        id: "sp-1",
        concept: "SP Search goal: teach AI 'how to find'",
        videoRef: "01:28",
        explanation:
          "Instead of dumping all tools into context, SP Search teaches the agent how to search and select—solving the paradox of choice.",
        researchNote:
          "Claude MCP Tool Search: lazy loading when tools would use >10% context; 95% context reduction. serverInstructions help route (e.g. 'Database operations for PostgreSQL').",
        stepOrder: 4,
      },
      {
        id: "sp-2",
        concept: "SP Search system built by Claude Code in ~10 min",
        videoRef: "05:00",
        explanation:
          "Claude Code can implement the full SP Search system by itself in about 10 minutes—demonstrating agentic coding speed.",
        researchNote:
          "Core loop: clean context → plan (Shift+Tab) → review → approve → iterate. CLAUDE.md and project conventions prevent wrong-direction builds.",
        stepOrder: 5,
      },
      {
        id: "sp-3",
        concept: "SP Search tool & code release",
        videoRef: "11:32",
        explanation:
          "SP Search tool and code are shared publicly; invitation to extend productivity infinitely via AI.",
        researchNote:
          "Skills compile MCP into lean implementations; local filtering and cross-agent portability (Claude Code, OpenAI Codex, Goose).",
        stepOrder: 6,
      },
    ],
  },
  {
    id: "skill-explorer-protocol",
    title: "3. Skill Explorer: 3-Step Protocol",
    description: "Analyze → get access → auto-build. Repeatable playbook.",
    steps: [
      {
        id: "protocol-1",
        concept: "Phase 1: Analysis",
        videoRef: "02:49",
        explanation:
          "First step is to analyze the target—site structure, APIs, or data—before requesting access or writing code.",
        researchNote:
          "MCP builder (Anthropic): 'Deep Research & Planning'—study protocol, API coverage, tool selection. Align with implementation phase.",
        stepOrder: 7,
      },
      {
        id: "protocol-2",
        concept: "Phase 2: Access / permissions",
        videoRef: "04:08",
        explanation:
          "Obtain formal access: API keys, database credentials, or other authorization so the build uses real data.",
        researchNote:
          "MCP transport: HTTP recommended (claude mcp add --transport http). Alternatives: stdio (local), SSE (deprecated).",
        stepOrder: 8,
      },
      {
        id: "protocol-3",
        concept: "Phase 3: Auto-build",
        videoRef: "02:49, 05:00",
        explanation:
          "Let AI (e.g. Claude Code) build the skill or integration automatically, using the analysis and access from steps 1–2.",
        researchNote:
          "Implementation: project structure, tools in TypeScript/Python, then review & refine, then create evaluations.",
        stepOrder: 9,
      },
    ],
  },
  {
    id: "stealth-and-access",
    title: "4. Stealth & Structure Analysis",
    description: "Bypassing barriers and reading site structure reliably.",
    steps: [
      {
        id: "stealth-1",
        concept: "Playwright stealth mode",
        videoRef: "03:07",
        explanation:
          "Use Playwright in stealth mode to get past anti-bot or security barriers and analyze site structure without being blocked.",
        researchNote:
          "Disable automation flags (e.g. --disable-blink-features=AutomationControlled), realistic viewport/UA, coherent fingerprint (UA + timezone + locale). playwright-stealth (Python) for evasions.",
        stepOrder: 10,
      },
      {
        id: "stealth-2",
        concept: "Structure analysis after bypass",
        videoRef: "03:07",
        explanation:
          "Once past the wall, extract DOM/data structure so the next phase (API or DB access) can be designed correctly.",
        researchNote:
          "Bot detection: IP/rate, fingerprinting, headless detection, behavior timing. Coherent signals and human-like pacing beat random spoofing.",
        stepOrder: 11,
      },
      {
        id: "stealth-3",
        concept: "API Key + AI code injection",
        videoRef: "04:08",
        explanation:
          "Secure official API key (or DB access), then let AI inject the integration code so the system talks to the real backend.",
        researchNote:
          "Agent Skills: SKILL.md in ~/.claude/skills/ or .claude/skills/; settingSources and Skill in allowed_tools. Description drives autonomous invocation.",
        stepOrder: 12,
      },
    ],
  },
  {
    id: "autonomous-skills",
    title: "5. Autonomous AI & Skill Installation",
    description: "AI finding, installing, and applying skills on its own.",
    steps: [
      {
        id: "auto-1",
        concept: "AI finds needed skill (e.g. Modulist)",
        videoRef: "06:56",
        explanation:
          "Given a mission (e.g. redesign one site in 5 themes), the AI autonomously searches for a relevant skill (Modulist), installs it, and applies it.",
        researchNote:
          "Skill tool + settingSources enable discovery. High-level procedures (~150 tokens) with scripts; local filtering before returning to agent.",
        stepOrder: 13,
      },
      {
        id: "auto-2",
        concept: "One site, five themes—real mission",
        videoRef: "06:10",
        explanation:
          "Concrete mission: take a single website and produce five themed redesigns. AI uses skills to execute without hand-holding.",
        researchNote:
          "Batch similar operations; reusable prompts and CLAUDE.md keep quality consistent across themes.",
        stepOrder: 14,
      },
      {
        id: "auto-3",
        concept: "Result in half a day",
        videoRef: "09:18",
        explanation:
          "Diverse, professional-grade site variants completed in half a day—showcasing speed and consistency when AI drives the workflow.",
        researchNote:
          "Expert users run 5–10 parallel sessions, slash commands (/commit-push-pr), subagents for test/simplify/verify. Verification before ship.",
        stepOrder: 15,
      },
    ],
  },
  {
    id: "productivity-singularity",
    title: "6. Productivity Singularity & Role Shift",
    description: "From manual labor to commanding AI; infinite productivity.",
    steps: [
      {
        id: "sing-1",
        concept: "From miner to conductor",
        videoRef: "09:40",
        explanation:
          "Role shift: from being the manual laborer (miner) to the conductor who directs AI—same output with far less personal grind.",
        researchNote:
          "Gap between average and expert users is context engineering, not prompt engineering. Clean/compacted context, plan-first, then execute.",
        stepOrder: 16,
      },
      {
        id: "sing-2",
        concept: "Productivity Singularity operation",
        videoRef: "10:33",
        explanation:
          "The overall operation—SP Search, skill explorer protocol, autonomous skill use—is the Productivity Singularity playbook.",
        researchNote:
          "ToolOrchestra, AutoTool, ToolGen: orchestration, graph-based selection, generative tool representation. Lightweight coordination > monolithic tool dump.",
        stepOrder: 17,
      },
      {
        id: "sing-3",
        concept: "Infinite productivity via AI",
        videoRef: "11:32",
        explanation:
          "Open tools and code (e.g. SP Search) invite solo entrepreneurs to scale productivity without linear headcount.",
        researchNote:
          "259 PRs, 40k LOC in 30 days (Boris Cherny) with parallel sessions and verification. Solo founders can adopt same patterns.",
        stepOrder: 18,
      },
    ],
  },
  {
    id: "solo-entrepreneur-actions",
    title: "7. Solo Entrepreneur: Step-by-Step Checklist",
    description: "Concrete follow-up actions in order.",
    steps: [
      {
        id: "action-1",
        concept: "Configure search & MCP (Brave/Tavily, Tool Search)",
        videoRef: "—",
        explanation:
          "Set up web search and MCP in Claude (claude_desktop_config.json or ~/.claude/settings.json). Enable MCP Tool Search to save context.",
        researchNote:
          "serverInstructions per server for when to activate. /context to check token usage.",
        stepOrder: 19,
      },
      {
        id: "action-2",
        concept: "Install or build SP Search / skill-finder",
        videoRef: "05:00, 11:32",
        explanation:
          "Use public SP Search code or implement a minimal 'find skill by task' layer so the agent doesn't need the full catalog in context.",
        researchNote:
          "Semantic tool selection and lazy loading keep accuracy high and tokens low.",
        stepOrder: 20,
      },
      {
        id: "action-3",
        concept: "Apply 3-step protocol to one target",
        videoRef: "02:49",
        explanation:
          "Pick one site or API; analyze (e.g. Playwright stealth), get API key/access, then let Claude Code auto-build the integration.",
        researchNote:
          "Playwright: coherent fingerprint and pacing. MCP builder 4-phase workflow as reference.",
        stepOrder: 21,
      },
      {
        id: "action-4",
        concept: "Create CLAUDE.md and project skills",
        videoRef: "06:56",
        explanation:
          "Document stack, conventions, and testing in CLAUDE.md. Add .claude/skills/ for project-specific skills so the agent can find and use them.",
        researchNote:
          "SKILL.md with description drives autonomous invocation. User skills in ~/.claude/skills/.",
        stepOrder: 22,
      },
      {
        id: "action-5",
        concept: "Run one 'half-day mission' with autonomous skills",
        videoRef: "06:10, 09:18",
        explanation:
          "Define one mission (e.g. 5 themes for one site), let the agent find and install skills, then review results and iterate.",
        researchNote:
          "Plan mode (Shift+Tab) before execution; verification steps; batch similar operations.",
        stepOrder: 23,
      },
    ],
  },
];

/** All rows in step order, no duplicates (by id). */
export function getAllStepsInOrder(): CurriculumRow[] {
  const seen = new Set<string>();
  const rows: CurriculumRow[] = [];
  for (const cat of curriculumCategories) {
    for (const step of cat.steps) {
      if (!seen.has(step.id)) {
        seen.add(step.id);
        rows.push(step);
      }
    }
  }
  return rows.sort((a, b) => a.stepOrder - b.stepOrder);
}
