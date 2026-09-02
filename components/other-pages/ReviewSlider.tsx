"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "Szilágyi Erik",
    text: `The shirt fits great, very good quality of the material. Training in it is pure pleasure.`,
  },
  {
    id: 2,
    name: "David Smith",
    text: `Excellent fabric and stitching quality. Definitely buying again.`,
  },
  {
    id: 3,
    name: "Michael Brown",
    text: `Comfortable and stylish. Perfect for gym and casual wear.`,
  },
  {
    id: 4,
    name: "John Carter",
    text: `Very breathable material. Feels premium.`,
  },
];

export default function ReviewSlider() {
  return (
    <div className="rbt-login-form-bottom rbt-swiper-container-pagination position-relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          el: ".rbt-swiper-progress",
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="rbt-log-slide-activation pb--40"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="rbt-client-review">
              <ul className="rbt-rating-icon-list d-flex justify-content-center">
                {[...Array(5)].map((_, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-star rbt-rated-icon" />
                  </li>
                ))}
              </ul>
              <p className="rbt-review-text mt--8 mb--12">
                &quot;{review.text}&quot;
              </p>
              <div className="d-flex flex-wrap justify-content-center rbt-gap--8">
                <h6 className="mb--0">{review.name}</h6>
                <div className="rbt-verified-badge badge-rounded">
                  <i className="fa-sharp fa-solid fa-shield-check" />
                  Verified Reviewer
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination rbt-swiper-progress rbt-swiper-pagination-dot-extend" />
      </Swiper>
    </div>
  );
}
