import Image from "next/image";
import Link from "next/link";
export default function Banner2() {
  return (
    <>
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-banner-area rbt-bg-color-white rbt-section-gapTop">
        <div className="container">
          <div className="rbt-static-banner rbt-banner-radius-tr rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100">
            <div className="row row--0 justify-content-end">
              <div className="col-md-6 col-12">
                <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto h-100">
                  <Image
                    className="rbt-media-cover"
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/straller-wide-a-01.webp"
                    width={1672}
                    height={1300}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="rbt-banner-content text-left align-items-start">
                  <h5 className="rbt-banner-subtitle-two h5 mb-0 fw-normal">
                    Exclusive Offer Going
                  </h5>
                  <h2 className="rbt-title mb-0 h1 rbt-text-regular">
                    <span className="rbt-bold--text d-block">
                      Ready for the trendy Monochrome Magic Dots!
                    </span>
                  </h2>
                  <p className="desc mt--8 mb--0">
                    When, while the lovely valley teems with vapour around me,
                    and the meridian sun strikes the upper surface of the
                    impenetrable foliage.
                  </p>
                  <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--24 mt_sm--16 justify-content-center">
                    <Link className="rbt-btn" href={`/shop-by-categories`}>
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Component Area */}
      {/* Start Component Area */}
      <div className="rbt-component-area rbt-banner-area rbt-bg-color-white">
        <div className="container">
          <div className="rbt-static-banner rbt-banner-radius-bl rbt-scroll-trigger zoom_in animation-order-1 rbt-bg-color-gray-100">
            <div className="row row--0 justify-content-end">
              <div className="col-md-6 col-12 order-2 order-md-1">
                <div className="rbt-banner-content text-left align-items-start">
                  <h5 className="rbt-banner-subtitle-two h5 mb-0 fw-normal">
                    Exclusive Offer Going
                  </h5>
                  <h2 className="rbt-title mb-0 h1 rbt-text-regular">
                    <span className="rbt-bold--text d-block">
                      Ready for the trendy Monochrome Magic Dots!
                    </span>
                  </h2>
                  <p className="desc mt--8 mb--0">
                    When, while the lovely valley teems with vapour around me,
                    and the meridian sun strikes the upper surface of the
                    impenetrable foliage.
                  </p>
                  <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--24 mt_sm--16 justify-content-center">
                    <Link className="rbt-btn" href={`/shop-by-categories`}>
                      Shop Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 order-1 order-md-2">
                <div className="rbt-product-banner-img rbt-scroll-trigger zoom_in animation-order-3 w-auto h-100">
                  <Image
                    className="rbt-media-cover"
                    alt="Ecommerce Product Banner Image"
                    src="/assets/images/product-banner/straller-wide-a-02.webp"
                    width={1672}
                    height={1300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Component Area */}
    </>
  );
}
