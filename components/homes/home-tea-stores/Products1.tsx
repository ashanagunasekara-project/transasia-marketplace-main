import ProductCard5 from "@/components/product-cards/ProductCard5";
import { teaProducts } from "@/data/products/foods";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gapTop">
      <div className="rbt-full-width-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 align-items-center">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Now </span>Trending Items
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          {teaProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard5 product={product}
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
