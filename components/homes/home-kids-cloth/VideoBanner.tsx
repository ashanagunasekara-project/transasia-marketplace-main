"use client";

import { useVideoControls } from "@/hooks/useVideoControls";

export default function VideoBanner() {
  const videoContainerRef = useVideoControls();
  return (
    <div className="rbt-component-area rbt-video-area">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div
          ref={videoContainerRef}
          className="video-container video-popup-style-two h-auto rbt-rounded--16"
          data-video-container
        >
          <div className="row">
            <div className="col-12 col-sm-6 p-0">
              <video
                className="video"
                autoPlay
                muted
                loop
                data-video
                playsInline
                preload="metadata"
                poster="/assets/images/product-img/baby-shop/kids-cloth-img-sm-1.webp"
              >
                <source src="/assets/videos/glass-video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-12 col-sm-6 p-0">
              <video
                className="video"
                autoPlay
                muted
                loop
                data-video
                playsInline
                preload="metadata"
                poster="/assets/images/product-img/baby-shop/kids-cloth-img-sm-2.webp"
              >
                <source
                  src="/assets/videos/beauty-women-01.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <button
            className="rbt-btn rbt-btn-round rbt-bg-color-secondary pause-btn"
            data-pause-btn
          >
            Pause Button
          </button>
        </div>
      </div>
    </div>
  );
}
