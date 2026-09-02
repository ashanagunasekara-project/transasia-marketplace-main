"use client";

import ProductCard5 from "@/components/product-cards/ProductCard5";
import { fashionProducts7 } from "@/data/products/fashion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="rbt-full-width-wrapper p-0">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Bestselling
                <span className="rbt-bold--text ml--4">
                  Girls Items For You
                </span>
              </h2>
              <p className="b1 rbt-text-color-gray-600">
                Premium styles picked for comfort, color, and smooth daily wear
                with trims. <br />
                Soft fabric. Bold hues. Confident daily looks for you.
              </p>
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
                autoplay: {
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                },
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
              modules={[Pagination, Autoplay]}
              pagination={{
                el: ".rbt-swiper-pagination",
                clickable: true,
              }}
            >
              {/* Start Single Card  */}
              {fashionProducts7.map((product) => (
                <SwiperSlide className="swiper-slide" key={product.id}>
                  <ProductCard5
                    detailsPageUrl="/product-single-fashion"
                    product={product}
                  />
                </SwiperSlide>
              ))}
              {/* End Single Card  */}
            </Swiper>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
