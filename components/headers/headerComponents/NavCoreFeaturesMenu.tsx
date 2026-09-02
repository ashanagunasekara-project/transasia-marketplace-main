"use client";

import Link from "next/link";
import Image from "next/image";
import { uxMenuColumns } from "@/data/menu";
import { isInternalHref, isPathActive } from "@/lib/nav";

interface NavCoreFeaturesMenuProps {
  pathname: string;
  isHoverOpen: boolean;
  isActive: boolean;
  mounted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onWheelInside: () => void;
}

export default function NavCoreFeaturesMenu({
  pathname,
  isHoverOpen,
  isActive,
  mounted,
  onMouseEnter,
  onMouseLeave,
  onWheelInside,
}: NavCoreFeaturesMenuProps) {
  return (
    <li
      className={`with-rbt-megamenu has-menu-child-item position-static${
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
        Core Features <i className="fa-regular fa-chevron-down" />
      </a>
      {mounted && (
        <div className="rbt-megamenu p-0 container">
          <div className="rbt-megamenu-wrapper p--0">
            <div className="wrapper">
              <div className="row row--0 mt_dec--32">
                <div className="col-xl-8 mt--24 rbt-scroll-trigger zoom_in animation-order-2">
                  <div className="rbt-inner-menu-wrapper p--24 p_sm--0 p_md--0 p_lg--0">
                    <div className="row row-12 mt_dec--16">
                      {uxMenuColumns.map((column, colIndex) => (
                        <div
                          key={colIndex}
                          className="col-12 col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16"
                        >
                          <h6 className="rbt-short-title">{column.title}</h6>
                          <ul className="mega-menu-item">
                            {column.items.map((item, itemIndex) => {
                              const itemIsActive = isPathActive(
                                pathname,
                                item.href,
                              );
                              const Wrapper = isInternalHref(item.href)
                                ? Link
                                : "a";
                              const props = {
                                href: item.href,
                                className: itemIsActive ? "active" : undefined,
                              };

                              return (
                                <li key={itemIndex}>
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
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 mt--24 single-mega-item rbt-scroll-trigger zoom_in animation-order-2">
                  <Image
                    className="h-100"
                    alt="Ecommerce Banner"
                    src="/assets/images/header-bg/megamenu-banner-hr-01.webp"
                    width={976}
                    height={990}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
