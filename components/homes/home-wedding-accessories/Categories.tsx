"use client";
import { weddingCategories } from "@/data/categories";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gapTop">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16">
              <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
                <span className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                  Search By
                </span>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                  <span className="rbt-bold--text">Product Categories</span>
                </h2>
              </div>
              <Link
                className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
                href={`/categories-list`}
              >
                <span className="btn-text">View All Categories</span>
                <span className="btn-icon ml--4">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </span>
              </Link>
            </div>
          </div>
          {/* Categories Swiper */}
          <div className="row swiper-right-sm-width">
            <div className="col-md-12">
              {/* Start Card Swiper Area */}
              <Swiper
                className="swiper category-activation-one rbt-arrow-between gutter-swiper-24 mt--0 mb--0 ptb--20"
                {...{
                  slidesPerView: 1.3,
                  spaceBetween: 0,
                  loop: true,
                  navigation: false,
                  breakpoints: {
                    481: { slidesPerView: 2.3 },
                    768: { slidesPerView: 3.3 },
                    992: { slidesPerView: 4.3 },
                    1400: { slidesPerView: 5.3 },
                    1600: { slidesPerView: 6.3 },
                  },
                }}
              >
                {weddingCategories.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <div className="single-slide">
                      <div
                        className={`rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-${
                          index + 1
                        }`}
                      >
                        <div className="inner">
                          <div className="rbt-image-portion position-relative overflow-hidden">
                            <Link href={`/shop-by-category`}>
                              <Image
                                className={`rbt-scroll-trigger zoom_in animation-order-${
                                  index + 1
                                }`}
                                alt="Category Product Images"
                                src={item.imgSrc || ""}
                                width={520}
                                height={520}
                              />
                            </Link>
                            <div className="rbt-right-corner-portion bottom--position">
                              <div className="rbt-corner-portion-wrapper">
                                <Link
                                  href={`/shop-by-category`}
                                  className="rbt-card-link-btn"
                                >
                                  <i className="fa-solid fa-arrow-up-right" />
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <Link href={`/shop-by-category`}>
                                {item.title}
                              </Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* End Card Swiper Area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
