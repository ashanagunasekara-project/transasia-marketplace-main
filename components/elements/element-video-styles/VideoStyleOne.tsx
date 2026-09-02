"use client";
import VideoModal from "@/components/common/ui/VideoModal";
import Image from "next/image";
function VideoStyleOne() {
  return (
    <>
      <div className="rbt-component-area rbt-video-area rbt-section-gapTop rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Video Style <span className="rbt-bold--text">One</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper plr--80 plr_sm--16">
          <div className="video-popup-wrapper video-popup-style-one has-bottom-overlay">
            <Image
              className="w-100 radius-24"
              alt="Video Images"
              src="/assets/images/others/video-01.webp"
              width={3520}
              height={1034}
            />
            <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
              <a
                className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
                href="#"
              >
                <span>
                  <i className="fa-solid fa-play" />
                </span>
              </a>
            </VideoModal>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoStyleOne;
