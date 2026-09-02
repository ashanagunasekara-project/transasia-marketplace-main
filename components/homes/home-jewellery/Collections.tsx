import { jewelryBanners } from "@/data/collections";

import Image from "next/image";
import Link from "next/link";
export default function Collections() {
  return (
    <div className="rbt-component-area rbt-product-banner-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 mt_dec--24">
          {jewelryBanners.map((banner, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 col-12 mt--24 d-flex justify-content-center"
              key={banner.id}
            >
              <div
                className={`rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-h-longer rbt-bottom-position-content rbt-banner-center-style rbt-banner-bgdark-style rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="rbt-banner-inner">
                  <div className="rbt-product-banner-content has-bg-black-overlay pb--40">
                    <div className="rbt-content-section rbt-banner-content-wider">
                      <h6 className="rbt-banner-subtitle mb-0">
                        {banner.subtitle}
                      </h6>
                      <h3 className="rbt-banner-title mb-0">
                        <span className="rbt-bold--text">
                          {banner.title?.split("\n")[0] ?? ""}
                        </span>{" "}
                        {banner.title?.split("\n").slice(1).join(" ") ?? ""}
                      </h3>
                      <p className="rbt-banner-description">
                        {banner.description}
                      </p>
                      <div className="rbt-banner-btn">
                        <Link className="rbt-btn rbt-btn-md" href={`/shop`}>
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rbt-product-banner-img rbt-full-width-img">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src={banner.imgSrc || ""}
                    width={banner.width}
                    height={banner.height}
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
