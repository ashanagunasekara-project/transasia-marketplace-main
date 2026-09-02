"use client";

import Link from "next/link";
import Image from "next/image";
import { innerPageMenuColumns, navBrandList } from "@/data/menu";
import { isInternalHref, isPathActive } from "@/lib/nav";

interface NavPagesMenuProps {
  pathname: string;
  isHoverOpen: boolean;
  isActive: boolean;
  mounted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onWheelInside: () => void;
}

export default function NavPagesMenu({
  pathname,
  isHoverOpen,
  isActive,
  mounted,
  onMouseEnter,
  onMouseLeave,
  onWheelInside,
}: NavPagesMenuProps) {
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
        Pages <i className="fa-regular fa-chevron-down" />
      </a>
      {mounted && (
        <div className="rbt-megamenu rbt-width-fullscreen mega-has-bg-img mega-bg-one p-0 ">
          <div className="rbt-megamenu-wrapper bg-transparent">
            <div className="wrapper">
              <div className="row row--12 mt_dec--12">
                <div className="col-xl-9">
                  <div className="h-100 d-flex flex-column justify-content-between">
                    <div className="row">
                      {innerPageMenuColumns.map((column, colIndex) => (
                        <div
                          key={colIndex}
                          className="col-12 col-lg-1-5 single-mega-item rbt-scroll-trigger fade_in animation-order-1 mt--16"
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
                    <div className="row">
                      <div className="col-12">
                        <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                      </div>
                      <div className="col-lg-12">
                        <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                          {navBrandList.map((brand, index) => (
                            <li key={`nav-brand-pages-${index}`}>
                              <Link href="/shop-by-brands">
                                <Image
                                  alt="Ecommerce Brand Image"
                                  src={brand.src}
                                  width={brand.width}
                                  height={brand.height}
                                  layout="responsive"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
