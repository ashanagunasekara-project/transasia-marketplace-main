"use client";

import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard1 from "@/components/product-cards/ProductCard1";
import { shoeProducts } from "@/data/products/fashion";

const FILTER_TABS = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "trending-items", label: "Trending Items" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "on-sale", label: "On Sale" },
  { id: "view-all", label: "View All" },
];

export default function Products1() {
  const [activeTab, setActiveTab] = useState("best-sellers");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return shoeProducts;
    return shoeProducts.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
              >
                The Best Seller
              </a>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Find Your
                <span className="rbt-bold--text ml--4">Favorite Items</span>
              </h2>
              <div className="mobile-horizontal-scroll-section">
                <NavEffectTabs
                  parentClassName="rbt-product-nav-section rbt-scroll-trigger fade_in animation-order-3 justify-content-center"
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
          {/* Start Single Card  */}
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 col-12 mt--24"
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
