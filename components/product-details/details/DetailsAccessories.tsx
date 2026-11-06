"use client";
import { useEffect, useState } from "react";
import OfferBadge from "@/components/common/ui/OfferBadge";
import ProductRating from "@/components/common/ui/ProductRating";
import { FireIcon } from "../../svg-icons";
import Link from "next/link";
import Image from "next/image";

import Slider4 from "../sliders/Slider4";
import Facts from "@/components/common/other-components/Facts";
import ProductActionPanel from "../ProductActionPanel";
import RecomendedProducts from "../recommandedProducts/RecomendedProducts";

import Tooltip from "@/components/common/ui/Tooltip";
import { formatCurrency } from "@/lib/price";

import { Product } from "@/types";
import ModalTriggerButton from "@/components/action-buttons/ModalTriggerButton";
import { useAuthStore } from "@/context/authStore";
import { fetchStorefrontProductByIdOrSlug } from "@/lib/api";

export default function DetailsAccessories({ product }: { product: Product }) {
  const [liveProduct, setLiveProduct] = useState<Product>(product);
  const { token, activeView, user } = useAuthStore();

  useEffect(() => {
    let isMounted = true;
    async function syncPrice() {
      try {
        const idOrSlug = String(product.id || product.slug);
        const updated = await fetchStorefrontProductByIdOrSlug(idOrSlug, {
          token,
          viewMode: activeView,
        });
        if (isMounted && updated) {
          setLiveProduct(updated);
        }
      } catch (err) {
        // Fallback to initial
      }
    }

    if (token || activeView === "WHOLESALE") {
      syncPrice();
    } else {
      setLiveProduct(product);
    }

    return () => {
      isMounted = false;
    };
  }, [token, activeView, product]);

  const displayProduct = liveProduct || product;

  return (
    <div className="rbt-component-area rbt-single-product-area rbt-bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row row--12 mt_dec--24 justify-content-center">
          <div className="col-xl-9 col-lg-12 mt--24">
            <div className="row row--12 justify-content-center mt_dec--16">
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-media-area rbt-single-product-media-area-dflt d-flex rbt-gap--24">
                  <Slider4 product={displayProduct} />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12 mt--16">
                <div className="rbt-single-product-content ptb--0 rbt-product-variations">
                  <div
                    className="rbt-quick-access-banner rbt-quick-access-banner-sm rbt-bg-color-brand-300 rbt-rounded--8 alert alert-dismissible fade show"
                    role="alert"
                  >
                    <div className="rbt-quick-access-banner-banner-content d-flex align-items-center">
                      <div className="rbt-icon-img">
                        <Image
                          alt="Ecommerce Gift Box Icon"
                          src="/assets/images/icons/product-single/gift-box-01-sm.svg"
                          width={44}
                          height={44}
                        />
                      </div>
                      <p className="rbt-quick-access-banner-title b3 mb-0">
                        {user?.isWholesaleApproved
                          ? `Wholesale Account (${user.wholesaleCustomerId || "Approved"}) • Active: ${activeView === "WHOLESALE" ? "Wholesale Pricing" : "Retail Pricing"}`
                          : "Register to buy at wholesale prices for your shop."}
                      </p>
                    </div>
                    {!user?.isWholesaleApproved && (
                      <div className="rbt-quick-access-banner-action-btn">
                        <ModalTriggerButton
                          openModalName="signinModal"
                          className="rbt-btn rbt-btn-xs"
                        >
                          <i className="fa-light fa-user mr--4" /> Register Now
                        </ModalTriggerButton>
                      </div>
                    )}
                    <a
                      href="#"
                      className="rbt-cancel-btn"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark" />
                    </a>
                  </div>
                  <a
                    href="/shop"
                    className="rbt-card-subtitle rbt-card-categories-text mt--16"
                  >
                    {displayProduct.category?.[0] || displayProduct.categoryName || "Electronics"}
                  </a>
                  <h2 className="rbt-card-title mt--12">{displayProduct.title}</h2>
                  <p className="description-text b2 mt--16">
                    {displayProduct.description ||
                      "High quality authentic product backed by official warranty and fast islandwide delivery."}
                  </p>
                  <div className="rbt-info-wrapper d-flex mt--28">
                    <ProductRating product={displayProduct} className="mt--0"><Facts /></ProductRating>
                  </div>
                  <div className="rbt-info-wrapper d-flex justify-content-between mt--16">
                    <div className="rbt-store-price-1">
                      <div className="pricing-part mt--0 d-flex align-items-center flex-wrap" style={{ gap: "8px" }}>
                        {displayProduct.oldPrice ? (
                          <del className="price-text">
                            {formatCurrency(displayProduct.oldPrice)}
                          </del>
                        ) : (
                          ""
                        )}
                        <span className="price-text">
                          {formatCurrency(displayProduct.price)}
                        </span>
                        {displayProduct.isWholesalePricingApplied && (
                          <span
                            className="badge bg-primary text-white"
                            style={{
                              fontSize: "11px",
                              fontWeight: 700,
                              padding: "4px 8px",
                              borderRadius: "4px",
                              letterSpacing: "0.5px",
                            }}
                          >
                            Wholesale Price
                          </span>
                        )}
                        <OfferBadge product={displayProduct} className="rbt-offer-badge-md" />
                      </div>
                    </div>
                    <div className="prd-info-section">
                      <div className="prd-id-text">
                        <p className="text-bold">
                          Brand:{" "}
                          <span style={{ fontWeight: 600 }}>
                            {displayProduct.brandName || displayProduct.filterBrands?.[0] || "Transasia"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-flex mt--24 rbt-gap--12 flex-wrap">
                    <div className="prd-info-section">
                      <a
                        className="rbt-quick-info-tag d-flex align-items-center rbt-gap--8 rbt-flash-animation"
                        href="#"
                      >
                        <FireIcon />
                        <p>
                          <strong>{product.stockLabel || (product.inStock ? "In Stock" : "Out of Stock")}</strong>
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-prd-qty-area">
                      <p className="prd-qty-txt">
                        <strong>{product.stockLabel || `${product.inStock ? "Available in Stock" : "Out of Stock"}`}</strong>
                      </p>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Shipping-progress"
                        aria-valuenow={product.inStock ? 80 : 0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className={`progress-bar ${product.inStock ? "w-75 bg-success" : "w-100 bg-danger"}`}
                        />
                      </div>
                    </div>
                  </div>
                  <ProductActionPanel product={product} />
                  <hr className="rbt-separator rbt-separator-gray200 mt--24" />
                  <div className="rbt-info-wrapper d-block mt--24">
                    <ul className="product-details-list shipment-details-list">
                      {product.productDetails && product.productDetails.length > 0 ? (
                        product.productDetails.map((detail, idx) => (
                          <li key={idx}>
                            <span className="rbt-bold--text mr--4">{detail.label} : </span>
                            <span className="text">
                              {Array.isArray(detail.text) ? detail.text.join(", ") : detail.text}
                            </span>
                          </li>
                        ))
                      ) : (
                        <>
                          <li>
                            <span className="rbt-bold--text mr--4">SKU : </span>
                            <span className="text">{product.sku || "N/A"}</span>
                          </li>
                          <li>
                            <span className="rbt-bold--text mr--4">Category : </span>
                            <span className="text">{product.category?.[0] || product.categoryName || "General"}</span>
                          </li>
                        </>
                      )}
                      <li>
                        <span className="icon">
                          <i className="fa-sharp fa-regular fa-truck" />
                        </span>
                        <div className="right-content">
                          <span className="rbt-bold--text mr--4">Ships :</span>
                          <span className="text">2–3 weeks Free Shipping</span>
                        </div>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fa-regular fa-bag-shopping" />
                        </span>
                        <div className="right-content">
                          <span className="rbt-bold--text mr--4">
                            7 Days Returns :
                          </span>
                          <span className="text">
                            Free return within 7 days of purchase
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <hr className="rbt-separator rbt-separator-gray200 mt--24 mb--24" />
                  <div className="rbt-info-wrapper d-block mt--24">
                    <div className="rbt-info-box rbt-bg-color-brand-50 p--16 text-center" style={{ borderRadius: "10px" }}>
                      <div className="rbt-payment-info-container">
                        <ul className="payment-img-link d-flex align-items-center justify-content-center m-0 p-0" style={{ gap: "16px", listStyle: "none" }}>
                          <li style={{ background: "#ffffff", padding: "6px 14px", borderRadius: "8px", border: "1px solid #e2e8f0", display: "inline-flex", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                            <Image
                              alt="Visa"
                              src="/assets/images/dashboard/visa-card.svg"
                              width={48}
                              height={30}
                              style={{ objectFit: "contain" }}
                            />
                          </li>
                          <li style={{ background: "#ffffff", padding: "6px 14px", borderRadius: "8px", border: "1px solid #e2e8f0", display: "inline-flex", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                            <Image
                              alt="Mastercard"
                              src="/assets/images/dashboard/mastercard.svg"
                              width={48}
                              height={30}
                              style={{ objectFit: "contain" }}
                            />
                          </li>
                        </ul>
                        <span className="b3 rbt-text-medium text-center rbt-text-color-heading mt--8 d-block" style={{ fontWeight: 500, color: "#64748b" }}>
                          <i className="fa-solid fa-lock mr--4" style={{ color: "#16a34a" }} /> Guaranteed safe &amp; secure checkout
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 mt--24 rbt-single-mobile-view-sidebar">
            <RecomendedProducts currentProduct={displayProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
