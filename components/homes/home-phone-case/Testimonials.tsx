import { CheckmarkSmallIcon } from "../../svg-icons";
import { reviews } from "@/data/testimonials";

import Image from "next/image";
import Link from "next/link";
export default function Testimonials() {
  return (
    <div className="rbt-component-area rbt-product-review-area rbt-section-gap2 rbt-bg-color-gray-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rbt-component-section-title text-center border-0 p-0 mb--32">
              <h2 className="rbt-title">
                Customers<span className="rbt-bold--text"> Reviews</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Start Testimonial Card Area */}
        <div className="row row--12 mt_dec--24 rbt-mobile-row">
          {/* Start Single Card  */}
          {reviews.map((review, index) => {
            const productId = review.product?.id;
            const productHref = `/product-single-phone-case/${productId}`;
            return (
              <div
                key={index}
                className="col-lg-4 col-xl-4 col-xxl-4 col-md-6 col-sm-12 col-12 mt--24"
              >
                <div
                  className={`rbt-product-review rbt-review-wth-product rbt-scroll-trigger fade_in animation-order-${
                    index + 1
                  }`}
                >
                  <div className="rbt-product-review-inner rbt-bg-color-white">
                    <div className="rbt-review-top-section">
                      <h6 className="rbt-review-title">{review.title}</h6>
                      <p className="rbt-review-date b3 mt--8 mb--0">
                        {review.date}
                      </p>
                      <ul className="rbt-rating-icon-list mt--16 mb--0 rbt-rating-icon-lg">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <li key={starIndex}>
                            <i
                              className={`fa-solid fa-star ${
                                starIndex < (review.rating ?? 0)
                                  ? "rbt-rated-icon"
                                  : ""
                              }`}
                            />
                          </li>
                        ))}
                      </ul>
                      <p className="rbt-reviewed-text mt--16 mb--0">
                        {review.text}
                      </p>
                      <div className="rbt-reviewer-inf">
                        <span className="rbt-reviewer-name b1">
                          {review.name}
                        </span>
                        {review.verified && (
                          <div className="rbt-reviewer-chk-badge">
                            <CheckmarkSmallIcon />
                            <span className="rbt-reviewer-chk">
                              Verified Reviewer
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    {review.product && (
                      <div className="rbt-review-bottom-section">
                        <div className="rbt-review-bottom-left-part">
                          <div className="rbt-review-prd-img">
                            <Link href={productHref}>
                              <Image
                                alt="eCommerce Product Image"
                                src={review.product?.imgSrc}
                                width={312}
                                height={445}
                              />
                            </Link>
                          </div>
                          <p className="rbt-review-prd-title">
                            <Link href={productHref}>
                              {review.product?.title}
                            </Link>
                          </p>
                        </div>
                        <div className="rbt-review-bottom-right-part">
                          <Link href={`/cart`} className="rbt-cart-button">
                            <i className="fa-regular fa-cart-shopping" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* End Single Card  */}
        </div>
        {/* End Testimonial Card Area */}
      </div>
    </div>
  );
}
