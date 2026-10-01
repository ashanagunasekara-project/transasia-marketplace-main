"use client";

import { GridMatrixIcon, WaveSquareIcon } from "../../svg-icons";
import Image from "next/image";
import AddReviewForm, { ReviewData } from "./AddReviewForm";
import { useState } from "react";
import { Product } from "@/types/product";

interface ReviewItem {
  id: number | string;
  author: string;
  rating: number;
  date: string;
  title: string;
  desc: string;
  imgSrc?: string;
}

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: "Kamal Perera",
    rating: 5,
    date: "2 days ago",
    title: "Excellent condition and authentic product",
    desc: "Order was delivered quickly and in pristine packaging. Item matches description completely. Very pleased with Transasia service!",
    imgSrc: "/assets/images/reviewer-img/reviewer-01.webp",
  },
  {
    id: 2,
    author: "Nimal Fernando",
    rating: 5,
    date: "1 week ago",
    title: "Great value for money",
    desc: "Top notch quality and responsive customer service. Definitely buying from here again.",
    imgSrc: "/assets/images/reviewer-img/reviewer-02.webp",
  },
];

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

  const [reviews, setReviews] = useState<ReviewItem[]>(DEFAULT_REVIEWS);

  const handleAddReview = (newReview: ReviewData) => {
    const item: ReviewItem = {
      id: Date.now(),
      author: newReview.name || "Verified Customer",
      rating: newReview.rating,
      date: "Just now",
      title: newReview.title,
      desc: newReview.desc,
      imgSrc: "/assets/images/reviewer-img/reviewer-01.webp",
    };
    setReviews([item, ...reviews]);
  };

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
      : "5.0";

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
                  <div className="rbt-block-banner-img mt--32 text-center" style={{ maxHeight: "400px", overflow: "hidden", borderRadius: "12px", background: "#f8f9fb", padding: "20px" }}>
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
                    <span className="desc font-weight-bold">${Number(product?.price || 0).toFixed(2)}</span>
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
                                <i className="fa-solid fa-star rbt-rated-icon" />
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
                        {[
                          { star: 5, val: 100, count: reviews.filter((r) => r.rating === 5).length },
                          { star: 4, val: 20, count: reviews.filter((r) => r.rating === 4).length },
                          { star: 3, val: 0, count: reviews.filter((r) => r.rating === 3).length },
                          { star: 2, val: 0, count: reviews.filter((r) => r.rating === 2).length },
                          { star: 1, val: 0, count: reviews.filter((r) => r.rating === 1).length },
                        ].map((item) => (
                          <div className="rbt-rating-item" key={item.star}>
                            <span className="icon">
                              <i className="fa-solid fa-star rbt-rated-icon" />
                            </span>
                            <span className="number-text">{item.star}</span>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-label="Shipping-progress"
                              aria-valuenow={item.count ? 80 : 0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar"
                                style={{ width: `${item.count ? Math.min((item.count / reviews.length) * 100, 100) : 0}%` }}
                              />
                            </div>
                            <span className="number-text">{item.count}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rbt-prd-single-reviews-list-area mt--24">
                  <ul className="rbt-comment-list">
                    {reviews.map((review) => (
                      <li className="comment" key={review.id}>
                        <div className="comment-body">
                          <div className="single-comment">
                            <div className="comment-img">
                              <Image
                                alt="Author Avatar"
                                src={review.imgSrc || "/assets/images/reviewer-img/reviewer-01.webp"}
                                width={72}
                                height={72}
                                style={{ borderRadius: "50%" }}
                              />
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
                                        i < review.rating ? " rbt-rated-icon" : ""
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
