"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import type { LightGallery as LightGalleryInstance } from "lightgallery/lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Product } from "@/types";
import "@/lib/lightgallery-styles";
const BASE_EARPHONE_IMAGES = [
  {
    src: "/assets/images/product-single/earphone/earphone-05.webp",
    width: 1072,
    height: 824,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-04.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-03.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-02.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-01.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-04.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-03.webp",
    width: 1072,
    height: 825,
  },
  {
    src: "/assets/images/product-single/earphone/earphone-02.webp",
    width: 1072,
    height: 825,
  },
];

export default function Slider1({ product }: { product: Product }) {
  const images = useMemo(
    () => [
      { ...BASE_EARPHONE_IMAGES[0], src: product.imgSrc },
      ...BASE_EARPHONE_IMAGES.slice(1),
    ],
    [product.imgSrc],
  );

  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lgRef = useRef<LightGalleryInstance | null>(null);
  return (
    <div className="rbt-single-product-media-area position-sticky-top rbt-single-product-media-has-folder-shape d-flex row row--12 rbt-gap--0">
      <div className="col-lg-1-5 col-lg-2 order-2 order-lg-1">
        <div className="swiper product-single-slider-two-thumb-activation rbt-arrow-show-dfl rbt-thumb-has-bg-shape-overlay rbt-swiper-right-bottom-one rbt-arrow-between rbt-swiper-arrow-transparent">
          <Swiper
            className="swiper-wrapper rbt-store-thumb-variation-1"
            style={{ maxHeight: "457px", overflow: "hidden" }}
            onSwiper={setSwiperThumb}
            modules={[Thumbs, Navigation]}
            {...{
              direction: "vertical",
              slidesPerView: 3,
              spaceBetween: 12,
              breakpoints: {
                0: {
                  direction: "horizontal",
                  slidesPerView: 4,
                },
                992: {
                  direction: "vertical",
                  slidesPerView: 4,
                },
              },
            }}
            navigation={{ nextEl: ".tnn1" }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
              >
                <button
                  className="thumbnail d-block position-relative "
                  style={{
                    overflow: "hidden",
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                >
                  <span className="rbt-thumb-img-sm">
                    <Image
                      alt="Product Images"
                      src={image.src}
                      width={1072}
                      height={824}
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="rbt-swiper-arrow rbt-arrow-right tnn1">
            <i className="fa-regular fa-chevron-down" />
          </div>
        </div>
      </div>
      <div className="col-lg-4-5 col-lg-10 order-1 order-lg-2">
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="swiper rbt-medea-lg-img-area-md-wider product-single-slider-two-activation rbt-arrow-between rbt-arrow-show-dfl"
          speed={400}
          selector=".rbt-product-single-img"
          zoomFromOrigin={false}
          onInit={(detail) => {
            lgRef.current = detail.instance;
          }}
        >
          <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-badge-top-left--position">
            NEW
          </div>
          <div className="rbt-product-badge rbt-product-badge-bg-green rbt-badge-top-left--position">
            HOT
          </div>
          <button
            className="rbt-enlarge-btn position-bottom-right"
            type="button"
            onClick={() => lgRef.current?.openGallery(activeIndex)}
          >
            <span className="rbt-icon">
              <i className="fa-regular fa-arrows-maximize" />
            </span>
            <span className="rbt-enlarge-text">Enlarge View</span>
          </button>
          <Swiper
            className="swiper-wrapper rbt-store-thumb-main-1"
            modules={[Thumbs, Navigation]}
            thumbs={{ swiper: swiperThumb }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            {...{
              spaceBetween: 24,
              loop: true,
              navigation: {
                prevEl: ".snbsp1",
                nextEl: ".snbsn1",
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
              >
                <div className="thumbnail">
                  <a
                    className="rbt-product-single-img"
                    href={image.src}
                    data-src={image.src}
                  >
                    <Image
                      className="w-100"
                      alt="Product Images"
                      src={image.src}
                      width={image.width}
                      height={image.height}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="rbt-swiper-arrow rbt-arrow-left snbsp1">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-left" />
              <i className="rbt-icon-top fa-regular fa-arrow-left" />
            </div>
          </div>
          <div className="rbt-swiper-arrow rbt-arrow-right snbsn1">
            <div className="custom-overflow">
              <i className="rbt-icon fa-regular fa-arrow-right" />
              <i className="rbt-icon-top fa-regular fa-arrow-right" />
            </div>
          </div>
        </LightGallery>
      </div>
    </div>
  );
}
