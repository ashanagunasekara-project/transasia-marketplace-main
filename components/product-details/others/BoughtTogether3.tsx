"use client";

import { WaveMediumIcon } from "../../svg-icons";
import ProductCard7 from "@/components/product-cards/ProductCard7";
import { phoneProducts } from "@/data/products/phone";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BoughtTogether3() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-primary-stroke rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80 pt--0">
            <div className="col-lg-12">
              <div className="rbt-component-section-title rbt-bg-color-white">
                <h4 className="rbt-title">
                  <span className="rbt-bold--text">
                    Frequently Bought Together
                  </span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <WaveMediumIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-component-area rbt-fshape-box rbt-bg-color-white">
            {/* Start Card Area */}
            <div className="row row--12">
              <div className="col-md-12 col-12">
                <div className="rbt-swiper-container-one rbt-arrow-between rbt-arrow-between-lg-dis rbt-progress-bottom">
                  <Swiper
                    className="swiper rbt-phone-prd-activation-1"
                    {...{
                      slidesPerView: 1.3,
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
                    modules={[Pagination, Navigation, Autoplay]}
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
                  <div className="rbt-swiper-progress" />
                </div>
              </div>
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
