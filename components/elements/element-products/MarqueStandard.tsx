import { products } from "@/data/products/fashion";
import ProductCard1 from "@/components/product-cards/ProductCard1";
function MarqueStandard() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gapTop rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Marque Standard</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24 rbt-mobile-row">
            {/* Start Single Card  */}
            {products.slice(0, 4).map((product, i) => (
              <div
                key={i}
                className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
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
    </>
  );
}

export default MarqueStandard;
