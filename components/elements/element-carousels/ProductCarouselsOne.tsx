"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { phoneProducts } from "@/data/products/phone";
import ProductCard7 from "@/components/product-cards/ProductCard7";
function ProductCarouselsOne() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-section-gap pt--32 rbt-bg-color-white rbt-section-gap3Bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Product Carousels </span> One
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
              <div className="rbt-swiper-container-one rbt-arrow-between rbt-progress-bottom">
                <Swiper
                  className="swiper rbt-phone-prd-activation-1"
                  {...{
                    slidesPerView: 1.3,
                    slidesPerGroup: 1,
                    spaceBetween: 24,
                    loop: true,
                    autoplay: {
                      delay: 50000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    },

                    navigation: {
                      prevEl: ".rbt-arrow-left",
                      nextEl: ".rbt-arrow-right",
                    },
                    breakpoints: {
                      575: {
                        slidesPerView: 1.3,
                      },
                      768: {
                        slidesPerView: 2.3,
                      },
                      992: {
                        slidesPerView: 2.6,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    },
                  }}
                  modules={[Navigation, Autoplay]}
                >
                  {phoneProducts.map((product, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <ProductCard7 product={product}
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
              </div>
            </div>
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default ProductCarouselsOne;
