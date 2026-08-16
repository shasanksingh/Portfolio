"use client";

import { useEffect, useState } from "react";

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

export function useGitHubProjects() {
  const [state, setState] = useState<GitHubProjectsState>({
    projects: fallbackProjects,
    status: "loading",
    source: "fallback",
  });

  useEffect(() => {
    let cancelled = false;

    fetchGitHubProjects()
      .then((projects) => {
        if (cancelled) {
          return;
        }

        setState({
          projects,
          status: "ready",
          source: "github",
          fetchedAt: new Date().toISOString(),
        });
      })
      .catch((error: unknown) => {
        if (cancelled) {
          return;
        }

        setState({
          projects: fallbackProjects,
          status: "error",
          source: "fallback",
          error: error instanceof Error ? error.message : "GitHub sync unavailable",
        });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
