import Link from "next/link";
import Image from "next/image";
import { variationCards } from "@/data/splash";

export default function Variations() {
  return (
    <div className="rbt-section-gap rbt-bg-color-gray-light position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center mt_sm--32">
              <span className="subtitle">Enhance Your Website</span>
              <h2 className="mb--12">
                <span className="rbt-text-bold">
                  More Optionality Details
                  <br />
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24 justify-content-center">
          {variationCards.map((card, idx) => (
            <div key={card.href + idx} className="col-12 col-md-6 col-lg-4 col-xl-3 mt--24">
              <Link
                href={card.href}
                className={`rbt-feature-navigation-card ${card.colorVar} rbt-scroll-trigger fade_in animation-order-1`}
              >
                <div className="rbt-card-top">
                  <figure>
                    <Image
                      alt="Feature Image"
                      src={card.image}
                      width={card.width}
                      height={card.height}
                    />
                  </figure>
                </div>
                <div className="rbt-shape" />
                <div className="rbt-card-bottom">
                  <div className="rbt-inner">
                    <div className="rbt-feature-info">
                      <h6 className="rbt-title">
                        <span>{card.title}</span>
                      </h6>
                      <span>{card.subtitle}</span>
                    </div>
                    <span className="rbt-icon-overlay-link-btn">
                      <span className="rbt-btn-overlay">
                        <i className="rbt-icon fa-solid fa-arrow-up-right" />
                        <i className="rbt-icon-bottom fa-solid fa-arrow-up-right" />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <div className="col-12 mt--32 d-flex justify-content-center">
            <Link
              href={`/feature-list`}
              className="rbt-btn splash-btn icon-reverse-left rbt-scroll-trigger fade_in animation-order-5"
            >
              <span className="icon-left">
                <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
              </span>
              <span>View All Optionality</span>
              <span className="icon-right">
                <i className="fa-regular fa-up-right-from-square ml--4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
