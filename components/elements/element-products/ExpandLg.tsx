import { printingServiceProducts } from "@/data/products/printingService";
import ProductCard3 from "@/components/product-cards/ProductCard3";
function ExpandLg() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Expand lg</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row row--12 mt_dec--24">
            {printingServiceProducts.slice(0, 2).map((product, i) => (
              <div key={i} className="col-lg-6 col-md-6 col-12 mt--24">
                {/* Start Card Area */}
                <ProductCard3 product={product}
                      animationOrder={i + 1}
                    />
                {/* End Card Area */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpandLg;
