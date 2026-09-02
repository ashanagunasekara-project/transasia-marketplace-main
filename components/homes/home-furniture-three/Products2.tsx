"use client";

import { useMemo, useState } from "react";
import Countdown from "@/components/common/ui/Countdown";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard8 from "@/components/product-cards/ProductCard8";
import { furnitureProductsLarge } from "@/data/products/furnitures";
import Link from "next/link";

const FILTER_TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

export default function Products2() {
  const [activeTab, setActiveTab] = useState("this-week");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return furnitureProductsLarge;
    return furnitureProductsLarge.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--40">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Top Rated Items
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Shop By </span> Best Items
              </h2>
            </div>
            <div className="mobile-horizontal-scroll-section">
              <NavEffectTabs
                parentClassName="rbt-product-nav-section rbt-product-nav-var-primary mt--12 rbt-scroll-trigger fade_in animation-order-3"
                options={FILTER_TABS}
                active={activeTab}
                setActive={setActiveTab}
              />
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-12 mt--24">
            <div className="row h-100">
              <div className="col-md-12">
                <div className="rbt-countdown-section rbt-countdown-section-style-one rbt-countdown-bg-two rbt-scroll-trigger zoom_in animation-order-1 h-100">
                  <div className="row justify-content-center">
                    <div className="col-xl-12 col-md-12 col-12">
                      <div className="rbt-countdown-content rbt-countdown-content-right-position text-center">
                        <p className="rbt-subtitle mb--0 rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                          Grab The Offer
                        </p>
                        <h2 className="rbt-title rbt-text-color-white rbt-scroll-trigger fade_in animation-order-2">
                          <span className="rbt-bold--text">Up to 40% Off</span>{" "}
                          On All Brands
                        </h2>
                        <Link
                          className="rbt-btn rbt-btn-sm rbt-scroll-trigger fade_in animation-order-3 mb--48"
                          href="/shop"
                        >
                          Know More
                        </Link>
                        <div className="rbt-countdown-sections">
                          <div className="rbt-countdown-one bg-variation-black cd-border-style">
                            <Countdown
                              parentClass="countdown justify-content-center"
                              style={2}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              {filteredProducts.map((product, i) => (
                <div
                  key={i}
                  className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-6 col-6 mt--24"
                >
                  <ProductCard8
                    detailsPageUrl="/product-single-furniture"
                    imgHeightClass="rbt-card-img-h-md"
                    product={product}
                    animationOrder={i + 1}
                  />
                </div>
              ))}
              {/* End Single Card  */}
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
