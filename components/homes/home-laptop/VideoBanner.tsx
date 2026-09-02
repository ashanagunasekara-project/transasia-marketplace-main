"use client";
import { useVideoControls } from "@/hooks/useVideoControls";

export default function VideoBanner() {
  const videoContainerRef = useVideoControls();
  return (
    <div className="rbt-component-area rbt-video-area rbt-section-gap">
      <div className="wrapper">
        <div className="rbt-products-area-box rbt-bg-color-gray-light">
          <div
            ref={videoContainerRef}
            className="video-container video-popup-style-two"
            data-video-container
          >
            <video
              className="video"
              data-video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/assets/videos/smart-devices-a-01.mp4"
                type="video/mp4"
              />
            </video>
            <button className="rbt-btn rbt-btn-round pause-btn" data-pause-btn>
              Pause Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
