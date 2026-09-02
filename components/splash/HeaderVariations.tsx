import Link from "next/link";
import Image from "next/image";
export default function HeaderVariations() {
  return (
    <div className="splash-section-gap rbt-header-builder-area">
      <div className="container">
        <div className="row row--24 mt_dec--24">
          <div className="col-12 col-lg-6 mt--24">
            <div className="sticky-top">
              <div className="rbt-splash-section-title">
                <span className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                  Enhance Your Website
                </span>
                <h2 className="rbt-title mb--24">
                  <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                    Ultimate Header Builder
                    <br />
                  </span>
                  <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                    Creating Unlimited Headers
                  </span>
                </h2>
                <p className="mb--40 b1 rbt-scroll-trigger fade_in animation-order-4">
                  Effortlessly tailor your experience with intuitive
                  customization options, empowering you to personalize every
                  aspect of your website.
                </p>
                <Link
                  href={`/header-builder`}
                  className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5"
                  target="_blank"
                >
                  <span className="icon-left">
                    <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                  </span>
                  <span>Header Builder Overview</span>
                  <span className="icon-right">
                    <i className="fa-regular fa-up-right-from-square ml--4" />
                  </span>
                </Link>
              </div>
              {/* Start Header Builder Card */}
              <div className="rbt-header-builder-card">
                <div className="inner rbt-scroll-trigger slide_in animation-order-1">
                  <div className="rbt-product-badge rbt-product-badge-bg-yellow">
                    Exclusive
                  </div>
                  <div className="rbt-builder-content text-center">
                    <h4 className="rbt-bold--text">
                      Use the built-in banner tool to
                      <br />
                      create announcements.
                    </h4>
                    <p className="rbt-text-color-gray-700">
                      Creating stunning and unlimited header layouts has never.
                    </p>
                  </div>
                  <div className="rbt-element-image rbt-scroll-trigger slide_in">
                    <Image
                      alt="Element Image"
                      src="/assets/images/splash/builder-element/header-img1.webp"
                      width={872}
                      height={666}
                    />
                  </div>
                </div>
              </div>
              {/* End Header Builder Card */}
            </div>
          </div>
          <div className="col-12 col-lg-6 mt--24">
            {/* Start Header Builder Card */}
            <div className="rbt-header-builder-card">
              <div className="inner">
                <div className="rbt-product-badge rbt-product-badge-bg-green rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                  Exclusive
                </div>
                <div className="rbt-builder-content text-center">
                  <h4 className="rbt-bold--text rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-2">
                    Enjoy the most versatile <br />
                    15+ Premade Headers
                  </h4>
                  <p className="rbt-text-color-gray-700 rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-3">
                    Creating stunning &amp; unlimited header layout never been.
                  </p>
                </div>
                <div className="rbt-element-image image-2 has-overlay">
                  <Image
                    alt="Element Image"
                    src="/assets/images/splash/builder-element/header-img2.webp"
                    width={598}
                    height={498}
                  />
                </div>
              </div>
            </div>
            {/* End Header Builder Card */}
            {/* Start Header Builder Card */}
            <div className="rbt-header-builder-card mt--24">
              <div className="inner">
                <div className="rbt-product-badge rbt-product-badge-bg-danger rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                  built-in
                </div>
                <div className="rbt-builder-content text-center">
                  <h4 className="rbt-bold--text rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-2">
                    Build mega menus with integrated, <br />
                    user-friendly options.
                  </h4>
                  <p className="rbt-text-color-gray-700 rbt-text-color-gray-700 rbt-scroll-trigger fade_in animation-order-3">
                    Creating stunning &amp; unlimited header layout never been.
                  </p>
                </div>
                <div className="rbt-element-image image-3 has-overlay justify-content-end">
                  <Image
                    alt="Element Image"
                    src="/assets/images/splash/builder-element/header-img3.webp"
                    width={604}
                    height={471}
                  />
                </div>
              </div>
            </div>
            {/* End Header Builder Card */}
          </div>
        </div>
      </div>
    </div>
  );
}
