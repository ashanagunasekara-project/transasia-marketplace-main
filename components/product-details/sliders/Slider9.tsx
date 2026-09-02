"use client";

import Image from "next/image";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
const printingServiceImageSrcs = [
  "/assets/images/product-img/printing-service/product-new-c-1.webp",
  "/assets/images/product-img/printing-service/product-new-c-2.webp",
  "/assets/images/product-img/printing-service/product-new-c-3.webp",
  "/assets/images/product-img/printing-service/product-new-c-1.webp",
  "/assets/images/product-img/printing-service/product-new-c-2.webp",
  "/assets/images/product-img/printing-service/product-new-c-3.webp",
];
import "@/lib/lightgallery-styles";
export default function Slider9() {
  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="swiper rbt-arrow-between rbt-product-single-slider-threelayout-activation-v2 rbt-arrow-show-dfl"
      speed={400}
      selector=".rbt-product-single-img"
      zoomFromOrigin={false}
    >
      <Swiper
        {...{
          spaceBetween: 24,
          slidesPerView: 1,
          centeredSlides: true,
          loop: true,
          breakpoints: {
            575: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            992: { slidesPerView: 2 },
            1200: { slidesPerView: 2.5 },
          },

          navigation: {
            prevEl: ".rbt-arrow-left",
            nextEl: ".rbt-arrow-right",
          },
        }}
        modules={[Navigation]}
        className="swiper rbt-arrow-between rbt-product-single-slider-threelayout-activation-v2 rbt-arrow-show-dfl"
      >
        <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
          NEW
        </div>
        <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
          HOT
        </div>
        <div className="swiper-wrapper rbt-store-thumb-main-1">
          {printingServiceImageSrcs.map((src, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="thumbnail">
                <a className="rbt-product-single-img" href={src} data-src={src}>
                  <Image
                    className={`${
                      ["product-new-c-2", "product-new-c-3"].some((file) =>
                        src.includes(file),
                      ) && index >= 4
                        ? "w-200"
                        : "w-100"
                    } rbt-rounded--12`}
                    alt="Product Images"
                    src={src}
                    width={1296}
                    height={750}
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
  );
}
