"use client";
import { banners } from "@/data/heroSlides";

import { Autoplay, EffectFade, Navigation, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-jewellery-hero-section-area rbt-bg-color-white">
      <div className="container-fluid p-0">
        {/* Start Product Banner Area */}
        <Swiper
          className="swiper rbt-jwellery-hero-activation-1 rbt-arrow-between rbt-arrow-show-dfl rbt-slideshow"
          {...{
            slidesPerView: 1,
            spaceBetween: 24,
            parallax: true,
            speed: 1000,
            effect: "fade",
            fadeEffect: {
              crossFade: true,
            },
            loop: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
            navigation: {
              prevEl: ".rbt-arrow-left",
              nextEl: ".rbt-arrow-right",
            },
            breakpoints: {
              575: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            },
          }}
          modules={[Autoplay, Navigation, EffectFade, Parallax]}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className={`rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-${index + 1}`}
              >
                <div className="rbt-banner-inner rbt-rounded--0">
                  <div className="rbt-product-banner-content text-center d-flex justify-content-center align-items-end">
                    <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                      <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
                        {banner.subtitle}
                      </h6>
                      <h1 className="rbt-title mb-0 rbt-text-color-white rbt-text-capitalize">
                        <span className="rbt-bold--text d-block">
                          {banner.title?.split(" ").slice(0, 4).join(" ")}
                        </span>
                        {banner.title?.split(" ").slice(4).join(" ")}
                      </h1>
                      <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--16 mt_sm--16 justify-content-center">
                        <Link className="rbt-btn" href={`/shop-by-categories`}>
                          Shop Collection
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`rbt-product-img rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                  >
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
          <div className="rbt-swiper-arrow rbt-arrow-transparent rbt-arrow-left">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-left" />
              <i className="rbt-icon-top fa-regular fa-arrow-left" />
            </div>
          </div>
          <div className="rbt-swiper-arrow rbt-arrow-transparent rbt-arrow-right">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-right" />
              <i className="rbt-icon-top fa-regular fa-arrow-right" />
            </div>
          </div>
        </Swiper>
      </div>
      {/* End Product Banner Area */}
    </div>
  );
}
