"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const heroSliderImages = [
  {
    imgSrc: "slider-hoodie-a-01.webp",
    width: 3840,
    height: 1304,
  },
  {
    imgSrc: "slider-hoodie-a-02.webp",
    width: 3840,
    height: 1310,
  },
];

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="wrapper p-0">
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
          {heroSliderImages.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Link
                href={`/shop`}
                className="rbt-hero-slider-banner position-relative"
              >
                <Image
                  alt="eCommerce Hero Slider"
                  src={`/assets/images/hero-slider-banner/${item.imgSrc}`}
                  width={item.width}
                  height={item.height}
                  priority
                />
              </Link>
            </SwiperSlide>
          ))}
          <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-right-center rbt-swiper-pagination-transparent" />
        </Swiper>
      </div>
    </div>
  );
}
