"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
const imageSources = [
  "/assets/images/product-img/accessories/headphone-stand-01.webp",
  "/assets/images/product-img/accessories/headphone-stand-02.webp",
  "/assets/images/product-img/accessories/headphone-stand-03.webp",
  "/assets/images/product-img/accessories/headphone-stand-04.webp",
  "/assets/images/product-img/accessories/headphone-stand-03.webp",
  "/assets/images/product-img/accessories/headphone-stand-04.webp",
  "/assets/images/product-img/accessories/headphone-stand-01.webp",
  "/assets/images/product-img/accessories/headphone-stand-02.webp",
];
import "@/lib/lightgallery-styles";
export default function Slider5() {
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="rbt-thumb-slide-part">
        <Swiper
          modules={[Thumbs, Navigation]}
          onSwiper={setSwiperThumb}
          {...{
            direction: "vertical",
            slidesPerView: 3,
            spaceBetween: 12,
            loop: true,
            breakpoints: {
              0: { direction: "horizontal", slidesPerView: 3 },
              992: { direction: "vertical", slidesPerView: 4 },
            },
            navigation: {
              prevEl: ".rbt-arrow-left",
              nextEl: ".rbt-arrow-right",
            },
          }}
          className="swiper product-single-slider-two-thumb-activation thumb-height-var-one rbt-thumb-has-bg-shape-overlay rbt-arrow-show-dfl rbt-swiper-right-bottom-one rbt-arrow-between rbt-swiper-arrow-transparent"
        >
          {imageSources.map((src, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <button className="thumbnail d-block position-relative">
                <span className="rbt-thumb-img-sm">
                  <Image
                    className="w-100 rbt-rounded--4"
                    alt="Product Images"
                    src={src}
                    width={800}
                    height={1085}
                  />
                </span>
              </button>
            </SwiperSlide>
          ))}
          <div className="rbt-swiper-arrow rbt-arrow-right">
            <i className="fa-regular fa-chevron-down" />
          </div>
        </Swiper>
      </div>
      <div className="rbt-medea-lg-img-area w-82">
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="swiper product-single-slider-two-activation rbt-arrow-between rbt-arrow-show-dfl rbt-arrow-bottom-right"
          speed={400}
          selector=".rbt-product-single-img"
          zoomFromOrigin={false}
        >
          <Swiper
            modules={[Thumbs, Navigation]}
            {...{
              spaceBetween: 24,
              navigation: {
                prevEl: ".rbt-arrow-left",
                nextEl: ".rbt-arrow-right",
              },
              thumbs: { swiper: swiperThumb },
            }}
            className="swiper product-single-slider-two-activation rbt-arrow-between rbt-arrow-show-dfl rbt-arrow-bottom-right"
          >
            <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
              NEW
            </div>
            <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
              HOT
            </div>
            {imageSources.map((src, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <div className="thumbnail">
                  <a
                    className="rbt-product-single-img"
                    href={src}
                    data-src={src}
                  >
                    <Image
                      className="w-100 rbt-rounded--12"
                      alt="Product Images"
                      src={src}
                      width={800}
                      height={1085}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}

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
    </>
  );
}
