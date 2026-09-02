"use client";
import OfferBadge from "@/components/common/ui/OfferBadge";

import { swiperBanners } from "@/data/heroSlides";
import { formatCurrency } from "@/lib/price";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-hijab-hero-section-area rbt-bg-color-white">
      <div className="container-fluid p-0">
        {/* Start Product Banner Area */}
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
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
        >
          {swiperBanners.map((banner, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
                <div className="rbt-banner-inner rbt-rounded--0">
                  <div className="rbt-product-banner-content rbt-product-banner-content-white-var text-left d-flex align-items-end">
                    <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                      <h6 className="rbt-banner-subtitle-two rbt-text-color-white mb-0">
                        {banner.subtitle}
                      </h6>
                      <h2 className="rbt-banner-title rbt-banner-title-lg mb-0 rbt-text-color-white rbt-text-capitalize">
                        <span className="rbt-bold--text d-block">
                          {banner.title}
                        </span>
                      </h2>
                      <div className="rbt-pricing-part d-flex align-items-center flex-row">
                        <p className="rbt-price-desc-text rbt-text-color-white">
                          Start From
                        </p>
                        <span className="rbt-price-text m-0 offer-price rbt-text-color-gray-200">
                          {formatCurrency(banner.price)}
                        </span>
                        <OfferBadge price={banner.price} oldPrice={banner.oldPrice} variant="off" />
                      </div>
                      <div className="rbt-banner-btn">
                        <Link className="rbt-btn" href={`/shop`}>
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
                    <Image
                      alt="eCommerce Product Banner Background"
                      src={banner.imgSrc || ""}
                      width={3840}
                      height={1260}
                      priority
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-right-center rbt-swiper-pagination-transparent" />
        </Swiper>
      </div>
      {/* End Product Banner Area */}
    </div>
  );
}
