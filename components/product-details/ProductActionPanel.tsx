"use client";

import QuantitySelect from "../common/ui/QuantitySelect";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import CompareQuickLinkTrigger from "@/components/action-buttons/CompareQuickLinkTrigger";
import WishlistQuickLinkTrigger from "@/components/action-buttons/WishlistQuickLinkTrigger";
import { useCartQuantityAction } from "@/hooks/useCartQuantityAction";

import { Product } from "@/types";
export default function ProductActionPanel({ product }: { product: Product }) {
  const { quantity, setQuantity, buttonLabel, isDisabled, applyCartAction } =
    useCartQuantityAction(product);
  return (
    <>
      {" "}
      <div className="product-btn-grp">
        <div className="rbt-qty-area">
          <QuantitySelect quantity={quantity} setQuantity={setQuantity} />
        </div>
        <ModalTriggerButton
          openModalName="popup-cartModal"
          className="rbt-btn rbt-btn-border has-left-icon d-block text-center"
          disabled={isDisabled}
          onClick={(e) => {
            e.preventDefault();
            applyCartAction();
          }}
          suppressHydrationWarning
        >
          <i className="fa-regular fa-cart-shopping mr--4" />
          {buttonLabel}
        </ModalTriggerButton>
      </div>
      <div className="prd-btn-grp">
        <a className="rbt-btn d-block text-center" href="#">
          Buy Now
        </a>
      </div>
      <div className="rbt-quick-link-grp ">
        <CompareQuickLinkTrigger product={product} />
        <WishlistQuickLinkTrigger product={product} />
        <ModalTriggerButton
          openModalName="socialShareModal"
          className="rbt-quick-link"
          type="button"
        >
          <i className="fa-sharp fa-regular fa-share-nodes" />
          Share
        </ModalTriggerButton>
      </div>
    </>
  );
}
