import ProductCard11 from "@/components/product-cards/ProductCard11";
import { electronicsListViewData } from "@/data/products/electronics";
function HorizontalLarge() {
  return (
    <>
      <div className="rbt-component-area rbt-products-area rbt-section-gap rbt-bg-color-gray-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-center">
                <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Horizontal Large</span>
                </h2>
              </div>
            </div>
          </div>
          {/* Start Card Area */}
          <div className="row row--12 mt_dec--24 justify-content-center">
            {/* Start Single Card  */}
            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 mt--24">
              {<ProductCard11 product={electronicsListViewData[0]} />}
            </div>
            {/* End Single Card  */}
          </div>
          {/* End Card Area */}
        </div>
      </div>
    </>
  );
}

export default HorizontalLarge;
