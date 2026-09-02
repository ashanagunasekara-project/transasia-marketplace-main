"use client";
import ProductCard17 from "@/components/product-cards/ProductCard17";
import { gamesData } from "@/data/products/electronics";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-extra-ten rbt-rounded--16 rbt-section-gap2">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
                <div className="rbt-card-subtitle rbt-text-color-white rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                  Popular Products
                </div>
                <h2 className="rbt-title rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                  Discover<span className="rbt-bold--text"> Our Products</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--24 d-flex justify-content-center">
                <div className="rbt-swiper-container-one rbt-arrow-between">
                  <Swiper
                    className="swiper rbt-jw-prd-activation-1 rbt-swiper-scrollbar-bottom pb--60 pb_sm--4 pb_md--4 pb_lg--16"
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
                      scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                      },
                      navigation: {
                        prevEl: ".rbt-arrow-left",
                        nextEl: ".rbt-arrow-right",
                      },
                      breakpoints: {
                        375: {
                          slidesPerView: 1.75,
                        },
                        575: {
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
                    modules={[Autoplay, Navigation, Scrollbar]}
                  >
                    {gamesData.map((game) => (
                      <SwiperSlide className="swiper-slide" key={game.id}>
                        <ProductCard17 product={game} />
                      </SwiperSlide>
                    ))}
                    <div className="swiper-scrollbar" />
                  </Swiper>
                  <div className="rbt-swiper-arrow rbt-arrow-left rbt-arrow-brand rbt-arrow-lg">
                    <div className="custom-overflow">
                      <i className="rbt-icon fa-regular fa-arrow-left" />
                      <i className="rbt-icon-top fa-regular fa-arrow-left" />
                    </div>
                  </div>
                  <div className="rbt-swiper-arrow rbt-arrow-right rbt-arrow-brand rbt-arrow-lg">
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
