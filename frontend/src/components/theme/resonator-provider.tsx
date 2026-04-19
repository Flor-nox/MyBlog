"use client";

import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { ResonatorType, ResonatorTheme, getResonatorTheme, defaultResonator } from "@/lib/resonator-themes";

interface ResonatorContextType {
  currentResonator: ResonatorType;
  theme: ResonatorTheme;
  setResonator: (type: ResonatorType) => void;
  mounted: boolean;
}

const ResonatorContext = createContext<ResonatorContextType>({
  currentResonator: defaultResonator,
  theme: getResonatorTheme(defaultResonator),
  setResonator: () => {},
  mounted: false,
});

const validResonators: ResonatorType[] = ["chisaki", "amethyst", "phoebe", "feixue"];

export function ResonatorProvider({ children }: { children: React.ReactNode }) {
  const [currentResonator, setCurrentResonator] = useState<ResonatorType>(defaultResonator);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("resonator-theme") as ResonatorType;
    if (saved && validResonators.includes(saved)) {
      setCurrentResonator(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("resonator-theme", currentResonator);
      document.body.setAttribute("data-resonator", currentResonator);
    }
  }, [currentResonator, mounted]);

  const setResonator = (type: ResonatorType) => {
    setCurrentResonator(type);
  };

  const theme = getResonatorTheme(currentResonator);

  return (
    <ResonatorContext.Provider value={{ currentResonator, theme, setResonator, mounted }}>
      {children}
    </ResonatorContext.Provider>
  );
}

export function useResonator() {
  const context = useContext(ResonatorContext);
  return context;
}
