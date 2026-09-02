"use client";
import {
  navBrandList,
  featureMenuColumns,
  productDetailPages,
  productsVarientPage,
  shopPages,
} from "@/data/menu";
import Link from "next/link";
import Image from "next/image";
import Reviews from "./Reviews";
import NavProducts from "./NavProducts";
import { useState } from "react";
import { useMenuHover } from "@/hooks/useMenuHover";
import { usePathname } from "next/navigation";
import { isInternalHref, isPathActive } from "@/lib/nav";

const tabItems = [
  {
    label: "Shop Pages",
    icon: "fa-store",
  },
  {
    label: "Single Product",
    icon: "fa-shirt",
  },
  {
    label: "Products Variation",
    icon: "fa-swatchbook",
  },
  {
    label: "Advance Features",
    icon: "fa-screwdriver-wrench",
  },
];

export default function NavShopPages() {
  const pathname = usePathname();

  const shopPagesItems = shopPages.flatMap((column) => column.items);
  const singleProductItems = productDetailPages.flatMap(
    (column) => column.items,
  );
  const productVariantItems = productsVarientPage.flatMap(
    (column) => column.items,
  );
  const featureItems = featureMenuColumns.flatMap((column) => column.items);

  const isShopPagesActive = shopPagesItems.some((item) =>
    isPathActive(pathname, item.href),
  );
  const isSingleProductActive = singleProductItems.some((item) =>
    isPathActive(pathname, item.href),
  );
  const isProductVariantActive = productVariantItems.some((item) =>
    isPathActive(pathname, item.href),
  );
  const isFeatureActive = featureItems.some((item) =>
    isPathActive(pathname, item.href),
  );

  const sectionActive = [
    isShopPagesActive,
    isSingleProductActive,
    isProductVariantActive,
    isFeatureActive,
  ];

  const initialIndex = (sectionActive.findIndex((active) => active) + 4) % 4;

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isMounted, setIsMounted] = useState(false);
  const { onMouseEnter, onMouseLeave, onWheelInside, isMenuHoverOpen } =
    useMenuHover();

  const handleMouseEnter = () => {
    if (!isMounted) setIsMounted(true);
    onMouseEnter();
  };
  return (
    <li
      className={`with-rbt-megamenu has-menu-child-item position-static${
        isMenuHoverOpen ? " rbt-menu-hover-open" : ""
      }${sectionActive.some(Boolean) ? " active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
      onWheel={onWheelInside}
    >
      <a
        href="#!"
        aria-haspopup="true"
        aria-expanded={isMenuHoverOpen}
        onClick={(e) => e.preventDefault()}
      >
        Shop <i className="fa-regular fa-chevron-down" />
      </a>
      {/* Start Mega Menu  */}
      {isMounted && (
        <div className="rbt-megamenu rbt-megamenu-4">
          <div className="rbt-megamenu-wrapper rbt-megamenu-wrapper-var-two p--0">
            <div className="row row--0">
              <div className="col-3 ">
                <div className="rbt-menu-tab-wrapper">
                  <nav
                    id="rbt-megamenuTab"
                    className="nav nav-pills flex-column rbt-megamenu-tab rbt-megamenu-tab-cs-activation"
                  >
                    {tabItems.map((item, index) => {
                      return (
                        <button
                          type="button"
                          key={index}
                          className={`nav-link ${
                            activeIndex === index ? "active" : ""
                          }`}
                          onMouseEnter={() => setActiveIndex(index)}
                          onFocus={() => setActiveIndex(index)}
                        >
                          <span>
                            <i className={`fa-regular ${item.icon}`} />
                          </span>
                          {item.label}
                          <span className="rbt-chevron-right">
                            <i className="fa-regular fa-chevron-right" />
                          </span>
                        </button>
                      );
                    })}
                    <Link
                      href="https://nextjs.getunimart.com/admin"
                      className="nav-link"
                    >
                      <span>
                        <i className="fa-regular fa-chart-pie" />
                      </span>
                      Dashboard Overview
                      <span className="rbt-chevron-right">
                        <i className="fa-regular fa-chevron-right" />
                      </span>
                    </Link>
                    <button
                      type="button"
                      className="nav-link disabled"
                      aria-disabled="true"
                      tabIndex={-1}
                    >
                      <span>
                        <i className="fa-regular fa-shopping-bag" />
                      </span>
                      Multivendor Shop
                      <span className="rbt-product-badge rbt-product-badge-bg-primary border-rounded">
                        Coming
                      </span>
                      <span className="rbt-chevron-right">
                        <i className="fa-regular fa-chevron-right" />
                      </span>
                    </button>
                  </nav>
                  <div className="rbt-tab-banner-img">
                    <Image
                      alt="Ecommerce Mennu Bnner"
                      src="/assets/images/splash/menu-banner/menu-tab-banner-01.webp"
                      width={624}
                      height={160}
                    />
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="rbt-menu-tab-content-wrapper">
                  <div
                    className="tab-content rbt-megamenu-tab-content"
                    id="megamenu-tab-content"
                  >
                    <div
                      className={`tab-pane ${
                        activeIndex == 0 ? "show active" : ""
                      } `}
                    >
                      <div className="row row--24">
                        <div className="col-xl-8">
                          <div className="row row--8">
                            {shopPages.map((column, colIndex) => (
                              <div
                                key={colIndex}
                                className={`col-xl-4 single-mega-item rbt-scroll-trigger fade_in animation-order-${
                                  colIndex + 1
                                }`}
                              >
                                <h6 className="rbt-short-title">
                                  {column.title}
                                </h6>
                                <ul className="mega-menu-item">
                                  {column.items.map((item, itemIndex) => {
                                    const isActive = isPathActive(
                                      pathname,
                                      item.href,
                                    );
                                    const WrapperTag = isInternalHref(item.href)
                                      ? Link
                                      : "a";
                                    const wrapperProps = isInternalHref(
                                      item.href,
                                    )
                                      ? {
                                          href: item.href,
                                          className: isActive
                                            ? "active"
                                            : undefined,
                                        }
                                      : {
                                          href: item.href,
                                          className: isActive
                                            ? "active"
                                            : undefined,
                                        };

                                    return (
                                      <li key={itemIndex}>
                                        <WrapperTag {...wrapperProps}>
                                          {item.label}
                                          {item.badge && (
                                            <div
                                              className={`rbt-product-badge rbt-product-badge-bg-${
                                                item.badgeColor
                                              } border-rounded${
                                                item.ml ? " ml--8" : ""
                                              }`}
                                            >
                                              {item.badge}
                                            </div>
                                          )}
                                        </WrapperTag>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="col-xl-4 rbt-scroll-trigger fade_in animation-order-4">
                          <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-three h-100 min-h-500">
                            <div className="mega-top-banner h-100 align-items-start justify-content-center">
                              <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-center text-center">
                                <div className="rbt-banner-content">
                                  <p className="b4 subtitle mb--0">
                                    Embrace Comfy Wear
                                  </p>
                                  <h5 className="h5 mb--4 rbt-text-capitalize">
                                    Ready to fall in love with Autumn
                                    collection!
                                  </h5>
                                </div>
                                <Link
                                  className="rbt-btn rbt-bg-color-secondary rbt-btn-sm"
                                  href={`/shop`}
                                >
                                  Shop Collection
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activeIndex == 1 ? "show active" : ""
                      } `}
                    >
                      <div className="d-flex flex-column justify-content-between">
                        <div className="row row--24">
                          {productDetailPages.map((col, colIndex) => (
                            <div
                              key={colIndex}
                              className="col-xl-3 single-mega-item"
                            >
                              <h6 className="rbt-short-title">{col.title}</h6>
                              <ul className="mega-menu-item">
                                {col.items.map((item, itemIndex) => {
                                  const isActive = isPathActive(
                                    pathname,
                                    item.href,
                                  );
                                  const isInternal = isInternalHref(item.href);
                                  const Wrapper = isInternal ? Link : "a";
                                  const props = isInternal
                                    ? {
                                        href: item.href,
                                        className: isActive
                                          ? "active"
                                          : undefined,
                                      }
                                    : {
                                        href: item.href,
                                        className: isActive
                                          ? "active"
                                          : undefined,
                                      };

                                  return (
                                    <li key={itemIndex}>
                                      <Wrapper {...props}>
                                        {item.label}
                                        {item.badge && (
                                          <div
                                            className={`rbt-product-badge rbt-product-badge-bg-${
                                              item.badgeColor
                                            } border-rounded${
                                              item.ml ? " ml--8" : ""
                                            }`}
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
                        <div className="row row--24">
                          <hr className="rbt-separator rbt-separator-gray200 mb--12 mt--12 mt_sm--8 mb_sm--8 rbt-bg-color-gray-100" />
                          <div className="col-lg-12">
                            <Reviews />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activeIndex == 2 ? "show active" : ""
                      } `}
                    >
                      <div className="row row--24">
                        <div className="col-xl-8">
                          <div className="row row--8">
                            {productsVarientPage.map((column, colIndex) => (
                              <div
                                key={colIndex}
                                className="col-xl-4 single-mega-item"
                              >
                                <h6 className="rbt-short-title">
                                  {column.title}
                                </h6>
                                <ul className="mega-menu-item">
                                  {column.items.map((item, itemIndex) => {
                                    const isActive = isPathActive(
                                      pathname,
                                      item.href,
                                    );
                                    const isInternal = isInternalHref(
                                      item.href,
                                    );
                                    const Wrapper = isInternal ? Link : "a";
                                    const props = isInternal
                                      ? {
                                          href: item.href,
                                          className: isActive
                                            ? "active"
                                            : undefined,
                                        }
                                      : {
                                          href: item.href,
                                          className: isActive
                                            ? "active"
                                            : undefined,
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
                            <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--24 mt_sm--12 mb_sm--12 rbt-bg-color-gray-100" />
                            <div className="col-lg-12">
                              <ul className="rbt-nav-brand-list liststyle rbt-nav-brand-list-var-two d-flex justify-content-between">
                                {navBrandList
                                  .slice(0, 6)
                                  .map((brand, index) => (
                                    <li key={index}>
                                      <Link href={`/shop-by-brands`}>
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
                        <div className="col-xl-4">
                          <div className="rbt-menu-offer-card rbt-bg-style-box rbt-bg-four h-100">
                            <div className="mega-top-banner h-100 align-items-end justify-content-start">
                              <div className="rbt-banner-inner rbt-banner-inner-black flex-column rbt-gap--16 align-items-start text-left">
                                <div className="rbt-banner-content">
                                  <p className="b4 subtitle rbt-text-color-white mb--0">
                                    Embrace Comfy Wear
                                  </p>
                                  <h5 className="h5 mt--4 mb--0 rbt-text-color-white rbt-text-capitalize">
                                    Ready to fall in love with Autumn
                                    collection!
                                  </h5>
                                </div>
                                <Link
                                  className="rbt-btn rbt-bg-color-secondary rbt-btn-sm"
                                  href={`/shop-by-categories`}
                                >
                                  Shop Collection
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-pane ${
                        activeIndex == 3 ? "show active" : ""
                      } `}
                    >
                      <div className="row row--24">
                        <div className="col-xl-8">
                          <div className="row row--8">
                            {featureMenuColumns.map((column, colIndex) => (
                              <div
                                key={colIndex}
                                className="col-xl-4 single-mega-item"
                              >
                                <h6 className="rbt-short-title">
                                  {column.title}
                                </h6>
                                <ul className="mega-menu-item">
                                  {column.items.map((item, itemIndex) => {
                                    const isActive = isPathActive(
                                      pathname,
                                      item.href,
                                    );
                                    const Wrapper = isInternalHref(item.href)
                                      ? Link
                                      : "a";
                                    const props = isInternalHref(item.href)
                                      ? {
                                          href: item.href,
                                          className: isActive
                                            ? "active"
                                            : undefined,
                                        }
                                      : {
                                          href: item.href,
                                          className: isActive
                                            ? "active"
                                            : undefined,
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
                        <div className="col-xl-4">
                          <div className="rbt-swiper-container">
                            <NavProducts />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* End Mega Menu  */}
    </li>
  );
}
