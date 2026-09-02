import { furnitureTranspProducts } from "@/data/products/furnitures";
import ProductCard16 from "@/components/product-cards/ProductCard16";
function SlideHover() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Slide Hover</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24 rbt-mobile-row">
            {furnitureTranspProducts.slice(0, 8).map((product, i) => (
              <div
                key={i}
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
              >
                <ProductCard16 product={product}
                  animationOrder={i + 1}
                />
              </div>
            ))}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default SlideHover;
