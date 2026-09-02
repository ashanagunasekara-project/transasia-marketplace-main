"use client";

import { useState } from "react";

export default function InfoSection6() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`rbt-collapsible-content-inner rbt-has-show-more ${
        showMore ? "active" : ""
      }`}
    >
      <div className="rbt-collapsible-wrapper rbt-has-show-more-inner-content rbt-has-show-more-inner-content-sm">
        <div className="row row--12 mt_dec--24">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-collapsible-block">
              <h5 className="rbt-collapsible-block-title mb--8">
                Experience Online Shopping
              </h5>
              <p className="rbt-collapsible-block-content b3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-collapsible-block">
              <h5 className="rbt-collapsible-block-title mb--8">
                Best Selling Products
              </h5>
              <p className="rbt-collapsible-block-content b3">
                Huawei P40 Pro, Huawei Mate Pad T10, Huawei Mate Pad T, Huawei
                Y6p, Huawei Y7p, Huawei Y8p, OnePlus Nord CE, OnePlus Nord 2,
                OnePlus 8, Apple Airpods Pro, Samsung A22, Samsung A03s, Oppo
                A31, Motorola Edge 20 Fusion, Samsung Galaxy S21 FE, Samsung
                Galaxy S8 Plus, Nokia 6, Epson L3110 Printer, realme C31,
                Samsung Galaxy
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-collapsible-block">
              <h5 className="rbt-collapsible-block-title mb--8">
                Top Categories &amp; Brands
              </h5>
              <p className="rbt-collapsible-block-content b3">
                BTS Mask, BTS Bag, BTS Notebook, Autocad, Beard Growth Oil, BTS
                Army Bomb, Mira Fan, 24K Gold Soap, Agar Agar Powder, Vintage T9
                Trimmer, Jolochip, IPS Machine, GFC Stand Fan, BMW Umbrella, TWS
                F9, K8 Microphone, Colmi P28 Plus, realme C35 Back Cover,
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 mt--24">
            <div className="rbt-collapsible-block">
              <h5 className="rbt-collapsible-block-title mb--8">Trending</h5>
              <p className="rbt-collapsible-block-content b3">
                Night Cream For Women, Eye Brush Set, Soap Dispenser,
                Highlighter Palette, Black Head Remover, Harbal Hair Oil,
                Waterproof Eyeliner, Hair Fall Control Shampoo, Pad For Women,
                Lip Oil, Aloe Vera Gel, Perfume For Women, Onion Oil For Hair,
                Matte Lipstick Set, Body Mist For Women, Hair Dryer For Women,
                Skin
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`rbt-show-more-btn-area mt--12  ${showMore ? "active" : ""}`}
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
