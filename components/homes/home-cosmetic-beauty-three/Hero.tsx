"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const heroSlides = [
  "/assets/images/hero-slider-banner/slider-cb-01.webp",
  "/assets/images/hero-slider-banner/slider-cb-02.webp",
  "/assets/images/hero-slider-banner/slider-cb-3.webp",
  "/assets/images/hero-slider-banner/slider-cb-4.webp",
];
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="container-fluid p-0">
        {/* Start Product Banner Area */}
        <div className="row row--0">
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
              {heroSlides.map((imgSrc, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <Link href={`/shop`} className="rbt-hero-slider-banner">
                    <Image
                      alt="eCommerce Hero Slider"
                      src={imgSrc}
                      width={3840}
                      height={1384}
                      priority
                    />
                  </Link>
                </SwiperSlide>
              ))}
              <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-bottom-center" />
            </Swiper>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
