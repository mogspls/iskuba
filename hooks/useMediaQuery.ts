// hooks/useMediaQuery.ts
"use client";
import { useEffect, useState } from "react";

export function useMediaQuery(query: string, initial = false) {
  const [matches, setMatches] = useState<boolean>(initial); // initial must match SSR path exactly
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);
  return matches;
}
