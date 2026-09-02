"use client";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard6 from "@/components/product-cards/ProductCard6";
import { glassProducts2 } from "@/data/products/glass";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
const TABS = [
  { id: "best-sellers", label: "Best Sellers" },
  { id: "new-arrivals", label: "New Arrivals" },
  { id: "on-sale", label: "On Sale" },
  { id: "view-all", label: "View All" },
];
export default function Products2() {
  const [activeTab, setActiveTab] = useState<string>("best-sellers");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return glassProducts2;

    return glassProducts2.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div
      id="rbt-product-block-07"
      className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
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
                parentClassName="rbt-product-nav-section rbt-scroll-trigger fade_in animation-order-2"
                options={TABS}
                active={activeTab}
                setActive={setActiveTab}
              />
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-md-6 col-12 mt--24">
            <div className="row h-100">
              <div className="col-md-12">
                <div className="rbt-product-banner rbt-product-banner-style-five rbt-bg-color-gray-one rbt-scroll-trigger fade_in animation-order-1 h-100">
                  <div className="rbt-banner-inner h-100">
                    <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-1">
                      <Image
                        alt="Ecommerce Product Banner Image"
                        src="/assets/images/product-banner/product-banner-glass-b-1.webp"
                        width={1296}
                        height={1928}
                      />
                    </div>
                    <div className="rbt-product-banner-content rbt-corner-style rbt-banner-content-lb">
                      <div className="rbt-corner-portion-wrapper">
                        <h6 className="rbt-banner-subtitle mb-0">
                          HURRY SALE 50%
                        </h6>
                        <h2 className="rbt-banner-title mb-0">
                          <span className="rbt-bold--text">Seal The </span>Deal
                          Now
                        </h2>
                        <div className="rbt-banner-btn">
                          <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                            Shop Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 mt--24">
            <div className="row row--12 mt_dec--32">
              {/* Start Single Card  */}
              {filteredProducts.map((product, i) => (
                <div
                  key={i}
                  className="col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-6 col-6 mt--32"
                >
                  <ProductCard6
                    imgBgcolor="rbt-bg-color-white"
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
  );
}
