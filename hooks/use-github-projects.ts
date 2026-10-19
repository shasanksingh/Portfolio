"use client";

import { useCallback, useEffect, useState } from "react";

import { fetchGitHubProjects, getFallbackProjects } from "@/lib/github-projects";
import type { Project } from "@/types/content";

type GitHubProjectsState = {
  projects: Project[];
  status: "loading" | "ready" | "error";
  source: "fallback" | "github";
  fetchedAt?: string;
  error?: string;
};

const fallbackProjects = getFallbackProjects();
const refreshIntervalMs = 5 * 60 * 1000;

export function useGitHubProjects() {
  const [state, setState] = useState<GitHubProjectsState>({
    projects: fallbackProjects,
    status: "loading",
    source: "fallback",
  });

  const refresh = useCallback(async () => {
    setState((current) => ({ ...current, status: "loading", error: undefined }));

    try {
      const projects = await fetchGitHubProjects();
      setState({ projects, status: "ready", source: "github", fetchedAt: new Date().toISOString() });
    } catch (error: unknown) {
      setState((current) => ({
        projects: current.source === "github" ? current.projects : fallbackProjects,
        status: "error",
        source: current.source,
        fetchedAt: current.fetchedAt,
        error: error instanceof Error ? error.message : "GitHub sync unavailable",
      }));
    }
  }, []);

  useEffect(() => {
    void refresh();

    const intervalId = window.setInterval(() => void refresh(), refreshIntervalMs);
    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") {
        void refresh();
      }
    };

    window.addEventListener("focus", refreshWhenVisible);
    window.addEventListener("online", refreshWhenVisible);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshWhenVisible);
      window.removeEventListener("online", refreshWhenVisible);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [refresh]);

  return { ...state, refresh };
}
