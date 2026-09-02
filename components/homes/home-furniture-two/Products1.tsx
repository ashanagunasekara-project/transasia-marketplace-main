import ProductCard16 from "@/components/product-cards/ProductCard16";
import { furnitureTranspProducts } from "@/data/products/furnitures";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-bg-color-gray-light rbt-section-gap2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--24 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <div className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Top Selling
              </div>
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Popular Products</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {/* Start Single Card  */}
          {furnitureTranspProducts.slice(0, 8).map((product, i) => (
            <div
              key={i}
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard16
                detailsPageUrl="/product-single-furniture"
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
