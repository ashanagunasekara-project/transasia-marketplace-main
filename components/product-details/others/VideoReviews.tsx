import Image from "next/image";

export default function VideoReviews() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
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
          <div className="col-lg-3 col-md-6 col-12 mt--24">
            <div className="rbt-card rbt-video-review-card rbt-bg-color-brand-50 rbt-scroll-trigger animation-order-1 fade_in">
              <a
                className="inner stretched-link cursor-pointer"
                data-fancybox="gallery"
                href="/assets/videos/video-review-1.mp4"
              >
                <div className="rbt-video-gallery position-relative">
                  <div className="video-item">
                    <Image
                      alt="Ecommerce Review Video Image"
                      src="/assets/images/product-single/video-rev-img/video-review-img-02.webp"
                      width={624}
                      height={350}
                    />
                    <video
                      className="hover-video"
                      src="/assets/videos/video-review-1.mp4"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="none"
                    />
                  </div>
                </div>
                <div className="rbt-video-body d-flex">
                  <div className="rbt-reviewer-img">
                    <Image
                      alt="Ecommerce Reviewer Image"
                      src="/assets/images/product-single/video-rev-img/reviewer-img-01.webp"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="rbt-reviewer-content">
                    <span className="rbt-title">
                      Samsung Galaxy Buds 2 Pro Wireless Earbuds
                    </span>
                    <span className="rbt-subtitle">CEONTHEMAKING</span>
                    <span className="rbt-meta-dat">March 6, 2018</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt--24">
            <div className="rbt-card rbt-video-review-card rbt-bg-color-brand-50 rbt-scroll-trigger animation-order-2 fade_in">
              <a
                className="inner stretched-link cursor-pointer"
                data-fancybox="gallery"
                href="/assets/videos/video-review-1.mp4"
              >
                <div className="rbt-video-gallery position-relative">
                  <div className="video-item">
                    <Image
                      alt="Ecommerce Review Video Image"
                      src="/assets/images/product-single/video-rev-img/video-review-img-02.webp"
                      width={624}
                      height={350}
                    />
                    <video
                      className="hover-video"
                      src="/assets/videos/video-review-1.mp4"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="none"
                    />
                  </div>
                </div>
                <div className="rbt-video-body d-flex">
                  <div className="rbt-reviewer-img">
                    <Image
                      alt="Ecommerce Reviewer Image"
                      src="/assets/images/product-single/video-rev-img/reviewer-img-01.webp"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="rbt-reviewer-content">
                    <span className="rbt-title">
                      Apple AirPods (3rd Generation) with MagSafe
                    </span>
                    <span className="rbt-subtitle">CEONTHEMAKING</span>
                    <span className="rbt-meta-dat">March 6, 2018</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt--24">
            <div className="rbt-card rbt-video-review-card rbt-bg-color-brand-50 rbt-scroll-trigger animation-order-3 fade_in">
              <a
                className="inner stretched-link cursor-pointer"
                data-fancybox="gallery"
                href="/assets/videos/video-review-1.mp4"
              >
                <div className="rbt-video-gallery position-relative">
                  <div className="video-item">
                    <Image
                      alt="Ecommerce Review Video Image"
                      src="/assets/images/product-single/video-rev-img/video-review-img-03.webp"
                      width={624}
                      height={350}
                    />
                    <video
                      className="hover-video"
                      src="/assets/videos/video-review-1.mp4"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="none"
                    />
                  </div>
                </div>
                <div className="rbt-video-body d-flex">
                  <div className="rbt-reviewer-img">
                    <Image
                      alt="Ecommerce Reviewer Image"
                      src="/assets/images/product-single/video-rev-img/reviewer-img-01.webp"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="rbt-reviewer-content">
                    <span className="rbt-title">
                      Sony WF-1000XM5 Noise-Canceling Earbuds
                    </span>
                    <span className="rbt-subtitle">CEONTHEMAKING</span>
                    <span className="rbt-meta-dat">March 6, 2018</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mt--24">
            <div className="rbt-card rbt-video-review-card rbt-bg-color-brand-50 rbt-scroll-trigger animation-order-4 fade_in">
              <a
                className="inner stretched-link cursor-pointer"
                data-fancybox="gallery"
                href="/assets/videos/video-review-1.mp4"
              >
                <div className="rbt-video-gallery position-relative">
                  <div className="video-item">
                    <Image
                      alt="Ecommerce Review Video Image"
                      src="/assets/images/product-single/video-rev-img/video-review-img-04.webp"
                      width={624}
                      height={350}
                    />
                    <video
                      className="hover-video"
                      src="/assets/videos/video-review-1.mp4"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="none"
                    />
                  </div>
                </div>
                <div className="rbt-video-body d-flex">
                  <div className="rbt-reviewer-img">
                    <Image
                      alt="Ecommerce Reviewer Image"
                      src="/assets/images/product-single/video-rev-img/reviewer-img-01.webp"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="rbt-reviewer-content">
                    <span className="rbt-title">
                      JBL Live Pro 2 VS Live Free 2 VS Reflect Aero
                    </span>
                    <span className="rbt-subtitle">CEONTHEMAKING</span>
                    <span className="rbt-meta-dat">March 6, 2018</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
