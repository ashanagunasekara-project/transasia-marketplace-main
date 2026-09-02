import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Button Boxed || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb title="Categories Style" highlighted="Button Boxed" />
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
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-6 text-center rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="content">
                    <h5 className="title">
                      <Link href="/shop-by-category">Printer &amp; Ink</Link>
                    </h5>
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                      <Link href="/shop-by-category">
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-transp-img-lg-01.webp"
                          width="155"
                          height="187"
                        />
                      </Link>
                    </div>
                    <ul className="quick-button-list">
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Shorts</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Swim</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Jackets</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-6 text-center rbt-scroll-trigger fade_in animation-order-2">
                <div className="inner">
                  <div className="content">
                    <h5 className="title">
                      <Link href="/shop-by-category">Bag packs</Link>
                    </h5>
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-2">
                      <Link href="/shop-by-category">
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-transp-img-lg-02.webp"
                          width="148"
                          height="187"
                        />
                      </Link>
                    </div>
                    <ul className="quick-button-list">
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Socks</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Face Covers</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Balls</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-6 text-center rbt-scroll-trigger fade_in animation-order-3">
                <div className="inner">
                  <div className="content">
                    <h5 className="title">
                      <Link href="/shop-by-category">Accessories</Link>
                    </h5>
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-3">
                      <Link href="/shop-by-category">
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-transp-img-lg-03.webp"
                          width="197"
                          height="187"
                        />
                      </Link>
                    </div>
                    <ul className="quick-button-list">
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Yoga</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Tennis</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Football</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-6 text-center rbt-scroll-trigger fade_in animation-order-4">
                <div className="inner">
                  <div className="content">
                    <h5 className="title">
                      <Link href="/shop-by-category">Shoes</Link>
                    </h5>
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-4">
                      <Link href="/shop-by-category">
                        <Image
                          alt="Category Product Images"
                          src="/assets/images/catagory-img/cat-transp-img-lg-04.webp"
                          width="244"
                          height="187"
                        />
                      </Link>
                    </div>
                    <ul className="quick-button-list">
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Sneakers</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Workout Shoes</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="rbt-btn rbt-btn-white icon-hover rbt-btn-md"
                          href="/shop-by-category"
                        >
                          <span className="btn-text">Workout Shoes</span>
                          <span className="btn-icon">
                            <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}
