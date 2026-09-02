import { StarFillIcon } from '../../svg-icons';
import { pricingStyleFourData } from "@/data/pricing";

function PricingStyleFour() {
  return (
    <div
      id="rbt-pricing-block-03"
      className="rbt-pricing-area rbt-bg-color-gray-light rbt-section-gap"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title d-flex justify-content-between align-items-center p-0 mb--40 border-0">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Standard Pricing</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-2">
          <div className="advance-pricing">
            <div className="inner">
              <div className="row row--0">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="pricing-left">
                    <h3 className="main-title">{pricingStyleFourData.mainTitle}</h3>
                    <p className="description">{pricingStyleFourData.description}</p>
                    <div className="price-wrapper">
                      <span className="price-amount">
                        ${pricingStyleFourData.price}
                        <sup>{pricingStyleFourData.priceSuffix}</sup>
                      </span>
                    </div>
                    <div className="pricing-btn-group">
                      <button className="rbt-btn w-100">
                        {pricingStyleFourData.primaryButtonText}
                      </button>
                      <button className="rbt-btn rbt-btn-border w-100">
                        {pricingStyleFourData.secondaryButtonText}
                      </button>
                    </div>
                    <div className="rating">
                      {Array.from({ length: pricingStyleFourData.ratingCount }).map(
                        (_, idx) => (
                          <a key={`rating-star-${idx}`} href="#rating">
                            <StarFillIcon />
                          </a>
                        ),
                      )}
                    </div>
                    <small className="subtitle">{pricingStyleFourData.ratingSubtitle}</small>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="pricing-right position-relative">
                    <div className="pricing-offer">
                      {pricingStyleFourData.sections.map((section, sectionIdx) => (
                        <div
                          key={`${section.title}-${sectionIdx}`}
                          className={`single-list${sectionIdx > 0 ? " mt--40" : ""}`}
                        >
                          <h4 className="price-title">{section.title}</h4>
                          <ul className="plan-offer-list">
                            {section.items.map((item) => (
                              <li
                                key={`${section.title}-${item.text}`}
                                className={item.included ? "" : "off"}
                              >
                                <i
                                  className={
                                    item.included
                                      ? "fa-regular fa-check"
                                      : "fa-solid fa-xmark"
                                  }
                                />{" "}
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="pricing-badge">
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingStyleFour;
