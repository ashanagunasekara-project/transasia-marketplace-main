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
  const isSameAsCart = isInCart && quantity === cartQty;

  const buttonLabel = isInCart
    ? isSameAsCart
      ? "Already Added"
      : "Update Cart"
    : "Add To Cart";

  const applyCartAction = () => {
    if (isSameAsCart) return;

    if (isInCart) {
      updateQuantity(product.id, quantity);
    } else {
      addProductToCart(product, quantity);
    }

    setQuantityDraft(null);
  };

  return {
    quantity,
    setQuantity: setQuantityDraft,
    buttonLabel,
    isDisabled: isSameAsCart,
    applyCartAction,
  };
}
