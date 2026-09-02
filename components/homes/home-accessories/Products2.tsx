"use client";
import { useMemo, useState } from "react";
import ProductCard8 from "@/components/product-cards/ProductCard8";
import NavEffectTabs from "../../common/ui/NavEffectTabs";
import { accessoriesProducts2 } from "@/data/products/accessories";
import Image from "next/image";
import Link from "next/link";

const TABS = [
  { id: "this-week", label: "This Week" },
  { id: "this-month", label: "This Month" },
  { id: "this-year", label: "This Year" },
  { id: "view-all", label: "All Time" },
];

export default function Products2() {
  const [activeTab, setActiveTab] = useState<string>("this-week");

  const filteredProducts = useMemo(() => {
    if (activeTab === "view-all") return accessoriesProducts2;

    return accessoriesProducts2.filter((product) =>
      product.demoTab?.includes(activeTab),
    );
  }, [activeTab]);

  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gap2Bottom">
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
                parentClassName="rbt-product-nav-section rbt-product-nav-var-primary rbt-scroll-trigger fade_in animation-order-2 justify-content-center"
                options={TABS}
                active={activeTab}
                setActive={setActiveTab}
              />
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24">
            <div className="rbt-product-banner rbt-product-banner-style-two h-100 rbt-bg-color-gray-150 border-0">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-img rbt-full-width-img">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-access-a-1.webp"
                    width={624}
                    height={944}
                  />
                </div>
                <div className="rbt-product-banner-content w-100">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle mb-0">SALE UPTO 70%</h6>
                    <h4 className="rbt-banner-title title-capitalize-text mb-0">
                      <span className="rbt-bold--text">Seal The </span>Deal Now
                    </h4>
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
          {/* End Single Card  */}
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard8
                detailsPageUrl="/product-single-accessories"
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
  );
}
