"use client";

import { GridMatrixIcon, WaveSquareIcon } from "../../svg-icons";
import Image from "next/image";
import AddReviewForm, { ReviewData } from "./AddReviewForm";
import { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { formatCurrency } from "@/lib/price";

interface ReviewItem {
  id: number | string;
  author: string;
  rating: number;
  date: string;
  title: string;
  desc: string;
  imgSrc?: string;
}

function getInitials(name: string): string {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function DescriptionTab1({
  product,
  parentClass = "rbt-tab rbt-product-single-details-tab rbt-fshape-tab",
}: {
  product?: Product;
  parentClass?: string;
}) {
  const [activeTab, setActiveTab] = useState<
    "description" | "specification" | "reviews" | "question"
  >("description");

  const [reviews, setReviews] = useState<ReviewItem[]>([]);

  const productId = product?.id ? String(product.id) : "general";

  // Load reviews from localStorage for this specific product
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(`transasia_reviews_${productId}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setReviews(parsed);
          return;
        }
      }
      setReviews([]);
    } catch (err) {
      console.error("Error loading reviews:", err);
      setReviews([]);
    }
  }, [productId]);

  // Handle URL hash or param to activate reviews tab
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      if (hash === "#reviews" || params.get("tab") === "reviews") {
        setActiveTab("reviews");
        setTimeout(() => {
          const el = document.getElementById("rbt-single-productTab");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      }
    }
  }, []);

  const handleAddReview = (newReview: ReviewData) => {
    const item: ReviewItem = {
      id: Date.now(),
      author: newReview.name || "Verified Customer",
      rating: newReview.rating,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      title: newReview.title,
      desc: newReview.desc,
    };
    const updated = [item, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem(`transasia_reviews_${productId}`, JSON.stringify(updated));
    } catch (err) {
      console.error("Error saving review:", err);
    }
  };

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : product?.rating
      ? Number(product.rating).toFixed(1)
      : "0.0";

  return (
    <>
      <div className={parentClass}>
        <div className="rbt-tab-nav-wrapper">
          <ul className="nav nav-tabs" id="rbt-single-productTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                type="button"
                className={`nav-link${activeTab === "description" ? " active" : ""}`}
                onClick={() => setActiveTab("description")}
              >
                Description
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
                className={`nav-link${activeTab === "specification" ? " active" : ""}`}
                onClick={() => setActiveTab("specification")}
              >
                Specification
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
                className={`nav-link${activeTab === "reviews" ? " active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews ({reviews.length})
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
                className={`nav-link${activeTab === "question" ? " active" : ""}`}
                onClick={() => setActiveTab("question")}
              >
                Questions
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

        <div className="tab-content">
          {/* DESCRIPTION TAB */}
          {activeTab === "description" && (
            <div className="tab-pane fade active show">
              <div className="rbt-product-single-description">
                <h5 className="rbt-block-title mb--0">
                  {product?.title || "Product Overview"}
                </h5>
                <p className="rbt-block-desc b1 mb--0 mt--12" style={{ whiteSpace: "pre-line" }}>
                  {product?.description ||
                    "This genuine product is fully backed by official warranty, inspected for high quality, and ready for immediate islandwide dispatch from Transasia inventory."}
                </p>

                {product?.imgSrc && (
                  <div
                    className="rbt-block-banner-img mt--32 text-center"
                    style={{
                      maxHeight: "400px",
                      overflow: "hidden",
                      borderRadius: "12px",
                      background: "#f8f9fb",
                      padding: "20px",
                    }}
                  >
                    <Image
                      alt={product.title || "Product Banner"}
                      src={product.imgSrc}
                      width={600}
                      height={400}
                      style={{ objectFit: "contain", maxHeight: "360px" }}
                    />
                  </div>
                )}

                <div className="rbt-prd-feature-area mt--32">
                  <div className="row row--12 mt_dec--24 rbt-mobile-row">
                    <div className="col-lg-3 col-md-6 col-12 mt--24">
                      <div className="rbt-prd-feature-card rbt-bg-color-brand-50 rbt-curved-style-box text-center p--16">
                        <span className="icon" style={{ fontSize: "28px", color: "var(--color-primary)" }}>
                          <i className="fa-solid fa-truck-fast" />
                        </span>
                        <p className="title b1 font-weight-bold mt--8">Fast Delivery</p>
                        <p className="desc b2">Islandwide shipping within 2-4 business days</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt--24">
                      <div className="rbt-prd-feature-card rbt-bg-color-brand-50 rbt-curved-style-box text-center p--16">
                        <span className="icon" style={{ fontSize: "28px", color: "var(--color-primary)" }}>
                          <i className="fa-solid fa-shield-halved" />
                        </span>
                        <p className="title b1 font-weight-bold mt--8">Official Warranty</p>
                        <p className="desc b2">100% genuine guaranteed with after-sales support</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt--24">
                      <div className="rbt-prd-feature-card rbt-bg-color-brand-50 rbt-curved-style-box text-center p--16">
                        <span className="icon" style={{ fontSize: "28px", color: "var(--color-primary)" }}>
                          <i className="fa-solid fa-rotate-left" />
                        </span>
                        <p className="title b1 font-weight-bold mt--8">7 Days Returns</p>
                        <p className="desc b2">Hassle-free replacement policy for defective units</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt--24">
                      <div className="rbt-prd-feature-card rbt-bg-color-brand-50 rbt-curved-style-box text-center p--16">
                        <span className="icon" style={{ fontSize: "28px", color: "var(--color-primary)" }}>
                          <i className="fa-solid fa-credit-card" />
                        </span>
                        <p className="title b1 font-weight-bold mt--8">Secure Payment</p>
                        <p className="desc b2">Encrypted card payments and Bank Transfers accepted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SPECIFICATION TAB */}
          {activeTab === "specification" && (
            <div className="tab-pane fade active show">
              <div className="rbt-prd-single-specification-info">
                <div className="rbt-single-specification">
                  <label className="b1 title">Product Title</label>
                  <div className="rbt-specification-content">
                    <span className="desc font-weight-bold">{product?.title || "N/A"}</span>
                  </div>
                </div>
                <div className="rbt-single-specification">
                  <label className="b1 title">SKU</label>
                  <div className="rbt-specification-content">
                    <span className="desc">{product?.sku || "N/A"}</span>
                  </div>
                </div>
                <div className="rbt-single-specification">
                  <label className="b1 title">Category</label>
                  <div className="rbt-specification-content">
                    <span className="desc">{product?.category?.[0] || product?.categoryName || "Electronics"}</span>
                  </div>
                </div>
                <div className="rbt-single-specification">
                  <label className="b1 title">Brand</label>
                  <div className="rbt-specification-content">
                    <span className="desc">{product?.brandName || product?.filterBrands?.[0] || "Transasia"}</span>
                  </div>
                </div>
                <div className="rbt-single-specification">
                  <label className="b1 title">Price</label>
                  <div className="rbt-specification-content">
                    <span className="desc font-weight-bold">{formatCurrency(product?.price)}</span>
                  </div>
                </div>
                <div className="rbt-single-specification">
                  <label className="b1 title">Availability Status</label>
                  <div className="rbt-specification-content">
                    <span className={`desc ${product?.inStock ? "text-success font-weight-bold" : "text-danger"}`}>
                      {product?.stockLabel || (product?.inStock ? "In Stock" : "Out of Stock")}
                    </span>
                  </div>
                </div>
                {product?.productDetails?.map((detail, index) => (
                  <div className="rbt-single-specification" key={index}>
                    <label className="b1 title">{detail.label}</label>
                    <div className="rbt-specification-content">
                      <span className="desc">
                        {Array.isArray(detail.text) ? detail.text.join(", ") : detail.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REVIEWS TAB */}
          {activeTab === "reviews" && (
            <div className="tab-pane fade active show">
              <div className="rbt-product-single-reviews-area">
                <div className="rbt-review-statistics-section">
                  <div className="row row--12 mt_dec--24">
                    <div className="col-md-6 mt--24">
                      <div className="rbt-avr-review">
                        <span className="rbt-abr-review-number-text">{avgRating}</span>
                        <div className="rbt-abr-review-content">
                          <ul className="rbt-rating-icon-list">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <li key={i}>
                                <i
                                  className={`fa-solid fa-star${
                                    i <= Math.round(Number(avgRating)) ? " rbt-rated-icon" : " rbt-unrated-icon"
                                  }`}
                                />
                              </li>
                            ))}
                          </ul>
                          <p className="rating-text b3 mt--8 rbt-text-color-gray-700">
                            Based on {reviews.length} Verified Review{reviews.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt--24">
                      <div className="rbt-rating-breakdown">
                        {[5, 4, 3, 2, 1].map((star) => {
                          const count = reviews.filter((r) => Math.round(r.rating) === star).length;
                          const percent = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                          return (
                            <div className="rbt-rating-item" key={star}>
                              <span className="icon">
                                <i className="fa-solid fa-star rbt-rated-icon" />
                              </span>
                              <span className="number-text">{star}</span>
                              <div
                                className="progress"
                                role="progressbar"
                                aria-label={`${star} star reviews`}
                                aria-valuenow={percent}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <div
                                  className="progress-bar"
                                  style={{ width: `${percent}%` }}
                                />
                              </div>
                              <span className="number-text">{count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rbt-prd-single-reviews-list-area mt--24">
                  {reviews.length === 0 ? (
                    <div
                      className="rbt-no-reviews-box text-center p--32 mt--24 mb--24"
                      style={{
                        background: "#f8fafc",
                        border: "1px dashed #cbd5e1",
                        borderRadius: "12px",
                        padding: "36px 20px",
                      }}
                    >
                      <i
                        className="fa-regular fa-comment-pen mb--12 d-block"
                        style={{ fontSize: "32px", color: "#64748b" }}
                      />
                      <h6 className="mb--8" style={{ fontWeight: 600 }}>
                        No Reviews Yet
                      </h6>
                      <p className="b2 text-muted mb--0" style={{ maxWidth: "420px", margin: "0 auto" }}>
                        There are no customer reviews for this product yet. Have you purchased this item? Be the first to write a review below!
                      </p>
                    </div>
                  ) : (
                    <ul className="rbt-comment-list">
                      {reviews.map((review) => (
                        <li className="comment" key={review.id}>
                          <div className="comment-body">
                            <div className="single-comment">
                              <div className="comment-img">
                                <div
                                  style={{
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 700,
                                    fontSize: "18px",
                                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                  }}
                                >
                                  {getInitials(review.author)}
                                </div>
                              </div>
                              <div className="comment-inner">
                                <div className="d-flex align-items-center justify-content-between">
                                  <h6 className="mb--4">{review.author}</h6>
                                  <div className="comment-meta">
                                    <div className="time-spent text-muted" style={{ fontSize: "12px" }}>
                                      {review.date}
                                    </div>
                                  </div>
                                </div>
                                <ul className="rbt-rating-icon-list mb--8">
                                  {[...Array(5)].map((_, i) => (
                                    <li key={i}>
                                      <i
                                        className={`fa-solid fa-star${
                                          i < review.rating ? " rbt-rated-icon" : " rbt-unrated-icon"
                                        }`}
                                      />
                                    </li>
                                  ))}
                                </ul>
                                <div className="comment-text">
                                  <p className="title font-weight-bold mb--4">{review.title}</p>
                                  <p className="b1 text-muted">{review.desc}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <AddReviewForm onAddReview={handleAddReview} />
              </div>
            </div>
          )}

          {/* FAQ / QUESTIONS TAB */}
          {activeTab === "question" && (
            <div className="tab-pane fade active show">
              <div className="rbt-prd-single-faq-section">
                <div className="rbt-section-title-area rbt-bg-color-gray-light p--16 mb--16 rbt-rounded--8">
                  <h6 className="rbt-block-title mb--0">
                    Frequently Asked Questions for {product?.title}
                  </h6>
                </div>
                <div className="rbt-accordion-style rbt-accordion-01 accordion">
                  <div className="accordion-item card mb--12" style={{ border: "1px solid #e9ecef", borderRadius: "8px", padding: "16px" }}>
                    <h6 className="mb--8 font-weight-bold">Is this product 100% genuine and original?</h6>
                    <p className="text-muted mb--0">
                      Yes. All items sold at Transasia are sourced directly from verified manufacturers and distributors, complete with genuine warranty.
                    </p>
                  </div>
                  <div className="accordion-item card mb--12" style={{ border: "1px solid #e9ecef", borderRadius: "8px", padding: "16px" }}>
                    <h6 className="mb--8 font-weight-bold">How long does shipping take?</h6>
                    <p className="text-muted mb--0">
                      Orders placed before 2 PM are processed the same day and delivered within 1 to 3 business days across the country.
                    </p>
                  </div>
                  <div className="accordion-item card mb--12" style={{ border: "1px solid #e9ecef", borderRadius: "8px", padding: "16px" }}>
                    <h6 className="mb--8 font-weight-bold">What is the return policy?</h6>
                    <p className="text-muted mb--0">
                      We offer a 7-day hassle-free return or replacement warranty in case of any manufacturing defects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
