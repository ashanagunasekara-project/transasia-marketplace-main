"use client";

import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard8 from "@/components/product-cards/ProductCard8";
import { jewelryHalfWidthData } from "@/data/products/jewelry";

import Image from "next/image";

const FILTER_TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

export default function Products3() {
  const [activeTab, setActiveTab] = useState("this-week");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return jewelryHalfWidthData;
    return jewelryHalfWidthData.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-gray-light rbt-rounded--16 rbt-section-gap2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--40">
                <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
                  <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                    Top Rated Items
                  </span>
                  <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                    <span className="rbt-bold--text">Shop By </span> Best Items
                  </h2>
                </div>
                <div className="mobile-horizontal-scroll-section">
                  <NavEffectTabs
                    parentClassName="rbt-product-nav-section rbt-product-nav-var-primary mt--12 rbt-scroll-trigger fade_in animation-order-3"
                    options={FILTER_TABS}
                    active={activeTab}
                    setActive={setActiveTab}
                  />
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              <div className="col-lg-6 col-12 mt--24">
                <div className="row">
                  <div className="col-md-12">
                    <div className="rbt-product-banner rbt-product-banner-style-five rbt-bg-color-gray-one">
                      <div className="rbt-banner-inner">
                        <div className="rbt-product-banner-img">
                          <Image
                            className="rbt-scroll-trigger zoom_in animation-order-1"
                            alt="Ecommerce Product Banner Image"
                            src="/assets/images/product-banner/product-banner-jwellerry-b-01.webp"
                            width={1296}
                            height={1932}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt--24">
                <div className="row row--12 mt_dec--24">
                  {/* Start Single Card  */}
                  {filteredProducts.map((product, i) => (
                    <div
                      key={i}
                      className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-6 col-6 mt--24"
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
              </div>
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
