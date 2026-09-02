import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-bg-color-white">
      <div className="rbt-products-area-box">
        <div
          className="rbt-component-area rbt-products-banner-area rbt-hero-banner-classic rbt-hero-banner-classic-var-2 rbt-banner-cleaning-accessories rbt-banner-has-bg-grid-two z-2">
          <div className="rbt-md-wider-container w-100">
            <div className="rbt-banner-wrapper">
              <div className="row row--12">
                <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-none d-md-flex justify-content-center ">
                  <div className="rbt-hero-banner-img">
                    <Image
                      alt="Hero Image"
                      className="image-auto"
                      src="/assets/images/product-banner/product-banner-img-cleaning-sm-02.webp"
                      width={1280}
                      height={1396}
                      priority
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                  <div
                    className="rbt-hero-banner-content rbt-content-has-shape rbt-slideshow-content-inner effect_fadeindown">
                    <span className="rbt-banner-subtitle-two mb-0">Quality Products
                      for a Clean Home</span>
                    <h1 className="title rbt-text-color-white rbt-text-capitalize">Your One-Stop Shop for <br className="d-none d-lg-block" /> Cleaning Supplies
                    </h1>
                    <p className="rbt-banner-description mb--0">Explore premium cleaning supplies for a shining home.</p>
                    <Link href="/shop" className="rbt-btn rbt-bg-color-secondary mt--32 mt_sm--16">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="rbt-banner-bg-img rbt-rounded--0"
            alt="Banner Background Media"
            src="/assets/images/product-banner/product-banner-img-cleaning-01.webp"
            width={3840}
            height={1302}
          />
        </div>
      </div>
    </div>
  );
}
