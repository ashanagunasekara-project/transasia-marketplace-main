"use client";
import { WaveMediumIcon } from "../../svg-icons";
import { electronicsHoverVideoData } from "@/data/products/electronics";

import ProductCard10 from "@/components/product-cards/ProductCard10";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function BoughtTogether({ spaceClass }: { spaceClass?: string }) {
  return (
    <div className={`rbt-component-area rbt-bg-color-white ${spaceClass ? spaceClass : "rbt-section-gap"}`}>
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-primary-stroke rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row pt--0">
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
                <div
                  className="rbt-swiper-container-one rbt-fashion-prd-card-activation-2-container rbt-arrow-between rbt-arrow-between-lg-dis"
                  style={{ visibility: "visible", overflow: "visible" }}
                >
                  <Swiper
                    {...{
                      slidesPerView: 1.8,
                      spaceBetween: 24,
                      loop: true,
                      pagination: false,
                      navigation: {
                        prevEl:
                          ".rbt-fashion-prd-card-activation-2-container .rbt-arrow-left",
                        nextEl:
                          ".rbt-fashion-prd-card-activation-2-container .rbt-arrow-right",
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
                    modules={[Navigation]}
                    className="swiper rbt-fashion-prd-card-activation-2"
                  >
                    {[
                      ...electronicsHoverVideoData,
                      ...electronicsHoverVideoData,
                    ].map((product, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <ProductCard10 product={product}
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
      </div>
    </div>
  );
}
