"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const productImages = [
  "/assets/images/product-img/beauty-product/beauty-product-a-03.webp",
  "/assets/images/product-img/beauty-product/beauty-product-a-04.webp",
  "/assets/images/product-img/beauty-product/beauty-product-a-01.webp",
  "/assets/images/product-img/beauty-product/beauty-product-a-02.webp",
  "/assets/images/product-img/beauty-product/beauty-product-a-03.webp",
  "/assets/images/product-img/beauty-product/beauty-product-a-04.webp",
  "/assets/images/product-img/beauty-product/beauty-product-a-01.webp",
  "/assets/images/product-img/beauty-product/beauty-product-a-02.webp",
];
import "@/lib/lightgallery-styles";
export default function Slider3() {
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
            modules={[Thumbs, Navigation]}
          >
            <div className="swiper-wrapper rbt-store-thumb-main-1">
              {productImages.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                    index + 1
                  }`}
                >
                  <div className="thumbnail">
                    <a
                      className="rbt-product-single-img"
                      href={src}
                      data-src={src}
                    >
                      <Image
                        className={`${
                          src.includes("a-02") ? "w-200" : "w-100"
                        } rbt-rounded--12`}
                        alt="Product Images"
                        src={src}
                        width={848}
                        height={848}
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
          className="swiper rbt-product-thumb-slider-twolayout-activation mt--24 mt_sm--12 mlr--0"
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
          modules={[Thumbs, FreeMode]}
          onSwiper={setSwiperThumb}
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {productImages.map((src, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
              >
                <button className="thumbnail d-block position-relative">
                  <span className="rbt-thumb-img-sm">
                    <Image
                      className="w-100 rbt-rounded--4"
                      alt="Product Images"
                      src={src}
                      width={848}
                      height={848}
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
