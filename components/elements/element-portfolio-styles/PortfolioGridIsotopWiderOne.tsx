"use client";

import Link from "next/link";
import Image from "next/image";
import { isotopFilters, isotopPortfolios } from "@/data/portfolios";
import { useRef, useState } from "react";
import PortfolioIsotopeFilterTabs from "./PortfolioIsotopeFilterTabs";
import { useIsotopeMasonry } from "@/hooks/useIsotopeMasonry";

function PortfolioGridIsotopWiderOne() {
  const [activeFilter, setActiveFilter] = useState<string>(
    isotopFilters.find((f) => f.isActive)?.filter ?? "*",
  );

  const gridRef = useRef<HTMLDivElement | null>(null);
  const activeFilterRef = useRef(activeFilter);
  activeFilterRef.current = activeFilter;
  const isotopeRef = useIsotopeMasonry(
    gridRef,
    {
      itemSelector: ".rbt-meso-item",
      onRelayout: (iso) => iso.arrange({ filter: activeFilterRef.current }),
    },
    [activeFilter],
  );

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    isotopeRef.current?.arrange({ filter });
  };

  const filteredItems =
    activeFilter === "*"
      ? isotopPortfolios
      : isotopPortfolios.filter((item) =>
          item.filterClassName?.includes(activeFilter.replace(".", "")),
        );

  return (
    <>
      <div className="rbt-team-area rbt-bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">
                    Portfolio Grid Isotop Wider
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-full-width-wrapper">
          {/* Start Demos Area */}
          <div className="rbt-isotop-demos-area isotop-demo-masonry-activation">
            <div className="row overflow-hidden">
              <div className="col-12">
                <div className="rbt-isotop-scroll rbt-scroll-trigger fade_in animation-order-3">
                  <PortfolioIsotopeFilterTabs
                    active={activeFilter}
                    setActive={handleFilterClick}
                  />
                </div>
              </div>
            </div>
            <div className="row demo-masonry-wider">
              <div className="col-12">
                <div className="grid-3-meso" ref={gridRef}>
                  {filteredItems.length === 0 ? (
                    <div className="no-result text-center w-100 py-5">
                      <p>No portfolio items found for this filter.</p>
                    </div>
                  ) : (
                    isotopPortfolios.map((item) => {
                      return (
                        <div
                          key={`${item.title}-${item.img}`}
                          className={`rbt-meso-item transition${
                            item.filterClassName
                              ? ` ${item.filterClassName}`
                              : ""
                          }`}
                        >
                          <div className="rainbow-card rbt-portfolio-card">
                            <div className="inner">
                              <div className="thumbnail">
                                <figure className="card-image">
                                  <Link href="/portfolio-details">
                                    <Image
                                      alt={item.title}
                                      src={item.img}
                                      width={2170}
                                      height={2170}
                                    />
                                  </Link>
                                </figure>
                                <Link
                                  className="rainbow-overlay"
                                  href="/portfolio-details"
                                />
                              </div>
                              <div className="content">
                                <h5 className="title mb--10">
                                  <Link href="/portfolio-details">
                                    {item.title}
                                  </Link>
                                </h5>
                                <span className="subtitle b2">
                                  {item.subtitle}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* End Demos Area */}
        </div>
      </div>
    </>
  );
}

export default PortfolioGridIsotopWiderOne;
