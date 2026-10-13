"use client";

import { useState } from "react";
import { WaveThinIcon } from "../../svg-icons";

export interface ReviewData {
  title: string;
  desc: string;
  rating: number;
  name?: string;
}

export default function AddReviewForm({
  onAddReview,
}: {
  onAddReview?: (review: ReviewData) => void;
}) {
  const [rating, setRating] = useState<number>(5);
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (onAddReview) {
      onAddReview({
        title: title.trim() || "Customer Review",
        desc: message.trim(),
        rating,
        name: name.trim() || "Verified Buyer",
      });
    }

    setTitle("");
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="rbt-reviews-form mt--32">
      {submitted && (
        <div
          className="alert alert-success d-flex align-items-center mb--24"
          role="alert"
          style={{
            backgroundColor: "#e8f5e9",
            color: "#2e7d32",
            border: "1px solid #c8e6c9",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <i className="fa-solid fa-circle-check mr--8" style={{ fontSize: "20px" }} />
          <div>
            <strong>Review Submitted!</strong> Thank you for reviewing this product.
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="rbt-contact-form">
        <div className="rbt-fshape-box-outline-style">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-component-section-title rbt-contact-form-title rbt-bg-color-white">
                <h6 className="rbt-title">
                  <span className="rbt-bold--text">Add A Review</span>
                </h6>
                <span className="rbt-fshape-right-portion">
                  <WaveThinIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="rbt-fshape-box rbt-bg-color-white rbt-contact-form-fshape">
            <div className="row">
              <div className="col-12 mb--16">
                <label className="mb--8 d-block font-weight-bold">Your Rating:</label>
                <div className="rbt-contact-input-field-grp">
                  <div className="d-flex align-items-center" style={{ gap: "8px", cursor: "pointer" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        style={{
                          background: "none",
                          border: "none",
                          padding: "4px",
                          cursor: "pointer",
                          color: star <= rating ? "#f59e0b" : "#d1d5db",
                          fontSize: "24px",
                        }}
                      >
                        <i className="fa-solid fa-star" />
                      </button>
                    ))}
                    <span className="ml--8 text-muted font-weight-500">
                      ({rating} of 5 stars)
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 mb--16">
                <div className="rbt-contact-input-field-grp">
                  <label htmlFor="reviewer-name">Your Name</label>
                  <input
                    className="rbt-contact-input-field"
                    type="text"
                    id="reviewer-name"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 mb--16">
                <div className="rbt-contact-input-field-grp">
                  <label htmlFor="review-title">Review Headline</label>
                  <input
                    className="rbt-contact-input-field"
                    type="text"
                    id="review-title"
                    placeholder="e.g. Great quality!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 mb--16">
                <div className="rbt-contact-input-field-grp">
                  <label htmlFor="message">Your Review Comments *</label>
                  <textarea
                    className="rbt-contact-input-field"
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Write your feedback regarding the product performance, quality, and delivery..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 d-flex justify-content-end mt--8">
                <button type="submit" className="rbt-btn rbt-btn-md">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
