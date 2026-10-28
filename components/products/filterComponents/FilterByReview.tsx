"use client";

import { Product } from "@/types";

const ratings = [
  { id: 1, stars: 5 },
  { id: 2, stars: 4 },
  { id: 3, stars: 3 },
  { id: 4, stars: 2 },
  { id: 5, stars: 1 },
];

export default function FilterByReview({
  selectedItems,
  onChange,
  getFilterCount,
}: {
  selectedItems: number[];
  onChange: (value: number) => void;
  getFilterCount?: (fn: (product: Product) => boolean) => number;
}) {
  const handleToggle = (stars: number) => {
    onChange(stars);
  };

  return (
    <>
      {ratings.map((rating) => {
        const isActive = selectedItems.includes(rating.stars);
        const count = getFilterCount
          ? getFilterCount((p) => (p.rating ?? 0) >= rating.stars)
          : null;

        return (
          <li
            key={rating.id}
            className={`rbt-review-group ${isActive ? "active" : ""}`}
            style={{ marginBottom: "6px" }}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                handleToggle(rating.stars);
              }}
              role="button"
              tabIndex={0}
              className={`rbt-card-rating d-flex align-items-center justify-content-between w-100 text-left ${
                isActive ? "active" : ""
              }`}
              style={{
                cursor: "pointer",
                padding: "6px 8px",
                borderRadius: "6px",
                background: isActive ? "rgba(19, 102, 231, 0.08)" : "transparent",
                border: isActive ? "1px solid var(--color-primary)" : "1px solid transparent",
                transition: "all 0.2s ease",
              }}
            >
              <div className="d-flex align-items-center">
                <ul className="rbt-rating-icon-list d-flex p-0 m-0 list-unstyled">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} style={{ marginRight: "2px" }}>
                      <i
                        className={`fa-solid fa-star ${
                          i < rating.stars ? "rbt-rated-icon" : "rbt-unrated-icon"
                        }`}
                        style={{
                          color: i < rating.stars ? "#ffb800" : "#d1d5db",
                          fontSize: "13px",
                        }}
                      />
                    </li>
                  ))}
                </ul>
                <span className="rbt-rating-text ms-2" style={{ fontSize: "13px" }}>
                  {rating.stars < 5 ? "& Up" : "5 Star"}
                </span>
              </div>
              {count !== null && (
                <span
                  className="rbt-label-count"
                  style={{ fontSize: "12px", color: "var(--color-gray-500)" }}
                >
                  ({count})
                </span>
              )}
            </a>
          </li>
        );
      })}
    </>
  );
}
