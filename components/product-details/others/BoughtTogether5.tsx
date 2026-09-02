"use client";
import Link from "next/link";
import ProductCard1 from "@/components/product-cards/ProductCard1";
import { sportsProduct } from "@/data/products/sports";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BoughtTogether5() {
  return (
    <div className="rbt-component-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--32">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h3 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">
                  Frequently Bought Together
                </span>
              </h3>
            </div>
            <Link
              className="rbt-btn-link link rbt-btn-text-color-primary d-flex rbt-text-medium rbt-gap--4 mt--8 justify-content-center rbt-scroll-trigger fade_in animation-order-3"
              href={`/shop`}
            >
              <span className="btn-text">View All Products</span>
              <span className="btn-icon">
                <i className="fa-solid fa-arrow-up-right" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12">
          <div className="col-md-12">
            <div className="rbt-swiper-container-one rbt-arrow-between rbt-arrow-between-lg-dis">
              <Swiper
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
                className="swiper rbt-fashion-prd-card-activation-1-v1 rbt-dot-bottom-center"
              >
                {sportsProduct.map((product, i) => (
                  <SwiperSlide key={i}>
                    <ProductCard1
                      cardBodyClass="rbt-card-body rbt-bg-color-white"
                      product={product}
                      animationOrder={i + 1}
                    />
                  </SwiperSlide>
                ))}
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
  );
}
