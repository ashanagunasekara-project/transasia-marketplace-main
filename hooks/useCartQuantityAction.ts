"use client";

import { useState } from "react";
import { useContextElement } from "@/context/Context";
import { Product } from "@/types";

export function useCartQuantityAction(product: Product) {
  const [quantityDraft, setQuantityDraft] = useState<number | null>(null);
  const { addProductToCart, isAddedToCartProducts, updateQuantity, quantityInCart } =
    useContextElement();

  const isInCart = isAddedToCartProducts(product.id);
  const cartQty = quantityInCart(product.id);
  const quantity = quantityDraft ?? (cartQty || 1);
  const isMaxReached = cartQty >= 20;

  const buttonLabel = isInCart
    ? isMaxReached
      ? "In Cart (Max 20)"
      : quantityDraft !== null && quantityDraft !== cartQty
      ? "Update Cart"
      : `Add To Cart (${cartQty})`
    : "Add To Cart";

  const applyCartAction = () => {
    if (product.isStockOut) return;

    if (isInCart) {
      if (quantityDraft !== null && quantityDraft !== cartQty) {
        updateQuantity(product.id, Math.min(20, Math.max(1, quantityDraft)));
      } else if (!isMaxReached) {
        updateQuantity(product.id, Math.min(20, cartQty + 1));
      }
    } else {
      addProductToCart(product, Math.min(20, Math.max(1, quantity)));
    }

    setQuantityDraft(null);
  };

  return {
    quantity,
    setQuantity: setQuantityDraft,
    buttonLabel,
    isDisabled: product.isStockOut,
    applyCartAction,
  };
}

