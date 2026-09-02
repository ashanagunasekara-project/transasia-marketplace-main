import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 mb--40 p-0 border-0 text-center align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Best Featured
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">
                  Categories Your May Interested
                </span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Categories Area*/}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-1 text-center">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-1">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-01.webp"
                      width={492}
                      height={490}
                    />
                  </Link>
                </div>
                <Link href={`/shop-by-category`} className="rbt-btn rbt-btn-white rbt-btn-md">
                  Gym Supplement
                </Link>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-2 text-center">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-2">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-02.webp"
                      width={493}
                      height={490}
                    />
                  </Link>
                </div>
                <Link href={`/shop-by-category`} className="rbt-btn rbt-btn-white rbt-btn-md">
                  Protein Supplement
                </Link>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-3 text-center">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-3">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-03.webp"
                      width={490}
                      height={490}
                    />
                  </Link>
                </div>
                <Link href={`/shop-by-category`} className="rbt-btn rbt-btn-white rbt-btn-md">
                  Vitamins Pack
                </Link>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2-5 col-lg-8 col-md-8 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-4 wider-column">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-4">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-lg-01.webp"
                      width={1027}
                      height={490}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="top-content">
                    <span className="rbt-badge rbt-badge-green rbt-badge-small">
                      EXCLUSIVE
                    </span>
                    <p className="subtitle">NEW ARRIVALS</p>
                    <h5 className="title">
                      <span className="rbt-bold--text">Gym </span> &amp;
                      Supplement
                    </h5>
                  </div>
                  <div className="bottom-content">
                    <Link href={`/shop-by-category`} className="rbt-btn rbt-btn-white rbt-btn-md">
                      See Collection
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-5 text-center">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-5">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-04.webp"
                      width={493}
                      height={490}
                    />
                  </Link>
                </div>
                <Link href={`/shop-by-category`} className="rbt-btn rbt-btn-white rbt-btn-md">
                  Minerals Pack
                </Link>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2-5 col-lg-8 col-md-8 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-6 wider-column">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-6">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-lg-02.webp"
                      width={1027}
                      height={490}
                    />
                  </Link>
                </div>
                <div className="content">
                  <div className="top-content">
                    <span className="rbt-badge rbt-badge-small">Trending</span>
                    <p className="subtitle">ONLINE EXCLUSIVE</p>
                    <h5 className="title">
                      <span className="rbt-bold--text">Made for</span> Gym
                    </h5>
                  </div>
                  <div className="bottom-content">
                    <Link
                      className="rbt-btn rbt-marquee-btn marquee-auto rbt-btn-white rbt-btn-md"
                      href="/shop-by-categories"
                    >
                      <span data-text="View All The Trending Collection">
                        View All The Trending Collection
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-7 text-center">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-7">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-05.webp"
                      width={492}
                      height={490}
                    />
                  </Link>
                </div>
                <Link href={`/shop-by-category`} className="rbt-btn rbt-btn-white rbt-btn-md">
                  Iron Pack
                </Link>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
            <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-8 text-center">
              <div className="inner">
                <div className="rbt-image-portion rbt-bg-color-gray-100 rbt-scroll-trigger zoom_in animation-order-8">
                  <Link href={`/shop-by-category`}>
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-gym-06.webp"
                      width={491}
                      height={490}
                    />
                  </Link>
                </div>
                <Link href={`/shop-by-category`} className="rbt-btn rbt-btn-white rbt-btn-md">
                  Minarals Pack
                </Link>
              </div>
              <div className="rbt-right-corner-portion">
                <div className="rbt-corner-portion-wrapper">
                  <Link href={`/shop-by-category`} className="rbt-card-link-btn">
                    <i className="fa-solid fa-arrow-up-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Categories Area*/}
      </div>
    </div>
  );
}
