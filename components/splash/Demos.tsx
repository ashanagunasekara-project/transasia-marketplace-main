"use client";
import { CurvedArrowIcon, LayoutTemplateIcon } from "../svg-icons";
import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { demoData, splashFilters } from "@/data/splash";
import Counter from "../common/ui/Counter";
import DemoSearchForm from "./DemoSearchForm";
import NavEffectButtons from "../common/ui/NavEffectButtons";
import ModalTriggerButton from "../action-buttons/ModalTriggerButton";
import RequestPageModal from "../modals/RequestPageModal";
import SingleManagedModalLayer from "@/components/common/modals/SingleManagedModalLayer";
import { ModalName } from "@/types/modal";
import { useIsotopeMasonry } from "@/hooks/useIsotopeMasonry";

export default function Demos() {
  const [activeFilter, setActiveFilter] = useState("*");
  const updateCategoryRef = useRef<
    (filterVal: string, searchVal: string, limit: number) => void
  >(() => {});
  const isotopContainer = useRef<HTMLDivElement>(null);
  const isotopRef = useIsotopeMasonry(isotopContainer, {
    itemSelector: ".rbt-meso-item",
    onReady: () => {
      updateCategoryRef.current("*", "", 21);
    },
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [visibleLimit, setVisibleLimit] = useState(21);
  const [hasMore, setHasMore] = useState(false);

  const updateCategory = useCallback(
    (filterVal: string, searchVal: string, limit: number) => {
      if (!isotopRef.current) return;

      const allElements = isotopRef.current.getItemElements() as HTMLElement[];
      let matches = 0;
      const elementsToShow = new Set();

      for (const itemElement of allElements) {
        let filterMatch = true;
        if (filterVal && filterVal !== "*") {
          filterMatch = itemElement.matches(filterVal);
        }

        let searchMatch = true;
        if (searchVal) {
          const lowerSearch = searchVal.toLowerCase();
          const title = itemElement.dataset.title?.toLowerCase() || "";
          searchMatch = title.includes(lowerSearch);
        }

        if (filterMatch && searchMatch) {
          matches++;
          if (matches <= limit) {
            elementsToShow.add(itemElement);
          }
        }
      }

      setHasMore(matches > limit);

      isotopRef.current.arrange({
        filter: function (itemElement: HTMLElement) {
          return elementsToShow.has(itemElement);
        },
      });
    },
    [],
  );

  updateCategoryRef.current = updateCategory;

  const handleFilterClick = (dataFilter: string) => {
    setActiveFilter(dataFilter);
    setVisibleLimit(21);
    updateCategory(dataFilter, searchTerm, 21);
  };

  const handleSearch = useCallback(
    (term: string) => {
      setSearchTerm(term);
      setVisibleLimit(21);
      updateCategory(activeFilter, term, 21);
    },
    [activeFilter, updateCategory],
  );

  const handleLoadMore = () => {
    const newLimit = visibleLimit + 6;
    setVisibleLimit(newLimit);
    updateCategory(activeFilter, searchTerm, newLimit);
  };

  const tabOptions = splashFilters.map((item) => ({
    id: item.filter,
    label: (
      <>
        <span className="filter-text">{item.label}</span>
        <span className="rbt-count">{item.count}</span>
      </>
    ),
  }));

  return (
    <>
      <div className="rbt-splash-demos-area splash-demo-masonry-activation">
        <div className="rbt-max-screen-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rbt-splash-section-title text-center position-relative">
                  <span className="rbt-overlay-counter rbt-scroll-trigger fade_in animation-order-2">
                    <Counter max={100} />
                    <span className="counter-suffix">+</span>
                  </span>
                  <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 rbt-text-regular">
                    <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                      Premium Pre-Build Demos <br />
                    </span>
                    to get started
                  </h2>
                  <div className="section-indicator rbt-scroll-trigger fade_in animation-order-1">
                    <span className="icon rbt-scroll-trigger slide_in animation-order-4">
                      <CurvedArrowIcon />
                    </span>
                    <span className="indicator-text text-start rbt-scroll-trigger slide_in animation-order-5">
                      Optimally designed for <br /> access and user experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid container-wider-device">
            <div
              className="rbt-grid-template-5 demo-masonry-full rbt-demo-search-active p_sm--0 rbt-has-load-more-element mt_dec--24"
              data-element-per-load={20}
            >
              <div className="rbt-grid-col-span-1">
                <div className="rbt-scroll-trigger fade_in animation-order-3 pr--0 pr_sm--0 pr_md--0 mt--24 sticky-top sticky-top-136 z-1">
                  <NavEffectButtons
                    parentClassName="rbt-splash-tabs rbt-tabs-vertical rbt-tabs-bg-var-2"
                    groupClassName="rbt-product-nav-grp rbt-tab-btn-list rbt-tab-btn-primary"
                    itemClassName="rbt-filter-btn"
                    highlightClassName="rbt-bg-highlight splash-tab-bg-highlight rbt-bg-color-brand-300"
                    options={tabOptions}
                    active={activeFilter}
                    setActive={handleFilterClick}
                    startAdornment={
                      <>
                        <h6 className="rbt-title rbt-text-bold mb--0">
                          <i className="fa-regular fa-sliders mr--4" />
                          Filter &amp; Refine
                        </h6>
                        <DemoSearchForm onSearch={handleSearch} />
                      </>
                    }
                    endAdornment={
                      <div className="rbt-bottom-bar rbt-demo-filter-bottom-bar rbt-link-hover text-center rbt-bg-color-brand-300">
                        <ModalTriggerButton
                          openModalName={ModalName.requestDemoModal}
                        >
                          Request for New Demos
                        </ModalTriggerButton>
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="rbt-grid-col-span-4 pb--88">
                <div className="rbt-nothing-found">
                  <h4 className="mb--12">
                    Didn&apos;t Find Your Prefarable Demos?
                  </h4>
                  <p className="rbt-description rbt-link-hover">
                    <span className="rbt-text-bold">Don&apos;t Worry!</span> You
                    can create any layout and demos using our any pre-built
                    section and element. <br />
                    Or{" "}
                    <ModalTriggerButton
                      openModalName={ModalName.requestDemoModal}
                    >
                      Click Here
                    </ModalTriggerButton>{" "}
                    to request for custom demos
                  </p>
                </div>
                <div
                  className="grid-4-meso responsive-layout-var-2 mt_sm--16"
                  ref={isotopContainer}
                >
                  {demoData.map((demo, i) => (
                    <div
                      key={i}
                      data-title={demo.title}
                      className={`rbt-meso-item rbt-single-demo-item transition ${demo.filterClass.join(
                        " ",
                      )}`}
                    >
                      <div className="rbt-demo-wrapper">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail rbt-scroll-trigger zoom_in animation-order-4">
                              <Link target="_blank" href={demo.href}>
                                <Image
                                  alt="Demo Images"
                                  src={demo.image}
                                  loading="lazy"
                                  width="640"
                                  height="660"
                                  sizes="(max-width:576px) 100vw, (max-width:992px) 50vw, 33vw"
                                />
                              </Link>
                            </div>
                            <div className="content">
                              <h4 className="rbt-title">
                                <Link target="_blank" href={demo.href}>
                                  {demo.title}
                                </Link>
                              </h4>
                              <div className="rbt-tag-list">
                                {demo.tags.map((tag, i) => (
                                  <a key={i} className="rbt-tag" href="#">
                                    {tag}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rbt-demo-features-area">
                          <div className="rbt-feature-list-wrapper">
                            <ul className="mb--0">
                              {demo.features.map((feature, i) => (
                                <li key={i}>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Link
                            className="rbt-btn-grp rbt-has-separator-shape justify-content-center mb--16"
                            target="_blank"
                            href={demo.href}
                          >
                            <span className="rbt-btn-single rbt-btn rbt-btn-md no-white-overlay has-no-hover-transform flex-fill text-center">
                              <span data-text="View All The Trending Collection">
                                Preview Demo
                              </span>
                            </span>
                            <span className="rbt-btn rbt-btn-single animated-icon-btn round-sm default-primary-bg p--0">
                              <span className="animated-icon">
                                <LayoutTemplateIcon />
                              </span>
                            </span>
                          </Link>
                        </div>
                        <div className="demo-mobile-card">
                          <Image
                            alt="Image"
                            src={demo.mobileImage}
                            loading="lazy"
                            width="320"
                            height="690"
                            sizes="(max-width:576px) 100vw, 320px"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Load More Button */}
                  {hasMore && (
                    <button
                      className="rbt-btn rbt-load-more-element-btn"
                      onClick={handleLoadMore}
                    >
                      Show More Demos{" "}
                      <i className="fa-regular fa-loader ml--4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SingleManagedModalLayer modalName={ModalName.requestDemoModal}>
        <RequestPageModal />
      </SingleManagedModalLayer>
    </>
  );
}
