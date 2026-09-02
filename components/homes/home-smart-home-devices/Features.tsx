import Image from "next/image";
export default function Features() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-section-gapTop">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 mx-auto">
                <div className="rbt-static-banner rbt-static-banner-var-two rbt-scroll-trigger zoom_in animation-order-1 rbt-rounded--0">
                  <div className="row row--12 mt_dec--24 justify-content-center">
                    <div className="col-xl-6 col-md-6 col-12 mt--24">
                      <div className="rbt-banner-content m--0 align-items-start">
                        <a href="#" className="rbt-card-subtitle rbt-card-catagories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">The Biggest View!</a>
                        <h2 className="rbt-lg-title rbt-scroll-trigger rbt-text-regular fade_in animation-order-2 rbt-text-regular">
                          <span className="rbt-bold--text d-block">
                            Majestic Colors. <br />
                            Stunning Visuals.
                          </span>
                        </h2>
                        <p>
                          equipped with a 14-inch full-color super bright
                          display that fills your screen with impressively
                          bright, colorful visuals to give you the ultimate
                          viewing pleasure.
                        </p>
                        <div className="d-grid">
                          <div className="d-flex align-items-center gap-3">
                            <span className="h3 mb--0">100%</span>
                            <span className="h4 mb--0">Nits</span>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <span className="h3 mb--0">300</span>
                            <span className="h4 mb--0">Gram</span>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <span className="h3 mb--0">FHD</span>
                            <span className="h4 mb--0">Technology</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-12 mt--24">
                      <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                        <Image
                          className="rbt-rounded--8"
                          alt="Ecommerce Product Banner Image"
                          src="/assets/images/product-banner/product-banner-smart-device-03.webp"
                          width={1920}
                          height={1290}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row row--12 mt--56 justify-content-center">
                    <div className="col-xl-6 col-md-6 col-12 mt--24 order-2 order-md-1">
                      <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto">
                        <Image
                          className="rbt-rounded--8"
                          alt="Ecommerce Product Banner Image"
                          src="/assets/images/product-banner/product-banner-smart-device-04.webp"
                          width={1920}
                          height={1290}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-12 mt--24 order-1 order-md-2">
                      <div className="rbt-banner-content m--0 align-items-start">
                        <a href="#" className="rbt-card-subtitle rbt-card-catagories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">The Biggest View!</a>
                        <h2 className="rbt-lg-title rbt-scroll-trigger rbt-text-regular fade_in animation-order-2 rbt-text-regular">
                          <span className="rbt-bold--text d-block">
                            Majestic Colors. <br />
                            Stunning Visuals.
                          </span>
                        </h2>
                        <p>
                          equipped with a 14-inch full-color super bright
                          display that fills your screen with impressively
                          bright, colorful visuals to give you the ultimate
                          viewing pleasure.
                        </p>
                        <div className="d-grid">
                          <div className="d-flex align-items-center gap-3">
                            <span className="h3 mb--0">100%</span>
                            <span className="h4 mb--0">Nits</span>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <span className="h3 mb--0">300</span>
                            <span className="h4 mb--0">Gram</span>
                          </div>
                          <div className="d-flex align-items-center gap-3">
                            <span className="h3 mb--0">FHD</span>
                            <span className="h4 mb--0">Technology</span>
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
