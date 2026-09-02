"use client";

import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard5 from "@/components/product-cards/ProductCard5";
import { hoodieProducts } from "@/data/products/fashion";

const FILTER_TABS = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "on-sale", label: "On Sale" },
  { id: "view-all", label: "View All" },
];

export default function Products1() {
  const [activeTab, setActiveTab] = useState("best-sellers");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return hoodieProducts;
    return hoodieProducts.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Top Rated Items
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Shop By </span>Best Items
              </h2>
              <div className="mobile-horizontal-scroll-section">
                <NavEffectTabs
                  parentClassName="rbt-product-nav-section mt--12 rbt-scroll-trigger fade_in animation-order-2 justify-content-center"
                  options={FILTER_TABS}
                  active={activeTab}
                  setActive={setActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard5 product={product}
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
