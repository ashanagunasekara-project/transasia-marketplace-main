import ProductCard5 from "@/components/product-cards/ProductCard5";
import { backpackProducts } from "@/data/products/fashion";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 align-items-center">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Our Recommendation
              </span>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                Shop The <span className="rbt-bold--text">Bestsellers</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24">
          {/* Start Single Card  */}
          {backpackProducts.map((product, i) => (
            <div
              key={i}
              className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
            >
              <ProductCard5
                detailsPageUrl="/product-single-laggage-bag"
                product={product}
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
