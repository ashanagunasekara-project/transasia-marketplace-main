"use client";
import { CurvedArrowIcon } from "../svg-icons";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import OdometerComponent from "../common/ui/OdometerComponent";
import { useIsotopeMasonry } from "@/hooks/useIsotopeMasonry";

import { FILTERS, INNER_PAGES, PAGE_SIZE } from "@/data/innerPages";

export default function InnerPages() {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const activeFilterRef = useRef(activeFilter);
  activeFilterRef.current = activeFilter;
  const isotopeRef = useIsotopeMasonry(
    gridRef,
    {
      itemSelector: ".rbt-meso-item",
      onRelayout: (iso) => iso.arrange({ filter: activeFilterRef.current }),
    },
    [visibleCount, activeFilter],
  );

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    isotopeRef.current?.arrange({ filter });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [activeFilter]);

  const filteredItems =
    activeFilter === "*"
      ? INNER_PAGES
      : INNER_PAGES.filter((item) => `.${item.type}` === activeFilter);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="splash-section-gap rbt-custom-page-layout-area rbt-custom-page-meso-active position-relative">
      <div className="rbt-splash-bg-light light-center-left" />
      <div className="rbt-splash-bg-light light-bottom-right" />
      <div className="rbt-max-screen-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center position-relative">
                <span className="rbt-overlay-counter counter-sm color-variation-2">
                  <OdometerComponent max={180} />{" "}
                  <span className="counter-suffix">+</span>
                </span>
                <h2 className="rbt-title rbt-text-color-white">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    Custom Pages
                    <br />
                  </span>
                  <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                    To Discover Awesome Designs
                  </span>
                </h2>
                <div className="section-indicator d-md-none d-lg-block">
                  <span className="icon">
                    <CurvedArrowIcon />
                  </span>
                  <span className="indicator-text text-start rbt-text-color-white">
                    Craft exceptional visitor <br />
                    experience.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row overflow-hidden mb--28">
            <div className="col-12">
              <NavEffectTabs
                parentClassName="rbt-splash-tabs"
                options={FILTERS.map((filter) => ({
                  id: filter.value,
                  label: filter.label,
                }))}
                active={activeFilter}
                setActive={handleFilterClick}
                groupClassName="rbt-splash-scroll rbt-product-nav-grp rbt-bg-color-gray-600 rbt-tab-btn-list rbt-has-overlay rbt-splash-filter-btn-group"
                itemClassName="rbt-text-color-white"
                highlightClassName="rbt-bg-highlight splash-tab-bg-highlight"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row demo-masonry-full p_sm--8">
            <div className="col-12">
              <div className="grid-5-meso" ref={gridRef}>
                {visibleItems.map((item) => {
                  const outerBase =
                    item.outerBaseClassName ??
                    "rbt-meso-item rbt-load-single-element rbt-single-demo-item transition";
                  const outerClassName = `${outerBase} ${item.type}${
                    item.outerExtraClassName
                      ? ` ${item.outerExtraClassName}`
                      : ""
                  }`;

                  return (
                    <div
                      key={`${item.href}-${item.image.src}`}
                      className={outerClassName}
                    >
                      <div className="rbt-demo-wrapper">
                        <div className="demo-single has-dark-bg">
                          <div className="inner">
                            {item.badge ? (
                              <div
                                className={`rbt-product-badge ${item.badge.className}`}
                              >
                                {item.badge.text}
                              </div>
                            ) : null}
                            <div className="thumbnail rbt-scroll-trigger zoom_in animation-order-4">
                              <Link href={item.href}>
                                <Image
                                  alt="Demo Images"
                                  src={item.image.src}
                                  width={item.image.width}
                                  height={item.image.height}
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4 className="rbt-title">
                                <Link href={item.href}>{item.title}</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <div class="rbt-splash-overlay"></div> */}
        <div className="container rbt-splash-loadmore-btn-area">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              {hasMore ? (
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="rbt-btn rbt-btn-rounded rbt-splash-load-more-btn"
                >
                  Load More
                  <i className="fa-regular fa-loader ml--4" />
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
