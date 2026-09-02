"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const imageUrls = [
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
  "/assets/images/product-img/fashion/product-a-03.webp",
  "/assets/images/product-img/fashion/product-a-04.webp",
  "/assets/images/product-img/fashion/product-a-01.webp",
  "/assets/images/product-img/fashion/product-a-02.webp",
];
import "@/lib/lightgallery-styles";
export default function Slider13() {
  const [thumbSwiper, setThumbSwiper] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="rbt-thumb-slide-part rbt-sticky-top-150">
        <Swiper
          {...{
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 12,
            loop: true,
            breakpoints: {
              0: {
                direction: "horizontal",
                slidesPerView: 3,
              },
              768: {
                direction: "horizontal",
                slidesPerView: 4,
              },
              992: {
                direction: "vertical",
                slidesPerView: 4,
              },
            },
          }}
          onSwiper={setThumbSwiper}
          modules={[Thumbs]}
          className="swiper product-single-slider-three-thumb-activation rbt-thumb-has-bg-shape-overlay"
        >
          {imageUrls.map((url, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <button
                className={`thumbnail d-block ${
                  index === 0 ? "position-relative" : ""
                }`}
              >
                <span className="rbt-thumb-img-sm">
                  <Image
                    className="w-100 rbt-rounded--4"
                    alt="Product Images"
                    src={url}
                    width={624}
                    height={846}
                  />
                </span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="rbt-medea-lg-img-area w-83">
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="swiper product-single-slider-three-activation rbt-medea-lg-img-area-sm-wider rbt-arrow-between rbt-arrow-show-dfl"
          speed={400}
          selector=".rbt-product-single-img"
          zoomFromOrigin={false}
        >
          <Swiper
            {...{
              spaceBetween: 24,
              slidesPerView: 4,
              direction: "vertical",
              loop: true,
              navigation: {
                prevEl: ".rbt-arrow-left",
                nextEl: ".rbt-arrow-right",
              },
              thumbs: {
                swiper: thumbSwiper,
              },
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  direction: "horizontal",
                },
                992: {
                  direction: "vertical",
                  slidesPerView: 4,
                },
              },
            }}
            modules={[Navigation, Thumbs]}
            className="swiper product-single-slider-three-activation rbt-medea-lg-img-area-sm-wider rbt-arrow-between rbt-arrow-show-dfl"
          >
            {imageUrls.map((url, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="thumbnail">
                  <a
                    className="rbt-product-single-img"
                    href={url}
                    data-src={url}
                  >
                    <Image
                      className="w-100 rbt-rounded--12"
                      alt="Product Images"
                      src={url}
                      width={624}
                      height={846}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </LightGallery>
      </div>
    </>
  );
}
