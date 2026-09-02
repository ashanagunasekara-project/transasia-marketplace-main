"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";

import Image from "next/image";
import Link from "next/link";
import { productBanners } from "@/data/heroSlides";
import { formatCurrency } from "@/lib/price";

const heroBanner = productBanners[0];

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-phone-hero-section-area pt--32 rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          <div className="col-md-8 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-card rbt-product-banner-accessories rbt-scroll-trigger fade_in animation-order-1">
              <div className="rbt-banner-inner rbt-bg-color-brand-50">
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-access-s-01.webp"
                    width={1744}
                    height={1242}
                    priority
                  />
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section rbt-content-less-wider">
                    <p className="rbt-banner-subtitle mb-0">
                      Exclusive Offer Going
                    </p>
                    <h1 className="rbt-banner-title rbt-banner-title-lg mb-0">
                      <span className="rbt-bold--text">GoPro</span> Hero 10
                    </h1>
                    <div className="rbt-pricing-part">
                      {heroBanner.oldPrice ? (
                        <del className="rbt-dis-price-text">
                          {formatCurrency(heroBanner.oldPrice)}
                        </del>
                      ) : null}
                      <div className="d-flex rbt-gap--12 align-items-center">
                        <span className="rbt-price-text offer-price">
                          {formatCurrency(heroBanner.price)}
                        </span>
                        <OfferBadge
                          price={heroBanner.price}
                          oldPrice={heroBanner.oldPrice}
                          variant="minus"
                        />
                      </div>
                    </div>
                    <Link className="rbt-btn rbt-btn-md mt--32" href="/shop">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-banner-four-var-one rbt-banner-four-var-gamepad rbt-card rbt-product-banner-accessories rbt-scroll-trigger fade_in animation-order-1">
              <div className="rbt-banner-inner rbt-bg-color-brand-50">
                <div className="rbt-product-banner-img rbt-full-width-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/product-banner-access-s-sm.webp"
                    width={1296}
                    height={960}
                    priority
                  />
                </div>
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section rbt-content-less-wider">
                    <div className="rbt-product-badge rbt-product-badge-bg-yellow border-rounded mb--0">
                      NEW
                    </div>
                    <h2 className="rbt-banner-title h4 mb--8">
                      <span className="rbt-bold--text d-block">
                        Gamepad For Playing
                      </span>{" "}
                      <span className="rbt-regular--text rbt-text-color-gray-400 d-block">
                        Computer Games
                      </span>
                    </h2>
                    <Link className="rbt-btn rbt-btn-md" href="/shop">
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
