"use client";

import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard16 from "@/components/product-cards/ProductCard16";
import { electronicsProducts4 } from "@/data/products/electronics";

const FILTER_TABS = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "on-sale", label: "On Sale" },
  { id: "view-all", label: "View All" },
];

export default function Products1() {
  const [activeTab, setActiveTab] = useState("best-sellers");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return electronicsProducts4;
    return electronicsProducts4.filter((product) =>
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
                  options={FILTER_TABS}
                  active={activeTab}
                  setActive={setActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard16
                detailsPageUrl="/product-single-electronics"
                product={product}
              />
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
