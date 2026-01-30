"use client";

import { useEffect, useState } from "react";

const HEADER_HEIGHT = 90;

const SECTIONS = [
  { id: "introduce", label: "Introduce" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "awards", label: "Awards" },
  { id: "activities", label: "Activities" },
];

const ScrollNavigator = () => {
  const [activeId, setActiveId] = useState("introduce");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + HEADER_HEIGHT + 50;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (!el) continue;

        const elementTop = el.offsetTop;

        if (scrollPosition >= elementTop) {
          setActiveId(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 translate-x-12 z-50 hidden xl:block">
      <div className="w-40 flex flex-col gap-1 dark:bg-neutral-900/80 backdrop-blur-md rounded-3xl px-3 py-4 shadow-lg border border-neutral-200 dark:border-neutral-700">
        {/* Active indicator bar */}
        <div
          className="absolute -left-0.5 w-1 bg-linear-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
          style={{
            top: `${SECTIONS.findIndex((s) => s.id === activeId) * 40 + 22}px`,
            height: "24px",
          }}
        />

        {SECTIONS.map(({ id, label }) => {
          const isActive = activeId === id;

          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="cursor-pointer group relative flex items-center rounded-full gap-3 py-2 px-2 transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              title={label}
            >
              {/* Dot indicator */}
              <div className="relative flex items-center justify-center w-4 h-4">
                <div
                  className={`absolute w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-br from-blue-500 to-purple-500 scale-100"
                      : "bg-neutral-400 dark:bg-neutral-500 scale-75 group-hover:scale-90"
                  }`}
                />
                {isActive && (
                  <div className="absolute w-4 h-4 rounded-full bg-linear-to-br from-blue-500/30 to-purple-500/30 animate-ping" />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-sm whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "translate-x-0 font-semibold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                    : "-translate-x-2 group-hover:translate-x-0 text-neutral-600 dark:text-neutral-400"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default ScrollNavigator;
