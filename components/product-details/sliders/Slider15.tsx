"use client";
import type { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import VideoModal from "@/components/common/ui/VideoModal";
const thumbImages = [
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
export default function Slider15() {
  const [swiperThumb, setSwiperThumb] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="rbt-thumb-slide-part">
        <Swiper
          {...{
            direction: "vertical",
            slidesPerView: 3,
            spaceBetween: 12,
            loop: true,
            breakpoints: {
              0: {
                direction: "horizontal",
                slidesPerView: 3,
              },
              992: {
                direction: "vertical",
                slidesPerView: 4,
              },
            },
            navigation: {
              prevEl: ".rbt-arrow-left",
              nextEl: ".rbt-arrow-right",
            },
          }}
          onSwiper={setSwiperThumb}
          modules={[Navigation, Thumbs]}
          className="swiper product-single-slider-two-thumb-activation"
        >
          <div className="swiper-wrapper rbt-store-thumb-variation-1">
            {thumbImages.map((src, index) => (
              <SwiperSlide
                className={`swiper-slide rbt-scroll-trigger fade_in animation-order-${
                  index + 1
                }`}
                key={index}
              >
                <button className="thumbnail d-block position-relative">
                  <span className="rbt-thumb-img-sm">
                    <Image
                      className="w-100 rbt-rounded--4"
                      alt="Product Images"
                      src={src}
                      width={624}
                      height={846}
                    />
                  </span>
                </button>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <hr className="rbt-separator mt--16 d-none d-lg-block mb--16 rbt-scroll-trigger fade_in animation-order-9" />
        <div className="rbt-video-thumb-wrapper rbt-scroll-trigger fade_in animation-order-10">
          <VideoModal videoUrl="https://www.youtube.com/embed/DR9lxZ8kPYQ?si=-GMJDUfCEd9YhyXR">
            <button className="rbt-video-thumb">
              <Image
                alt="Thumbnail"
                src="/assets/images/product-img/thumbnail.webp"
                width={176}
                height={136}
              />
              <span className="rbt-icon">
                <i className="fa-solid fa-play" />
              </span>
            </button>
          </VideoModal>
          <p className="b4 mb--0 mt--4 rbt-text-medium rbt-text-color-heading text-center">
            5 VIDEOS
          </p>
        </div>
      </div>
      <div className="rbt-medea-lg-img-area w-84">
        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="swiper product-single-slider-two-activation rbt-arrow-between rbt-arrow-show-dfl"
          speed={400}
          selector=".rbt-product-single-img"
          zoomFromOrigin={false}
        >
          <Swiper
            {...{
              spaceBetween: 24,
              navigation: {
                prevEl: ".rbt-arrow-left",
                nextEl: ".rbt-arrow-right",
              },
              thumbs: {
                swiper: swiperThumb,
              },
            }}
            modules={[Thumbs, Navigation]}
            className="swiper product-single-slider-two-activation rbt-arrow-between rbt-arrow-show-dfl"
          >
            <div className="swiper-wrapper rbt-store-thumb-main-1">
              {thumbImages.map((src, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="thumbnail rbt-rounded--24">
                    <a
                      className="rbt-product-single-img"
                      href={src}
                      data-src={src}
                    >
                      <Image
                        className="w-100 rbt-rounded--24"
                        alt="Product Images"
                        src={src}
                        width={624}
                        height={846}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </LightGallery>
        <div className="row row--12 rbt-mobile-row">
          <div className="col-lg-6 col-sm-6 col-6 mt--24">
            <div className="thumbnail">
              <div className="rbt-product-single-img">
                <Image
                  className="w-100 rbt-rounded--8"
                  alt="Product Images"
                  src="/assets/images/product-img/fashion/product-a-01.webp"
                  width={624}
                  height={846}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-6 mt--24">
            <div className="thumbnail">
              <div className="rbt-product-single-img">
                <Image
                  className="w-100 rbt-rounded--8"
                  alt="Product Images"
                  src="/assets/images/product-img/fashion/product-a-02.webp"
                  width={624}
                  height={846}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-6 mt--24">
            <div className="thumbnail">
              <div className="rbt-product-single-img">
                <Image
                  className="w-100 rbt-rounded--8"
                  alt="Product Images"
                  src="/assets/images/product-img/fashion/product-a-03.webp"
                  width={624}
                  height={846}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-6 mt--24">
            <div className="thumbnail">
              <div className="rbt-product-single-img">
                <Image
                  className="w-100 rbt-rounded--8"
                  alt="Product Images"
                  src="/assets/images/product-img/fashion/product-a-04.webp"
                  width={624}
                  height={846}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
