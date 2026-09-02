import Image from "next/image";
import { videoReviewCards } from "@/data/testimonials";

export default function VideoReview() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-gap--16 mb--24">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <h4 className="rbt-title">
                <span className="rbt-bold--text">
                  Review Videos for this product
                </span>
              </h4>
            </div>
            <a
              className="rbt-btn rbt-btn-gray-light rbt-btn-xs"
              data-fancybox="gallery"
              href="/assets/videos/video-review-1.mp4"
            >
              <span className="btn-icon mr--8">
                <i className="fa-regular fa-play" />
              </span>
              <span className="btn-text">Play All</span>
            </a>
          </div>
        </div>
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {videoReviewCards.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12 mt--24" key={index}>
              <div
                className={`rbt-card rbt-video-review-card rbt-bg-color-brand-50 rbt-scroll-trigger animation-order-${index + 1} fade_in`}
              >
                <a
                  className="inner stretched-link cursor-pointer"
                  data-fancybox="gallery"
                  href={item.videoSrc}
                >
                  <div className="rbt-video-gallery position-relative">
                    <div className="video-item">
                      <Image
                        alt="Ecommerce Review Video Image"
                        src={item.thumbnail || ""}
                        width={624}
                        height={350}
                      />
                      <video
                        className="hover-video"
                        src={item.videoSrc || ""}
                        muted
                        loop
                        preload="none"
                        playsInline
                      />
                    </div>
                  </div>
                  <div className="rbt-video-body d-flex">
                    <div className="rbt-reviewer-img">
                      <Image
                        alt="Ecommerce Reviewer Image"
                        src={item.reviewerImage || ""}
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="rbt-reviewer-content">
                      <span className="rbt-title">{item.title}</span>
                      <span className="rbt-subtitle">{item.reviewer}</span>
                      <span className="rbt-meta-dat">{item.date}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
