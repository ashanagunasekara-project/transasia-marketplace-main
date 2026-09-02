"use client";

import { useMagneticButton } from "@/hooks/useMagneticButton";
import type { ElementType, ReactNode } from "react";

export interface MagneticButtonProps {
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  children?: ReactNode;
  [key: string]: unknown;
}

export default function MagneticButton({
  as: Component = "button",
  className = "",
  style = {},
  strength,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, style: magneticStyle } = useMagneticButton(
    strength !== undefined ? { strength } : {}
  );

  return (
    <Component
      ref={ref}
      className={`rbt-magnetic-button ${className}`.trim()}
      style={{ ...magneticStyle, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
