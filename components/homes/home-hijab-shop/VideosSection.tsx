"use client";

import MagneticButton from "@/components/common/ui/MagneticButton";
import VideoModal from "@/components/common/ui/VideoModal";
import { HIJAB_VIDEOS } from "@/data/videoSections";
import Image from "next/image";

export default function VideosSection() {
  return (
    <div className="rbt-component-area rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Meet The <span className="rbt-bold--text">Skin Influencer</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Instagram Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {HIJAB_VIDEOS.map((video) => (
            <div
              className="col-lg-1-5 col-xl-3 col-xxl-3 col-md-6 col-sm-12 col-12 mt--24"
              key={video.username}
            >
              <div className="rbt-instagram-card">
                <div className="instagram-thumbnail">
                  <Image
                    alt="Instagram Post"
                    src={video.imgSrc}
                    width={490}
                    height={760}
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
                    <a href="#" type="button" className="rbt-link-reset">
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
  );
}
