"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/price";

interface OrderItem {
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  imgSrc?: string;
}

interface LastOrderData {
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  deliveryMethod: string;
  shippingAddress: {
    name: string;
    email: string;
    mobile: string;
    address: string;
    city: string;
    district: string;
    postcode: string;
  };
  paymentMethod: string;
  createdAt: string;
}

export default function CheckoutComplete() {
  const [order, setOrder] = useState<LastOrderData>({
    orderNumber: "TA-2026-0001",
    items: [],
    subtotal: 0,
    shippingFee: 450,
    totalAmount: 450,
    deliveryMethod: "Courier delivery",
    shippingAddress: {
      name: "Customer",
      email: "support@transasia.lk",
      mobile: "077 339 2727",
      address: "TransAsia Distribution Center",
      city: "Colombo",
      district: "Colombo",
      postcode: "00100",
    },
    paymentMethod: "Cash on delivery",
    createdAt: new Date().toISOString(),
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedOrder = localStorage.getItem("transasia_last_order");
        if (storedOrder) {
          const parsed = JSON.parse(storedOrder);
          setOrder(parsed);
        } else {
          // Fallback to latest checkout data if user directly navigated
          const storedShipping = localStorage.getItem("transasia_checkout_shipping");
          const storedDelivery = localStorage.getItem("transasia_checkout_delivery");

          const shipping = storedShipping ? JSON.parse(storedShipping) : {};
          const delivery = storedDelivery ? JSON.parse(storedDelivery) : {};

          setOrder((prev) => ({
            ...prev,
            orderNumber: `TA-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
            deliveryMethod: delivery.deliveryMethod || "Courier delivery",
            shippingFee: delivery.shippingFee ?? 450,
            shippingAddress: {
              name: `${shipping.firstName || ""} ${shipping.lastName || ""}`.trim() || "Customer",
              email: shipping.email || "customer@example.com",
              mobile: shipping.mobile || "077 123 4567",
              address: shipping.address || "No. 45, Galle Road",
              city: shipping.city || "Colombo",
              district: shipping.district || "Colombo",
              postcode: shipping.postcode || "00100",
            },
          }));
        }
      } catch (err) {
        console.error("Failed to load last order summary:", err);
      }
    }
  }, []);

  const handleCopyOrderNumber = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(order.orderNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="rbt-component-area rbt-cart-page rbt-section-gapBottom rbt-bg-color-white">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          {/* Main Order Confirmation Section */}
          <div className="col-xl-9 col-lg-10 col-12 mt--24">
            <div className="rbt-transparent-table-one-wrapper rbt-has-bg-gray p-4 p-md-5 rounded-4 shadow-sm bg-white border">
              {/* Header with success badge */}
              <div className="d-flex align-items-center border-bottom pb-4 mb-4 flex-wrap gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white bg-success"
                  style={{ width: "56px", height: "56px", fontSize: "24px" }}
                >
                  <i className="fa-solid fa-check" />
                </div>
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-primary-subtle text-primary border px-2 py-1 fs-sm fw-bold">
                      Order #{order.orderNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyOrderNumber}
                      className="btn btn-sm btn-link p-0 text-muted fs-xs text-decoration-none"
                      title="Copy order number"
                    >
                      <i className="fa-regular fa-copy me-1" />
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <h1 className="h3 mb-0 mt-1 text-dark fw-bold">
                    Thank you for your order!
                  </h1>
                </div>
                <div className="ms-auto text-end">
                  <span className="text-muted fs-xs d-block">{formattedDate}</span>
                  <span className="badge bg-success-subtle text-success fs-xs mt-1">
                    Confirmed & Processing
                  </span>
                </div>
              </div>

              {/* Confirmation intro text */}
              <div className="alert alert-success d-flex align-items-center p-3 mb-4 rounded-3 fs-sm">
                <i className="fa-regular fa-circle-check fs-5 text-success me-3" />
                <div>
                  An order confirmation receipt has been generated for{" "}
                  <strong>{order.shippingAddress.name}</strong>. We will notify you via
                  email at <strong>{order.shippingAddress.email}</strong> and SMS at{" "}
                  <strong>{order.shippingAddress.mobile}</strong> as soon as your package
                  is dispatched.
                </div>
              </div>

              {/* Order Metadata Cards */}
              <div className="row g-3 mb-4">
                {/* 1. Delivery Details */}
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded-3 bg-light border h-100">
                    <div className="d-flex align-items-center text-muted mb-2 fs-xs fw-bold text-uppercase">
                      <i className="fa-regular fa-location-dot me-2 text-primary" />
                      Delivery Address
                    </div>
                    <p className="fw-bold mb-1 text-dark fs-sm">
                      {order.shippingAddress.name}
                    </p>
                    <p className="mb-1 text-muted fs-xs">
                      {order.shippingAddress.mobile}
                    </p>
                    <p className="mb-0 text-muted fs-xs">
                      {order.shippingAddress.address},{" "}
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.district} District
                      <br />
                      Postal Code:{" "}
                      <strong>{order.shippingAddress.postcode}</strong>
                    </p>
                  </div>
                </div>

                {/* 2. Fulfillment Method */}
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded-3 bg-light border h-100">
                    <div className="d-flex align-items-center text-muted mb-2 fs-xs fw-bold text-uppercase">
                      <i className="fa-regular fa-truck me-2 text-primary" />
                      Shipping Method
                    </div>
                    <p className="fw-bold mb-1 text-dark fs-sm">
                      {order.deliveryMethod}
                    </p>
                    <p className="mb-1 text-muted fs-xs">
                      {order.deliveryMethod.includes("Pickup")
                        ? "Ready for collection at Colombo Head Office."
                        : "Island-wide Doorstep Courier Delivery."}
                    </p>
                    <p className="mb-0 text-muted fs-xs">
                      Estimated Delivery:{" "}
                      <strong className="text-dark">1 - 3 Business Days</strong>
                    </p>
                  </div>
                </div>

                {/* 3. Payment Method */}
                <div className="col-12 col-md-4">
                  <div className="p-3 rounded-3 bg-light border h-100">
                    <div className="d-flex align-items-center text-muted mb-2 fs-xs fw-bold text-uppercase">
                      <i className="fa-regular fa-credit-card me-2 text-primary" />
                      Payment Details
                    </div>
                    <p className="fw-bold mb-1 text-dark fs-sm">
                      {order.paymentMethod}
                    </p>
                    <p className="mb-1 text-muted fs-xs">
                      Payment Status:{" "}
                      <span className="badge bg-warning-subtle text-warning-emphasis">
                        {order.paymentMethod === "Cash on delivery"
                          ? "Pay on Delivery"
                          : "Processing"}
                      </span>
                    </p>
                    <p className="mb-0 text-dark fs-sm fw-bold">
                      Total: {formatCurrency(order.totalAmount)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ordered Items Summary */}
              {order.items && order.items.length > 0 && (
                <div className="mb-4">
                  <h3 className="h6 text-dark fw-bold mb-3 border-bottom pb-2">
                    Purchased Items ({order.items.length})
                  </h3>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead className="table-light fs-xs text-muted">
                        <tr>
                          <th style={{ width: "60px" }}>Item</th>
                          <th>Product Name</th>
                          <th className="text-center">Qty</th>
                          <th className="text-end">Price</th>
                          <th className="text-end">Total</th>
                        </tr>
                      </thead>
                      <tbody className="fs-sm">
                        {order.items.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div
                                className="rounded overflow-hidden bg-light border"
                                style={{ width: "48px", height: "48px" }}
                              >
                                {item.imgSrc ? (
                                  <Image
                                    src={item.imgSrc}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                    className="object-fit-cover w-100 h-100"
                                  />
                                ) : (
                                  <div className="d-flex align-items-center justify-content-center h-100 text-muted fs-xs">
                                    <i className="fa-regular fa-box" />
                                  </div>
                                )}
                              </div>
                            </td>
                            <td>
                              <span className="fw-medium text-dark">{item.title}</span>
                            </td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-end text-muted">
                              {formatCurrency(item.price)}
                            </td>
                            <td className="text-end fw-semibold text-dark">
                              {formatCurrency(item.price * item.quantity)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={4} className="text-end text-muted border-0 pb-1 pt-3">
                            Subtotal:
                          </td>
                          <td className="text-end border-0 pb-1 pt-3">
                            {formatCurrency(order.subtotal)}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4} className="text-end text-muted border-0 py-1">
                            Shipping Fee:
                          </td>
                          <td className="text-end border-0 py-1">
                            {order.shippingFee === 0
                              ? "Free"
                              : formatCurrency(order.shippingFee)}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={4} className="text-end fw-bold fs-6 text-dark border-top pt-2">
                            Total Paid / Payable:
                          </td>
                          <td className="text-end fw-bold fs-6 text-primary border-top pt-2">
                            {formatCurrency(order.totalAmount)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-3 border-top">
                <Link
                  href="/shop"
                  className="rbt-btn splash-btn icon-reverse-left rbt-rounded--4"
                >
                  <span className="icon-left">
                    <i className="fa-sharp fa-regular fa-arrow-left mr--4" />
                  </span>
                  <span>Continue Shopping</span>
                  <span className="icon-right">
                    <i className="fa-regular fa-arrow-left ml--4" />
                  </span>
                </Link>

                <div className="text-muted fs-xs">
                  Need help? Contact Colombo Hotline:{" "}
                  <a
                    href="tel:0773392727"
                    className="text-primary fw-bold text-decoration-none"
                  >
                    077 339 2727
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Temporarily hidden: "You May Also Like" section as requested */}
          {/*
          <div className="col-xl-4 col-lg-12 mt--24">
            <div className="row row--12">
              <div className="col-12 text-center">
                <h5 className="title mb--0">
                  <span className="rbt-bold--text">You May Also Like</span>
                </h5>
              </div>
            </div>
            <div className="row row--12 rbt-mobile-row">
              {furnitureSliderProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="col-xl-6 col-lg-3 col-sm-6 col-12 mt--24">
                  ...
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}
