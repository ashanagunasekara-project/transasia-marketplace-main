"use client";

import { CloseIcon, CurvedArrowIcon } from "../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { demoData } from "@/data/splash";
import PortfolioIsotopeFilterTabs from "../elements/element-portfolio-styles/PortfolioIsotopeFilterTabs";
import Counter from "../common/ui/Counter";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

const modalFilters = [
  { label: "All Together", filter: "*" },
  { label: "Fashion", filter: ".fashion" },
  { label: "Accessories", filter: ".accessories" },
  { label: "Furniture", filter: ".furniture" },
  { label: "Electronics", filter: ".electronics" },
  { label: "Cosmetics", filter: ".cosmetics" },
  { label: "Decor/Interior", filter: ".interior" },
  { label: "Printing", filter: ".printing" },
  { label: "Sports", filter: ".sports" },
];

const comingSoonFilter = {
  label: "\uFE0F\u200D\uD83D\uDD25 Coming Soon",
  filter: ".coming-soon",
};

export default function Demos() {
  const { close } = useManagedModalPanel("demos-modal");
  return (
    <div
      className="rbt-default-modal modal fade has-rbt-top-folder-shape"
      id="demos-modal"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-full-width">
        <div className="modal-content">
          <div className="rbt-folder-shape-right-portion">
            <CloseIcon />
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              aria-label="Close"
              onClick={close}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="rbt-bg-color-white rbt-content-trs-portion">
              <div className="container">
                <div className="row overflow-hidden">
                  <div className="col-12 col-lg-10 col-xl-9 mx-auto">
                    <div className="rbt-exclusive-section-title text-center position-relative pt--48 mb--20">
                      <span className="rbt-overlay-counter counter-sm top-0">
                        <Counter max={100} />
                        <span className="counter-suffix">+</span>
                      </span>
                      <h2 className="rbt-title mb--48 sm_mb--32 md_mb--40">
                        <span className="rbt-bold--text">
                          Best-In-Class Designs
                          <br />
                        </span>
                        <span className="rbt-title-sm-text">
                          To Discover Awesome Creative Designs
                        </span>
                      </h2>
                      <div className="section-indicator d-xl-none d-xxl-block">
                        <span className="icon">
                          <CurvedArrowIcon />
                        </span>
                        <span className="indicator-text text-start">
                          Craft exceptional visitor <br />
                          experience.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="rbt-isotop-scroll rbt-scroll-trigger fade_in animation-order-3">
                      <PortfolioIsotopeFilterTabs
                        options={[...modalFilters, comingSoonFilter]}
                      />
                    </div>
                  </div>
                </div>
                <div className="rbt-demo-prev-wrapper rbt-demos-presentation-modals pl--8 pr--12 mt--24">
                  {/* Start Demos Area */}
                  <div className="rbt-isotop-demos-area isotop-demo-masonry-activation">
                    <div className="row mt_dec--24">
                      <div className="col-12">
                        <div className="grid-5-meso">
                          {demoData.map((demo, index) => {
                            const animationOrder = Math.min(index + 1, 10);
                            const classes = demo.filterClass.join(" ");

                            return (
                              <div
                                key={demo.id}
                                className={`rbt-meso-item transition ${classes}`}
                              >
                                <div
                                  className={`demo-single rbt-scroll-trigger zoom_in animation-order-${animationOrder}`}
                                >
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <Link href={demo.href}>
                                        <Image
                                          alt={demo.title}
                                          src={demo.image}
                                          width={640}
                                          height={660}
                                        />
                                      </Link>
                                    </div>
                                    <div className="content">
                                      <h4 className="rbt-title">
                                        <Link href={demo.href}>
                                          {demo.title}
                                        </Link>
                                      </h4>
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
                  {/* End Demos Area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
