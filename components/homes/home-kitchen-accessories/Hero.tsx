import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-seven rbt-bg-color-brand-100">
      <div className="rbt-banner-inner align-items-end rbt-rounded--0">
        <div className="rbt-product-banner-content text-center">
          <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
            <h6 className="rbt-banner-subtitle-two kitchen-subtitle h4 mb-0">
              Bring Adventure into your life Everyday Everyday....
            </h6>
            <h1 className="rbt-title mb-0 rbt-text-color-white kitchen-title">
              kitchen-ware
            </h1>
            <div className="rbt-banner-btn-grp d-flex flex-wrap rbt-gap--16 mt--16 mt_sm--16 justify-content-center">
              <Link className="rbt-btn" href={`/shop-by-categories`}>
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
        <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3 rbt-product-img-one-template">
          <Image
            alt="eCommerce Product Banner Background"
            src="/assets/images/product-banner/kitchen-hero-a-01.webp"
            width={3840}
            height={1380}
            priority
          />
        </div>
      </div>
    </div>
  );
}
