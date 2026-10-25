"use client";
import { FireOrangeIcon } from "../svg-icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { electronicsCardData } from "@/data/products/electronics";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Tooltip from "@/components/common/ui/Tooltip";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { getCartSummary } from "@/lib/cartSummaryUtils";
import { formatCurrency } from "@/lib/price";
import { getStackedModalZIndex } from "@/lib/modalStack";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";

import CartNotePopup from "./cart/CartNotePopup";
import CartShippingPopup from "./cart/CartShippingPopup";
import CartCouponPopup from "./cart/CartCouponPopup";

export default function CartModal() {
  const [openTool, setOpenTool] = useState(-1);
  const [selectedShippingCity, setSelectedShippingCity] =
    useState("Select your City");
  const { activeBsModal, isAnimatedOpen, close } =
    useManagedModalPanel("cartSidebar");

  const {
    cartProducts,
    totalPrice,
    setCartProducts,
    setActiveCartProduct,
    updateQuantity,
    addProductToCart,
    removeProductFromCart,
    isAddedToCartProducts,
    mounted,
  } = useContextElement();

  const removeItem = (id: string | number) => {
    removeProductFromCart(id);
  };
  const {
    subtotalLabel,
    shippingTotal,
    orderTotal,
    amountToFreeShipping,
    progressPercent,
    hasFreeShipping,
    formattedSubtotal,
    formattedShipping,
    formattedTotal,
    formattedAmountToFreeShipping,
  } = getCartSummary(totalPrice, cartProducts.length);

  return (
    <>
      <div
        className={`rbt-cart-side-menu rbt-sidebar-cart${isAnimatedOpen ? " side-menu-active" : ""}${openTool !== -1 ? " open-popup-overlay" : ""}`}
        onClick={() => setOpenTool(-1)}
        style={{
          zIndex: getStackedModalZIndex(activeBsModal, "cartSidebar"),
        }}
      >
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="rbt-cart-header">
              <div className="title-section">
                <h6 className="title mb--0">
                  <i className="fa-solid fa-cart-shopping mr--12" />{" "}
                  Your cart
                </h6>
              </div>
              <div className="rbt-btn-close" id="btn_sideNavClose">
                <button
                  className="minicart-close-button rbt-round-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    close();
                  }}
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
            <nav className="side-nav w-100">
              <ul className="rbt-minicart-wrapper">
                {mounted && cartProducts.length === 0 ? (
                  <li className="minicart-item">
                    <div className="product-content text-center w-100 py-4">
                      <h5 className="mb--8">Your cart is empty</h5>
                      <p className="b3 mb--0 rbt-text-color-gray-500">
                        Add products to see them here.
                      </p>
                      <div className="mt--16">
                        <Link
                          href="/shop-by-categories"
                          className="rbt-btn rbt-btn-sm"
                          onClick={close}
                        >
                          Browse Products
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  mounted &&
                  cartProducts.map((product, i) => (
                    <li key={i} className="minicart-item">
                      <div className="thumbnail">
                        <Link href={`/product-single-default/${product.id}`} onClick={close}>
                          <Image
                            alt="Product Image"
                            src={product.imgSrc || ""}
                            width={1246}
                            height={976}
                          />
                        </Link>
                      </div>
                      <div className="product-content">
                        <h6 className="title">
                          <Link href={`/product-single-default/${product.id}`} onClick={close}>
                            {product.title}
                          </Link>
                        </h6>
                        <span className="quantity">
                          {product.quantity}x{" "}
                          <span className="price">
                            {formatCurrency(product.price)}
                          </span>
                        </span>
                        {product.isWholesalePricingApplied && (
                          <span className="badge bg-success text-white px-2 py-0 mt-1 d-inline-block" style={{ fontSize: "10px" }}>
                            Wholesale
                          </span>
                        )}
                        <div className="bottom-part">
                          <div className="rbt-qty-area">
                            <button
                              className="qty-item-btn qty-item-btn-decr"
                              disabled={product.quantity <= 1}
                              onClick={() => {
                                if (product.quantity > 1) {
                                  updateQuantity(product.id, product.quantity - 1);
                                }
                              }}
                              aria-label="Decrease quantity"
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="items-qty-input"
                              onChange={(e) => {
                                const val = parseInt(e.target.value, 10);
                                if (!isNaN(val) && val >= 1 && val <= 20) {
                                  updateQuantity(product.id, val);
                                }
                              }}
                              min={1}
                              max={20}
                              value={product.quantity}
                            />
                            <button
                              className="qty-item-btn qty-item-btn-incr"
                              disabled={product.quantity >= 20}
                              onClick={() => {
                                if (product.quantity < 20) {
                                  updateQuantity(product.id, product.quantity + 1);
                                }
                              }}
                              aria-label="Increase quantity"
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                          <ModalTriggerButton
                            openModalName="quickviewEditCartModal"
                            className="edit-btn"
                            onClick={() => setActiveCartProduct(product)}
                          >
                            <i className="fa-solid fa-pen-to-square mr--4" /> Edit
                          </ModalTriggerButton>
                        </div>
                      </div>
                      <div className="close-btn">
                        <button
                          className="rbt-round-btn"
                          onClick={() => removeItem(product.id)}
                          aria-label="Remove item"
                        >
                          <i className="fa-solid fa-xmark" />
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
              <div
                className="minicart-quick-access-area mt--24"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="single-quick-access rbt-note-btn"
                  onClick={() => setOpenTool((pre) => (pre == 1 ? -1 : 1))}
                >
                  <span className="icon">
                    <i className="fa-solid fa-pen" />
                  </span>
                  <span className="text">Note</span>
                </button>
                <span className="hr-sepator" />
                <button
                  type="button"
                  className="single-quick-access rbt-shipping-btn"
                  onClick={() => setOpenTool((pre) => (pre == 2 ? -1 : 2))}
                >
                  <span className="icon">
                    <i className="fa-solid fa-truck-fast" />
                  </span>
                  <span className="text">Shipping</span>
                </button>
                {/* Temporarily hidden coupon button & function (Figure 02) */}
                {/* <span className="hr-sepator" />
                <button
                  type="button"
                  className="single-quick-access rbt-coupon-btn"
                  onClick={() => setOpenTool((pre) => (pre == 3 ? -1 : 3))}
                >
                  <span className="icon">
                    <i className="fa-solid fa-ticket" />
                  </span>
                  <span className="text">Coupon</span>
                </button> */}
              </div>


              {/* <div className="minicart-inc-items-area mt--12">
                <h6 className="title positin-top">You May Also Like</h6>
                <div className="bottom-area">
                  <Swiper
                    {...{
                      grabCursor: true,
                      spaceBetween: 16,
                      pagination: {
                        el: ".rbt-swiper-pagination shop-cart-pagination",
                        clickable: true,
                      },
                    }}
                    modules={[Pagination]}
                    className="swiper rbt-dot-top-right inc-item-swiper-activation rbt-minicart-wrapper overflow-hidden"
                  >
                    {electronicsCardData.slice(0, 2).map((product, i) => {
                      const isAddedItem = isAddedToCartProducts(product.id);
                      return (
                        <SwiperSlide key={i} className="swiper-slide">
                          <div className="minicart-item">
                            <div className="thumbnail">
                              <Link
                                href={`/product-single-default/${product.id}`}
                              >
                                <Image
                                  alt="Product Image"
                                  src={product.imgSrc}
                                  width={1246}
                                  height={976}
                                />
                              </Link>
                            </div>
                            <div className="product-content">
                              <h6 className="title">
                                <Link
                                  href={`/product-single-default/${product.id}`}
                                >
                                  {product.title}
                                </Link>
                              </h6>
                              <span className="quantity">
                                <span className="price">
                                  ${product.price.toFixed(2)}
                                </span>
                              </span>
                            </div>
                            <Tooltip
                              content={
                                isAddedItem ? "Already in Cart" : "Add to Cart"
                              }
                              placement="left"
                            >
                              <ModalTriggerButton
                                openModalName="addedCartModal"
                                className={`add-item-btn${isAddedItem ? " disabled" : ""}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (isAddedItem) return;
                                  addProductToCart(product);
                                }}
                              >
                                <i
                                  className={
                                    isAddedItem
                                      ? "fa-regular fa-check"
                                      : "fa-regular fa-cart-plus"
                                  }
                                />
                              </ModalTriggerButton>
                            </Tooltip>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                    <div className="rbt-swiper-pagination shop-cart-pagination" />
                  </Swiper>
                </div>
              </div> */}
            </nav>
          </div>
          <div className="rbt-minicart-footer">
            <hr className="mb--0 mt--16" />
            <div className="rbt-cart-subttotal">
              <p>Subtotal ({subtotalLabel})</p>
              <p className="price">{formattedSubtotal}</p>
            </div>
            <div className="rbt-cart-subttotal">
              <p>Shipping</p>
              <p className="price">{formattedShipping}</p>
            </div>
            <hr className="mb--0" />
            <div className="rbt-cart-subttotal">
              <p>
                <strong>Total</strong>
              </p>
              <p className="price">{formattedTotal}</p>
            </div>
            {/* Temporarily hidden free shipping progress text and function (Figure 03) */}
            {/* <div className="offer-progress-area">
              <p className="offer-text">
                {hasFreeShipping ? (
                  <>
                    You&apos;ve unlocked <strong>Free Shipping</strong>
                  </>
                ) : (
                  <>
                    Add <strong>{formattedAmountToFreeShipping}</strong> More
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
            </div> */}
            <div className="rbt-minicart-bottom mt--24">
              <div className="checkout-btn mt--20">
                {cartProducts.length > 0 ? (
                  <Link
                    className="rbt-btn w-100 text-center"
                    href="/checkout-delivery-step-one"
                    onClick={close}
                  >
                    <span className="btn-text">Checkout</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="rbt-btn w-100 text-center"
                    style={{ opacity: 0.6, cursor: "not-allowed" }}
                    disabled
                  >
                    <span className="btn-text">Checkout</span>
                  </button>
                )}
              </div>
              <div className="share-btn-grp rbt-link-hover">
                <Link href="/cart" className="share-btn" onClick={close}>
                  <i className="fa-solid fa-cart-shopping mr--4" /> View Cart
                </Link>
                <ModalTriggerButton
                  openModalName="socialShareModal"
                  className="share-btn"
                >
                  <i className="fa-solid fa-link mr--4" /> Share Cart
                </ModalTriggerButton>
              </div>
            </div>

          </div>
        </div>
        <button
          type="button"
          className="rbt-close-inner-popup rbt-popup-close-btn"
          aria-label="Close cart modal"
          onClick={close}
        />

        <CartNotePopup
          isOpen={openTool === 1}
          onClose={() => setOpenTool(-1)}
        />

        <CartShippingPopup
          isOpen={openTool === 2}
          onClose={() => setOpenTool(-1)}
          selectedCity={selectedShippingCity}
          onCityChange={setSelectedShippingCity}
        />

        {/* Temporarily hidden coupon popup (Figure 02) */}
        {/* <CartCouponPopup
          isOpen={openTool === 3}
          onClose={() => setOpenTool(-1)}
        /> */}

      </div>
    </>
  );
}
