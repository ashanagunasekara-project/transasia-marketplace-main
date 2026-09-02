import { cakeCards } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";

export default function Collections() {
  return (
    <div className="rbt-component-area rbt-products-area">
      <div className="container">
        <div className="row row--12 mt_dec--24">
          {cakeCards.map((item, index) => (
            <div className="col-lg-6 col-12 mt--24" key={index}>
              <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-three rbt-scroll-trigger fade_in animation-order-1">
                <div className="inner">
                  <div className="content rbt-width-100">
                    <p className="subtitle">{item.subtitle}</p>
                    <h2 className="title">
                      <Link href="/shop-by-categories">
                        <span className="rbt-bold--text ">
                          {item.title?.split("\n")[0] ?? ""}
                        </span>
                        <br />
                        {item.title?.split("\n").slice(1).join(" ") ?? ""}
                      </Link>
                    </h2>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-bg-color-secondary rbt-btn-md d-inline-block"
                    >
                      Shop Collection
                    </Link>
                  </div>
                  <div className="rbt-image-portion">
                    <Link href={`/shop-by-categories`}>
                      <Image
                        className="rbt-scroll-trigger zoom_in animation-order-1"
                        alt="Category Product Images"
                        src={item.imgSrc || ""}
                        width={item.width}
                        height={item.height}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
