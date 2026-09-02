import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="rbt-product-banner rbt-rounded--0">
      <div className="rbt-banner-inner rounded-0">
        <div className="rbt-product-img rbt-product-img-one-template">
          <Link href={`/shop-by-categories`}>
            <Image
              alt="eCommerce Product Banner Background Image"
              src="/assets/images/product-banner/banner-img-bike-01.webp"
              width={3840}
              height={1606}
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
