"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { oceanTemplateSlides } from "@/data/splashFeatures";

export default function FeatureOceanSwiper() {
  return (
    <Swiper
      className="swiper rbt-swiper-pagination-var-one"
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={24}
      speed={1500}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
    >
      {oceanTemplateSlides.map((slide) => (
        <SwiperSlide key={slide.id} className="swiper-slide">
          <div className="rbt-feature-card-content">
            <div className="rbt-feature-card-text mb--20">
              <span className="rbt-text-color-primary rbt-text-medium mb-0">{slide.preTitle}</span>
              <h3 className="rbt-text-bold mb--12 mt--4">{slide.title}</h3>
              <p className="b1 rbt-text-color-gray-500">{slide.desc}</p>
            </div>
            <div className="rbt-card-img">
              <Image className="icon rbt-scroll-trigger zoom_in" alt="Slide" src={slide.imgSrc} width={slide.id === "os-2" ? 1084 : 542} height={slide.id === "os-2" ? 816 : 408} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
