import { Button, Typography } from "@mui/material";
import { BedSingle, Hospital, LogOut, Users } from "lucide-react";
import { Menu } from "./Menu";
import { MenuList, Sidebar, SidebarFooter, SidebarHeader } from "./Sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Typography variant="h6">App</Typography>
      </SidebarHeader>
      <MenuList>
        <Menu title="概览" icon={<Hospital className="h-4 w-4" />} href="/" />
        <Menu
          title="患者信息"
          icon={<Users className="h-4 w-4" />}
          href="/patients"
        />
        <Menu
          title="临床信息"
          icon={<BedSingle className="h-4 w-4" />}
          href="/clinical"
        />
      </MenuList>
      <SidebarFooter>
        <Button
          variant="outlined"
          color="error"
          className="w-full rounded-lg gap-2"
          startIcon={<LogOut className="h-4 w-4" />}
        >
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
