"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard10 from "@/components/product-cards/ProductCard10";
import { useUiElement } from "@/context/uiStore";
import { electronicsCardData } from "@/data/products/electronics";
import Link from "next/link";

const POPULAR_SEARCHES = [
  { label: "Smartphones & Mobile", query: "smartphones" },
  { label: "Cables & Fast Chargers", query: "cable" },
  { label: "Audio & Headphones", query: "headphones" },
  { label: "Smart Light & Bulbs", query: "light" },
  { label: "Power Banks", query: "power bank" },
  { label: "Gaming Accessories", query: "gaming" },
  { label: "Cameras & Drones", query: "camera" },
  { label: "Adapters & Converters", query: "adapter" },
];

export default function SearchDropdownCommon() {
  const { commonSearchOpen, closeCommonSearch } = useUiElement();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim();
    closeCommonSearch();
    if (query) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
    } else {
      router.push("/shop");
    }
  };

  const handleKeywordClick = (query: string) => {
    closeCommonSearch();
    router.push(`/shop?search=${encodeURIComponent(query)}`);
  };

  const trendingProducts = electronicsCardData.slice(0, 4);

  return (
    <div
      id="header-common-search-dropdown"
      role="dialog"
      aria-modal="false"
      aria-label="Sticky header product search panel"
      className={`rbt-search-dropdown rbt-common-search-dropdown-activation${commonSearchOpen ? " active" : ""}`}
    >
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title border-0 p-0 text-center">
              <h4 className="rbt-title text-start text-md-center">
                <span className="rbt-bold--text">Search For Products</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form className="rbt-search-form" onSubmit={handleSearch}>
              <div className="input-section position-relative w-100 mr--12 mr_sm--4">
                <input
                  className="search-input"
                  type="text"
                  placeholder="What Are You Looking For?"
                  aria-label="Search products"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i
                  className="fa-sharp fa-regular inner-search-icon fa-magnifying-glass"
                  aria-hidden="true"
                />
                {searchTerm.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    aria-label="Clear search"
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      color: "#94a3b8",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                )}
              </div>
              <div className="submit-btn">
                <button
                  type="submit"
                  className="rbt-btn btn-md"
                  style={{ backgroundColor: "var(--color-primary, #0d6efd)", color: "#ffffff" }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt--16">
          <div className="col-lg-12">
            <div className="border-0 p-0 text-left title-sm-fsize">
              <h6 className="title">
                <span className="rbt-bold--text">Popular searches</span>
              </h6>
            </div>
          </div>
          <div className="rbt-search-list-wrapper rbt-tag-list rbt-tag-list-rounded-lg mt--8">
            {POPULAR_SEARCHES.map((item, index) => (
              <button
                key={`${item.label}-${index}`}
                type="button"
                onClick={() => handleKeywordClick(item.query)}
                className="rbt-btn rbt-btn-xs rbt-btn-gray-light"
                style={{
                  borderRadius: "20px",
                  margin: "4px 6px 4px 0",
                  fontSize: "13px",
                  padding: "6px 14px",
                  border: "1px solid #e2e8f0",
                  background: "#f8fafc",
                  cursor: "pointer",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="rbt-separator-mid ptb--24">
          <hr className="rbt-separator m-0" />
        </div>
        {/* Start Trending Products Area */}
        <div className="row">
          <div className="col-lg-12">
            <div className="border-0 p-0 text-left title-sm-fsize">
              <h6 className="title">
                <span className="rbt-bold--text">Trending Products</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="row row--12 mt_dec--24">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6 mt--24 mt_sm--16"
            >
              <ProductCard10 product={product} />
            </div>
          ))}
        </div>
        {/* End Trending Products Area */}
      </div>
    </div>
  );
}
