import ProductCard19 from "@/components/product-cards/ProductCard19";
import { babyClothingProducts } from "@/data/products/fashion";

export default function Products1() {
  return (
    <div className="rbt-component-area rbt-Blog-grid-area rbt-bg-color-white rbt-section-gap3Top">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="rbt-gray-contain-box rbt-gray-contain-box-style-one rbt-bg-color-gray-light">
          <div className="pt--32 pb--32">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-component-section-title text-center border-0 p-0 mb--40 mb_sm--36 align-items-center">
                  <a
                    href="#"
                    className="rbt-card-subtitle rbt-card-categories-text mt--0 rbt-scroll-trigger fade_in animation-order-1"
                  >
                    Featured Packaging’s
                  </a>
                  <h2 className="rbt-title  fade_in animation-order-1">
                    <span className="rbt-bold--text">Baby Clothing that </span>{" "}
                    New brand
                  </h2>
                </div>
              </div>
            </div>
            {/* Start Card Area */}
            <div className="container">
              <div className="row row--16 mt_dec--24">
                {/* start single card */}
                {babyClothingProducts.map((product, i) => (
                  <div key={i} className="col-12 col-lg-6 mt--24">
                    <ProductCard19 product={product}
                      animationOrder={i + 1}
                    />
                  </div>
                ))}
                {/* end single card */}
              </div>
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
