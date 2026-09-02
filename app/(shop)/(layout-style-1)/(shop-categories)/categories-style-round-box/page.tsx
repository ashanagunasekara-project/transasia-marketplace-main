import Image from "next/image";
import CategoryBreadcrumb from "@/components/other-pages/categories/CategoryBreadcrumb";
import { categories } from "@/data/categories";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Categories Style Round Box || Unimart - eCommerce React Nextjs Bootstrap5 Template",
  description: "Unimart - eCommerce React Nextjs Bootstrap5 Template",
};

export default function Page() {
  return (
    <>
      <CategoryBreadcrumb title="Categories Style" highlighted="Round Box" />
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
            {categories.map((category, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-6 mt--24">
                <Link
                  className="rbt-cat-box rbt-cat-box-2 text-center rbt-scroll-trigger fade_in animation-order-1"
                  href={`/shop-by-categories`}
                >
                  <div className="inner">
                    <div className="rbt-image-portion rbt-scroll-trigger zoom_in animation-order-1">
                      {category.imgSrc && (
                        <Image
                          alt="Category Product Images"
                          src={category.imgSrc}
                          width="346"
                          height="346"
                        />
                      )}
                    </div>
                    <div className="content">
                      <h6 className="title">{category.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {/* End Single Card  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}
