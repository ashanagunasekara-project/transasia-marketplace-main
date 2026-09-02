"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
const bannerImages = [
  {
    src: "/assets/images/product-banner/product-banner-img-electro-a-01.webp",
    width: 3840,
    height: 1198,
  },
  {
    src: "/assets/images/product-banner/product-banner-img-electro-a-02.webp",
    width: 3840,
    height: 1200,
  },
  {
    src: "/assets/images/product-banner/product-banner-img-electro-a-03.webp",
    width: 3840,
    height: 1198,
  },
  {
    src: "/assets/images/product-banner/product-banner-img-electro-a-04.webp",
    width: 3840,
    height: 1200,
  },
];
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
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
          {bannerImages.map((image, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <Link href={`/shop-by-category`}>
                <figure>
                  <Image
                    alt="Banner Image"
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    priority
                  />
                </figure>
              </Link>
            </SwiperSlide>
          ))}
          <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one rbt-swiper-pagination-right-center rbt-swiper-pagination-transparent" />
        </Swiper>
      </div>
      {/* End Product Banner Area */}
    </div>
  );
}
