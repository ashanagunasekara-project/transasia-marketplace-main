"use client";

import { useEffect, useRef, useCallback } from "react";
import { initVideoControls } from "@/lib/videoControls";

export function useVideoControls() {
  const containerRef = useRef<HTMLElement | null>(null);
  const cleanupRef = useRef<(() => void) | void>(undefined);

  const setRef = useCallback((el: HTMLElement | null) => {
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = undefined;
    }
    containerRef.current = el;
    if (el) {
      cleanupRef.current = initVideoControls(el) || undefined;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);

  return setRef;
}
