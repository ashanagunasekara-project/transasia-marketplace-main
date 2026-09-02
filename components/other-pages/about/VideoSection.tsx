'use client';
import Image from "next/image";
import VideoModal from "@/components/common/ui/VideoModal";

export default function VideoSection() {
  return (
    <div className="rbt-component-area rbt-about-area rbt-section-gap2Top rbt-section-gap2Bottom">
      <div className="container">
        <div className="row gx-5 gy-4 align-items-center">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="rbt-about-feature-area mt--0">
              <div className="inner">
                <div className="section-title text-start">
                  <span className="rbt-card-subtitle">About Us</span>
                  <h3 className="rbt-title mb--16">
                    We are the {`world's`} biggest electronics online store
                    where innovation meets the real printing.
                  </h3>
                  <p className="b1 rbt-text-color-gray-600 mb--24">
                    We build commerce experiences that feel fast, clear, and
                    conversion-focused. Our team combines thoughtful design,
                    scalable front-end architecture, and practical workflows to
                    help brands launch confidently and grow with consistency.
                  </p>
                  <div className="read-more-btn">
                    <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
                      <a href="#!" className="rbt-btn" type="button">
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
                src="/assets/images/about/about-image-5.webp"
                width={1126}
                height={846}
              />
              <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
                <a
                  className="rbt-btn rounded-player popup-video position-to-top rbtplayer"
                  href="#!"
                >
                  <span>
                    <i className="fa-solid fa-play" />
                  </span>
                </a>
              </VideoModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
