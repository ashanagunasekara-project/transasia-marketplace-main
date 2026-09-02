import { beddingBanners } from "@/data/collections";

import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area rbt-bg-color-white mt--20">
      <div className="rbt-full-width-wrapper">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          {beddingBanners.map((item, index) => (
            <div
              className="col-lg-6 col-12 mt--24 d-flex justify-content-center"
              key={index}
            >
              <div
                className={`rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-h-longer-two rbt-bottom-position-content rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="rbt-banner-inner">
                  <div className="rbt-product-banner-content has-bg-black-overlay pb--40">
                    <div className="rbt-content-section rbt-content-section-full-wider">
                      <h6 className="rbt-banner-subtitle mb-0">
                        Exclusive Offer Going
                      </h6>
                      <h2 className="rbt-title h1 mb-0 rbt-text-color-white rbt-text-regular rbt-text-capitalize">
                        <span className="rbt-bold--text d-block">
                          {item.title?.split("\n")[0] ?? ""}
                        </span>
                        {item.title?.split("\n").slice(1).join(" ") ?? ""}
                      </h2>
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
                    width={1784}
                    height={1113}
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
