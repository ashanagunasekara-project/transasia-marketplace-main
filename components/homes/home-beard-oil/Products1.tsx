"use client";

import { useMemo, useState } from "react";
import ProductCard14 from "@/components/product-cards/ProductCard14";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import { beardOilProducts } from "@/data/products/fashion";

const FILTER_TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

export default function Products1() {
  const [activeTab, setActiveTab] = useState("this-week");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return beardOilProducts;

    return beardOilProducts.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gapTop">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--40">
              <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
                <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                  Top Rated Items
                </span>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                  <span className="rbt-bold--text">Shop By</span> Best Items
                </h2>
              </div>
              <div className="mobile-horizontal-scroll-section">
                <NavEffectTabs
                  parentClassName="rbt-product-nav-section mt--12 rbt-scroll-trigger fade_in animation-order-3"
                  options={FILTER_TABS}
                  active={activeTab}
                  setActive={setActiveTab}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="container">
          <div className="row row--12 mt_dec--24">
            {/* Start Single Card  */}
            {filteredProducts.map((product, i) => (
              <div
                key={i}
                className="col-lg-3 col-xl-3 col-xxl-3 col-md-4 col-6 mt--24"
              >
                <ProductCard14 product={product}
                      animationOrder={i + 1}
                    />
              </div>
            ))}
            {/* End Single Card  */}
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
