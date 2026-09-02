"use client";
import { categoryData } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
export default function CategoryLinkedBoxSwiper() {
  return (
    <div className="rbt-component-area rbt-categories-styles-area rbt-section-gap rbt-bg-color-white">
      <div className="ml-container">
        <div className="row swiper-right-sm-width m--0">
          <div className="col-md-12">
            {/* Start Card Swiper Area */}
            <Swiper
              className="swiper category-activation-one rbt-arrow-between gutter-swiper-24 mt--0 mb--0 ptb--20 "
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
              {categoryData.map((category, i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
                >
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-4">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <Link href={`/shop-by-categories`}>
                            {category.imgSrc && (
                              <Image
                                className="rbt-scroll-trigger zoom_in animation-order-4"
                                alt="Category Product Images"
                                src={category.imgSrc}
                                width="260"
                                height="260"
                              />
                            )}
                          </Link>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <Link
                                href={`/shop-by-categories`}
                                className="rbt-card-link-btn"
                              >
                                <i className="fa-solid fa-arrow-up-right" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link href={`/shop-by-categories`}>
                              {category.title}
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
  );
}
