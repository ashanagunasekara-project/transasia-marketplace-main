"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import type { StorefrontTopbarSlide } from "@/lib/api";

const defaultSlides: StorefrontTopbarSlide[] = [
  {
    id: "1",
    text: "The best-selling watch —all under $100.",
    linkText: "Shop Now",
    link: "/shop",
  },
  {
    id: "2",
    text: "The best-selling camera —all under $100.",
    linkText: "Shop Now",
    link: "/shop",
  },
  {
    id: "3",
    text: "The best-selling mobile —all under $100.",
    linkText: "Shop Now",
    link: "/shop",
  },
];

export default function TopbarSwiper({
  position = "center",
  color = "white",
  hasFancyText = false,
  initialSlides,
  initialDelay = 3500,
}: {
  position?: string;
  color?: string;
  hasFancyText?: boolean;
  initialSlides?: StorefrontTopbarSlide[];
  initialDelay?: number;
}) {
  const slides =
    initialSlides && initialSlides.length > 0 ? initialSlides : defaultSlides;

  return (
    <Swiper
      className="rbt-text-swiper-container rbt-arrow-vertical"
      loop={slides.length > 1}
      slidesPerView={1}
      direction="vertical"
      effect="slide"
      autoplay={{
        delay: initialDelay || 3500,
        reverseDirection: true,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: ".rbt-arrow-prev",
        nextEl: ".rbt-arrow-next",
      }}
      modules={[Navigation, Autoplay]}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={item.id || index} className="swiper-slide">
          <div
            className={`rbt-fancy-item fancy-menu-text fancy-menu-${position}`}
          >
            <span
              className={`mr--4 rbt-fancy-text ${
                hasFancyText ? "rbt-fancy-text" : ""
              } rbt-text-color-${color}`}
            >
              <i className="fa-sharp fa-solid fa-bolt"></i>
            </span>
            <span
              className={`rbt-fancy-text ${
                hasFancyText ? "rbt-fancy-text" : ""
              } rbt-text-color-${color}`}
            >
              {item.text}
            </span>
            {item.linkText && (
              <Link
                className={` ml--8 rbt-fancy-text rbt-fancy-link ${
                  hasFancyText ? "rbt-fancy-text" : ""
                } rbt-text-color-${color}`}
                href={item.link || "/shop"}
              >
                {item.linkText}
              </Link>
            )}
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
