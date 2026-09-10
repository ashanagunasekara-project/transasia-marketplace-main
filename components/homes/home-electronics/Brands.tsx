"use client";
import { WaveShortIcon } from "../../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { electronicsBrands } from "@/data/brands";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Brands() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-gray-light">
      <div className="container">
        {/* Start Brands Area */}
        <div className="rbt-brand-style-one rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-left d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 mb--0">
                    <span className="rbt-bold--text">Favorite Brands</span>
                  </h4>
                  <span className="rbt-fshape-right-portion">
                    <WaveShortIcon />
                  </span>
                </div>
                <div className="rbt-brand-nav-arrows d-flex align-items-center rbt-gap--8">
                  <button
                    type="button"
                    className="rbt-brand-slider-prev rbt-round-btn border-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label="Previous Brands"
                  >
                    <i className="fa-regular fa-chevron-left" />
                  </button>
                  <button
                    type="button"
                    className="rbt-brand-slider-next rbt-round-btn border-0"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label="Next Brands"
                  >
                    <i className="fa-regular fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box rbt-fshape-box-py-inc">
            <Swiper
              className="swiper rbt-brand-swiper-activation"
              modules={[Navigation]}
              navigation={{
                prevEl: ".rbt-brand-slider-prev",
                nextEl: ".rbt-brand-slider-next",
              }}
              slidesPerView={5}
              spaceBetween={16}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 12 },
                576: { slidesPerView: 3, spaceBetween: 16 },
                768: { slidesPerView: 4, spaceBetween: 16 },
                1200: { slidesPerView: 5, spaceBetween: 16 },
              }}
            >
              {electronicsBrands.map((brand, index) => (
                <SwiperSlide key={brand.id} className="swiper-slide">
                  <div
                    className={`rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-${
                      index + 1
                    }`}
                  >
                    <Link href={`/shop-by-brands`}>
                      <div className="rbt-brand-inner">
                        <div className="brand-image">
                          {brand.imgSrc && (
                            <Image
                              alt="Ecommerce Brand Images"
                              src={brand.imgSrc}
                              width={brand.width}
                              height={brand.height}
                            />
                          )}
                          <span className="rbt-divider-arrow has-right-angel-animation" />
                        </div>
                        <div className="rbt-content">
                          <span className="discount-text">
                            {brand.discount}
                          </span>
                          <span className="prd-text">
                            Total{" "}
                            <span className="prd-number">
                              {brand.productCount}
                            </span>{" "}
                            Products
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* End Brands Area */}
      </div>
    </div>
  );
}
