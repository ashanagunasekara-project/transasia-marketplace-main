"use client";

import { pricingStyleTwoPlans } from "@/data/pricing";
import { useState } from "react";

function PricingStyleTwo() {
  const [isYearlyPlan, setIsYearlyPlan] = useState(false);

  return (
    <div
      id="rbt-pricing-block-02"
      className="rbt-pricing-area rbt-bg-color-gray-light rbt-section-gap"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title d-flex justify-content-between align-items-center p-0 mb--40 border-0">
              <h4 className="rbt-title rbt-scroll-trigger fade_in animation-order-1">
                <span className="rbt-bold--text">Standard Pricing</span>
              </h4>
              <div className="pricing-billing-duration text-start text-md-end">
                <ul>
                  <li className="nav-item">
                    <button
                      className={`nav-link yearly-plan-btn${
                        isYearlyPlan ? " active" : ""
                      }`}
                      type="button"
                      onClick={() => setIsYearlyPlan(true)}
                    >
                      Yearly Plan
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link monthly-plan-btn${
                        isYearlyPlan ? "" : " active"
                      }`}
                      type="button"
                      onClick={() => setIsYearlyPlan(false)}
                    >
                      Monthly Plan
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 g-md-5">
          {pricingStyleTwoPlans.map((plan, idx) => (
            <div key={`${plan.title}-${idx}`} className="col-xl-4 col-lg-6 col-md-6 col-12">
              <div className={`pricing-table style-2${plan.isActive ? " active" : ""}`}>
                <div className="pricing-header">
                  {plan.pricingBadge ? (
                    <div className="pricing-badge">
                      <span>{plan.pricingBadge}</span>
                    </div>
                  ) : null}
                  <h3 className="title">{plan.title}</h3>
                  <span className="rbt-static-badge mb--32">{plan.badgeText}</span>
                  <div className="price-wrap">
                    <div
                      className="yearly-pricing"
                      style={{ display: isYearlyPlan ? "block" : "none" }}
                    >
                      <span className="amount">${plan.yearlyPrice.toFixed(2)}</span>
                      <span className="duration">/yearly</span>
                    </div>
                    <div
                      className="monthly-pricing"
                      style={{ display: isYearlyPlan ? "none" : "block" }}
                    >
                      <span className="amount">${plan.monthlyPrice.toFixed(2)}</span>
                      <span className="duration">/monthly</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-btn">
                  <a
                    href="#"
                    className="rbt-btn exclusive-btn icon-reverse-left text-center w-100"
                    target="_blank"
                  >
                    <span className="icon-left">
                      <i className="fa-sharp fa-regular fa-arrow-right mr--4" />
                    </span>
                    <span>Join Course Plan</span>
                    <span className="icon-right">
                      <i className="fa-regular fa-arrow-right ml--4" />
                    </span>
                  </a>
                </div>
                <div className="pricing-body">
                  <ul className="list-item">
                    {plan.features.map((feature) => (
                      <li
                        key={`${plan.title}-${feature.text}`}
                        className={feature.included ? "" : "off"}
                      >
                        <i
                          className={
                            feature.included
                              ? "fa-regular fa-check"
                              : "fa-solid fa-xmark"
                          }
                        />{" "}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingStyleTwo;
