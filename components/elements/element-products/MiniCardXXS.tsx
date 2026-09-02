import { WaveThinIcon } from "../../svg-icons";
import ProductSmallCard from "@/components/product-cards/ProductCardElectronicsList";
import { electronicsProducts } from "@/data/products/electronics";
function MiniCardXXS() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          {/* Start Card Area */}
          <div className="row row--20 mt_dec--40 justify-content-center">
            {/* Start Single Box  */}
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 mt--40">
              <div className="rbt-fshape-box-outline-style rbt-fshape-box-outline-style-bg-white rbt-fshape-box-outline-style-sm-size">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="rbt-component-section-title">
                      <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                        <span className="rbt-bold--text">Mini Card XXS</span>
                      </h4>
                      <span className="rbt-fshape-right-portion rbt-fshape-right-portion-sm">
                        <WaveThinIcon />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rbt-fshape-box">
                  <div className="row row--12 mt_dec--24 rbt-card-row-has-top-separator rbt-two-align-card-row">
                    {electronicsProducts.slice(0, 6).map((product, i) => (
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
            </div>
            {/* End Single Box  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default MiniCardXXS;
