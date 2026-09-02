"use client";
import Countdown from "@/components/common/ui/Countdown";
import ProductCard5 from "@/components/product-cards/ProductCard5";
import { beautyProductsRounded } from "@/data/products/beauty";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products2() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Today’s Best Deals{" "}
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Hurry up! </span>Offer ends in
              </h2>
              <div className="rbt-title-countdown-sec mt--12 rbt-scroll-trigger fade_in animation-order-3">
                <div className="rbt-countdown-sections d-flex justify-content-center align-items-center">
                  <div className="rbt-countdown-one bg-variation-primary">
                    <Countdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
            <div className="rbt-swiper-container-one rbt-arrow-between rbt-progress-bottom">
              <Swiper
                className="swiper rbt-beauty-prd-activation-1"
                {...{
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 24,
                  loop: true,
                  autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  },
                  pagination: {
                    el: ".rbt-swiper-progress",
                    type: "progressbar",
                  },
                  navigation: {
                    prevEl: ".rbt-arrow-left",
                    nextEl: ".rbt-arrow-right",
                  },
                  breakpoints: {
                    575: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  },
                }}
                modules={[Autoplay, Navigation, Pagination]}
              >
                {beautyProductsRounded.map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <ProductCard5
                      detailsPageUrl="/product-single-cosmetic-beauty"
                      product={product}
                      animationOrder={i + 1}
                    />
                  </SwiperSlide>
                ))}
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
              <div className="rbt-swiper-progress" />
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
