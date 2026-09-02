import Link from "next/link";
import Image from "next/image";
export default function FooterVariations() {
  return (
    <div className="splash-section-gapBottom rbt-footer-builder-area">
      <div className="container">
        <div className="rbt-footer-builder-card mb--24">
          <div className="row">
            <div className="col-12 col-lg-6 col-xl-6 ms-auto">
              {/* Start Footer Variations Card */}
              <div className="rbt-header-builder-card">
                <div className="inner">
                  <div className="rbt-builder-content text-center">
                    <h4 className="rbt-bold--text rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-2">
                      Enjoy the most versatile <br />
                      15+ Premade Footers
                    </h4>
                    <p className="rbt-text-color-gray-700 rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-3">
                      Creating stunning &amp; unlimited footer layout never
                      been.
                    </p>
                  </div>
                  <div className="rbt-element-image image-2 has-overlay">
                    <Image
                      alt="Element Image"
                      src="/assets/images/splash/builder-element/footer/image1.webp"
                      width={716}
                      height={375}
                    />
                  </div>
                </div>
              </div>
              {/* End Footer Variations Card */}
              {/* Start Footer Variations Card */}
              <div className="rbt-header-builder-card mt--24">
                <div className="inner">
                  <div className="rbt-product-badge rbt-product-badge-bg-yellow rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                    Exclusive
                  </div>
                  <div className="rbt-builder-content text-center">
                    <h4 className="rbt-bold--text rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-2">
                      Build mega menus with integrated, <br />
                      user-friendly options.
                    </h4>
                    <p className="rbt-text-color-gray-700 rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-3">
                      Creating stunning &amp; unlimited header layout never
                      been.
                    </p>
                  </div>
                  <div className="rbt-element-image image-3 has-overlay justify-content-end">
                    <Image
                      alt="Element Image"
                      src="/assets/images/splash/builder-element/footer/image2.webp"
                      width={1196}
                      height={868}
                    />
                  </div>
                </div>
              </div>
              {/* End Footer Variations Card */}
            </div>
            <div className="col-12 col-lg-6 col-xl-6">
              <div className="sticky-top">
                <div className="rbt-splash-section-title">
                  <span className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                    Built-in Footer Builder
                  </span>
                  <h2 className="rbt-title mb--24">
                    <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                      Ultimate Footer Variation
                      <br />
                    </span>
                    <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                      with 30+ premade footers
                    </span>
                  </h2>
                  <p className="mb--40 b1 rbt-scroll-trigger fade_in animation-order-4">
                    Get ready to dazzle your audience with our effect,
                    <br />
                    featuring captivating animations unforgettable visuals
                  </p>
                  <Link
                    href={`/footer-builder`}
                    className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5"
                    target="_blank"
                  >
                    <span className="icon-left">
                      <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                    </span>
                    <span>Footer Variation Overview</span>
                    <span className="icon-right">
                      <i className="fa-regular fa-up-right-from-square ml--4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
