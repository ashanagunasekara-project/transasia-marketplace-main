import Image from "next/image";
import { featureCards } from "@/data/splash";

export default function Features2() {
  return (
    <div className="splash-section-gap rbt-feature-presentaion-area position-relative">
      <div className="rbt-splash-bg-light light-bottom-left" />
      <div className="rbt-splash-bg-light bg-light-sm light-bottom-right" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="rbt-splash-section-title text-center">
              <span className="subtitle rbt-text-color-white rbt-scroll-trigger fade_in animation-order-1">
                E-Commerce Made Easy
              </span>
              <h2 className="rbt-title rbt-text-color-white position-relative">
                <span className="rbt-overlay-text overlay-text-color-var-3 overlay-sm">
                  eCommerce
                </span>
                <span className="rbt-bold--text rbt-scroll-trigger fade_in animation-order-2">
                  The Needed{" "}
                  <span className="rbt-splash-gradient-text">Everything</span>
                  <br />
                </span>
                <span className="rbt-title-sm-text rbt-scroll-trigger fade_in animation-order-3">
                  To Power Online Store
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec-24 rbt-splash-scroll flex-lg-wrap">
          {featureCards.map((card, idx) => (
            <div key={card.cardBg} className="col-8 col-md-5 col-lg-4 col-xl-3 mt--24">
              <div
                className={`rbt-feature-presentation-card rbt-scroll-trigger slide_in animation-order-${idx + 1}`}
              >
                <div className={`rbt-card-top ${card.cardBg}`}>
                  <Image
                    className={`rbt-scroll-trigger zoom_in animation-order-${idx + 1}`}
                    alt="Image"
                    src={card.image}
                    width={card.width}
                    height={card.height}
                  />
                </div>
                <div className="rbt-card-body text-center">
                  <h5 className="rbt-text-color-white rbt-text-bold mb--12">
                    {card.title}
                  </h5>
                  <p className="rbt-text-color-gray-300 h6 rbt-text-regular">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
