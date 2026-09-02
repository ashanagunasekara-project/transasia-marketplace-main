import Image from "next/image";
import Link from "next/link";
export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Popular By<span className="rbt-bold--text"> Categories</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 mt--24">
            <div className="row row--12 mt_dec--24">
              {/* Start Single Card  */}
              <div className="col-lg-5 col-md-6 col-sm-6 col-12 mt--24">
                <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-1">
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
                    <div className="rbt-image-portion">
                      <Link
                        href={`/shop-by-categories`}
                        className="has-rbt-section-overlay rbt-section-overlay-black"
                      >
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-bg-jwellerry-a-1.webp"
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
              <div className="col-lg-7 col-md-6 col-sm-6 col-12 mt--24">
                <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-2">
                  <div className="inner">
                    <div className="content">
                      <span className="rbt-badge rbt-badge-green rbt-badge-small">
                        EXCLUSIVE
                      </span>
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
                    <div className="rbt-image-portion">
                      <Link
                        href={`/shop-by-categories`}
                        className="has-rbt-section-overlay rbt-section-overlay-black"
                      >
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-bg-jwellerry-a-2.webp"
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
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--24">
            <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-3">
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
                <div className="rbt-image-portion">
                  <Link
                    href={`/shop-by-categories`}
                    className="has-rbt-section-overlay rbt-section-overlay-black"
                  >
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-jwellerry-a-3.webp"
                      width={624}
                      height={520}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Card  */}
          {/* Start Single Card  */}
          <div className="col-lg-7 col-md-6 col-sm-6 col-12 mt--24">
            <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-4">
              <div className="inner">
                <div className="content">
                  <span className="rbt-badge rbt-badge-small">EXCLUSIVE</span>
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
                <div className="rbt-image-portion">
                  <Link
                    href={`/shop-by-categories`}
                    className="has-rbt-section-overlay rbt-section-overlay-black"
                  >
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-jwellerry-a-4.webp"
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
          <div className="col-lg-5 col-md-6 col-sm-6 col-12 mt--24">
            <div className="rbt-cat-box rbt-cat-box-8 rbt-scroll-trigger fade_in animation-order-5">
              <div className="inner">
                <div className="content">
                  <span className="rbt-badge rbt-badge-red rbt-badge-small">
                    EXCLUSIVE
                  </span>
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
                <div className="rbt-image-portion">
                  <Link
                    href={`/shop-by-categories`}
                    className="has-rbt-section-overlay rbt-section-overlay-black"
                  >
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-bg-jwellerry-a-5.webp"
                      width={1072}
                      height={520}
                    />
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
  );
}
