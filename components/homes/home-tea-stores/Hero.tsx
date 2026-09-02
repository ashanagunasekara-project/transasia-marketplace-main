import Image from "next/image";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-tea-hero-section-area rbt-bg-color-white">
      <div className="container-fluid p-0">
        <div
          className="rbt-product-banner rbt-rounded--0 rbt-product-banner-style-four rbt-product-banner-style-four-hv-one rbt-banner-tea-stores rbt-hero-banner rbt-banner-four-var-two rbt-banner-four-var-two-larger rbt-bg-color-brand-100 rbt-scroll-trigger fade_in animation-order-3">
          <div className="rbt-banner-inner rbt-rounded--0">
            <div className="rbt-product-banner-content text-left d-flex align-items-end p-0">
              <div
                className="rbt-content-section rbt-content-less-wider rbt-slideshow-content-inner effect_fadeindown">
                <h1 className="rbt-title mb-0 rbt-text-color-white"><span className="rbt-bold--text d-block">Make
                  your tea luxury</span></h1>
              </div>
            </div>
            <div className="rbt-product-img rbt-scroll-trigger zoom_in animation-order-3">
              <Image
                alt="eCommerce Product Banner Background"
                src="/assets/images/product-banner/tea-store-hero-banner-01.webp"
                width={3840}
                height={1503}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
