"use client";

import ProductCard13 from "@/components/product-cards/ProductCard13";
import { fashionProducts5 } from "@/data/products/fashion";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products1({ wrapperBox }: { wrapperBox?: string }) {
  return (
    <div className="rbt-component-area">
      <div className={` ${wrapperBox ? wrapperBox : "rbt-full-width-wrapper"}`}>
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Recommended </span> Just For
                  You
                </h2>
                <p className="description rbt-scroll-trigger fade_in animation-order-2">
                  Curated outfits chosen for comfort, fit, and easy everyday polish.
                  Layer-friendly pieces, quality fabrics, and details that stay sharp.
                  Shop more.
                </p>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12">
            <div className="col-md-12">
              <div className="rbt-swiper-container-one rbt-arrow-between">
                <Swiper
                  className="swiper rbt-fashion-prd-card-activation-1-v1 rbt-dot-bottom-center"
                  {...{
                    slidesPerView: 1.8,
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
                        slidesPerView: 1.8,
                        slidesPerGroup: 1,
                      },
                      768: {
                        slidesPerView: 2.8,
                        slidesPerGroup: 1,
                      },
                      992: {
                        slidesPerView: 2.8,
                        slidesPerGroup: 1,
                      },
                      1200: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                      },
                    },
                  }}
                  modules={[Pagination, Navigation]}
                >
                  {[...fashionProducts5, ...fashionProducts5].map(
                    (product, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <ProductCard13
                          detailsPageUrl="/product-single-fashion"
                          product={product}
                        />
                      </SwiperSlide>
                    ),
                  )}

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
  );
}
