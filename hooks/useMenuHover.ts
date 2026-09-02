"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useUiElement } from "@/context/Context";
import { usePathname } from "next/navigation";

const HOVER_OUT_DELAY = 200;

// Keep a global hover count so the header overlay
// stays visible while *any* mega menu is hovered.
let globalHoverCount = 0;
let globalHoverOutTimer: ReturnType<typeof setTimeout> | null = null;

export function useMenuHover() {
  const { setMenuHoverOpen } = useUiElement();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const hoverOutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeHoverCountRef = useRef(0);
  const lastWheelInsideAtRef = useRef(0);
  const handleWheelInside = useCallback(() => {
    lastWheelInsideAtRef.current = Date.now();
  }, []);


  const handleMouseEnter = useCallback(() => {
    // Local state for this specific menu item
    activeHoverCountRef.current += 1;

    if (hoverOutTimerRef.current) {
      clearTimeout(hoverOutTimerRef.current);
      hoverOutTimerRef.current = null;
    }

    // Global overlay state
    globalHoverCount += 1;
    if (globalHoverOutTimer) {
      clearTimeout(globalHoverOutTimer);
      globalHoverOutTimer = null;
    }

    setIsOpen(true);
    setMenuHoverOpen(true);
  }, [setMenuHoverOpen]);

  const handleMouseLeave = useCallback(() => {
    // Local state for this specific menu item
    activeHoverCountRef.current = Math.max(0, activeHoverCountRef.current - 1);

    if (hoverOutTimerRef.current) {
      clearTimeout(hoverOutTimerRef.current);
    }

    hoverOutTimerRef.current = setTimeout(() => {
      if (activeHoverCountRef.current === 0) {
        setIsOpen(false);
      }
      hoverOutTimerRef.current = null;
    }, HOVER_OUT_DELAY);

    // Global overlay state
    globalHoverCount = Math.max(0, globalHoverCount - 1);
    if (globalHoverOutTimer) {
      clearTimeout(globalHoverOutTimer);
    }
    globalHoverOutTimer = setTimeout(() => {
      if (globalHoverCount === 0) {
        setMenuHoverOpen(false);
      }
      globalHoverOutTimer = null;
    }, HOVER_OUT_DELAY);
  }, [setMenuHoverOpen]);

  const resetHoverState = useCallback(() => {
    if (hoverOutTimerRef.current) {
      clearTimeout(hoverOutTimerRef.current);
      hoverOutTimerRef.current = null;
    }
    if (globalHoverOutTimer) {
      clearTimeout(globalHoverOutTimer);
      globalHoverOutTimer = null;
    }
    activeHoverCountRef.current = 0;
    globalHoverCount = 0;
    setIsOpen(false);
    setMenuHoverOpen(false);
  }, [setMenuHoverOpen]);

  // Safety net: on unmount
  useEffect(() => {
    return () => {
      resetHoverState();
    };
  }, [resetHoverState]);

  // Close this menu instance whenever the route changes
  useEffect(() => {
    if (hoverOutTimerRef.current) {
      clearTimeout(hoverOutTimerRef.current);
      hoverOutTimerRef.current = null;
    }
    activeHoverCountRef.current = 0;

    // Defer state updates to avoid synchronous setState in effect body
    const timeoutId = setTimeout(() => {
      resetHoverState();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname, resetHoverState]);

  // Close hover overlay on page scroll unless the scroll was initiated
  // from inside the current menu panel very recently.
  useEffect(() => {
    const onScroll = () => {
      const JUST_SCROLLED_INSIDE_MENU_MS = 220;
      const isRecentMenuWheel =
        Date.now() - lastWheelInsideAtRef.current < JUST_SCROLLED_INSIDE_MENU_MS;

      if (!isRecentMenuWheel && globalHoverCount > 0) {
        resetHoverState();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [resetHoverState]);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onWheelInside: handleWheelInside,
    isMenuHoverOpen: isOpen,
  };
}
