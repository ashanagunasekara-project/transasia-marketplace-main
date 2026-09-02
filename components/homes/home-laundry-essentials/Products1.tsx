"use client";

import { useMemo, useState } from "react";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard6 from "@/components/product-cards/ProductCard6";
import { laundryAccessoryProducts } from "@/data/products/accessories";

import Image from "next/image";
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
    if (activeTab === "view-all") return laundryAccessoryProducts;
    return laundryAccessoryProducts.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Shop By </span>Best Items
              </h2>
            </div>
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
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-five rbt-bg-color-gray-one">
              <div className="rbt-banner-inner h-100">
                <div className="rbt-product-banner-img h-100">
                  <Image
                    className="rbt-media-cover"
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/banner-img-laundry-vr-01.webp"
                    width={1296}
                    height={1928}
                  />
                </div>
                <div className="rbt-product-banner-content rbt-corner-style rbt-banner-content-lb">
                  <div className="rbt-corner-portion-wrapper">
                    <h6 className="rbt-banner-subtitle mb-0">HURRY SALE 50%</h6>
                    <h3 className="rbt-banner-title mb--8">
                      <span className="rbt-bold--text">Seal The </span>Deal Now
                    </h3>
                    <p className="rbt-banner-description">
                      sitar nostrum conctetur Volupq .
                    </p>
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
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              {filteredProducts.map((product, i) => (
                <div key={i} className="col-lg-6 col-6 mt--24">
                  <ProductCard6 product={product}
                    animationOrder={i + 1}
                  />
                </div>
              ))}
              {/* End Single Card  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
