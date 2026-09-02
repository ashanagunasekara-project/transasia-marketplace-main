import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-banner-area rbt-bg-color-white">
      <div className="wrapper plr--80 plr_xl--30 plr_lg--20 plr_md--20 plr_sm--20">
        <Link
          href={`/shop`}
          className="rbt-hero-slider-banner rbt-rounded--16 overflow-hidden position-relative"
        >
          <Image
            alt="eCommerce Hero Slider"
            src="/assets/images/hero-slider-banner/slider-ceramics-01.webp"
            width={3440}
            height={1324}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
