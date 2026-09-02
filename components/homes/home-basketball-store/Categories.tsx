import { basketBallCategories } from "@/data/categories";

import Image from "next/image";

const BASKETBALL_CATEGORY_ANIMATION_CLASSES = [
  "animation-order-1",
  "animation-order-2",
  "animation-order-3",
];

export default function Categories() {
  return (
    <div className="rbt-component-area rbt-categories-area rbt-section-gap">
      <div className="container">
        <div className="row align-items-center mt_dec--24">
          <div className="col-lg-4 mt--24">
            <div className="rbt-component-section-title rbt-gap--4 mb--0 p-0 border-0 text-left">
              <span className="rbt-card-subtitle b1 rbt-text-color-heading mt--0 rbt-scroll-trigger fade_in animation-order-1">
                Best Featured
              </span>
              <h2 className="rbt-title h1 rbt-scroll-trigger fade_in animation-order-2">
                <span className="rbt-bold--text">Categories </span>Your May
                Interested
              </h2>
            </div>
          </div>
          <div className="col-lg-8 mt--24">
            {/* Start Card Area */}
            <div className="row row--12 mt_dec--32 justify-content-md-center rbt-mobile-row">
              {basketBallCategories.map((item, index) => {
                const animationClass =
                  BASKETBALL_CATEGORY_ANIMATION_CLASSES[index] ??
                  "animation-order-1";

                return (
                  <div className="col-lg-4 col-md-4 col-6 mt--32" key={index}>
                    <div
                      className={`rbt-cat-box rbt-cat-box-3 text-center rbt-scroll-trigger fade_in ${animationClass}`}
                    >
                      <div className="inner">
                        <div className="rbt-image-portion">
                          <a href="#">
                            {item.imgSrc && (
                              <Image
                                alt="Category Product Images"
                                src={item.imgSrc}
                                width={520}
                                height={520}
                              />
                            )}
                          </a>
                        </div>
                        <div className="content">
                          <a
                            className="rbt-btn rbt-btn-gray icon-hover rbt-btn-md"
                            href="#"
                          >
                            <span className="btn-text">{item.title}</span>
                            <span className="btn-icon">
                              <i className="fa-sharp fa-solid fa-arrow-up-right-from-square" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* End Card Area */}
          </div>
        </div>
      </div>
    </div>
  );
}
