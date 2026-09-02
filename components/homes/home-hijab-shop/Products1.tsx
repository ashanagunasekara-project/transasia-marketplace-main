import ProductCard1 from "@/components/product-cards/ProductCard1";
import { hijabProducts } from "@/data/products/fashion";
import Link from "next/link";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h2 className="rbt-title rbt-text-regular rbt-scroll-trigger fade_in animation-order-1 rbt-text-capitalize">
                A Harmonious
                <span className="rbt-bold--text ml--4 rbt-text-capitalize">
                  Blend Of Comfort
                </span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/categories-list`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {/* Start Single Card  */}
          {hijabProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-12 col-12 mt--24"
            >
              <ProductCard1 product={product}
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
