"use client";

import { GridMatrixIcon, WaveSquareIcon } from "../../svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/price";
import { electronicsCardData } from "@/data/products/electronics";
import { allProducts } from "@/data/products";
import { fetchStorefrontProducts } from "@/lib/api";

interface SimplifiedProduct {
  id: string | number;
  title: string;
  price: number;
  oldPrice?: number;
  imgSrc: string;
  rating?: number;
  ratingCount?: number;
  category?: string[];
}

const STORAGE_KEY = "transasia_recently_viewed";

export default function RecomendedProducts({
  currentProduct,
  recentlyViewedProducts,
  recommendedProducts: propRecommendedProducts,
  parentClass = "rbt-tab rbt-product-single-details-tab rbt-fshape-tab",
}: {
  currentProduct?: Product;
  recentlyViewedProducts?: any[];
  recommendedProducts?: any[];
  parentClass?: string;
}) {
  const [activeTab, setActiveTab] = useState<"viewed" | "recommended">("viewed");
  const [recentlyViewed, setRecentlyViewed] = useState<SimplifiedProduct[]>([]);
  const [recommended, setRecommended] = useState<SimplifiedProduct[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!currentProduct && recentlyViewedProducts) {
      setRecentlyViewed(
        recentlyViewedProducts.map((p) => ({
          id: p.id,
          title: p.title,
          price: Number(p.price),
          oldPrice: p.oldPrice ? Number(p.oldPrice) : undefined,
          imgSrc: p.imgSrc || "/assets/images/product-img/electronics/electronics-bg-trans-10-a-1.webp",
          rating: p.rating ?? 5,
          ratingCount: p.ratingCount ?? p.reviewCount ?? 10,
        }))
      );
    }

    if (!currentProduct && propRecommendedProducts) {
      setRecommended(
        propRecommendedProducts.map((p) => ({
          id: p.id,
          title: p.title,
          price: Number(p.price),
          oldPrice: p.oldPrice ? Number(p.oldPrice) : undefined,
          imgSrc: p.imgSrc || "/assets/images/product-img/electronics/electronics-bg-trans-10-a-1.webp",
          rating: p.rating ?? 5,
          ratingCount: p.ratingCount ?? p.reviewCount ?? 10,
        }))
      );
    }

    if (!currentProduct) return;

    // --- 1. Manage Recently Viewed via localStorage ---
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let list: SimplifiedProduct[] = stored ? JSON.parse(stored) : [];

      if (currentProduct && currentProduct.id) {
        // Remove current product if already exists
        list = list.filter((p) => String(p.id) !== String(currentProduct.id));
        // Prepend current product
        list.unshift({
          id: currentProduct.id,
          title: currentProduct.title,
          price: Number(currentProduct.price),
          oldPrice: currentProduct.oldPrice ? Number(currentProduct.oldPrice) : undefined,
          imgSrc: currentProduct.imgSrc || "/assets/images/product-img/electronics/electronics-bg-trans-10-a-1.webp",
          rating: currentProduct.rating ?? 5,
          ratingCount: currentProduct.reviewCount ?? currentProduct.ratingCount ?? 15,
          category: currentProduct.category,
        });

        // Limit to 10 stored items
        if (list.length > 10) {
          list = list.slice(0, 10);
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      }

      // Display recently viewed excluding current product
      const othersViewed = list.filter(
        (p) => !currentProduct || String(p.id) !== String(currentProduct.id)
      );
      setRecentlyViewed(othersViewed);
    } catch (err) {
      console.error("Error managing recently viewed products:", err);
    }

    // --- 2. Calculate Recommended Products (from Live Admin API with static fallback) ---
    async function loadRecommendations() {
      try {
        const live = await fetchStorefrontProducts();
        const pool = live && live.length > 0 ? live : [...electronicsCardData, ...allProducts];
        const currentCat = currentProduct?.category?.[0];
        const currentId = currentProduct ? String(currentProduct.id) : "";

        const uniqueMap = new Map<string, Product>();
        for (const p of pool) {
          const pId = String(p.id);
          if (pId && pId !== currentId && !uniqueMap.has(pId)) {
            uniqueMap.set(pId, p);
          }
        }

        const available = Array.from(uniqueMap.values());

        let matched = currentCat
          ? available.filter((p) => p.category?.some((c) => c.toLowerCase() === currentCat.toLowerCase()))
          : [];

        if (matched.length < 4) {
          const others = available.filter((p) => !matched.some((m) => String(m.id) === String(p.id)));
          matched = [...matched, ...others];
        }

        const simplified: SimplifiedProduct[] = matched.slice(0, 4).map((p) => ({
          id: p.id,
          title: p.title,
          price: Number(p.price),
          oldPrice: p.oldPrice ? Number(p.oldPrice) : undefined,
          imgSrc: p.imgSrc || "/assets/images/product-img/electronics/electronics-bg-trans-10-a-1.webp",
          rating: p.rating ?? 5,
          ratingCount: p.reviewCount ?? p.ratingCount ?? 12,
        }));

        setRecommended(simplified);
      } catch (err) {
        console.error("Error calculating recommendations:", err);
      }
    }

    loadRecommendations();
  }, [currentProduct, recentlyViewedProducts, propRecommendedProducts]);

  const renderProductList = (items: SimplifiedProduct[], emptyMessage: string) => {
    if (items.length === 0) {
      return (
        <div className="text-center p--24 text-muted" style={{ padding: "30px 16px" }}>
          <i
            className="fa-regular fa-clock-rotate-left mb--12 d-block"
            style={{ fontSize: "28px", color: "#94a3b8" }}
          />
          <p className="b3 m-0" style={{ color: "#64748b" }}>
            {emptyMessage}
          </p>
        </div>
      );
    }

    return (
      <div className="rbt-list-card-box border-0 p-0">
        {items.map((prod) => (
          <div
            key={String(prod.id)}
            className="rbt-card rbt-product-card rbt-list-view-variation list-view-md"
            style={{
              padding: "14px 0",
              margin: 0,
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <div
              className="inner d-flex align-items-center justify-content-between"
              style={{ gap: "12px", width: "100%" }}
            >
              <div className="rbt-card-body" style={{ flex: "1 1 auto", minWidth: 0, padding: 0 }}>
                <div className="rbt-card-rating d-flex align-items-center mb--4" style={{ gap: "4px" }}>
                  <ul
                    className="rbt-rating-icon-list d-flex"
                    style={{ gap: "2px", margin: 0, padding: 0, listStyle: "none" }}
                  >
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <li key={i}>
                          <i
                            className={`fa-solid fa-star ${
                              i < Math.round(prod.rating || 5) ? "rbt-rated-icon" : "rbt-unrated-icon"
                            }`}
                            style={{ fontSize: "11px" }}
                          />
                        </li>
                      ))}
                  </ul>
                  <span className="rating-digit text-muted" style={{ fontSize: "11px" }}>
                    ({prod.ratingCount || 10})
                  </span>
                </div>
                <h6
                  className="rbt-card-title m-0"
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.35",
                    fontWeight: 600,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    wordBreak: "break-word",
                  }}
                >
                  <Link href={`/product/${prod.id}`} className="text-dark">
                    {prod.title}
                  </Link>
                </h6>
                <div
                  className="pricing-part d-flex align-items-center flex-wrap mt--6"
                  style={{ gap: "6px" }}
                >
                  {prod.oldPrice && (
                    <del className="price-text text-muted" style={{ fontSize: "11px" }}>
                      {formatCurrency(prod.oldPrice)}
                    </del>
                  )}
                  <span
                    className="price-text font-weight-bold"
                    style={{ fontSize: "13px", color: "var(--color-primary)" }}
                  >
                    {formatCurrency(prod.price)}
                  </span>
                </div>
              </div>
              <div
                className="rbt-card-img"
                style={{
                  width: "72px",
                  height: "72px",
                  minWidth: "72px",
                  maxWidth: "72px",
                  flexShrink: 0,
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  href={`/product/${prod.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    alt={prod.title}
                    src={prod.imgSrc}
                    width={72}
                    height={72}
                    style={{ objectFit: "contain", maxHeight: "64px", maxWidth: "64px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={parentClass}>
      <div className="rbt-tab-nav-wrapper">
        <ul className="nav nav-tabs" id="rbt-product-recomTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link${activeTab === "viewed" ? " active" : ""}`}
              onClick={() => setActiveTab("viewed")}
            >
              Recently Viewed
              <span className="rbt-fshape-portion rbt-fshape-left-portion">
                <GridMatrixIcon />
              </span>
              <span className="rbt-fshape-portion rbt-fshape-right-portion">
                <WaveSquareIcon />
              </span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button"
              className={`nav-link${activeTab === "recommended" ? " active" : ""}`}
              onClick={() => setActiveTab("recommended")}
            >
              Recommended
              <span className="rbt-fshape-portion rbt-fshape-left-portion">
                <GridMatrixIcon />
              </span>
              <span className="rbt-fshape-portion rbt-fshape-right-portion">
                <WaveSquareIcon />
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" style={{ marginTop: "12px" }}>
        <div className={`tab-pane fade${activeTab === "viewed" ? " active show" : ""}`}>
          <div className="rbt-single-prd-viewed-prd-area">
            {renderProductList(recentlyViewed, "No other recently viewed products yet.")}
          </div>
        </div>
        <div className={`tab-pane fade${activeTab === "recommended" ? " active show" : ""}`}>
          <div className="rbt-single-prd-recom-prd-area">
            {renderProductList(recommended, "No recommendations available at this time.")}
          </div>
        </div>
      </div>
    </div>
  );
}
