import { WaveDividerIcon } from '../../svg-icons';
import { bakeryItems } from "@/data/categories";

import Image from "next/image";
import Link from "next/link";

const BAKERY_CATEGORY_ANIMATION_CLASSES = [
  "animation-order-1",
  "animation-order-2",
  "animation-order-3",
  "animation-order-4",
  "animation-order-5",
  "animation-order-6",
];

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-bg-color-white rbt-section-gap rbt-section-has-edge-divider">
      <div className="rbt-edge-top rbt-text-color-white z-1">
        <WaveDividerIcon />
      </div>
      <div className="container mb--68 mb_sm--20 mb_md--20 mb_lg--20">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between flex-row align-items-end mb--40 flex-wrap rbt-gap--16">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0">
              <h2 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                Popular by <span className="rbt-bold--text"> Categories</span>
              </h2>
            </div>
            <Link
              className="rbt-btn rbt-btn-secondary rbt-btn-sm-2 rbt-scroll-trigger fade_in animation-order-2"
              href={`/categories-list`}
            >
              <span className="btn-text">View All Categories</span>
              <span className="btn-icon ml--4">
                <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
              </span>
            </Link>
          </div>
        </div>
        {/* Start Card Area */}
        <div className="row row--8 mt_dec--16 align-items-end">
          {bakeryItems.map((item, index) => {
            const animationClass =
              BAKERY_CATEGORY_ANIMATION_CLASSES[index] ?? "animation-order-1";

            return (
              <div className="col-lg-2 col-md-4 col-sm-4 col-4 mt--16" key={index}>
                <Link
                  className={`rbt-cat-box rbt-cat-box-1 rbt-cat-box-1-rounded text-center rbt-scroll-trigger fade_in ${animationClass}`}
                  href={`/shop-by-categories`}
                >
                  <div className="inner">
                    <div
                      className={`rbt-image-portion rbt-bg-color-brand-100 rbt-scroll-trigger zoom_in ${animationClass}`}
                    >
                      <Image
                        alt="Category Product Images"
                        src={item.imgSrc || ""}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="content">
                      <h6 className="title">{item.title}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {/* End Card Area */}
      </div>
    </div>
  );
}
