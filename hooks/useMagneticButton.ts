"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  getMagneticOffset,
  getMagneticRestTransform,
  getMagneticTransform,
  MAGNETIC_TRANSITION,
  DEFAULT_STRENGTH,
} from "@/lib/magneticButton";

export interface UseMagneticButtonOptions {
  strength?: number;
}

export interface UseMagneticButtonReturn {
  ref: React.RefObject<HTMLElement | null>;
  style: React.CSSProperties;
}

export function useMagneticButton(
  options: UseMagneticButtonOptions = {},
): UseMagneticButtonReturn {
  const { strength = DEFAULT_STRENGTH } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [transform, setTransform] = useState(getMagneticRestTransform());

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offset = getMagneticOffset(e.clientX, e.clientY, rect, strength);
      setTransform(getMagneticTransform(offset));
    },
    [strength],
  );

  const handleMouseLeave = useCallback(() => {
    setTransform(getMagneticRestTransform());
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return {
    ref,
    style: {
      transition: MAGNETIC_TRANSITION,
      transform,
    },
  };
}
