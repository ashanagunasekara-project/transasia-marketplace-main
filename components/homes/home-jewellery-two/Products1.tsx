"use client";

import ProductCard13 from "@/components/product-cards/ProductCard13";
import { jewelryProducts } from "@/data/products/jewelry";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Products1() {
  return (
    <div className="rbt-component-area">
      <div className="rbt-full-width-wrapper">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <a
                href="#"
                className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
              >
                Top Rated Jewellery
              </a>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Products <span className="rbt-bold--text">Trending Now</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/shop`}
            >
              <span className="btn-text">View All products</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
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
                {jewelryProducts.map((product, i) => (
                  <SwiperSlide className="swiper-slide" key={i}>
                    <ProductCard13 product={product}
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
