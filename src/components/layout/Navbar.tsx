"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useMobile } from "@/hooks/useMobile";
import { Box, Paper, useTheme } from "@mui/material";
import { SidebarToggle } from "./Sidebar";
import { SIDEBAR_WIDTH, useSidebarStore } from "./store";

const PADDING = 1.5;

export function Navbar() {
  const { collapsed } = useSidebarStore();
  const isMobile = useMobile();
  const theme = useTheme();

  const sidebarWidth =
    isMobile || collapsed
      ? theme.spacing(PADDING)
      : theme.spacing(SIDEBAR_WIDTH + PADDING);

  return (
    <Box
      component={Paper}
      elevation={3}
      className="fixed top-0 flex justify-between items-center rounded-xl z-100 h-(--navbar-height)"
      sx={{
        width: `calc(100% - ${sidebarWidth})`,
        px: 2,
        opacity: 0.8,
      }}
    >
      <SidebarToggle />
      <ThemeToggle />
    </Box>
  );
}
