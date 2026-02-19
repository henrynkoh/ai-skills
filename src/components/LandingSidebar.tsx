"use client";

import { useEffect, useState } from "react";
import { curriculumCategories } from "@/data/curriculum";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  ...curriculumCategories.map((c) => ({ id: c.id, label: c.title })),
  { id: "full-step-list", label: "Full step list" },
  { id: "features", label: "Features" },
];

export function LandingSidebar() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id || "hero");
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl"
      aria-label="Section navigation"
    >
      <div className="border-b border-white/10 px-4 py-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-violet-300">
          Contents
        </span>
      </div>
      <nav
        className="flex-1 overflow-y-auto overflow-x-hidden px-2 py-3 scrollbar-thin"
        style={{ scrollbarGutter: "stable" }}
      >
        <ul className="space-y-0.5">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-violet-500/20 text-violet-200 shadow-inner"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
