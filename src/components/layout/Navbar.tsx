"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useMobile } from "@/hooks/useMobile";
import { Box, useTheme } from "@mui/material";
import { SidebarToggle } from "./Sidebar";
import { SIDEBAR_WIDTH, useSidebarStore } from "./store";

const PADDING = 1;

export function Navbar() {
  const { collapsed } = useSidebarStore();
  const isMobile = useMobile();
  const theme = useTheme();

  const sidebarWidth =
    isMobile || collapsed
      ? theme.spacing(PADDING)
      : theme.spacing(SIDEBAR_WIDTH + PADDING);

  return (
    <div className="px-1">
      <Box
        className="fixed top-0 flex justify-between items-center rounded-xl bg-background-default/60 z-100 backdrop-blur-xs h-(--navbar-height)"
        sx={{
          width: `calc(100% - ${sidebarWidth})`,
          px: 2,
        }}
      >
        <SidebarToggle />
        <ThemeToggle />
      </Box>
    </div>
  );
}
