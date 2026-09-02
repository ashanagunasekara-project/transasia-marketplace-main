"use client";

import Link from "next/link";
import Image from "next/image";
import { elementsMenuColumns, navBrandList } from "@/data/menu";
import { isInternalHref, isPathActive } from "@/lib/nav";

interface NavElementsMenuProps {
  pathname: string;
  isHoverOpen: boolean;
  isActive: boolean;
  mounted: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onWheelInside: () => void;
}

export default function NavElementsMenu({
  pathname,
  isHoverOpen,
  isActive,
  mounted,
  onMouseEnter,
  onMouseLeave,
  onWheelInside,
}: NavElementsMenuProps) {
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
        Elements <i className="fa-regular fa-chevron-down" />
      </a>
      {mounted && (
        <div className="rbt-megamenu container pl_sm--0 pl_md--0 pl_lg--0">
          <div className="rbt-megamenu-wrapper">
            <div className="row row--12 d-flex justify-content-between">
              <div className="col-xl-9">
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div className="row row--12">
                    {elementsMenuColumns.map((column, colIndex) => (
                      <div
                        key={colIndex}
                        className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1"
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
                  <div className="row row--12 d-none d-xl-flex">
                    <div className="col-12">
                      <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                    </div>
                    <div className="col-lg-12">
                      <ul className="rbt-nav-brand-list liststyle d-flex justify-content-xl-between">
                        {navBrandList.map((brand, index) => (
                          <li key={`nav-brand-elements-${index}`}>
                            <Link href="/shop-by-brands">
                              <Image
                                alt="Ecommerce Brand Image"
                                layout="responsive"
                                src={brand.src}
                                width={brand.width}
                                height={brand.height}
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 single-mega-item rbt-scroll-trigger fade_in animation-order-1">
                <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-two">
                  <div className="mega-top-banner">
                    <div className="rbt-banner-inner flex-column justify-content-center rbt-gap--8 align-items-center text-center">
                      <div className="rbt-banner-content">
                        <h5 className="title rbt-text-color-white">
                          New Aurora Watch
                        </h5>
                        <p className="b3 desc rbt-text-color-gray-200">
                          Send your idea, appear Unimart.
                        </p>
                      </div>
                      <Link
                        className="rbt-btn rbt-btn-sm"
                        href="/shop-by-categories"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/shop-by-categories"
                        className="product-img position-bottom mt--24"
                      >
                        <Image
                          alt="Ecommerce Product"
                          src="/assets/images/splash/menu-banner/menu-prd-03-lg.webp"
                          width={520}
                          height={408}
                        />
                      </Link>
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
