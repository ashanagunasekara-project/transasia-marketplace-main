"use client";

import { useVideoControls } from "@/hooks/useVideoControls";

export default function BannerVideo() {
  const videoContainerRef = useVideoControls();
  return (
    <div className="rbt-component-area rbt-video-area rbt-bg-color-gray-light">
      <div className="wrapper">
        <div
          ref={videoContainerRef}
          className="video-container video-popup-style-two object-position-top"
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
            <source src="/assets/videos/glass-video.mp4" type="video/mp4" />
          </video>
          <button className="rbt-btn rbt-btn-round pause-btn" data-pause-btn>
            Pause Button
          </button>
        </div>
      </div>
    </div>
  );
}
