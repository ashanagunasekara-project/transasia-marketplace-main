import { furnitureProducts } from "@/data/products/furnitures";
import ProductCard2 from "@/components/product-cards/ProductCard2";
function HoverTransformFullwidth() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Hover Transform </span>
                  Fullwidth
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {/* Start Card Area */}
          <div className="row row--16 m-0 mt_dec--24 rbt-mobile-row">
            {furnitureProducts.map((product, i) => (
              <div
                key={i}
                className="col-lg-4 col-xl-4 col-xxl-4 col-lg-6 col-md-6 col-sm-12 col-12 mt--32"
              >
                <ProductCard2 product={product}
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

export default HoverTransformFullwidth;
