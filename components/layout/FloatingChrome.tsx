"use client";

import { PortfolioAssistant } from "@/components/assistant/PortfolioAssistant";
import { SideNav } from "@/components/layout/SideNav";
import { navItems } from "@/content/site";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const SECTION_IDS = navItems.map((item) => item.id);

type FloatingUiContextValue = {
  activeId: string | null;
  mobileNavOpen: boolean;
  assistantOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  setAssistantOpen: (open: boolean) => void;
};

const FloatingUiContext = createContext<FloatingUiContextValue | null>(null);

function useFloatingUi() {
  const value = useContext(FloatingUiContext);
  if (!value) {
    throw new Error("Floating UI components must be used within FloatingUiProvider");
  }
  return value;
}

export function FloatingUiProvider({ children }: { children: ReactNode }) {
  const activeId = useActiveSection(SECTION_IDS);
  const [mobileNavOpen, setMobileNavOpenState] = useState(false);
  const [assistantOpen, setAssistantOpenState] = useState(false);

  const setMobileNavOpen = useCallback((open: boolean) => {
    setMobileNavOpenState(open);
    if (open) {
      setAssistantOpenState(false);
    }
  }, []);

  const setAssistantOpen = useCallback((open: boolean) => {
    setAssistantOpenState(open);
    if (open) {
      setMobileNavOpenState(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      activeId,
      mobileNavOpen,
      assistantOpen,
      setMobileNavOpen,
      setAssistantOpen,
    }),
    [activeId, mobileNavOpen, assistantOpen, setMobileNavOpen, setAssistantOpen],
  );

  return (
    <FloatingUiContext.Provider value={value}>{children}</FloatingUiContext.Provider>
  );
}

export function SideNavHost() {
  const { activeId, mobileNavOpen, setMobileNavOpen } = useFloatingUi();

  return (
    <SideNav
      activeId={activeId}
      mobileOpen={mobileNavOpen}
      onMobileOpenChange={setMobileNavOpen}
      onNavigate={() => setMobileNavOpen(false)}
    />
  );
}

export function AssistantHost() {
  const { assistantOpen, setAssistantOpen } = useFloatingUi();

  return (
    <PortfolioAssistant open={assistantOpen} onOpenChange={setAssistantOpen} />
  );
}
