"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FireIcon } from "../svg-icons";
import { useContextElement } from "@/context/Context";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import Tooltip from "@/components/common/ui/Tooltip";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { getCartSummary } from "../../lib/cartSummaryUtils";
import { formatCurrency } from "../../lib/price";
import {
  fetchDistricts,
  fetchCities,
  type LocationDistrict,
  type LocationCity,
} from "../../lib/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

interface DeliveryMethodOption {
  id: string;
  name: string;
  cost: number;
  description: string;
}

const DELIVERY_OPTIONS: DeliveryMethodOption[] = [
  {
    id: "DOMEX_COURIER",
    name: "Domex Courier",
    cost: 450,
    description: "Standard delivery across Sri Lanka (2-3 working days)",
  },
  // Temporarily hidden PickMe Flash Express (Figure 04b)
  // {
  //   id: "PICKME_FLASH",
  //   name: "PickMe Flash Express",
  //   cost: 650,
  //   description: "Same-day express delivery within Western Province",
  // },
  {
    id: "STORE_PICKUP_COLOMBO",
    name: "Store Pickup - Colombo Head Office",
    cost: 0,
    description: "Collect directly at TransAsia Colombo (Free)",
  },
  {
    id: "STORE_PICKUP_KURUNEGALA",
    name: "Store Pickup - Kurunegala Branch",
    cost: 0,
    description: "Collect directly at TransAsia Kurunegala (Free)",
  },
];


export default function Cart() {
  const router = useRouter();
  const {
    cartProducts,
    totalPrice,
    setCartProducts,
    updateQuantity,
    removeProductFromCart,
    clearCart,
    validateCart,
    cartError,
    clearCartError,
  } = useContextElement();

  // Sri Lanka locations
  const [districts, setDistricts] = useState<LocationDistrict[]>([]);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
  const [cities, setCities] = useState<LocationCity[]>([]);
  const [selectedCityId, setSelectedCityId] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");

  // Delivery method selection
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState<string>("DOMEX_COURIER");

  // Validation & Checkout UI states
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [validationIssues, setValidationIssues] = useState<string[]>([]);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  // Load Sri Lanka Districts
  useEffect(() => {
    let mounted = true;
    fetchDistricts().then((data) => {
      if (mounted && data.length > 0) {
        setDistricts(data);
        setSelectedDistrictId(data[0].id);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  // Load Cities when District changes
  useEffect(() => {
    if (!selectedDistrictId) return;
    let mounted = true;
    fetchCities(selectedDistrictId).then((data) => {
      if (mounted) {
        setCities(data);
        if (data.length > 0) {
          setSelectedCityId(data[0].id);
          setPostalCode(data[0].postalCode || "");
        } else {
          setSelectedCityId("");
          setPostalCode("");
        }
      }
    });
    return () => {
      mounted = false;
    };
  }, [selectedDistrictId]);

  const handleCityChange = (cityId: string) => {
    setSelectedCityId(cityId);
    const found = cities.find((c) => c.id === cityId);
    if (found && found.postalCode) {
      setPostalCode(found.postalCode);
    }
  };

  const currentDeliveryCost =
    DELIVERY_OPTIONS.find((opt) => opt.id === selectedDeliveryMethod)?.cost ?? 450;

  const {
    subtotalLabel,
    shippingTotal,
    orderTotal,
    amountToFreeShipping,
    progressPercent,
    hasFreeShipping,
  } = getCartSummary(totalPrice, cartProducts.length, currentDeliveryCost);

  const { registerInputRef, getTooltip, copyFromRef, isCopied } =
    useCopyToClipboard({ defaultTooltip: "Copy" });

  const handleProceedToCheckout = async () => {
    setIsValidating(true);
    setValidationIssues([]);
    clearCartError();

    const res = await validateCart();
    setIsValidating(false);

    if (!res.valid && res.issues.length > 0) {
      setValidationIssues(res.issues.map((i) => i.issue));
      return;
    }

    router.push("/checkout-delivery-step-one");
  };

  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gap rbt-bg-color-white">
      <div className="container">
        {/* Title & Urgent Badge */}
        <div className="row row--12">
          <div className="col-lg-12">
            <div className="rbt-component-section-title d-flex justify-content-between align-items-center p-0 mb--24 border-0 flex-wrap gap-3">
              <h2 className="rbt-title mb-0">
                <span className="rbt-bold--text">Shopping Cart</span>
                <span className="b2 ml--12 rbt-text-color-gray-600 font-normal">
                  ({subtotalLabel})
                </span>
              </h2>

              <div className="d-flex align-items-center gap-3">
                {cartProducts.length > 0 && (
                  <button
                    type="button"
                    className="rbt-btn rbt-btn-sm rbt-btn-gray-light"
                    onClick={() => setShowClearConfirm(true)}
                  >
                    <i className="fa-regular fa-trash-can mr--6" /> Empty Cart
                  </button>
                )}

                {/* Temporarily hidden Max 20 units label (Figure 04a) */}
                {/* <div className="rbt-quick-info-tag d-flex">
                  <FireIcon />
                  <p className="mb-0">
                    Max <strong>20 units per item</strong> (Wholesale / Retail)
                  </p>
                </div> */}
              </div>
            </div>


            {/* Error or validation alert */}
            {(cartError || validationIssues.length > 0) && (
              <div
                className="alert alert-danger alert-dismissible fade show mb--24"
                role="alert"
              >
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-triangle-exclamation mr--12 fs-5" />
                  <div>
                    {cartError && <p className="mb-1 font-semibold">{cartError}</p>}
                    {validationIssues.map((issue, idx) => (
                      <p key={idx} className="mb-0 b3">
                        • {issue}
                      </p>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    clearCartError();
                    setValidationIssues([]);
                  }}
                  aria-label="Close"
                />
              </div>
            )}
          </div>
        </div>

        {/* Clear cart confirmation modal */}
        {showClearConfirm && (
          <div
            className="modal fade show d-block"
            tabIndex={-1}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content p-4">
                <h5 className="modal-title mb--12 font-bold">Clear Shopping Cart?</h5>
                <p className="rbt-text-color-gray-600 mb--24">
                  Are you sure you want to remove all items from your shopping cart? This
                  cannot be undone.
                </p>
                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="rbt-btn rbt-btn-sm rbt-btn-gray-light"
                    onClick={() => setShowClearConfirm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="rbt-btn rbt-btn-sm rbt-btn-primary"
                    onClick={() => {
                      clearCart();
                      setShowClearConfirm(false);
                    }}
                  >
                    Yes, Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row row--12 mt_dec--24">
          {/* Main Items Table */}
          <div className="col-12 col-md-12 col-lg-8 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray rbt-scrollable-content">
              <table className="rbt-transparent-table-one table-variation-one mb--0">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-5">
                        <div className="py-4">
                          <i className="fa-sharp fa-regular fa-cart-shopping fs-1 text-muted mb--16 d-block" />
                          <h5 className="rbt-bold--text mb--8">Your cart is empty</h5>
                          <p className="rbt-text-color-gray-600 mb--24">
                            Explore our electronics, mobile accessories, and gadgets to add items.
                          </p>
                          <Link
                            href="/shop-default"
                            className="rbt-btn rbt-btn-md rbt-btn-primary"
                          >
                            <i className="fa-regular fa-bag-shopping mr--8" /> Continue Shopping
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    cartProducts.map((product) => {
                      const itemTotalAmount = product.price * product.quantity;
                      const isOutOfStock =
                        product.inStock === false ||
                        product.isStockOut === true ||
                        product.isAvailable === false;
                      const isExceeding =
                        product.isExceedingStock === true ||
                        (typeof product.availableQuantity === "number" &&
                          product.quantity > product.availableQuantity);

                      return (
                        <tr
                          key={product.id}
                          className={isOutOfStock ? "table-danger" : ""}
                        >
                          <td>
                            <div className="cart-product-card">
                              <div className="product-thumbnail">
                                <Link
                                  href={`/product-single-default/${product.id}`}
                                >
                                  <Image
                                    alt={product.title || "Product image"}
                                    src={
                                      product.imgSrc ||
                                      "/assets/images/wishlist/wishlist-prd-1.webp"
                                    }
                                    width={120}
                                    height={100}
                                    className="rounded"
                                  />
                                </Link>
                                <button
                                  type="button"
                                  className="close-btn"
                                  onClick={() => removeProductFromCart(product.id)}
                                  aria-label="Remove item"
                                  title="Remove item"
                                >
                                  <i className="fa-solid fa-xmark" />
                                </button>
                              </div>

                              <div className="d-flex flex-column">
                                <h6 className="rbt-wish-product-name mb--4">
                                  <Link
                                    href={`/product-single-default/${product.id}`}
                                  >
                                    {product.title}
                                  </Link>
                                </h6>

                                {product.sku && (
                                  <span className="rbt-product-id b3 text-muted">
                                    SKU: #{product.sku}
                                  </span>
                                )}

                                {/* Wholesale indicator badge */}
                                {product.isWholesalePricingApplied && (
                                  <span className="badge bg-success text-white w-fit-content mt--4 px-2 py-1 b4">
                                    Wholesale Price Applied
                                  </span>
                                )}

                                {/* Stock warnings */}
                                {isOutOfStock && (
                                  <span className="badge bg-danger text-white w-fit-content mt--4 px-2 py-1 b4">
                                    Out of Stock
                                  </span>
                                )}
                                {!isOutOfStock && isExceeding && (
                                  <span className="badge bg-warning text-dark w-fit-content mt--4 px-2 py-1 b4">
                                    Exceeds Available Stock
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>

                          {/* Unit price with old price strikethrough if wholesale discount applies */}
                          <td>
                            <div>
                              <h6 className="price-text mb--0">
                                {formatCurrency(product.price)}
                              </h6>
                              {product.oldPrice && product.oldPrice > product.price && (
                                <span className="b3 text-decoration-line-through text-muted">
                                  {formatCurrency(product.oldPrice)}
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Quantity Selector with 20 limit constraint */}
                          <td>
                            <div className="rbt-qty-area rbt-qty-sm d-inline-flex align-items-center">
                              <button
                                type="button"
                                className="qty-item-btn qty-item-btn-decr"
                                onClick={() => {
                                  if (product.quantity > 1) {
                                    updateQuantity(product.id, product.quantity - 1);
                                  }
                                }}
                                disabled={product.quantity <= 1}
                                aria-label="Decrease quantity"
                              >
                                <i className="fa-solid fa-minus" />
                              </button>

                              <input
                                type="number"
                                className="items-qty-input text-center"
                                value={product.quantity}
                                min={1}
                                max={20}
                                onChange={(e) => {
                                  const val = parseInt(e.target.value, 10);
                                  if (!isNaN(val) && val >= 1 && val <= 20) {
                                    updateQuantity(product.id, val);
                                  }
                                }}
                              />

                              <button
                                type="button"
                                className="qty-item-btn qty-item-btn-incr"
                                onClick={() => {
                                  if (product.quantity < 20) {
                                    updateQuantity(product.id, product.quantity + 1);
                                  }
                                }}
                                disabled={product.quantity >= 20}
                                title={
                                  product.quantity >= 20
                                    ? "Maximum purchase limit is 20 units (FR-29)"
                                    : "Increase quantity"
                                }
                                aria-label="Increase quantity"
                              >
                                <i className="fa-solid fa-plus" />
                              </button>
                            </div>
                            <small className="d-block text-muted mt-1 b4">
                              Max 20 per item
                            </small>
                          </td>

                          {/* Line total */}
                          <td>
                            <h6 className="price-text font-bold mb--0">
                              <span className="rbt-bold--text">
                                {formatCurrency(itemTotalAmount)}
                              </span>
                            </h6>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Quick shopping action footer */}
            {cartProducts.length > 0 && (
              <div className="d-flex justify-content-between align-items-center mt--16 flex-wrap gap-2">
                <Link
                  href="/shop-default"
                  className="rbt-btn rbt-btn-sm rbt-btn-gray-light"
                >
                  <i className="fa-regular fa-arrow-left mr--6" /> Continue Shopping
                </Link>
                <span className="b3 text-muted">
                  Prices inclusive of applicable taxes. Delivery estimated at checkout.
                </span>
              </div>
            )}
          </div>

          {/* Right Sidebar: Order Summary & Sri Lanka Delivery Estimator */}
          <div className="col-12 col-md-12 col-lg-4 mt--24">
            <div className="rbt-sidebar-cart sticky-top">
              <div className="inner-wrapper">
                {/* Delivery Method Selection Widget */}
                <div className="rbt-sidebar-widget">
                  <div className="rbt-inner">
                    <div className="rbt-single-collapse-item">
                      <a
                        className="rbt-collapse-btn d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#rbt-delivery-options"
                        role="button"
                        aria-expanded="true"
                        aria-controls="rbt-delivery-options"
                      >
                        <h6 className="rbt-title rbt-text-bold mb--0">
                          <span className="mr--6 text-primary">
                            <i className="fa-light fa-truck-fast" />
                          </span>
                          Select Delivery Method
                        </h6>
                        <span className="rbt-icon">
                          <i className="fa-regular fa-chevron-down" />
                        </span>
                      </a>

                      <div className="collapse show" id="rbt-delivery-options">
                        <div className="rbt-offcanvas-inner-popup-card has-default-visible shipping-popup shadow-none p--0 bg-transparent">
                          <div className="rbt-offcanvas-card-inner">
                            <ul className="rbt-sidebar-list-wrapper liststyle mt--12">
                              {DELIVERY_OPTIONS.map((opt) => (
                                <li
                                  key={opt.id}
                                  className="rbt-check-group mb--8 p-2 rounded border"
                                  style={{
                                    borderColor:
                                      selectedDeliveryMethod === opt.id
                                        ? "var(--color-primary)"
                                        : "#e2e8f0",
                                    backgroundColor:
                                      selectedDeliveryMethod === opt.id
                                        ? "#f8fafc"
                                        : "transparent",
                                  }}
                                >
                                  <input
                                    id={`deliv-${opt.id}`}
                                    type="radio"
                                    name="delivery_method_radio"
                                    checked={selectedDeliveryMethod === opt.id}
                                    onChange={() => setSelectedDeliveryMethod(opt.id)}
                                  />
                                  <label
                                    htmlFor={`deliv-${opt.id}`}
                                    className="d-flex flex-column cursor-pointer ms-2"
                                  >
                                    <span className="d-flex justify-content-between font-bold">
                                      <span>{opt.name}</span>
                                      <span className="text-primary font-bold">
                                        {opt.cost === 0
                                          ? "FREE"
                                          : formatCurrency(opt.cost)}
                                      </span>
                                    </span>
                                    <small className="text-muted b4">
                                      {opt.description}
                                    </small>
                                  </label>
                                </li>
                              ))}
                            </ul>

                            {/* Sri Lanka Location Estimator */}
                            <p className="rbt-text-color-primary rbt-text-semi-bold b3 mb--8 mt--16">
                              <i className="fa-regular fa-location-dot mr--6" />
                              Estimate Delivery for Sri Lanka
                            </p>

                            <div className="rbt-input-field-grp mb--8">
                              <label className="b4 text-muted mb--4">District</label>
                              <select
                                className="form-select form-select-sm"
                                value={selectedDistrictId}
                                onChange={(e) => setSelectedDistrictId(e.target.value)}
                              >
                                {districts.map((d) => (
                                  <option key={d.id} value={d.id}>
                                    {d.name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="rbt-input-field-grp mb--8">
                              <label className="b4 text-muted mb--4">City / Area</label>
                              <select
                                className="form-select form-select-sm"
                                value={selectedCityId}
                                onChange={(e) => handleCityChange(e.target.value)}
                              >
                                {cities.map((c) => (
                                  <option key={c.id} value={c.id}>
                                    {c.displayName || c.name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            {postalCode && (
                              <div className="b4 text-muted mt--4">
                                Postal Code: <strong>{postalCode}</strong>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="rbt-separator rbt-separator-gray200 mb--16 mt--16" />

                    {/* Promotional Coupon Section */}
                    <div className="rbt-single-collapse-item">
                      <a
                        className="rbt-collapse-btn collapsed d-flex justify-content-between align-items-center"
                        data-bs-toggle="collapse"
                        href="#rbt-collapse-coupon"
                        role="button"
                        aria-expanded="false"
                        aria-controls="rbt-collapse-coupon"
                      >
                        <h6 className="rbt-title rbt-text-bold mb--0">
                          <span className="mr--6 text-primary">
                            <i className="fa-regular fa-ticket" />
                          </span>
                          Apply Promo Coupon
                        </h6>
                        <span className="rbt-icon">
                          <i className="fa-regular fa-chevron-down" />
                        </span>
                      </a>
                      <div className="collapse" id="rbt-collapse-coupon">
                        <div className="pt--12">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="e.g. TRANSASIA10"
                            />
                            <button
                              className="rbt-btn rbt-btn-sm rbt-btn-primary"
                              type="button"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary Card */}
                <div className="rbt-sidebar-widget mt--20">
                  <div className="rbt-inner">
                    <h5 className="font-bold mb--16">Order Summary</h5>

                    <div className="rbt-cart-subttotal d-flex justify-content-between mb--8">
                      <p className="mb-0 text-muted">Subtotal ({subtotalLabel})</p>
                      <p className="price font-semibold mb-0">
                        {formatCurrency(totalPrice)}
                      </p>
                    </div>

                    <div className="rbt-cart-subttotal d-flex justify-content-between mb--8">
                      <p className="mb-0 text-muted">Estimated Delivery</p>
                      <p className="price font-semibold mb-0">
                        {shippingTotal === 0 ? "FREE" : formatCurrency(shippingTotal)}
                      </p>
                    </div>

                    <hr className="my--12 rbt-bg-color-gray-200" />

                    <div className="rbt-cart-subttotal d-flex justify-content-between mb--16">
                      <p className="subtotal font-bold mb-0 fs-5">Total</p>
                      <p className="price font-bold text-primary mb-0 fs-5">
                        {formatCurrency(orderTotal)}
                      </p>
                    </div>

                    {/* Free shipping threshold progress temporarily hidden (Figure 05a) */}
                    {/* <div className="offer-progress-area mb--20">
                      <p className="offer-text b4 mb--6">
                        {hasFreeShipping ? (
                          <span className="text-success font-semibold">
                            <i className="fa-solid fa-circle-check mr--4" />
                            Free Delivery Unlocked!
                          </span>
                        ) : (
                          <>
                            Add <strong>{formatCurrency(amountToFreeShipping)}</strong>{" "}
                            more to get <strong>Free Courier Delivery</strong>
                          </>
                        )}
                      </p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Shipping Progress"
                        aria-valuenow={Math.round(progressPercent)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ height: "6px" }}
                      >
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div> */}

                    {/* Proceed to Checkout Action - alignment issue fixed (Figure 05b) */}
                    <div className="checkout-btn">
                      <button
                        type="button"
                        className="rbt-btn w-100 d-flex align-items-center justify-content-center rbt-btn-primary font-bold"
                        style={{
                          height: "54px",
                          lineHeight: "1",
                          borderRadius: "50px",
                          padding: "0 24px",
                          fontSize: "16px",
                        }}
                        onClick={handleProceedToCheckout}
                        disabled={cartProducts.length === 0 || isValidating}
                      >
                        {isValidating ? (
                          <span className="d-inline-flex align-items-center">
                            <i className="fa-solid fa-spinner fa-spin mr--8" />{" "}
                            Validating Stock...
                          </span>
                        ) : (
                          <span className="d-inline-flex align-items-center">
                            Proceed to Checkout{" "}
                            <i className="fa-solid fa-arrow-right ml--8" />
                          </span>
                        )}
                      </button>
                    </div>


                    <div className="text-center mt--16">
                      <small className="text-muted b4 d-block">
                        <i className="fa-solid fa-shield-check mr--4 text-success" />
                        Safe & Secure Sri Lankan Payments (Bank Transfer / COD / Card)
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
