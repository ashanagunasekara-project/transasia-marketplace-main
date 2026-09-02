import { toyCollectionBanners } from "@/data/collections";

import Image from "next/image";
import Link from "next/link";

const KIDS_TOY_HERO_ANIMATION_CLASSES = [
  "animation-order-1",
  "animation-order-1",
];

export default function Hero() {
  return (
    <div className="rbt-component-area rbt-products-area">
      <div className="wrapper plr--56 plr_lg--60 plr_md--20 plr_sm--20">
        <div className="grid-product-banner-grp">
          <div className="row row--0">
            {toyCollectionBanners.map((item, index) => {
              const animationClass =
                KIDS_TOY_HERO_ANIMATION_CLASSES[index] ?? "animation-order-1";

              return (
                <div className="col-xl-6 col-12" key={index}>
                  <div
                    className={`rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-one rbt-rounded--0 rbt-scroll-trigger fade_in ${animationClass}`}
                  >
                    <div className="inner align-items-center">
                      <div className="content text-center">
                        <p className="subtitle">{item.subtitle}</p>
                        <h2 className="title">
                          <Link href={`/shop-by-categories`}>
                            <span className="rbt-bold--text">
                              {item.title?.split("\n")[0] ?? ""}
                              <br />
                              {item.title?.split("\n").slice(1).join(" ") ?? ""}
                            </span>
                          </Link>
                        </h2>
                        <Link
                          href={`/shop-by-categories`}
                          className="rbt-btn rbt-btn-md rbt-bg-color-primary"
                        >
                          Shop Collection
                        </Link>
                      </div>
                      <div className="rbt-image-portion">
                        <Link href={`/shop-by-categories`}>
                          <Image
                            className={`rbt-scroll-trigger zoom_in ${animationClass}`}
                            alt={item.alt || ""}
                            src={item.imgSrc || ""}
                            width={1808}
                            height={1300}
                            priority
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
