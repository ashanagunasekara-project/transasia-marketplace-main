"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { furnitureSliderProducts } from "@/data/products/furnitures";
import ProductCard2 from "@/components/product-cards/ProductCard2";
function HoverTransformSlider() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Hover Transform </span>Slider
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container ml-container overflow-hidden">
          <div className="row swiper-right-width">
            <div className="col-md-12">
              {/* Start Card Swiper Area */}
              <Swiper
                className="swiper product-swiper-activation-one gutter-swiper-24 ptb--20"
                {...{
                  slidesPerView: 1.2,
                  spaceBetween: 24,
                  loop: true,
                  navigation: false,
                  speed: 1000,

                  breakpoints: {
                    481: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 4 },
                  },
                }}
              >
                {furnitureSliderProducts.map((product, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="single-slide">
                      <ProductCard2 product={product}
                      animationOrder={i + 1}
                    />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* End Card Swiper Area */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HoverTransformSlider;
