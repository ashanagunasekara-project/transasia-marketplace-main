"use client";
import ProductCard7 from "@/components/product-cards/ProductCard7";
import { phoneProducts } from "@/data/products/phone";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-gray-light rbt-rounded--16 rbt-section-gap2">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
                <h2 className="rbt-title">
                  Discover<span className="rbt-bold--text"> Our Products</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
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
                        <ProductCard7
                          detailsPageUrl="/product-single-phone-case"
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
      </div>
    </div>
  );
}
