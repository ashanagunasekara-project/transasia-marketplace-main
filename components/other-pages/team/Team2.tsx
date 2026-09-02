"use client";
import Image from "next/image";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamMembers } from "@/data/team";

export default function Team2() {
  return (
    <div className="rbt-team-area rbt-bg-color-white rbt-section-gapTop mb--20">
      <div className="wrapper">
        <div className="row row--0">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Meet Our Team</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--0">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation, Pagination]}
              {...{
                slidesPerView: 1,
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
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                  },
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                  992: {
                    slidesPerView: 3,
                    slidesPerGroup: 2,
                  },
                  1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                  },
                  1600: {
                    slidesPerView: 6,
                    slidesPerGroup: 1,
                  },
                },
              }}
              className="swiper team-slide-activation rbt-arrow-between rbt-dot-bottom-center pl--24 pr--24 pt--32 pb--60 rbt-swiper-lr-shadow rbt-arrow-show-dfl"
            >
              {teamMembers.slice(0,10).map((member) => (
                <SwiperSlide key={member.id} className="swiper-slide">
                  <div className="rbt-team team-style-default style-three rbt-hover">
                    <div className="inner">
                      <div className="thumbnail">
                        {member.image && (
                          <Image
                            alt={member.name || ""}
                            src={member.image}
                            width={415}
                            height={555}
                          />
                        )}
                      </div>
                      <div className="content">
                        <h6 className="title">{member.name}</h6>
                        <p className="b3 mb--0 subtitle">
                          <i className="fa-regular fa-briefcase" />
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="rbt-swiper-arrow rbt-arrow-left snbpteam2">
                <div className="custom-overflow">
                  <i className="rbt-icon fa-regular fa-arrow-left" />
                  <i className="rbt-icon-top fa-regular fa-arrow-left" />
                </div>
              </div>
              <div className="rbt-swiper-arrow rbt-arrow-right snbnteam2">
                <div className="custom-overflow">
                  <i className="rbt-icon fa-regular fa-arrow-right" />
                  <i className="rbt-icon-top fa-regular fa-arrow-right" />
                </div>
              </div>
              <div className="rbt-swiper-pagination rbt-swiper-pagination-var-one has-hide-dot-swipe spdteam2" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
