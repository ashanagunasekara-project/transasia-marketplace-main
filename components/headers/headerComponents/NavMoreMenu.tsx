"use client";

import Link from "next/link";
import { supportMenuItems } from "@/data/menu";
import { isInternalHref, isPathActive } from "@/lib/nav";

interface NavMoreMenuProps {
  pathname: string;
  isHoverOpen: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onWheelInside: () => void;
}

export default function NavMoreMenu({
  pathname,
  isHoverOpen,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onWheelInside,
}: NavMoreMenuProps) {
  return (
    <li
      className={`has-dropdown position-relative${
        isHoverOpen ? " rbt-menu-hover-open" : ""
      }${isActive ? " active" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onWheel={onWheelInside}
    >
      <a
        href="#!"
        aria-haspopup="true"
        aria-expanded={isHoverOpen}
        onClick={(e) => e.preventDefault()}
      >
        More <i className="fa-regular fa-chevron-down" />
      </a>
      <ul className="submenu">
        {supportMenuItems.map((item, index) => {
          const isInternal = isInternalHref(item.href) || item.useLink;
          const itemIsActive = isInternalHref(item.href)
            ? isPathActive(pathname, item.href)
            : false;
          const Wrapper = isInternal ? Link : "a";
          const props = isInternal
            ? {
                href: item.href,
                className: itemIsActive ? "active" : undefined,
              }
            : {
                href: item.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: itemIsActive ? "active" : undefined,
              };

          return (
            <li key={index}>
              <Wrapper {...props}>
                {item.label}
                {item.badge && (
                  <div
                    className={`rbt-product-badge rbt-product-badge-bg-${item.badgeColor} border-rounded`}
                  >
                    {item.badge}
                  </div>
                )}
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
