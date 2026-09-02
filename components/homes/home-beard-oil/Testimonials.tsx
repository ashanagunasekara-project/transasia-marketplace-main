"use client";
import { CheckmarkSmallIcon } from "../../svg-icons";
import { beardOilReviews } from "@/data/testimonials";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const TESTIMONIAL_ANIMATION_CLASSES = [
  "animation-order-1",
  "animation-order-2",
  "animation-order-3",
];

export default function Testimonials() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-gray-light rbt-rounded--16 rbt-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title text-center border-0 p-0 mb--40 mb_sm--36 align-items-center">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
                  >
                    Our Customer Say!
                  </a>
                  <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                    <span className="rbt-bold--text">Customers loved </span>
                    products
                  </h2>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="row row--12">
              <div className="col-md-12">
                <div className="rbt-swiper-container-one rbt-arrow-between">
                  <Swiper
                    className="swiper rbt-review-card-activation-1 rbt-dot-bottom-center"
                    {...{
                      slidesPerView: 1,
                      spaceBetween: 24,
                      loop: true,
                      pagination: {
                        el: ".rbt-swiper-pagination, .abc",
                        clickable: true,
                        dynamicBullets: true,
                      },
                      navigation: {
                        prevEl: ".rbt-arrow-left",
                        nextEl: ".rbt-arrow-right",
                      },
                      breakpoints: {
                        575: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                        },
                        768: {
                          slidesPerView: 1.8,
                          slidesPerGroup: 1,
                        },
                        992: {
                          slidesPerView: 2.3,
                          slidesPerGroup: 1,
                        },
                        1200: {
                          slidesPerView: 3,
                          slidesPerGroup: 1,
                        },
                      },
                    }}
                    modules={[Navigation, Pagination]}
                  >
                    {beardOilReviews.map((review, index) => {
                      const productId = review.product?.id;
                      const productHref = `/product-single-tech-accessories/${productId}`;
                      const animationClass =
                        TESTIMONIAL_ANIMATION_CLASSES[index % 3];
                      return (
                        <SwiperSlide className="swiper-slide" key={index}>
                          <div
                            className={`rbt-product-review rbt-review-wth-product rbt-scroll-trigger fade_in ${animationClass}`}
                          >
                            <div className="rbt-product-review-inner rbt-bg-color-white">
                              <div className="rbt-review-top-section">
                                <h6 className="rbt-review-title">
                                  {review.title}
                                </h6>
                                <p className="rbt-review-date b3 mt--8 mb--0">
                                  {review.date}
                                </p>
                                <ul className="rbt-rating-icon-list mt--16 mb--0 rbt-rating-icon-lg">
                                  {[...Array(5)].map((_, i) => (
                                    <li key={i}>
                                      <i
                                        className={`fa-solid fa-star ${
                                          i < (review.rating ?? 0)
                                            ? "rbt-rated-icon"
                                            : ""
                                        }`}
                                      />
                                    </li>
                                  ))}
                                </ul>
                                <p className="rbt-reviewed-text mt--16 mb--0">
                                  {review.text}
                                </p>
                                <div className="rbt-reviewer-inf">
                                  <span className="rbt-reviewer-name b1">
                                    {review.reviewer}
                                  </span>
                                  {review.verified && (
                                    <div className="rbt-reviewer-chk-badge">
                                      <CheckmarkSmallIcon />
                                      <span className="rbt-reviewer-chk">
                                        Verified Reviewer
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {review.product && (
                                <div className="rbt-review-bottom-section rbt-bg-color-gray-100">
                                  <div className="rbt-review-bottom-left-part">
                                    <div className="rbt-review-prd-img">
                                      <Link href={productHref}>
                                        <Image
                                          src={review.product?.imgSrc}
                                          alt="eCommerce Product Image"
                                          width={160}
                                          height={160}
                                        />
                                      </Link>
                                    </div>
                                    <p className="rbt-review-prd-title">
                                      <Link href={productHref}>
                                        {review.product?.title}
                                      </Link>
                                    </p>
                                  </div>
                                  <div className="rbt-review-bottom-right-part">
                                    <Link
                                      href={`/cart`}
                                      className="rbt-cart-button"
                                    >
                                      <i className="fa-regular fa-cart-shopping" />
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                    <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one has-hide-dot-swipe" />
                  </Swiper>
                  <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-gray rbt-arrow-lg">
                    <div className="custom-overflow">
                      <i className="rbt-icon fa-regular fa-arrow-left" />
                      <i className="rbt-icon-top fa-regular fa-arrow-left" />
                    </div>
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray rbt-arrow-lg">
                    <div className="custom-overflow">
                      <i className="rbt-icon fa-regular fa-arrow-right" />
                      <i className="rbt-icon-top fa-regular fa-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
