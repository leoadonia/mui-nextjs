import { create } from "zustand";

interface SidebarState {
  collapsed: boolean;

  toggleCollapsed: () => void;
  setCollapsed: (collapsed: boolean) => void;
}

export const SIDEBAR_WIDTH = 30; // 240px

export const useSidebarStore = create<SidebarState>()((set) => ({
  collapsed: false,

  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),

  setCollapsed: (collapsed: boolean) => set({ collapsed }),
}));
