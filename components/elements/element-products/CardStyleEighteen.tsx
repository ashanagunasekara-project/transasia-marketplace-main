import { phoneProducts } from "@/data/products/phone";
import ProductCard7 from "@/components/product-cards/ProductCard7";
function CardStyleEighteen() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Card Style <span className="rbt-bold--text">Eighteen</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            {phoneProducts.slice(0, 4).map((product, i) => (
              <div
                key={i}
                className="col-lg-3 col-xl-3 col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-6 mt--24"
              >
                <ProductCard7 product={product}
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

export default CardStyleEighteen;
