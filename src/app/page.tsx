import {
  curriculumCategories,
  getAllStepsInOrder,
} from "@/data/curriculum";
import type { CurriculumRow } from "@/data/curriculum";
import { LandingSidebar } from "@/components/LandingSidebar";
import { MobileNav } from "@/components/MobileNav";
import { GithubLink } from "@/components/GithubLink";

function CurriculumTable({ rows }: { rows: CurriculumRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200/80 bg-white/80 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/30">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50/90 dark:border-slate-700 dark:bg-slate-800/50">
            <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Step
            </th>
            <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Concept
            </th>
            <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Video
            </th>
            <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Explanation
            </th>
            <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Research
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-slate-100 transition-colors hover:bg-slate-50/70 dark:border-slate-700/60 dark:hover:bg-slate-800/40"
            >
              <td className="w-12 px-3 py-2.5 align-top">
                <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
                  {row.stepOrder}
                </span>
              </td>
              <td className="max-w-[180px] px-3 py-2.5 font-medium text-slate-900 dark:text-slate-100">
                {row.concept}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-sm text-slate-500 dark:text-slate-400">
                {row.videoRef}
              </td>
              <td className="max-w-[280px] px-3 py-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {row.explanation}
              </td>
              <td className="max-w-[280px] px-3 py-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {row.researchNote}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SECTION_ACCENTS = [
  "from-violet-500/10 to-fuchsia-500/10 border-violet-200/60 dark:border-violet-500/30",
  "from-emerald-500/10 to-teal-500/10 border-emerald-200/60 dark:border-emerald-500/30",
  "from-amber-500/10 to-orange-500/10 border-amber-200/60 dark:border-amber-500/30",
  "from-sky-500/10 to-cyan-500/10 border-sky-200/60 dark:border-sky-500/30",
  "from-rose-500/10 to-pink-500/10 border-rose-200/60 dark:border-rose-500/30",
  "from-indigo-500/10 to-violet-500/10 border-indigo-200/60 dark:border-indigo-500/30",
  "from-lime-500/10 to-emerald-500/10 border-lime-200/60 dark:border-lime-500/30",
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <MobileNav />
      {/* Left sidebar - fixed on large screens, scrollable */}
      <div className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-shrink-0 p-4 lg:block">
        <LandingSidebar />
      </div>

      {/* Main content */}
      <main className="min-h-screen flex-1 lg:pl-72">
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-violet-600 via-slate-900 to-slate-900 px-6 py-20 text-white dark:border-slate-800 sm:px-8 lg:px-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.4),transparent)]" />
          <div className="relative mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              AI Skills &{" "}
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                Productivity Singularity
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Curriculum for startup solo entrepreneurs: 100k+ expert skills, SP
              Search, 3-step protocol, and autonomous AI—all in one place.
              Navigate with the sidebar →
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Reference: 일주일치 업무 10분 컷! 상위 1%만 몰래쓰는 클로드 코드
              SKILLS 치트키 공개
            </p>
          </div>
        </section>

        {/* Curriculum sections */}
        <div className="px-6 py-12 sm:px-8 lg:px-12">
          {curriculumCategories.map((category, idx) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-24"
            >
              <div
                className={`mb-6 rounded-2xl border bg-gradient-to-br p-6 shadow-sm ${SECTION_ACCENTS[idx % SECTION_ACCENTS.length]}`}
              >
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {category.description}
                </p>
              </div>
              <div className="mb-16">
                <CurriculumTable rows={category.steps} />
              </div>
            </section>
          ))}

          {/* Full step list */}
          <section id="full-step-list" className="scroll-mt-24">
            <div className="mb-6 rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-100 to-slate-200/50 p-6 dark:border-slate-700 dark:from-slate-800/50 dark:to-slate-900/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Full step list
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                All 23 steps in order—use as a single checklist for execution.
              </p>
            </div>
            <div className="mb-16">
              <CurriculumTable rows={getAllStepsInOrder()} />
            </div>
          </section>

          {/* Features */}
          <section id="features" className="scroll-mt-24">
            <div className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/30">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Features & functions
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                What this curriculum gives you.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "7 categories",
                  desc: "Scale, SP Search, 3-step protocol, stealth, autonomous skills, singularity, checklist.",
                  icon: "📂",
                },
                {
                  title: "23 ordered steps",
                  desc: "No redundancy; each concept once with explanation and research.",
                  icon: "📋",
                },
                {
                  title: "Video timestamps",
                  desc: "Jump to the exact moment in the reference video for each concept.",
                  icon: "▶️",
                },
                {
                  title: "Full step list",
                  desc: "One scrollable checklist to execute the protocol from start to finish.",
                  icon: "✅",
                },
                {
                  title: "Sidebar navigation",
                  desc: "Scroll up/down the left sidebar to jump to any section instantly.",
                  icon: "🧭",
                },
                {
                  title: "Solo founder focus",
                  desc: "Designed for startup solo entrepreneurs and agent workflows.",
                  icon: "🚀",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-violet-300/60 hover:shadow-md dark:border-slate-700 dark:bg-slate-800/30 dark:hover:border-violet-500/40"
                >
                  <span className="text-2xl" aria-hidden>{f.icon}</span>
                  <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-20 border-t border-slate-200 py-10 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              All concepts collected without redundancy; steps ordered for
              easy follow-up. Use the step numbers to execute in sequence.
            </p>
          </footer>
        </div>
      </main>

      {/* Bottom-right GitHub link - set NEXT_PUBLIC_GITHUB_URL or use default */}
      <GithubLink
        href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"}
      />
    </div>
  );
}
