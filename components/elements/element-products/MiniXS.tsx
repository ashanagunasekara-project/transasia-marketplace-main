import { electronicsProducts } from "@/data/products/electronics";
import ProductSmallCard from "@/components/product-cards/ProductCardElectronicsList";
function MiniXS() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Mini XS</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--20 mt_dec--40 justify-content-center">
            {/* Start Single Box  */}
            <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 mt--40">
              <div className="rbt-list-card-box">
                <div className="row row--12 mt_dec--24 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                  {electronicsProducts.slice(0, 4).map((product, i) => (
                    <div
                      key={product.id ?? i}
                      className="col-lg-6 col-md-6 col-sm-6 col-12 mt--24"
                    >
                      <ProductSmallCard product={product}
                      animationOrder={i + 1}
                    />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End Single Box  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default MiniXS;
