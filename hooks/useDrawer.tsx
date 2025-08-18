"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

type DrawerContextType = {
  open: boolean;
  openDrawer: (node: React.ReactNode) => void;
  closeDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType | null>(null);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const openDrawer = (node: React.ReactNode) => {
    setContent(node);
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
    setContent(null);
  };

  return (
    <DrawerContext.Provider value={{ open, openDrawer, closeDrawer }}>
      {children}
      <Drawer open={open} onOpenChange={(o) => !o && closeDrawer()}>
        <DrawerContent className="p-6">{content ?? null}</DrawerContent>
      </Drawer>
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used inside <DrawerProvider>");
  return ctx;
}

/** ⬇️ Inline helper: mount this inside intercept routes to open the global Drawer.
 *  It uses `useDrawer` (reiterating: yes, we ARE using your useDrawer).
 *  When the drawer is closed by the user, it calls router.back() so the background stays.
 */
export function OpenInDrawer({ children }: { children: React.ReactNode }) {
  const { open, openDrawer, closeDrawer } = useDrawer();
  const router = useRouter();
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      openDrawer(children); // ✅ uses useDrawer to show provided content
    }
    return () => {
      if (open) closeDrawer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When the global drawer transitions to closed while we’re mounted, go back once.
  useEffect(() => {
    if (mounted.current && !open) router.back();
  }, [open, router]);

  return null;
}
