'use client';

import Image from "next/image";
import VideoModal from "@/components/common/ui/VideoModal";
import { useParallax } from "@/hooks/useParallax";

export default function Banner() {
  const parallaxRef = useParallax();
  return (
    <div ref={parallaxRef} className="rbt-component-area rbt-lookbook-area rbt-bg-color-brand-200">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="rbt-video-section rbt-video-section-style-one d-flex flex-column align-items-center justify-content-center rbt-section-gap rbt-scroll-trigger zoom_in animation-order-3">
              <h2 className="rbt-title text-center">
                How Does The
                <span className="rbt-bold--text d-block">
                  Printing Service Works
                </span>
              </h2>
              <VideoModal videoUrl="https://www.youtube.com/watch?v=abFXQQzFVDc">
                <a
                  href="#"
                  className="rbt-btn rounded-player md-size popup-video rbtplayer"
                >
                  <span>
                    <i className="fa-solid fa-play" />
                  </span>
                </a>
              </VideoModal>
              <div
                className="rbt-video-sm-img rbt-video-sm-img-1 positin-absulate"
                data-parallax='{"x": 10, "y": 40}'
                data-rbt-position-horigental={8}
                data-rbt-position-vertical={2}
              >
                <Image
                  alt="Ecommerce video-section images"
                  src="/assets/images/video-section/video-sm-a-01.webp"
                  width={403}
                  height={449}
                />
              </div>
              <div
                className="rbt-video-sm-img rbt-video-sm-img-2 positin-absulate"
                data-parallax='{"x": 0, "y": 20}'
                data-rbt-position-horigental={2}
                data-rbt-position-vertical={30}
              >
                <Image
                  alt="Ecommerce video-section images"
                  src="/assets/images/video-section/video-sm-a-02.webp"
                  width={333}
                  height={397}
                />
              </div>
              <div
                className="rbt-video-sm-img rbt-video-sm-img-3 positin-absulate"
                data-parallax='{"x": 20, "y": 10}'
                data-rbt-position-horigental={10}
                data-rbt-position-vertical={55}
              >
                <Image
                  alt="Ecommerce video-section images"
                  src="/assets/images/video-section/video-sm-a-03.webp"
                  width={310}
                  height={310}
                />
              </div>
              <div
                className="rbt-video-sm-img rbt-video-sm-img-4 positin-absulate"
                data-parallax='{"x": 0, "y": 30}'
                data-rbt-position-horigental={75}
                data-rbt-position-vertical={5}
              >
                <Image
                  alt="Ecommerce video-section images"
                  src="/assets/images/video-section/video-sm-a-04.webp"
                  width={244}
                  height={227}
                />
              </div>
              <div
                className="rbt-video-sm-img rbt-video-sm-img-5 positin-absulate"
                data-parallax='{"x": 30, "y": 20}'
                data-rbt-position-horigental={80}
                data-rbt-position-vertical={25}
              >
                <Image
                  alt="Ecommerce video-section images"
                  src="/assets/images/video-section/video-sm-a-05.webp"
                  width={360}
                  height={352}
                />
              </div>
              <div
                className="rbt-video-sm-img rbt-video-sm-img-6 positin-absulate"
                data-parallax='{"x": 0, "y": 40}'
                data-rbt-position-horigental={75}
                data-rbt-position-vertical={45}
              >
                <Image
                  alt="Ecommerce video-section images"
                  src="/assets/images/video-section/video-sm-a-06.webp"
                  width={320}
                  height={335}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
