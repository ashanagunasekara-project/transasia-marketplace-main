"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";

import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "@/lib/lightgallery-styles";
const productImages = [
  "/assets/images/product-img/accessories/wireless-charger-a-01.webp",
  "/assets/images/product-img/accessories/wireless-charger-a-02.webp",
  "/assets/images/product-img/accessories/wireless-charger-a-03.webp",
  "/assets/images/product-img/accessories/wireless-charger-a-04.webp",
  "/assets/images/product-img/accessories/wireless-charger-a-05.webp",
  "/assets/images/product-img/accessories/wireless-charger-a-01.webp",
  "/assets/images/product-img/accessories/wireless-charger-a-02.webp",
  "/assets/images/product-img/accessories/wireless-charger-a-03.webp",
];
import { Product } from "@/types/product";

export default function Slider4({ product }: { product?: Product }) {
  const [thumbSwiper, setThumbSwiper] = useState<SwiperClass | null>(null);

  const images =
    product?.gallery && product.gallery.length > 0
      ? product.gallery
      : product?.imgSrc
        ? [product.imgSrc]
        : productImages;

  const isLoop = images.length >= 4;

  return (
    <>
      <div className="rbt-thumb-slide-part rbt-sticky-top-150">
        <Swiper
          className="swiper product-single-slider-three-thumb-activation thumb-height-var-one rbt-arrow-show-dfl rbt-thumb-has-bg-shape-overlay rbt-swiper-right-bottom-one rbt-arrow-between rbt-swiper-arrow-transparent"
          direction="vertical"
          slidesPerView={Math.min(images.length, 4)}
          spaceBetween={12}
          loop={isLoop}
          breakpoints={{
            0: {
              direction: "horizontal",
              slidesPerView: Math.min(images.length, 3),
            },
            768: {
              direction: "horizontal",
              slidesPerView: Math.min(images.length, 4),
            },
            992: {
              direction: "vertical",
              slidesPerView: Math.min(images.length, 4),
            },
          }}
          onSwiper={setThumbSwiper}
          modules={[Thumbs]}
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {images.map((img, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <button className="thumbnail d-block position-relative">
                  <span className="rbt-thumb-img-sm">
                    <Image
                      className="w-100 rbt-rounded--4"
                      alt={product?.title || "Product Images"}
                      src={img}
                      width={848}
                      height={848}
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </div>
          {images.length > 1 && (
            <div className="rbt-swiper-arrow rbt-arrow-right">
              <i className="fa-regular fa-chevron-down" />
            </div>
          )}
        </Swiper>
      </div>
      <div className="rbt-medea-lg-img-area w-83">
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="swiper product-single-slider-three-activation height-var-one rbt-medea-lg-img-area-sm-wider rbt-arrow-between rbt-arrow-show-dfl"
          speed={400}
          selector=".rbt-product-single-img"
          zoomFromOrigin={false}
        >
          <Swiper
            className="swiper product-single-slider-three-activation height-var-one rbt-medea-lg-img-area-sm-wider rbt-arrow-between rbt-arrow-show-dfl"
            spaceBetween={24}
            slidesPerView={1}
            loop={isLoop}
            navigation={{
              prevEl: ".rbt-arrow-left",
              nextEl: ".rbt-arrow-right",
            }}
            thumbs={{
              swiper: thumbSwiper,
            }}
            modules={[Navigation, Thumbs]}
          >
            {product?.badges?.map((badge, bIdx) => (
              <div
                key={bIdx}
                className={`rbt-product-badge ${badge.bg || "rbt-product-badge-bg-green"} rbt-badge-top-left--position`}
                style={{ top: `${16 + bIdx * 32}px` }}
              >
                {badge.text}
              </div>
            )) || (
              <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
                {product?.inStock ? "IN STOCK" : "OUT OF STOCK"}
              </div>
            )}
            <div className="swiper-wrapper rbt-store-thumb-main-1">
              {images.map((imgPath, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="thumbnail">
                    <a
                      className="rbt-product-single-img"
                      href={imgPath}
                      data-src={imgPath}
                    >
                      <Image
                        className="w-100 rbt-rounded--12"
                        alt={product?.title || "Product Image"}
                        src={imgPath}
                        width={848}
                        height={848}
                        style={{ objectFit: "contain", maxHeight: "600px", width: "100%" }}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </LightGallery>
      </div>
    </>
  );
}
