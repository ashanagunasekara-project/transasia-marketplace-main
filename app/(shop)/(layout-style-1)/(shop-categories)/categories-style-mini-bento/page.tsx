import Link from "next/link";
import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Mini Bento || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb title="Categories Style" highlighted="Mini Bento" />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-component-area rbt-categories-styles-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
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
                        <span className="rbt-bold--text">
                          Compact Creations
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
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                    <Link
                      href={`/shop-by-categories`}
                      className="has-rbt-section-overlay"
                    >
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-xl-01.webp"
                        width="1520"
                        height="520"
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
                        width="1072"
                        height="520"
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
                            width="960"
                            height="520"
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
                            width="960"
                            height="520"
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
                        width="624"
                        height="520"
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
    </>
  );
}
