"use client";

import { useState } from "react";

const options = [
  {
    id: 1,
    price: 2.99,
    range: "05 - 09 pieces",
    discountText: "",
    minQty: 5,
    maxQty: 9,
  },
  {
    id: 2,
    price: 2.84,
    range: "10 - 19 pieces",
    discountText: "(5% off)",
    minQty: 10,
    maxQty: 19,
  },
  {
    id: 3,
    price: 2.72,
    range: "20 - 50 pieces",
    discountText: "(7% off)",
    minQty: 20,
    maxQty: 50,
  },
];

export default function BuyMoreOption1() {
  const [selectedOptionId, setSelectedOptionId] = useState(options[1].id); // default 10-19
  const selectedOption = options.find((opt) => opt.id === selectedOptionId);

  const quantity = selectedOption ? selectedOption.minQty : 0;
  const price = selectedOption ? selectedOption.price : 0;
  const total = (quantity * price).toFixed(2);

  return (
    <>
      <div className="rbt-info-wrapper d-block mt--24">
        <h5 className="mb--16">Buy more save more!</h5>
        <div className="rbt-save-more-box-list d-flex gap-3 flex-wrap">
          {options.map((opt) => (
            <div className="rbt-single-box flex-fill" key={opt.id}>
              <input
                type="radio"
                name="save_box"
                id={`save_box-${opt.id}`}
                checked={selectedOptionId === opt.id}
                onChange={() => setSelectedOptionId(opt.id)}
              />
              <label htmlFor={`save_box-${opt.id}`} className="rbt-label">
                <span className="pricing-part mt--0">
                  <span className="price-text">${opt.price.toFixed(2)}</span>
                  {opt.discountText && (
                    <span className="rbt-off-amount"> {opt.discountText}</span>
                  )}
                </span>
                <span className="rbt-product-quantity">{opt.range}</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="rbt-info-wrapper d-block mt--24">
        <div className="d-flex align-items-center justify-content-between">
          <p className="b1 mb--0 rbt-text-color-gray-700">
            Item Per Price ({quantity} Items)
          </p>
          <div className="pricing-part mt--0">
            <span className="price-text">${price.toFixed(2)}</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mt--8">
          <p className="b1 mb--0 rbt-text-color-heading rbt-text-bold">Total</p>
          <div className="pricing-part mt--0">
            <span className="price-text rbt-text-color-primary">${total}</span>
          </div>
        </div>
      </div>
    </>
  );
}
