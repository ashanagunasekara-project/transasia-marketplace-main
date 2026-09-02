import Link from "next/link";
import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Bento Box || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb title="Categories Style" highlighted="Bento Box" />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-component-area rbt-categories-styles-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24 rbt-mobile-row">
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-1 text-center">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-01.webp"
                        width="492"
                        height="490"
                      />
                    </Link>
                  </div>
                  <Link
                    href={`/shop`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Sports Caps
                  </Link>
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-2 text-center">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-2">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-02.webp"
                        width="246"
                        height="245"
                      />
                    </Link>
                  </div>
                  <Link
                    href={`/shop`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Leather Bags
                  </Link>
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-3 text-center">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-3">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-11.webp"
                        width="490"
                        height="488"
                      />
                    </Link>
                  </div>
                  <Link
                    href={`/shop`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Shoes
                  </Link>
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2-5 col-lg-8 col-md-8 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-4 wider-column">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-4">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-lg-01.webp"
                        width="1026"
                        height="490"
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
                        <span className="rbt-bold--text">Stylish</span> &amp;
                        Trending
                      </h5>
                    </div>
                    <div className="bottom-content">
                      <Link
                        href={`/shop`}
                        className="rbt-btn rbt-btn-white rbt-btn-md"
                      >
                        See Collection
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-5 text-center rbt-scroll-trigger--offscreen">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-5 rbt-scroll-trigger--offscreen">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-03.webp"
                        width="245"
                        height="245"
                      />
                    </Link>
                  </div>
                  <Link
                    href={`/shop`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Watches
                  </Link>
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2-5 col-lg-8 col-md-8 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-6 wider-column rbt-scroll-trigger--offscreen">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-6 rbt-scroll-trigger--offscreen">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-lg-02.webp"
                        width="1026"
                        height="490"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="top-content">
                      <span className="rbt-badge rbt-badge-small">
                        Trending
                      </span>
                      <p className="subtitle">ONLINE EXCLUSIVE</p>
                      <h5 className="title">
                        <span className="rbt-bold--text">Made for</span> Comfort
                      </h5>
                    </div>
                    <div className="bottom-content">
                      <Link
                        className="rbt-btn rbt-marquee-btn marquee-auto rbt-btn-white rbt-btn-md"
                        href={`/shop`}
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
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-7 text-center rbt-scroll-trigger--offscreen">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-7 rbt-scroll-trigger--offscreen">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-04.webp"
                        width="245"
                        height="245"
                      />
                    </Link>
                  </div>
                  <Link
                    href={`/shop`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Sports Caps
                  </Link>
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-lg-4 col-md-4 col-sm-12 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 rbt-card-has-animated rbt-scroll-trigger fade_in animation-order-8 text-center rbt-scroll-trigger--offscreen">
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-8 rbt-scroll-trigger--offscreen">
                    <Link href={`/shop`}>
                      <Image
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-05.webp"
                        width="245"
                        height="245"
                      />
                    </Link>
                  </div>
                  <Link
                    href={`/shop`}
                    className="rbt-btn rbt-btn-white rbt-btn-md"
                  >
                    Stylish Polo
                  </Link>
                </div>
                <div className="rbt-right-corner-portion">
                  <div className="rbt-corner-portion-wrapper">
                    <Link href={`/shop`} className="rbt-card-link-btn">
                      <i className="fa-solid fa-arrow-up-right" />
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
