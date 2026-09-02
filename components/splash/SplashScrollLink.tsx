"use client";

import {
  SPLASH_SECTION_HASH,
  useSplashSectionNav,
  type SplashScrollTarget,
} from "@/components/splash/SplashSectionNavContext";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  section: SplashScrollTarget;
  children: ReactNode;
};

export default function SplashScrollLink({
  section,
  children,
  onClick,
  ...rest
}: Props) {
  const nav = useSplashSectionNav();
  const href = `/#${SPLASH_SECTION_HASH[section]}`;

  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (!nav) return;
        e.preventDefault();
        nav.scrollToSection(section);
      }}
    >
      {children}
    </a>
  );
}
