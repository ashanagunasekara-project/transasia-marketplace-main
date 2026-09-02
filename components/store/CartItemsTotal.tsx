"use client";
import { useContextElement } from "@/context/Context";

export default function CartItemsTotal() {
  const { totalPrice } = useContextElement();
  return <>{totalPrice.toFixed(2)}</>;
}
