"use client";
import { heroBanners } from "@/data/heroSlides";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-cosmetic-hero-section-area rbt-bg-color-white">
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
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
        >
          {heroBanners.map((banner, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
                <div className="rbt-banner-inner rbt-rounded--0">
                  <div className="rbt-product-banner-content text-left d-flex align-items-end">
                    <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                      <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                        {banner.subtitle}
                      </h6>
                      <h1 className="rbt-title mb-0 rbt-text-color-white">
                        <span className="rbt-bold--text d-block">
                          {banner.title?.split("\n")[0] ?? ""}
                        </span>
                        {banner.title?.split("\n").slice(1).join(" ") ?? ""}
                      </h1>
                      <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--16 mt_sm--16">
                        <Link className="rbt-btn" href={`/shop-by-categories`}>
                          Shop Collection
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
                    <Image
                      alt="eCommerce Product Banner Background"
                      src={banner.imgSrc || ""}
                      width={3840}
                      height={1500}
                      priority
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-right-center rbt-swiper-pagination-transparent" />
        </Swiper>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
