"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const bagImageSrcs = [
  "/assets/images/product-img/fashion/ladies-bag-a-01.webp",
  "/assets/images/product-img/fashion/ladies-bag-a-02.webp",
  "/assets/images/product-img/fashion/ladies-bag-a-03.webp",
  "/assets/images/product-img/fashion/ladies-bag-a-04.webp",
  "/assets/images/product-img/fashion/ladies-bag-a-05.webp",
];
import "@/lib/lightgallery-styles";
export default function Slider7() {
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="rbt-medea-lg-img-area">
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="swiper rbt-arrow-between rbt-product-single-slider-twolayout-activation rbt-arrow-show-dfl"
          speed={400}
          selector=".rbt-product-single-img"
          zoomFromOrigin={false}
        >
          <Swiper
            className="swiper rbt-arrow-between rbt-product-single-slider-twolayout-activation rbt-arrow-show-dfl"
            {...{
              spaceBetween: 16,
              breakpoints: {
                575: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 2 },
              },
              navigation: {
                prevEl: ".rbt-arrow-left",
                nextEl: ".rbt-arrow-right",
              },
              thumbs: {
                swiper: swiperThumb,
              },
            }}
            modules={[FreeMode, Thumbs, Navigation]}
          >
            <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
              NEW
            </div>
            <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
              HOT
            </div>
            <div className="swiper-wrapper rbt-store-thumb-main-1">
              {bagImageSrcs.map((src, index) => (
                <SwiperSlide
                  className="swiper-slide rbt-scroll-trigger fade_in animation-order-1"
                  key={index}
                >
                  <div className="thumbnail">
                    <a
                      className="rbt-product-single-img"
                      href={src}
                      data-src={src}
                    >
                      <Image
                        className={`w-100 rbt-rounded--12`}
                        alt="Product Images"
                        src={src}
                        width={848}
                        height={1150}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="rbt-swiper-arrow rbt-arrow-left">
              <div className="custom-overflow">
                <i className="rbt-icon fa-regular fa-arrow-left" />
                <i className="rbt-icon-top fa-regular fa-arrow-left" />
              </div>
            </div>
            <div className="rbt-swiper-arrow rbt-arrow-right">
              <div className="custom-overflow">
                <i className="rbt-icon fa-regular fa-arrow-right" />
                <i className="rbt-icon-top fa-regular fa-arrow-right" />
              </div>
            </div>
          </Swiper>
        </LightGallery>
      </div>
      <div className="rbt-thumb-slide-part w-48">
        <Swiper
          {...{
            spaceBetween: 16,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
              0: {
                direction: "horizontal",
                slidesPerView: 4,
              },
              992: {
                direction: "horizontal",
                slidesPerView: 4,
              },
            },
          }}
          onSwiper={setSwiperThumb}
          modules={[FreeMode, Thumbs]}
          className="swiper rbt-product-thumb-slider-twolayout-activation mt--24 mt_sm--12 mlr--0"
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {bagImageSrcs.map((elm, i) => (
              <SwiperSlide
                key={i}
                className="swiper-slide rbt-scroll-trigger fade_in animation-order-1"
              >
                <button className="thumbnail d-block position-relative">
                  <span className="rbt-thumb-img-sm">
                    <Image
                      className="w-100 rbt-rounded--4"
                      alt="Product Images"
                      src={elm}
                      width={848}
                      height={1150}
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
