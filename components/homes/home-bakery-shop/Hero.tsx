import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-seven rbt-bg-color-brand-100">
      <div className="rbt-banner-inner rounded-0">
        <div className="rbt-product-banner-content text-center">
          <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
            <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
              Elevate Your Style, Embrace Your Self
            </h6>
            <h1 className="rbt-title mb-0 rbt-text-color-white">
              Step Into a Sweet Wonderland.
            </h1>
            <div className="rbt-banner-btn-grp d-flex flex-wrap rbt-gap--16 mt--16 mt_sm--16 justify-content-center">
              <Link
                className="rbt-btn rbt-bg-color-secondary"
                href={`/shop-by-categories`}
              >
                Shop Collection
              </Link>
              <Link
                className="rbt-btn rbt-btn-secondary"
                href={`/shop-by-categories`}
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
          <Image
            alt="eCommerce Product Banner Background"
            src="/assets/images/product-banner/product-banner-bkr-img-01.webp"
            width={1920}
            height={1504}
            priority
          />
          <Image
            alt="eCommerce Product Banner Background"
            src="/assets/images/product-banner/product-banner-bkr-img-02.webp"
            width={1920}
            height={1478}
          />
        </div>
      </div>
    </div>
  );
}
