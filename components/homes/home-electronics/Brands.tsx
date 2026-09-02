import { WaveShortIcon } from "../../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { electronicsBrands } from "@/data/brands";

export default function Brands() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap2 rbt-bg-color-gray-light">
      <div className="container">
        {/* Start Brands Area */}
        <div className="rbt-brand-style-one rbt-fshape-box-outline-style rbt-fshape-box-outline-style-extend-width">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title text-left">
                <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                  <span className="rbt-bold--text">Favorite Brands</span>
                </h4>
                <span className="rbt-fshape-right-portion">
                  <WaveShortIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box rbt-fshape-box-py-inc">
            <div className="row row--12 mt_dec--24">
              {electronicsBrands.map((brand, index) => (
                <div
                  key={brand.id}
                  className="col-lg-1-5 col-lg-4 col-md-4 col-sm-6 col-6 mt--24"
                >
                  <div
                    className={`rbt-brand text-center style-one rbt-content-transform-style rbt-scroll-trigger fade_in animation-order-${index + 1}`}
                  >
                    <Link href={`/shop-by-brands`}>
                      <div className="rbt-brand-inner">
                        <div className="brand-image">
                          {brand.imgSrc && (
                            <Image
                              alt="Ecommerce Brand Images"
                              src={brand.imgSrc}
                              width={brand.width}
                              height={brand.height}
                            />
                          )}
                          <span className="rbt-divider-arrow has-right-angel-animation" />
                        </div>
                        <div className="rbt-content">
                          <span className="discount-text">
                            {brand.discount}
                          </span>
                          <span className="prd-text">
                            Total{" "}
                            <span className="prd-number">
                              {brand.productCount}
                            </span>{" "}
                            Products
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Brands Area */}
      </div>
    </div>
  );
}
