import Image from "next/image";
import Link from "next/link";
export default function Collections() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row align-items-center mt_dec--24">
          <div className="col-lg-4 mt--24">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0 text-left">
              <span className="rbt-card-subtitle rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Best Featured
              </span>
              <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Categories </span>Your May
                Interested
              </h2>
            </div>
          </div>
          <div className="col-lg-8 mt--24">
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--32 justify-content-md-center rbt-mobile-row">
              {/* Start Single Card  */}
              <div className="col-lg-4 col-md-4 col-6 mt--32">
                <div className="rbt-cat-box rbt-cat-box-3 text-center rbt-scroll-trigger fade_in animation-order-1">
                  <div className="inner">
                    <div className="rbt-image-portion">
                      <Link href="/shop-by-category">
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-circle-md-01.webp"
                          width={260}
                          height={260}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/shop-by-category"
                        className="rbt-btn rbt-btn-gray icon-hover rbt-btn-md"
                      >
                        <span className="btn-text">Men Sunglasses</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-lg-4 col-md-4 col-6 mt--32">
                <div className="rbt-cat-box rbt-cat-box-3 text-center rbt-scroll-trigger fade_in animation-order-2">
                  <div className="inner">
                    <div className="rbt-image-portion">
                      <Link href="/shop-by-category">
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-circle-md-02.webp"
                          width={260}
                          height={260}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/shop-by-category"
                        className="rbt-btn rbt-btn-gray icon-hover rbt-btn-md"
                      >
                        <span className="btn-text">Women Sunglasses</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="col-lg-4 col-md-4 col-6 mt--32">
                <div className="rbt-cat-box rbt-cat-box-3 text-center rbt-scroll-trigger fade_in animation-order-3">
                  <div className="inner">
                    <div className="rbt-image-portion">
                      <Link href="/shop-by-category">
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-circle-md-03.webp"
                          width={260}
                          height={260}
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <Link href="/shop-by-category"
                        className="rbt-btn rbt-btn-gray icon-hover rbt-btn-md"
                      >
                        <span className="btn-text">Kids Sunglasses</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
