"use client";

import ProductCard5 from "@/components/product-cards/ProductCard5";
import { coffeeProducts } from "@/data/products/foods";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
      <div className="rbt-full-width-wrapper p-0">
        <div className="container">
          <div className="row row--0">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Bestselling{" "}
                  <span className="rbt-bold--text">Items For You</span>
                </h2>
                <p className="b1 rbt-text-color-gray-600 mb--24">
                  Explore our best-loved coffees and treats, thoughtfully crafted
                  to <br />
                  make every break feel warm and truly special.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--0">
          <div className="col-md-12">
            <Swiper
              className="swiper rbt-fashion-prd-card-activation-1-v3"
              {...{
                slidesPerView: 1.8,
                spaceBetween: 24,
                loop: true,
                breakpoints: {
                  575: {
                    slidesPerView: 1.8,
                    slidesPerGroup: 1,
                    centeredSlides: false,
                  },
                  768: {
                    slidesPerView: 2.8,
                    slidesPerGroup: 1,
                    centeredSlides: false,
                  },
                  992: {
                    slidesPerView: 2.8,
                    slidesPerGroup: 1,
                    centeredSlides: true,
                  },
                  1200: {
                    slidesPerView: 4.5,
                    slidesPerGroup: 1,
                  },
                },
              }}
            >
              {/* Start Single Card  */}
              {coffeeProducts.map((product, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <ProductCard5 product={product}
                    animationOrder={i + 1}
                  />
                </SwiperSlide>
              ))}
              {/* End Single Card  */}

              <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one has-hide-dot-swipe" />
            </Swiper>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
