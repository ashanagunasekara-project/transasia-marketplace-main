"use client";
import NavEffectTabs from "@/components/common/ui/NavEffectTabs";
import ProductCard15 from "@/components/product-cards/ProductCard15";
import { electronicsComponentsData } from "@/data/products/electronics";
const TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface ProductsProps {
  productSectionSpace?: string;
}

export default function Products1({ productSectionSpace }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<string>("this-week");
  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return electronicsComponentsData;

    return electronicsComponentsData.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);
  return (
    <div
      className={`rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gapTop ${productSectionSpace}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Popular products</span>
              </h2>
            </div>
            <div className="mobile-horizontal-scroll-section">
              <NavEffectTabs
                parentClassName="rbt-product-nav-section  rbt-scroll-trigger fade_in animation-order-2"
                options={TABS}
                active={activeTab}
                setActive={setActiveTab}
              />
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-6 col-12 mt--24">
            <div className="row">
              <div className="col-md-12">
                <div className="rbt-product-banner rbt-product-banner-style-two h-100 rbt-bg-color-gray-150 border-0">
                  <div className="rbt-banner-inner">
                    <div className="rbt-product-banner-img rbt-full-width-img">
                      <Image
                        alt="Ecommerce Product Banner Image"
                        src="/assets/images/product-banner/product-banner-electro-c-01.webp"
                        width={1296}
                        height={1206}
                      />
                    </div>
                    <div className="rbt-product-banner-content w-100">
                      <div className="rbt-content-section">
                        <h6 className="rbt-banner-subtitle mb-0">
                          SALE UPTO 70%
                        </h6>
                        <h3 className="title mb--16">
                          <span className="rbt-bold--text">
                            Automatic Water Pump Controller <br />
                            Module XHM203
                          </span>
                        </h3>
                      </div>
                      <div className="rbt-banner-btn mt--16">
                        <Link
                          className="rbt-btn rbt-btn-md border-0"
                          href={`/shop`}
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              {filteredProducts.slice(0, 2).map((product, i) => (
                <div key={i} className="col-lg-6 col-6 mt--24">
                  <ProductCard15
                    detailsPageUrl="/product-single-electronics"
                    product={product}
                    animationOrder={i + 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row row--12">
          {/* End Single Card  */}
          {filteredProducts.slice(2).map((product, i) => (
            <div key={i} className="col-lg-3 col-6 mt--24">
              <ProductCard15
                detailsPageUrl="/product-single-electronics"
                product={product}
                animationOrder={i + 1}
              />
            </div>
          ))}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
