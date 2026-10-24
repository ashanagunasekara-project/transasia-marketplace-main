"use client";

import { useEffect, useState } from "react";

/**
 * Ensures off-canvas side panels paint their initial off-screen transform
 * before applying the active animation class, ensuring CSS transitions run reliably.
 */
export function usePanelSlideInReady(isOpen: boolean): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setReady(false);
      return;
    }

    let cancelled = false;
    setReady(false);

    // Give browser one frame to register the initial transform (translate3d(105%, 0, 0))
    const rafId = requestAnimationFrame(() => {
      if (!cancelled) {
        setReady(true);
      }
    });

    // Safety fallback timer ensuring active transition never stalls
    const timerId = setTimeout(() => {
      if (!cancelled) {
        setReady(true);
      }
    }, 35);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [isOpen]);

  return ready;
}

