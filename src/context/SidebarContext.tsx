import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarProviderProps {
  children: ReactNode;
}

interface SidebarContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType>({
  open: false,
  setOpen: () => {},
});

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [open, setOpen] = useState(() => window.innerWidth >= 768);

  return <SidebarContext.Provider value={{ open, setOpen }}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  return useContext(SidebarContext);
}
