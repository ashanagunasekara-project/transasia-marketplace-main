"use client";
import { useVideoControls } from "@/hooks/useVideoControls";

function VideoStyleThree() {
  const videoContainerRef = useVideoControls();
  return (
    <>
      <div className="rbt-component-area rbt-video-area">
        <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Video Style <span className="rbt-bold--text">Three</span>
                </h2>
              </div>
            </div>
          </div>
          <div
            ref={videoContainerRef}
            className="video-container video-popup-style-two h-auto rbt-rounded--16"
            data-video-container
          >
            <div className="row">
              <div className="col-12 col-sm-6 p-0">
                <video
                  data-video
                  className="video"
                  autoPlay
                  muted={true}
                  loop={true}
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/assets/videos/glass-video.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-12 col-sm-6 p-0">
                <video
                  data-video
                  className="video"
                  autoPlay
                  muted={true}
                  loop={true}
                  playsInline
                  preload="metadata"
                >
                  <source
                    src="/assets/videos/beauty-women-01.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <button
              data-pause-btn
              className="rbt-btn rbt-btn-round rbt-bg-color-secondary pause-btn"
            >
              Pause Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoStyleThree;
