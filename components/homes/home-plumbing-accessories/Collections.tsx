import { plumbingSmallBanners } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";

export default function Collections() {
  return (
    <div className="rbt-component-area rbt-products-area rbt-section-gap">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="grid-product-banner-grp">
          <div className="row row--0">
            {plumbingSmallBanners.map((item, index) => (
              <div key={index} className="col-md-6 col-12">
                <div
                  className={`rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-one rbt-rounded--0 rbt-scroll-trigger fade_in animation-order-${
                    index + 1
                  }`}
                >
                  <div className="inner">
                    <div className="content">
                      <p className="subtitle">{item.subtitle}</p>
                      <h2 className="title">
                        <Link href={`/shop-by-categories`}>
                          <span className="rbt-bold--text">
                            {item.title?.split("\n")[0] ?? ""}
                            <br />
                            {item.title?.split("\n").slice(1).join(" ")}
                          </span>
                        </Link>
                      </h2>
                      <Link
                        href={`/shop-by-categories`}
                        className="rbt-btn rbt-btn-white rbt-btn-md"
                      >
                        Shop Collection
                      </Link>
                    </div>
                    <div className="rbt-image-portion">
                      <Link href={`/shop-by-categories`}>
                        {item.imgSrc && (
                          <Image
                            className={`rbt-scroll-trigger zoom_in animation-order-${
                              index + 1
                            }`}
                            alt="Category Product Images"
                            src={item.imgSrc}
                            width={item.width}
                            height={item.height}
                          />
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
