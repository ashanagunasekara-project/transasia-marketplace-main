"use client";

import { CloseIcon } from '../svg-icons';
import Image from "next/image";
import Link from "next/link";
import { instaModalProducts } from "@/data/products/modalProducts";
import { useManagedModalPanel } from "@/hooks/useManagedModalPanel";
import { formatCurrency } from "@/lib/price";

export default function InstaModal() {
  const { close } = useManagedModalPanel("instaModal");
  return (
    <div
      className="rbt-default-modal modal fade rbt-insta-single-modal has-rbt-top-folder-shape"
      id="instaModal"
      tabIndex={-1}
      aria-labelledby="instaModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-0">
          <div className="rbt-folder-shape-right-portion">
            <CloseIcon />
          </div>
          <div className="modal-header">
            <button
              type="button"
              className="rbt-round-btn rbt-modal-dis-btn"
              aria-label="Close"
              onClick={close}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="rbt-top-folder-shape-wrapper">
            <div className="modal-body p-0 rbt-bg-color-white rbt-content-trs-portion">
              <div className="inner rbt-insta-single-modal">
                <div className="row row--16">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rbt-single-insta-img">
                      <Image
                      className='image-auto'
                        alt="Unimart instagram Single Post Image"
                        src="/assets/images/insta-posts/insta-post-single-01.webp"
                        width={1408}
                        height={1400}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="rbt-component-section-title text-center">
                          <h4 className="rbt-title" id="instaModalLabel">
                            Products In
                            <span className="rbt-bold--text ml--4">Image</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-right-modal-content">
                      <div className="row row--12 mb--24 mt_dec--24">
                        {instaModalProducts.map((item) => (
                          <div className="col-lg-6 col-xl-6 col-6 mt--24" key={item.id}>
                            <div className="rbt-card rbt-product-card">
                              <div className="rbt-card-img top-rounded-md rbt-bg-color-gray-light">
                                <Link href={`/product-single-default/${item.id}`}>
                                  <Image
                                    alt="Card Image"
                                    src={item.imgSrc}
                                    width={item.imgWidth || item.width || 548}
                                    height={item.imgHeight || item.height || 462}
                                  />
                                </Link>
                                {item.badge && (
                                  <div
                                    className={`rbt-product-badge ${item.badge.bg || "rbt-product-badge-bg-primary"} rbt-badge-top-left--position`}
                                  >
                                    {item.badge.text}
                                  </div>
                                )}
                              </div>
                              <div className="rbt-card-body">
                                <Link
                                  href="/shop-by-categories"
                                  className="rbt-card-subtitle rbt-card-categories-text"
                                >
                                  {item.category?.join(", ")}
                                </Link>
                                <h6 className="rbt-card-title">
                                  <Link href={`/product-single-default/${item.id}`}>
                                    {item.title}
                                  </Link>
                                </h6>
                                <div className="rbt-card-rating">
                                  <ul className="rbt-rating-icon-list">
                                    {[...Array(item.rating || 5)].map((_, i) => (
                                      <li key={i}>
                                        <i className="fa-solid fa-star rbt-rated-icon" />
                                      </li>
                                    ))}
                                  </ul>
                                  <p className="rating-digit">({item.reviewCount})</p>
                                </div>
                                <div className="pricing-part">
                                  {item.oldPrice && (
                                    <del className="price-text">
                                      {formatCurrency(item.oldPrice)}
                                    </del>
                                  )}
                                  <span className="price-text">
                                    {formatCurrency(item.price)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
