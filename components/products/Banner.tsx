import Link from "next/link";
import Image from "next/image";
import { allElectronocsProducts } from "@/data/products/electronics";
import { formatCurrency } from "@/lib/price";

const menuBannerProduct =
  allElectronocsProducts.find((product) => product.id === 132) ??
  allElectronocsProducts[0];

export default function Banner({ containerFull = false }) {
  return (
    <div className="rbt-component-area rbt-page-banner-content">
      <div
        className={`${containerFull ? "rbt-full-width-wrapper" : "container"}`}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-banner radius-8 rbt-scroll-trigger fade_in animation-order-1">
              <div className="mega-top-banner bg-three">
                <div className="rbt-banner-inner w-100">
                  <div className="rbt-banner-content">
                    <h5 className="title">
                      Buy One and Get 50% Off the Second Purchase Now
                    </h5>
                    <p className="b3 desc">
                      Send us your idea, it may appear on Unimart.
                    </p>
                  </div>
                  <div className="pricing-action d-flex align-items-center rbt-gap--8">
                    <div className="rbt-pricing-part d-flex">
                      <span className="rbt-price-text offer-price">
                        {formatCurrency(menuBannerProduct.price)}
                      </span>
                      {menuBannerProduct.oldPrice ? (
                        <del className="rbt-dis-price-text">
                          {formatCurrency(menuBannerProduct.oldPrice)}
                        </del>
                      ) : null}
                    </div>
                    <Link
                      className="rbt-btn rbt-btn-sm rbt-btn-black"
                      href={`/product-single-default`}
                    >
                      View Details
                    </Link>
                  </div>
                  <a href="#" className="product-img position-bottom">
                    <Image
                      alt="Ecommerce Product"
                      src="/assets/images/splash/menu-banner/menu-prd-01.webp"
                      width={278}
                      height={280}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
