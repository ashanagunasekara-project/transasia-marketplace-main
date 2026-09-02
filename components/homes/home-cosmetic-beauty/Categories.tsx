import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--40 p-0 border-0 text-center align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Best Featured
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Categories </span>Your May
                Interested
              </h2>
              <Link
                className="rbt-btn-link rbt-text-color-primary d-flex rbt-text-medium rbt-gap--8 mt--8 justify-content-center rbt-scroll-trigger fade_in animation-order-3"
                href={`/categories-list`}
              >
                <span className="btn-text">View All Categories</span>
                <span className="btn-icon">
                  <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          <div className="col-lg-7 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-1">
              <div className="inner">
                <div className="content">
                  <span className="rbt-badge rbt-badge-small">EXCLUSIVE</span>
                  <p className="subtitle">NEW ARRIVALS</p>
                  <h5 className="title">
                    <Link href={`/shop-by-categories`}>
                      <span className="rbt-bold--text">Compact Creations</span>
                    </Link>
                  </h5>
                  <Link
                    href={`/shop-by-categories`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                  <Link
                    href={`/shop-by-categories`}
                    className="has-rbt-section-overlay"
                  >
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-xl-01.webp"
                      width={1520}
                      height={520}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-lg-5 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-2 rbt-curved-style-box">
              <div className="inner">
                <div className="content">
                  <span className="rbt-badge rbt-badge-red rbt-badge-small">
                    EXCLUSIVE
                  </span>
                  <p className="subtitle">NEW ARRIVALS</p>
                  <h5 className="title">
                    <Link href={`/shop-by-categories`}>
                      <span className="rbt-bold--text">
                        Artful Arrangements
                      </span>
                    </Link>
                  </h5>
                  <Link
                    href={`/shop-by-categories`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-2">
                  <Link
                    href={`/shop-by-categories`}
                    className="has-rbt-section-overlay"
                  >
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-xl-02.webp"
                      width={1072}
                      height={520}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          <div className="col-lg-9 col-md-6 col-sm-12 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24">
                <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-3">
                  <div className="inner">
                    <div className="content">
                      <p className="subtitle">NEW ARRIVALS</p>
                      <h5 className="title">
                        <Link href={`/shop-by-categories`}>
                          <span className="rbt-bold--text">
                            Lunchtime Delights
                          </span>
                        </Link>
                      </h5>
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-btn rbt-btn-white rbt-btn-md"
                      >
                        Shop Now
                      </Link>
                    </div>
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-3">
                      <Link
                        href={`/shop-by-categories`}
                        className="has-rbt-section-overlay"
                      >
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-bg-xl-04.webp"
                          width={960}
                          height={520}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt--24">
                <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-4">
                  <div className="inner">
                    <div className="content">
                      <span className="rbt-badge rbt-badge-green rbt-badge-small">
                        EXCLUSIVE
                      </span>
                      <p className="subtitle">NEW ARRIVALS</p>
                      <h5 className="title">
                        <Link href={`/shop-by-categories`}>
                          <span className="rbt-bold--text">
                            Perfect Portions
                          </span>
                        </Link>
                      </h5>
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-btn rbt-btn-white rbt-btn-md"
                      >
                        Shop Now
                      </Link>
                    </div>
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-4">
                      <Link
                        href={`/shop-by-categories`}
                        className="has-rbt-section-overlay"
                      >
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-bg-xl-03.webp"
                          width={960}
                          height={520}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-5">
              <div className="inner">
                <div className="content">
                  <p className="subtitle">NEW ARRIVALS</p>
                  <h5 className="title">
                    <Link href={`/shop-by-categories`}>
                      <span className="rbt-bold--text">Stylish</span> &amp;
                      Trending
                    </Link>
                  </h5>
                  <Link
                    href={`/shop-by-categories`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-5">
                  <Link
                    href={`/shop-by-categories`}
                    className="has-rbt-section-overlay"
                  >
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-xl-05.webp"
                      width={624}
                      height={520}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
