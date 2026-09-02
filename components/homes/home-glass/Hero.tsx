"use client";
import { productBanners3 } from "@/data/collections";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-glass-hero-products-banner-area rbt-bg-color-white rbt-section-gap2Bottom pt--24 rbt-section-gap2Bottom">
      <div className="rbt-full-width-wrapper">
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
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
        >
          {productBanners3.map((banner, index) => (
            <SwiperSlide className="swiper-slide" key={banner.id}>
              {/* Start Product Banner Area */}
              <div className="rbt-product-banner rbt-product-banner-style-five rbt-product-banner-style-five-lg rbt-bg-color-gray-one">
                <div className="rbt-banner-inner">
                  <div
                    className={`rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-${index + 1}`}
                  >
                    <Image
                      alt="Ecommerce Product Banner Image"
                      src={banner.imgSrc || ""}
                      width={banner.width}
                      height={banner.height}
                      priority
                    />
                  </div>
                  <div className="rbt-product-banner-content rbt-corner-style rbt-banner-content-lb">
                    <div className="rbt-corner-portion-wrapper rbt-bg-color-white rbt-slideshow-content-inner effect_fadeindown">
                      <h4 className="rbt-banner-subtitle mb-0 fw-normal">
                        {banner.subtitle}
                      </h4>
                      <h2 className="rbt-banner-title mb-0">
                        <span className="rbt-bold--text d-block">
                          {banner.title?.split("\n")[0] ?? ""}
                        </span>
                        {banner.title?.split("\n").slice(1).join(" ") ?? ""}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Product Banner Area */}
            </SwiperSlide>
          ))}
          <div className="rbt-swiper-arrow-wrapper-style-one rbt-swiper-arrow-wrapper-style-one-col-style rbt-swiper-arrow-wrapper-style-one-sm-style rbt-bg-color-white">
            <ul>
              <li>
                <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-gray rbt-arrow-md rbt-arrow-brand">
                  <div className="custom-overflow">
                    <i className="rbt-icon fa-regular fa-arrow-left" />
                    <i className="rbt-icon-top fa-regular fa-arrow-left" />
                  </div>
                </div>
              </li>
              <li>
                <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray rbt-arrow-md rbt-arrow-brand">
                  <div className="custom-overflow">
                    <i className="rbt-icon fa-regular fa-arrow-right" />
                    <i className="rbt-icon-top fa-regular fa-arrow-right" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
        </Swiper>
      </div>
    </div>
  );
}
