"use client";

import { FireIcon } from "../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import ModalTriggerButton from "../action-buttons/ModalTriggerButton";
import { getCartSummary } from "../../lib/cartSummaryUtils";

const MAX_ORDER_SUMMARY_ITEMS = 3;

export default function MiniCheckout() {
  const { cartProducts, totalPrice } = useContextElement();

  const {
    subtotalLabel,
    shippingTotal,
    orderTotal,
    amountToFreeShipping,
    progressPercent,
    hasFreeShipping,
  } = getCartSummary(totalPrice, cartProducts.length);

  return (
    <div className="rbt-sidebar-cart sticky-top">
      {/* Start Single Widget */}
      <div className="rbt-sidebar-widget">
        <div className="rbt-inner">
          <div className="rbt-title-part d-flex mb--12 justify-content-between align-items-center">
            <h5 className="title mb--0 rbt-text-bold">Order summary</h5>
            <div className="rbt-link-hover">
              <Link href="/cart">Edit</Link>
            </div>
          </div>
          <div className="rbt-order-sum-area rbt-order-sum-area-sm align-items-center mb--16">
            <ModalTriggerButton
              openModalName="cartSidebar"
              className="ordered-items-wrapper rbt-order-sidenav-activation d-flex rbt-gap--12 align-items-center w-100 border-0 bg-transparent p-0 text-start"
              aria-label="Open cart"
            >
              {cartProducts.length === 0 ? (
                <p className="rbt-text-color-gray-600 mb--0 b2">
                  Your cart is empty.
                </p>
              ) : (
                <>
                  {cartProducts
                    .slice(0, MAX_ORDER_SUMMARY_ITEMS)
                    .map((product) => (
                      <span
                        key={product.id}
                        className="ordered-item ordered-item-01"
                      >
                        <Image
                          alt={product.title || "Product"}
                          src={
                            product.imgSrc ||
                            "/assets/images/catagory-img/cat-transp-img-07.webp"
                          }
                          width={93}
                          height={93}
                        />
                      </span>
                    ))}
                  {cartProducts.length > MAX_ORDER_SUMMARY_ITEMS && (
                    <span className="ordered-item more-icon ms-auto">
                      <i className="fa-solid fa-chevron-right" />
                    </span>
                  )}
                </>
              )}
            </ModalTriggerButton>
          </div>
          <div className="rbt-cart-subttotal">
            <p>Subtotal ({subtotalLabel})</p>
            <p className="price">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="rbt-cart-subttotal">
            <p>Shipping</p>
            <p className="price">
              {shippingTotal === 0 ? "Free" : `$${shippingTotal.toFixed(2)}`}
            </p>
          </div>
          <hr className="mb--8 mt--8 rbt-bg-color-gray-200" />
          <div className="rbt-cart-subttotal mb--12">
            <p className="subtotal">
              <strong>Total</strong>
            </p>
            <p className="price">${orderTotal.toFixed(2)}</p>
          </div>
          <div className="offer-progress-area">
            <p className="offer-text">
              {hasFreeShipping ? (
                <>
                  You&apos;ve unlocked <strong>Free Shipping</strong>
                </>
              ) : (
                <>
                  Add <strong>${amountToFreeShipping.toFixed(2)}</strong> More
                  To Get <strong className="ml--4">Free Shipping</strong>
                </>
              )}
            </p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Shipping-progress"
              aria-valuenow={Math.round(progressPercent)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="progress-bar"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <div className="rbt-minicart-bottom mt--24">
            <div className="share-btn-grp rbt-link-hover">
              <Link href="/cart" className="share-btn">
                <i className="fa-regular fa-pen mr--4" /> View Cart
              </Link>
              <ModalTriggerButton
                openModalName="socialShareModal"
                className="share-btn"
              >
                <i className="fa-sharp fa-solid fa-link mr--4" /> Share Cart
              </ModalTriggerButton>
            </div>
            <ul className="rbt-cart-brand-list mt--24">
              <li>
                <a href="#!">
                  <Image
                    alt="eCommerce Brand Image"
                    src="/assets/images/payment-brand/image-01.webp"
                    width={812}
                    height={64}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rbt-sidebar-widget rbt-sidebar-widget-sm mt--24">
        <div className="rbt-inner">
          <div className="rbt-quick-info-tag d-flex transparent">
            <FireIcon />
            <p className="rbt-link-hover b1">
              Unlock <strong>256 points</strong> rewards!{" "}
              <ModalTriggerButton
                openModalName="signinModal"
                className="border-0 bg-transparent p-0 text-primary"
              >
                Sign in
              </ModalTriggerButton>{" "}
              to your account.
            </p>
          </div>
        </div>
      </div>
      {/* End Single Widget */}
    </div>
  );
}
