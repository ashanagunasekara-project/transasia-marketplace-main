"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { printingServiceProducts } from "@/data/products/printingService";
import ProductCard3 from "@/components/product-cards/ProductCard3";
function ProductCarouselsTwo() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--64 mb_sm--32 flex-wrap rbt-gap--16">
              <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
                <span className="rbt-card-subtitle h5 mt--0 rbt-scroll-trigger fade_in animation-order-1">
                  Featured Packaging’s
                </span>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                  <span className="rbt-bold--text">Packaging that</span> New
                  brand
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            <div className="rbt-swiper-container-one swiper-2 rbt-arrow-between rbt-arrow--top-right">
              <Swiper
                className="swiper rbt-fashion-prd-card-activation-1 rbt-dot-bottom-center"
                {...{
                  slidesPerView: 1,
                  spaceBetween: 24,
                  loop: true,
                  pagination: {
                    el: ".swiper-2 .rbt-swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    prevEl: ".swiper-2 .rbt-arrow-left-1",
                    nextEl: ".swiper-2 .rbt-arrow-right-1",
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
                    <ProductCard3 product={product}
                      animationOrder={i + 1}
                    />
                    {/* End Card Area */}
                  </SwiperSlide>
                ))}
                <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one" />
              </Swiper>
              <div className="rbt-swiper-arrow rbt-arrow-left-1 rbt-arrow-gray">
                <div className="custom-overflow">
                  <i className="rbt-icon fa-regular fa-arrow-left" />
                  <i className="rbt-icon-top fa-regular fa-arrow-left" />
                </div>
              </div>
              <div className="rbt-swiper-arrow rbt-arrow-right-1 rbt-arrow-gray">
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
    </>
  );
}

export default ProductCarouselsTwo;
