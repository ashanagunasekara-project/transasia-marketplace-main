import Image from "next/image";
import Link from "next/link";
import OfferBadge from "@/components/common/ui/OfferBadge";

const WEDDING_HERO_PRICE = 29.98;
const WEDDING_HERO_OLD_PRICE = 59.96;

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="rbt-product-banner rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-medium rbt-scroll-trigger fade_in animation-order-3 rbt-rounded--0">
        <div className="rbt-banner-inner rbt-rounded--0">
          <div className="rbt-product-banner-content text-center p--72 mt--100 mt_sm--48 mt_md--60 mt_lg--60 d-flex justify-content-center align-items-center">
            <div className="rbt-content-section rbt-slideshow-content-inner effect_fadeindown">
              <h6 className="rbt-banner-subtitle-two rbt-text-color-white h4 mb-0">
                Exclusive Offer Going
              </h6>
              <h1 className="rbt-title rbt-text-color-white mb-0 h1">
                <span className="rbt-bold--text d-block">
                  Your Destination for Perfect
                </span>
                Wedding Accessories.
              </h1>
              <div className="rbt-pricing-part d-flex align-items-center flex-row justify-content-center rbt-scroll-trigger fade_in animation-order-5">
                <p className="rbt-price-desc-text m-0 rbt-text-semi-bold rbt-text-color-gray-400">
                  Intro Sell Offer
                </p>
                <span className="rbt-price-text offer-price rbt-text-color-warning">
                  ${WEDDING_HERO_PRICE.toFixed(2)}
                </span>
                <OfferBadge
                  price={WEDDING_HERO_PRICE}
                  oldPrice={WEDDING_HERO_OLD_PRICE}
                  variant="off"
                />
              </div>
              <div className="rbt-banner-btn-grp d-flex rbt-gap--1 6 mt--32 mt_sm--16 justify-content-center">
                <Link className="rbt-btn" href={`/shop-by-categories`}>
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
          <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
            <Image
              alt="eCommerce Product Banner Background"
              src="/assets/images/product-banner/banner-img-wedding-01.webp"
              width={3840}
              height={1548}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
