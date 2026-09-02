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
    isAddedToCartProducts,
    mounted,
  } = useContextElement();

  const removeItem = (id: string | number) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.id != id)]);
  };
  const {
    subtotalLabel,
    shippingTotal,
    orderTotal,
    amountToFreeShipping,
    progressPercent,
    hasFreeShipping,
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
                  <i className="fa-sharp fa-regular fa-cart-shopping mr--12" />{" "}
                  Your cart
                </h6>
              </div>
              <div className="rbt-quick-info-tag d-flex mt--16 rbt-flash-animation">
                <FireOrangeIcon />
                <p>
                  Limited Item,{" "}
                  <strong>
                    checkout within{" "}
                    <span className="rbt-countdown-cart">10m 00s</span>
                  </strong>
                </p>
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
                        <Link href={`/product-single-default/${product.id}`}>
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
                          <Link href={`/product-single-default/${product.id}`}>
                            {product.title}
                          </Link>
                        </h6>
                        <span className="quantity">
                          {product.quantity}x{" "}
                          <span className="price">
                            ${product.price.toFixed(2)}
                          </span>
                        </span>
                        <div className="bottom-part">
                          <div className="rbt-qty-area">
                            <button
                              className="qty-item-btn qty-item-btn-decr"
                              onClick={() =>
                                updateQuantity(product.id, product.quantity - 1)
                              }
                            >
                              <i className="fa-solid fa-minus" />
                            </button>
                            <input
                              type="number"
                              className="items-qty-input"
                              onChange={(e) =>
                                updateQuantity(
                                  product.id,
                                  Number(e.target.value),
                                )
                              }
                              min={1}
                              value={product.quantity}
                            />
                            <button
                              className="qty-item-btn qty-item-btn-incr"
                              onClick={() =>
                                updateQuantity(product.id, product.quantity + 1)
                              }
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </div>
                          <ModalTriggerButton
                            openModalName="quickviewEditCartModal"
                            className="edit-btn"
                            onClick={() => setActiveCartProduct(product)}
                          >
                            <i className="fa-regular fa-pen" /> Edit
                          </ModalTriggerButton>
                        </div>
                      </div>
                      <div className="close-btn">
                        <button
                          className="rbt-round-btn"
                          onClick={() => removeItem(product.id)}
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
                    <i className="fa-regular fa-pen" />
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
                    <i className="fa-regular fa-truck-fast" />
                  </span>
                  <span className="text">Shipping</span>
                </button>
                <span className="hr-sepator" />
                <button
                  type="button"
                  className="single-quick-access rbt-coupon-btn"
                  onClick={() => setOpenTool((pre) => (pre == 3 ? -1 : 3))}
                >
                  <span className="icon">
                    <i className="fa-regular fa-ticket" />
                  </span>
                  <span className="text">Coupon</span>
                </button>
              </div>
              <div className="minicart-inc-items-area mt--12">
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
              </div>
            </nav>
          </div>
          <div className="rbt-minicart-footer">
            <hr className="mb--0 mt--16" />
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
            <hr className="mb--0" />
            <div className="rbt-cart-subttotal">
              <p>
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
              <div className="checkout-btn mt--20">
                <Link
                  className="rbt-btn w-100 text-center"
                  href="/checkout-delivery-step-one"
                >
                  <span className="btn-text">Checkout</span>
                </Link>
              </div>
              <div className="share-btn-grp rbt-link-hover">
                <Link href={`/cart`} className="share-btn">
                  <i className="fa-regular fa-pen mr--4" /> View Cart
                </Link>
                <ModalTriggerButton
                  openModalName="socialShareModal"
                  className="share-btn"
                >
                  <i className="fa-sharp fa-solid fa-link mr--4" /> Share Cart
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

        <CartCouponPopup
          isOpen={openTool === 3}
          onClose={() => setOpenTool(-1)}
        />
      </div>
    </>
  );
}
