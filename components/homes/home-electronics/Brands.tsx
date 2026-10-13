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
              <div className="rbt-component-section-title text-left">
                <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1 mb--0">
                  <span className="rbt-bold--text">Favorite Brands</span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <WaveShortIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box rbt-fshape-box-py-inc position-relative">
            <div className="brand-slider-wrapper position-relative">
              {/* Swiper Navigation Arrows */}
              <button
                type="button"
                className="rbt-swiper-arrow rbt-arrow-left brand-swiper-arrow-prev"
                aria-label="Previous Brand"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                type="button"
                className="rbt-swiper-arrow rbt-arrow-right brand-swiper-arrow-next"
                aria-label="Next Brand"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>

              <Swiper
                className="swiper rbt-brand-swiper-activation"
                modules={[Navigation]}
                navigation={{
                  prevEl: ".brand-swiper-arrow-prev",
                  nextEl: ".brand-swiper-arrow-next",
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
        </div>
        {/* End Brands Area */}
      </div>
      <style jsx>{`
        .brand-slider-wrapper {
          position: relative;
          padding: 0 36px;
        }
        @media (max-width: 576px) {
          .brand-slider-wrapper {
            padding: 0 24px;
          }
        }
        .rbt-swiper-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          color: #334155;
          transition: all 0.2s ease;
          padding: 0;
        }
        .brand-swiper-arrow-prev {
          left: -4px;
        }
        .brand-swiper-arrow-next {
          right: -4px;
        }
        .rbt-swiper-arrow:hover:not(:disabled) {
          background: var(--color-primary, #0d6efd);
          color: #ffffff;
          border-color: var(--color-primary, #0d6efd);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        :global(.swiper-button-disabled) {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
}

