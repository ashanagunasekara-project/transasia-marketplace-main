import Link from "next/link";
import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Classic Bento || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb
        title="Categories Style"
        highlighted="Classic Bento"
      />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-component-area rbt-categories-styles-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          {/* Start Card Area */}
          <div className="rbt-categories-section rbt-curved-style-box rbt-categories-section-bg-one">
            <div className="row row--12 mt_dec--24">
              <div className="col-xl-8 col-lg-12 col-12 mt--24">
                <div className="row row--12 mt_dec--24 rbt-mobile-row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-1">
                      <div className="inner">
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/shop-by-categories`}>
                              Camera &amp; Photo
                            </Link>
                          </h5>
                          <ul className="quick-link-list rbt-link-hover">
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Digital Cameras
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Camera Accessories
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Lenses
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="rbt-image-portion">
                          <Link href={`/shop-by-categories`}>
                            <Image
                              className="rbt-scroll-trigger"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-transp-img-07.webp"
                              width="93"
                              height="93"
                            />
                          </Link>
                          <Link
                            href={`/categories-list`}
                            className="rbt-icon-overlay-link-btn"
                          >
                            <span className="rbt-btn-overlay">
                              <i className="rbt-icon fa-solid fa-arrow-up-right" />
                              <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-2">
                      <div className="inner">
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/shop-by-categories`}>
                              Smartwatches
                            </Link>
                          </h5>
                          <ul className="quick-link-list rbt-link-hover">
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Fitness Trackers
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Smart Accessories
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Wearable Tech
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="rbt-image-portion">
                          <Link href={`/shop-by-categories`}>
                            <Image
                              className="rbt-scroll-trigger"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-transp-img-08.webp"
                              width="93"
                              height="93"
                            />
                          </Link>
                          <Link
                            href={`/categories-list`}
                            className="rbt-icon-overlay-link-btn"
                          >
                            <span className="rbt-btn-overlay">
                              <i className="rbt-icon fa-solid fa-arrow-up-right" />
                              <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-3">
                      <div className="inner">
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/shop-by-categories`}>
                              TVs, Audio-Video
                            </Link>
                          </h5>
                          <ul className="quick-link-list rbt-link-hover">
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Televisions
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Sound Systems
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Streaming Devices
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="rbt-image-portion">
                          <Link href={`/shop-by-categories`}>
                            <Image
                              className="rbt-scroll-trigger"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-transp-img-09.webp"
                              width="93"
                              height="93"
                            />
                          </Link>
                          <Link
                            href={`/categories-list`}
                            className="rbt-icon-overlay-link-btn"
                          >
                            <span className="rbt-btn-overlay">
                              <i className="rbt-icon fa-solid fa-arrow-up-right" />
                              <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-4">
                      <div className="inner">
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/shop-by-categories`}>
                              Goods for Games
                            </Link>
                          </h5>
                          <ul className="quick-link-list rbt-link-hover">
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Gaming Consoles
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Gaming Accessories
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Video Games
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="rbt-image-portion">
                          <Link href={`/shop-by-categories`}>
                            <Image
                              className="rbt-scroll-trigger"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-transp-img-12.webp"
                              width="93"
                              height="93"
                            />
                          </Link>
                          <Link
                            href={`/categories-list`}
                            className="rbt-icon-overlay-link-btn"
                          >
                            <span className="rbt-btn-overlay">
                              <i className="rbt-icon fa-solid fa-arrow-up-right" />
                              <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-5">
                      <div className="inner">
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/shop-by-categories`}>Headphones</Link>
                          </h5>
                          <ul className="quick-link-list rbt-link-hover">
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Headphones
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Speakers
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Music Accessories
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="rbt-image-portion">
                          <Link href={`/shop-by-categories`}>
                            <Image
                              className="rbt-scroll-trigger"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-transp-img-10.webp"
                              width="93"
                              height="93"
                            />
                          </Link>
                          <Link
                            href={`/categories-list`}
                            className="rbt-icon-overlay-link-btn"
                          >
                            <span className="rbt-btn-overlay">
                              <i className="rbt-icon fa-solid fa-arrow-up-right" />
                              <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mt--24">
                    <div className="rbt-cat-box rbt-cat-box-7 rbt-scroll-trigger fade_in animation-order-6">
                      <div className="inner">
                        <div className="content">
                          <h5 className="title">
                            <Link href={`/shop-by-categories`}>
                              House Appliances
                            </Link>
                          </h5>
                          <ul className="quick-link-list rbt-link-hover">
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Kitchen Appliances
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Cleaning Appliances
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={`/shop-by-category`}
                                className="quick-link"
                              >
                                Home Comfort
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="rbt-image-portion">
                          <Link href={`/shop-by-categories`}>
                            <Image
                              className="rbt-scroll-trigger"
                              alt="Category Product Images"
                              src="/assets/images/catagory-img/cat-transp-img-11.webp"
                              width="93"
                              height="93"
                            />
                          </Link>
                          <Link
                            href={`/categories-list`}
                            className="rbt-icon-overlay-link-btn"
                          >
                            <span className="rbt-btn-overlay">
                              <i className="rbt-icon fa-solid fa-arrow-up-right" />
                              <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-12 mt--24">
                <div className="rbt-cat-box banner-card text-center rbt-curved-style-box rbt-categories-img-bg rbt-scroll-trigger fade_in animation-order-5">
                  <div className="inner">
                    <div className="content">
                      <p className="subtitle rbt-scroll-trigger fade_in animation-order-1">
                        Weekend Deal
                      </p>
                      <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                        <a href="#">
                          <span className="rbt-bold--text">DJI Ronin</span>{" "}
                          Action
                        </a>
                      </h4>
                      <h3 className="secondary-title rbt-scroll-trigger fade_in animation-order-3">
                        Super holiday
                      </h3>
                    </div>
                    <div className="rbt-image-portion">
                      <a href="#">
                        <Image
                          className="rbt-scroll-trigger zoom_in animation-order-4"
                          alt="Catagory Image"
                          src="/assets/images/catagory-img/banner-cat-01.webp"
                          width="338"
                          height="201"
                        />
                      </a>
                    </div>
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
