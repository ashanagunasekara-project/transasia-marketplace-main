"use client";

import MagneticButton from "@/components/common/ui/MagneticButton";
import VideoModal from "@/components/common/ui/VideoModal";
import { DOG_VIDEOS } from "@/data/videoSections";
import Image from "next/image";

export default function VideosSection() {
  return (
    <div className="rbt-component-area rbt-products-area">
      <div className="rbt-full-width-wrapper">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-brand-300 pt--80 pb--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 mb--32 align-items-center">
                  <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                    Meet The{" "}
                    <span className="rbt-bold--text">Product Users</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* Start Instagram Card Area */}
            <div className="row row--12 mt_dec--24 rbt-mobile-row">
              {DOG_VIDEOS.map((video) => (
                <div
                  className="col-lg-1-5 col-xl-3 col-xxl-3 col-md-6 col-sm-12 col-12 mt--24"
                  key={video.username}
                >
                  <div className="rbt-instagram-card">
                    <div className="instagram-thumbnail">
                      <Image
                        alt="Instagram Post"
                        width={490}
                        height={760}
                        src={video.imgSrc}
                      />
                      <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
                        <MagneticButton
                          as="a"
                          href="#"
                          className="rbt-btn rounded-player popup-video rbtplayer sm-size bg-var-three"
                          data-rbt-position-vertical={50}
                          data-rbt-position-horigental={50}
                        >
                          <span>
                            <i className="fa-solid fa-play" />
                          </span>
                        </MagneticButton>
                      </VideoModal>
                    </div>
                    <h6 className="rbt-instagram-caption">
                      <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
                        <a href="#" className="rbt-link-reset">
                          <strong>{video.username}</strong> - {video.caption}
                        </a>
                      </VideoModal>
                    </h6>
                  </div>
                </div>
              ))}
            </div>
            {/* End Instagram Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
