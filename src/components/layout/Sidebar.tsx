"use client";

import { useMobile } from "@/hooks/useMobile";
import { Drawer, IconButton, useTheme } from "@mui/material";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SIDEBAR_WIDTH, useSidebarStore } from "./store";

export function Sidebar({ children }: { children: React.ReactNode }) {
  const { collapsed, toggleCollapsed } = useSidebarStore();
  const isMobile = useMobile();
  const theme = useTheme();

  const width = isMobile ? "80vw" : theme.spacing(SIDEBAR_WIDTH);

  if (collapsed) {
    return <></>;
  }

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={!collapsed}
      onClose={toggleCollapsed}
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          border: 0,
          background: isMobile ? theme.palette.background.paper : "transparent",
        },
      }}
    >
      <div className="flex flex-col gap-4 p-4 h-full">{children}</div>
    </Drawer>
  );
}

export function SidebarToggle() {
  const { collapsed, toggleCollapsed } = useSidebarStore();

  return (
    <IconButton onClick={toggleCollapsed} sx={{ color: "text.primary" }}>
      {collapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
    </IconButton>
  );
}

export function SidebarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex mx-auto justify-between items-center min-h-20">
      {children}
    </div>
  );
}

export function MenuList({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto items-center gap-3">
      {children}
    </div>
  );
}

export function SidebarFooter({ children }: { children: React.ReactNode }) {
  return <div className="flex justify-center mt-auto">{children}</div>;
}
