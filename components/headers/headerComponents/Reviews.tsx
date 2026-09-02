"use client";
import Image from "next/image";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const reviewers = [
  {
    name: "Ralph Edwards",
    title: "Went above & beyond",
    avatar: "/assets/images/reviewer-img/avater-sm-01.webp",
  },
  {
    name: "Ralph Edwards",
    title: "Went above & beyond",
    avatar: "/assets/images/reviewer-img/avater-sm-02.webp",
  },
  {
    name: "Ralph Edwards",
    title: "Went above & beyond",
    avatar: "/assets/images/reviewer-img/avater-sm-03.webp",
  },
];

export default function Reviews() {
  return (
    <Swiper
      {...{
        slidesPerView: 2.7,
        spaceBetween: 16,
        loop: !0,
        navigation: {
          prevEl: ".rbt-arrow-left",
          nextEl: ".rbt-arrow-right",
        },
        breakpoints: {
          481: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2.7 },
          1400: { slidesPerView: 2.7 },
          1600: { slidesPerView: 2.7 },
        },
      }}
      modules={[Navigation]}
      className="swiper rbt-sm-review-card-swiper-activation-1 rbt-arrow-between has-right-bg-shape has-right-bg-shape-sm-width rbt-arrow-show-dfl"
    >
      {reviewers.map((reviewer, index) => (
        <SwiperSlide className="swiper-slide" key={index}>
          <div className="rbt-sm-review-card">
            <div className="rbt-sm-review-card">
              <div className="rbt-avatar-img-wrapper">
                <div className="rbt-avatar-img">
                  <Image
                    alt="Ecommerce Client Image"
                    src={reviewer.avatar}
                    width={128}
                    height={128}
                  />
                </div>
                <span className="rbt-avarter-authintication-icon">
                  <i className="fa-solid fa-shield-check" />
                </span>
              </div>
              <div className="rbt-avater-content-wrapper">
                <span className="title">{reviewer.title}</span>
                <div className="desc-wrapper">
                  <p className="desc">{reviewer.name}</p>
                  <ul className="rbt-rating-icon-list">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-star rbt-rated-icon" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray">
        <div className="custom-overflow">
          <i className="rbt-icon fa-regular fa-arrow-right" />
          <i className="rbt-icon-top fa-regular fa-arrow-right" />
        </div>
      </div>
    </Swiper>
  );
}
