"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BLOCK_SLIDES = [
  [
    {
      alt: "Components Image",
      src: "/assets/images/splash/components/hero-5.webp",
      width: 926,
      height: 415,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/hero-11.webp",
      width: 946,
      height: 456,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/hero-7.webp",
      width: 938,
      height: 490,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/component-8.webp",
      width: 468,
      height: 130,
    },
  ],
  [
    {
      alt: "Componente Image",
      src: "/assets/images/splash/components/lookbook-01.webp",
      width: 528,
      height: 289,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/component-10.webp",
      width: 468,
      height: 148,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/shop-10.webp",
      width: 584,
      height: 392,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/hero-6.webp",
      width: 948,
      height: 430,
    },
  ],
  [
    {
      alt: "Componente Image",
      src: "/assets/images/splash/components/lookbook-05.webp",
      width: 468,
      height: 247,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/component-14.webp",
      width: 468,
      height: 257,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/lookbook-04.webp",
      width: 468,
      height: 185,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/component-16.webp",
      width: 468,
      height: 170,
    },
  ],
  [
    {
      alt: "Componente Image",
      src: "/assets/images/splash/components/lookbook-03.webp",
      width: 658,
      height: 282,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/hero-3.webp",
      width: 540,
      height: 231,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/component-19.webp",
      width: 468,
      height: 200,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/hero-9.webp",
      width: 1088,
      height: 516,
    },
  ],
  [
    {
      alt: "Componente Image",
      src: "/assets/images/splash/components/component-16.webp",
      width: 468,
      height: 170,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/hero-5.webp",
      width: 926,
      height: 415,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/shop-10.webp",
      width: 584,
      height: 392,
    },
    {
      alt: "Element Image",
      src: "/assets/images/splash/components/hero-8.webp",
      width: 818,
      height: 400,
    },
  ],
];

export default function BlocksSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      className="swiper splash-element-presentation-active"
      {...{
        slidesPerView: "auto",
        spaceBetween: 32,
        speed: 9000,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
      }}
    >
      {/* Slides */}
      {BLOCK_SLIDES.map((slide, slideIndex) => (
        <SwiperSlide className="swiper-slide" key={slideIndex}>
          {slide.map((item, itemIndex) => (
            <div className="rbt-element p--0" key={itemIndex}>
              <Image
                alt={item.alt}
                src={item.src}
                width={item.width}
                height={item.height}
              />
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
