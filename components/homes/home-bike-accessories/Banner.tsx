import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="rbt-component-area rbt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link href={`/shop`}>
              <figure>
                <Image
                  alt="Banner Thumbnail"
                  src="/assets/images/product-banner/discount-banner-img-bike-01.webp"
                  width={2640}
                  height={872}
                />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
