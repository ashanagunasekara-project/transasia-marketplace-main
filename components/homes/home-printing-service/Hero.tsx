import Image from "next/image";
import Link from "next/link";
import { printingServiceProducts } from "@/data/products/printingService";
import { formatCurrency } from "@/lib/price";
import OfferBadge from "@/components/common/ui/OfferBadge";

const heroProduct = printingServiceProducts[0];

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white rbt-section-gap2Bottom">
      <div className="container">
        {/* Start Product Banner Area */}
        <div className="row row--12 rbt-container-extended-wider">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
            <div className="rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-banner-four-var-three bg-color-brand-300 rbt-prt-h-banner">
              <div className="rbt-banner-inner">
                <div className="rbt-product-banner-content">
                  <div className="rbt-content-section">
                    <h6 className="rbt-banner-subtitle-two h4 mb-0">
                      🔥 Exclusive Offer Going
                    </h6>
                    <h2 className="rbt-banner-title rbt-banner-title-lg mb-0">
                      <span className="rbt-bold--text d-block">
                        T-shirt Printing Easy{" "}
                      </span>
                      Made for Everyone.
                    </h2>
                    <div className="rbt-pricing-part d-flex align-items-center flex-row">
                      <p className="rbt-price-desc-text">Starting From</p>
                      <span className="rbt-price-text offer-price">
                        {formatCurrency(heroProduct.price)}
                      </span>
                      <OfferBadge product={heroProduct} variant="off" />
                    </div>
                    <div className="rbt-banner-btn">
                      <Link className="rbt-btn" href="/shop">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-1">
                  <Image
                    alt="eCommerce Product Banner Half Background"
                    src="/assets/images/product-banner/banner-product-print-01.webp"
                    width={761}
                    height={600}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
