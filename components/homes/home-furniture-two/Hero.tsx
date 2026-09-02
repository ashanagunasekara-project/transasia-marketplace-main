"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";

import { furnitureBanners } from "@/data/heroSlides";
import { formatCurrency } from "@/lib/price";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area pt--24 rbt-bg-color-white">
      <div className="rbt-sm-wider-container">
        {/* Start Product Banner Area */}
        <div className="row row--12">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
            <Swiper
              className="swiper rbt-hero-banner-activation-3 rbt-arrow-between rbt-arrow-show-dfl rbt-slideshow"
              {...{
                slidesPerView: 1,
                spaceBetween: 24,
                grabCursor: true,
                loop: true,
                speed: 500,
                draggable: true,
                effect: "fade",
                fadeEffect: {
                  crossFade: true,
                },
                autoplay: {
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                },
                pagination: {
                  el: ".rbt-swiper-pagination, .abc",
                  clickable: true,
                },
                navigation: {
                  prevEl: ".rbt-arrow-left",
                  nextEl: ".rbt-arrow-right",
                },
                breakpoints: {
                  575: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  992: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  1200: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                },
              }}
              modules={[Pagination, Navigation, Autoplay, EffectFade]}
            >
              {furnitureBanners.map((banner, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-banner-four-var-two rbt-bg-color-extra-five">
                    <div className="rbt-banner-inner">
                      <div className="rbt-product-banner-content rbt-product-banner-content-var-one">
                        <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                          <h6 className="rbt-banner-subtitle-two h4 mb-0">
                            {banner.subtitle}
                          </h6>
                          <h2 className="rbt-banner-title rbt-banner-title-lg mb-0 rbt-text-capitalize">
                            <span className="rbt-bold--text d-block">
                              {banner.title?.split("\n")[0] ?? ""}
                            </span>
                            {banner.title?.split("\n").slice(1).join(" ") ?? ""}
                          </h2>
                          <div className="rbt-pricing-part d-flex align-items-center flex-row">
                            <p className="rbt-price-desc-text">Starting From</p>
                            <span className="rbt-price-text offer-price">
                              {formatCurrency(banner.price)}
                            </span>
                            <OfferBadge price={banner.price} oldPrice={banner.oldPrice} />
                          </div>
                          <div className="rbt-banner-btn">
                            <Link className="rbt-btn" href={`/shop`}>
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`rbt-product-img rbt-scroll-trigger zoom_in animation-order-${
                          index + 1
                        }`}
                      >
                        <Image
                          alt="eCommerce Product Banner Background"
                          src={banner.imgSrc || ""}
                          width={2900}
                          height={1324}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="rbt-swiper-arrow-wrapper-style-one rbt-bg-color-white d-sm-none d-md-block">
                <nav className="rbt-nav-effect-activation text-center">
                  <ul className="rbt-pagination rbt-pagination-bg-brand d-inline-flex has-hover-effect">
                    <li>
                      <a href="#" className="rbt-swiper-arrow rbt-arrow-left">
                        <i className="fa-regular fa-arrow-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="rbt-swiper-arrow rbt-arrow-right">
                        <i className="fa-regular fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                  <div className="rbt-bg-highlight rbt-pagination-bg-highlight rbt-pagination-bg-highlight-brand" />
                </nav>
              </div>
            </Swiper>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
