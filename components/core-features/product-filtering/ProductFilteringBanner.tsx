import Image from "next/image";

function ProductFilteringBanner() {
  return (
    <>
      <div className="rbt-builder-banner rbt-builder-banner-var-2 rbt-splash-banner-bg-var-1 rbt-splash-banner-area">
        <div className="rbt-splash-builder-banner-wider">
          <div className="container-fluid position-relative">
            <div className="row">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                <div className="rbt-splash-section-title text-center">
                  <span className="subtitle">Ultimate Filter Options</span>
                  <h1 className="rbt-title mb--24 rbt-text-capitalize">
                    <span className="rbt-bold--text">
                      Smart Product Filtering
                      <br />
                    </span>
                    <span className="rbt-title-sm-text">
                      with all possible optionality
                    </span>
                  </h1>
                  <p className="rbt-description">
                    A comprehensive product filtering system with various
                    customization options.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="rbt-banner-part-right">
                  <div className="rbt-content rbt-has-not-background justify-content-start">
                    <figure>
                      <Image
                        alt="Banner Image"
                        src="/assets/images/splash/builder-element/filter-options/filter-banner.webp"
                        width={1339}
                        height={1137}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="rbt-splash-btn-circle rbt-scroll-down-btn">
              <Image
                className="rbt-animate-rotation-forward"
                alt="Text Image"
                src="/assets/images/splash/others/circle-btn-text.png"
                width={109}
                height={109}
              />
              <span className="circle-btn-center-icon">
                <Image
                  alt="Icon"
                  src="/assets/images/splash/icons/icon21.png"
                  width={48}
                  height={49}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFilteringBanner;
