"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("nextgen-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = stored ?? preferred;
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("nextgen-theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white text-foreground transition hover:-translate-y-0.5 hover:border-electric/40"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      <svg className="h-5 w-5 dark:hidden" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4.2V2M12 22v-2.2M19.8 12H22M2 12h2.2M17.5 6.5 19 5M5 19l1.5-1.5M17.5 17.5 19 19M5 5l1.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4.2" fill="currentColor" opacity="0.16" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="hidden h-5 w-5 dark:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M19.2 15.6A7.7 7.7 0 0 1 8.4 4.8a8 8 0 1 0 10.8 10.8Z"
          fill="currentColor"
          opacity="0.18"
        />
        <path
          d="M19.2 15.6A7.7 7.7 0 0 1 8.4 4.8a8 8 0 1 0 10.8 10.8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
