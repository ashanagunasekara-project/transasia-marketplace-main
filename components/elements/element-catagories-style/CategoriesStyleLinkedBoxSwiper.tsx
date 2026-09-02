"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
function CategoriesStyleLinkedBoxSwiper() {
  return (
    <>
      {/* Start Component Area */}
      <div
        id="rbt-category-block-07"
        className="rbt-component-area rbt-categories-area rbt-section-gap rbt-bg-color-white"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Categories Style
                  <span className="rbt-bold--text ml--4">
                    Linked Box Swiper
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container ml-container overflow-hidden">
          {/* Categories Swiper */}
          <div className="row swiper-right-sm-width">
            <div className="col-md-12">
              {/* Start Card Swiper Area */}
              <Swiper
                className="swiper category-activation-one rbt-arrow-between gutter-swiper-24 mt--0 mb--0 ptb--20"
                {...{
                  slidesPerView: 1.3,
                  spaceBetween: 0,
                  loop: true,
                  navigation: false,
                  breakpoints: {
                    481: { slidesPerView: 2.3 },
                    768: { slidesPerView: 3.3 },
                    992: { slidesPerView: 4.3 },
                    1400: { slidesPerView: 5.3 },
                    1600: { slidesPerView: 6.3 },
                  },
                }}
              >
                {/* Start Category Box Layout  */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-1">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <a href="#">
                            <Image
                              className="rbt-scroll-trigger zoom_in animation-order-1"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-bg-06.webp"
                              width={260}
                              height={260}
                            />
                          </a>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <a href="#" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <a href="#">01 Chairs</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End Category Box Layout  */}
                {/* Start Category Box Layout  */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-2">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <a href="#">
                            <Image
                              className="rbt-scroll-trigger zoom_in animation-order-2"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-bg-07.webp"
                              width={260}
                              height={260}
                            />
                          </a>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <a href="#" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <a href="#">02 Sofas</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End Category Box Layout  */}
                {/* Start Category Box Layout  */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-4">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <a href="#">
                            <Image
                              className="rbt-scroll-trigger zoom_in animation-order-4"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-bg-08.webp"
                              width={260}
                              height={260}
                            />
                          </a>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <a href="#" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <a href="#">04 Homedecors</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End Category Box Layout  */}
                {/* Start Category Box Layout  */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-5">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <a href="#">
                            <Image
                              className="rbt-scroll-trigger zoom_in animation-order-5"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-bg-09.webp"
                              width={260}
                              height={260}
                            />
                          </a>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <a href="#" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <a href="#">05 Coffee Tables</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End Category Box Layout  */}
                {/* Start Category Box Layout  */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-6">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <a href="#">
                            <Image
                              className="rbt-scroll-trigger zoom_in animation-order-6"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-bg-10.webp"
                              width={260}
                              height={260}
                            />
                          </a>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <a href="#" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <a href="#">06 Classic Chair</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End Category Box Layout  */}
                {/* Start Category Box Layout  */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-7">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <a href="#">
                            <Image
                              className="rbt-scroll-trigger zoom_in animation-order-7"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-bg-08.webp"
                              width={260}
                              height={260}
                            />
                          </a>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <a href="#" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <a href="#">04 Homedecors</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End Category Box Layout  */}
                {/* Start Category Box Layout  */}
                <SwiperSlide className="swiper-slide">
                  <div className="single-slide">
                    <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-8">
                      <div className="inner">
                        <div className="rbt-image-portion position-relative overflow-hidden">
                          <a href="#">
                            <Image
                              className="rbt-scroll-trigger zoom_in animation-order-8"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-bg-09.webp"
                              width={260}
                              height={260}
                            />
                          </a>
                          <div className="rbt-right-corner-portion bottom--position">
                            <div className="rbt-corner-portion-wrapper">
                              <a href="#" className="rbt-card-link-btn">
                                <i className="fa-solid fa-arrow-up-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <a href="#">05 Coffee Tables</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* End Category Box Layout  */}
              </Swiper>
              {/* End Card Swiper Area */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesStyleLinkedBoxSwiper;
