"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDrawer } from "@/hooks/useDrawer";

/** Mount this in intercept routes to open the global Drawer with given children. */
export default function DrawerShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { open, openDrawer, closeDrawer } = useDrawer();

  // On mount, open the drawer showing provided children
  useEffect(() => {
    openDrawer(
      <>
        {/* When drawer closes and this unmounts, we will go back (see below) */}
        {children}
      </>
    );
    // Close on unmount (safety)
    return () => {
      if (open) closeDrawer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When the Drawer content unmounts (because user closed it), go back.
  useEffect(() => {
    return () => {
      // This effect cleanup runs when DrawerShell unmounts (i.e. route interception ends)
      // But we want "go back" only when user closes the drawer, not on normal route changes.
      // The intercept route itself will unmount on router.back(), so here we don't do anything.
    };
  }, []);

  // We can’t subscribe directly to drawer state changes here without creating loops.
  // Instead, we rely on the intercept route’s DrawerShell being tied to the route itself;
  // closing the Drawer is wired in the intercept page (see below).

  return null;
}
