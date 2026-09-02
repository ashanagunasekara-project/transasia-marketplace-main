export const FREE_SHIPPING_THRESHOLD = 250;
export const SHIPPING_COST = 10;

export function getCartSummary(totalPrice: number, itemCount: number) {
  const clampedTotal = Math.max(0, totalPrice);
  const shippingTotal =
    clampedTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const orderTotal = clampedTotal + shippingTotal;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - clampedTotal);
  const progressPercent = Math.min(
    (clampedTotal / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );
  const subtotalLabel = itemCount === 1 ? "1 item" : `${itemCount} items`;

  return {
    subtotalLabel,
    shippingTotal,
    orderTotal,
    amountToFreeShipping,
    progressPercent,
    hasFreeShipping: amountToFreeShipping === 0,
  };
}
