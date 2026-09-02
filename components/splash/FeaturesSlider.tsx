"use client";
import { CurvedArrowIcon } from '../svg-icons';
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const componentSlides = [
  {
    img: "/assets/images/splash/others/component-image1.webp",
    width: 462,
    height: 602,
    title: "Default Product Card",
    desc: "Classic product display layout.",
  },
  {
    img: "/assets/images/splash/others/component-image2.webp",
    width: 462,
    height: 504,
    title: "Card with Color Variation",
    desc: "Product options with color variations.",
  },
  {
    img: "/assets/images/splash/others/component-image3.webp",
    width: 462,
    height: 544,
    title: "Image Slide on Hover",
    desc: "Shows image change on hover.",
  },
  {
    img: "/assets/images/splash/others/component-image4.webp",
    width: 462,
    height: 516,
    title: "Card with Image Variation",
    desc: "Product with multiple image options.",
  },
  {
    img: "/assets/images/splash/others/component-image1.webp",
    width: 462,
    height: 602,
    title: "Card with Stock Progress",
    desc: "Shows stock availability with progress bar.",
  },
  {
    img: "/assets/images/splash/others/component-image2.webp",
    width: 462,
    height: 504,
    title: "Card with Color Variation",
    desc: "Product options with color variations.",
  },
  {
    img: "/assets/images/splash/others/component-image3.webp",
    width: 462,
    height: 544,
    title: "Image Slide on Hover",
    desc: "Shows image change on hover.",
  },
];
export default function FeaturesSlider() {
  return (
    <div className="splash-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title mb--56">
              <span className="subtitle rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                Expand Your Template
              </span>
              <h2 className="rbt-title rbt-text-color-white">
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  You Need Everything
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  To Power Online Store
                </span>
              </h2>
              <div className="section-indicator d-none d-lg-block">
                <span className="icon rbt-scroll-trigger slide_in animation-order-4">
                  <CurvedArrowIcon />
                </span>
                <span className="indicator-text text-start rbt-text-color-white rbt-scroll-trigger slide_in animation-order-5">
                  Craft exceptional visitor <br />
                  experience.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        {...{
          slidesPerView: "auto",
          spaceBetween: 48,
          grabCursor: true,
          loop: true,
          speed: 1000,
          autoplay: true,
          navigation: {
            prevEl: ".features-slider-arrow.rbt-arrow-left",
            nextEl: ".features-slider-arrow.rbt-arrow-right",
          },
        }}
        className="swiper rbt-splash-component-slider-active wrapper rbt-arrow-between icon-bg-primary"
      >
        {componentSlides.map((slide, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <div className="rbt-component-card">
              <div className="component-image">
                <Image
                  className="rbt-scroll-trigger zoom_in"
                  alt="Component Image"
                  src={slide.img}
                  width={slide.width}
                  height={slide.height}
                />
              </div>
              <div className="rbt-component-content text-center mt--24">
                <h4 className="rbt-title rbt-text-color-white mb--4">
                  {slide.title}
                </h4>
                <span className="h5 mb--0 rbt-text-color-gray-400 rbt-text-semi-bold">
                  {slide.desc}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation */}
        <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-lg features-slider-arrow">
          <div className="custom-overflow">
            <i className="rbt-icon fa-regular fa-arrow-left" />
            <i className="rbt-icon-top fa-regular fa-arrow-left" />
          </div>
        </div>
        <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-lg features-slider-arrow">
          <div className="custom-overflow">
            <i className="rbt-icon fa-regular fa-arrow-right" />
            <i className="rbt-icon-top fa-regular fa-arrow-right" />
          </div>
        </div>
      </Swiper>
    </div>
  );
}
