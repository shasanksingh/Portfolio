"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Icon3D } from "@/components/ui/icon-3d";

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
      className="site-action-button relative inline-grid h-10 w-10 place-items-center rounded-ui border border-line bg-white text-foreground transition hover:-translate-y-0.5 hover:border-electric/40"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
    >
      <span className="dark:hidden">
        <Icon3D icon={Sun} action="build" tone="blue" size="sm" />
      </span>
      <span className="hidden dark:block">
        <Icon3D icon={Moon} action="build" tone="violet" size="sm" />
      </span>
    </button>
  );
}
