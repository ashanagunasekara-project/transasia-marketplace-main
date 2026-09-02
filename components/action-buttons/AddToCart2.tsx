"use client";

import { useContextElement } from "@/context/Context";
import { useUiElement } from "@/context/uiStore";
import { Product } from "@/types";

interface AddToCartProps {
  parentClass?: string;
  product: Product;
}

export default function AddToCart2({
  parentClass = "rbt-btn rbt-btn-sm has-left-icon flex-basis-100",
  product,
}: AddToCartProps) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const { showCartToaster } = useUiElement();

  const isAdded = isAddedToCartProducts(product.id);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        if (isAdded) return;
        addProductToCart(product);
        showCartToaster();
      }}
      className={parentClass}
    >
      <i className="fa-regular fa-cart-shopping mr--4" />{" "}
      {isAdded ? "Already Added" : "Add To Cart"}
    </button>
  );
}
