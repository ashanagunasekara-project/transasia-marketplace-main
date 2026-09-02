import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white rbt-rounded--0">
      <div className="rbt-product-banner rbt-product-banner-style-four rbt-hero-banner rbt-hero-banner rbt-banner-four-var-two rbt-rounded--0">
        <div className="rbt-banner-inner">
          <div className="rbt-product-banner-content">
            <div className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_zoomout">
              <h6 className="rbt-banner-subtitle-two rbt-text-color-primary mb-0">
                Exclusive Offer Going
              </h6>
              <h1 className="title rbt-text-regular mb-0 h1 rbt-text-capitalize">
                <span className="rbt-bold--text">
                  Shop Our Express Store Now <br />
                  Buy or lease your next new{" "}
                </span>
                car online we’ll deliver it to your doorstep.
              </h1>
              <div className="rbt-banner-btn">
                <Link className="rbt-btn" href="/shop">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="rbt-product-img rbt-banner-four-var-two bg-transparent rbt-scroll-trigger zoom_in animation-order-4">
            <Image
              alt="eCommerce Product Banner Background"
              src="/assets/images/product-banner/car-access-hero-a-01.webp"
              width={3840}
              height={1040}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
