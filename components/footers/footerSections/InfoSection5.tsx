"use client";

import { useState } from "react";

export default function InfoSection5() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`rbt-collapsible-content-inner rbt-has-show-more  ${
        showMore ? "active" : ""
      }`}
    >
      <div className="rbt-collapsible-wrapper rbt-has-show-more-inner-content">
        <div className="rbt-collapsible-block">
          <h5 className="rbt-collapsible-block-title mb--16">
            Online store with a wide selection of furniture and decor
          </h5>
          <p className="rbt-collapsible-block-content b3">
            Furniture is an invariable attribute of any room. It is they who
            give it the right atmosphere, making the space cozy and comfortable,
            creating favorable conditions for productive work or helping to
            relax after a hard day. More and more often, customers want to place
            an order in an online store, when you can sit down at the computer
            in your free time, arrange the furniture in the photo and calmly buy
            the furniture you like. The online store has a large catalog of
            furniture: both home and office furniture are available.
          </p>
        </div>
        <div className="rbt-collapsible-block mt--32">
          <h5 className="rbt-collapsible-block-title mb--16">
            Furniture production is a modern form of art
          </h5>
          <p className="rbt-collapsible-block-content b3">
            Furniture manufacturers, as well as manufacturers of other home
            goods, are full of amazing offers: we often come across both
            standard mass-produced products and unique creations – furniture
            from professional craftsmen, which will be appreciated by true
            connoisseurs of beauty. We have selected for you the best models
            from modern craftsmen who managed to ingeniously combine elegance,
            quality and practicality in each product unit. Our assortment
            includes products from proven companies. Who for many years of
            continuous joint work did not give reason to doubt their reliability
            and honesty. All of them guarantee the high quality of their
            products, excellent operational characteristics, attractive
            appearance of the products, a long period of use of the furniture,
            as well as safety.
          </p>
        </div>
        <div className="rbt-collapsible-block mt--32">
          <h5 className="rbt-collapsible-block-title mb--16">
            Online store with a wide selection of furniture and decor
          </h5>
          <p className="rbt-collapsible-block-content b3">
            Furniture is an invariable attribute of any room. It is they who
            give it the right atmosphere, making the space cozy and comfortable,
            creating favorable conditions for productive work or helping to
            relax after a hard day. More and more often, customers want to place
            an order in an online store, when you can sit down at the computer
            in your free time, arrange the furniture in the photo and calmly buy
            the furniture you like. The online store has a large catalog of
            furniture: both home and office furniture are available.
          </p>
        </div>
        <div className="rbt-collapsible-block mt--32">
          <h5 className="rbt-collapsible-block-title mb--16">
            Furniture production is a modern form of art
          </h5>
          <p className="rbt-collapsible-block-content b3">
            Furniture manufacturers, as well as manufacturers of other home
            goods, are full of amazing offers: we often come across both
            standard mass-produced products and unique creations – furniture
            from professional craftsmen, which will be appreciated by true
            connoisseurs of beauty. We have selected for you the best models
            from modern craftsmen who managed to ingeniously combine elegance,
            quality and practicality in each product unit. Our assortment
            includes products from proven companies. Who for many years of
            continuous joint work did not give reason to doubt their reliability
            and honesty. All of them guarantee the high quality of their
            products, excellent operational characteristics, attractive
            appearance of the products, a long period of use of the furniture,
            as well as safety.
          </p>
        </div>
      </div>
      <div
        className={`rbt-show-more-btn-area mt--12  ${showMore ? "active" : ""}`}
      >
        <button
          onClick={() => setShowMore((pre) => !pre)}
          className="rbt-show-more-btn variation-2"
        >
          Show {showMore ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
}
