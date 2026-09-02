"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function RemainingPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 1500);

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`rbt-remaining-popup  ${show ? "isVisible" : ""}  `}>
      <div className="rbt-product-img">
        <Image
          src="/assets/images/product-single/ear-add-prd/eadd-prd-checkbox-3.webp"
          width={435}
          height={341}
          alt="Product Image"
        />
      </div>
      <div className="rbt-content">
        <button
          className="rbt-close-btn close-remaining-popup"
          onClick={() => setShow(false)}
        >
          <i className="fa-sharp fa-solid fa-xmark" />
        </button>
        <h2 className="rbt-title mb--0">Hurry! Going fast</h2>
        <hr className="rbt-separator mt--12 mb--16" />
        <p className="b3 mb--0 rbt-text-color-gray-500">
          <span className="rbt-text-bold rbt-text-color-gray-700">
            127 shoppers
          </span>
          have added this item to their bag today {`it's`} moving fast.
        </p>
        <button className="rbt-btn rbt-btn-xs d-block w-100 mt--16">
          Add To Bag
        </button>
      </div>
    </div>
  );
}
