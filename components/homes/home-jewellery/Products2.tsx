"use client";
import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard8 from "@/components/product-cards/ProductCard8";
import { jewelryGridData } from "@/data/products/jewelry";

const FILTER_TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

export default function Products2() {
  const [activeTab, setActiveTab] = useState("this-week");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return jewelryGridData;
    return jewelryGridData.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div
      id="rbt-product-block-06"
      className="rbt-component-area rbt-products-area rbt-bg-color-white"
    >
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-gray-light rbt-rounded--16 rbt-section-gap2">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Shop By <span className="rbt-bold--text"> Best Items</span>
                </h2>
                <div className="mobile-horizontal-scroll-section">
                  <NavEffectTabs
                    parentClassName="rbt-product-nav-section rbt-product-nav-var-primary rbt-scroll-trigger fade_in animation-order-2 justify-content-center"
                    options={FILTER_TABS}
                    active={activeTab}
                    setActive={setActiveTab}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              {filteredProducts.map((product, i) => (
                <div
                  key={i}
                  className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
                >
                  <ProductCard8
                    imgBgColor="rbt-bg-color-white"
                    product={product}
                    animationOrder={i + 1}
                  />
                </div>
              ))}
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
