import ProductCard8 from "@/components/product-cards/ProductCard8";
import { chocolateProducts } from "@/data/products/foods";

import Link from "next/link";
export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-center flex-wrap rbt-section-gap3Bottom rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 p-0 mb--0 border-0">
              <span className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Popular Products
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Now Trending Chocolate</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-sm-2 radius-round-6 rbt-btn-secondary-alt"
              href="/shop"
            >
              <span className="btn-text">View All Product</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          {chocolateProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard8 product={product}
                      animationOrder={i + 1}
                    />
            </div>
          ))}
          {/* End Single Card  */}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
