"use client";
import { fashionBanners } from "@/data/collections";

import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area rbt-bg-color-white">
      <div className="rbt-full-width-wrapper">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          {fashionBanners.map((item, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24 d-flex justify-content-center"
              key={index}
            >
              <div
                className={`rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-h-longer-two rbt-bottom-position-content rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="rbt-banner-inner">
                  <div className="rbt-product-banner-content has-bg-black-overlay pb--40">
                    <div className="rbt-content-section rbt-banner-content-wider">
                      <h6 className="rbt-banner-subtitle mb-0">
                        {item.subtitle}
                      </h6>
                      <h3 className="rbt-banner-title mb-0">
                        <span className="rbt-bold--text">{item.title}</span>
                      </h3>
                      <div className="rbt-banner-btn">
                        <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                          Shop Collection
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-product-banner-img rbt-full-width-img">
                  <Image
                    className="rbt-inner-img"
                    alt="Ecommerce Product Banner Image"
                    src={item.imgSrc || ""}
                    width={868}
                    height={1300}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
