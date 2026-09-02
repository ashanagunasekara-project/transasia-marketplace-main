"use client";

import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard2 from "@/components/product-cards/ProductCard2";
import { bikesData } from "@/data/products/electronics";

import Link from "next/link";

const FILTER_TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

export default function Products1() {
  const [activeTab, setActiveTab] = useState("this-week");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return bikesData;
    return bikesData.filter((product) => product.demoTab?.includes(activeTab));
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-white pt--0 pb--0 p_sm--0 p_md--0">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16">
              <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
                <a
                  href="#"
                  className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
                >
                  Featured
                </a>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                  <span className="rbt-bold--text">Discover Products</span>
                </h2>
              </div>
              <div className="mobile-horizontal-scroll-section">
                <NavEffectTabs
                  parentClassName="rbt-product-nav-section rbt-scroll-trigger rbt-product-nav-var-primary fade_in animation-order-3"
                  options={FILTER_TABS}
                  active={activeTab}
                  setActive={setActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--16 rbt-mobile-row">
          {/* Start Single Card  */}
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-4 col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt--32"
            >
              <ProductCard2 product={product}
                      animationOrder={i + 1}
                    />
            </div>
          ))}
          {/* End Single Card  */}
        </div>
        {/* End Card Area */}
        <div className="rbt-button-area text-center mt--32 mt_sm--16">
          <Link className="rbt-btn" href={`/shop`}>
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
