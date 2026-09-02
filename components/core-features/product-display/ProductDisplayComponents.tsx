function ProductDisplayComponents() {
  return (
    <>
      <div className="rbt-splash-element-builder-area splash-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rbt-splash-section-title text-center mb--48">
                <h2 className="mb--12">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    5+ Pre-built Product View Options
                  </span>
                </h2>
                <p className="mb--40 b1 rbt-scroll-trigger fade_in animation-order-4">
                  Explore various ways to present your products with our
                  pre-built options, including <br />
                  video and 3D views, to enhance customer engagement and
                  showcase your brand effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-10 mx-auto">
              <div className="row row--12 mt_dec--24">
                {/* start single card */}
                <div className="col-12 mt--24">
                  <div className="rbt-ele-builder-card card-content-side">
                    <div className="rbt-card-content">
                      <div className="content-inner">
                        <span className="overlay-text">01</span>
                        <h2 className="rbt-title rbt-text-bold">
                          Showcase Your Product in a 3D View with Unimart 3D
                          Viewer.
                        </h2>
                        <p className="rbt-description">
                          Show your product in an interactive 3D view using
                          Unimart 3D Viewer.
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
                        <video
                          src="/assets/images/splash/builder-element/product-view/product-view-1.mp4"
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="metadata"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* end single card */}
                {/* start single card */}
                <div className="col-12 col-md-6 mt--24">
                  <div className="rbt-ele-builder-card">
                    <div className="rbt-card-content text-center">
                      <div className="content-inner">
                        <span className="overlay-text">02</span>
                        <h2 className="rbt-title rbt-text-bold">
                          Zoom-in Feature Beside the Product Media.
                        </h2>
                        <p className="rbt-description">
                          Display your product with a zoom-in feature beside the
                          media for a detailed view.
                        </p>
                      </div>
                    </div>
                    <div className="ele-layout-display">
                      <figure className="ele-image">
                        <video
                          src="/assets/images/splash/builder-element/product-view/product-view-4.mp4"
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="metadata"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* end single card */}
                {/* start single card */}
                <div className="col-12 col-md-6 mt--24">
                  <div className="rbt-ele-builder-card">
                    <div className="rbt-card-content text-center">
                      <div className="content-inner">
                        <span className="overlay-text">02</span>
                        <h2 className="rbt-title rbt-text-bold">
                          Zoom-in Feature with Cursor Hover on Product Media.
                        </h2>
                        <p className="rbt-description">
                          Enhance your product display with a zoom-in feature
                          that activates on cursor hover.
                        </p>
                      </div>
                    </div>
                    <div className="ele-layout-display">
                      <figure className="ele-image">
                        <video
                          src="/assets/images/splash/builder-element/product-view/product-view-3.mp4"
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="metadata"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* end single card */}
                {/* start single card */}
                <div className="col-12 mt--24">
                  <div className="rbt-ele-builder-card card-content-side">
                    <div className="rbt-card-content">
                      <div className="content-inner">
                        <span className="overlay-text">04</span>
                        <h2 className="rbt-title rbt-text-bold">
                          Zoom-in Feature Beside the Product Media.
                        </h2>
                        <p className="rbt-description">
                          Display your product with a zoom-in feature beside the
                          media for a detailed view.
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
                        <video
                          src="/assets/images/splash/builder-element/product-view/product-view-2.mp4"
                          muted
                          autoPlay
                          loop
                          playsInline
                          preload="metadata"
                        />
                      </figure>
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

export default ProductDisplayComponents;
