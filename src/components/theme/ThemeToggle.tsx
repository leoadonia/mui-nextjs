"use client";

import { useThemeMode } from "@/hooks/useThemeMode";
import { IconButton, Tooltip } from "@mui/material";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeMode();

  return (
    <Tooltip title={isDark ? "切换亮色" : "切换暗色"}>
      <IconButton
        onClick={toggleTheme}
        sx={{ color: "text.primary" }}
        aria-label={isDark ? "切换亮色" : "切换暗色"}
      >
        {isDark ? <Moon size={20} /> : <Sun size={20} />}
      </IconButton>
    </Tooltip>
  );
}
