import Image from "next/image";
import Link from "next/link";

export default function Banner({ wrapperBox }: { wrapperBox?: string }) {
  return (
    <div className="rbt-component-area rbt-banner-area rbt-bg-color-white rbt-section-gap">
      <div className={` ${wrapperBox ? wrapperBox : 'rbt-full-width-wrapper'}`}>
        <div className="rbt-sale-banner rbt-rounded--24">
          <Link href={`/shop-by-categories`}>
            <Image
              className="rbt-rounded--24"
              alt="eCommerce Sale Banner"
              src="/assets/images/banner-img/sale-banner-full-a-01.webp"
              width={3616}
              height={1000}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
