"use client";
import Image from "next/image";

import { useContextElement } from "@/context/Context";
import { stickyBottomProducts } from "@/data/products/others";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Product } from "@/types/product";
import { useAuthStore } from "@/context/authStore";
import { fetchStorefrontProductByIdOrSlug } from "@/lib/api";

export default function BottomStickyProduct({ product }: { product?: Product }) {
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);
  const [liveProduct, setLiveProduct] = useState<Product | undefined>(product);
  const { token, activeView } = useAuthStore();

  useEffect(() => {
    let isMounted = true;
    async function syncPrice() {
      if (!product) return;
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

  const displayProduct = liveProduct || product || (stickyBottomProducts[0] as unknown as Product);

  useEffect(() => {
    const handleScroll = () => {
      const topPos = window.scrollY || window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const filled = (topPos + windowHeight) / documentHeight;
      const targetPosition = documentHeight * 0.36;

      setActive(topPos > targetPosition && filled !== 1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`rbt-minicart-bottom-section rbt-product-card${active ? " rbt-minicart-bottom-section-active" : ""}`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between mt_dec--12">
          <div className="col-lg-6 col-md-12 mt--12">
            <div className="rbt-prd-info-section">
              <div className="rbt-prd-img">
                <Link
                  href={`/product/${displayProduct.id}`}
                >
                  <Image
                    alt="Ecommerce Product Image"
                    src={displayProduct.imgSrc}
                    width="220"
                    height="168"
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
              <div className="rbt-content">
                <h6 className="rbt-title mb--0 rbt-text-bold">
                  <Link
                    href={`/product/${displayProduct.id}`}
                  >
                    {displayProduct.title}
                  </Link>
                </h6>
                <p className="rbt-desc">
                  {displayProduct.description?.slice(0, 60) || "Official warranty and fast islandwide delivery"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt--12 d-flex align-items-center justify-content-end" style={{ gap: "12px" }}>
            <span className="price-text" style={{ fontSize: "18px", fontWeight: "bold" }}>
              ${Number(displayProduct.price).toFixed(2)}
            </span>
            {displayProduct.isWholesalePricingApplied && (
              <span
                className="badge bg-primary text-white"
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "3px 6px",
                  borderRadius: "4px",
                }}
              >
                Wholesale Price
              </span>
            )}
            <button
              type="button"
              className="rbt-btn rbt-btn-sm"
              onClick={() => addProductToCart && addProductToCart(displayProduct)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
