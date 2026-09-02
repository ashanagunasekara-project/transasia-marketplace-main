"use client";

import MagneticButton from "@/components/common/ui/MagneticButton";
import VideoModal from "@/components/common/ui/VideoModal";
import { SUPLIMENT_VIDEOS } from "@/data/videoSections";
import Image from "next/image";

export default function VideosSection() {
  return (
    <div className="rbt-component-area rbt-section-gapTop">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-gray-light rbt-rounded--16 rbt-section-gap2">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 mb--32">
                <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                  Popular Products
                </span>
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Now Trending Items</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="container">
            {/* Start Instagram Card Area */}
            <div className="row row--12 mt_dec--24 rbt-mobile-row">
              {SUPLIMENT_VIDEOS.map((video) => (
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
                          type="button"
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
      </div>
    </div>
  );
}
