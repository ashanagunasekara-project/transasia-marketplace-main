import Link from "next/link";
import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Circle || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb title="Categories Style" highlighted="Circle" />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-component-area rbt-categories-styles-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          {/* Start Card Area */}
          <div className="row row--8 mt_dec--16 align-items-end">
            {/* Start Single Card  */}
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16">
              <Link
                className="rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-1"
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-img-01.webp"
                      width="410"
                      height="398"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">Furniture &amp; Decor</h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16">
              <Link
                className="rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-2"
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-2">
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-img-02.webp"
                      width="390"
                      height="390"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">Rugs &amp; Carpets</h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16">
              <Link
                className="rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-3"
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-3">
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-img-03.webp"
                      width="390"
                      height="392"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">Wall Art</h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16">
              <Link
                className="rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-4"
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-4">
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-img-04.webp"
                      width="390"
                      height="390"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">Lighting Fixtures</h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16">
              <Link
                className="rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-5"
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-5">
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-img-05.webp"
                      width="392"
                      height="492"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">Home Fragrance</h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16">
              <Link
                className="rbt-cat-box rbt-cat-box-1 text-center rbt-scroll-trigger fade_in animation-order-6"
                href={`/shop-by-categories`}
              >
                <div className="inner">
                  <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-6">
                    <Image
                      alt="Category Product Images"
                      src="/assets/images/catagory-img/cat-img-06.webp"
                      width="390"
                      height="390"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">Window Treatments</h6>
                  </div>
                </div>
              </Link>
            </div>
            {/* End Single Card  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}
