"use client";

import { useState } from "react";
import { curriculumCategories } from "@/data/curriculum";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  ...curriculumCategories.map((c) => ({ id: c.id, label: c.title })),
  { id: "full-step-list", label: "Full step list" },
  { id: "features", label: "Features" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-slate-900/90 text-white shadow-lg backdrop-blur-md"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside
            className="fixed left-0 top-0 z-50 h-full w-72 overflow-y-auto border-r border-white/10 bg-slate-900/98 p-4 shadow-2xl"
            aria-label="Section navigation"
          >
            <div className="border-b border-white/10 pb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-violet-300">
                Contents
              </span>
            </div>
            <nav className="mt-3">
              <ul className="space-y-0.5">
                {NAV_ITEMS.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => handleClick(e, id)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
}
