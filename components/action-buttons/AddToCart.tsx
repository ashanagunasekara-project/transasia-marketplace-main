"use client";

import { useState } from "react";
import { useContextElement } from "@/context/Context";
import { useUiElement } from "@/context/uiStore";
import { Product } from "@/types";

interface AddToCartProps {
  parentClass?: string;
  product: Product;
}

export default function AddToCart({
  parentClass = "rbt-btn rbt-btn-sm has-left-icon rbt-cart-sidenav-activation",
  product,
}: AddToCartProps) {
  const { addProductToCart, quantityInCart } = useContextElement();
  const { openSpecificBsModal } = useUiElement();
  const [isAdding, setIsAdding] = useState(false);

  const inCartQty = quantityInCart(product.id);
  const isMaxReached = inCartQty >= 20;

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isMaxReached && !product.isStockOut) {
      setIsAdding(true);
      await addProductToCart(product, 1);
      setTimeout(() => setIsAdding(false), 300);
    }

    // Immediately open the cart offcanvas drawer
    openSpecificBsModal("cartSidebar");
  };

  return (
    <button
      type="button"
      className={parentClass}
      onClick={handleAddToCart}
      disabled={product.isStockOut}
      title={
        product.isStockOut
          ? "Out of Stock"
          : isMaxReached
          ? "Maximum 20 items in cart - Click to view cart"
          : inCartQty > 0
          ? `In Cart: ${inCartQty} - Click to add another`
          : "Add To Cart"
      }
    >
      <i
        className={
          isAdding
            ? "fa-solid fa-spinner fa-spin mr--4"
            : inCartQty > 0
            ? "fa-solid fa-cart-shopping mr--4"
            : "fa-solid fa-cart-shopping mr--4"
        }
      />
      {product.isStockOut
        ? "Out of Stock"
        : isAdding
        ? "Adding..."
        : inCartQty > 0
        ? `Add To Cart (${inCartQty})`
        : "Add To Cart"}
    </button>
  );
}

