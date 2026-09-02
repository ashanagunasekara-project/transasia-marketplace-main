import ProductCard20 from "@/components/product-cards/ProductCard20";
import { bookProductsExtended } from "@/data/products/others";

import Link from "next/link";
export default function Products2() {
  return (
    <div className="rbt-component-area rbt-section-gap rbt-bg-color-gray-light">
      <div className="rbt-full-width-wrapper">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--28 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">
                  <span className="rbt-text-color-primary">25% Off</span> All
                  Manga: Order Now!
                </span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/shop-by-categories`}
            >
              <span className="btn-text">Shop All Books</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
          <hr className="rbt-separator rbt-separator-gray200 mb--40 rbt-bg-color-gray-100" />
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          {bookProductsExtended.map((product, i) => (
            <div key={i} className="col-xxl-1-8 col-md-3 col-6 mt--24">
              <ProductCard20 product={product}
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
