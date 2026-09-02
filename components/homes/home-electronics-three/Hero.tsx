import Image from "next/image";
import Link from "next/link";
import { accessoriesProducts } from "@/data/products/accessories";
import { formatCurrency } from "@/lib/price";
import OfferBadge from "@/components/common/ui/OfferBadge";

const heroProduct = accessoriesProducts[0];

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-hero-banner rbt-banner-four-var-two rbt-rounded--0">
        <div className="rbt-banner-inner rbt-rounded--0">
          <div className="rbt-product-banner-content">
            <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_zoomout">
              <h6 className="rbt-banner-subtitle-two mb-0">Modify Yourself</h6>
              <h2 className="rbt-banner-title rbt-banner-title-lg mb-0 rbt-text-capitalize">
                <span className="rbt-bold--text d-block">
                  Electronic Accessories{" "}
                </span>
                Stay powered up
              </h2>
              <div className="rbt-pricing-part d-flex align-items-center flex-row">
                <p className="rbt-price-desc-text">Starting From</p>
                <span className="rbt-price-text offer-price">
                  {formatCurrency(heroProduct.price)}
                </span>
                <OfferBadge product={heroProduct} />
              </div>
              <div className="rbt-banner-btn">
                <Link className="rbt-btn" href={`/shop`}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="rbt-product-img rbt-banner-four-var-two rbt-scroll-trigger zoom_in animation-order-4 bg-transparent">
            <Image
              alt="eCommerce Product Banner Background"
              src="/assets/images/product-banner/electronics-hero-c-01.webp"
              width={3840}
              height={1118}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
