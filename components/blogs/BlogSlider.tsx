"use client";
import Link from "next/link";
import Image from "next/image";

import { blogPosts26 } from "@/data/blogs";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BlogSlider({
  className = "rbt-component-area rbt-blog-post-area rbt-bg-color-gray-light rbt-swiper-container-one rbt-swiper-container-one-blog rbt-arrow-between",
}) {
  return (
    <div className={className}>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            {/* Start banner part */}
            <div className="rbt-blog-post-banner rbt-curved-style-box">
              <Swiper
                className="swiper rbt-blog-wrapper-slide-activation"
                {...{
                  slidesPerView: 1,
                  spaceBetween: 24,
                  slidesPerGroup: 1,
                  loop: true,
                  draggable: true,
                  navigation: {
                    prevEl: ".rbt-arrow-left",
                    nextEl: ".rbt-arrow-right",
                  },
                }}
                modules={[Navigation]}
              >
                {blogPosts26.map((post, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="rbt-blog-post-wrapper">
                      <div className="row row--12">
                        {/* Content Section */}
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                          <div className="rbt-blog-post-banner-content">
                            <div className="rbt-blog-post-meta">
                              <ul className="rbt-blog-details-meta-list">
                                <li>
                                  <a href="#">{post.category}</a>
                                </li>
                                <li>
                                  <a href="#">{post.date}</a>
                                </li>
                              </ul>
                            </div>
                            <h3 className="rbt-title rbt-blog-banner-title">
                              <Link href={`/blog-single/${post.id}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="rbt-blog-banner-text">
                              {post.description}
                            </p>
                            <Link
                              className="rbt-btn rbt-btn-md"
                              href={`/blog-single/${post.id}`}
                            >
                              Continue Reading
                            </Link>
                          </div>
                        </div>

                        {/* Image Slider Section */}
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                          <div className="rbt-blog-banner-thumbnail position-relative mt_sm--0 mt_md--0 mb_sm--24 mb_md--24">
                            <Swiper
                              className="swiper rbt-blog-banner-slide-activation rbt-curved-style-box"
                              {...{
                                slidesPerView: 1,
                                loop: true,
                                autoplay: {
                                  delay: 3000,
                                },
                                pagination: {
                                  el: `.rbt-blog-slider-${index}`,
                                  clickable: true,
                                },
                                navigation: false,
                              }}
                              modules={[Pagination, Autoplay]}
                            >
                              {post.images?.map((img, i) => (
                                <SwiperSlide className="swiper-slide" key={i}>
                                  <div className="rbt-about-banner-img">
                                    <Image
                                      alt="About us image"
                                      src={img}
                                      width={1130}
                                      height={764}
                                    />
                                  </div>
                                </SwiperSlide>
                              ))}

                              {/* Pagination */}
                              <div
                                className={`swiper-pagination rbt-swiper-progress rbt-swiper-pagination-dot-extend rbt-blog-slider-${index}`}
                              />
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* End banner part */}
          </div>
        </div>
        {/* Start slider navigation buttons */}
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
        {/* End slider navigation buttons */}
      </div>
    </div>
  );
}
