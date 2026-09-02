"use client";
import ProductCard2 from "@/components/product-cards/ProductCard2";
import { furnitureSliderProducts } from "@/data/products/furnitures";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
export default function Products2() {
  return (
    <div
      id="rbt-product-block-02"
      className="rbt-component-area rbt-products-area rbt-bg-color-white rbt-section-gap3"
    >
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-white pt--0 pb--0 p_sm--0">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16">
              <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
                <a
                  href="#"
                  className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
                >
                  Deep Discounts
                </a>
                <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                  <span className="rbt-bold--text">-25% on Bestsellers</span>
                </h4>
              </div>
              <Link
                className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-3"
                href={`/shop`}
              >
                <span className="btn-text">View All Products</span>
                <span className="btn-icon ml--4">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </span>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Start Card Swiper Area */}
              <Swiper
                className="swiper product-swiper-activation-one ptb--20 rbt-progress-bottom"
                {...{
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                  loop: true,
                  navigation: false,
                  speed: 1000,
                  scrollbar: {
                    el: ".swiper-scrollbar",
                    draggable: true,
                  },
                  breakpoints: {
                    481: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 4 },
                  },
                }}
                modules={[Scrollbar]}
              >
                {furnitureSliderProducts.map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="single-slide">
                      <ProductCard2
                        detailsPageUrl="/product-single-furniture"
                        product={product}
                        animationOrder={i + 1}
                      />
                    </div>
                  </SwiperSlide>
                ))}

                <div className="swiper-scrollbar" />
              </Swiper>
              {/* End Card Swiper Area */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
