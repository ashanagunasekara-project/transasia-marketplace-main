"use client";
import { useMemo, useState } from "react";

import ProductCard1 from "@/components/product-cards/ProductCard1";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import { frameProducts } from "@/data/products/fashion";

const TABS = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "on-sale", label: "On Sale" },
  { id: "view-all", label: "View All" },
];

export default function Products1() {
  const [activeTab, setActiveTab] = useState<string>("best-sellers");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return frameProducts;

    return frameProducts.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title d-flex flex-row justify-content-between align-items-center p-0 mb--32 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Deals of The Day</span>
              </h2>
              <div className="mobile-horizontal-scroll-section">
                <NavEffectTabs
                  parentClassName="rbt-product-nav-section rbt-scroll-trigger fade_in animation-order-2"
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
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard1 product={product}
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
