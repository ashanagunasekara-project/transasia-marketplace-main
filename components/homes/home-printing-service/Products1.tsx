"use client";
import ProductCard3 from "@/components/product-cards/ProductCard3";
import { printingServiceProducts } from "@/data/products/printingService";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products1() {
  return (
    <div
      id="rbt-product-block-01"
      className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--64 mb_sm--32 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <span className="rbt-card-subtitle h5 mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Featured Packaging’s
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Packaging that</span> New brand
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          <div className="rbt-swiper-container-one rbt-arrow-between rbt-arrow--top-right">
            <Swiper
              className="swiper rbt-fashion-prd-card-activation-1 rbt-dot-bottom-center"
              {...{
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                pagination: {
                  el: ".rbt-swiper-pagination, .abc",
                  clickable: true,
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
                  992: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                },
              }}
              modules={[Pagination, Navigation]}
            >
              {printingServiceProducts.map((product, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  {/* Start Card Area */}
                  <ProductCard3
                    detailsPageUrl="/product-single-printing-service"
                    product={product}
                    animationOrder={i + 1}
                  />
                  {/* End Card Area */}
                </SwiperSlide>
              ))}
              <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
            </Swiper>
            <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-gray">
              <div className="custom-overflow">
                <i className="rbt-icon fa-regular fa-arrow-left" />
                <i className="rbt-icon-top fa-regular fa-arrow-left" />
              </div>
            </div>
            <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-gray">
              <div className="custom-overflow">
                <i className="rbt-icon fa-regular fa-arrow-right" />
                <i className="rbt-icon-top fa-regular fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
