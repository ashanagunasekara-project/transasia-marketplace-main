"use client";

import Image from "next/image";
import VideoModal from "@/components/common/ui/VideoModal";

const INTRO_VIDEO_URL = "https://www.youtube.com/watch?v=abFXQQzFVDc";

export default function IntroVideo() {
  return (
    <div className="rbt-component-area rbt-about-area rbt-section-gap2Top rbt-section-gap2Bottom">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="rbt-about-feature-area mt--0">
              <div className="inner">
                <div className="section-title text-start">
                  <h3 className="rbt-title mb--16">
                    We are the world&apos;s biggest electronics online store
                    where innovation meets the real printing.
                  </h3>
                  <p className="b1 rbt-text-color-gray-600 mb--24">
                    Let the beauty of what you love be what you do. Unimart is a
                    modern e-commerce platform designed to make online shopping
                    simple, secure, and convenient.
                  </p>
                  <div className="read-more-btn">
                    <VideoModal videoUrl={INTRO_VIDEO_URL}>
                      <a href="#" className="rbt-btn">
                        Play Video
                      </a>
                    </VideoModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="video-popup-wrapper rbt-curved-style-box">
              <Image
                className="w-100 rbt-radius"
                alt="Video Images"
                src="/assets/images/about/about-image-6.webp"
                width="1126"
                height="846"
              />
              <VideoModal videoUrl={INTRO_VIDEO_URL}>
                <button
                  className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
                  type="button"
                >
                  <span>
                    <i className="fa-solid fa-play"></i>
                  </span>
                </button>
              </VideoModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
