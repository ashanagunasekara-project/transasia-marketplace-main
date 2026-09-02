import ProductCard21 from "@/components/product-cards/ProductCard21";
import { cyberMondayProducts } from "@/data/products/others";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap2Bottom">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box rbt-bg-color-black rbt-product-area-has-black-bg rbt-rounded--16 rbt-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title rbt-gap--4 text-center border-0 p-0 align-items-center">
                  <span className="rbt-card-subtitle b1 rbt-text-color-white mt--0 rbt-scroll-trigger fade_in animation-order-1">
                    Special Discounted
                  </span>
                  <h2 className="rbt-title rbt-text-color-white rbt-scroll-trigger fade_in animation-order-2">
                    Hot <span className="rbt-bold--text">Trending </span>
                    Products
                  </h2>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--24">
              {cyberMondayProducts.map((product, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-xl-3 col-xxl-3 col-md-6 col-sm-6 col-6 mt--24"
                >
                  <ProductCard21 product={product}
                      animationOrder={index + 1}
                    />
                </div>
              ))}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
