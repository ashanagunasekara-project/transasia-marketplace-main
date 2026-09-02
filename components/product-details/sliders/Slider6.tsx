"use client";
import Image from "next/image";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
const animalImages = [
  "/assets/images/product-single/animal-accessorries/animal-accessorries-01.webp",
  "/assets/images/product-single/animal-accessorries/animal-accessorries-02.webp",
  "/assets/images/product-single/animal-accessorries/animal-accessorries-03.webp",
  "/assets/images/product-single/animal-accessorries/animal-accessorries-01.webp",
  "/assets/images/product-single/animal-accessorries/animal-accessorries-02.webp",
  "/assets/images/product-single/animal-accessorries/animal-accessorries-03.webp",
];
import "@/lib/lightgallery-styles";
export default function Slider6() {
  return (
    <LightGallery
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="swiper rbt-arrow-between rbt-product-single-slider-fourlayout-activation rbt-arrow-show-dfl"
      speed={400}
      selector=".rbt-product-single-img"
      zoomFromOrigin={false}
    >
      <Swiper
        {...{
          spaceBetween: 24,
          slidesPerView: 1,
          loop: true,
          breakpoints: {
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          },

          navigation: {
            prevEl: ".rbt-arrow-left",
            nextEl: ".rbt-arrow-right",
          },
        }}
        modules={[Navigation]}
        className="swiper rbt-arrow-between rbt-product-single-slider-fourlayout-activation rbt-arrow-show-dfl"
      >
        <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
          NEW
        </div>
        <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position rbt-scroll-trigger fade_in animation-order-1">
          HOT
        </div>
        <div className="swiper-wrapper rbt-store-thumb-main-1">
          {animalImages.map((imgPath, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="thumbnail">
                <a
                  className="rbt-product-single-img"
                  href={imgPath}
                  data-src={imgPath}
                >
                  <Image
                    className={`rbt-rounded--12 ${
                      index >= 4 ? "w-200" : "w-100"
                    }`}
                    alt="Product Images"
                    src={imgPath}
                    width={1280}
                    height={1738}
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
