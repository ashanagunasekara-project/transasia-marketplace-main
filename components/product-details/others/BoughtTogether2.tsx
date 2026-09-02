"use client";
import { WaveMediumIcon } from "../../svg-icons";
import ProductCard1 from "@/components/product-cards/ProductCard1";
import { products } from "@/data/products/fashion";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BoughtTogether2() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-white">
      <div className="container">
        <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-primary-stroke rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
          <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80 pt--0">
            <div className="col-lg-12">
              <div className="rbt-component-section-title rbt-bg-color-white">
                <h3 className="rbt-title">
                  <span className="rbt-bold--text">
                    Frequently Bought Together
                  </span>
                </h3>
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
                <div className="rbt-swiper-container-one rbt-arrow-between">
                  <Swiper
                    className="swiper rbt-fashion-prd-card-activation-1-v1 rbt-dot-bottom-center"
                    {...{
                      slidesPerView: 1.8,
                      spaceBetween: 24,
                      loop: true,
                      pagination: {
                        el: ".rbt-swiper-pagination, .abc",
                        clickable: true,
                        dynamicBullets: true,
                      },
                      navigation: {
                        prevEl: ".rbt-arrow-left",
                        nextEl: ".rbt-arrow-right",
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
                    modules={[Pagination, Navigation]}
                  >
                    {products.map((product, i) => (
                      <SwiperSlide className="swiper-slide" key={i}>
                        <ProductCard1 product={product}
                      animationOrder={i + 1}
                    />
                      </SwiperSlide>
                    ))}
                    <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one has-hide-dot-swipe" />
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
