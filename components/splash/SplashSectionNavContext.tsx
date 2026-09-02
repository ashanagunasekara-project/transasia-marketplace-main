"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

export type SplashScrollTarget = "demos" | "features" | "admin-dashboard";

export const SPLASH_SECTION_HASH: Record<SplashScrollTarget, string> = {
  demos: "rbt-demo-presentation-section",
  features: "rbt-feature-list-section",
  "admin-dashboard": "admin-dashboard",
};

const STEP: Record<SplashScrollTarget, number> = {
  demos: 1,
  features: 16,
  "admin-dashboard": 11,
};
const SCROLL_DELAY_MS = 700;

type Value = {
  scrollToSection: (target: SplashScrollTarget) => void;
  demoSectionRef: RefObject<HTMLDivElement | null>;
  featureListSectionRef: RefObject<HTMLDivElement | null>;
  adminDashboardSectionRef: RefObject<HTMLDivElement | null>;
  unlockedStep: number;
  deepestEagerStep: number;
  unlockNext: (step: number) => void;
};

const SplashSectionNavContext = createContext<Value | null>(null);

export function useSplashSectionNav() {
  return useContext(SplashSectionNavContext);
}

export function SplashSectionNavProvider({ children }: { children: ReactNode }) {
  const [unlockedStep, setUnlockedStep] = useState(1);
  const [deepestEagerStep, setDeepestEagerStep] = useState(0);
  const demoSectionRef = useRef<HTMLDivElement | null>(null);
  const featureListSectionRef = useRef<HTMLDivElement | null>(null);
  const adminDashboardSectionRef = useRef<HTMLDivElement | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const unlockNext = useCallback((step: number) => {
    setUnlockedStep((p) => (p > step ? p : step + 1));
  }, []);

  const sectionRefByTarget: Record<
    SplashScrollTarget,
    RefObject<HTMLDivElement | null>
  > = {
    demos: demoSectionRef,
    features: featureListSectionRef,
    "admin-dashboard": adminDashboardSectionRef,
  };

  const scrollToSection = useCallback((target: SplashScrollTarget) => {
    const step = STEP[target];
    const elRef = sectionRefByTarget[target];

    setUnlockedStep((s) => Math.max(s, step));
    setDeepestEagerStep((d) => Math.max(d, step));

    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      scrollTimerRef.current = null;
      elRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, SCROLL_DELAY_MS);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const target: SplashScrollTarget | null =
      (Object.entries(SPLASH_SECTION_HASH) as [SplashScrollTarget, string][]).find(
        ([, sectionHash]) => hash === sectionHash,
      )?.[0] ?? null;

    const syncTimer =
      target != null ? setTimeout(() => scrollToSection(target), 0) : null;

    return () => {
      if (syncTimer) clearTimeout(syncTimer);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [scrollToSection]);

  const value = useMemo(
    () => ({
      scrollToSection,
      demoSectionRef,
      featureListSectionRef,
      adminDashboardSectionRef,
      unlockedStep,
      deepestEagerStep,
      unlockNext,
    }),
    [scrollToSection, unlockedStep, deepestEagerStep, unlockNext],
  );

  return (
    <SplashSectionNavContext.Provider value={value}>
      {children}
    </SplashSectionNavContext.Provider>
  );
}
