import Image from "next/image";
function PerformanceComponents() {
  return (
    <>
      <div className="rbt-splash-element-builder-area splash-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center mb--48">
                <h2 className="mb--12">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    Fast Performance Across Platforms
                  </span>
                </h2>
                <p className="mb--40 b1 rbt-scroll-trigger fade_in animation-order-4">
                  Experience unparalleled speed and efficiency with Unimart,
                  <br />
                  optimized for all platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto">
              <div className="row row--12 mt_dec--24">
                {/* start single card */}
                <div className="col-12 mt--24">
                  <div className="rbt-ele-builder-card rbt-element-coming-soon card-content-side">
                    <div className="rbt-card-content">
                      <div className="content-inner">
                        <span className="overlay-text">01</span>
                        <h2 className="rbt-title rbt-text-bold">
                          Page Speed Checked on PageSpeed Insights
                        </h2>
                        <p className="rbt-description">
                          Analyze your website&apos;s performance using
                          PageSpeed Insights to ensure fast loading times and
                          optimal user experience.
                        </p>
                        <div className="mt--32">
                          <a
                            href="https://nextjs.getunimart.com/docs"
                            className="rbt-btn rbt-btn-md rbt-btn-secondary"
                          >
                            Check example
                          </a>
                          <a
                            href="https://nextjs.getunimart.com/docs"
                            className="rbt-btn-link rbt-text-color-gray-500 ml--8"
                          >
                            <span className="btn-icon">
                              <i className="fa-regular fa-book mr--4" />
                            </span>
                            <span className="btn-text">View Docs</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="ele-layout-display">
                      <figure className="ele-image">
                        <Image
                          alt="Element Image"
                          src="/assets/images/splash/builder-element/speed/speed-1.png"
                          width={903}
                          height={495}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* end single card */}
                {/* start single card */}
                <div className="col-12 mt--24">
                  <div className="rbt-ele-builder-card rbt-element-coming-soon card-content-side rbt-content-right">
                    <div className="ele-layout-display">
                      <figure className="ele-image">
                        <Image
                          alt="Element Image"
                          src="/assets/images/splash/builder-element/speed/speed-2.png"
                          width={718}
                          height={246}
                        />
                      </figure>
                    </div>
                    <div className="rbt-card-content">
                      <div className="content-inner">
                        <span className="overlay-text">02</span>
                        <h2 className="rbt-title rbt-text-bold">
                          Page Speed Checked on GTMetrix
                        </h2>
                        <p className="rbt-description">
                          Analyze your website&apos;s performance using GTMetrix
                          to ensure fast loading times and optimal user
                          experience.
                        </p>
                        <div className="mt--32">
                          <a
                            href="https://nextjs.getunimart.com/docs"
                            className="rbt-btn rbt-btn-md rbt-btn-secondary"
                          >
                            Check example
                          </a>
                          <a
                            href="https://nextjs.getunimart.com/docs"
                            className="rbt-btn-link rbt-text-color-gray-500 ml--8"
                          >
                            <span className="btn-icon">
                              <i className="fa-regular fa-book mr--4" />
                            </span>
                            <span className="btn-text">View Docs</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end single card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PerformanceComponents;
