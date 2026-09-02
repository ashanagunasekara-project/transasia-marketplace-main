import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-seven rbt-bg-color-brand-100 rbt-banner-bg-black-gradient-overlay">
      <div className="rbt-banner-inner align-items-end">
        <div className="rbt-product-banner-content text-center">
          <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
            <h6 className="rbt-banner-subtitle-two h4 mb-0 rbt-text-color-white">
              Bring Adventure into your life Everyday....
            </h6>
            <h1 className="rbt-title mb-0 rbt-text-color-white">
              PEACE OF MIND in EVERY RIDE
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
        <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3 rbt-product-img-three-template">
          <Image
            alt="eCommerce Product Banner Background"
            src="/assets/images/product-banner/electric-cycle-hero-a-01.webp"
            width={1308}
            height={1384}
            priority
          />
          <Image
            alt="eCommerce Product Banner Background"
            src="/assets/images/product-banner/electric-cycle-hero-a-02.webp"
            width={1222}
            height={1384}
          />
          <Image
            alt="eCommerce Product Banner Background"
            src="/assets/images/product-banner/electric-cycle-hero-a-03.webp"
            width={1322}
            height={1384}
          />
        </div>
      </div>
    </div>
  );
}
