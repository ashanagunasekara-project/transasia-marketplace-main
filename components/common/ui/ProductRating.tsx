import Link from "next/link";
import type { Product } from "@/types";

interface ProductRatingProps {
  product?: Pick<Product, "id" | "rating" | "reviewCount" | "ratingCount">;
  rating?: number | null;
  reviewCount?: number | null;
  detailsPageLink?: string;
  className?: string;
  starClass?: string;
  children?: React.ReactNode;
}

export default function ProductRating({
  product,
  rating: ratingProp,
  reviewCount: reviewCountProp,
  detailsPageLink: customLink,
  className,
  starClass,
  children,
}: ProductRatingProps) {
  const rating = Number(ratingProp ?? product?.rating ?? 5);
  const reviewCount =
    reviewCountProp ?? product?.reviewCount ?? product?.ratingCount ?? 0;

  if (rating <= 0 && reviewCount <= 0) {
    return null;
  }

  const linkHref =
    customLink ||
    (product?.id ? `/product/${product.id}?tab=reviews#reviews` : null);

  const wrapperClassName = ["rbt-card-rating", className]
    .filter(Boolean)
    .join(" ");

  const starsContent = (
    <>
      <ul className={`rbt-rating-icon-list mb-0 ${starClass ?? ""}`.trim()}>
        {Array.from({ length: 5 }, (_, index) => {
          const isFull = index + 1 <= Math.floor(rating);
          const isHalf = !isFull && index < rating;
          return (
            <li key={index}>
              <i
                className={`fa-solid ${
                  isFull
                    ? "fa-star rbt-rated-icon"
                    : isHalf
                    ? "fa-star-half-stroke rbt-rated-icon"
                    : "fa-star rbt-unrated-icon"
                }`}
              />
            </li>
          );
        })}
      </ul>
      {reviewCount != null ? (
        <p className="rating-digit ms-1 mb-0">({reviewCount})</p>
      ) : null}
    </>
  );

  return (
    <div className={wrapperClassName}>
      {linkHref ? (
        <Link
          href={linkHref}
          className="rbt-rating-link d-inline-flex align-items-center text-decoration-none"
          title={`${rating} out of 5 stars (${reviewCount} reviews) - Click to view customer reviews`}
        >
          {starsContent}
        </Link>
      ) : (
        <div className="d-inline-flex align-items-center">{starsContent}</div>
      )}
      {children}
    </div>
  );
}
