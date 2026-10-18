import { formatCurrency } from "./price";

export const FREE_SHIPPING_THRESHOLD = 15000;
export const DEFAULT_SHIPPING_COST = 450;

export function getCartSummary(
  totalPrice: number,
  itemCount: number,
  shippingCost = DEFAULT_SHIPPING_COST,
  freeShippingThreshold = FREE_SHIPPING_THRESHOLD
) {
  const clampedTotal = Math.max(0, totalPrice);
  const shippingTotal =
    clampedTotal >= freeShippingThreshold || clampedTotal === 0 ? 0 : shippingCost;
  const orderTotal = clampedTotal + shippingTotal;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - clampedTotal);
  const progressPercent = Math.min(
    (clampedTotal / freeShippingThreshold) * 100,
    100
  );
  const subtotalLabel = itemCount === 1 ? "1 item" : `${itemCount} items`;

  return {
    subtotalLabel,
    shippingTotal,
    orderTotal,
    amountToFreeShipping,
    progressPercent,
    hasFreeShipping: amountToFreeShipping === 0,
    formattedSubtotal: formatCurrency(clampedTotal),
    formattedShipping: shippingTotal === 0 ? "Free" : formatCurrency(shippingTotal),
    formattedTotal: formatCurrency(orderTotal),
    formattedAmountToFreeShipping: formatCurrency(amountToFreeShipping),
  };
}
