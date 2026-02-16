"use client";

import { Box, Paper, useTheme } from "@mui/material";
import { AppSidebar } from "./AppSidebar";
import { Navbar } from "./Navbar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      component={Paper}
      display={"flex"}
      flexDirection={"row"}
      className={`h-screen overflow-hidden w-full`}
      sx={{
        bgcolor:
          theme.palette.mode === "light"
            ? theme.palette.grey[50]
            : theme.palette.background.paper,
      }}
    >
      <AppSidebar />
      <Box
        flex={1}
        flexDirection={"column"}
        className="overflow-y-auto transition-[width] duration-200 px-1"
      >
        <Navbar />
        <Box component={"main"} className="py-(--navbar-height) mt-3">
          <Paper elevation={1} className="rounded-lg">
            {children}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
