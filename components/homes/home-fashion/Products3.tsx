"use client";
import { useMemo, useState } from "react";

import ProductCard1 from "@/components/product-cards/ProductCard1";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import { fashionProducts3 } from "@/data/products/fashion";

const TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

export default function Products3() {
  const [activeTab, setActiveTab] = useState<string>("this-week");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return fashionProducts3;

    return fashionProducts3.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div
      id="rbt-product-block-03"
      className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Top Selling </span>Items
              </h2>
              <p className="description rbt-scroll-trigger fade_in animation-order-2">
                Discover our most popular fashion picks, curated from the
                best-selling items this season. From everyday essentials to
                standout statement pieces.
              </p>
              <div className="mobile-horizontal-scroll-section">
                <NavEffectTabs
                  parentClassName="rbt-product-nav-section rbt-scroll-trigger fade_in animation-order-3 justify-content-center"
                  options={TABS}
                  active={activeTab}
                  setActive={setActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {/* Start Single Card  */}
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 col-12 mt--24"
            >
              <ProductCard1
                detailsPageUrl="/product-single-fashion"
                product={product}
                key={i}
                animationOrder={i + 1}
              />
            </div>
          ))}

          {/* End Single Card  */}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
