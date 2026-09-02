"use client";
import MagneticButton from "@/components/common/ui/MagneticButton";
import Image from "next/image";
import Link from "next/link";
import { productBanners } from "@/data/collections";
import { formatCurrency } from "@/lib/price";

const banner = productBanners[0];

export default function Banner() {
  return (
    <div className="rbt-component-area rbt-banner-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="rbt-static-banner rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100">
          <div className="row row--0 justify-content-end">
            <div className="col-md-6 col-12 order-2 order-md-1">
              <div className="rbt-banner-content text-left align-items-start">
                <h6 className="rbt-banner-subtitle-two h4 mb-0">
                  Exclusive Offer Going
                </h6>
                <h2 className="rbt-title mb-0 h1 rbt-text-regular">
                  <span className="rbt-bold--text d-block">
                    Enjoy up to
                    <span className="rbt-text-color-secondary">
                      50% off
                    </span>{" "}
                  </span>
                  on select collections
                </h2>
                <p className="desc h4 rbt-text-color-gray-700 mt--8 mb--0 rbt-font-secondary">
                  Limited-Time Offer – Don’t Miss Out
                </p>
                <div className="pricing-part mt--24">
                  {banner.oldPrice ? (
                    <del className="price-text d-block h6 mb--16 rbt-text-semibold">
                      {formatCurrency(banner.oldPrice)}
                    </del>
                  ) : null}
                </div>
                <div className="pricing-part">
                  <span className="price-text d-block h3 mb--0 rbt-text-semibold rbt-text-color-primary">
                    {formatCurrency(banner.price)}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 order-1 order-md-2">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto h-100">
                <MagneticButton
                  as={Link}
                  href={`/shop`}
                  className="rbt-btn rbt-btn-round position-absolute"
                  data-rbt-position-vertical={40}
                  data-rbt-position-horigental={45}
                >
                  <i className="fa-solid fa-arrow-up-right" /> Shop Now
                </MagneticButton>
                <Image
                  className="rbt-media-cover"
                  alt="Ecommerce Product Banner Image"
                  src="/assets/images/product-banner/banner-img-bedding-sm-03.webp"
                  width={1406}
                  height={866}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
