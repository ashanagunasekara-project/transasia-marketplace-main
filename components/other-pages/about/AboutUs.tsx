import { WaveMediumIcon } from '../../svg-icons';
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="rbt-component-area rbt-section-gap2Top rbt-about-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-fshape-box-outline-style">
              <div className="row">
                <div className="col-lg-12">
                  <div className="rbt-component-section-title rbt-about-banner-fshape-title rbt-bg-color-white">
                    <h6 className="rbt-title rbt-text-color-primary">
                      <span className="rbt-bold--text">About Us</span>
                    </h6>
                    <span className="rbt-fshape-right-portion">
                      <WaveMediumIcon />
                    </span>
                  </div>
                </div>
              </div>
              <div className="rbt-fshape-box rbt-bg-color-white rbt-about-banner-fshape">
                <div className="rbt-about-banner-content-wrapper">
                  <div className="row row--24">
                    <div className="col-12 col-md-6">
                      <div className="rbt-about-banner-content">
                        <h3 className="rbt-title rbt-text-bold mb--16">
                          Far far away, behind word mountains, far from the
                          countries Vokalia Consonantia, there live the blind
                          texts.
                        </h3>
                        <p className="rbt-about-banner-text">
                          A client that’s unhappy for a reason is a problem, a
                          that’s unhappy though he or her can’t quite put a
                          finger on it is worse. Chances are there wasn’t
                          collaboration, communication, and checkpoints, there
                          wasn’t.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="rbt-curved-style-box rbt-about-banner-card">
                        <div className="inner">
                          <div className="swiper rbt-about-banner-slide-activation">
                            <div className="swiper-wrapper">
                              {/* Slides */}
                              <div className="swiper-slide">
                                <div className="rbt-about-banner-img">
                                  <Image
                                    alt="About us image"
                                    src="/assets/images/about/about-image-1.webp"
                                    width={1174}
                                    height={820}
                                  />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="rbt-about-banner-img">
                                  <Image
                                    alt="About us image"
                                    src="/assets/images/about/about-mobile-a-02.webp"
                                    width={1130}
                                    height={764}
                                  />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="rbt-about-banner-img">
                                  <Image
                                    alt="About us image"
                                    src="/assets/images/about/about-mobile-a-03.webp"
                                    width={1130}
                                    height={764}
                                  />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="rbt-about-banner-img">
                                  <Image
                                    alt="About us image"
                                    src="/assets/images/about/about-mobile-a-01.webp"
                                    width={1130}
                                    height={764}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* pagination */}
                            <div className="swiper-pagination rbt-swiper-progress rbt-swiper-pagination-dot-extend" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
