"use client";
import { WaveLargeIcon } from "../../svg-icons";
import Countdown from "@/components/common/ui/Countdown";
import MagneticButton from "@/components/common/ui/MagneticButton";
import ProductCard10 from "@/components/product-cards/ProductCard10";
import { electronicsHoverVideoData } from "@/data/products/electronics";
import Link from "next/link";
import {
  resolveImageUrl,
  type StorefrontPromotionalBannerItem,
} from "@/lib/api";

const defaultPowerUpBanner: StorefrontPromotionalBannerItem = {
  subtitle: "Power Up Deals",
  titleBold: "New Device",
  titleRegular: "coming Soon",
  secondarySubtitle: "Land major deals",
  imgSrc: "/assets/images/product-banner/product-banner-img-01.webp",
  mobileImgSrc: "/assets/images/product-banner/product-banner-img-01.webp",
  btnText: "SHOP NOW",
  link: "/shop",
};

export default function Products2({
  powerUpBanner,
  showTodaysBestDeals = false,
}: {
  powerUpBanner?: StorefrontPromotionalBannerItem;
  showTodaysBestDeals?: boolean;
}) {
  const banner = powerUpBanner || defaultPowerUpBanner;
  const desktopImg = resolveImageUrl(banner.imgSrc);
  const mobileImg = resolveImageUrl(banner.mobileImgSrc || banner.imgSrc);

  return (
    <div
      id="rbt-product-block-02"
      className="rbt-component-area rbt-categories-area pt_lg--100 rbt-section-gap2 rbt-bg-color-white"
    >
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--32 mt_sm--0">
            <div className="rbt-product-banner rbt-product-banner-style-one">
              <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-1">
                <picture>
                  {banner.mobileImgSrc && (
                    <source
                      media="(max-width: 767px)"
                      srcSet={mobileImg}
                    />
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={banner.titleRegular || "Ecommerce Product Banner Image"}
                    src={desktopImg}
                    width={435}
                    height={250}
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </picture>
              </div>
              <div className="rbt-banner-inner rbt-curved-style-box">
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section rbt-scroll-trigger fade_in animation-order-1">
                    <h6 className="rbt-banner-subtitle mb-0">
                      {banner.subtitle}
                    </h6>
                    <h2 className="rbt-banner-title title-capitalize-text mb-0">
                      <span className="rbt-bold--text">
                        {banner.titleBold}{" "}
                      </span>
                      {banner.titleRegular}
                    </h2>
                    <h3 className="rbt-secondary-subtitle mb-0">
                      {banner.secondarySubtitle}
                    </h3>
                  </div>
                  <div className="rbt-banner-btn rbt-magnet-area rbt-banner-btn rbt-scroll-trigger fade_in animation-order-2">
                    <MagneticButton
                      as={Link}
                      className="rbt-btn rbt-btn-round"
                      href={banner.link || `/shop`}
                    >
                      <i className="fa-solid fa-arrow-up-right" />{" "}
                      {banner.btnText || "SHOP NOW"}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Banner Area */}

        {/* Start Today's Best Deals Area (Temporarily hidden when showTodaysBestDeals is false) */}
        {showTodaysBestDeals && (
          <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
            <div className="row rbt-section-gap2Top pt_sm--0 pt_md--80 mt--16">
              <div className="col-lg-12">
                <div className="rbt-component-section-title rbt-border-color-primary rbt-bg-color-gray-light">
                  <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                    <span className="rbt-bold--text">Today’s Best Deals</span>
                  </h4>
                  <span className="rbt-fshape-right-portion">
                    <WaveLargeIcon />
                  </span>
                </div>
                <div className="rbt-offer-countdown-section rbt-offer-countdown-section-primary">
                  <h6 className="rbt-sm-title">Hurry up! Offer ends in</h6>
                  <div className="rbt-countdown-section rbt-rounded--0 d-flex justify-content-center align-items-center p-0">
                    <div className="rbt-countdown-one bg-variation-black">
                      <Countdown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rbt-fshape-box rbt-bg-color-gray-light rbt-border-color-primary">
              {/* Start Card Area */}
              <div className="row row--12 mt_dec--24 rbt-mobile-row">
                {electronicsHoverVideoData.map((product) => (
                  <div
                    key={product.id}
                    className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
                  >
                    <ProductCard10
                      detailsPageUrl="/product"
                      product={product}
                    />
                  </div>
                ))}
              </div>
              {/* End Card Area */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
