"use client";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const slideContents = [
  "Christmas, thanksgiving, trees, decor, ornaments",
  "Looking for something Explore thanksgiving?",
  "Explore what thanksgiving, trees you need decor",
];

export default function PromoTextScroller() {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      direction="vertical"
      effect="slide"
      autoplay={{
        delay: 2000,
        reverseDirection: true,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: ".header-promo-slider-nav.rbt-arrow-prev",
        nextEl: ".header-promo-slider-nav.rbt-arrow-next",
      }}
      modules={[Navigation, Autoplay]}
      className="rbt-text-swiper-container rbt-arrow-vertical"
    >
      {slideContents.map((text, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          {text}{" "}
          <Link className="rbt-fancy-link ml--4" href={`/shop`}>
            Know more
          </Link>
        </SwiperSlide>
      ))}

      <div className="rbt-vertical-arrow rbt-arrow-prev header-promo-slider-nav">
        <i className="fa-regular fa-chevron-up" />
      </div>
      <div className="rbt-vertical-arrow rbt-arrow-next header-promo-slider-nav">
        <i className="fa-regular fa-chevron-down" />
      </div>
    </Swiper>
  );
}
