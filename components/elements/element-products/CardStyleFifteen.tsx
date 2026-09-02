import { sportsProduct } from "@/data/products/sports";
import ProductCard1 from "@/components/product-cards/ProductCard1";
function CardStyleFifteen() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  Card Style <span className="rbt-bold--text">Fifteen</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24">
            {sportsProduct.slice(0, 4).map((product, i) => (
              <div
                key={i}
                className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
              >
                <ProductCard1
                  cardBodyClass="rbt-card-body rbt-bg-color-white rbt-card-circle-hidden"
                  product={product}
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

export default CardStyleFifteen;
