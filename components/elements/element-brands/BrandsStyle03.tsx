import Link from "next/link";
import Image from "next/image";
function BrandsStyle03() {
  return (
    <>
      <div className="rbt-component-area rbt-brands-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title">
                  Brands Style <span className="rbt-bold--text">Three</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Brands Area */}
          <div className="row row--12 mt_dec--60">
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--60">
              <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="brand-image rbt-scroll-trigger zoom_in animation-order-1">
                    <Image
                      alt="Ecommerce Brand Images"
                      src="/assets/images/brands/brand-c-01.webp"
                      width={100}
                      height={60}
                    />
                  </div>
                  <p className="desc">
                    “Allure makeup brand Sunnies Face makes just one lipstick
                    and it’s constantly selling out.”
                  </p>
                  <Link
                    className="rbt-btn rbt-btn-secondary rbt-btn-sm"
                    href={`/shop-by-brands`}
                  >
                    <span className="btn-text">See 16 Products</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-arrow-up-right ml--4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--60">
              <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-2">
                <div className="inner">
                  <div className="brand-image rbt-scroll-trigger zoom_in animation-order-2">
                    <Image
                      alt="Ecommerce Brand Images"
                      src="/assets/images/brands/brand-c-02.webp"
                      width={100}
                      height={60}
                    />
                  </div>
                  <p className="desc">
                    “Allure makeup brand Sunnies Face makes just one lipstick
                    and it’s constantly selling out.”
                  </p>
                  <Link
                    className="rbt-btn rbt-btn-secondary rbt-btn-sm"
                    href={`/shop-by-brands`}
                  >
                    <span className="btn-text">See 32 Products</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-arrow-up-right ml--4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--60">
              <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-3">
                <div className="inner">
                  <div className="brand-image rbt-scroll-trigger zoom_in animation-order-3">
                    <Image
                      alt="Ecommerce Brand Images"
                      src="/assets/images/brands/brand-c-03.webp"
                      width={100}
                      height={60}
                    />
                  </div>
                  <p className="desc">
                    “Allure makeup brand Sunnies Face makes just one lipstick
                    and it’s constantly selling out.”
                  </p>
                  <Link
                    className="rbt-btn rbt-btn-secondary rbt-btn-sm"
                    href={`/shop-by-brands`}
                  >
                    <span className="btn-text">See 28 Products</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-arrow-up-right ml--4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--60">
              <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-4">
                <div className="inner">
                  <div className="brand-image rbt-scroll-trigger zoom_in animation-order-4">
                    <Image
                      alt="Ecommerce Brand Images"
                      src="/assets/images/brands/brand-c-04.webp"
                      width={100}
                      height={60}
                    />
                  </div>
                  <p className="desc">
                    “Allure makeup brand Sunnies Face makes just one lipstick
                    and it’s constantly selling out.”
                  </p>
                  <Link
                    className="rbt-btn rbt-btn-secondary rbt-btn-sm"
                    href={`/shop-by-brands`}
                  >
                    <span className="btn-text">See 64 Products</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-arrow-up-right ml--4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--60">
              <div className="rbt-brand text-center style-three rbt-scroll-trigger fade_in animation-order-5">
                <div className="inner">
                  <div className="brand-image rbt-scroll-trigger zoom_in animation-order-1">
                    <Image
                      alt="Ecommerce Brand Images"
                      src="/assets/images/brands/brand-c-05.webp"
                      width={100}
                      height={60}
                    />
                  </div>
                  <p className="desc">
                    “Allure makeup brand Sunnies Face makes just one lipstick
                    and it’s constantly selling out.”
                  </p>
                  <Link
                    className="rbt-btn rbt-btn-secondary rbt-btn-sm"
                    href={`/shop-by-brands`}
                  >
                    <span className="btn-text">See 48 Products</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-arrow-up-right ml--4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Brands Area */}
        </div>
      </div>
    </>
  );
}

export default BrandsStyle03;
