import { smartDeviceBanners } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";

export default function Collections() {
  return (
    <div className="rbt-component-area rbt-category-banner-area rbt-section-gapTop">
      <div className="wrapper">
        <div className="row row--0">
          {smartDeviceBanners.map((item, index) => (
            <div key={index} className="col-lg-6 col-12">
              <div className="rbt-cat-box rbt-cat-box-8 rbt-cat-box-8-var-three h-650 rbt-scroll-trigger fade_in animation-order-1 rbt-rounded--0">
                <div className="inner">
                  <div className="content d-flex justify-content-between w-100 align-items-end">
                    <h3 className="title mb-0">
                      <span className="rbt-bold--text">{item.title}</span>
                    </h3>
                    <Link
                      href={`/shop-by-categories`}
                      className="rbt-btn rbt-btn-border rbt-btn-md d-inline-block rbt-btn-border-white"
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
                        width={1920}
                        height={1290}
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
