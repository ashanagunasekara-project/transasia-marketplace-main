"use client";

import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard2 from "@/components/product-cards/ProductCard2";
import { skateProducts } from "@/data/products/sports";

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
    if (activeTab === "view-all") return skateProducts;
    return skateProducts.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-light">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--48 mb_sm--24 mb_md--32 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Shop By <span className="rbt-bold--text">Best Items</span>
              </h2>
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
        <div className="row row--16 mt_dec--32 rbt-mobile-row">
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
