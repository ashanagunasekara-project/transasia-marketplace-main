import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";

export default function SuggestedProducts({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product, index) => (
        <div className="col-xl-12 col-lg-3 col-sm-6 col-12 mt--24" key={index}>
          <div className="rbt-card rbt-product-card has-hover-box-shadow">
            <div className="inner">
              <div className="rbt-card-img rbt-bg-color-default">
                <Link href={`/product-single-default/${product.id}`}>
                  <Image
                    alt="Card Image"
                    src={product.imgSrc}
                    width={856}
                    height={720}
                  />
                </Link>
              </div>
              <div className="rbt-card-body p-0 pt--4">
                <Link
                  href={`/product-single-default/${product.id}`}
                  className="rbt-card-subtitle rbt-card-categories-text"
                >
                  {product.category}
                </Link>
                <h6 className="rbt-card-title b3">
                  <Link href={`/product-single-default/${product.id}`}>
                    {product.title}
                  </Link>
                </h6>
                <div className="pricing-part">
                  <span className="price-text">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
