"use client";

import { useThemeStore } from "@/stores/theme";

export function useThemeMode() {
  const { mode, toggleTheme, setTheme } = useThemeStore();

  const isDark = mode === "dark";

  return {
    mode,
    isDark,
    toggleTheme,
    setTheme,
  };
}
