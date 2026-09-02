import Image from "next/image";

function BulkAmountPurchaseBanner() {
  return (
    <>
      <div className="rbt-builder-banner rbt-builder-banner-var-2 rbt-splash-banner-bg-var-1 rbt-splash-banner-area @@variation-class">
        <div className="rbt-splash-builder-banner-wider">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="rbt-splash-section-title text-center">
                  <span className="subtitle">Advanced Features</span>
                  <h1 className="rbt-title mb--24 rbt-text-capitalize">
                    <span className="rbt-bold--text">
                      Bulk Amount Purchase
                      <br />
                    </span>
                    <span className="rbt-title-sm-text">
                      With All Possible Optionality
                    </span>
                  </h1>
                  <p className="rbt-description">
                    Build with precision using a rich set of reusable components
                    designed for full flexibility. Our HTML template gives you
                    all the tools to customize pages with ease — helping you
                    save time while achieving pixel-perfect results.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="rbt-banner-part-right">
                  <div className="rbt-content">
                    <figure>
                      <Image
                        alt="Component Image"
                        src="/assets/images/splash/builder-element/bulk-amount-purchase-banner.webp"
                        width={1230}
                        height={878}
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

export default BulkAmountPurchaseBanner;
