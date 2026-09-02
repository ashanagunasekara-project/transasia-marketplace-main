"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const slideTexts = [
  "The best-selling watch —all under $100.",
  "The best-selling camera —all under $100.",
  "The best-selling mobile —all under $100.",
];

export default function TopbarSwiper({
  position = "center",
  color = "white",
  hasFancyText = false,
}: {
  position?: string;
  color?: string;
  hasFancyText?: boolean;
}) {
  return (
    <Swiper
      className="rbt-text-swiper-container rbt-arrow-vertical"
      loop
      slidesPerView={1}
      direction="vertical"
      effect="slide"
      autoplay={{
        delay: 2000,
        reverseDirection: true,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: ".rbt-arrow-prev",
        nextEl: ".rbt-arrow-next",
      }}
      modules={[Navigation, Autoplay]}
    >
      {slideTexts.map((text, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div
            className={`rbt-fancy-item fancy-menu-text fancy-menu-${position}`}
          >
            <span className={`mr--4 rbt-fancy-text ${hasFancyText ? "rbt-fancy-text" : ""} rbt-text-color-${color}`}>
              <i className="fa-sharp fa-solid fa-bolt"></i>
            </span>
            <span
              className={`rbt-fancy-text ${hasFancyText ? "rbt-fancy-text" : ""} rbt-text-color-${color}`}
            >
              {text}
            </span>
            <Link
              className={` ml--8 rbt-fancy-text rbt-fancy-link ${hasFancyText ? "rbt-fancy-text" : ""} rbt-text-color-${color}`}
              href="/shop"
            >
              Shop Now
            </Link>
          </div>
        </SwiperSlide>
      ))}

      <div
        className={`rbt-vertical-arrow rbt-arrow-prev rbt-text-color-${color}`}
      >
        <i className="fa-regular fa-chevron-up" />
      </div>
      <div
        className={`rbt-vertical-arrow rbt-arrow-next rbt-text-color-${color}`}
      >
        <i className="fa-regular fa-chevron-down" />
      </div>
    </Swiper>
  );
}
