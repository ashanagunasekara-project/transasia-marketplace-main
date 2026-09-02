"use client";
import { WaveThinIcon } from "../../svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { fashionProducts } from "@/data/products/fashion";
import ProductCard1 from "@/components/product-cards/ProductCard1";
function ProductCarouselsThree() {
  return (
    <>
      <div className="rbt-component-area rbt-products-banner-area rbt-section-gap pt--32 rbt-bg-color-white rbt-section-gap3Bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Product Carousels </span> Two
                </h2>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width rbt-product-fshape-box-outline-style">
            <div className="row rbt-section-gap2Top pt_sm--100 pt_md--80">
              <div className="col-lg-12">
                <div className="rbt-component-section-title rbt-bg-color-white">
                  <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                    <span className="rbt-bold--text">Product Carousels</span>{" "}
                    Folder Shape
                  </h4>
                  <span className="rbt-fshape-right-portion">
                    <WaveThinIcon />
                  </span>
                </div>
              </div>
            </div>
            <div className="rbt-component-area rbt-fshape-box rbt-bg-color-white">
              {/* Start Card Area */}
              <div className="row row--12">
                <div className="col-md-12 col-12">
                  <div className="rbt-swiper-container-one rbt-fashion-prd-card-activation-2-container rbt-arrow-between rbt-arrow-between-lg-dis">
                    <Swiper
                      className="swiper rbt-fashion-prd-card-activation-2"
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
                    >
                      {fashionProducts.map((product, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <ProductCard1 product={product}
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
    </>
  );
}

export default ProductCarouselsThree;
