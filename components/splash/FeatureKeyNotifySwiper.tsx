"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { featureNotifySlides } from "@/data/splash";

export default function FeatureKeyNotifySwiper() {
  return (
    <Swiper
      className="swiper rbt-feature-slide-active"
      modules={[Autoplay]}
      direction="vertical"
      slidesPerView={4}
      spaceBetween={16}
      speed={1500}
      loop={true}
      autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
    >
      {featureNotifySlides.map((slide, idx) => (
        <SwiperSlide key={idx} className="swiper-slide">
          <div className="rbt-slide">
            <Image alt={slide.alt} src={slide.src} width={slide.width} height={slide.height} className="image-auto" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
