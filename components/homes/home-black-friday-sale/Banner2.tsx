import Image from "next/image";
import Link from "next/link";
export default function Banner2() {
  return (
    <div className="rbt-component-area rbt-section-gap2Top">
      <div className="rbt-wider-container p-0 rbt-rounded--32">
        <Link href={`/shop-by-category`}>
          <div className="rbt-product-discount-banner">
            <Image
              className="rbt-discount-thumbnail"
              alt="Product Thumbnail Banner"
              src="/assets/images/product-banner/product-banner-img-black-friday-a-02.webp"
              width={3344}
              height={872}
            />
            <Image
              className="rbt-product-img"
              alt="Product Image"
              src="/assets/images/product-img/accessories/product-img-black-friday-a-01.webp"
              width={1092}
              height={1182}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
