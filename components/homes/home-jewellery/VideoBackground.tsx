"use client";
import Image from "next/image";
import VideoModal from "@/components/common/ui/VideoModal";

export default function VideoBackground() {
  return (
    <div className="rbt-component-area rbt-video-area rbt-section-gap rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="video-popup-wrapper video-popup-style-one has-bottom-overlay">
          <Image
            className="w-100 radius-24 rbt-scroll-trigger zoom_in animation-order-1"
            alt="Video Images"
            src="/assets/images/others/video-01.webp"
            width={3520}
            height={1034}
          />
          <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
            <a
              href="#"
              className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
            >
              <span>
                <i className="fa-solid fa-play" />
              </span>
            </a>
          </VideoModal>
        </div>
      </div>
    </div>
  );
}
