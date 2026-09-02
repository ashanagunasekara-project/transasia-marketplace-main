import Image from "next/image";
import Link from "next/link";
export default function Brands() {
  return (
    <div className="rbt-component-area rbt-brands-area rbt-bg-color-white rbt-section-gap2">
      <div className="rbt-full-width-wrapper">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one has-bg-image has-bg-image-01 pt--80 pb--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title rbt-gap--4 mb--40 p-0 border-0 text-center align-items-center">
                  <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger zoom_in animation-order-1">
                    Today’s Best Deals                  </span>
                  <h2 className="rbt-title rbt-scroll-trigger zoom_in animation-order-2">
                    <span className="rbt-bold--text">Trending </span>Brands
                  </h2>
                  <Link
                    className="rbt-btn-link rbt-text-color-primary d-flex rbt-text-medium rbt-gap--8 mt--8 justify-content-center rbt-scroll-trigger zoom_in animation-order-3"
                    href="/shop-by-brands"
                  >
                    <span className="btn-text">View All Brands</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                    </span>
                  </Link>
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
      </div>
    </div>
  );
}
