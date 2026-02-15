import { Box } from "@mui/material";
import { AppSidebar } from "./AppSidebar";
import { Navbar } from "./Navbar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      className="max-h-screen overflow-hidden w-full"
    >
      <AppSidebar />
      <Box
        flex={1}
        flexDirection={"column"}
        className="overflow-y-auto transition-[width] duration-200"
      >
        <Navbar />
        <Box component={"main"} className="py-(--navbar-height)">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
