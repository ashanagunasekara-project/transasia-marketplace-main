"use client";

import { useState } from "react";

export default function InfoSection() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="rbt-component-area rbt-collapsible-content-section rbt-section-gap2 rbt-bg-color-white pb--40">
      <div className="container">
        <div className="row row--12">
          <div className="col-md-12">
            <div
              className={`rbt-collapsible-content-inner rbt-has-show-more ${
                showMore ? "active" : ""
              }`}
            >
              <h4 className="rbt-collapsible-content-title rbt-text-bold rbt-text-color-primary mb--16">
                Ceramic tiles and plumbing from company
              </h4>
              <div className="rbt-collapsible-wrapper rbt-has-show-more-inner-content">
                <div className="rbt-collapsible-block">
                  <h5 className="rbt-collapsible-block-title mb--16">
                    Like these sweet mornings of spring which I enjoy with my
                    whole heart.
                  </h5>
                  <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
                    When, while the lovely valley teems with vapour around me,
                    and the meridian sun strikes the upper surface of the
                    impenetrable foliage of my trees, and but a few stray gleams
                    steal into the inner sanctuary, I throw myself down among
                    the tall grass by the trickling stream.
                  </p>
                </div>
                <div className="rbt-collapsible-block mt--32">
                  <h5 className="rbt-collapsible-block-title mb--16">
                    A wonderful serenity has taken possession of my entire soul.
                  </h5>
                  <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
                    Unimart is a modern e-commerce template built for fast
                    launches and scalable storefronts. You get reusable UI
                    sections, conversion-focused product pages, and responsive
                    layouts that help teams ship polished shopping experiences
                    across desktop and mobile.
                  </p>
                </div>
                <div className="rbt-collapsible-block mt--32">
                  <h5 className="rbt-collapsible-block-title mb--16">
                    Furniture production is a modern form of art
                  </h5>
                  <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
                    Our goal is simple: help merchants and product teams launch
                    faster with a flexible, production-ready front end. From
                    home pages to checkout flows, every block is designed to be
                    easy to customize, performance-focused, and built to support
                    long-term growth.
                  </p>
                </div>
                <div className="rbt-collapsible-block mt--32">
                  <h5 className="rbt-collapsible-block-title mb--16">
                    Like these sweet mornings of spring which I enjoy with my
                    whole heart.
                  </h5>
                  <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
                    When, while the lovely valley teems with vapour around me,
                    and the meridian sun strikes the upper surface of the
                    impenetrable foliage of my trees, and but a few stray gleams
                    steal into the inner sanctuary, I throw myself down among
                    the tall grass by the trickling stream.
                  </p>
                </div>
              </div>
              <div
                className={`rbt-show-more-btn-area justify-content-start  ${
                  showMore ? "active" : ""
                }`}
              >
                <button
                  onClick={() => setShowMore((pre) => !pre)}
                  className="rbt-show-more-btn rbt-show-more-btn-naked"
                >
                  Show {showMore ? "Less" : "More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
