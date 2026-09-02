"use client";
import { useContextElement } from "@/context/Context";

export default function CartItemsLength() {
  const { cartProducts } = useContextElement();
  return <>{cartProducts.length}</>;
}
