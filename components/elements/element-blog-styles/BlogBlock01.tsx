"use client";
import Link from "next/link";
import Image from "next/image";
import { blogPosts26 } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
function BlogBlock01() {
  const post = blogPosts26[0];
  return (
    <>
      <div
        id="rbt-blog-area-01"
        className="rbt-component-area rbt-bg-color-gray-light rbt-blog-post-area rbt-section-gap"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Blog Standard</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="rbt-blog-post-banner rbt-curved-style-box">
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
                      <Link href={`/blog-single/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="rbt-blog-banner-text">{post.description}</p>
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
                          el: `.rbt-blog-slider`,
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
                        className={`swiper-pagination rbt-swiper-progress rbt-swiper-pagination-dot-extend rbt-blog-slider`}
                      />
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogBlock01;
