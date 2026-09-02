"use client";

import { useState } from "react";

export default function InfoSection2() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`rbt-collapsible-content-inner rbt-has-show-more  ${
        showMore ? "active" : ""
      }`}
    >
      <h4 className="rbt-collapsible-content-title rbt-text-bold rbt-text-color-primary mb--16">
        Ceramic tiles and plumbing from company
      </h4>
      <div className="rbt-collapsible-wrapper rbt-has-show-more-inner-content">
        <div className="rbt-collapsible-block">
          <h5 className="rbt-collapsible-block-title mb--16">
            Like these sweet mornings of spring which I enjoy with my whole
            heart.
          </h5>
          <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream.
          </p>
        </div>
        <div className="rbt-collapsible-block mt--32">
          <h5 className="rbt-collapsible-block-title mb--16">
            A wonderful serenity has taken possession of my entire soul.
          </h5>
          <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
            Authorities in our business will tell in no uncertain terms that
            Unimart is a modern e-commerce platform designed to make online
            shopping simple, secure, and convenient.
          </p>
        </div>
        <div className="rbt-collapsible-block mt--32">
          <h5 className="rbt-collapsible-block-title mb--16">
            Furniture production is a modern form of art
          </h5>
          <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
            You begin with a text, you sculpt information, you chisel away
            what’s not needed, you come to the point, make things clear, add
            value, you’re a content person, you like words. Design is no
            afterthought, far from it, but it comes in a deserved second.
            Unimart helps you launch modern online stores quickly with reusable
            sections, responsive layouts, and prebuilt shop flows for
            categories, product details, cart, and checkout.
          </p>
        </div>
        <div className="rbt-collapsible-block mt--32">
          <h5 className="rbt-collapsible-block-title mb--16">
            Like these sweet mornings of spring which I enjoy with my whole
            heart.
          </h5>
          <p className="rbt-collapsible-block-content b2 rbt-text-color-gray-500">
            When, while the lovely valley teems with vapour around me, and the
            meridian sun strikes the upper surface of the impenetrable foliage
            of my trees, and but a few stray gleams steal into the inner
            sanctuary, I throw myself down among the tall grass by the trickling
            stream.
          </p>
        </div>
      </div>
      <div
        className={`rbt-show-more-btn-area mt--12 justify-content-start  ${
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
  );
}
