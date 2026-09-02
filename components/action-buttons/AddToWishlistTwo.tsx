"use client";

import { useContextElement, useUiElement } from "@/context/Context";
import type { Product } from "@/types";
import Tooltip from "@/components/common/ui/Tooltip";

interface AddToWishlistProps {
  product: Product;
  tooltipDirection?: "top" | "right" | "bottom" | "left";
  parentClass?: string;
}

export default function AddToWishlistTwo({
  product,
  tooltipDirection = "left",
  parentClass = "rbt-wishlist-btn rbt-round-btn bg-light-one rbt-top-right--position tooltips",
}: AddToWishlistProps) {
  const { addToWishlist, isAddedtoWishlist } = useContextElement();
  const { showToaster } = useUiElement();

  const isWishlisted = isAddedtoWishlist(product.id);

  const tooltipText = isWishlisted ? "Remove Wishlist" : "Add To Wishlist";
  const iconClass = isWishlisted
    ? "fa-sharp fa-solid fa-heart"
    : "fa-regular fa-heart";

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!product.id) return;
    addToWishlist(product);
    const message = isWishlisted
      ? "Removed from Wishlist"
      : "Added to Wishlist";
    showToaster(message);
  };

  return (
    <Tooltip content={tooltipText} placement={tooltipDirection}>
      <button
        className={`${parentClass} ${isWishlisted ? "added-wishlist" : ""}`}
        type="button"
        aria-label={tooltipText}
        onClick={handleClick}
      >
        <i className={iconClass} />
      </button>
    </Tooltip>
  );
}
