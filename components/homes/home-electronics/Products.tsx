"use client";
import { useMemo, useState } from "react";

import ProductCard9 from "@/components/product-cards/ProductCard9";
import NavEffectTabs from "../../common/ui/NavEffectTabs";
import { electronicsCardData } from "@/data/products/electronics";

const TABS = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "on-sale", label: "On Sale" },
  { id: "view-all", label: "View All" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("best-sellers");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return electronicsCardData;

    return electronicsCardData.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div
      id="rbt-product-block-01"
      className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-gray-light"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title d-flex flex-row justify-content-between align-items-center p-0 mb--32 mb_sm--16 border-0">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Deals of The Day</span>
              </h4>
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
        <div className="row row--12 mt_dec--24">
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard9
                detailsPageUrl="/product-single-electronics"
                product={product}
                animationOrder={i + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
