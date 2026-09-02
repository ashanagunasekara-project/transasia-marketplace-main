"use client";

import MagneticButton from "@/components/common/ui/MagneticButton";
import VideoModal from "@/components/common/ui/VideoModal";
import Image from "next/image";

export default function VideoBanner() {
  return (
    <div className="rbt-component-area rbt-video-area rbt-section-gapBottom rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="video-popup-wrapper video-popup-style-one has-bottom-overlay">
          <Image
            className="w-100 radius-24 rbt-scroll-trigger zoom_in animation-order-1"
            alt="Video Images"
            src="/assets/images/video-section/video-basketball-a-01.webp"
            width={3520}
            height={1360}
          />
          <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
            <MagneticButton
              as="a"
              href="#"
              className="rbt-btn rounded-player popup-video rbtplayer xl-size bg-var-three position-absolute z-5"
              data-rbt-position-horigental={45}
              data-rbt-position-vertical={41}
            >
              <span>
                <i className="fa-solid fa-play" />
              </span>
            </MagneticButton>
          </VideoModal>
        </div>
      </div>
    </div>
  );
}
