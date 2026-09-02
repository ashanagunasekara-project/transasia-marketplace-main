import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Linked Box || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb title="Categories Style" highlighted="Linked Box" />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-component-area rbt-categories-styles-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            <div className="col-lg-1-5 col-md-4 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="rbt-image-portion position-relative overflow-hidden">
                    <a href="#">
                      <Image
                        className=" rbt-scroll-trigger zoom_in animation-order-1"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-06.webp"
                        width="260"
                        height="260"
                      />
                    </a>
                    <div className="rbt-right-corner-portion bottom--position">
                      <div className="rbt-corner-portion-wrapper">
                        <a href="#" className="rbt-card-link-btn">
                          <i className="fa-solid fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">01 Chairs</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-2">
                <div className="inner">
                  <div className="rbt-image-portion position-relative overflow-hidden">
                    <a href="#">
                      <Image
                        className=" rbt-scroll-trigger zoom_in animation-order-2"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-07.webp"
                        width="260"
                        height="260"
                      />
                    </a>
                    <div className="rbt-right-corner-portion bottom--position">
                      <div className="rbt-corner-portion-wrapper">
                        <a href="#" className="rbt-card-link-btn">
                          <i className="fa-solid fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">02 Sofas</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-3">
                <div className="inner">
                  <div className="rbt-image-portion position-relative overflow-hidden">
                    <a href="#">
                      <Image
                        className=" rbt-scroll-trigger zoom_in animation-order-3"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-10.webp"
                        width="260"
                        height="260"
                      />
                    </a>
                    <div className="rbt-right-corner-portion bottom--position">
                      <div className="rbt-corner-portion-wrapper">
                        <a href="#" className="rbt-card-link-btn">
                          <i className="fa-solid fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">03 Pendents</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-4">
                <div className="inner">
                  <div className="rbt-image-portion position-relative overflow-hidden">
                    <a href="#">
                      <Image
                        className=" rbt-scroll-trigger zoom_in animation-order-4"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-08.webp"
                        width="260"
                        height="260"
                      />
                    </a>
                    <div className="rbt-right-corner-portion bottom--position">
                      <div className="rbt-corner-portion-wrapper">
                        <a href="#" className="rbt-card-link-btn">
                          <i className="fa-solid fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">04 Homedecors</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-6 mt--24">
              <div className="rbt-cat-box rbt-cat-box-5 variation-one rbt-scroll-trigger fade_in animation-order-5">
                <div className="inner">
                  <div className="rbt-image-portion position-relative overflow-hidden">
                    <a href="#">
                      <Image
                        className=" rbt-scroll-trigger zoom_in animation-order-1"
                        alt="Category Product Images"
                        src="/assets/images/catagory-img/cat-bg-09.webp"
                        width="260"
                        height="260"
                      />
                    </a>
                    <div className="rbt-right-corner-portion bottom--position">
                      <div className="rbt-corner-portion-wrapper">
                        <a href="#" className="rbt-card-link-btn">
                          <i className="fa-solid fa-arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <a href="#">05 Coffee Tables</a>
                    </h6>
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
