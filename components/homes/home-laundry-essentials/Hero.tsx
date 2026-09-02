import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <div className="rbt-products-area-box">
          <div className="rbt-component-area rbt-products-banner-area rbt-hero-banner-classic rbt-hero-banner-classic-sm-height rbt-hero-banner-classic-var-2 rbt-banner-has-bg-grid-two rbt-hero-banner-laundry">
            <div className="container">
              <div className="rbt-banner-wrapper">
                <div className="row row--12">
                  <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
                    <div className="rbt-hero-banner-img">
                      <Image
                        alt="Hero Image"
                        src="/assets/images/product-banner/banner-img-laundry-sm-01.webp"
                        width={1310}
                        height={1154}
                        className="image-auto"
                        priority
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                    <div className="rbt-hero-banner-content rbt-content-has-shape rbt-slideshow-content-inner effect_fadeindown">
                      <h4 className="mb--0 rbt-text-color-white">
                        Essentials for Every Wash
                      </h4>
                      <h1 className="title title-var-2 rbt-font-primary rbt-text-color-white rbt-text-capitalize">
                        Your One-Stop Shop for Laundry Essentials
                      </h1>
                      <Link href={`/shop`} className="rbt-btn mt--32 mt_sm--16">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="rbt-banner-bg-img image-auto"
              alt="Banner Background Media"
              src="/assets/images/product-banner/banner-img-laundry-01.webp"
              width={3840}
              height={1370}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
