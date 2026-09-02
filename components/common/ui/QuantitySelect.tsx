"use client";
export default function QuantitySelect({
  quantity = 1,
  setQuantity = () => {},
  parentClass = "qty-item-btn qty-item-btn-decr",
}: {
  quantity?: number;
  setQuantity?: (value: number) => void;
  parentClass?: string;
}) {
  return (
    <>
      <button
        type="button"
        className={parentClass}
        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
      >
        <i className="fa-solid fa-minus" />
      </button>
      <input
        type="number"
        className="items-qty-input"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (!isNaN(value) && value > 0) {
            setQuantity(value);
          }
        }}
        min={"01"}
      />
      <button
        type="button"
        className="qty-item-btn qty-item-btn-incr"
        onClick={() => setQuantity(quantity + 1)}
      >
        <i className="fa-solid fa-plus" />
      </button>
    </>
  );
}
