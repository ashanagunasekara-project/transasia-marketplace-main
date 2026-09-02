import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        {/* Start Product Banner Area */}
        <div className="row row--0">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
            <Link href={`/shop`} className="rbt-hero-slider-banner">
              <Image
                alt="eCommerce Hero Slider"
                src="/assets/images/product-banner/product-banner-thumbnail-img-watch-b-01.webp"
                width={3640}
                height={1260}
                priority
              />
            </Link>
          </div>
        </div>
        {/* End Product Banner Area */}
      </div>
    </div>
  );
}
